// @meta topic=subinterpreters group=Нативные расширения
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое каналы между subinterpreter'ами в C-API?",
    "options": [
      "ограниченный обмен данными между изолированными интерпретаторами в одном процессе",
      "общая память без синхронизации для всех потоков",
      "замена multiprocessing.Queue",
      "прямой доступ к GIL другого интерпретатора"
    ],
    "answer": 0,
    "explain": "PEP 554 и развитие: каналы передают bytes/объекты с изоляцией GIL per interpreter. Не полная shared memory модель.",
    "kind": "single",
    "id": "s214",
    "fixed": true
  },
  {
    "q": "Цель PEP 554 / subinterpreters?",
    "options": [
      "несколько изолированных интерпретаторов Python в одном процессе",
      "замена asyncio",
      "автоматический multiprocessing без GIL",
      "встроенный Redis"
    ],
    "answer": 0,
    "explain": "Отдельный GIL per interpreter (направление 3.12+): параллель CPU-bound Python в одном процессе при безопасном обмене.",
    "kind": "single",
    "id": "s324",
    "fixed": true
  },
  {
    "q": "Зачем нужна изоляция subinterpreters?",
    "options": [
      "меньше shared mutable state между контекстами в одном процессе",
      "замена Docker и VM",
      "удаление asyncio из stdlib",
      "ускорение pickle между процессами"
    ],
    "answer": 0,
    "explain": "Отдельные интерпретаторы — свои модули/globals (в пределах API). Меньше гонок, чем один GIL + общие dict, но не полная sandbox как процесс.",
    "kind": "single",
    "id": "s398",
    "fixed": true
  }
);
