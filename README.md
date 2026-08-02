# Python Drill

Тренажёр для подготовки к собеседованиям по Python (Junior / Middle / Senior).

**Автор:** [daniilak](https://github.com/daniilak)

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

Дополнительно: таймер, режим ввода ответа, колода «Мои ошибки», прогресс по темам. Данные в `localStorage` (ключ `python-drill-v2`).

## Банк вопросов

Около **1490** карточек.

| Уровень | Фокус |
|--------|--------|
| Junior | типы, строки, списки, dict/set, функции, исключения, OOP |
| Middle | декораторы, генераторы, GIL, asyncio, typing, stdlib, тесты |
| Senior | CPython, память, метаклассы, архитектура, безопасность |

Пересборка банка:

```bash
python3 generate_questions.py
```

## Структура

```
index.html
css/style.css
js/app.js
js/data/junior.js
js/data/middle.js
js/data/senior.js
generate_questions.py
```

## Лицензия

MIT
