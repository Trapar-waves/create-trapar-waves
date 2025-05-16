import type { CommandModule } from "yargs";
import yargs from "yargs";
import { commands } from "../src";

// eslint-disable-next-line node/prefer-global/process
const run = yargs(process.argv.slice(2));

for (const command of commands) {
  run.command(command as CommandModule);
}
// eslint-disable-next-line ts/no-unused-expressions
run.demandCommand(1, "You need at least one command before moving on").help().argv;
