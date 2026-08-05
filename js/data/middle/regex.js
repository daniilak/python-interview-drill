// @meta topic=regex group=Stdlib и производительность
// middle · 11 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что вернёт atomic grouping / possessive?",
    "options": [
      "в stdlib re ограничено; смотри сторонние",
      "полностью как Perl always",
      "нет понятия",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Результат выражения — в stdlib re ограничено; смотри сторонние. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m99",
    "fixed": true
  },
  {
    "q": "Чем re.fullmatch отличается от re.match?",
    "options": [
      "fullmatch — вся строка; match — только с начала (хвост может остаться)",
      "разницы нет",
      "match требует всю строку, fullmatch — нет",
      "fullmatch только для bytes"
    ],
    "answer": 0,
    "explain": "Частая ловушка: match('a', 'abc') успешен. Для «вся строка» — fullmatch или \\Z.",
    "kind": "single",
    "id": "m507",
    "fixed": true
  },
  {
    "q": "Про possessive quantifiers в стандартном re?",
    "options": [
      "в stdlib re их нет; сторонний модуль regex богаче",
      "они есть как ++ в re всегда",
      "это то же, что possessive в str.split",
      "только в bytes-режиме"
    ],
    "answer": 0,
    "explain": "Пакет regex (PyPI) ближе к Perl/PCRE. Стандартный re — умеренный набор.",
    "kind": "single",
    "id": "m514",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'42'",
      "'4'",
      "42",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: '42'.",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42')\nprint(None if m is None else m.group())",
    "id": "m638",
    "fixed": true
  },
  {
    "q": "Чем re.search отличается от re.match?",
    "options": [
      "search ищет в любом месте; match — только с начала строки",
      "разницы нет",
      "match ищет везде, search — с начала",
      "search только для bytes"
    ],
    "answer": 0,
    "explain": "Классическая ловушка. Для всей строки — fullmatch.",
    "kind": "single",
    "id": "m666",
    "fixed": true
  },
  {
    "q": "Что делает re.IGNORECASE?",
    "options": [
      "делает поиск без учёта регистра (флаг i)",
      "включает DOTALL",
      "отключает Unicode",
      "только ASCII"
    ],
    "answer": 0,
    "explain": "re.I / re.IGNORECASE. Можно inline (?i).",
    "kind": "single",
    "id": "m722",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'a'",
      "'A'",
      "None",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: 'a'.",
    "kind": "single",
    "code": "import re\nm = re.search('[aeiou]', 'stack')\nprint(None if m is None else m.group())",
    "id": "m730",
    "fixed": true
  },
  {
    "q": "Что делает re.DOTALL?",
    "options": [
      "точка `.` совпадает и с переводом строки",
      "игнорирует регистр",
      "только ASCII",
      "отключает группы"
    ],
    "answer": 0,
    "explain": "По умолчанию `.` не ест `\\n`. DOTALL/S — ест.",
    "kind": "single",
    "id": "m742",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "None",
      "'a'",
      "''",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: None.",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42a')\nprint(None if m is None else m.group())",
    "id": "m774",
    "fixed": true
  },
  {
    "q": "Что такое \\b в regex?",
    "options": [
      "граница слова (word boundary)",
      "backspace символ всегда",
      "начало строки только",
      "любая буква"
    ],
    "answer": 0,
    "explain": "Граница между \\w и \\W. Не путать с \\B (не граница).",
    "kind": "single",
    "id": "m899",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'12'",
      "'1'",
      "12",
      "None"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: '12'.",
    "kind": "single",
    "code": "import re\nm = re.search('\\\\d+', 'ab12cd')\nprint(None if m is None else m.group())",
    "id": "m904",
    "fixed": true
  }
);
