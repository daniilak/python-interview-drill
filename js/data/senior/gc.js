// @meta topic=GC group=Stdlib и производительность
// senior · 1 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем вызывать gc.freeze() перед fork?",
    "options": [
      "заморозить объекты до fork, чтобы GC не трогал их при copy-on-write",
      "удалить GIL в дочернем процессе",
      "мгновенно освободить всю RAM",
      "отключить reference counting"
    ],
    "answer": 0,
    "explain": "После fork COW-страницы общие, пока не пишут. gc.collect в ребёнке может тронуть объекты родителя → копирование. freeze() помечает pre-fork объекты «не сканировать».",
    "kind": "single",
    "id": "s61",
    "fixed": true
  }
);
