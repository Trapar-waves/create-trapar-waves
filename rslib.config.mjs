import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "cjs",
    },
  ],
  output: {
    cleanDistPath: true,
    sourceMap: false,
  },
  source: {
    entry: {
      run: "./bin/run.ts",
    },
  },
});
