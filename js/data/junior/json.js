// @meta topic=JSON group=Инструменты и стиль
// junior · 6 cards
(window.QUESTIONS_JUNIOR = window.QUESTIONS_JUNIOR || []).push(
  {
    "q": "Что вернёт `json.dumps({'a': 1})`?",
    "options": [
      "'{\"a\": 1}'",
      "{'a': 1}",
      "b'{\"a\": 1}'",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Функция `json.dumps` сериализует Python-объект в строку формата JSON. Стандарт JSON требует двойные кавычки для ключей и строковых значений, в отличие от одинарных кавычек, допустимых в Python.",
    "kind": "single",
    "id": "j142",
    "fixed": true
  },
  {
    "q": "Во что функция `json.dumps()` сериализует объект Python?",
    "options": [
      "В строку формата JSON (str)",
      "В байтовую строку (bytes)",
      "Напрямую в файл",
      "В объект Python"
    ],
    "answer": 0,
    "explain": "Функция `json.dumps()` (dump string) сериализует объект Python в строку `str`. Для записи в файл используется `json.dump()` (без 's'), а для обратного процесса — десериализации — служат `json.loads()` и `json.load()`.",
    "kind": "single",
    "id": "j242",
    "fixed": true
  },
  {
    "q": "Какими становятся ключи JSON-объекта после `json.loads`?",
    "options": [
      "str",
      "любой hashable",
      "str или int",
      "bytes"
    ],
    "answer": 0,
    "explain": "Стандарт JSON определяет ключи объекта только как строки. Поэтому при десериализации функцией `json.loads` все ключи в словаре Python будут иметь тип `str`, даже если в исходной JSON-строке они выглядели как числа.",
    "kind": "single",
    "id": "j282",
    "fixed": true
  },
  {
    "q": "Какой стандартный модуль Python предназначен для работы с JSON?",
    "options": [
      "json",
      "pickle",
      "simplejson",
      "yaml"
    ],
    "answer": 0,
    "explain": "Модуль `json` входит в стандартную библиотеку Python и используется для кодирования и декодирования данных в формате JSON. `pickle` — это специфичный для Python протокол сериализации, а `simplejson` и `yaml` являются сторонними библиотеками.",
    "kind": "single",
    "id": "j336",
    "fixed": true
  },
  {
    "q": "Что вернёт `json.loads('{\"a\": 1}')`?",
    "options": [
      "{'a': 1}",
      "{'a': '1'}",
      "json.JSONDecodeError",
      "[('a', 1)]"
    ],
    "answer": 0,
    "explain": "Функция `json.loads()` десериализует строку в формате JSON в объект Python. JSON-объект `{...}` преобразуется в словарь `dict`. Ловушка в том, что и ключи, и строковые значения в JSON должны быть в двойных кавычках, иначе возникнет `json.JSONDecodeError`.",
    "kind": "single",
    "id": "j354",
    "fixed": true,
    "code": "import json\nprint(json.loads('{\"a\": 1}'))"
  },
  {
    "q": "Что парсит функция `json.loads()`?",
    "options": [
      "JSON-строку в объект Python",
      "Файловый объект с JSON в объект Python",
      "Объект Python в JSON-строку",
      "Объект Python в файловый объект с JSON"
    ],
    "answer": 0,
    "explain": "Функция `json.loads()` (load-string) десериализует строку, содержащую JSON, в объект Python. Для работы с файловыми объектами используется `json.load()`, а для обратной операции (сериализации) — функции `json.dumps()` и `json.dump()`.",
    "kind": "single",
    "id": "j381",
    "fixed": true
  }
);
