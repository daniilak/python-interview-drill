// @meta topic=SoC group=Архитектура и дизайн
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "View смешивает SQL и HTML в одной функции — что нарушено?",
    "options": [
      "Separation of Concerns — разные обязанности свалены вместе",
      "только DRY без SoC",
      "GIL",
      "UTF-8"
    ],
    "answer": 0,
    "explain": "Разделяй доступ к данным, бизнес-логику и представление — проще тестировать и менять.",
    "kind": "single",
    "id": "m456",
    "fixed": true
  },
  {
    "q": "Что такое Separation of Concerns?",
    "options": [
      "разные аспекты системы живут в разных модулях/слоях",
      "всё в одном God object",
      "запрет функций",
      "только про UI-цвета"
    ],
    "answer": 0,
    "explain": "SoC снижает связность: меняешь представление — не трогаешь БД-слой.",
    "kind": "single",
    "id": "m494",
    "fixed": true
  }
);
