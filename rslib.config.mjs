import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "cjs",
    },
  ],
  source: {
    entry: {
      run: "./bin/run.ts",
    },
  },
  output: {
    cleanDistPath: true,
    sourceMap: false,
  },
});
