import type { CommandModule } from "yargs";
import { bgBlue, bold, red } from "picocolors";
import yargs from "yargs";
import { commands } from "../src";

// eslint-disable-next-line node/prefer-global/process
const run = yargs(process.argv.slice(2));
run.usage(
  bgBlue(
    `Welcome to the CLI application powered by ${bold(
      red("cli-typescript-starter"),
    )}!
      See more on https://github.com/kucherenko/cli-typescript-starter`,
  ),
);
for (const command of commands) {
  run.command(command as CommandModule);
}
// eslint-disable-next-line ts/no-unused-expressions
run.demandCommand(1, "You need at least one command before moving on").help().argv;
