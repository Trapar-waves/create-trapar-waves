import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["bin/run.ts"],
  format: ["cjs"],
  splitting: false,
  sourcemap: false,
  clean: true,
});
