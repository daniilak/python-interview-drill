# PyСобес

Тренажёр-задачник по Python к собеседованию (Junior / Middle / Senior).

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
python3 generate_questions.py          # merge: не удаляет и не затирает js/data; накладывает bank/overrides
python3 generate_questions.py --append-new   # то же + дописать новые карточки из плагинов
python3 generate_questions.py --rebuild      # полная пересборка (правки только через overrides)
python3 tools/fix_language.py         # массовая правка языка → js/data + overrides
python3 audit_bank.py
```

Починенные карточки помечаются `"fixed": true` и дублируются в `bank/overrides/{junior,middle,senior}.json`.
Генератор **не удаляет** существующие вопросы и **не перезаписывает** fixed/overrides.

## Структура

```
index.html              # UI
css/style.css
js/app.js, storage.js, timer.js, version.js
js/data/{junior,middle,senior}.js   # сгенерированный банк

generate_questions.py   # CLI-обёртка
audit_bank.py           # CLI-обёртка

bank/                   # Python-пакет банка
  builder.py            # BankBuilder: плагины → polish → JS
  groups.py             # topic → group
  utils.py              # q / q_multi
  polish/               # нормализация q и explain
  core/                 # встроенные JUNIOR/MIDDLE/SENIOR
  plugins/              # волны и вариации карточек

tools/                  # те же CLI (можно звать отсюда)
```

## Лицензия

MIT
