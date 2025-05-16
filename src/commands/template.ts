import type { Packument } from "@npm/types";
import type { TemplateProvider } from "giget";
import type { Argv } from "yargs";
import { execSync } from "node:child_process";
import { note, outro } from "@clack/prompts";
import { createList } from "@trapar-waves/captain";
import { destr } from "destr";
import { downloadTemplate } from "giget";
import { ofetch } from "ofetch";
import { bold, cyan, dim, gray, reset } from "picocolors";
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

export async function handler() {
  rslog.greet("Create Trapar Waves Template");
  const projectName = await logger.prompt("Project name?", {
    type: "text",
  });

  const templateName = await logger.prompt("Choose template", {
    type: "select",
    options: createList.map(item =>
      ({
        label: `${bold(item.name)} ${item.description ? gray(item.description) : ""}`,
        value: item.name,
      })),
  });

  const registry = execSync("npm get registry --global").toString();
  const npmData = await ofetch<Packument>(
    joinURL(registry.trim(), templateName),
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
        input,
        "-",
        `${input.replace("@trapar-waves/", "")}-${latestVersion}.tgz`,
      ),
    };
  };
  const { dir } = await downloadTemplate(`npm:${templateName}`, {
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
