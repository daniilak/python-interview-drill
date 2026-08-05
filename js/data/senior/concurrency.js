// @meta topic=concurrency group=Потоки, процессы, GIL
// senior · 16 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "В чём разница memory_order seq_cst и relaxed в C-расширениях?",
    "options": [
      "seq_cst даёт глобальный порядок; relaxed — только атомарность без синхронизации",
      "это уровни блокировки GIL",
      "разные режимы asyncio Task",
      "seq_cst работает только на Windows"
    ],
    "answer": 0,
    "explain": "Relaxed гарантирует атомарность операции, но не порядок относительно других атомарных. seq_cst — самый строгий порядок в модели C++11/C11. Важно при lock-free структурах в native-коде.",
    "kind": "single",
    "id": "s12",
    "fixed": true
  },
  {
    "q": "В чём разница wait-free и lock-free?",
    "options": [
      "wait-free: каждый поток прогрессирует за ограничённое число шагов; lock-free — хотя бы один",
      "это синонимы в стандарте C++",
      "термины уровня GIL в CPython",
      "разные названия asyncio Task"
    ],
    "answer": 0,
    "explain": "Lock-free: система в целом движется, но отдельный поток может голодать. Wait-free сильнее — гарантия прогресса каждого потока. Обе сильнее блокировок по определению прогресса.",
    "kind": "single",
    "id": "s29",
    "fixed": true
  },
  {
    "q": "Почему asyncio.Lock не блокирует OS-поток?",
    "options": [
      "он паркует корутину до освобождения, event loop переключается",
      "берёт GIL навсегда на время ожидания",
      "убивает event loop при contention",
      "всегда spawn-ит новый процесс"
    ],
    "answer": 0,
    "explain": "asyncio примитивы кооперативны: await lock.acquire() отдаёт управление loop. Поток не стоит в kernel wait — другие корутины работают. threading.Lock блокирует поток ОС.",
    "kind": "single",
    "id": "s46",
    "fixed": true
  },
  {
    "q": "Безопасны ли составные операции с dict в многопоточности под GIL?",
    "options": [
      "отдельные байткод-операции защищены GIL, но check-then-act всё равно гонка",
      "dict полностью ACID-транзакционен между потоками",
      "любая последовательность операций с dict всегда атомарна",
      "dict из коробки безопасен между процессами без локов"
    ],
    "answer": 0,
    "explain": "GIL делает отдельные операции со словарём «атомарными» на уровне байткода, но не спасает от логических гонок: `if key not in d: d[key] = ...` — уже check-then-act. Для инвариантов нужны Lock или очередь/один владелец данных.",
    "kind": "single",
    "id": "s63",
    "fixed": true
  },
  {
    "q": "Что такое false sharing в многопоточности?",
    "options": [
      "разные потоки пишут в разные переменные одной cache line — лишний contention",
      "ложное сообщение об ошибке GIL",
      "безопасный shared list.append без lock",
      "совместное использование pickle между процессами"
    ],
    "answer": 0,
    "explain": "CPU кэширует линии (~64 байта). Два atomic счётчика рядом в памяти — инвалидация линии при каждой записи другим ядром. Лечат padding, разнесением данных.",
    "kind": "single",
    "id": "s79",
    "fixed": true
  },
  {
    "q": "Что вернёт memory barrier / volatile в Python?",
    "options": [
      "не как в C; полагайся на queue/Lock семантику",
      "есть volatile keyword",
      "GIL = full barrier always formally for data races без sync? нет",
      "atomic int std"
    ],
    "answer": 0,
    "explain": "Результат выражения — не как в C; полагайся на queue/Lock семантику. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s95",
    "fixed": true
  },
  {
    "q": "Для чего ProcessPoolExecutor в concurrent.futures?",
    "options": [
      "параллельный CPU-bound код в отдельных процессах, обход GIL",
      "замена asyncio для I/O",
      "печать в stdout из главного GUI-потока",
      "мелкие print без нагрузки на CPU"
    ],
    "answer": 0,
    "explain": "Потоки не ускоряют CPU-bound из‑за GIL. Process pool — отдельные интерпретаторы. Цена — pickle задач, память, latency старта воркеров.",
    "kind": "single",
    "id": "s111",
    "fixed": true
  },
  {
    "q": "Когда message passing предпочтительнее shared memory?",
    "options": [
      "когда важна простота рассуждений и меньше гонок за общие структуры",
      "всегда — shared memory бесполезен",
      "только когда GIL отключён",
      "только в NumPy без multiprocessing"
    ],
    "answer": 0,
    "explain": "Очереди/каналы (multiprocessing.Queue, asyncio) передают копии/ссылки сообщений. Shared list + lock — легко ошибиться. Go-стиль: «не общай память, общайся сообщениями».",
    "kind": "single",
    "id": "s127",
    "fixed": true
  },
  {
    "q": "Есть ли в стандартном Python software transactional memory (STM)?",
    "options": [
      "нет стандартного STM — обычно берут locks/actors/очереди",
      "да, модуль stm в stdlib с Python 3.11",
      "GIL и есть полноценный STM",
      "asyncio.Queue реализует STM"
    ],
    "answer": 0,
    "explain": "В CPython нет стандартного STM. Для общей памяти используют threading.Lock, очереди, multiprocessing, actors. GIL не заменяет транзакционную память.",
    "kind": "single",
    "id": "s143",
    "fixed": true
  },
  {
    "q": "Что даёт модуль concurrent.futures?",
    "options": [
      "ThreadPoolExecutor и ProcessPoolExecutor для параллельных задач",
      "только asyncio совместимость",
      "замену multiprocessing.Queue",
      "GIL-free threading"
    ],
    "answer": 0,
    "explain": "Высокоуровневый API submit/map: потоки для I/O, процессы для CPU-bound в CPython. Future — результат и исключение.",
    "kind": "single",
    "id": "s260",
    "fixed": true
  },
  {
    "q": "Когда ProcessPool лучше ThreadPool в CPython?",
    "options": [
      "CPU-bound задачи — обход GIL отдельными процессами",
      "любой I/O всегда быстрее в процессах",
      "когда нужен shared mutable state без синхронизации",
      "для одной лёгкой функции на 1ms"
    ],
    "answer": 0,
    "explain": "Потоки хороши для I/O (GIL отпускается). CPU-bound Python — процессы или native/numba; overhead spawn учитывай.",
    "kind": "single",
    "id": "s288",
    "fixed": true
  },
  {
    "q": "Что меняет free-threaded CPython (3.13+)?",
    "options": [
      "опциональная сборка без GIL (PEP 703)",
      "удаление модуля threading",
      "запрет multiprocessing",
      "автоматический JIT для всего байткода"
    ],
    "answer": 0,
    "explain": "nogil-сборка позволяет параллельный байткод, но требует thread-safe структур и пересмотра расширений. Пока эксперимент, не default.",
    "kind": "single",
    "id": "s378",
    "fixed": true
  },
  {
    "q": "В чём идея subinterpreters per request?",
    "options": [
      "изоляция state в процессе ценой сложности и ограничений API",
      "замена Kubernetes одним процессом",
      "полное удаление GIL без пересборки",
      "ускорение JSON в 10× автоматически"
    ],
    "answer": 0,
    "explain": "Отдельный subinterpreter на запрос даёт изолированные globals/GIL (в развитии). Trade-off: shared objects, C-extensions, overhead создания.",
    "kind": "single",
    "id": "s390",
    "fixed": true
  },
  {
    "q": "Почему multiprocessing обходит ограничение GIL?",
    "options": [
      "отдельные процессы со своим интерпретатором и памятью",
      "отключает GIL в родительском процессе",
      "использует greenlets вместо OS threads",
      "работает только на Windows Fibers"
    ],
    "answer": 0,
    "explain": "GIL на процесс. Pool процессов параллелит CPU-bound Python. Цена: pickle IPC, память, сложнее shared state (нужен shared_memory/Manager).",
    "kind": "single",
    "id": "s402",
    "fixed": true
  },
  {
    "q": "Чем заменяют RCU-подобные идеи в Python?",
    "options": [
      "иммутабельные структуры и атомарная замена ссылки",
      "встроенная lock-free очередь в stdlib",
      "автоматический RCU в GIL",
      "только multiprocessing.Manager"
    ],
    "answer": 0,
    "explain": "Чистый Python без lock-free: tuple/dict копируете и публикуете новую ссылку под lock или в single-writer. Для read-heavy — версионирование.",
    "kind": "single",
    "id": "s449",
    "fixed": true
  },
  {
    "q": "Насколько реалистична lock-free queue в чистом Python?",
    "options": [
      "сложно и редко нужно; обычно queue + locks под GIL",
      "встроена в stdlib как LockFreeQueue",
      "быстрее asyncio всегда",
      "GIL делает lock-free тривиальным"
    ],
    "answer": 0,
    "explain": "Без atomics в stdlib настоящий lock-free — на C или в nogil-сборке. Для большинства — queue.Queue достаточно.",
    "kind": "single",
    "id": "s505",
    "fixed": true
  }
);
