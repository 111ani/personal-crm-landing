# Лендинг «Личная CRM»

Одна статичная страница. Все кнопки ведут в приложение: https://app.lena-14.ru.

Сделано на Astro и Tailwind CSS 4. Сервер и база не нужны: сборка — это папка `dist/` с готовыми файлами.

## Как запустить у себя

Нужны Node.js 22.22 или новее и pnpm.

```
pnpm install
pnpm dev
```

Страница откроется по адресу http://localhost:4321. Правки в коде видны сразу.

## Как собрать

```
pnpm build
pnpm preview
```

`pnpm build` собирает сайт в папку `dist/`, `pnpm preview` показывает собранную версию на http://localhost:4321.

Шрифты Playfair Display и Manrope Astro скачивает из Google Fonts во время сборки и кладёт в `dist/`: посетители сайта к Google не обращаются.

## Где что менять

- Тексты пунктов списков — `src/data/content.ts`
- Заголовки и остальные тексты — в файлах разделов `src/components/sections/`
- Адрес приложения — `src/config.ts`
- Цвета, шрифты, отступы, размеры текста — `src/styles/tokens.css`
- Макет — `design/`: `design/README.md` и HTML-образцы в `design/reference/`

## Выкатка

Пока не настроена. План: push в main → GitHub Actions собирает `dist/` → `rsync` на сервер → nginx отдаёт папку.
