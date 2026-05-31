# 🚀 Starter Minista — современный стартовый шаблон

Готовый минималистичный стартовый шаблон на **Minista**, включающий:

- Чистую структуру проекта
- SCSS‑архитектуру
- Поддержку alias `@/`
- Готовую конфигурацию Minista
- Поддержку PostCSS
- Готовую структуру для будущих компонентов и страниц

---

## 📦 Установка

```bash
git clone https://github.com/drn-Cyrex/Starter_Minista.git
cd Starter_Minista
npm install
```

---

## 🏁 Скрипты

| Команда           | Описание                      |
| ----------------- | ----------------------------- |
| `npm start`       | Запуск dev‑сервера Minista    |
| `npm run build`   | Сборка проекта в `dist/`      |
| `npm run preview` | Локальный предпросмотр сборки |

---

## 🧩 Alias `@/`

Alias настроен через `jsconfig.json`:

```json
{
   "compilerOptions": {
      "baseUrl": "./src",
      "paths": {
         "@/*": ["*"]
      }
   }
}
```

Использование:

```js
import Header from "@/components/Header";
import "@/styles/main.scss";
```

---

## 🛠 Minista config

Файл `minista.config.js`:

```js
import { defineConfig } from "minista";

export default defineConfig({
   assets: {
      include: ["./src/assets/**/*"],
   },
});
```

---

## 🎨 SCSS и PostCSS

В проекте используется:

- SCSS для стилей
- PostCSS (autoprefixer)

Файл `postcss.config.js`:

```js
export default {
   plugins: {
      autoprefixer: {},
   },
};
```

---

## 📁 Структура проекта

```
Starter_Minista/
│
├── public/               # Публичные файлы
│
├── src/
│   ├── assets/           # Изображения, шрифты, медиа
│   ├── components/       # Компоненты
│   ├── styles/           # SCSS стили
│   ├── index.html        # Главная страница
│   └── main.js           # Точка входа
│
├── jsconfig.json         # Alias @/
├── minista.config.js     # Конфигурация Minista
├── package.json
└── postcss.config.js
```

---

## 🌐 Деплой на GitHub Pages

Добавь в `minista.config.js`:

```js
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
   base: process.env.GITHUB_ACTIONS ? `/${repo}/` : "/",
});
```

Создай workflow:

```
.github/workflows/deploy.yml
```

```yaml
name: Deploy to GitHub Pages

on:
   push:
      branches: ["main"]

permissions:
   contents: write

jobs:
   build:
      runs-on: ubuntu-latest

      steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
              node-version: 20

         - run: npm ci
         - run: npm run build

         - uses: peaceiris/actions-gh-pages@v4
           with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./dist
```

---

## 📄 Лицензия

MIT — свободно используй и модифицируй.

---

## 🎉 Готово!

Этот шаблон — отличная база для любых Minista‑проектов: лендингов, UI‑компонентов, прототипов и продакшн‑сайтов.
