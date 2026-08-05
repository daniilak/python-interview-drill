// @meta topic=SoC group=Архитектура и дизайн
// senior · 1 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что иллюстрирует «fat models / thin views»?",
    "options": [
      "бизнес-логика в доменном слое, view только координирует",
      "нарушение единственной ответственности",
      "замена SOLID на GoF только",
      "отказ от тестов моделей"
    ],
    "answer": 0,
    "explain": "View/Controller тонкий: валидация входа, вызов сервиса, ответ. Толстые if-else в шаблоне — антипаттерн. В Django это спорный, но узнаваемый лозунг.",
    "kind": "single",
    "id": "s413",
    "fixed": true
  }
);
