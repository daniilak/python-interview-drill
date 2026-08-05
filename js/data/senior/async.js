// @meta topic=async group=Asyncio
// senior · 16 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что происходит при cancel() asyncio Task?",
    "options": [
      "в ближайшей await-точке поднимается CancelledError",
      "убивается OS-поток немедленно",
      "отмена всегда игнорируется",
      "это то же самое, что KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "task.cancel() ставит флаг; при следующем await корутина получает CancelledError. Нужно корректно закрывать ресурсы в finally. shield() защищает вложенный await от внешней отмены.",
    "kind": "single",
    "id": "s64",
    "fixed": true
  },
  {
    "q": "Где обычно проявляется CancelledError при отмене asyncio.Task?",
    "options": [
      "в точках await и в finally отменённой корутины",
      "только после return, никогда в await",
      "в другом OS-процессе",
      "никогда — отмена молчаливая"
    ],
    "answer": 0,
    "explain": "task.cancel() вбрасывает CancelledError в ближайший await. Блок finally всё равно выполнится — там можно освободить ресурсы (и не глотать CancelledError без нужды).",
    "kind": "single",
    "code": "async def work():\n    try:\n        await asyncio.sleep(10)\n    finally:\n        ...",
    "id": "s128",
    "fixed": true
  },
  {
    "q": "От чего защищает asyncio.shield(aw)?",
    "options": [
      "вложенный awaitable от внешней отмены задачи",
      "от KeyboardInterrupt в main",
      "от MemoryError в системе",
      "от изменения globals модуля"
    ],
    "answer": 0,
    "explain": "cancel внешней Task не прервёт await shield(critical_cleanup()). Сам shield не отменяет — важно для commit/rollback в finally при shutdown.",
    "kind": "single",
    "id": "s160",
    "fixed": true
  },
  {
    "q": "Когда asyncio вызывает pause_writing у протокола?",
    "options": [
      "буфер транспорта переполнен — нужен backpressure производителю",
      "GIL временно отдан другому потоку",
      "поток заблокирован на disk I/O",
      "сработал KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "pause_writing/resume_writing — flow control: потребитель не успевает, производитель должен перестать писать, пока буфер не освободится.",
    "kind": "single",
    "id": "s175",
    "fixed": true
  },
  {
    "q": "Главный выигрыш structured concurrency?",
    "options": [
      "время жизни дочерних задач привязано к scope — нет «висящих» task",
      "больше fire-and-forget без await",
      "полное удаление GIL",
      "запрет любых потоков"
    ],
    "answer": 0,
    "explain": "При выходе из async with TaskGroup/nursery все дочерние задачи отменяются или дожидаются. Нет утечек фоновых корутин после return.",
    "kind": "single",
    "id": "s190",
    "fixed": true
  },
  {
    "q": "Как работает cancellation в asyncio?",
    "options": [
      "CancelledError в await-точке; finally должен освобождать ресурсы",
      "задача удаляется без уведомления",
      "отмена возможна только до create_task",
      "CancelledError наследует Exception и всегда глотается"
    ],
    "answer": 0,
    "explain": "task.cancel() → CancelledError на ближайшем await. Обработчик может suppress; в любом случае finally/async with закрывают сокеты и транзакции.",
    "kind": "single",
    "id": "s247",
    "fixed": true
  },
  {
    "q": "Что такое backpressure в asyncio streams?",
    "options": [
      "потребитель сигнализирует производителю приостановить запись при переполнении буфера",
      "автоматическое ускорение сети",
      "отключение TCP_NODELAY",
      "принудительный flush GC"
    ],
    "answer": 0,
    "explain": "drain()/pause_writing — без backpressure быстрый producer съедает память. Контракт flow control в протоколе транспорта.",
    "kind": "single",
    "id": "s289",
    "fixed": true
  },
  {
    "q": "Где cancellation points в asyncio?",
    "options": [
      "на await и в точках, где event loop может вставить CancelledError",
      "только в finally блоках",
      "при import модуля",
      "в синхронном list comprehension"
    ],
    "answer": 0,
    "explain": "Отмена доставляется при следующем await. Чистый CPU без await — cancel отложен; shield() и timeout контексты меняют поведение.",
    "kind": "single",
    "id": "s316",
    "fixed": true
  },
  {
    "q": "Что такое backpressure в потоках данных?",
    "options": [
      "ограничение скорости производителя, когда потребитель не успевает",
      "принудительное ускорение потребителя без лимитов",
      "механизм throttle GIL в CPython",
      "термин только для TCP, не для приложений"
    ],
    "answer": 0,
    "explain": "Без backpressure быстрый producer забьёт очередь/память. Решения: bounded queue, семафоры, сигнал «медленнее» (asyncio.Queue, reactive streams).",
    "kind": "single",
    "id": "s355",
    "fixed": true
  },
  {
    "q": "Что такое trio nursery и cancel scope?",
    "options": [
      "structured concurrency: отмена всех дочерних задач при выходе/ошибке",
      "fire-and-forget без ожидания детей",
      "примитив замены GIL",
      "группа OS-потоков с shared memory"
    ],
    "answer": 0,
    "explain": "async with nursery: spawn tasks; при исключении или закрытии scope Trio отменяет детей. Эталон идеи, которую asyncio.TaskGroup перенял в 3.11.",
    "kind": "single",
    "id": "s379",
    "fixed": true
  },
  {
    "q": "Что такое graceful shutdown async-приложения?",
    "options": [
      "отмена задач, drain соединений, закрытие пулов и ресурсов",
      "немедленный os._exit(0) при SIGTERM",
      "игнорирование SIGINT в production",
      "убийство всех worker без ожидания"
    ],
    "answer": 0,
    "explain": "Получили SIGTERM → перестаём принимать новые запросы, ждём in-flight, закрываем БД/redis, отменяем фоновые Task. Иначе обрыв соединений и потеря данных.",
    "kind": "single",
    "id": "s391",
    "fixed": true
  },
  {
    "q": "В чём разница asyncio.wait и gather с return_exceptions?",
    "options": [
      "разные политики: wait → (done, pending); gather → список результатов/исключений",
      "полностью идентичны во всех случаях",
      "wait всегда отменяет все задачи при первой ошибке",
      "gather не поддерживает исключения"
    ],
    "answer": 0,
    "explain": "wait(..., return_when=FIRST_COMPLETED) гибче по таймаутам. gather удобен для «все результаты разом»; return_exceptions=True не роняет остальные.",
    "kind": "single",
    "id": "s403",
    "fixed": true
  },
  {
    "q": "Что вернёт TCP_NODELAY / latency?",
    "options": [
      "настройки сокета влияют на хвосты",
      "только Python sleep",
      "GIL socket",
      "HTTP/3 only"
    ],
    "answer": 0,
    "explain": "Результат выражения — настройки сокета влияют на хвосты. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s427",
    "fixed": true
  },
  {
    "q": "Что важно знать про сбой в __aenter__ и отмену?",
    "options": [
      "семантика async context manager при ошибке/cancel непростая — читай документацию и тесты",
      "всё всегда ведёт себя как обычный sync with без нюансов",
      "cancel никогда не влияет на context manager",
      "__aenter__ не может бросать исключения"
    ],
    "answer": 0,
    "explain": "Если __aenter__ упал или таск отменили, не всегда вызывается __aexit__ так, как ожидаешь «по аналогии с sync». Проверяй конкретную семантику и пиши тесты на cancel/ошибку входа.",
    "kind": "single",
    "id": "s450",
    "fixed": true
  },
  {
    "q": "Что означает «nursery cancel all children on error»?",
    "options": [
      "structured concurrency: ошибка одного ребёнка отменяет остальных",
      "дети продолжают работу после ошибки sibling",
      "отмена только родителя без детей",
      "модель OS thread pool"
    ],
    "answer": 0,
    "explain": "Trio nursery и asyncio.TaskGroup: не оставлять фоновые задачи сиротами. Ошибка → cancel siblings → raise.",
    "kind": "single",
    "id": "s472",
    "fixed": true
  },
  {
    "q": "Что делает anyio.from_thread?",
    "options": [
      "мост: вызвать async-корутину из синхронного потока",
      "замена threading.Lock",
      "отключение event loop",
      "fork без exec"
    ],
    "answer": 0,
    "explain": "from_thread.run(async_fn) блокирует поток до результата корутины в связанном loop. Обратное — to_thread.run_sync.",
    "kind": "single",
    "id": "s482",
    "fixed": true
  }
);
