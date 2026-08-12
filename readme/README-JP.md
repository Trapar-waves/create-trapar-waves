# create-trapar-waves

![npm version](https://img.shields.io/npm/v/create-trapar-waves)
![npm dm](https://img.shields.io/npm/dm/create-trapar-waves)
![License](https://img.shields.io/github/license/Trapar-waves/create-trapar-waves)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/create-trapar-waves)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/create-trapar-waves/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> キュレーションされたテンプレートからプロジェクトをダウンロード・作成するためのプロジェクトスキャフォールディング CLI ツール。Rstack エコシステム（Rsbuild/Rspack/Rslib）を活用し、最適なビルド性能を実現。

![create-trapar-waves hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **超高速ダウンロード：** ローカルに設定された npm ミラーを活用し、`giget` を使用してブレーキングファストなテンプレートダウンロードを実現。
- **テンプレート選択：** CLI、React、Vue、LLM 開発をカバーする、キュレーションされた本番対応プロジェクトテンプレートから選択。
- **インタラクティブプロンプト：** `@clack/prompts` による直感的なガイド付きセットアップ。
- **自動 .gitignore：** 新しいプロジェクト用の標準 `.gitignore` ファイルを生成。
- **次のステップガイダンス：** プロジェクト作成後の明確な開始手順を提供。
- **Rstack エコシステム統合：** すべてのテンプレートが強力な Rstack エコシステム（Rsbuild/Rspack/Rslib）を活用し、最適なビルド性能を実現。
- **コード品質保証：** テンプレートには Husky、lint-staged、ESLint 統合が組み込まれ、一貫したコード品質を確保。
- **ランタイムサポート：** Node.js、Deno、Bun をすぐにサポート。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **言語：** TypeScript (v5.9.x)
- **ビルドツール：** tsup
- **CLI フレームワーク：** yargs
- **インタラクティブプロンプト：** `@clack/prompts`
- **ログ：** `consola` + `rslog`
- **HTTP クライアント：** `ofetch`
- **テンプレートダウンロード：** `giget`
- **ユーティリティ：** `destr`、`ufo`、`picocolors`
- **エコシステム：** `@trapar-waves/captain`

依存関係の完全なリストは [package.json](../package.json) を参照してください。

![Available Templates](../assets/readme/headers/templates.svg)

すべてのテンプレートが強力な Rstack エコシステム（Rsbuild/Rspack/Rslib）を活用し、最適なビルド性能を実現：

| テンプレート | 説明 |
|-------------|------|
| `cli-template` | TypeScript、tsup、consola、picocolors を統合した CLI 開発テンプレート |
| `llm-template` | AI ツール、Zod、Vitest、Rslib を統合した LLM アプリケーション開発テンプレート |
| `react-antd-pro` | React 19 と Ant Design Pro 5 ベースのエンタープライズアプリテンプレート、TanStack ツールチェーン付き |
| `react-mantine-tailwind` | Mantine UI と Tailwind CSS を統合したモダン UI テンプレート |
| `react-tailwind` | Rsbuild、TypeScript、ESLint を統合した React + Tailwind CSS スターターテンプレート |
| `react-tanstack` | TanStack Query/Router を使用した本番対応 React テンプレート |
| `react-three-maplibre` | Three.js、MapLibre、AntV を統合した 3D 地理空間可視化ライブラリ |
| `react-visgl-maplibre` | Three.js、Deck.gl、MapLibre を統合した地理空間 3D レンダリング |
| `vue-tailwind` | モダンな開発ツールを備えた Vue 3 + Tailwind CSS スターターテンプレート |

![Getting Started](../assets/readme/headers/getting-started.svg)

### 前提条件

- Node.js（>= 18.x 推奨）
- パッケージマネージャー（npm、yarn、pnpm、または bun）

### インストール

グローバルにインストール：

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

### 使用方法

インタラクティブに新しいプロジェクトを作成：

```bash
# pnpm create 経由（推奨）
pnpm create trapar-waves

# npx 経由
npx create-trapar-waves

# pnpm dlx 経由
pnpm dlx create-trapar-waves

# bunx 経由
bunx create-trapar-waves
```

インタラクティブプロンプトに従ってテンプレートを選択し、プロジェクトを設定してください。

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── bin/              # CLI エントリーポイント
├── dist/             # ビルド出力
├── src/              # ソースコード
│   ├── commands/     # CLI コマンドハンドラ
│   ├── prompts/      # インタラクティブプロンプトロジック
│   ├── templates/    # テンプレート定義とメタデータ
│   └── utils/        # 共有ユーティリティ
├── tsup.config.ts    # tsup ビルド設定
├── tsconfig.json     # TypeScript 設定
├── eslint.config.mjs # ESLint 設定
└── package.json      # プロジェクトの依存関係とスクリプト
```

![Contributing](../assets/readme/headers/contributing.svg)

コントリビュートを歓迎します！以下の手順に従ってコントリビュートしてください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. Pull Request を作成

![License](../assets/readme/headers/license.svg)

MIT License © 2023-Present Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/create-trapar-waves](https://github.com/Trapar-waves/create-trapar-waves)
- **Issues：** [https://github.com/Trapar-waves/create-trapar-waves/issues](https://github.com/Trapar-waves/create-trapar-waves/issues)
