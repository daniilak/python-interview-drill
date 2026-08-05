// @meta topic=coroutines group=Генераторы и итераторы
// middle · 2 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что делает gen.send(x)?",
    "options": [
      "передаёт x результатом текущего yield и возобновляет генератор",
      "всегда бросает StopIteration",
      "эквивалент close()",
      "создаёт новый генератор"
    ],
    "answer": 0,
    "explain": "После первого next, send(value) становится тем, что получает `y = yield ...`. Первый запуск — только next/send(None).",
    "kind": "single",
    "id": "m252",
    "fixed": true
  },
  {
    "q": "Можно ли напрямую await обычный generator?",
    "options": [
      "нет (нужна корутина; @types.coroutine — отдельный нюанс)",
      "да, любой gen await'ится",
      "да, если есть yield from",
      "только в Python 2"
    ],
    "answer": 0,
    "explain": "await ждёт awaitable (coroutine, Task, Future…). Обычный generator — не awaitable, пока специально не обёрнут.",
    "kind": "single",
    "id": "m394",
    "fixed": true
  }
);
