// @meta topic=asyncio group=Asyncio
// middle · 32 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что объявляет async def?",
    "options": [
      "корутину",
      "блокирующий time.sleep внутри корутины",
      "процесс",
      "генератор синхронный"
    ],
    "answer": 0,
    "explain": "Корутину. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m5",
    "fixed": true
  },
  {
    "q": "Что такое asyncio.Future?",
    "options": [
      "объект «результат когда-нибудь будет» — его можно await",
      "блокирующий вызов time.sleep",
      "новый OS-поток на каждый await",
      "отдельный процесс multiprocessing"
    ],
    "answer": 0,
    "explain": "Future — низкоуровневый контейнер будущего результата; Task — Future, привязанный к корутине на loop. Это не thread и не process.",
    "kind": "single",
    "id": "m20",
    "fixed": true
  },
  {
    "q": "Что вернёт Runner (3.11)?",
    "options": [
      "управление loop run упрощённо",
      "замена threading",
      "process pool",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Результат выражения — управление loop run упрощённо. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m35",
    "fixed": true
  },
  {
    "q": "Что нужно для await?",
    "options": [
      "async def",
      "обычный def",
      "блокирующий time.sleep внутри корутины",
      "новый OS-поток на каждый await"
    ],
    "answer": 0,
    "explain": "async def объявляет корутинную функцию; тело с await не выполнить без event loop.",
    "kind": "single",
    "code": "async def main():\n    await asyncio.sleep(0)",
    "id": "m50",
    "fixed": true
  },
  {
    "q": "Что делает asyncio.wait_for(awaitable, timeout) при истечении времени?",
    "options": [
      "отменяет awaitable и бросает TimeoutError",
      "вызывает блокирующий time.sleep",
      "убивает весь процесс ОС",
      "молча возвращает None"
    ],
    "answer": 0,
    "explain": "wait_for ставит дедлайн: по таймауту внутренний awaitable отменяется, снаружи — TimeoutError. Это не kill процесса и не sleep.",
    "kind": "single",
    "id": "m80",
    "fixed": true
  },
  {
    "q": "От чего asyncio.shield защищает внутренний awaitable?",
    "options": [
      "от немедленной отмены снаружи (с нюансами)",
      "от KeyboardInterrupt на уровне ОС",
      "от kill процесса",
      "от MemoryError"
    ],
    "answer": 0,
    "explain": "shield не даёт внешней отмене Task сразу пробросить CancelledError внутрь. OS-сигналы и OOM он не «экранирует».",
    "kind": "single",
    "id": "m94",
    "fixed": true
  },
  {
    "q": "Что планирует asyncio.create_task?",
    "options": [
      "выполнение корутины на текущем event loop",
      "новый OS-поток",
      "новый процесс",
      "синхронный вызов функции сразу в этом же стеке без loop"
    ],
    "answer": 0,
    "explain": "Create_task оборачивает корутину в Task и планирует её на loop. Это не thread/process и не обычный sync-вызов.",
    "kind": "single",
    "id": "m108",
    "fixed": true
  },
  {
    "q": "Что вернёт CancelledError с 3.8+?",
    "options": [
      "BaseException subclass (не Exception)",
      "обычный Exception",
      "блокирующий time.sleep внутри корутины",
      "новый OS-поток на каждый await"
    ],
    "answer": 0,
    "explain": "Не глотать широким except Exception бездумно ранее — уточняй версию/практику.",
    "kind": "single",
    "id": "m122",
    "fixed": true
  },
  {
    "q": "Что означает: gather n=2 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Пробросит исключение (остальные могут продолжать до отмены политики). Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m150",
    "fixed": true
  },
  {
    "q": "В чём риск create_task без await и без сохранения ссылки?",
    "options": [
      "задачу может собрать GC; исключения легко потерять",
      "задачи выполняются надёжнее",
      "они становятся синхронными",
      "create_task так запрещён"
    ],
    "answer": 0,
    "explain": "«Fire-and-forget» без strong ref — риск сборки и «Task exception was never retrieved». Держи ссылку или явно обрабатывай.",
    "kind": "single",
    "id": "m163",
    "fixed": true
  },
  {
    "q": "Что вернёт ensure_future / create_task?",
    "options": [
      "планируют корутину",
      "блокируют",
      "создают process",
      "компилируют C"
    ],
    "answer": 0,
    "explain": "Результат выражения — планируют корутину. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m176",
    "fixed": true
  },
  {
    "q": "Что вернёт eager_task_factory (3.12)?",
    "options": [
      "задачи стартуют немедленно",
      "удаляет cancel",
      "process tasks",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — задачи стартуют немедленно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m189",
    "fixed": true
  },
  {
    "q": "Что означает: gather n=4 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Пробросит исключение (остальные могут продолжать до отмены политики). Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m202",
    "fixed": true
  },
  {
    "q": "В чём разница: create_task vs await coro напрямую?",
    "options": [
      "task планирует конкурентно; await — последовательно",
      "одинаково",
      "create_task блокирует",
      "await запрещён"
    ],
    "answer": 0,
    "explain": "Task планирует конкурентно; await — последовательно. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m215",
    "fixed": true
  },
  {
    "q": "В чём разница: create_task vs await coro сразу?",
    "options": [
      "create_task планирует в фоне event loop",
      "синонимы",
      "create_task блокирует поток",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Create_task планирует в фоне event loop. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m228",
    "fixed": true
  },
  {
    "q": "Что делает asyncio.gather(*awaitables)?",
    "options": [
      "запускает их конкурентно на loop и ждёт все результаты",
      "выполняет строго последовательно без concurrency",
      "создаёт новый процесс на каждую задачу",
      "блокирует OS-поток через sleep"
    ],
    "answer": 0,
    "explain": "gather планирует awaitable'ы и собирает результаты (или первую ошибку — см. return_exceptions).",
    "kind": "single",
    "id": "m241",
    "fixed": true
  },
  {
    "q": "Что делать с незавершёнными Task при остановке loop?",
    "options": [
      "корректно cancel и await, иначе предупреждения и утечки",
      "ничего — GC всегда безопасен",
      "вызвать os._exit без отмены",
      "перевести их в threading"
    ],
    "answer": 0,
    "explain": "На shutdown отменяй и дожидайся задач, иначе «Task was destroyed but it is pending» и потерянные ошибки.",
    "kind": "single",
    "id": "m254",
    "fixed": true
  },
  {
    "q": "Зачем asyncio.run_in_executor?",
    "options": [
      "выполнить блокирующий код в thread/process pool, не стопоря loop",
      "заменить все await на sync",
      "убить event loop",
      "создать новый интерпретатор"
    ],
    "answer": 0,
    "explain": "Блокирующий I/O или CPU в executor: loop продолжает крутить другие задачи. Выбор pool зависит от типа нагрузки.",
    "kind": "single",
    "id": "m267",
    "fixed": true
  },
  {
    "q": "Что запускает asyncio.gather?",
    "options": [
      "переданные awaitable конкурентно на текущем loop",
      "строго один за другим без concurrency",
      "отдельный OS-процесс на каждый",
      "только sync def"
    ],
    "answer": 0,
    "explain": "gather — удобный fan-out/fan-in по корутинам/tasks. Последовательность — через обычный await по очереди.",
    "kind": "single",
    "id": "m280",
    "fixed": true
  },
  {
    "q": "Зачем нужен loop.call_soon_threadsafe?",
    "options": [
      "запланировать колбэк на loop из другого потока",
      "из корутины вместо create_task",
      "создать новый процесс",
      "освободить GIL навсегда"
    ],
    "answer": 0,
    "explain": "Call_soon_threadsafe — безопасный способ дернуть loop из чужого потока. Из корутин на том же loop обычно create_task/call_soon.",
    "kind": "single",
    "id": "m293",
    "fixed": true
  },
  {
    "q": "Что вернёт to_thread (3.9)?",
    "options": [
      "await блокирующую функцию в thread",
      "process pool always",
      "sync sleep",
      "GIL remove"
    ],
    "answer": 0,
    "explain": "Результат выражения — await блокирующую функцию в thread. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m306",
    "fixed": true
  },
  {
    "q": "Чем опасен create_task «в столсую» без ссылки и без await?",
    "options": [
      "задачу может собрать GC; исключения легко потерять",
      "задачи становятся надёжнее",
      "это синтаксическая ошибка",
      "loop сразу падает"
    ],
    "answer": 0,
    "explain": "Держи ссылку на Task или явно обрабатывай результат/исключение. Иначе — предупреждения и тихие фейлы.",
    "kind": "single",
    "id": "m319",
    "fixed": true
  },
  {
    "q": "Выбери все верные про asyncio?",
    "options": [
      "корутина стартует только при await/создании Task",
      "asyncio.gather запускает awaitables конкурентно в одном потоке event loop",
      "time.sleep в корутине блокирует весь loop",
      "asyncio.to_thread нужен, чтобы увести блокирующий код с loop"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explain": "Все пункты верны: async не магия — блокирующий sync внутри loop останавливает всех. Верными здесь будут пункты: «корутина стартует только при await/создании Task»; «asyncio.gather запускает awaitables конкурентно в одном потоке event loop»; «time.sleep в корутине блокирует весь loop»; «asyncio.to_thread нужен, чтобы увести блокирующий код с loop».",
    "kind": "multi",
    "tags": [
      "asyncio"
    ],
    "difficulty": "middle",
    "id": "m332",
    "fixed": true
  },
  {
    "q": "Что такое as_completed итерирует?",
    "options": [
      "по мере готовности",
      "в порядке запуска строго",
      "только errors",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "По мере готовности. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m345",
    "fixed": true
  },
  {
    "q": "Что означает: gather n=3 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Пробросит исключение (остальные могут продолжать до отмены политики). Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m358",
    "fixed": true
  },
  {
    "q": "Чем рискован create_task без сохранения ссылки?",
    "options": [
      "сборщик может уничтожить задачу; исключения теряются",
      "задачи выполняются синхронно",
      "это SyntaxError",
      "loop запрещает больше одной задачи"
    ],
    "answer": 0,
    "explain": "Сохраняй Task или await/gather. Иначе — «exception never retrieved».",
    "kind": "single",
    "id": "m371",
    "fixed": true
  },
  {
    "q": "Что такое asyncio StreamReader/StreamWriter?",
    "options": [
      "высокоуровневые обёртки над TCP-потоками",
      "только UDP",
      "файловые дескрипторы без сети",
      "синхронный socket API без loop"
    ],
    "answer": 0,
    "explain": "open_connection/start_server дают reader/writer для асинхронного чтения/записи байтов по TCP.",
    "kind": "single",
    "id": "m384",
    "fixed": true
  },
  {
    "q": "Что будет с необработанным исключением в asyncio.Task?",
    "options": [
      "его логируют при уничтожении Task (в новых версиях заметнее)",
      "оно всегда тихо пропадает без следа в любом случае",
      "убивает весь OS-процесс мгновенно гарантированно",
      "превращает Task в generator"
    ],
    "answer": 0,
    "explain": "Не забирай результат — получишь warning при GC. Лучше await/gather и явная обработка.",
    "kind": "single",
    "id": "m396",
    "fixed": true
  },
  {
    "q": "Почему для asyncio.Lock нужен async with, а не обычный with?",
    "options": [
      "нужен async CM с __aenter__/__aexit__, иначе нельзя await внутри acquire",
      "обычный with быстрее и предпочтительнее",
      "async with запрещён для Lock",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "Синхронный with не умеет await. asyncio.Lock — async context manager.",
    "kind": "single",
    "id": "m408",
    "fixed": true
  },
  {
    "q": "Что верно про Queue в asyncio безопасна для?",
    "options": [
      "корутин одного loop",
      "произвольных OS threads без грязи",
      "процессов",
      "GIL bypass"
    ],
    "answer": 0,
    "explain": "Корутин одного loop. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m419",
    "fixed": true
  },
  {
    "q": "Что такое await можно внутри?",
    "options": [
      "async def",
      "любой функции",
      "класса без async",
      "блокирующий time.sleep внутри корутины"
    ],
    "answer": 0,
    "explain": "Async def. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "id": "m430",
    "fixed": true
  },
  {
    "q": "Что вернёт get_running_loop()?",
    "options": [
      "loop текущей корутины",
      "создаёт новый",
      "None всегда в thread",
      "process loop"
    ],
    "answer": 0,
    "explain": "Результат выражения — loop текущей корутины. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m451",
    "fixed": true
  }
);
