// @meta topic=args group=Typing и dataclasses
// middle · 12 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что будет при вызове функции с лишним именованным аргументом?",
    "options": [
      "TypeError",
      "молчаливое игнорирование",
      "Warning",
      "аргумент попадёт в **kwargs всегда, даже если их нет"
    ],
    "answer": 0,
    "explain": "Лишнее имя без **kwargs → TypeError: got an unexpected keyword argument.",
    "kind": "single",
    "id": "m237",
    "fixed": true
  },
  {
    "q": "Какой порядок *args и **kwargs в сигнатуре?",
    "options": [
      "*args затем **kwargs (kwargs всегда последние)",
      "**kwargs затем *args",
      "только kwargs без позиции",
      "порядок не важен синтаксически"
    ],
    "answer": 0,
    "explain": "def f(a, *args, **kwargs). Keyword-only после * тоже возможны.",
    "kind": "single",
    "id": "m489",
    "fixed": true
  },
  {
    "q": "Как вызвать f при positional-only сигнатуре из кода?",
    "options": [
      "f(1)",
      "f(a=1)",
      "f()",
      "f(1,2,3)"
    ],
    "answer": 0,
    "explain": "После / аргумент нельзя передать по имени — только позиционно f(1).",
    "kind": "single",
    "code": "def f(a, /):\n    return a",
    "id": "m571",
    "fixed": true
  },
  {
    "q": "Что значит параметр до / (positional-only)?",
    "options": [
      "нельзя передать этот аргумент по имени",
      "можно только по имени",
      "это kwargs",
      "запрещён в 3.x"
    ],
    "answer": 0,
    "explain": "PEP 570: def f(a, /): f(1) ок, f(a=1) — TypeError.",
    "kind": "single",
    "id": "m581",
    "fixed": true
  },
  {
    "q": "В def f(a, b=1, /, c=2, *, d=3) чем является b?",
    "options": [
      "positional-only параметр с default",
      "keyword-only",
      "**kwargs",
      "запрещённый синтаксис"
    ],
    "answer": 0,
    "explain": "До / — только позиционно, даже с default. После * — только по имени (d).",
    "kind": "single",
    "id": "m644",
    "fixed": true
  },
  {
    "q": "В def f(*args, a) чем является a?",
    "options": [
      "keyword-only параметр",
      "positional-only",
      "**kwargs",
      "запрещён"
    ],
    "answer": 0,
    "explain": "Всё после *args — только по имени: f(1, 2, a=3).",
    "kind": "single",
    "id": "m656",
    "fixed": true
  },
  {
    "q": "Что такое параметр a в def f(a, /)?",
    "options": [
      "positional-only",
      "keyword-only",
      "varargs",
      "**kwargs"
    ],
    "answer": 0,
    "explain": "Слэш делает a только позиционным.",
    "kind": "single",
    "id": "m668",
    "fixed": true
  },
  {
    "q": "Как верно вызвать def f(a, /, b, *, c)?",
    "options": [
      "f(1, 2, c=3) или f(1, b=2, c=3)",
      "f(a=1, b=2, c=3)",
      "f(1, 2, 3)",
      "f(1)"
    ],
    "answer": 0,
    "explain": "a только позиционно; c только по имени; b — так и так.",
    "kind": "single",
    "id": "m676",
    "fixed": true
  },
  {
    "q": "Зачем positional-only параметры?",
    "options": [
      "стабильный API: можно переименовать параметр без ломания вызовов по имени",
      "запретить позиционные вызовы",
      "ускорить GIL",
      "только для async"
    ],
    "answer": 0,
    "explain": "Как у len(obj): нельзя len(obj=...). Имена внутренних параметров свободны.",
    "kind": "single",
    "id": "m696",
    "fixed": true
  },
  {
    "q": "Что такое параметр a в def f(*, a)?",
    "options": [
      "keyword-only",
      "positional-only",
      "*args",
      "**kwargs"
    ],
    "answer": 0,
    "explain": "После голого * все параметры только по имени: f(a=1).",
    "kind": "single",
    "id": "m752",
    "fixed": true
  },
  {
    "q": "Как вызвать f?",
    "options": [
      "f(a=1)",
      "f(1)",
      "ошибка",
      "никак"
    ],
    "answer": 0,
    "explain": "Выполнение кода даёт f(a=1). Разбери операции по строкам: присваивания, вызовы и то, что реально печатает print.",
    "kind": "single",
    "code": "def f(*, a):\n    return a",
    "id": "m788",
    "fixed": true
  },
  {
    "q": "Что вернёт Keyword-only после *?",
    "options": [
      "обязательно по имени",
      "можно позиционно",
      "запрещены defaults",
      "только kwargs dict"
    ],
    "answer": 0,
    "explain": "Результат выражения — обязательно по имени. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m827",
    "fixed": true
  }
);
