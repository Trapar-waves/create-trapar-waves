import type { Packument } from "@npm/types";
import type { TemplateProvider } from "giget";
import type { Argv } from "yargs";
import { execSync } from "node:child_process";
import { note, outro } from "@clack/prompts";
import { destr } from "destr";
import { downloadTemplate } from "giget";
import { ofetch } from "ofetch";
import { bold, cyan, dim, reset } from "picocolors";
import { logger as rslog } from "rslog";
import { joinURL } from "ufo";
import { logger } from "../logger";

interface GreetingArgv {}

export const command = "$0";
export const describe = "Template download tools";
export const aliases = ["g"];

export function builder(yargs: Argv<GreetingArgv>): Argv {
  return yargs;
}

interface OrgRepos {
  repos: Array<{ name: string; description: string | null }>;
}

export async function handler() {
  rslog.greet("Create Trapar Waves Template");
  const projectName = await logger.prompt("Project name?", {
    type: "text",
  });

  const orgList = await ofetch<OrgRepos>("https://ungh.cc/orgs/Trapar-waves/repos", { parseResponse: destr });

  const templateName = await logger.prompt("Choose template", {
    type: "select",
    options: orgList.repos.map(item => ({ label: `${bold(item.name)} ${item.description ?? ""}`, value: item.name })),
  });

  const registry = execSync("npm get registry --global").toString();
  const npmData = await ofetch<Packument>(
    joinURL(registry.trim(), "@trapar-waves", templateName),
    { parseResponse: destr },
  );
  const latestVersion = npmData["dist-tags"].latest;
  if (!latestVersion) {
    logger.error("未找到任何版本！");
    return;
  }
  logger.log(latestVersion);

  const npmRainbow: TemplateProvider = async (input) => {
    return {
      name: "npm",
      tar: joinURL(
        registry.trim(),
        "@trapar-waves",
        input,
        "-",
        `${input}-${latestVersion}.tgz`,
      ),
    };
  };
  const { dir } = await downloadTemplate(`npm:react-antd-pro`, {
    dir: projectName,
    providers: { npm: npmRainbow },
  });

  const nextSteps = [
    `1. ${cyan(`cd ${dir}`)}`,
    `2. ${cyan("git init")} ${dim("(optional)")}`,
    `3. ${cyan(`pnpm install`)}`,
    `4. ${cyan(`pnpm run dev`)}`,
  ];
  note(nextSteps.map(step => reset(step)).join("\n"), "Next steps");
  outro("All set, happy coding!");
}
