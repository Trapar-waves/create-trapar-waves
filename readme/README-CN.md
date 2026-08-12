# create-trapar-waves

![npm version](https://img.shields.io/npm/v/create-trapar-waves)
![npm dm](https://img.shields.io/npm/dm/create-trapar-waves)
![License](https://img.shields.io/github/license/Trapar-waves/create-trapar-waves)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/create-trapar-waves)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/create-trapar-waves/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 一个项目脚手架 CLI 工具，用于从精选模板下载和创建项目，利用 Rstack 生态系统（Rsbuild/Rspack/Rslib）实现最优构建性能。

## ✨ 特性

- **闪电般快速下载：** 利用本地配置的 npm 镜像，通过 `giget` 实现极速模板下载。
- **模板选择：** 从精选的生产就绪项目模板列表中选择，涵盖 CLI、React、Vue 和 LLM 开发。
- **交互式提示：** 由 `@clack/prompts` 提供支持的直观引导式设置。
- **自动 .gitignore：** 为新项目生成标准 `.gitignore` 文件。
- **后续步骤指导：** 项目创建后提供清晰的入门说明。
- **Rstack 生态系统集成：** 所有模板利用强大的 Rstack 生态系统（Rsbuild/Rspack/Rslib）实现最优构建性能。
- **代码质量保证：** 模板内置 Husky、lint-staged 和 ESLint 集成，确保一致的代码质量。
- **跨运行时支持：** 开箱即用支持 Node.js、Deno 和 Bun。

## 💻 技术栈

- **语言：** TypeScript (v5.9.x)
- **构建工具：** tsup
- **CLI 框架：** yargs
- **交互式提示：** `@clack/prompts`
- **日志：** `consola` + `rslog`
- **HTTP 客户端：** `ofetch`
- **模板下载：** `giget`
- **工具库：** `destr`、`ufo`、`picocolors`
- **生态系统：** `@trapar-waves/captain`

查看 [package.json](../package.json) 获取完整的依赖列表。

## 📦 可用模板

所有模板利用强大的 Rstack 生态系统（Rsbuild/Rspack/Rslib）实现最优构建性能：

| 模板 | 描述 |
|------|------|
| `cli-template` | CLI 开发模板，集成 TypeScript、tsup、consola 和 picocolors |
| `llm-template` | LLM 应用开发模板，集成 AI 工具、Zod、Vitest 和 Rslib |
| `react-antd-pro` | 基于 React 19 和 Ant Design Pro 5 的企业应用模板，集成 TanStack 工具链 |
| `react-mantine-tailwind` | 集成 Mantine UI 和 Tailwind CSS 的现代 UI 模板 |
| `react-tailwind` | React + Tailwind CSS 入门模板，集成 Rsbuild、TypeScript 和 ESLint |
| `react-tanstack` | 生产就绪的 React 模板，集成 TanStack Query/Router |
| `react-three-maplibre` | 3D 地理空间可视化库，集成 Three.js、MapLibre 和 AntV |
| `react-visgl-maplibre` | 地理空间 3D 渲染，集成 Three.js、Deck.gl 和 MapLibre |
| `vue-tailwind` | Vue 3 + Tailwind CSS 入门模板，配备现代开发工具 |

## 🚀 快速开始

### 前置条件

- Node.js（推荐 >= 18.x）
- 包管理器（npm、yarn、pnpm 或 bun）

### 安装

全局安装：

```bash
# npm
npm install -g create-trapar-waves

# yarn
yarn global add create-trapar-waves

# pnpm
pnpm add -g create-trapar-waves

# bun
bun add -g create-trapar-waves
```

### 使用

交互式创建新项目：

```bash
# 通过 pnpm create（推荐）
pnpm create trapar-waves

# 通过 npx
npx create-trapar-waves

# 通过 pnpm dlx
pnpm dlx create-trapar-waves

# 通过 bunx
bunx create-trapar-waves
```

按照交互式提示选择模板并配置项目。

## 📁 项目结构

```
├── bin/              # CLI 入口点
├── dist/             # 构建输出
├── src/              # 源代码
│   ├── commands/     # CLI 命令处理器
│   ├── prompts/      # 交互式提示逻辑
│   ├── templates/    # 模板定义和元数据
│   └── utils/        # 共享工具函数
├── tsup.config.ts    # tsup 构建配置
├── tsconfig.json     # TypeScript 配置
├── eslint.config.mjs # ESLint 配置
└── package.json      # 项目依赖和脚本
```

## 🤝 贡献

欢迎贡献，非常感谢！请按照以下步骤贡献：

1. Fork 仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

## 📄 许可证

MIT License © 2023-Present Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/create-trapar-waves](https://github.com/Trapar-waves/create-trapar-waves)
- **Issues：** [https://github.com/Trapar-waves/create-trapar-waves/issues](https://github.com/Trapar-waves/create-trapar-waves/issues)
