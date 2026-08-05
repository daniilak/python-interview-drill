// @meta topic=регулярки group=Stdlib и производительность
// middle · 6 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что позволяет флаг re.VERBOSE?",
    "options": [
      "писать пробелы и комментарии внутри regexp для читаемости",
      "ускорить match в 100 раз",
      "отключить unicode",
      "запретить группы"
    ],
    "answer": 0,
    "explain": "VERBOSE (X) игнорирует незаэкранированные пробелы и #комментарии в паттерне. На скорость сам по себе почти не влияет.",
    "kind": "single",
    "id": "m285",
    "fixed": true
  },
  {
    "q": "Какой стандартный модуль отвечает за regex?",
    "options": [
      "re",
      "встроенный литерал /pattern/ как в JS",
      "отдельная утилита grep в stdlib",
      "модуль pattern"
    ],
    "answer": 0,
    "explain": "Регулярки в stdlib — модуль re. Отдельного встроенного /regex/ синтаксиса в Python нет.",
    "kind": "single",
    "id": "m609",
    "fixed": true
  },
  {
    "q": "Когда полезен re.compile?",
    "options": [
      "когда один паттерн переиспользуется много раз",
      "всегда обязателен для одной проверки",
      "только для bytes",
      "ускоряет str.find"
    ],
    "answer": 0,
    "explain": "Скомпилированный Pattern переиспользует автомат. Для одноразового поиска выигрыш мал.",
    "kind": "single",
    "id": "m642",
    "fixed": true
  },
  {
    "q": "Что такое (?=...) в regex?",
    "options": [
      "positive lookahead — проверка вперёд без захвата",
      "positive lookbehind",
      "именованная группа",
      "жадный квантификатор"
    ],
    "answer": 0,
    "explain": "(?=\\d) — дальше цифра, но в match она не входит. Есть (?!...), (?<=...), (?<!...).",
    "kind": "single",
    "id": "m771",
    "fixed": true
  },
  {
    "q": "Что такое (?P<name>…) в regex?",
    "options": [
      "именованная группа",
      "lookahead",
      "комментарий",
      "possessive quantifier"
    ],
    "answer": 0,
    "explain": "Доступ: match.group('name'). Также (?P=name) — backreference.",
    "kind": "single",
    "id": "m825",
    "fixed": true
  },
  {
    "q": "Что вернёт re.findall(r'\\d+', 'a12b3')?",
    "options": [
      "['12', '3']",
      "['1','2','3']",
      "['a12b3']",
      "[]"
    ],
    "answer": 0,
    "explain": "findall всех непересекающихся совпадений цифр.",
    "kind": "single",
    "id": "m834",
    "fixed": true
  }
);
