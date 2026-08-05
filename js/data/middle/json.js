// @meta topic=JSON group=Stdlib и производительность
// middle · 24 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "json.loads падает с JSONDecodeError на невалидном JSON.",
    "kind": "single",
    "code": "import json\nprint(json.loads('[1, 2,'))",
    "id": "m25",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "{\"ok\": true, \"n\": null}",
      "{\"ok\": True, \"n\": None}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → {\"ok\": true, \"n\": null}.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'ok': True, 'n': None}))",
    "id": "m55",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "json.loads падает с JSONDecodeError на невалидном JSON.",
    "kind": "single",
    "code": "import json\nprint(json.loads('{'))",
    "id": "m220",
    "fixed": true
  },
  {
    "q": "Что вернёт json.loads('[1, 2]') вернёт?",
    "options": [
      "[1, 2]",
      "'[1, 2]'",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — [1, 2]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m376",
    "fixed": true
  },
  {
    "q": "Зачем json.loads(..., parse_float=Decimal)?",
    "options": [
      "парсить числа как Decimal вместо float — точные десятичные",
      "ускорить парсинг в 10 раз",
      "запретить числа в JSON",
      "вернуть int всегда"
    ],
    "answer": 0,
    "explain": "float двоичный и теряет точность денег. Decimal через parse_float сохраняет десятичную запись.",
    "kind": "single",
    "id": "m412",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "{\"a\": 1}",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → {\"a\": 1}.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'a': 1}))",
    "id": "m445",
    "fixed": true
  },
  {
    "q": "Что делает json.dumps(..., sort_keys=True)?",
    "options": [
      "сортирует ключи объектов для стабильного вывода",
      "сортирует значения массивов",
      "удаляет ключи",
      "включает pretty-print без indent"
    ],
    "answer": 0,
    "explain": "Удобно для диффов и канонического представления. Не влияет на семантику JSON-объекта.",
    "kind": "single",
    "id": "m486",
    "fixed": true
  },
  {
    "q": "Что станет с ключом в json.dumps({1: 'a'})?",
    "options": [
      "числовой ключ станет строкой '1'",
      "останется int 1 в JSON",
      "ошибка всегда",
      "ключ удалится"
    ],
    "answer": 0,
    "explain": "JSON допускает только строковые ключи объектов. Python молча конвертирует int→str.",
    "kind": "single",
    "id": "m544",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "dict",
      "list",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads парсит JSON-текст в объекты Python → dict.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"x\": [1, 2]}')).__name__)",
    "id": "m556",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → [1, 2, 3].",
    "kind": "single",
    "code": "import json\nprint(json.dumps([1, 2, 3]))",
    "id": "m678",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "json.loads падает с JSONDecodeError на невалидном JSON.",
    "kind": "single",
    "code": "import json\nprint(json.loads('nullish'))",
    "id": "m690",
    "fixed": true
  },
  {
    "q": "Что json не сериализует напрямую?",
    "options": [
      "set, bytes, произвольные объекты без default=",
      "dict и list",
      "str и int",
      "bool и None"
    ],
    "answer": 0,
    "explain": "Нужен default= callable или заранее привести к JSON-типам.",
    "kind": "single",
    "id": "m718",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "\"hi\"",
      "hi",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.dumps строки даёт JSON-строку с кавычками \"hi\".",
    "kind": "single",
    "code": "import json\nprint(json.dumps('hi'))",
    "id": "m726",
    "fixed": true
  },
  {
    "q": "Чем json.loads отличается от json.load?",
    "options": [
      "loads — из str/bytes; load — из file-like",
      "разницы нет",
      "load только из URL",
      "loads только из Path"
    ],
    "answer": 0,
    "explain": "Аналогично dumps vs dump.",
    "kind": "single",
    "id": "m762",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "42",
      "'42'",
      "None",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads числа даёт int 42.",
    "kind": "single",
    "code": "import json\nprint(json.dumps(42))",
    "id": "m780",
    "fixed": true
  },
  {
    "q": "Что такое object_hook в json.loads?",
    "options": [
      "постобработка каждого JSON-объекта (dict) при разборе",
      "сериализация в dumps",
      "сжатие",
      "сортировка ключей"
    ],
    "answer": 0,
    "explain": "Можно превращать dict в свои классы на лету.",
    "kind": "single",
    "id": "m786",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "{\"x\": [1, 2]}",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → {\"x\": [1, 2]}.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'x': [1, 2]}))",
    "id": "m840",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "dict",
      "list",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads объекта → dict.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"a\": 1}')).__name__)",
    "id": "m878",
    "fixed": true
  },
  {
    "q": "Что делает ensure_ascii=False в dumps?",
    "options": [
      "оставляет Unicode-символы как есть, не \\uXXXX",
      "запрещает non-ASCII",
      "включает UTF-16",
      "сортирует ключи"
    ],
    "answer": 0,
    "explain": "Для читаемых русских текстов в JSON часто False + encoding utf-8 при записи.",
    "kind": "single",
    "id": "m884",
    "fixed": true
  },
  {
    "q": "Что будет с set?",
    "options": [
      "TypeError без default",
      "станет list",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Множество хранит уникальные элементы. Результат: TypeError без default.",
    "kind": "single",
    "code": "import json\njson.dumps({1, 2})",
    "id": "m893",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "list",
      "dict",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads массива → list.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('[1, 2, 3]')).__name__)",
    "id": "m895",
    "fixed": true
  },
  {
    "q": "Зачем default= в json.dumps?",
    "options": [
      "функция сериализации типов, которые JSON не знает",
      "значение по умолчанию для loads",
      "indent",
      "сортировка"
    ],
    "answer": 0,
    "explain": "default=str или свой encoder для datetime/set/…",
    "kind": "single",
    "id": "m901",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "dict",
      "list",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "разбор JSON-объекта → dict.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"ok\": true, \"n\": null}')).__name__)",
    "id": "m906",
    "fixed": true
  },
  {
    "q": "Зачем subclass JSONEncoder?",
    "options": [
      "кастомный default для своих типов",
      "ускорение C парсера",
      "сжатие",
      "валидация schema"
    ],
    "answer": 0,
    "explain": "Переопредели default() и передай cls=MyEncoder в dumps.",
    "kind": "single",
    "id": "m907",
    "fixed": true
  }
);
