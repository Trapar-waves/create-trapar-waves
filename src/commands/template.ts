import type { Packument } from "@npm/types";
import type { TemplateProvider } from "giget";
import type { Argv } from "yargs";
import { execSync } from "node:child_process";
import { destr } from "destr";
import { downloadTemplate } from "giget";
import { ofetch } from "ofetch";
import { bold } from "picocolors";
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
  const projectName = await logger.prompt("What is project name?", {
    type: "text",
  });

  const orgList = await ofetch<OrgRepos>("https://ungh.cc/orgs/Trapar-waves/repos", { parseResponse: destr });

  const templateName = await logger.prompt("choose template", {
    type: "select",
    options: orgList.repos.map(item => `${bold(item.name)} ${item.description ?? ""}`),
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
  const { source, dir } = await downloadTemplate(`npm:react-antd-pro`, {
    dir: projectName,
    providers: { npm: npmRainbow },
  });
  logger.log(`project downloading,${source},${dir}`);
}
