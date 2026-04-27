import { antfu } from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
}, {
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  files: ["pnpm-workspace.yaml"],
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});
