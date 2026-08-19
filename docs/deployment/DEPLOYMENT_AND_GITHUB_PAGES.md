# 🚀 Деплой и Конфигурация GitHub Pages (Deployment & CI/CD Guide)

> Пошаговое руководство по автоматической сборке и публикации проекта через **GitHub Actions** на **GitHub Pages**.

---

## 🌐 1. Архитектура Деплоя

Сайт публикуется как высокопроизводительное статическое SPA-приложение (Static Export) в репозитории:  
`https://artyomnikolae7-sys.github.io/ARTEMIIPTO/`

```
git push (main branch)
    ↓
GitHub Actions Runner (Ubuntu Latest)
    ↓
pnpm install --no-frozen-lockfile (apps/web)
    ↓
pnpm run build (Vite + React 19)
    ↓
Upload Artifact (./apps/web/dist)
    ↓
Deploy to GitHub Pages
```

---

## ⚙️ 2. Конфигурация GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'

      - name: Install dependencies
        working-directory: ./apps/web
        run: pnpm install --no-frozen-lockfile

      - name: Build project
        working-directory: ./apps/web
        run: pnpm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './apps/web/dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🔑 3. Ключевые Правила Статического Хостинга

1. **Базовый путь `base: '/ARTEMIIPTO/'`:**  
   В файле `apps/web/vite.config.ts` обязательно указан параметр `base: '/ARTEMIIPTO/'`, чтобы все JavaScript-бандлы, CSS-стили и изображения корректно разрешались относительно подпапки репозитория.
2. **Использование HashRouter:**  
   Для устранения ошибок 404 при прямом переходе по ссылкам в GitHub Pages в `main.tsx` используется `HashRouter` (`#/platform`, `#/v2`, `#/v3`, `#/v4`).
3. **Файл `.nojekyll`:**  
   В корне сборки размещен файл `.nojekyll`, чтобы парсер Jekyll на серверах GitHub не игнорировал папки с подчеркиванием.
4. **Конфигурация `.npmrc` (hoisted):**  
   Для стабильной работы пакетов на виртуальных дисках (Google Drive / Windows) в проекте активирован режим `node-linker=hoisted` и `symlink=false`.
