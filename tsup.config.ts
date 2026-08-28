import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["bin/run.ts"],
  format: ["cjs"],
  sourcemap: false,
  splitting: false,
});
