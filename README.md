# create-trapar-waves

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

<!-- [![Codecov][codecov-src]][codecov-href] -->

> Template download tools

- [x] 📦 1.32KB bundle size
- [x] 📘 JSDocs
- [x] 📦 Out of the box support for Node.js, Deno and Bun
- [x] ⚡ Lightning fast template downloads using your local npm mirror
- [x] 🧰 Integrated with Rstack ecosystem (Rsbuild/Rspack/Rslib)
- [x] ✅ Code quality assurance with Husky, lint-staged and ESLint

## Install

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

## Usage

```bash
# Via pnpm create (Recommended)
pnpm create trapar-waves

# Via npx
npx create-trapar-waves

# Via pnpm dlx
pnpm dlx create-trapar-waves

# Via bunx
bunx create-trapar-waves
```

## Available Templates

The following project templates are available for creation, all leveraging the powerful Rstack ecosystem (Rsbuild/Rspack/Rslib) for optimal build performance:

- `cli-template`: A CLI development template powered by modern tooling, integrating TypeScript, tsup for builds, consola for logging, and other core components to accelerate high-quality CLI project setup. Code quality ensured with ESLint.
- `llm-template`: A production-ready template for LLM (Large Language Model) application development, integrating AI tools, TypeScript type safety, Zod validation, and modern dev utilities like Vitest and Rslib for efficient library development.
- `react-antd-pro`: An enterprise application development template based on React 19 and Ant Design Pro 5, integrating TanStack toolchain (Router/Query), Rsbuild build tool, and Tailwind CSS styling solution, focusing on efficient development and type safety.
- `react-mantine-tailwind`: A React template integrating Mantine UI and Tailwind CSS for modern web development, optimized with Rsbuild for fast builds.
- `react-tailwind`: A modern UI development template integrating React and Tailwind CSS, with Rsbuild, TypeScript, ESLint (Antfu config), and Iconify support for an efficient development experience.
- `react-tanstack`: A production-ready React template optimized for building modern web applications with TanStack ecosystem tools. This template provides a complete foundation including state management, routing, data fetching, and build optimization out of the box, powered by Rsbuild.
- `react-three-maplibre`: A React-based library integrating Three.js, MapLibre, and AntV for advanced geospatial 3D visualizations, utilizing Rsbuild for optimized builds.
- `react-visgl-maplibre`: A React-based geospatial visualization template integrating Three.js, Deck.gl, and MapLibre for 3D map interactions and rich geospatial data rendering, with Rsbuild-powered build optimization.
- `vue-tailwind`: A Vue 3 project template with Tailwind CSS and modern development tools for rapid frontend development, featuring Rsbuild for lightning-fast builds.

## Features

- **Lightning Fast Downloads**: Leverages your locally configured npm mirror for blazing fast template downloads.
- **Template Selection**: Choose from a curated list of project templates.
- **Interactive Prompts**: Guided setup with intuitive prompts.
- **Automatic .gitignore**: Generates a standard .gitignore file for your project.
- **Next Steps Guidance**: Provides clear instructions for getting started with your new project.
- **Rstack Ecosystem Integration**: Leverages the powerful Rstack ecosystem (Rsbuild/Rspack) for optimal build performance in selected templates.
- **Code Quality Assurance**: Ensures code consistency and quality with Husky, lint-staged, and ESLint integration.

## Development

<details>

<summary>Local Development</summary>

```bash
# Install dependencies
pnpm install

# Build
pnpm run build

# Run the CLI
node dist/index.js
```

</details>

## License

[MIT](./LICENSE) License © 2023-Present [Trapar Waves](https://github.com/Trapar-waves/create-trapar-waves)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/create-trapar-waves.svg
[npm-version-href]: https://npmjs.com/package/create-trapar-waves
[npm-downloads-src]: https://img.shields.io/npm/dm/create-trapar-waves.svg
[npm-downloads-href]: https://npmjs.com/package/create-trapar-waves
[bundle-src]: https://img.shields.io/bundlephobia/minzip/create-trapar-waves.svg
[bundle-href]: https://bundlephobia.com/package/@create-trapar-waves
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-blue
[jsdocs-href]: https://www.jsdocs.io/package/create-trapar-waves
[license-src]: https://img.shields.io/github/license/trapar-waves/create-trapar-waves.svg
[license-href]: https://github.com/trapar-waves/create-trapar-waves/blob/main/LICENSE
[codecov-src]: https://img.shields.io/codecov/c/gh/trapar-waves/create-trapar-waves/main.svg
[codecov-href]: https://codecov.io/gh/trapar-waves/create-trapar-waves
