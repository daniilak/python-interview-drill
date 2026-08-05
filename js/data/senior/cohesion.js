// @meta topic=cohesion group=Архитектура и дизайн
// senior · 1 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Пакет billing/ с invoice, payment, refund — хорошая связность?",
    "options": [
      "да, связность по домену (functional cohesion)",
      "нет, это coupling с UI",
      "нарушение DRY автоматически",
      "требует одного файла на весь проект"
    ],
    "answer": 0,
    "explain": "Модули одного bounded context вместе — высокая cohesion. Плохо, когда utils смешивает billing и auth без границ.",
    "kind": "single",
    "id": "s523",
    "fixed": true
  }
);
