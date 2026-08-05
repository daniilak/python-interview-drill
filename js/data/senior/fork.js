// @meta topic=fork group=Потоки, процессы, GIL
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем os.register_at_fork?",
    "options": [
      "зарегистрировать хуки до/после fork для сброса locks и небезопасного состояния",
      "создать новый поток в дочернем процессе",
      "отключить GIL в child process",
      "заменить multiprocessing.spawn"
    ],
    "answer": 0,
    "explain": "После fork дочерний процесс наследует заблокированные mutex из потоков родителя. Хуки before/after fork сбрасывают пулы, логгеры, RNG.",
    "kind": "single",
    "id": "s189",
    "fixed": true
  },
  {
    "q": "Почему fork() в многопоточном процессе опасен?",
    "options": [
      "дочерний процесс наследует сломанное состояние locks и потоков",
      "fork запрещён на Linux",
      "после fork GIL удваивается",
      "fork автоматически убивает все потоки безопасно"
    ],
    "answer": 0,
    "explain": "Только вызывающий поток переживает fork; lock, захваченный другим потоком в родителе, может остаться «занятым» в ребёнке → deadlock. На macOS default — spawn.",
    "kind": "single",
    "id": "s366",
    "fixed": true
  },
  {
    "q": "Когда posix_spawn предпочтительнее fork?",
    "options": [
      "безопасность и скорость в многопоточном родителе на части платформ",
      "всегда хуже fork по всем метрикам",
      "только имя на Windows",
      "когда нужен shared address space"
    ],
    "answer": 0,
    "explain": "spawn/exec не копирует адресное пространство с висящими locks. macOS, современный multiprocessing default.",
    "kind": "single",
    "id": "s512",
    "fixed": true
  }
);
