// @meta topic=asyncio group=Asyncio
// senior · 23 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Где ограничен loop.add_signal_handler в asyncio?",
    "options": [
      "на Windows и части платформ — не все сигналы поддерживаются",
      "нигде: API идентичен на всех ОС",
      "только внутри потоков, не в главном loop",
      "только в PyPy, в CPython недоступен"
    ],
    "answer": 0,
    "explain": "На Unix handler вешают на SIGINT/SIGTERM и др. На Windows с ProactorEventLoop исторически нельзя так же подписаться на произвольные сигналы — API платформенно-зависимый.",
    "kind": "single",
    "id": "s13",
    "fixed": true
  },
  {
    "q": "Что делает asyncio.shield(awaitable)?",
    "options": [
      "защищает awaitable от отмены снаружи (с нюансами)",
      "отменяет все задачи в loop",
      "создаёт новый процесс",
      "блокирует поток OS на время await"
    ],
    "answer": 0,
    "explain": "shield не даёт внешней отмене Task сразу пробросить CancelledError внутрь защищённого awaitable. Саму обёртку всё же можно отменить — читай документацию и finally.",
    "kind": "single",
    "id": "s30",
    "fixed": true
  },
  {
    "q": "В чём разница asyncio.Semaphore и Lock?",
    "options": [
      "Semaphore допускает до N одновременных владельцев, Lock — только одного",
      "разницы нет — алиасы",
      "Lock только для multiprocessing",
      "Semaphore работает только в threading"
    ],
    "answer": 0,
    "explain": "Lock — mutex (1). Semaphore(5) — пул из 5 «пропусков» (лимит параллельных запросов к API, соединений к БД). Оба неблокирующие для loop.",
    "kind": "single",
    "id": "s47",
    "fixed": true
  },
  {
    "q": "Что вернёт timeout context (3.11)?",
    "options": [
      "отмена по deadline scope",
      "только wait_for legacy",
      "thread join",
      "process kill"
    ],
    "answer": 0,
    "explain": "Результат выражения — отмена по deadline scope. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s80",
    "fixed": true
  },
  {
    "q": "В чём разница Proactor и Selector event loop на Windows?",
    "options": [
      "Proactor на IOCP, Selector на select/poll — разные модели I/O",
      "идентичны на всех версиях Windows",
      "разница только в subprocess, не в сокетах",
      "оба требуют отключения GIL"
    ],
    "answer": 0,
    "explain": "asyncio на Windows по умолчанию ProactorEventLoop (IOCP). Selector — классика Unix. Поведение add_reader/writer и pipe может отличаться — тестируй на целевой ОС.",
    "kind": "single",
    "id": "s96",
    "fixed": true
  },
  {
    "q": "Что делает StreamReader.readexactly(n) в asyncio?",
    "options": [
      "читает ровно n байт или бросает IncompleteReadError",
      "читает до EOF и всегда молча обрезает хвост",
      "читает одну текстовую строку до \\n",
      "выполняет полный HTTP-запрос"
    ],
    "answer": 0,
    "explain": "`readexactly(n)` ждёт ровно n байт. Если поток закрылся раньше — `IncompleteReadError` (частичные данные доступны в исключении). Это удобно для бинарных протоколов с фиксированной длиной кадра.",
    "kind": "single",
    "id": "s112",
    "fixed": true
  },
  {
    "q": "Что делает asyncio.TaskGroup при ошибке в одной задаче?",
    "options": [
      "отменяет остальные задачи группы и поднимает ExceptionGroup",
      "глотает ошибку молча",
      "убивает весь процесс ОС",
      "игнорирует cancellation"
    ],
    "answer": 0,
    "explain": "async with TaskGroup() as tg: tg.create_task(...). Любой fail → cancel siblings, await завершается с ExceptionGroup. Структурированная конкуренция как в Go errgroup.",
    "kind": "single",
    "id": "s144",
    "fixed": true
  },
  {
    "q": "Что вернёт asyncio.TaskGroup (3.11)?",
    "options": [
      "структурированное конкурентное выполнение задач",
      "замена threading",
      "удаляет loop",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — структурированное конкурентное выполнение задач. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s205",
    "fixed": true
  },
  {
    "q": "Что даёт TaskGroup (3.11+)?",
    "options": [
      "structured concurrency: ошибки/отмена детей согласованы",
      "только gather без ошибок",
      "thread pool",
      "GIL off"
    ],
    "answer": 0,
    "explain": "Structured concurrency: ошибки/отмена детей согласованы. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "s219",
    "fixed": true
  },
  {
    "q": "Что такое buffered protocol в asyncio?",
    "options": [
      "низкоуровневое управление буферами чтения/записи протокола",
      "только высокоуровневые StreamReader/StreamWriter",
      "исключительно UDP без TCP",
      "роутер HTTP-запросов в aiohttp"
    ],
    "answer": 0,
    "explain": "Buffered protocol даёт колбэки get_buffer/buffer_updated — можно принимать данные прямо в свой буфер без лишних копий. Streams — более высокий уровень API.",
    "kind": "single",
    "id": "s233",
    "fixed": true
  },
  {
    "q": "Что вернёт Server.close + wait_closed?",
    "options": [
      "корректное завершение слушателя",
      "достаточно close без wait",
      "kill process",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Результат выражения — корректное завершение слушателя. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s261",
    "fixed": true
  },
  {
    "q": "Чем anyio/trio известны в экосистеме async?",
    "options": [
      "structured concurrency и альтернативная модель asyncio (nurseries, cancel scopes)",
      "удалением GIL",
      "синхронным HTTP только",
      "заменой typing"
    ],
    "answer": 0,
    "explain": "Trio — nurseries, строгий cancel scope. anyio — слой совместимости поверх asyncio/trio. Идея — не терять задачи при выходе из scope.",
    "kind": "single",
    "id": "s275",
    "fixed": true
  },
  {
    "q": "Что вернёт Happy Eyeballs / dual stack?",
    "options": [
      "связность IPv6/IPv4",
      "ошибка",
      "HTTP/3 only",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Результат выражения — связность IPv6/IPv4. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s303",
    "fixed": true
  },
  {
    "q": "Что такое server start_serving?",
    "options": [
      "приём соединений",
      "client open",
      "это блокирующий time.sleep в event loop",
      "TLS ticket only"
    ],
    "answer": 0,
    "explain": "Приём соединений. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "s329",
    "fixed": true
  },
  {
    "q": "Почему нельзя звать time.sleep в async-корутине?",
    "options": [
      "блокирует поток event loop — другие задачи не бегут",
      "всегда убивает весь процесс",
      "всегда TypeError",
      "sleep запрещён синтаксисом async def"
    ],
    "answer": 0,
    "explain": "asyncio крутится в одном потоке. time.sleep замораживает его. Нужен await asyncio.sleep(...).",
    "kind": "single",
    "code": "async def bad():\n    import time\n    time.sleep(1)",
    "id": "s342",
    "fixed": true
  },
  {
    "q": "Почему time.sleep() в корутине asyncio плох?",
    "options": [
      "блокирует весь event loop в потоке интерпретатора",
      "блокирует только текущую Task, остальные работают",
      "запрещено синтаксисом async def",
      "требует отключения GIL вручную"
    ],
    "answer": 0,
    "explain": "time.sleep — блокирующий syscall. Пока он идёт, loop не крутит другие корутины. Используй await asyncio.sleep() или выноси блокирующее в executor.",
    "kind": "single",
    "id": "s367",
    "fixed": true
  },
  {
    "q": "С чем не стоит путать create_shared_memory из multiprocessing?",
    "options": [
      "с multiprocessing.shared_memory (другой API той же идеи)",
      "с Queue",
      "с Lock",
      "с Event"
    ],
    "answer": 0,
    "explain": "Имена похожи, модули разные: смотри актуальный API `multiprocessing.shared_memory`. Queue/Lock/Event — про синхронизацию и обмен сообщениями, не про именованный shared block.",
    "kind": "single",
    "id": "s415",
    "fixed": true
  },
  {
    "q": "Что верно про contextvars копируются в Tasks?",
    "options": [
      "да, контекст задачи",
      "нет никогда",
      "только threading local",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Да, контекст задачи. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "s439",
    "fixed": true
  },
  {
    "q": "Что такое backpressure?",
    "options": [
      "торможение производителя, когда потребитель не успевает",
      "увеличение concurrency always",
      "GIL pause",
      "DNS cache"
    ],
    "answer": 0,
    "explain": "Торможение производителя, когда потребитель не успевает. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "s461",
    "fixed": true
  },
  {
    "q": "Что такое datagram endpoint в asyncio?",
    "options": [
      "UDP-эндпоинт (протокол без соединения) через create_datagram_endpoint",
      "только TCP server socket",
      "HTTP/2 stream multiplex",
      "файловый дескриптор для stdin"
    ],
    "answer": 0,
    "explain": "Create_datagram_endpoint строит UDP endpoint: DatagramProtocol шлёт/принимает датаграммы без TCP-сессии. Это не stream/TCP server.",
    "kind": "single",
    "id": "s491",
    "fixed": true
  },
  {
    "q": "Почему блокирующий вызов в async-коде плох?",
    "options": [
      "блокирует event loop — остальные корутины не выполняются",
      "блокирует только текущую OS thread навсегда",
      "улучшает throughput",
      "обязателен для I/O"
    ],
    "answer": 0,
    "explain": "Sync DB driver, requests.get, time.sleep — стопорят loop. async driver, aiohttp, await asyncio.sleep, to_thread.",
    "kind": "single",
    "id": "s499",
    "fixed": true
  },
  {
    "q": "Как должна обрабатываться отмена asyncio Task?",
    "options": [
      "CancelledError в await-точках и cleanup в finally",
      "игнорировать cancel всегда",
      "мгновенное kill OS-процесса",
      "превращать в KeyboardInterrupt"
    ],
    "answer": 0,
    "explain": "task.cancel() → CancelledError при следующем await. В finally закрывай соединения; suppress cancel только осознанно.",
    "kind": "single",
    "id": "s506",
    "fixed": true
  },
  {
    "q": "Почему `time.sleep` внутри корутины — проблема, а `asyncio.sleep` — нет?",
    "options": [
      "time.sleep блокирует поток event loop; asyncio.sleep отдаёт управление loop",
      "asyncio.sleep быстрее на CPU",
      "time.sleep запрещён синтаксисом",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "Один поток loop: любой блокирующий sync (sleep, тяжёлый CPU, sync HTTP) останавливает все задачи. Вынос: asyncio.to_thread / run_in_executor, нативные async-драйверы. Structured concurrency (TaskGroup) отменяет детей при ошибке — меньше «осиротевших» задач.",
    "kind": "single",
    "tags": [
      "asyncio"
    ],
    "difficulty": "senior",
    "id": "s513",
    "fixed": true
  }
);
