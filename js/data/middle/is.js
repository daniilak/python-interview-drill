// @meta topic=is group=Stdlib и производительность
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что обычно вернёт выражение `256 is 256` в CPython?",
    "options": [
      "True — малые int часто закэшированы (intern)",
      "False всегда",
      "TypeError",
      "зависит только от ОС, не от CPython"
    ],
    "answer": 0,
    "explain": "CPython кэширует небольшой диапазон целых (часто −5…256). Для них is может быть True. На это нельзя полагаться в логике — сравнивай через ==.",
    "kind": "single",
    "id": "m10",
    "fixed": true
  },
  {
    "q": "Верно ли, что (257 is 257) в одном выражении всегда контракт языка?",
    "options": [
      "часто True из‑за peephole/кэша, но is — не контракт равенства чисел",
      "да, для любых int is обязателен",
      "нет, всегда False",
      "только для float"
    ],
    "answer": 0,
    "explain": "Сравнивай int через ==. is — идентичность объектов. Интернирование маленьких int — деталь реализации.",
    "kind": "single",
    "id": "m599",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(256 is 256)",
    "id": "m783",
    "fixed": true
  }
);
