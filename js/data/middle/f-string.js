// @meta topic=f-string group=Stdlib и производительность
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что выведет код?",
    "options": [
      "'x=10'",
      "'10'",
      "'x={x}'",
      "ошибка"
    ],
    "answer": 0,
    "explain": "f-строка подставляет значение с форматом. Печать: 'x=10'.",
    "kind": "single",
    "code": "x = 10\nprint(f'{x=}')",
    "id": "m532",
    "fixed": true
  },
  {
    "q": "Что вернёт f'{x=!r}' покажет?",
    "options": [
      "имя и repr значения",
      "только x",
      "ошибку до 3.12",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — имя и repr значения. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m589",
    "fixed": true
  }
);
