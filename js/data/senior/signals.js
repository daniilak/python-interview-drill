// @meta topic=signals group=Потоки, процессы, GIL
// senior · 4 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем asyncio использует signal.set_wakeup_fd?",
    "options": [
      "пробудить event loop из обработчика сигнала через запись в pipe/fd",
      "ускорить сборку мусора при SIGTERM",
      "заменить os.fork в дочерних процессах",
      "отключить GIL на время сигнала"
    ],
    "answer": 0,
    "explain": "Обработчик сигнала не может безопасно трогать loop. Запись в wakeup fd будит selector, и loop обрабатывает сигнал в своём потоке.",
    "kind": "single",
    "id": "s174",
    "fixed": true
  },
  {
    "q": "Когда выполняется обработчик сигнала в CPython?",
    "options": [
      "между байткод-инструкциями основного потока (не в произвольной точке C)",
      "немедленно прерывая любой C-код",
      "только в дочерних потоках",
      "только при gc.collect()"
    ],
    "answer": 0,
    "explain": "Сигнал записан в pending; eval loop проверяет между opcodes. Долгий C-extension без проверок задерживает доставку сигнала.",
    "kind": "single",
    "id": "s302",
    "fixed": true
  },
  {
    "q": "Как сигналы Unix соотносятся с потоками в Python?",
    "options": [
      "обработчик выполняется в главном потоке; доставка только если он крутит интерпретатор",
      "в каждом потоке свой SIGINT независимо",
      "сигналы нельзя ловить в Python",
      "только через multiprocessing"
    ],
    "answer": 0,
    "explain": "Python 3.8+: сигналы в main thread. Worker threads не должны полагаться на signal handler — используй queue/pipe для остановки.",
    "kind": "single",
    "id": "s315",
    "fixed": true
  },
  {
    "q": "В каком потоке SIGINT обычно становится KeyboardInterrupt?",
    "options": [
      "в главном потоке интерпретатора",
      "одинаково и надёжно в любом потоке",
      "только внутри asyncio Task",
      "только в multiprocessing worker"
    ],
    "answer": 0,
    "explain": "Обработчик SIGINT в CPython заводит `KeyboardInterrupt` в главном потоке. В обычных worker-потоках этот сигнал так не превращается в исключение — не жди одинакового поведения «в любом потоке».",
    "kind": "single",
    "id": "s414",
    "fixed": true
  }
);
