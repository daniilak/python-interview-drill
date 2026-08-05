# PyСобес

Тренажёр-задачник по Python к собеседованию (Junior / Middle / Senior).

**Версия:** 1.3.1 · **Автор:** [daniilak](https://github.com/daniilak)

## Онлайн

GitHub Pages: https://daniilak.github.io/python-interview-drill/

## Локально

Открой `index.html` в браузере. Сервер не нужен — чистый HTML/JS/CSS.

## Как играть

1. Выбери уровень или микс (Junior+Middle / Middle+Senior).
2. Выбери тему или «Все темы».
3. Один вопрос на экран → сразу видно, верно или нет.
4. **Дальше** / Enter / пробел — следующий вопрос.
5. Клавиши **1–4** — быстрый выбор варианта.

Дополнительно: таймер, режим ввода ответа, колода «Мои ошибки», прогресс по темам (`localStorage`, ключ `python-drill-v3`).

## Банк вопросов

Около **3200** карточек.

| Для | Путь | Запросов |
|-----|------|----------|
| Браузер / прод | `js/data/{junior,middle,senior}.js` | **3** |
| Правки в чате | `js/data/{junior,middle,senior}/*.js` | — |

Topic-файлы: `topic` и `group` в шапке `@meta`, не в каждой карточке. Бандл собирает `scripts/bank.py`.

Перед публикацией:

```bash
python3 scripts/bank.py release
```

ТЗ для агента: [`.cursor/skills/edit-question-bank/SKILL.md`](.cursor/skills/edit-question-bank/SKILL.md).

## Структура

```
index.html
css/style.css
js/app.js, storage.js, timer.js, version.js
js/data/{junior,middle,senior}.js   # бандлы для браузера
js/data/{junior,middle,senior}/     # topic-файлы (правки)
scripts/bank.py
.cursor/skills/edit-question-bank/
```

## Лицензия

MIT
