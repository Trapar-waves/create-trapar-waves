# create-trapar-waves

![npm version](https://img.shields.io/npm/v/create-trapar-waves)
![npm dm](https://img.shields.io/npm/dm/create-trapar-waves)
![License](https://img.shields.io/github/license/Trapar-waves/create-trapar-waves)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/create-trapar-waves)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/create-trapar-waves/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> CLI-инструмент для создания проектов из шаблонов, использующий экосистему Rstack (Rsbuild/Rspack/Rslib) для оптимальной производительности сборки.

## ✨ Возможности

- **Молниеносная загрузка:** Использует локально настроенный npm-зеркало для сверхбыстрой загрузки шаблонов через `giget`.
- **Выбор шаблона:** Выбирайте из курированного списка готовых к продакшену шаблонов проектов, охватывающих CLI, React, Vue и LLM разработку.
- **Интерактивные подсказки:** Настройка с помощью интуитивных подсказок на базе `@clack/prompts`.
- **Автоматический .gitignore:** Генерирует стандартный файл `.gitignore` для вашего нового проекта.
- **Руководство по следующим шагам:** Предоставляет четкие инструкции для начала работы после создания проекта.
- **Интеграция с Rstack:** Все шаблоны используют мощную экосистему Rstack (Rsbuild/Rspack/Rslib) для оптимальной производительности сборки.
- **Гарантия качества кода:** Шаблоны поставляются с интеграцией Husky, lint-staged и ESLint для обеспечения качества кода.
- **Поддержка сред выполнения:** Работает с Node.js, Deno и Bun из коробки.

## 💻 Технический стек

- **Язык:** TypeScript (v5.9.x)
- **Инструмент сборки:** tsup
- **CLI фреймворк:** yargs
- **Интерактивные подсказки:** `@clack/prompts`
- **Логирование:** `consola` + `rslog`
- **HTTP клиент:** `ofetch`
- **Загрузка шаблонов:** `giget`
- **Утилиты:** `destr`, `ufo`, `picocolors`
- **Экосистема:** `@trapar-waves/captain`

Полный список зависимостей смотрите в [package.json](../package.json).

## 📦 Доступные шаблоны

Все шаблоны используют мощную экосистему Rstack (Rsbuild/Rspack/Rslib) для оптимальной производительности сборки:

| Шаблон | Описание |
|--------|----------|
| `cli-template` | Шаблон для разработки CLI с TypeScript, tsup, consola и picocolors |
| `llm-template` | Шаблон для разработки LLM-приложений с AI-инструментами, Zod, Vitest и Rslib |
| `react-antd-pro` | Корпоративный шаблон на React 19 и Ant Design Pro 5 с TanStack |
| `react-mantine-tailwind` | Современный UI шаблон с Mantine UI и Tailwind CSS |
| `react-tailwind` | React + Tailwind CSS стартовый шаблон с Rsbuild, TypeScript и ESLint |
| `react-tanstack` | Готовый к продакшену React шаблон с TanStack Query/Router |
| `react-three-maplibre` | Библиотека 3D геопространственной визуализации с Three.js, MapLibre и AntV |
| `react-visgl-maplibre` | Геопространственный 3D рендеринг с Three.js, Deck.gl и MapLibre |
| `vue-tailwind` | Vue 3 + Tailwind CSS стартовый шаблон с современными инструментами разработки |

## 🚀 Начало работы

### Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn, pnpm или bun)

### Установка

Глобальная установка:

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

### Использование

Интерактивное создание нового проекта:

```bash
# Через pnpm create (Рекомендуется)
pnpm create trapar-waves

# Через npx
npx create-trapar-waves

# Через pnpm dlx
pnpm dlx create-trapar-waves

# Через bunx
bunx create-trapar-waves
```

Следуйте интерактивным подсказкам для выбора шаблона и настройки проекта.

## 📁 Структура проекта

```
├── bin/              # Точка входа CLI
├── dist/             # Результат сборки
├── src/              # Исходный код
│   ├── commands/     # Обработчики команд CLI
│   ├── prompts/      # Логика интерактивных подсказок
│   ├── templates/    # Определения и метаданные шаблонов
│   └── utils/        # Общие утилиты
├── tsup.config.ts    # Конфигурация сборки tsup
├── tsconfig.json     # Конфигурация TypeScript
├── eslint.config.mjs # Конфигурация ESLint
└── package.json      # Зависимости и скрипты проекта
```

## 🤝 Участие в разработке

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License © 2023-Present Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/create-trapar-waves](https://github.com/Trapar-waves/create-trapar-waves)
- **Issues:** [https://github.com/Trapar-waves/create-trapar-waves/issues](https://github.com/Trapar-waves/create-trapar-waves/issues)
