// @meta topic=csv group=Stdlib и производительность
// middle · 1 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что читает csv.DictReader?",
    "options": [
      "строки файла как dict по заголовкам колонок",
      "только список списков без ключей",
      "JSON-объекты",
      "бинарный Excel"
    ],
    "answer": 0,
    "explain": "Первая строка — имена полей; дальше каждая запись — dict[field]=value.",
    "kind": "single",
    "id": "m311",
    "fixed": true
  }
);
