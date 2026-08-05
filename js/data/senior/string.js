// @meta topic=string group=CPython и память
// senior · 1 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Почему immutability str важна?",
    "options": [
      "безопасно как ключи dict и можно шарить без копий",
      "строки нельзя хешировать",
      "только для экономии синтаксиса",
      "чтобы += всегда был O(1) контрактно"
    ],
    "answer": 0,
    "explain": "Неизменяемость → стабильный hash, thread-share, нет сюрпризов при ключе в dict.",
    "kind": "single",
    "id": "s767",
    "fixed": true
  }
);
