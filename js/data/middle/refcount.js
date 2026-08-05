// @meta topic=refcount group=Stdlib и производительность
// middle · 1 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что показывает sys.getrefcount(obj)?",
    "options": [
      "число ссылок на объект (часто +1 из‑за временной ссылки аргумента)",
      "размер в байтах",
      "поколение GC",
      "число потоков"
    ],
    "answer": 0,
    "explain": "Счётчик ссылок CPython. Вызов getrefcount сам добавляет временную ссылку — не удивляйся +1.",
    "kind": "single",
    "id": "m464",
    "fixed": true
  }
);
