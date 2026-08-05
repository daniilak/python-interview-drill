// @meta topic=GC group=Stdlib и производительность
// middle · 3 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что делает gc.disable()?",
    "options": [
      "отключает cyclic GC",
      "отключает refcount",
      "GIL off",
      "async off"
    ],
    "answer": 0,
    "explain": "Refcount остаётся — Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "id": "m768",
    "fixed": true
  },
  {
    "q": "Что собирает циклические ссылки в CPython?",
    "options": [
      "циклический GC модуля gc (поверх refcounting)",
      "только refcount без циклов",
      "только ОС swap",
      "pickle"
    ],
    "answer": 0,
    "explain": "refcount не разрывает циклы A↔B; за это отвечает generational GC.",
    "kind": "single",
    "id": "m789",
    "fixed": true
  },
  {
    "q": "Что делает gc.get_referrers?",
    "options": [
      "возвращает объекты, которые ссылаются на данный",
      "считает refcount точно как getrefcount",
      "удаляет ссылки",
      "включает GC"
    ],
    "answer": 0,
    "explain": "Отладка утечек/циклов. Может быть медленно и «шумным».",
    "kind": "single",
    "id": "m810",
    "fixed": true
  }
);
