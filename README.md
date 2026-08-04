# PyСобес

Тренажёр для подготовки к собеседованиям по Python (Junior / Middle / Senior).

**Версия:** 1.2.0 · **Автор:** [daniilak](https://github.com/daniilak)

## Онлайн

GitHub Pages: https://daniilak.github.io/python-interview-drill/

## Локально

Открой `index.html` в браузере. Сервер не нужен — чистый HTML/JS/CSS.

## Как играть

1. Выбери уровень или микс (Junior+Middle / Middle+Senior).
2. Выбери тему или «Все темы».
3. Один вопрос на экран → сразу видно, верно или нет.
4. **Дальше** / Enter / пробел — следующий вопрос.
5. Клавиши **1–4** — быстрый выбор варианта (в режиме ввода — при пустом поле или с Ctrl/Alt).

Дополнительно: таймер, режим ввода ответа, колода «Мои ошибки» (счётчик на главном + удаление одной карточки), прогресс по темам. Данные в `localStorage` (ключ `python-drill-v3`, миграция со старых ключей).

## Банк вопросов

Около **3200** карточек, включая формат «выбери все верные».

| Уровень | Фокус |
|--------|--------|
| Junior | типы, строки, списки, dict/set, функции, исключения, OOP |
| Middle | декораторы, генераторы, GIL, asyncio, typing, stdlib, тесты |
| Senior | CPython, память, метаклассы, архитектура, безопасность |

На мобильных: свайп влево после ответа — следующий вопрос. Клавиши **1–4** в multi переключают чекбоксы, Enter — «Проверить».

Пересборка банка:

```bash
python3 generate_questions.py
```

Новые источники: добавь `*_extra.py` с списками `JUNIOR_*` / `MIDDLE_*` / `SENIOR_*` (или `CODE_JUNIOR` и т.п.) — генератор подхватит их сам. Общие хелперы — в `utils.py`.

## Структура

```
index.html
css/style.css
js/app.js
js/storage.js
js/timer.js
js/data/junior.js
js/data/middle.js
js/data/senior.js
utils.py
generate_questions.py
*_extra.py
```

## Лицензия

MIT
