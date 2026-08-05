// @meta topic=interning group=CPython и память
// senior · 1 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что верно про Пул малых int диапазон типично?",
    "options": [
      "CPython кэширует int от -5 до 256 включительно",
      "все int до 10**9 интернированы",
      "только 0 и 1 кэшируются",
      "кэш int отключён в Python 3.11"
    ],
    "answer": 0,
    "explain": "small_ints в ceval.c — переиспользование объектов. a is b для 100 может True, для 10**9 — нет. Не полагаться на identity чисел.",
    "kind": "single",
    "id": "s695",
    "fixed": true
  }
);
