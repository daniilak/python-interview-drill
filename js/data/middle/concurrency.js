// @meta topic=concurrency group=Потоки, процессы, GIL
// middle · 1 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Когда уместен threading в CPython?",
    "options": [
      "когда много времени уходит на ожидание I/O",
      "для чистого CPU-bound Python без отпускания GIL",
      "как полная замена multiprocessing всегда",
      "только на Windows"
    ],
    "answer": 0,
    "explain": "Потоки хороши для I/O: пока один ждёт сеть/диск, другие работают. Чистый Python CPU упирается в GIL — бери процессы/native.",
    "kind": "single",
    "id": "m142",
    "fixed": true
  }
);
