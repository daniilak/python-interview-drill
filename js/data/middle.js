window.QUESTIONS_MIDDLE = [
  {
    "topic": "enum",
    "q": "Что такое enum.Enum нужен для?",
    "options": [
      "именованных констант",
      "float",
      "async",
      "GIL flags"
    ],
    "answer": 0,
    "explain": "Перечисления. Подходит ответ «именованных констант». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m1"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[3, 3, 3, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default i=i фиксирует значение на итерации. Подходит ответ «[0, 1, 2, 3]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(4)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m2"
  },
  {
    "topic": "итераторы",
    "q": "Что выведет код?",
    "options": [
      "1",
      "StopIteration сразу",
      "None",
      "[1,2]"
    ],
    "answer": 0,
    "explain": "Iter по списку; next берёт первый элемент. Подходит ответ «1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "print(next(iter([1, 2])))",
    "group": "Генераторы и итераторы",
    "id": "m3"
  },
  {
    "topic": "ASGI",
    "q": "Что такое Starlette/FastAPI?",
    "options": [
      "ASGI-фреймворки",
      "только WSGI",
      "GUI",
      "ORM"
    ],
    "answer": 0,
    "explain": "Асинхронный стек. Подходит ответ «ASGI-фреймворки».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m4"
  },
  {
    "topic": "asyncio",
    "q": "Что такое async def объявляет?",
    "options": [
      "корутину",
      "поток",
      "процесс",
      "генератор синхронный"
    ],
    "answer": 0,
    "explain": "Coroutine function. Подходит ответ «корутину». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m5"
  },
  {
    "topic": "exceptions",
    "q": "Что такое ValueError наследует?",
    "options": [
      "Exception",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От ValueError до Exception через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m6"
  },
  {
    "topic": "логирование",
    "q": "Выбери верный вариант: Предпочтительнее print для libs?",
    "options": [
      "logging",
      "sys.stdout.write только",
      "input",
      "warnings всегда"
    ],
    "answer": 0,
    "explain": "Модуль logging. Подходит ответ «logging». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m7"
  },
  {
    "topic": "магические",
    "q": "Что такое __call__ делает объект?",
    "options": [
      "вызываемым",
      "итерируемым",
      "контекстом",
      "дескриптором"
    ],
    "answer": 0,
    "explain": "Obj(). Подходит ответ «вызываемым».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m8"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт abstractmethod + async def?",
    "options": [
      "поддерживается",
      "нельзя",
      "только sync",
      "только property"
    ],
    "answer": 0,
    "explain": "Абстрактные корутины. Подходит ответ «поддерживается».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m9"
  },
  {
    "topic": "is",
    "q": "Выбери верный вариант: Малые int кэшируются; обычно (256 is 256)?",
    "options": [
      "True",
      "False",
      "ошибка",
      "зависит от OS только"
    ],
    "answer": 0,
    "explain": "Interning малых целых в CPython. Подходит ответ «True».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m10"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: nogil / free-threading статус?",
    "options": [
      "эксперименты/опции новых версий",
      "уже default везде без оговорок",
      "отменён навсегда",
      "только Jython"
    ],
    "answer": 0,
    "explain": "Следи за релизом CPython. Подходит ответ «эксперименты/опции новых версий». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m11"
  },
  {
    "topic": "алгоритмы",
    "q": "Почему set.intersection быстрее вложенных циклов для больших множеств?",
    "options": [
      "внутренняя оптимизация по меньшему множеству",
      "GIL",
      "multithreading list",
      "pickle"
    ],
    "answer": 0,
    "explain": "CPython итерирует меньшее и проверяет в большем. Подходит ответ «внутренняя оптимизация по меньшему множеству».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m12"
  },
  {
    "topic": "cohesion",
    "q": "Какой стандартный модуль Python отвечает за utils.py на 3000 строк с HTTP, SQL и PDF — проблема?",
    "options": [
      "низкой связности / смешения ответственностей",
      "только GIL",
      "только типов",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Разные задачи в одном мешке — трудно сопровождать. Подходит ответ «низкой связности / смешения ответственностей».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m13"
  },
  {
    "topic": "git",
    "q": "Выбери верный вариант: git merge --squash делает?",
    "options": [
      "один коммит из всех изменений ветки без merge-коммита в истории feature",
      "удаляет ветку",
      "rebase автоматом",
      "force push"
    ],
    "answer": 0,
    "explain": "Удобно для «чистой» истории main. Подходит ответ «один коммит из всех изменений ветки без merge-коммита в истории feature».",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m14"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "11",
      "1",
      "4"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Подходит ответ «10». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [1, 2, 3, 4]))",
    "group": "Collections и itertools",
    "id": "m15"
  },
  {
    "topic": "match",
    "q": "Что вернёт case {'x': v} матчит?",
    "options": [
      "mapping с ключом x",
      "только dict subclass строго без Protocol",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Mapping pattern. Подходит ответ «mapping с ключом x».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m16"
  },
  {
    "topic": "closures",
    "q": "Что такое Замыкание?",
    "options": [
      "функция с enclosing переменными",
      "декоратор",
      "класс",
      "модуль"
    ],
    "answer": 0,
    "explain": "Captures nonlocal state. Подходит ответ «функция с enclosing переменными».",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m17"
  },
  {
    "topic": "генераторы",
    "q": "Что такое throw(exc) в генератор?",
    "options": [
      "возбуждает exc в точке yield",
      "игнорирует",
      "только закрывает",
      "в caller сразу без gen"
    ],
    "answer": 0,
    "explain": "Протокол генератора. Подходит ответ «возбуждает exc в точке yield». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m18"
  },
  {
    "topic": "HTTP",
    "q": "Что делает HEAD по семантике HTTP?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "HEAD безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Подходит ответ «идемпотентный (в идеале)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m19"
  },
  {
    "topic": "asyncio",
    "q": "Что такое Future?",
    "options": [
      "ожидаемый результат асинхронной операции",
      "thread",
      "process",
      "list"
    ],
    "answer": 0,
    "explain": "Низкоуровневее Task. Подходит ответ «ожидаемый результат асинхронной операции». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m20"
  },
  {
    "topic": "context",
    "q": "Что вызывает closing(obj)?",
    "options": [
      "obj.close() на выходе",
      "del obj",
      "obj.end()",
      "gc"
    ],
    "answer": 0,
    "explain": "Для объектов с close. Подходит ответ «obj.close() на выходе».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m21"
  },
  {
    "topic": "тесты",
    "q": "Что такое pytest.mark.parametrize умножает?",
    "options": [
      "тест на набор входных данных",
      "потоки",
      "процессы",
      "coverage магически"
    ],
    "answer": 0,
    "explain": "Таблица кейсов. Подходит ответ «тест на набор входных данных». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m22"
  },
  {
    "topic": "магические",
    "q": "Что определяет __eq__?",
    "options": [
      "==",
      "is",
      "hash только",
      "order <"
    ],
    "answer": 0,
    "explain": "Равенство значений. Подходит ответ «==».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m23"
  },
  {
    "topic": "ABC",
    "q": "Можно ли инстанцировать ABC без abstract методов?",
    "options": [
      "да",
      "нет никогда",
      "только Protocol",
      "только mixin"
    ],
    "answer": 0,
    "explain": "Абстрактность из-за abstract methods. Подходит ответ «да».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m24"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Deepcopy копирует вложенность. Подходит ответ «False». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m25"
  },
  {
    "topic": "GIL",
    "q": "Что выведет код?",
    "options": [
      "multiprocessing / native",
      "больше threading",
      "time.sleep",
      "print"
    ],
    "answer": 0,
    "explain": "GIL мешает CPU threads. Подходит ответ «multiprocessing / native». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "code": "# cpu_bound()\n# threading vs multiprocessing?",
    "group": "Потоки, процессы, GIL",
    "id": "m26"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: DFS на графе можно через?",
    "options": [
      "рекурсию или явный stack",
      "только queue",
      "только sorted",
      "GIL"
    ],
    "answer": 0,
    "explain": "Стек вызовов или collections.deque как stack. Подходит ответ «рекурсию или явный stack».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m27"
  },
  {
    "topic": "принципы",
    "q": "Что такое Premature optimization?",
    "options": [
      "оптимизация до измерения узкого места",
      "профилирование",
      "lru_cache",
      "numpy"
    ],
    "answer": 0,
    "explain": "«Premature optimization is the root of all evil» (Кнут). Подходит ответ «оптимизация до измерения узкого места».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m28"
  },
  {
    "topic": "git",
    "q": "Выбери верный вариант: git reflog полезен чтобы?",
    "options": [
      "найти «потерянные» коммиты после reset",
      "удалить remote",
      "форматировать JSON",
      "запустить pytest"
    ],
    "answer": 0,
    "explain": "Журнал перемещений HEAD. Подходит ответ «найти «потерянные» коммиты после reset». Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на shared-ветки.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m29"
  },
  {
    "topic": "heapq",
    "q": "Что такое nlargest(k, it)?",
    "options": [
      "k наибольших эффективно",
      "полная сортировка always обязательна видимо",
      "shuffle",
      "unique"
    ],
    "answer": 0,
    "explain": "Частичный отбор. Подходит ответ «k наибольших эффективно».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m30"
  },
  {
    "topic": "typing",
    "q": "Что вернёт list[int] в аннотации (3.9+) значит?",
    "options": [
      "подсказка типов, на runtime не проверяет сама",
      "runtime проверка всегда",
      "создаёт typed list",
      "запрещает append str"
    ],
    "answer": 0,
    "explain": "Проверяют mypy/pyright, не CPython по умолчанию. Подходит ответ «подсказка типов, на runtime не проверяет сама».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m31"
  },
  {
    "topic": "декораторы",
    "q": "Что такое Декоратор @f над def g?",
    "options": [
      "g = f(g)",
      "f = g(f)",
      "g вызывается сразу",
      "синтаксический сахар import"
    ],
    "answer": 0,
    "explain": "Декоратор оборачивает функцию. Подходит ответ «g = f(g)». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m32"
  },
  {
    "topic": "генераторы",
    "q": "Выбери верный вариант: yield в функции делает её?",
    "options": [
      "генератором",
      "корутиной всегда",
      "классом",
      "итератором списка"
    ],
    "answer": 0,
    "explain": "Generator function. Подходит ответ «генератором». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m33"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 500 обычно значит?",
    "options": [
      "Server Error",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "500 — Server Error. Подходит ответ «Server Error». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m34"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт Runner (3.11)?",
    "options": [
      "управление loop run упрощённо",
      "замена threading",
      "process pool",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Asyncio.Runner. Подходит ответ «управление loop run упрощённо». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m35"
  },
  {
    "topic": "исключения",
    "q": "Выбери верный вариант: except Exception не ловит?",
    "options": [
      "BaseException вроде KeyboardInterrupt/SystemExit",
      "ValueError",
      "TypeError",
      "RuntimeError"
    ],
    "answer": 0,
    "explain": "Exception ⊂ BaseException; Ctrl+C не глотай без нужды. Подходит ответ «BaseException вроде KeyboardInterrupt/SystemExit».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m36"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт pytest-asyncio mode?",
    "options": [
      "запуск async тестов",
      "threads",
      "process",
      "Twisted only"
    ],
    "answer": 0,
    "explain": "Плагин. Подходит ответ «запуск async тестов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m37"
  },
  {
    "topic": "staticmethod",
    "q": "Выбери верный вариант: staticmethod отличается тем, что?",
    "options": [
      "нет авто-self/cls — обычная функция в классе",
      "всегда виртуальный",
      "только в ABC",
      "быстрее C"
    ],
    "answer": 0,
    "explain": "Не получает ни экземпляр, ни класс. Подходит ответ «нет авто-self/cls — обычная функция в классе».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m38"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Issubclass(bool, int) — True. Подходит ответ «True». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "print(issubclass(bool, int))",
    "group": "ООП продвинутый",
    "id": "m39"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: локальная переменная в горячем цикле?",
    "options": [
      "часто быстрее атрибута/global",
      "медленнее всегда",
      "запрещена",
      "GIL off"
    ],
    "answer": 0,
    "explain": "LOAD_FAST. Подходит ответ «часто быстрее атрибута/global». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m40"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: numpy отпускает GIL в тяжёлых C-циклах часто?",
    "options": [
      "да, многие операции",
      "никогда",
      "только print",
      "только на Windows"
    ],
    "answer": 0,
    "explain": "C-extensions pattern. Подходит ответ «да, многие операции». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m41"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: functools.lru_cache ускоряет за счёт?",
    "options": [
      "мемоизации результатов чистой функции",
      "GIL off",
      "JIT",
      "multiprocessing"
    ],
    "answer": 0,
    "explain": "Повторные вызовы с теми же args — из кэша. Подходит ответ «мемоизации результатов чистой функции».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m42"
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Observer?",
    "options": [
      "подписка наблюдателей на изменения субъекта",
      "один поток на CPU",
      "кэш Redis",
      "ORM"
    ],
    "answer": 0,
    "explain": "В Python: callbacks, сигналы, event bus. Подходит ответ «подписка наблюдателей на изменения субъекта».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m43"
  },
  {
    "topic": "git",
    "q": "Выбери верный вариант: Merge conflict возникает когда?",
    "options": [
      "Git не может автоматически слить изменения одних строк",
      "два remote",
      "нет .gitignore",
      "большой файл"
    ],
    "answer": 0,
    "explain": "Нужно вручную выбрать версию в маркерах <<<< ==== >>>>. Подходит ответ «Git не может автоматически слить изменения одних строк».",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m44"
  },
  {
    "topic": "collections",
    "q": "Что такое Counter.most_common(2) вернёт?",
    "options": [
      "список пар (элемент, счёт) топ-2",
      "только ключи",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "По убыванию частоты. Подходит ответ «список пар (элемент, счёт) топ-2».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m45"
  },
  {
    "topic": "dataclasses",
    "q": "Что возвращает fields()?",
    "options": [
      "кортеж Field",
      "dict values",
      "json",
      "annotations raw only"
    ],
    "answer": 0,
    "explain": "Интроспекция. Подходит ответ «кортеж Field».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m46"
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код?",
    "options": [
      "wrap",
      "f",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Без functools.wraps у обёртки остаётся имя wrap, не f. Подходит ответ «wrap». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "code": "def deco(fn):\n    def wrap():\n        return fn()\n    return wrap\n@deco\ndef f():\n    pass\nprint(f.__name__)",
    "group": "Декораторы и замыкания",
    "id": "m47"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт list(x for x in range(3))?",
    "options": [
      "[0,1,2]",
      "generator object print",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "List поглощает genexp. Подходит ответ «[0,1,2]». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m48"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 301 обычно значит?",
    "options": [
      "Moved Permanently",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "301 — Moved Permanently. Подходит ответ «Moved Permanently». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m49"
  },
  {
    "topic": "asyncio",
    "q": "Что нужно для await?",
    "options": [
      "async def",
      "обычный def",
      "lambda",
      "class"
    ],
    "answer": 0,
    "explain": "Только в корутине. Подходит ответ «async def». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "code": "async def main():\n    await asyncio.sleep(0)",
    "group": "Asyncio",
    "id": "m50"
  },
  {
    "topic": "exceptions",
    "q": "Что в e?",
    "options": [
      "сообщение 'x'",
      "тип only",
      "traceback only",
      "None"
    ],
    "answer": 0,
    "explain": "As e. Подходит ответ «сообщение 'x'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "try:\n    raise ValueError('x')\nexcept ValueError as e:\n    print(e)",
    "group": "Исключения и контекст",
    "id": "m51"
  },
  {
    "topic": "тесты",
    "q": "Что такое parametrize нужен для?",
    "options": [
      "набора вход и ожидаемый результат",
      "фикстур только",
      "моков",
      "coverage"
    ],
    "answer": 0,
    "explain": "@pytest.mark.parametrize. Подходит ответ «набора вход и ожидаемый результат». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m52"
  },
  {
    "topic": "classmethod",
    "q": "Что такое альтернатива constructor через?",
    "options": [
      "@classmethod from_…",
      "staticmethod only",
      "property",
      "metaclasses обязателен"
    ],
    "answer": 0,
    "explain": "Фабрики. Подходит ответ «@classmethod from_…».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m53"
  },
  {
    "topic": "ООП",
    "q": "Что такое classmethod получает?",
    "options": [
      "класс (cls), не экземпляр",
      "только self",
      "модуль",
      "метакласс всегда"
    ],
    "answer": 0,
    "explain": "Удобно для альтернативных конструкторов. Подходит ответ «класс (cls), не экземпляр». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m54"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "None",
      "{}",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Невалидный JSON, а затем JSONDecodeError. Подходит ответ «JSONDecodeError». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.loads('[1, 2,'))",
    "group": "Stdlib и производительность",
    "id": "m55"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое Queue между процессами?",
    "options": [
      "сериализует объекты",
      "делит память напрямую always",
      "только str",
      "GIL share"
    ],
    "answer": 0,
    "explain": "Через pickle/IPC. Подходит ответ «сериализует объекты».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m56"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Сложность dict.keys() итерации по n ключам?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Проход по всем элементам — линейный. Подходит ответ «O(n)».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m57"
  },
  {
    "topic": "принципы",
    "q": "Что означает «Composition over inheritance»?",
    "options": [
      "собирать поведение из объектов, а не только наследовать",
      "никогда не использовать классы",
      "только множественное наследование",
      "запрет delegate"
    ],
    "answer": 0,
    "explain": "Композиция гибче: меняешь части без ломки иерархии. Подходит ответ «собирать поведение из объектов, а не только наследовать».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m58"
  },
  {
    "topic": "git",
    "q": "Выбери верный вариант: git bisect применяют для?",
    "options": [
      "поиска коммита, внесшего баг",
      "удаления веток",
      "форматирования",
      "CI config"
    ],
    "answer": 0,
    "explain": "Бинарный поиск по истории. Подходит ответ «поиска коммита, внесшего баг». Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на shared-ветки.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m59"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "0",
      "4",
      "?0",
      "?1"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «0». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 0))",
    "group": "Collections и itertools",
    "id": "m60"
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict описывает?",
    "options": [
      "словари с известными ключами/типами",
      "list",
      "dataclass",
      "Enum"
    ],
    "answer": 0,
    "explain": "Типизация dict-структур. Подходит ответ «словари с известными ключами/типами». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m61"
  },
  {
    "topic": "декораторы",
    "q": "В чём разница: @decorator без скобок vs @decorator()?",
    "options": [
      "объект vs вызов фабрики",
      "нет разницы",
      "скобки запрещены",
      "только для class"
    ],
    "answer": 0,
    "explain": "() нужны, если декоратор-фабрика. Подходит ответ «объект vs вызов фабрики». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m62"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "10 20",
      "[10, 20, 30]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Подходит ответ «10 20». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [10, 20, 30])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m63"
  },
  {
    "topic": "SQL",
    "q": "Что такое Isolation level Serializable?",
    "options": [
      "самый строгий из классических",
      "read uncommitted",
      "без транзакций",
      "autocommit only"
    ],
    "answer": 0,
    "explain": "Меньше аномалий, больше конфликтов. Подходит ответ «самый строгий из классических». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m64"
  },
  {
    "topic": "async",
    "q": "Выбери верный вариант: async for нужен для?",
    "options": [
      "async-итераторов",
      "обычных list",
      "threading",
      "multiprocessing"
    ],
    "answer": 0,
    "explain": "__aiter__/__anext__. Подходит ответ «async-итераторов». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m65"
  },
  {
    "topic": "context",
    "q": "Что такое nullcontext?",
    "options": [
      "пустой CM-заглушка",
      "suppress all",
      "file open",
      "lock"
    ],
    "answer": 0,
    "explain": "Условный with. Подходит ответ «пустой CM-заглушка».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m66"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: test discovery в pytest по умолчанию ищет?",
    "options": [
      "файлы test_*.py и функции test_*",
      "только TestCase классы",
      "main.py",
      "setup.py"
    ],
    "answer": 0,
    "explain": "Конвенция имён — запуск pytest без аргументов. Подходит ответ «файлы test_*.py и функции test_*». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m67"
  },
  {
    "topic": "property",
    "q": "Выбери верный вариант: setter может менять тип хранимого?",
    "options": [
      "да, на твоей логике",
      "нет языком запрещено",
      "только int",
      "только str"
    ],
    "answer": 0,
    "explain": "Это обычный метод. Подходит ответ «да, на твоей логике».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m68"
  },
  {
    "topic": "ABC",
    "q": "Что такое __subclasshook__?",
    "options": [
      "кастом isinstance без register",
      "MRO rewrite",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Структурность для ABC. Подходит ответ «кастом isinstance без register».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m69"
  },
  {
    "topic": "performance",
    "q": "Что такое интернирование маленьких строк?",
    "options": [
      "деталь CPython, не контракт логики",
      "языковой гарант всех str",
      "запрещено",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Не строй логику на is для str. Подходит ответ «деталь CPython, не контракт логики». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m70"
  },
  {
    "topic": "GIL",
    "q": "Выбери все верные про GIL в CPython?",
    "options": [
      "GIL мешает параллельному исполнению байткода Python-потоками",
      "multiprocessing обходит GIL за счёт отдельных процессов",
      "GIL полностью запрещает I/O concurrency",
      "C-расширения могут отпускать GIL на время тяжёлой работы без Python API"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "I/O и многие C-вызовы отпускают GIL, а затем потоки полезны для I/O. CPU-bound Python — нет; тогда processes/native без GIL. Верными здесь будут пункты: «GIL мешает параллельному исполнению байткода Python-потоками»; «multiprocessing обходит GIL за счёт отдельных процессов»; «C-расширения могут отпускать GIL на время тяжёлой работы без Python API».",
    "kind": "multi",
    "tags": [
      "gil",
      "concurrency"
    ],
    "difficulty": "middle",
    "group": "Потоки, процессы, GIL",
    "id": "m71"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Два указателя (two pointers) на отсортированном массиве дают?",
    "options": [
      "O(n) вместо O(n²) для пар суммы",
      "O(1) память всегда для sort",
      "только для строк",
      "только рекурсия"
    ],
    "answer": 0,
    "explain": "Классика: сумма двух чисел = target. Подходит ответ «O(n) вместо O(n²) для пар суммы».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m72"
  },
  {
    "topic": "принципы",
    "q": "Класс Car наследует Engine, Wheels, Radio вместо «имеет» их — что нарушено?",
    "options": [
      "разумную композицию",
      "только PEP 8",
      "GIL",
      "typing"
    ],
    "answer": 0,
    "explain": "«Car has-a Engine» обычно лучше, чем «Car is-a Engine». Подходит ответ «разумную композицию».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m73"
  },
  {
    "topic": "git",
    "q": "Что позволяет Interactive rebase (-i)?",
    "options": [
      "переупорядочить/squash/edit коммиты",
      "только merge",
      "только clone",
      "только blame"
    ],
    "answer": 0,
    "explain": "Чистка истории перед PR. Подходит ответ «переупорядочить/squash/edit коммиты». Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на shared-ветки.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m74"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "12",
      "13",
      "10",
      "2"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Подходит ответ «12». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [10, 2]))",
    "group": "Collections и itertools",
    "id": "m75"
  },
  {
    "topic": "typing",
    "q": "Что такое TypeVar(bound=...) ограничивает?",
    "options": [
      "верхнюю границу допустимых типов",
      "только литералы",
      "длину списка",
      "GIL"
    ],
    "answer": 0,
    "explain": "T должен быть subtype bound. Подходит ответ «верхнюю границу допустимых типов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m76"
  },
  {
    "topic": "декораторы",
    "q": "Что такое Порядок @a @b def f:?",
    "options": [
      "f = a(b(f))",
      "f = b(a(f))",
      "параллельно",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Ближний декоратор применяется первым. Подходит ответ «f = a(b(f))». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m77"
  },
  {
    "topic": "listcomp",
    "q": "Выбери верный вариант: Вложенный for в listcomp порядок?",
    "options": [
      "как вложенные for слева направо",
      "справа налево",
      "параллельно",
      "random"
    ],
    "answer": 0,
    "explain": "[a for x in xs for a in x]. Подходит ответ «как вложенные for слева направо».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m78"
  },
  {
    "topic": "ASGI",
    "q": "Что такое lifespan protocol?",
    "options": [
      "startup/shutdown приложения",
      "только websocket",
      "WSGI sync",
      "CGI"
    ],
    "answer": 0,
    "explain": "ASGI lifespan. Подходит ответ «startup/shutdown приложения».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m79"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: wait_for(aw, timeout) при таймауте?",
    "options": [
      "cancels и TimeoutError",
      "игнор",
      "убивает process",
      "возвращает None"
    ],
    "answer": 0,
    "explain": "Asyncio.wait_for. Подходит ответ «cancels и TimeoutError». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m80"
  },
  {
    "topic": "context",
    "q": "Что такое redirect_stdout?",
    "options": [
      "временно подменяет sys.stdout",
      "logging",
      "subprocess",
      "files only Path"
    ],
    "answer": 0,
    "explain": "Contextlib. Подходит ответ «временно подменяет sys.stdout».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m81"
  },
  {
    "topic": "logging",
    "q": "Что такое QueueHandler?",
    "options": [
      "логи из потоков в очередь",
      "HTTP handler",
      "file rotate only",
      "syslog ban"
    ],
    "answer": 0,
    "explain": "Централизация. Подходит ответ «логи из потоков в очередь». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m82"
  },
  {
    "topic": "магические",
    "q": "В чём разница: __str__ vs __repr__?",
    "options": [
      "str для пользователя, repr для отладки",
      "нет разницы",
      "str только для print чисел",
      "repr запрещён"
    ],
    "answer": 0,
    "explain": "PEP: repr ideally unambiguous. Подходит ответ «str для пользователя, repr для отладки».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m83"
  },
  {
    "topic": "ABC",
    "q": "Что такое register() у ABC?",
    "options": [
      "виртуальное подклассство без наследования",
      "создаёт файл",
      "pip",
      "GIL"
    ],
    "answer": 0,
    "explain": "Isinstance True. Подходит ответ «виртуальное подклассство без наследования».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m84"
  },
  {
    "topic": "pathlib",
    "q": "Что такое Path.resolve()?",
    "options": [
      "абсолютный путь + symlink resolve",
      "только str",
      "удаляет файл",
      "chmod"
    ],
    "answer": 0,
    "explain": "Канонический путь. Подходит ответ «абсолютный путь + symlink resolve».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m85"
  },
  {
    "topic": "threading",
    "q": "Выбери верный вариант: RLock отличается тем что?",
    "options": [
      "реентерабельный",
      "быстрее всегда",
      "для процессов",
      "async only"
    ],
    "answer": 0,
    "explain": "Можно acquire несколько раз одним потоком. Подходит ответ «реентерабельный».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m86"
  },
  {
    "topic": "алгоритмы",
    "q": "Что выведет код?",
    "options": [
      "5",
      "4",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Max() по итерируемому — максимальный элемент. Подходит ответ «5». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "print(max([1, 5, 3]))",
    "group": "Алгоритмы и структуры данных",
    "id": "m87"
  },
  {
    "topic": "Zen",
    "q": "Выбери верный вариант: «There should be one obvious way to do it» близко к?",
    "options": [
      "KISS и ясному стилю",
      "10 способам сделать одно",
      "отказу от stdlib",
      "только ООП"
    ],
    "answer": 0,
    "explain": "В Python ценят понятный идиоматичный путь. Подходит ответ «KISS и ясному стилю».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m88"
  },
  {
    "topic": "itertools",
    "q": "Что даёт product('ab', repeat=2)?",
    "options": [
      "aa ab ba bb (как кортежи)",
      "только ab",
      "перестановки без повторов",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение. Подходит ответ «aa ab ba bb (как кортежи)». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m89"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "pair",
      "ошибка",
      "None",
      "[1, 2]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Подходит ответ «pair». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = [1, 2]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m90"
  },
  {
    "topic": "замыкания",
    "q": "Как починить late binding в цикле?",
    "options": [
      "lambda i=i: i  (default аргумент)",
      "только global",
      "нельзя",
      "использовать list обязательно"
    ],
    "answer": 0,
    "explain": "Default фиксирует значение на каждой итерации. Подходит ответ «lambda i=i: i (default аргумент)».",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m91"
  },
  {
    "topic": "итераторы",
    "q": "Что вызывает iter(callable, sentinel)?",
    "options": [
      "результат != sentinel",
      "пока True",
      "один раз",
      "бесконечно без sentinel"
    ],
    "answer": 0,
    "explain": "Классика: iter(f.readline, ''). Подходит ответ «результат != sentinel».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m92"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 502 обычно значит?",
    "options": [
      "Bad Gateway",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "502 — Bad Gateway. Подходит ответ «Bad Gateway». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m93"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: Shield отмены не отменяет?",
    "options": [
      "внутренний awaitable сразу снаружи",
      "KeyboardInterrupt OS",
      "process kill",
      "MemoryError"
    ],
    "answer": 0,
    "explain": "Ограниченная защита. Подходит ответ «внутренний awaitable сразу снаружи». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m94"
  },
  {
    "topic": "context",
    "q": "Как удобнее открыть 3 вложенных with без ExitStack?",
    "options": [
      "можно вложить / или один with a, b",
      "нельзя никогда",
      "только async",
      "нужен GIL"
    ],
    "answer": 0,
    "explain": "With open() as a, open() as b: или ExitStack для динамики. Подходит ответ «можно вложить / или один with a, b».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m95"
  },
  {
    "topic": "тесты",
    "q": "Что такое capfd/capsys фикстуры?",
    "options": [
      "перехватывают stdout/stderr",
      "файлы tmp",
      "сеть",
      "time"
    ],
    "answer": 0,
    "explain": "Тест вывода. Подходит ответ «перехватывают stdout/stderr». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m96"
  },
  {
    "topic": "магические",
    "q": "Что такое __contains__ обслуживает?",
    "options": [
      "in",
      "is",
      "==",
      "for"
    ],
    "answer": 0,
    "explain": "Членство. Подходит ответ «in».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m97"
  },
  {
    "topic": "MRO",
    "q": "Верно ли, что object всегда в конце MRO?",
    "options": [
      "обычно да для new-style",
      "нет никогда",
      "только old-style Py2",
      "только ABC"
    ],
    "answer": 0,
    "explain": "Корень иерархии. Подходит ответ «обычно да для new-style». MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m98"
  },
  {
    "topic": "regex",
    "q": "Что вернёт atomic grouping / possessive?",
    "options": [
      "в stdlib re ограничено; смотри сторонние",
      "полностью как Perl always",
      "нет понятия",
      "только bytes"
    ],
    "answer": 0,
    "explain": "Нюанс движка. Подходит ответ «в stdlib re ограничено; смотри сторонние».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m99"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: PyPy GIL тоже есть, но?",
    "options": [
      "другой runtime/оптимизации",
      "GIL нет никогда",
      "одинаков бит-в-бит",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Не переноси ожидания 1:1. Подходит ответ «другой runtime/оптимизации». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m100"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Сортировка встроенным sorted() — какой алгоритм в CPython?",
    "options": [
      "Timsort (адаптивный merge/insertion)",
      "quicksort всегда",
      "bubble sort",
      "radix только"
    ],
    "answer": 0,
    "explain": "Timsort хорош на частично отсортированных данных. Подходит ответ «Timsort (адаптивный merge/insertion)».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m101"
  },
  {
    "topic": "Zen",
    "q": "Выбери верный вариант: «Explicit is better than implicit»?",
    "options": [
      "явный код лучше скрытой магии",
      "больше глобальных переменных",
      "меньше типов",
      "только list comprehensions"
    ],
    "answer": 0,
    "explain": "Поведение кода должно быть очевидным читателю. Подходит ответ «явный код лучше скрытой магии».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m102"
  },
  {
    "topic": "collections",
    "q": "Выбери верный вариант: defaultdict(int) при отсутствии ключа?",
    "options": [
      "создаёт 0",
      "KeyError",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Default_factory вызывается. Подходит ответ «создаёт 0».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m103"
  },
  {
    "topic": "enum",
    "q": "Что такое Enum functional API?",
    "options": [
      "Enum('Color', 'R G B')",
      "только class syntax",
      "TypedDict",
      "dataclass"
    ],
    "answer": 0,
    "explain": "Динамическое создание. Подходит ответ «Enum('Color', 'R G B')». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m104"
  },
  {
    "topic": "closures",
    "q": "Зачем нужен nonlocal x?",
    "options": [
      "присваивать enclosing переменной",
      "читать global",
      "создать threadlocal",
      "удалить x"
    ],
    "answer": 0,
    "explain": "Для записи в enclosing scope. Подходит ответ «присваивать enclosing переменной».",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m105"
  },
  {
    "topic": "listcomp",
    "q": "Что вернёт [i for i in range(5) if i%2==0]?",
    "options": [
      "[0, 2, 4]",
      "[1, 3]",
      "[0,1,2,3,4]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Фильтр в comprehension. Подходит ответ «[0, 2, 4]».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m106"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт HTTP/2 multiplexing?",
    "options": [
      "много стримов на соединении",
      "только один request",
      "UDP",
      "SMTP"
    ],
    "answer": 0,
    "explain": "Меньше head-of-line на уровне HTTP/1. Подходит ответ «много стримов на соединении». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m107"
  },
  {
    "topic": "asyncio",
    "q": "Что такое create_task планирует?",
    "options": [
      "выполнение корутины на loop",
      "OS thread",
      "process",
      "sync call"
    ],
    "answer": 0,
    "explain": "Task на event loop. Подходит ответ «выполнение корутины на loop». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m108"
  },
  {
    "topic": "exceptions",
    "q": "Что такое StopIteration наследует?",
    "options": [
      "Exception",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От StopIteration до Exception через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m109"
  },
  {
    "topic": "тесты",
    "q": "Что такое fixture в pytest?",
    "options": [
      "подготовка данных/ресурсов",
      "assert",
      "мок только",
      "CI job"
    ],
    "answer": 0,
    "explain": "@pytest.fixture. Подходит ответ «подготовка данных/ресурсов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m110"
  },
  {
    "topic": "property",
    "q": "Что вернёт obj.__dict__ у slots-only?",
    "options": [
      "часто отсутствует",
      "всегда есть",
      "всегда list",
      "json"
    ],
    "answer": 0,
    "explain": "Экономия памяти. Подходит ответ «часто отсутствует».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m111"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "3",
      "ошибка",
      "None",
      "0"
    ],
    "answer": 0,
    "explain": "Property x читает _x. Подходит ответ «3». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "class C:\n    def __init__(self):\n        self._x = 3\n    @property\n    def x(self):\n        return self._x\nprint(C().x)",
    "group": "ООП продвинутый",
    "id": "m112"
  },
  {
    "topic": "sort",
    "q": "Что такое Сортировка в Python?",
    "options": [
      "стабильная (Timsort)",
      "unstable",
      "quicksort гарантирован",
      "только числа"
    ],
    "answer": 0,
    "explain": "Стабильный Timsort. Подходит ответ «стабильная (Timsort)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m113"
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт if __name__ == '__main__' критичен на?",
    "options": [
      "Windows/macOS spawn",
      "только Linux fork always ok без",
      "Jython only",
      "IDLE only"
    ],
    "answer": 0,
    "explain": "Повторный импорт модуля. Подходит ответ «Windows/macOS spawn».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m114"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: BFS на графе в Python обычно с?",
    "options": [
      "deque и visited set",
      "list.pop(0) только",
      "heapq только",
      "pickle"
    ],
    "answer": 0,
    "explain": "Очередь + множество посещённых. Подходит ответ «deque и visited set».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m115"
  },
  {
    "topic": "KISS",
    "q": "Что означает KISS в Python часто?",
    "options": [
      "прямолинейный код вместо магии",
      "всегда метаклассы",
      "только C-расширения",
      "отказ от функций"
    ],
    "answer": 0,
    "explain": "Явный простой код ценится выше хитрых трюков. Подходит ответ «прямолинейный код вместо магии».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m116"
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict(list): d['k'].append(1) — если ключа не было?",
    "options": [
      "создаст [] и append",
      "KeyError",
      "NoneType error",
      "игнор"
    ],
    "answer": 0,
    "explain": "Default_factory вызывается. Подходит ответ «создаст [] и append».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m117"
  },
  {
    "topic": "typing",
    "q": "Что вернёт isinstance([1], dict[str, int]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно. Подходит ответ «TypeError (или False в отдельных случаях) — generic alias не для isinstance так».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m118"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Nonlocal n позволяет менять enclosing переменную. Подходит ответ «10». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "def make():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 10\n        return n\n    return inc\nprint(make()())",
    "group": "Декораторы и замыкания",
    "id": "m119"
  },
  {
    "topic": "генераторы",
    "q": "Что вызывает gen.close()?",
    "options": [
      "GeneratorExit",
      "StopIteration только",
      "KeyboardInterrupt",
      "ничего"
    ],
    "answer": 0,
    "explain": "Завершение генератора. Подходит ответ «GeneratorExit». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m120"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 429 обычно значит?",
    "options": [
      "Too Many Requests",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "429 — Too Many Requests. Подходит ответ «Too Many Requests». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m121"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт CancelledError с 3.8+?",
    "options": [
      "BaseException subclass (не Exception)",
      "обычный Exception",
      "Warning",
      "OSError"
    ],
    "answer": 0,
    "explain": "Не глотать широким except Exception бездумно ранее — уточняй версию/практику. Подходит ответ «BaseException subclass (не Exception)».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m122"
  },
  {
    "topic": "context",
    "q": "Что напечатает?",
    "options": [
      "enter\nbody\nexit",
      "body\nenter\nexit",
      "enter\nexit\nbody",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Порядок CM. Подходит ответ «enter\nbody\nexit». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    print('body')",
    "group": "Исключения и контекст",
    "id": "m123"
  },
  {
    "topic": "mock",
    "q": "Что такое side_effect может?",
    "options": [
      "кидать/итерировать/вызывать",
      "только return_value",
      "патчить диск",
      "GIL"
    ],
    "answer": 0,
    "explain": "Гибкое поведение. Подходит ответ «кидать/итерировать/вызывать».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m124"
  },
  {
    "topic": "магические",
    "q": "Что такое __len__ должен возвращать?",
    "options": [
      "int >= 0",
      "любой float",
      "str",
      "None"
    ],
    "answer": 0,
    "explain": "Иначе TypeError/ValueError. Подходит ответ «int >= 0».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m125"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт update_abstractmethods (3.10)?",
    "options": [
      "пересчёт абстрактности после правок",
      "MRO",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "Динамические классы. Подходит ответ «пересчёт абстрактности после правок».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m126"
  },
  {
    "topic": "subprocess",
    "q": "Что такое timeout в run?",
    "options": [
      "убивает по истечении (TimeoutExpired)",
      "игнор",
      "только warn",
      "async"
    ],
    "answer": 0,
    "explain": "Защита зависаний. Подходит ответ «убивает по истечении (TimeoutExpired)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m127"
  },
  {
    "topic": "threading",
    "q": "В чём разница: Lock vs RLock?",
    "options": [
      "RLock можно захватывать тем же потоком повторно",
      "Lock быстрее всегда и reentrant",
      "одно и то же",
      "RLock только async"
    ],
    "answer": 0,
    "explain": "Обычный Lock — deadlock при повторном acquire. Подходит ответ «RLock можно захватывать тем же потоком повторно».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m128"
  },
  {
    "topic": "алгоритмы",
    "q": "Выбери верный вариант: Counter.most_common(k) — сложность примерно?",
    "options": [
      "O(n log k) через heap",
      "O(1)",
      "O(n²)",
      "O(log n)"
    ],
    "answer": 0,
    "explain": "Под капотом heapq для top-k. Подходит ответ «O(n log k) через heap».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m129"
  },
  {
    "topic": "YAGNI",
    "q": "Чем YAGNI отличается от KISS?",
    "options": [
      "YAGNI — не делать лишнее; KISS — делать просто",
      "это одно и то же",
      "YAGNI только для тестов",
      "KISS только для SQL"
    ],
    "answer": 0,
    "explain": "YAGNI про объём фич; KISS про сложность решения. Подходит ответ «YAGNI — не делать лишнее; KISS — делать просто».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m130"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[5, 10]",
      "[5, 10, 20]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Подходит ответ «[5, 10]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [10, 20, 5, 30]))",
    "group": "Collections и itertools",
    "id": "m131"
  },
  {
    "topic": "match",
    "q": "Что такое match/case появился в?",
    "options": [
      "3.10",
      "3.8",
      "2.7",
      "3.12"
    ],
    "answer": 0,
    "explain": "Structural pattern matching. Подходит ответ «3.10».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m132"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[2, 2, 2]",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Поздний захват i — все лямбды видят финальное значение. Подходит ответ «[2, 2, 2]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m133"
  },
  {
    "topic": "generators",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[1, 0]",
      "ошибка",
      "[0]"
    ],
    "answer": 0,
    "explain": "Return в генераторе становится StopIteration.value; list() его не включает — только yield. Подходит ответ «[1]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "def g():\n    yield 1\n    return 0\nprint(list(g()))",
    "group": "Генераторы и итераторы",
    "id": "m134"
  },
  {
    "topic": "HTTP",
    "q": "Что делает OPTIONS по семантике HTTP?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "OPTIONS безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Подходит ответ «идемпотентный (в идеале)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m135"
  },
  {
    "topic": "async",
    "q": "Что такое gather(..., return_exceptions=True)?",
    "options": [
      "кладёт исключения в результаты вместо raise",
      "игнорит все задачи",
      "отменяет всегда",
      "только sync"
    ],
    "answer": 0,
    "explain": "Удобно собрать частичные успехи. Подходит ответ «кладёт исключения в результаты вместо raise». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m136"
  },
  {
    "topic": "context",
    "q": "Что такое ExitStack.callback?",
    "options": [
      "регистрирует произвольный teardown",
      "только CM",
      "async",
      "GC"
    ],
    "answer": 0,
    "explain": "Гибкая уборка. Подходит ответ «регистрирует произвольный teardown».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m137"
  },
  {
    "topic": "warnings",
    "q": "Что такое catch_warnings?",
    "options": [
      "временный контроль warnings",
      "except Exception",
      "logging",
      "pytest only"
    ],
    "answer": 0,
    "explain": "Контекст. Подходит ответ «временный контроль warnings».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m138"
  },
  {
    "topic": "магические",
    "q": "Что такое __length_hint__?",
    "options": [
      "оценка длины для list(it)",
      "точный len обязателен",
      "hash",
      "bool"
    ],
    "answer": 0,
    "explain": "Оптимизация аллокаций. Подходит ответ «оценка длины для list(it)».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m139"
  },
  {
    "topic": "slots",
    "q": "Выбери верный вариант: объявить пустые slots у subclass?",
    "options": [
      "часто нужно [], чтобы не вернуть __dict__",
      "нельзя",
      "удаляет parent slots",
      "создаёт list attr"
    ],
    "answer": 0,
    "explain": "Тонкость наследования. Подходит ответ «часто нужно [], чтобы не вернуть __dict__».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m140"
  },
  {
    "topic": "tempfile",
    "q": "Что возвращает mkstemp?",
    "options": [
      "fd и path",
      "только Path",
      "file object always",
      "bytes"
    ],
    "answer": 0,
    "explain": "Низкоуровневый API. Подходит ответ «fd и path».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m141"
  },
  {
    "topic": "concurrency",
    "q": "Когда threading уместен?",
    "options": [
      "много I/O ожидания",
      "чистый CPU без release GIL",
      "вместо процессов всегда",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Пока ждёшь сеть/диск, другой поток может работать. Подходит ответ «много I/O ожидания». Конкурентность бывает на потоках, процессах и async — у каждого свои ограничения и цена синхронизации.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m142"
  },
  {
    "topic": "алгоритмы",
    "q": "Что такое defaultdict(list) удобен для?",
    "options": [
      "группировки элементов по ключу",
      "сортировки O(1)",
      "хеширования паролей",
      "async queue"
    ],
    "answer": 0,
    "explain": "Граф смежности, инвертированный индекс. Подходит ответ «группировки элементов по ключу».",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m143"
  },
  {
    "topic": "cohesion",
    "q": "Что такое Высокая связность (cohesion) модуля?",
    "options": [
      "элементы модуля работают на одну цель",
      "модуль знает обо всём проекте",
      "много import *",
      "один гигантский файл"
    ],
    "answer": 0,
    "explain": "Модуль должен быть про одну зону ответственности. Подходит ответ «элементы модуля работают на одну цель».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m144"
  },
  {
    "topic": "collections",
    "q": "Что такое namedtuple _asdict?",
    "options": [
      "OrderedDict/dict полей",
      "json dumps auto",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Удобный экспорт. Подходит ответ «OrderedDict/dict полей».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m145"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Isinstance с абстрактными/builtin типами. Подходит ответ «True». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "print(isinstance([1, 2], list))",
    "group": "Typing и dataclasses",
    "id": "m146"
  },
  {
    "topic": "декораторы",
    "q": "Что такое Декоратор с аргументами?",
    "options": [
      "фабрика, возвращающая декоратор",
      "невозможен",
      "только class decorator",
      "через eval"
    ],
    "answer": 0,
    "explain": "Тройная вложенность функций. Подходит ответ «фабрика, возвращающая декоратор». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m147"
  },
  {
    "topic": "comprehensions",
    "q": "Чем listcomp отличается от map+lambda часто?",
    "options": [
      "читаемее для простых преобразований",
      "всегда быстрее C",
      "не создаёт list",
      "запрещена в pep8"
    ],
    "answer": 0,
    "explain": "Стиль и ясность. Подходит ответ «читаемее для простых преобразований».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m148"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое response_model?",
    "options": [
      "фильтрует/валидирует ответ",
      "меняет HTTP method",
      "отключает OpenAPI",
      "async off"
    ],
    "answer": 0,
    "explain": "Pydantic model. Подходит ответ «фильтрует/валидирует ответ».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m149"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: gather n=2 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "игнор"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка поднимается из gather. Подходит ответ «пробросит исключение (остальные могут продолжать до отмены политики)».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m150"
  },
  {
    "topic": "исключения",
    "q": "Выбери верный вариант: raise X from Y связывает?",
    "options": [
      "__cause__",
      "только message",
      "traceback удаляет",
      "suppress"
    ],
    "answer": 0,
    "explain": "Exception chaining. Подходит ответ «__cause__». Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m151"
  },
  {
    "topic": "logging",
    "q": "Что такое filters на handler?",
    "options": [
      "отсекают записи",
      "меняют уровень root",
      "удаляют logger",
      "async"
    ],
    "answer": 0,
    "explain": "Тонкая настройка. Подходит ответ «отсекают записи». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m152"
  },
  {
    "topic": "магические",
    "q": "Выбери верный вариант: __iter__ + __next__ на одном классе?",
    "options": [
      "объект и iterable и iterator",
      "запрещено",
      "только gen",
      "только async"
    ],
    "answer": 0,
    "explain": "Частый паттерн, но одноразовый. Подходит ответ «объект и iterable и iterator».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m153"
  },
  {
    "topic": "ООП",
    "q": "Что такое Миксин обычно?",
    "options": [
      "класс с доп. поведением без самостоятельной роли",
      "абстрактный модуль",
      "декоратор",
      "metaclasses only"
    ],
    "answer": 0,
    "explain": "Multiple inheritance utility. Подходит ответ «класс с доп. поведением без самостоятельной роли». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m154"
  },
  {
    "topic": "sort",
    "q": "Что такое operator.itemgetter?",
    "options": [
      "быстрый key для сортировки",
      "hash",
      "copy",
      "mock"
    ],
    "answer": 0,
    "explain": "Вместо lambda часто. Подходит ответ «быстрый key для сортировки».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m155"
  },
  {
    "topic": "threading",
    "q": "Что даёт local()?",
    "options": [
      "thread-local storage",
      "process share",
      "async local",
      "global"
    ],
    "answer": 0,
    "explain": "Threading.local. Подходит ответ «thread-local storage».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m156"
  },
  {
    "topic": "принципы",
    "q": "Какая Global mutable state в библиотеке — проблема для?",
    "options": [
      "тестируемости и предсказуемости",
      "скорости всегда",
      "typing",
      "async only"
    ],
    "answer": 0,
    "explain": "Тесты влияют друг на друга; сложно параллелить. Подходит ответ «тестируемости и предсказуемости».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m157"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('a', 2), ('b', 1)]",
      "{'a': 2, 'b': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Подходит ответ «[('a', 2), ('b', 1)]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aab').most_common(2))",
    "group": "Collections и itertools",
    "id": "m158"
  },
  {
    "topic": "enum",
    "q": "Выбери верный вариант: Enum'ы сравнимы с int если?",
    "options": [
      "IntEnum / IntFlag",
      "всегда",
      "никогда",
      "только StrEnum"
    ],
    "answer": 0,
    "explain": "Отдельные типы. Подходит ответ «IntEnum / IntFlag». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m159"
  },
  {
    "topic": "замыкания",
    "q": "Что выведут все вызовы?",
    "options": [
      "2 2 2",
      "0 1 2",
      "ошибка",
      "None None None"
    ],
    "answer": 0,
    "explain": "Позднее связывание i. Подходит ответ «2 2 2». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m160"
  },
  {
    "topic": "итераторы",
    "q": "Что вызывает iter(x)?",
    "options": [
      "x.__iter__()",
      "x.__next__()",
      "list(x)",
      "x.next() в Py3"
    ],
    "answer": 0,
    "explain": "Получение итератора. Подходит ответ «x.__iter__()».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m161"
  },
  {
    "topic": "HTTP",
    "q": "Что делает GET по семантике HTTP?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "GET безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Подходит ответ «идемпотентный (в идеале)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m162"
  },
  {
    "topic": "asyncio",
    "q": "В чём риск create_task ×2 без await/ссылок?",
    "options": [
      "задачи могут быть собраны GC / потеря исключений",
      "выполнятся надёжнее",
      "синхронно",
      "запрещены"
    ],
    "answer": 0,
    "explain": "Держи ссылки или await TaskGroup. Подходит ответ «задачи могут быть собраны GC / потеря исключений».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m163"
  },
  {
    "topic": "context",
    "q": "Выбери верный вариант: suppress можно с несколькими типами?",
    "options": [
      "да",
      "нет",
      "только Exception",
      "только OSError"
    ],
    "answer": 0,
    "explain": "Как except tuple. Подходит ответ «да».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m164"
  },
  {
    "topic": "тесты",
    "q": "В чём разница: mark.skip vs skipif?",
    "options": [
      "безусловно vs условие",
      "одно и то же",
      "skipif удаляет файл",
      "skip = xfail"
    ],
    "answer": 0,
    "explain": "Маркеры. Подходит ответ «безусловно vs условие». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m165"
  },
  {
    "topic": "classmethod",
    "q": "Что такое @classmethod первый аргумент?",
    "options": [
      "cls (класс)",
      "self",
      "args",
      "нет аргументов"
    ],
    "answer": 0,
    "explain": "Метод класса. Подходит ответ «cls (класс)».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m166"
  },
  {
    "topic": "ABC",
    "q": "Что такое @abstractmethod на property?",
    "options": [
      "возможно",
      "нельзя",
      "только methods",
      "только classmethod"
    ],
    "answer": 0,
    "explain": "Абстрактные property. Подходит ответ «возможно».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m167"
  },
  {
    "topic": "import",
    "q": "Выбери верный вариант: from __future__ import annotations делает?",
    "options": [
      "откладывает оценку аннотаций (строки)",
      "включает GIL free",
      "Py2 mode",
      "оптимизирует abs"
    ],
    "answer": 0,
    "explain": "PEP 563/649 эпоха. Подходит ответ «откладывает оценку аннотаций (строки)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m168"
  },
  {
    "topic": "multiprocessing",
    "q": "В чём разница: Pipe vs Queue?",
    "options": [
      "Pipe двусторонняя пара, Queue многоучастников",
      "одно и то же",
      "Pipe только async",
      "Queue без pickle"
    ],
    "answer": 0,
    "explain": "IPC примитивы. Подходит ответ «Pipe двусторонняя пара, Queue многоучастников».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m169"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Паттерн Command полезен для?",
    "options": [
      "отложенного выполнения и undo/redo",
      "только SQL",
      "только HTTP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Команда как объект: execute(), undo(). Подходит ответ «отложенного выполнения и undo/redo».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m170"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1]",
      "[[1, 2], [0, 1]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые. Подходит ответ «[1, 2, 0, 1]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(2)))))",
    "group": "Collections и itertools",
    "id": "m171"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Isinstance с абстрактными/builtin типами. Подходит ответ «True». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "print(isinstance({'a': 1}, dict))",
    "group": "Typing и dataclasses",
    "id": "m172"
  },
  {
    "topic": "декораторы",
    "q": "Зачем нужен functools.wraps?",
    "options": [
      "сохранить __name__/__doc__ обёрнутой",
      "ускорить вызов",
      "добавить тип",
      "заменить lambda"
    ],
    "answer": 0,
    "explain": "Копирует метаданные. Подходит ответ «сохранить __name__/__doc__ обёрнутой». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m173"
  },
  {
    "topic": "comprehensions",
    "q": "Есть ли у listcomp своей scope?",
    "options": [
      "да (с 3), локальные переменные не утекают",
      "нет как в 2.7",
      "только для async",
      "только dictcomp"
    ],
    "answer": 0,
    "explain": "Leak фиксанули. Подходит ответ «да (с 3), локальные переменные не утекают».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m174"
  },
  {
    "topic": "SQL",
    "q": "Что такое SQLAlchemy?",
    "options": [
      "ORM/toolkit для БД",
      "NoSQL база",
      "кэш Redis",
      "брокер"
    ],
    "answer": 0,
    "explain": "Популярный ORM. Подходит ответ «ORM/toolkit для БД». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m175"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт ensure_future / create_task?",
    "options": [
      "планируют корутину",
      "блокируют",
      "создают process",
      "компилируют C"
    ],
    "answer": 0,
    "explain": "На loop. Подходит ответ «планируют корутину». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m176"
  },
  {
    "topic": "exceptions",
    "q": "Что такое ZeroDivisionError наследует?",
    "options": [
      "ArithmeticError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От ZeroDivisionError до ArithmeticError через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m177"
  },
  {
    "topic": "testing",
    "q": "Что означает pytest -k 'not slow'?",
    "options": [
      "запустить тесты, имя которых не матчит slow",
      "удалить медленные",
      "только slow",
      "skip CI"
    ],
    "answer": 0,
    "explain": "Фильтр по выражению в имени теста. Подходит ответ «запустить тесты, имя которых не матчит slow». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m178"
  },
  {
    "topic": "магические",
    "q": "Что вызовет a + b?",
    "options": [
      "a.__add__(b) или b.__radd__(a)",
      "только __iadd__",
      "len(a)",
      "hash(a)"
    ],
    "answer": 0,
    "explain": "Отражённые методы для правого операнда. Подходит ответ «a.__add__(b) или b.__radd__(a)».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m179"
  },
  {
    "topic": "ООП",
    "q": "Выбери верный вариант: MRO при diamond: C(A,B) порядок?",
    "options": [
      "C, а затем A, и далее B, а затем object (примерно, C3)",
      "C, а затем B, и далее A всегда",
      "случайный",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "C3 linearization; смотри Class.__mro__. Подходит ответ «C, а затем A, и далее B, а затем object (примерно, C3)».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m180"
  },
  {
    "topic": "sort",
    "q": "Что выведет код?",
    "options": [
      "стабильный (сохраняет порядок)",
      "random",
      "по id",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Timsort stable. Подходит ответ «стабильный (сохраняет порядок)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "xs = [('b', 1), ('a', 1)]\nprint(sorted(xs, key=lambda t: t[1]))",
    "group": "Stdlib и производительность",
    "id": "m181"
  },
  {
    "topic": "threading",
    "q": "Что верно про Barrier для N потоков?",
    "options": [
      "синхронная встреча",
      "lock one",
      "async gather",
      "process barrier OS"
    ],
    "answer": 0,
    "explain": "Threading.Barrier. Подходит ответ «синхронная встреча».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m182"
  },
  {
    "topic": "YAGNI",
    "q": "Что такое YAGNI не противоречит?",
    "options": [
      "простому расширяемому дизайну без лишних фич",
      "написанию всего заранее",
      "100 уровней наследования",
      "преждевременной оптимизации"
    ],
    "answer": 0,
    "explain": "Можно проектировать чисто, но не реализовывать ненужное сейчас. Подходит ответ «простому расширяемому дизайну без лишних фич».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m183"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "3",
      "6",
      "9",
      "6"
    ],
    "answer": 0,
    "explain": "C(3,2) = 3. Подходит ответ «3». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(3), 2))))",
    "group": "Collections и itertools",
    "id": "m184"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Annotated[int, ...] несёт?",
    "options": [
      "метаданные для инструментов",
      "runtime check обязательно",
      "GIL hint",
      "скорость"
    ],
    "answer": 0,
    "explain": "PEP 593. Подходит ответ «метаданные для инструментов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m185"
  },
  {
    "topic": "декораторы",
    "q": "Что делает @functools.wraps(f)?",
    "options": [
      "копирует __name__/__doc__ с обёрнутой функции",
      "ускоряет вызов",
      "делает async",
      "убирает GIL"
    ],
    "answer": 0,
    "explain": "Иначе инспекция видит wrapper. Подходит ответ «копирует __name__/__doc__ с обёрнутой функции». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m186"
  },
  {
    "topic": "генераторы",
    "q": "Что такое (x for x in range(3))?",
    "options": [
      "generator expression",
      "tuple",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Круглые скобки — genexp. Подходит ответ «generator expression». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m187"
  },
  {
    "topic": "SQL",
    "q": "Что такое covering index?",
    "options": [
      "индекс закрывает запрос без heap",
      "полный table scan",
      "foreign key",
      "view"
    ],
    "answer": 0,
    "explain": "Меньше I/O. Подходит ответ «индекс закрывает запрос без heap». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m188"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт eager_task_factory (3.12)?",
    "options": [
      "задачи стартуют немедленно",
      "удаляет cancel",
      "process tasks",
      "GIL"
    ],
    "answer": 0,
    "explain": "Семантика планирования. Подходит ответ «задачи стартуют немедленно». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m189"
  },
  {
    "topic": "with",
    "q": "Что вернёт with A() as a, B() as b?",
    "options": [
      "да, поддерживается",
      "нет",
      "только async with",
      "только 3.12+"
    ],
    "answer": 0,
    "explain": "Несколько CM в одном with. Подходит ответ «да, поддерживается».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m190"
  },
  {
    "topic": "testing",
    "q": "Что позволяет monkeypatch в pytest?",
    "options": [
      "временно подменить атрибут/ENV/путь",
      "патчить prod",
      "удалить git",
      "отключить GIL"
    ],
    "answer": 0,
    "explain": "Автооткат после теста. Подходит ответ «временно подменить атрибут/ENV/путь». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m191"
  },
  {
    "topic": "staticmethod",
    "q": "Что такое @staticmethod?",
    "options": [
      "не принимает self/cls автоматически",
      "это глобальная функция модуля",
      "запрещён",
      "только в metaclasses"
    ],
    "answer": 0,
    "explain": "Обычная функция в пространстве класса. Подходит ответ «не принимает self/cls автоматически».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m192"
  },
  {
    "topic": "MRO",
    "q": "Что выведет C.__mro__[0].__name__?",
    "options": [
      "C",
      "A",
      "B",
      "object"
    ],
    "answer": 0,
    "explain": "Первый в MRO — сам класс. Подходит ответ «C». MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "code": "class A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__[0].__name__)",
    "group": "ООП продвинутый",
    "id": "m193"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Deepcopy копирует вложенность. Подходит ответ «False». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m194"
  },
  {
    "topic": "threading",
    "q": "Что такое Timer запускает?",
    "options": [
      "функцию через delay в потоке",
      "async sleep",
      "cron OS",
      "GC"
    ],
    "answer": 0,
    "explain": "Threading.Timer. Подходит ответ «функцию через delay в потоке».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m195"
  },
  {
    "topic": "принципы",
    "q": "Выбери верный вариант: Spaghetti code — признак?",
    "options": [
      "запутанных зависимостей и потока управления",
      "только async",
      "только ООП",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Нужны модули, слои, явные границы. Подходит ответ «запутанных зависимостей и потока управления».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m196"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('i', 4), ('s', 4)]",
      "{'m': 1, 'i': 4, 's': 4, 'p': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Подходит ответ «[('i', 4), ('s', 4)]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('mississippi').most_common(2))",
    "group": "Collections и itertools",
    "id": "m197"
  },
  {
    "topic": "dataclasses",
    "q": "Выбери верный вариант: @dataclass class Node: x: int = 1 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Проблема mutable default; int безопасен. Подходит ответ «нет, int immutable default ок».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m198"
  },
  {
    "topic": "декораторы",
    "q": "Выбери все верные про декораторы?",
    "options": [
      "@f над def g равносильно g = f(g)",
      "functools.wraps сохраняет __name__/__doc__",
      "декоратор всегда принимает только одну функцию без аргументов",
      "декоратор с аргументами — фабрика декораторов"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "Декоратор с параметрами: @deco(x), а затем вызов deco(x), который возвращает настоящий декоратор. Верными здесь будут пункты: «@f над def g равносильно g = f(g)»; «functools.wraps сохраняет __name__/__doc__»; «декоратор с аргументами — фабрика декораторов».",
    "kind": "multi",
    "tags": [
      "decorators"
    ],
    "difficulty": "middle",
    "group": "Декораторы и замыкания",
    "id": "m199"
  },
  {
    "topic": "генераторы",
    "q": "Выбери верный вариант: return value в генераторе (3.3+)?",
    "options": [
      "кладёт value в StopIteration.value",
      "синтаксическая ошибка",
      "как обычный return из caller",
      "игнорируется"
    ],
    "answer": 0,
    "explain": "PEP 380: return x в generator, а затем StopIteration.value = x. Подходит ответ «кладёт value в StopIteration.value».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m200"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 1 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 1 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Подходит ответ «набор из N строк без стабильного порядка». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m201"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: gather n=4 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "игнор"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка поднимается из gather. Подходит ответ «пробросит исключение (остальные могут продолжать до отмены политики)».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m202"
  },
  {
    "topic": "context",
    "q": "Как удобнее открыть 1 вложенных with без ExitStack?",
    "options": [
      "можно вложить / или один with a, b",
      "нельзя никогда",
      "только async",
      "нужен GIL"
    ],
    "answer": 0,
    "explain": "With open() as a, open() as b: или ExitStack для динамики. Подходит ответ «можно вложить / или один with a, b».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m203"
  },
  {
    "topic": "warnings",
    "q": "Что такое simplefilter('error')?",
    "options": [
      "предупреждение превращается в исключение",
      "silence all",
      "log only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Строгий режим. Подходит ответ «предупреждение превращается в исключение».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m204"
  },
  {
    "topic": "магические",
    "q": "Что такое __getitem__ обслуживает?",
    "options": [
      "obj[key]",
      "obj.key",
      "obj()",
      "with obj"
    ],
    "answer": 0,
    "explain": "Индексация. Подходит ответ «obj[key]».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m205"
  },
  {
    "topic": "MRO",
    "q": "Что такое MRO?",
    "options": [
      "порядок поиска методов",
      "модуль",
      "тип ошибки",
      "менеджер памяти"
    ],
    "answer": 0,
    "explain": "Method Resolution Order (C3). Подходит ответ «порядок поиска методов». MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m206"
  },
  {
    "topic": "pickle",
    "q": "Выбери верный вариант: find_class можно ограничить для?",
    "options": [
      "безопасной загрузки whitelist",
      "ускорения",
      "json",
      "YAML"
    ],
    "answer": 0,
    "explain": "Кастомный Unpickler. Подходит ответ «безопасной загрузки whitelist».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m207"
  },
  {
    "topic": "threading",
    "q": "Что вернёт Condition = lock + wait/notify?",
    "options": [
      "да",
      "нет, только Event",
      "только asyncio",
      "только multiproc"
    ],
    "answer": 0,
    "explain": "Классический монитор. Подходит ответ «да».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m208"
  },
  {
    "topic": "Zen",
    "q": "Как посмотреть Zen of Python в интерпретаторе?",
    "options": [
      "import this",
      "zen()",
      "python -m zen",
      "help(zen)"
    ],
    "answer": 0,
    "explain": "Пасхалка в стандартной библиотеке — набор афоризмов PEP 20. Подходит ответ «import this».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m209"
  },
  {
    "topic": "functools",
    "q": "Выбери верный вариант: Сколько уникальных ключей кэша у fib(4) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 5 (0..n)",
      "16",
      "4",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Подходит ответ «примерно 5 (0..n)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m210"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "no",
      "0",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Подходит ответ «no». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "if (x := 0):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m211"
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код (по порядку)?",
    "options": [
      "before, затем 1",
      "только 1",
      "ошибка",
      "только before"
    ],
    "answer": 0,
    "explain": "Обёртка печатает before, затем возвращает 1 — print(f()) печатает 1. Подходит ответ «before, затем 1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "def deco(f):\n    def wrap():\n        print('before')\n        return f()\n    return wrap\n@deco\ndef f():\n    return 1\nprint(f())",
    "group": "Декораторы и замыкания",
    "id": "m212"
  },
  {
    "topic": "comprehensions",
    "q": "Что вернёт [(x, y) for x in range(2) for y in range(2)] длина?",
    "options": [
      "4",
      "2",
      "3",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово 2×2. Подходит ответ «4».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m213"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 409 — кратко?",
    "options": [
      "конфликт состояния",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 409: конфликт состояния. Подходит ответ «конфликт состояния». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m214"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: create_task vs await coro напрямую?",
    "options": [
      "task планирует конкурентно; await — последовательно",
      "одинаково",
      "create_task блокирует",
      "await запрещён"
    ],
    "answer": 0,
    "explain": "Task позволяет параллелить await-точки. Подходит ответ «task планирует конкурентно; await — последовательно».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m215"
  },
  {
    "topic": "context",
    "q": "Выбери верный вариант: Если __exit__ вернул True?",
    "options": [
      "подавляет исключение",
      "ре-рейзит всегда",
      "закрывает GIL",
      "игнор return"
    ],
    "answer": 0,
    "explain": "Swallow exception. Подходит ответ «подавляет исключение».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m216"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: unittest.mock.patch лучше использовать как?",
    "options": [
      "context manager или decorator на время теста",
      "глобально в prod",
      "вместо DI всегда",
      "в __init__ модуля"
    ],
    "answer": 0,
    "explain": "Подмена зависимости изолирует unit-тест. Подходит ответ «context manager или decorator на время теста».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m217"
  },
  {
    "topic": "магические",
    "q": "Что такое __bytes__?",
    "options": [
      "bytes(obj)",
      "str",
      "repr",
      "format"
    ],
    "answer": 0,
    "explain": "Байтовое представление. Подходит ответ «bytes(obj)».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m218"
  },
  {
    "topic": "ООП",
    "q": "Что такое @property обычно?",
    "options": [
      "даёт доступ как к атрибуту, считая через метод",
      "делает метод статическим",
      "удаляет атрибут",
      "только для private"
    ],
    "answer": 0,
    "explain": "Obj.x вызывает getter без скобок. Подходит ответ «даёт доступ как к атрибуту, считая через метод». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m219"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Deepcopy копирует вложенность. Подходит ответ «False». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m220"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: время в чистом Python CPU bound на 2 threads?",
    "options": [
      "часто ≈1 ядро из-за GIL",
      "линейный x2 всегда",
      "x4",
      "zero"
    ],
    "answer": 0,
    "explain": "Классический вопрос собеса. Подходит ответ «часто ≈1 ядро из-за GIL». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m221"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Паттерн Adapter нужен когда?",
    "options": [
      "нужно подогнать чужой интерфейс под свой",
      "нужен singleton",
      "нужен GIL",
      "нужен pickle"
    ],
    "answer": 0,
    "explain": "Обёртка вокруг legacy API. Подходит ответ «нужно подогнать чужой интерфейс под свой».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m222"
  },
  {
    "topic": "itertools",
    "q": "Что такое chain.from_iterable?",
    "options": [
      "сплющивает один уровень",
      "deep flatten any",
      "product",
      "zip"
    ],
    "answer": 0,
    "explain": "Без распаковки *huge. Подходит ответ «сплющивает один уровень». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m223"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое make_dataclass?",
    "options": [
      "динамическое создание dataclass",
      "NamedTuple only",
      "TypedDict",
      "Enum"
    ],
    "answer": 0,
    "explain": "Runtime factory. Подходит ответ «динамическое создание dataclass».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m224"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[3, 3, 3, 3]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Поздний захват i — все лямбды видят финальное значение. Подходит ответ «[3, 3, 3, 3]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(4)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m225"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "a b",
      "['a', 'b']",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Подходит ответ «a b». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "g = (x for x in ['a', 'b'])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m226"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 201 — кратко?",
    "options": [
      "ресурс создан",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 201: ресурс создан. Подходит ответ «ресурс создан». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m227"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: create_task vs await coro сразу?",
    "options": [
      "create_task планирует в фоне event loop",
      "синонимы",
      "create_task блокирует поток",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Task начинает выполняться, пока ты делаешь другое. Подходит ответ «create_task планирует в фоне event loop».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m228"
  },
  {
    "topic": "context",
    "q": "Что такое ExitStack.enter_context нужен когда?",
    "options": [
      "динамическое число CM",
      "только один with",
      "вместо try",
      "async only"
    ],
    "answer": 0,
    "explain": "Contextlib.ExitStack. Подходит ответ «динамическое число CM».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m229"
  },
  {
    "topic": "mock",
    "q": "Что такое assert_called_once_with?",
    "options": [
      "проверяет единственный вызов с args",
      "всегда True",
      "мокает time",
      "CI"
    ],
    "answer": 0,
    "explain": "Верификация. Подходит ответ «проверяет единственный вызов с args».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m230"
  },
  {
    "topic": "property",
    "q": "Что такое cached_property сброс?",
    "options": [
      "del obj.attr / pop из __dict__",
      "авто каждый доступ",
      "нельзя",
      "GC only"
    ],
    "answer": 0,
    "explain": "Инвалидация кэша. Подходит ответ «del obj.attr / pop из __dict__».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m231"
  },
  {
    "topic": "slots",
    "q": "Что такое Наследование slots требует?",
    "options": [
      "аккуратности с объявлением слотов в цепочке",
      "ничего особенного always",
      "запрета subclass",
      "dict always"
    ],
    "answer": 0,
    "explain": "Иначе снова __dict__. Подходит ответ «аккуратности с объявлением слотов в цепочке».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m232"
  },
  {
    "topic": "pickle",
    "q": "Для чего используется pickle?",
    "options": [
      "сериализации объектов Python",
      "JSON веба",
      "SQL",
      "XML"
    ],
    "answer": 0,
    "explain": "Бинарная сериализация; осторожно с security. Подходит ответ «сериализации объектов Python».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m233"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое массив Array('i', n)?",
    "options": [
      "shared typed buffer",
      "list proxy",
      "numpy always",
      "bytes string"
    ],
    "answer": 0,
    "explain": "Sharedctypes. Подходит ответ «shared typed buffer».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m234"
  },
  {
    "topic": "принципы",
    "q": "Почему except: pass без логирования — плохо?",
    "options": [
      "глотает ошибки и скрывает баги",
      "ускоряет код",
      "требование PEP 8",
      "нужно для asyncio"
    ],
    "answer": 0,
    "explain": "Минимум — лог + конкретный тип исключения. Подходит ответ «глотает ошибки и скрывает баги».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m235"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "7",
      "12",
      "4",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Partial фиксирует первый аргумент, а затем f(3, 4). Подходит ответ «7». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 3)(4))",
    "group": "Collections и itertools",
    "id": "m236"
  },
  {
    "topic": "args",
    "q": "Выбери верный вариант: KeywordTypeError при лишнем имени?",
    "options": [
      "TypeError",
      "KeyError",
      "NameError",
      "SyntaxError runtime"
    ],
    "answer": 0,
    "explain": "Неожиданный kwargs. Подходит ответ «TypeError».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m237"
  },
  {
    "topic": "декораторы",
    "q": "Чем помогает functools.wraps?",
    "options": [
      "сохранить __name__/__doc__ исходной функции",
      "ускорить вызов",
      "убрать GIL",
      "сделать async"
    ],
    "answer": 0,
    "explain": "Копирует метаданные на обёртку. Подходит ответ «сохранить __name__/__doc__ исходной функции». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m238"
  },
  {
    "topic": "итераторы",
    "q": "Что такое collections.abc.Iterable требует?",
    "options": [
      "__iter__",
      "__next__ обязательно",
      "len",
      "getitem"
    ],
    "answer": 0,
    "explain": "Итерируемое ≠ итератор. Подходит ответ «__iter__».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m239"
  },
  {
    "topic": "HTTP",
    "q": "Что такое requests.get timeout?",
    "options": [
      "ограничивает ожидание",
      "обязателен всегда синтаксисом",
      "только connect",
      "async only"
    ],
    "answer": 0,
    "explain": "Защита от зависаний. Подходит ответ «ограничивает ожидание». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m240"
  },
  {
    "topic": "asyncio",
    "q": "Что такое asyncio.gather(*tasks)?",
    "options": [
      "запускает конкурентно и ждёт все",
      "строго последовательно",
      "только первый",
      "убивает loop"
    ],
    "answer": 0,
    "explain": "Параллельные awaitables. Подходит ответ «запускает конкурентно и ждёт все». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m241"
  },
  {
    "topic": "context",
    "q": "Что такое aclosing для async?",
    "options": [
      "async close аналог closing",
      "sync only",
      "thread",
      "process"
    ],
    "answer": 0,
    "explain": "Contextlib.aclosing. Подходит ответ «async close аналог closing».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m242"
  },
  {
    "topic": "logging",
    "q": "Что такое LoggerAdapter?",
    "options": [
      "контекстные поля в логах",
      "handler",
      "filter ban",
      "root replace"
    ],
    "answer": 0,
    "explain": "Request_id и т.п. Подходит ответ «контекстные поля в логах». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m243"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое property?",
    "options": [
      "data descriptor",
      "non-data only",
      "classmethod",
      "module"
    ],
    "answer": 0,
    "explain": "__set__ есть. Подходит ответ «data descriptor». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m244"
  },
  {
    "topic": "ООП",
    "q": "Что такое staticmethod?",
    "options": [
      "функция в классе без self/cls",
      "то же что classmethod",
      "абстрактный метод",
      "property"
    ],
    "answer": 0,
    "explain": "Не получает ни экземпляр, ни класс автоматически. Подходит ответ «функция в классе без self/cls». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m245"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "var/log/syslog",
      "var\\log\\syslog",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Подходит ответ «var/log/syslog». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'syslog'))",
    "group": "Stdlib и производительность",
    "id": "m246"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: I/O в socket обычно?",
    "options": [
      "отпускает GIL на время ожидания",
      "держит GIL forever",
      "создаёт process",
      "отключает async"
    ],
    "answer": 0,
    "explain": "Потоки полезны для I/O. Подходит ответ «отпускает GIL на время ожидания». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m247"
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Template Method?",
    "options": [
      "базовый класс задаёт скелет, подклассы — шаги",
      "копирование HTML",
      "Jinja2",
      "async template"
    ],
    "answer": 0,
    "explain": "Алгоритм в базе, детали в override. Подходит ответ «базовый класс задаёт скелет, подклассы — шаги».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m248"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "4",
      "12",
      "64",
      "24"
    ],
    "answer": 0,
    "explain": "C(4,3) = 4. Подходит ответ «4». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 3))))",
    "group": "Collections и itertools",
    "id": "m249"
  },
  {
    "topic": "protocols",
    "q": "Что такое runtime_checkable Protocol?",
    "options": [
      "isinstance может проверить методы",
      "всегда без runtime",
      "заменяет ABC полностью без оговорок",
      "GIL"
    ],
    "answer": 0,
    "explain": "Ограниченная runtime проверка. Подходит ответ «isinstance может проверить методы».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m250"
  },
  {
    "topic": "замыкания",
    "q": "Верно ли, что cell в замыкании хранит?",
    "options": [
      "cell_contents enclosing переменной",
      "bytecode",
      "GIL lock",
      "только int"
    ],
    "answer": 0,
    "explain": "__closure__. Подходит ответ «cell_contents enclosing переменной».",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m251"
  },
  {
    "topic": "coroutines",
    "q": "Что такое gen.send(x) передаёт?",
    "options": [
      "значение в yield",
      "в return",
      "в global",
      "в GIL"
    ],
    "answer": 0,
    "explain": "Двусторонние генераторы. Подходит ответ «значение в yield».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m252"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `ORDER BY`?",
    "options": [
      "сортировка результата",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "ORDER BY в SQL. Подходит ответ «сортировка результата». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m253"
  },
  {
    "topic": "asyncio",
    "q": "Что такое incomplete Task на shutdown?",
    "options": [
      "нужно cancel/await корректно",
      "игнор безопасен всегда",
      "auto join threads",
      "OS kill only"
    ],
    "answer": 0,
    "explain": "Предупреждения loop.close. Подходит ответ «нужно cancel/await корректно». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m254"
  },
  {
    "topic": "context",
    "q": "Что такое suppress(FileNotFoundError)?",
    "options": [
      "молчаливый пропуск",
      "лог",
      "retry",
      "fatal"
    ],
    "answer": 0,
    "explain": "Узкий except. Подходит ответ «молчаливый пропуск».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m255"
  },
  {
    "topic": "testing",
    "q": "Чем integration test отличается от unit?",
    "options": [
      "проверяет связку компонентов (БД, API)",
      "только одну функцию без I/O",
      "только UI",
      "только manual"
    ],
    "answer": 0,
    "explain": "Unit — быстрый, изолированный; integration — реальные границы. Подходит ответ «проверяет связку компонентов (БД, API)».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m256"
  },
  {
    "topic": "магические",
    "q": "Выбери верный вариант: __hash__ должен быть согласован с?",
    "options": [
      "__eq__",
      "__str__",
      "__len__",
      "id always only"
    ],
    "answer": 0,
    "explain": "Равные, а затем равный hash. Подходит ответ «__eq__».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m257"
  },
  {
    "topic": "slots",
    "q": "Что такое __slots__ ограничивает?",
    "options": [
      "набор атрибутов, экономит память",
      "число методов",
      "наследование",
      "GC"
    ],
    "answer": 0,
    "explain": "Без __dict__ по умолчанию. Подходит ответ «набор атрибутов, экономит память».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m258"
  },
  {
    "topic": "secrets",
    "q": "Что такое compare_digest?",
    "options": [
      "защита от timing attacks",
      "быстрее ==",
      "hash lib",
      "uuid"
    ],
    "answer": 0,
    "explain": "Для токенов/паролей. Подходит ответ «защита от timing attacks».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m259"
  },
  {
    "topic": "GIL",
    "q": "Что такое GIL мешает?",
    "options": [
      "CPU-bound многопоточности",
      "I/O полностью",
      "multiprocessing",
      "asyncio I/O"
    ],
    "answer": 0,
    "explain": "Для CPU — multiprocessing/C-ext. Подходит ответ «CPU-bound многопоточности». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m260"
  },
  {
    "topic": "принципы",
    "q": "Когда композиция предпочтительнее наследования?",
    "options": [
      "когда нужно комбинировать разное поведение",
      "всегда запрещено наследование",
      "только для dataclass",
      "только в C-API"
    ],
    "answer": 0,
    "explain": "Наследование жёстко связывает; композиция — слабее связь. Подходит ответ «когда нужно комбинировать разное поведение».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m261"
  },
  {
    "topic": "collections",
    "q": "Что такое Counter сложение?",
    "options": [
      "складывает счётчики",
      "ошибка",
      "set union only",
      "list concat"
    ],
    "answer": 0,
    "explain": "C1+c2. Подходит ответ «складывает счётчики».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m262"
  },
  {
    "topic": "typing",
    "q": "Что такое NewType создаёт?",
    "options": [
      "отдельный тип для чекера (runtime тонкий)",
      "новый class always heavy",
      "Enum",
      "TypedDict"
    ],
    "answer": 0,
    "explain": "Typing.NewType. Подходит ответ «отдельный тип для чекера (runtime тонкий)». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m263"
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код?",
    "options": [
      "wrap\nf",
      "f\nwrap",
      "wrap",
      "f"
    ],
    "answer": 0,
    "explain": "G = deco(g) при определении. Подходит ответ «wrap\nf». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "code": "def deco(fn):\n    print('wrap')\n    return fn\n@deco\ndef f():\n    print('f')\nf()",
    "group": "Декораторы и замыкания",
    "id": "m264"
  },
  {
    "topic": "генераторы",
    "q": "Что такое next(gen) после исчерпания?",
    "options": [
      "StopIteration",
      "None",
      "IndexError",
      "False"
    ],
    "answer": 0,
    "explain": "Протокол итератора. Подходит ответ «StopIteration». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m265"
  },
  {
    "topic": "HTTP",
    "q": "Что такое idempotency-key header паттерн?",
    "options": [
      "безопасный повтор POST",
      "кэш ETag",
      "CORS",
      "JWT refresh only"
    ],
    "answer": 0,
    "explain": "Платёжные API. Подходит ответ «безопасный повтор POST». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m266"
  },
  {
    "topic": "asyncio",
    "q": "Что такое run_in_executor нужен для?",
    "options": [
      "блокирующего кода в thread/process pool",
      "быстрее await sleep",
      "замены gather",
      "GUI only"
    ],
    "answer": 0,
    "explain": "Не блокировать loop. Подходит ответ «блокирующего кода в thread/process pool». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m267"
  },
  {
    "topic": "исключения",
    "q": "Что вернёт except* (3.11) ловит?",
    "options": [
      "подисключения ExceptionGroup",
      "только async",
      "BaseExceptionGroup нельзя",
      "синтаксис 3.8"
    ],
    "answer": 0,
    "explain": "PEP 654. Подходит ответ «подисключения ExceptionGroup». Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m268"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: snapshot-тест (golden file) полезен для?",
    "options": [
      "фиксации эталонного вывода/сериализации",
      "perf only",
      "security audit",
      "GIL"
    ],
    "answer": 0,
    "explain": "Регрессия формата ответа API/HTML. Подходит ответ «фиксации эталонного вывода/сериализации». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m269"
  },
  {
    "topic": "магические",
    "q": "Выбери верный вариант: __bool__ если нет, берётся?",
    "options": [
      "__len__ != 0",
      "всегда True",
      "hash",
      "id"
    ],
    "answer": 0,
    "explain": "Правдивость объектов. Подходит ответ «__len__ != 0».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m270"
  },
  {
    "topic": "ABC",
    "q": "Что вернёт abc.ABC / @abstractmethod?",
    "options": [
      "запрещает инстанс без реализации",
      "ускоряет",
      "добавляет slots",
      "заменяет Protocol"
    ],
    "answer": 0,
    "explain": "Номинальные абстрактные классы. Подходит ответ «запрещает инстанс без реализации».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m271"
  },
  {
    "topic": "import",
    "q": "Что такое importlib.reload?",
    "options": [
      "перезагружает модуль",
      "удаляет пакет",
      "чистит pip",
      "restart OS"
    ],
    "answer": 0,
    "explain": "Осторожно с состоянием. Подходит ответ «перезагружает модуль».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m272"
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт Pool.map chunksize?",
    "options": [
      " влияет на нарезку задач",
      "отключает pickle",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "Баланс overhead. Подходит ответ «влияет на нарезку задач».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m273"
  },
  {
    "topic": "KISS",
    "q": "Команда пишет фабрику фабрик для одного if — что нарушено?",
    "options": [
      "KISS",
      "DRY только",
      "GIL",
      "asyncio"
    ],
    "answer": 0,
    "explain": "Избыточная абстракция усложняет чтение без выгоды — анти-KISS.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m274"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(accumulate([1,2,3]))?",
    "options": [
      "[1, 3, 6]",
      "[6]",
      "[1, 2, 3]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Подходит ответ «[1, 3, 6]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m275"
  },
  {
    "topic": "typing",
    "q": "Что такое Protocol с @property?",
    "options": [
      "структурные атрибуты",
      "запрещено",
      "только methods",
      "runtime always full"
    ],
    "answer": 0,
    "explain": "Модели данных. Подходит ответ «структурные атрибуты». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m276"
  },
  {
    "topic": "декораторы",
    "q": "Что такое stacked decorators применяются?",
    "options": [
      "снизу вверх",
      "сверху вниз",
      "параллельно",
      "случайно"
    ],
    "answer": 0,
    "explain": "Ближний к def первый. Подходит ответ «снизу вверх». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m277"
  },
  {
    "topic": "генераторы",
    "q": "Выбери верный вариант: Генератор — одноразовый?",
    "options": [
      "да, после исчерпания пуст",
      "нет, рестарт сам",
      "как list",
      "кэшируется"
    ],
    "answer": 0,
    "explain": "Нужен новый вызов функции. Подходит ответ «да, после исчерпания пуст». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m278"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: httpx хорош тем что?",
    "options": [
      "поддерживает sync и async",
      "только Python 2",
      "заменяет Django",
      "встроен в stdlib"
    ],
    "answer": 0,
    "explain": "Современный клиент. Подходит ответ «поддерживает sync и async». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m279"
  },
  {
    "topic": "asyncio",
    "q": "Что такое asyncio.gather запускает?",
    "options": [
      "корутины конкурентно",
      "строго по очереди всегда",
      "потоки OS",
      "процессы"
    ],
    "answer": 0,
    "explain": "Конкурентное ожидание. Подходит ответ «корутины конкурентно». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m280"
  },
  {
    "topic": "exceptions",
    "q": "Что такое TypeError наследует?",
    "options": [
      "Exception",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От TypeError до Exception через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m281"
  },
  {
    "topic": "warnings",
    "q": "Что такое filterwarnings('ignore', category=DeprecationWarning)?",
    "options": [
      "глушит deprecations",
      "превращает в error",
      "удаляет API",
      "CI fail"
    ],
    "answer": 0,
    "explain": "Точечный фильтр. Подходит ответ «глушит deprecations».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m282"
  },
  {
    "topic": "дескрипторы",
    "q": "Выбери верный вариант: Дескриптор — объект с?",
    "options": [
      "__get__/__set__/__delete__",
      "только __call__",
      "yield",
      "async"
    ],
    "answer": 0,
    "explain": "Протокол дескрипторов; property на нём. Подходит ответ «__get__/__set__/__delete__». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m283"
  },
  {
    "topic": "ООП",
    "q": "В чём разница: __init__ vs __new__?",
    "options": [
      "__new__ создаёт объект, __init__ инициализирует",
      "синонимы",
      "__init__ создаёт, __new__ нет",
      "только __init__ существует"
    ],
    "answer": 0,
    "explain": "__new__ — конструктор (редко нужен), __init__ — инициализатор. Подходит ответ «__new__ создаёт объект, __init__ инициализирует».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m284"
  },
  {
    "topic": "регулярки",
    "q": "Что позволяет re.VERBOSE?",
    "options": [
      "комментарии и пробелы в паттерне",
      "быстрее match",
      "только bytes",
      "JIT"
    ],
    "answer": 0,
    "explain": "Читаемые regex. Подходит ответ «комментарии и пробелы в паттерне».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m285"
  },
  {
    "topic": "GIL",
    "q": "Что такое GIL в CPython?",
    "options": [
      "глобальная блокировка интерпретатора",
      "сборщик мусора",
      "тип данных",
      "модуль threading"
    ],
    "answer": 0,
    "explain": "Один поток bytecode одновременно. Подходит ответ «глобальная блокировка интерпретатора». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m286"
  },
  {
    "topic": "patterns",
    "q": "Что такое Null Object pattern?",
    "options": [
      "объект-заглушка с безопасным no-op поведением",
      "NoneType only",
      "Optional всегда",
      "raise всегда"
    ],
    "answer": 0,
    "explain": "Избегаем if obj is None по всему коду. Подходит ответ «объект-заглушка с безопасным no-op поведением».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m287"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "5",
      "5",
      "10",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Подходит ответ «5». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nh = [10, 20, 5, 30]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m288"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "обычно нет",
      "да всегда TypeError",
      "только mypy runtime",
      "GIL check"
    ],
    "answer": 0,
    "explain": "Аннотации не enforced. Подходит ответ «обычно нет». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "def f(xs: list[int]):\n    return xs\nprint(f(['a']))",
    "group": "Typing и dataclasses",
    "id": "m289"
  },
  {
    "topic": "замыкания",
    "q": "Что такое __closure__ у функции?",
    "options": [
      "кортеж cell или None",
      "dict locals",
      "список args",
      "GIL"
    ],
    "answer": 0,
    "explain": "Для вложенных с free vars. Подходит ответ «кортеж cell или None».",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m290"
  },
  {
    "topic": "итераторы",
    "q": "Что такое iter(obj) ожидает?",
    "options": [
      "__iter__ или __getitem__",
      "только len",
      "только __next__",
      "pickle"
    ],
    "answer": 0,
    "explain": "Протокол итерации. Подходит ответ «__iter__ или __getitem__».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m291"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 404 — кратко?",
    "options": [
      "не найдено",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 404: не найдено. Подходит ответ «не найдено». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m292"
  },
  {
    "topic": "asyncio",
    "q": "Что такое call_soon_threadsafe?",
    "options": [
      "планирование из другого потока",
      "из корутины предпочтительнее create_task",
      "process",
      "GIL free"
    ],
    "answer": 0,
    "explain": "Интеграция threads↔loop. Подходит ответ «планирование из другого потока». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m293"
  },
  {
    "topic": "context",
    "q": "Что выведет код?",
    "options": [
      "enter\nexit",
      "enter",
      "exit",
      "ошибка"
    ],
    "answer": 0,
    "explain": "__enter__ затем тело, затем __exit__. Подходит ответ «enter\nexit». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    pass",
    "group": "Исключения и контекст",
    "id": "m294"
  },
  {
    "topic": "LBYL",
    "q": "Что такое LBYL?",
    "options": [
      "Look Before You Leap",
      "Lazy Binding",
      "List By Yield",
      "Linux Build"
    ],
    "answer": 0,
    "explain": "Проверки до действия. Подходит ответ «Look Before You Leap».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m295"
  },
  {
    "topic": "магические",
    "q": "Что такое __format__ обслуживает?",
    "options": [
      "format(obj, spec) / f'{obj:spec}'",
      "str only",
      "repr only",
      "bytes"
    ],
    "answer": 0,
    "explain": "Мини-язык формата. Подходит ответ «format(obj, spec) / f'{obj:spec}'».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m296"
  },
  {
    "topic": "ООП",
    "q": "Зачем нужен __slots__?",
    "options": [
      "фиксирует атрибуты, экономит память (нет __dict__)",
      "ускоряет import",
      "включает GIL",
      "нужен для async"
    ],
    "answer": 0,
    "explain": "Экземпляры без произвольных атрибутов. Подходит ответ «фиксирует атрибуты, экономит память (нет __dict__)».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m297"
  },
  {
    "topic": "bytes",
    "q": "Что такое b'hi'.decode() по умолчанию?",
    "options": [
      "utf-8 даёт 'hi'",
      "ascii only fail",
      "latin-1 always error",
      "возвращает bytes"
    ],
    "answer": 0,
    "explain": "Decode() без encoding, а затем utf-8. Подходит ответ «utf-8 даёт 'hi'».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m298"
  },
  {
    "topic": "multiprocessing",
    "q": "Что даёт Manager().dict()?",
    "options": [
      "прокси-словарь между процессами",
      "обычный dict shared memory transparently for any object graph без цены",
      "list",
      "GIL off"
    ],
    "answer": 0,
    "explain": "Синхронизируемый прокси. Подходит ответ «прокси-словарь между процессами».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m299"
  },
  {
    "topic": "YAGNI",
    "q": "Что означает YAGNI?",
    "options": [
      "You Aren't Gonna Need It — не пиши «на будущее»",
      "Your API Never Gets Installed",
      "Yield All Generated Items",
      "Yet Another Generic Interface"
    ],
    "answer": 0,
    "explain": "Не добавляй функциональность, пока она реально не нужна. Подходит ответ «You Aren't Gonna Need It — не пиши «на будущее»».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m300"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6, 10]",
      "[1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Подходит ответ «[1, 3, 6, 10]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 5))))",
    "group": "Collections и itertools",
    "id": "m301"
  },
  {
    "topic": "enum",
    "q": "Что вернёт StrEnum (3.11)?",
    "options": [
      "Enum + str",
      "только int",
      "Flag",
      "TypedDict"
    ],
    "answer": 0,
    "explain": "Строковые перечисления. Подходит ответ «Enum + str». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m302"
  },
  {
    "topic": "замыкания",
    "q": "Что напечатают funcs[0]() при классической ошибке позднего связывания?",
    "options": [
      "2",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Без значения по умолчанию все замыкания видят финальный i. Подходит ответ «2». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n# funcs[0]()",
    "group": "Декораторы и замыкания",
    "id": "m303"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "0 1",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Подходит ответ «0 1». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "g = (x for x in [0, 1])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m304"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `GROUP BY`?",
    "options": [
      "агрегация по ключу",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "GROUP BY в SQL. Подходит ответ «агрегация по ключу». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m305"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт to_thread (3.9)?",
    "options": [
      "await блокирующую функцию в thread",
      "process pool always",
      "sync sleep",
      "GIL remove"
    ],
    "answer": 0,
    "explain": "Простой offload. Подходит ответ «await блокирующую функцию в thread». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m306"
  },
  {
    "topic": "context",
    "q": "Как удобнее открыть 2 вложенных with без ExitStack?",
    "options": [
      "можно вложить / или один with a, b",
      "нельзя никогда",
      "только async",
      "нужен GIL"
    ],
    "answer": 0,
    "explain": "With open() as a, open() as b: или ExitStack для динамики. Подходит ответ «можно вложить / или один with a, b».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m307"
  },
  {
    "topic": "logging",
    "q": "Что такое Structured logging?",
    "options": [
      "поля/JSON, не только текст",
      "только print",
      "pickle logs",
      "HTML"
    ],
    "answer": 0,
    "explain": "Наблюдаемость. Подходит ответ «поля/JSON, не только текст». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m308"
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое __get__/__set__/__delete__?",
    "options": [
      "протокол дескрипторов (property так устроен)",
      "только metaclass",
      "GIL hooks",
      "async only"
    ],
    "answer": 0,
    "explain": "Data vs non-data descriptors. Подходит ответ «протокол дескрипторов (property так устроен)». Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m309"
  },
  {
    "topic": "MRO",
    "q": "Что такое diamond inheritance решает?",
    "options": [
      "C3 linearization",
      "случайный порядок",
      "только первый parent",
      "запрет syntax"
    ],
    "answer": 0,
    "explain": "Предсказуемый MRO. Подходит ответ «C3 linearization». MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m310"
  },
  {
    "topic": "csv",
    "q": "Что такое csv.DictReader читает?",
    "options": [
      "строки как dict по заголовку",
      "JSON",
      "pickle",
      "YAML"
    ],
    "answer": 0,
    "explain": "Модуль csv. Подходит ответ «строки как dict по заголовку».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m311"
  },
  {
    "topic": "threading",
    "q": "Что такое threading хорош для?",
    "options": [
      "I/O-bound задач",
      "чистого CPU всегда",
      "замены asyncio",
      "GPU"
    ],
    "answer": 0,
    "explain": "Пока ждёт I/O, GIL отпускается. Подходит ответ «I/O-bound задач».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m312"
  },
  {
    "topic": "patterns",
    "q": "Что такое Chain of Responsibility в middleware веб-фреймворка?",
    "options": [
      "цепочка обработчиков запроса",
      "linked list в БД",
      "GIL chain",
      "MRO"
    ],
    "answer": 0,
    "explain": "Каждый handler решает — передать дальше или ответить. Подходит ответ «цепочка обработчиков запроса».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m313"
  },
  {
    "topic": "functools",
    "q": "Чем помогает total_ordering?",
    "options": [
      "достроить сравнения из немногих методов",
      "сортировать быстрее C",
      "GIL",
      "hash"
    ],
    "answer": 0,
    "explain": "Класс-декоратор. Подходит ответ «достроить сравнения из немногих методов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m314"
  },
  {
    "topic": "typing",
    "q": "Что такое Unpack/TypeVarTuple связаны с?",
    "options": [
      "вариативными generics",
      "GIL",
      "async",
      "pathlib"
    ],
    "answer": 0,
    "explain": "PEP 646. Подходит ответ «вариативными generics». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m315"
  },
  {
    "topic": "замыкания",
    "q": "Как зафиксировать i в lambda в цикле?",
    "options": [
      "lambda i=i: i",
      "lambda: i.copy()",
      "global i",
      "nonlocal i в цикле"
    ],
    "answer": 0,
    "explain": "Default arg связывается в момент определения. Подходит ответ «lambda i=i: i».",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m316"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "[0, 1]",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Подходит ответ «[0, 1]». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(2)))",
    "group": "Генераторы и итераторы",
    "id": "m317"
  },
  {
    "topic": "SQL",
    "q": "Уровень изоляции READ COMMITTED — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Подходит ответ «разные аномалии чтения/записи; знай свою СУБД».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m318"
  },
  {
    "topic": "asyncio",
    "q": "В чём риск create_task ×3 без await/ссылок?",
    "options": [
      "задачи могут быть собраны GC / потеря исключений",
      "выполнятся надёжнее",
      "синхронно",
      "запрещены"
    ],
    "answer": 0,
    "explain": "Держи ссылки или await TaskGroup. Подходит ответ «задачи могут быть собраны GC / потеря исключений».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m319"
  },
  {
    "topic": "context",
    "q": "Что такое ContextDecorator?",
    "options": [
      "CM + decorator сразу",
      "только async",
      "lock",
      "exitstack"
    ],
    "answer": 0,
    "explain": "Двойной интерфейс. Подходит ответ «CM + decorator сразу».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m320"
  },
  {
    "topic": "testing",
    "q": "Что проверяет pytest.raises(ValueError)?",
    "options": [
      "что код бросает ожидаемое исключение",
      "что исключения нет",
      "типы mypy",
      "coverage"
    ],
    "answer": 0,
    "explain": "With pytest.raises — контекстный менеджер. Подходит ответ «что код бросает ожидаемое исключение». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m321"
  },
  {
    "topic": "магические",
    "q": "Выбери верный вариант: Если __eq__ определён, __hash__?",
    "options": [
      "часто ставят None для mutable",
      "обязателен всегда",
      "удаляется интерпретатором насильно",
      "наследуется от object всегда ок"
    ],
    "answer": 0,
    "explain": "Mutable с eq не должны быть hashable. Подходит ответ «часто ставят None для mutable».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m322"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "B",
      "A",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Метод ищется в классе экземпляра: B.hello перекрывает A.hello. В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A'\nclass B(A):\n    def hello(self):\n        return 'B'\nprint(B().hello())",
    "group": "ООП продвинутый",
    "id": "m323"
  },
  {
    "topic": "memory",
    "q": "Что вернёт sys.getsizeof([1,2]) учитывает?",
    "options": [
      "overhead контейнера, не глубоко элементы всегда",
      "всю глубокую структуру",
      "только int",
      "disk"
    ],
    "answer": 0,
    "explain": "Не deep size. Подходит ответ «overhead контейнера, не глубоко элементы всегда». Память в CPython устроена через подсчёт ссылок, циклический GC, buffer protocol и иногда __slots__.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m324"
  },
  {
    "topic": "threading",
    "q": "Для чего используется Event?",
    "options": [
      "сигнализации между потоками",
      "CPU parallel magic",
      "process share objects",
      "async await"
    ],
    "answer": 0,
    "explain": "Threading.Event. Подходит ответ «сигнализации между потоками».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m325"
  },
  {
    "topic": "patterns",
    "q": "Что такое Dependency Injection вручную в Python?",
    "options": [
      "передать зависимость в __init__",
      "import внутри метода всегда",
      "global config",
      "eval"
    ],
    "answer": 0,
    "explain": "Не обязательно нужен DI-фреймворк. Подходит ответ «передать зависимость в __init__».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m326"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "20",
      "12",
      "10",
      "0"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Подходит ответ «20». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [10, 2]))",
    "group": "Collections и itertools",
    "id": "m327"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case _ if guard в Python 3.10+?",
    "options": [
      "guard условие",
      "wildcard запрещён с if",
      "bitwise",
      "async"
    ],
    "answer": 0,
    "explain": "Паттерн + условие. Подходит ответ «guard условие».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m328"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[4, 4, 4, 4, 4]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Поздний захват i — все лямбды видят финальное значение. Подходит ответ «[4, 4, 4, 4, 4]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(5)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m329"
  },
  {
    "topic": "генераторы",
    "q": "Что такое Генератор хранит?",
    "options": [
      "состояние между next",
      "весь результат в RAM",
      "только list",
      "копию args"
    ],
    "answer": 0,
    "explain": "Ленивость и мало памяти. Подходит ответ «состояние между next». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m330"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 429 — кратко?",
    "options": [
      "лимит запросов",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 429: лимит запросов. Подходит ответ «лимит запросов». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m331"
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m332"
  },
  {
    "topic": "exceptions",
    "q": "Что такое IndexError наследует?",
    "options": [
      "LookupError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От IndexError до LookupError через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m333"
  },
  {
    "topic": "тесты",
    "q": "Что такое coverage.py измеряет?",
    "options": [
      "покрытие строк/веток",
      "скорость",
      "типы",
      "GIL"
    ],
    "answer": 0,
    "explain": "Качество прогона. Подходит ответ «покрытие строк/веток». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m334"
  },
  {
    "topic": "магические",
    "q": "Что напечатает print(obj)?",
    "options": [
      "hi",
      "Obj()",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "__str__ для print. Подходит ответ «hi». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "class Obj:\n    def __str__(self):\n        return 'hi'\nprint(Obj())",
    "group": "Контекст и магические методы",
    "id": "m335"
  },
  {
    "topic": "ABC",
    "q": "Что такое abstractclassmethod существует?",
    "options": [
      "исторически да, сейчас комбинации decorator",
      "никогда не было",
      "только Py2",
      "запрещено 3"
    ],
    "answer": 0,
    "explain": "Смотри актуальные рецепты abc+classmethod. Подходит ответ «исторически да, сейчас комбинации decorator».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m336"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "var/log/app.log",
      "var/log/app.log/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Подходит ответ «var/log/app.log». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'app.log'))",
    "group": "Stdlib и производительность",
    "id": "m337"
  },
  {
    "topic": "threading",
    "q": "Что верно про Lock.acquire в том же потоке повторно без RLock?",
    "options": [
      "дедлок",
      "ok",
      "ошибка импорта",
      "auto-release"
    ],
    "answer": 0,
    "explain": "Обычный Lock не реентерабелен. Подходит ответ «дедлок».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m338"
  },
  {
    "topic": "KISS",
    "q": "Что означает KISS?",
    "options": [
      "Keep It Simple, Stupid — проще решение лучше",
      "Keep It Super Short",
      "Kill Invalid Syntax Silently",
      "Key In Secure Storage"
    ],
    "answer": 0,
    "explain": "Выбирай самое простое решение, которое решает задачу. Подходит ответ «Keep It Simple, Stupid — проще решение лучше».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m339"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "11",
      "10",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Partial фиксирует первый аргумент, а затем f(10, 1). Подходит ответ «11». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 10)(1))",
    "group": "Collections и itertools",
    "id": "m340"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "empty",
      "ошибка",
      "None",
      "[]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Подходит ответ «empty». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = []\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m341"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3, 4]",
      "[4, 4, 4, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default i=i фиксирует значение на итерации. Подходит ответ «[0, 1, 2, 3, 4]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(5)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m342"
  },
  {
    "topic": "генераторы",
    "q": "Что делает next(gen) на исчерпанном генераторе?",
    "options": [
      "StopIteration",
      "None",
      "False",
      "перезапуск"
    ],
    "answer": 0,
    "explain": "Итератор закончился. Подходит ответ «StopIteration». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m343"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 200 — кратко?",
    "options": [
      "успех с телом",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 200: успех с телом. Подходит ответ «успех с телом». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m344"
  },
  {
    "topic": "asyncio",
    "q": "Что такое as_completed итерирует?",
    "options": [
      "по мере готовности",
      "в порядке запуска строго",
      "только errors",
      "sync"
    ],
    "answer": 0,
    "explain": "Удобный fan-in. Подходит ответ «по мере готовности». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m345"
  },
  {
    "topic": "context",
    "q": "Что реализует Контекстный менеджер?",
    "options": [
      "__enter__/__exit__",
      "open/close только",
      "__init__/__del__",
      "with/as keywords внутри класса"
    ],
    "answer": 0,
    "explain": "Протокол with. Подходит ответ «__enter__/__exit__».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m346"
  },
  {
    "topic": "тесты",
    "q": "Что означает xfail?",
    "options": [
      "ожидаемый провал",
      "skip",
      "pass force",
      "error CI"
    ],
    "answer": 0,
    "explain": "Известный баг. Подходит ответ «ожидаемый провал». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m347"
  },
  {
    "topic": "classmethod",
    "q": "Выбери верный вариант: classmethod получает первым аргументом?",
    "options": [
      "класс (cls), не экземпляр",
      "self",
      "модуль",
      "metaclass всегда"
    ],
    "answer": 0,
    "explain": "Удобно для альтернативных конструкторов. Подходит ответ «класс (cls), не экземпляр».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m348"
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "A.x",
      "B.x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Super().hello() вызывает реализацию родителя. Подходит ответ «A.x». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A.x'\nclass B(A):\n    def hello(self):\n        return super().hello()\nprint(B().hello())",
    "group": "ООП продвинутый",
    "id": "m349"
  },
  {
    "topic": "copy",
    "q": "Выбери верный вариант: Для объекта с циклическими ссылками deepcopy?",
    "options": [
      "справляется через memo",
      "всегда падает",
      "игнорирует циклы молча теряя",
      "запрещён"
    ],
    "answer": 0,
    "explain": "Memo dict. Подходит ответ «справляется через memo».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m350"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: Продление CPU в C-extension без отпуска GIL?",
    "options": [
      "блокирует другие Python-потоки",
      "ускоряет их",
      "отключает process",
      "влияет только async"
    ],
    "answer": 0,
    "explain": "Держи ALLOW_THREADS для тяжёлого C. Подходит ответ «блокирует другие Python-потоки». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m351"
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Facade?",
    "options": [
      "простой интерфейс к сложной подсистеме",
      "singleton БД",
      "ORM миграция",
      "async loop"
    ],
    "answer": 0,
    "explain": "Скрывает сложность нескольких модулей. Подходит ответ «простой интерфейс к сложной подсистеме».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m352"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(0, 2), (1, 2), (0, 1)]",
      "[0, 1]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Подходит ответ «[(0, 2), (1, 2), (0, 1)]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([0, 0, 1, 1, 0])])",
    "group": "Collections и itertools",
    "id": "m353"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "5",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает n и использует в выражении. Подходит ответ «5». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "if (n := len('hello')) > 3:\n    print(n)",
    "group": "Typing и dataclasses",
    "id": "m354"
  },
  {
    "topic": "декораторы",
    "q": "Что такое Декоратор класса получает?",
    "options": [
      "класс как аргумент",
      "только экземпляр",
      "модуль",
      "MRO list"
    ],
    "answer": 0,
    "explain": "@decorator над class. Подходит ответ «класс как аргумент». Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m355"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "1",
      "0",
      "None",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Первый next() доходит до первого yield и отдаёт 1. Подходит ответ «1». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "def g():\n    x = yield 1\n    yield x\ngen = g()\nprint(next(gen))",
    "group": "Генераторы и итераторы",
    "id": "m356"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 503 — кратко?",
    "options": [
      "сервис недоступен",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 503: сервис недоступен. Подходит ответ «сервис недоступен». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m357"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: gather n=3 корутин без return_exceptions при одной ошибке?",
    "options": [
      "пробросит исключение (остальные могут продолжать до отмены политики)",
      "вернёт частичный list тихо",
      "убивает процесс",
      "игнор"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка поднимается из gather. Подходит ответ «пробросит исключение (остальные могут продолжать до отмены политики)».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m358"
  },
  {
    "topic": "исключения",
    "q": "Что такое contextlib.suppress(Error)?",
    "options": [
      "игнорирует указанные исключения",
      "логирует",
      "превращает в warning",
      "fatal"
    ],
    "answer": 0,
    "explain": "Молчаливый пропуск. Подходит ответ «игнорирует указанные исключения». Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m359"
  },
  {
    "topic": "mock",
    "q": "Что такое unittest.mock.patch подменяет?",
    "options": [
      "объект в пространстве имён",
      "исходник на диске",
      "GIL",
      "байткод навсегда"
    ],
    "answer": 0,
    "explain": "Временная подмена. Подходит ответ «объект в пространстве имён».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m360"
  },
  {
    "topic": "property",
    "q": "Зачем нужен @property.setter?",
    "options": [
      "разрешить присваивание атрибуту-property",
      "сделать classmethod",
      "удалить атрибут",
      "ускорить"
    ],
    "answer": 0,
    "explain": "Иначе AttributeError: can't set attribute. Подходит ответ «разрешить присваивание атрибуту-property».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m361"
  },
  {
    "topic": "ABC",
    "q": "Что такое @abstractmethod гарантирует?",
    "options": [
      "нельзя инстанцировать подкласс без реализации",
      "runtime скорость",
      "GIL off",
      "pickle"
    ],
    "answer": 0,
    "explain": "Пока есть абстрактные методы — typeError. Подходит ответ «нельзя инстанцировать подкласс без реализации».",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m362"
  },
  {
    "topic": "copy",
    "q": "Что такое shallow copy копирует?",
    "options": [
      "контейнер, но не вложенные объекты глубоко",
      "весь граф",
      "только int",
      "ничего"
    ],
    "answer": 0,
    "explain": "Ссылки внутри те же. Подходит ответ «контейнер, но не вложенные объекты глубоко».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m363"
  },
  {
    "topic": "multiprocessing",
    "q": "Выбери верный вариант: multiprocessing обходит GIL через?",
    "options": [
      "отдельные процессы",
      "больше потоков",
      "снятие GIL флагом",
      "JIT"
    ],
    "answer": 0,
    "explain": "Отдельные интерпретаторы. Подходит ответ «отдельные процессы».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m364"
  },
  {
    "topic": "DRY",
    "q": "Что означает принцип DRY?",
    "options": [
      "Don't Repeat Yourself — не дублировать знание/логику",
      "Do Repeat Yourself",
      "Delete Rarely Your code",
      "Debug Runs Yearly"
    ],
    "answer": 0,
    "explain": "DRY про одну точку правды для бизнес-правил и логики; копипаста расходится со временем. Подходит ответ «Don't Repeat Yourself — не дублировать знание/логику».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m365"
  },
  {
    "topic": "itertools",
    "q": "Что такое zip_longest заполняет?",
    "options": [
      "fillvalue для коротких",
      "ошибкой",
      "обрезает как zip",
      "None запрещён"
    ],
    "answer": 0,
    "explain": "Itertools.zip_longest. Подходит ответ «fillvalue для коротких». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m366"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "10",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Подходит ответ «10». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "if (x := 10):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m367"
  },
  {
    "topic": "замыкания",
    "q": "Что выведут все вызовы?",
    "options": [
      "0 1 2",
      "2 2 2",
      "ошибка",
      "1 1 1"
    ],
    "answer": 0,
    "explain": "Default фиксирует i. Подходит ответ «0 1 2». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda i=i: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m368"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "1 2",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два next() забирают первые элементы. Подходит ответ «1 2». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "g = (x for x in [1, 2])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m369"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт keep-alive?",
    "options": [
      "переиспользование TCP",
      "новый TCP always",
      "UDP",
      "QUIC only"
    ],
    "answer": 0,
    "explain": "Меньше handshake. Подходит ответ «переиспользование TCP». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m370"
  },
  {
    "topic": "asyncio",
    "q": "В чём риск create_task ×4 без await/ссылок?",
    "options": [
      "задачи могут быть собраны GC / потеря исключений",
      "выполнятся надёжнее",
      "синхронно",
      "запрещены"
    ],
    "answer": 0,
    "explain": "Держи ссылки или await TaskGroup. Подходит ответ «задачи могут быть собраны GC / потеря исключений».",
    "kind": "single",
    "group": "Asyncio",
    "id": "m371"
  },
  {
    "topic": "exceptions",
    "q": "Что вернёт add_note (3.11)?",
    "options": [
      "добавляет текст к исключению",
      "меняет тип",
      "suppress",
      "logging"
    ],
    "answer": 0,
    "explain": "Отладка. Подходит ответ «добавляет текст к исключению».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m372"
  },
  {
    "topic": "тесты",
    "q": "Выбери верный вариант: pytest находит тесты по?",
    "options": [
      "имени test_* / *_test",
      "любому .py",
      "main",
      "doctest only"
    ],
    "answer": 0,
    "explain": "Конвенции discovery. Подходит ответ «имени test_* / *_test». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m373"
  },
  {
    "topic": "property",
    "q": "Что такое doc у property?",
    "options": [
      "можно задать доку геттера",
      "запрещён",
      "только class docstring",
      "pep8 ban"
    ],
    "answer": 0,
    "explain": "Help видит. Подходит ответ «можно задать доку геттера».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m374"
  },
  {
    "topic": "MRO",
    "q": "Что показывает Class.__mro__?",
    "options": [
      "цепочку базовых классов",
      "только родителей 1 уровня",
      "атрибуты",
      "модули"
    ],
    "answer": 0,
    "explain": "Линеаризация наследования. Подходит ответ «цепочку базовых классов». MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m375"
  },
  {
    "topic": "JSON",
    "q": "Что вернёт json.loads('[1, 2]') вернёт?",
    "options": [
      "[1, 2]",
      "'[1, 2]'",
      "tuple",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Loads парсит JSON-строку в Python-объект. Подходит ответ «[1, 2]».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m376"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое initializer у Pool?",
    "options": [
      "setup в worker process",
      "в parent only",
      "async",
      "import ban"
    ],
    "answer": 0,
    "explain": "Состояние воркера. Подходит ответ «setup в worker process».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m377"
  },
  {
    "topic": "принципы",
    "q": "Выбери верный вариант: Copy-paste programming ведёт к?",
    "options": [
      "расхождению копий и багам при правках",
      "лучшему DRY",
      "ускорению",
      "типизации"
    ],
    "answer": 0,
    "explain": "Классическое нарушение DRY. Подходит ответ «расхождению копий и багам при правках».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m378"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2, 3]",
      "[[1, 2], [0, 1, 2, 3]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые. Подходит ответ «[1, 2, 0, 1, 2, 3]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(4)))))",
    "group": "Collections и itertools",
    "id": "m379"
  },
  {
    "topic": "typing",
    "q": "Что означает NoReturn?",
    "options": [
      "функция не возвращает нормально",
      "return None",
      "Any",
      "Never only 2.7"
    ],
    "answer": 0,
    "explain": "Всегда бросает/exit. Подходит ответ «функция не возвращает нормально». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m380"
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default i=i фиксирует значение на итерации. Подходит ответ «[0, 1, 2]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(3)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m381"
  },
  {
    "topic": "генераторы",
    "q": "Выбери верный вариант: yield выражение может принимать значение через?",
    "options": [
      "send",
      "next only",
      "throw only",
      "close only"
    ],
    "answer": 0,
    "explain": "Gen.send(x). Подходит ответ «send». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m382"
  },
  {
    "topic": "HTTP",
    "q": "Что делает PUT по семантике HTTP?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "PUT безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Подходит ответ «идемпотентный (в идеале)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m383"
  },
  {
    "topic": "asyncio",
    "q": "Что такое StreamReader/Writer?",
    "options": [
      "высокоуровневые потоки TCP",
      "файлы pathlib",
      "HTTP router",
      "subprocess only"
    ],
    "answer": 0,
    "explain": "Asyncio streams. Подходит ответ «высокоуровневые потоки TCP». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m384"
  },
  {
    "topic": "exceptions",
    "q": "Что такое KeyError наследует?",
    "options": [
      "LookupError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От KeyError до LookupError через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m385"
  },
  {
    "topic": "тесты",
    "q": "Что такое pytest hook pytest_configure?",
    "options": [
      "плагинная настройка",
      "fixture data",
      "assert rewrite off auto",
      "collect only ban"
    ],
    "answer": 0,
    "explain": "Расширение pytest. Подходит ответ «плагинная настройка». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m386"
  },
  {
    "topic": "property",
    "q": "Что такое deleter у property?",
    "options": [
      "обрабатывает del obj.x",
      "удаляет class",
      "GC freeze",
      "slots"
    ],
    "answer": 0,
    "explain": "@x.deleter. Подходит ответ «обрабатывает del obj.x».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m387"
  },
  {
    "topic": "ООП",
    "q": "Для чего используется super()?",
    "options": [
      "вызова метода родителя по MRO",
      "создания потока",
      "импорта",
      "GC"
    ],
    "answer": 0,
    "explain": "Кооперативное наследование. Подходит ответ «вызова метода родителя по MRO». В ООП Python методы получают self явно, а поиск атрибутов идёт по MRO.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m388"
  },
  {
    "topic": "performance",
    "q": "В чём разница: set membership vs list?",
    "options": [
      "set средний O(1)",
      "list O(1)",
      "одинаково",
      "tuple хуже set всегда по константе только"
    ],
    "answer": 0,
    "explain": "Хеш-таблица. Подходит ответ «set средний O(1)». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m389"
  },
  {
    "topic": "threading",
    "q": "Выбери верный вариант: daemon thread при выходе main?",
    "options": [
      "может оборваться",
      "всегда join",
      "становится process",
      "freeze"
    ],
    "answer": 0,
    "explain": "Не для критичных задач без join. Подходит ответ «может оборваться».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m390"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Паттерн Builder подходит когда?",
    "options": [
      "много опциональных параметров объекта",
      "один int",
      "только dataclass frozen",
      "только dict"
    ],
    "answer": 0,
    "explain": "Пошаговая сборка сложного объекта. Подходит ответ «много опциональных параметров объекта».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m391"
  },
  {
    "topic": "bisect",
    "q": "Что такое bisect_left?",
    "options": [
      "точка вставки слева от равных",
      "удаление",
      "hash",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Нижняя граница. Подходит ответ «точка вставки слева от равных».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m392"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "2"
    ],
    "answer": 0,
    "explain": "Match/case сопоставляет значение. Подходит ответ «other». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = 2\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m393"
  },
  {
    "topic": "coroutines",
    "q": "Выбери верный вариант: await gen — нельзя; await coroutine — да. Генератор awaitable?",
    "options": [
      "нет (пока не @types.coroutine нюансы)",
      "да всегда",
      "только list",
      "только async for"
    ],
    "answer": 0,
    "explain": "Разные объекты. Подходит ответ «нет (пока не @types.coroutine нюансы)».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m394"
  },
  {
    "topic": "HTTP",
    "q": "Что такое status 429?",
    "options": [
      "too many requests",
      "not found",
      "ok",
      "redirect"
    ],
    "answer": 0,
    "explain": "Rate limit. Подходит ответ «too many requests». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m395"
  },
  {
    "topic": "asyncio",
    "q": "Что будет при необработанном исключении в Task?",
    "options": [
      "логируется при GC task (и в 3.11+ лучше видно)",
      "тихо глотается навсегда",
      "роняет процесс всегда",
      "чинит само"
    ],
    "answer": 0,
    "explain": "Храни ссылку / await / callbacks. Подходит ответ «логируется при GC task (и в 3.11+ лучше видно)». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m396"
  },
  {
    "topic": "exceptions",
    "q": "Что вернёт Exception.__notes__ (3.11)?",
    "options": [
      "доп. заметки к исключению",
      "stack only",
      "warnings",
      "logs"
    ],
    "answer": 0,
    "explain": "Add_note. Подходит ответ «доп. заметки к исключению».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m397"
  },
  {
    "topic": "mock",
    "q": "В чём разница: MagicMock vs Mock?",
    "options": [
      "MagicMock имеет магические методы по умолчанию",
      "Mock быстрее C",
      "одно и то же строго",
      "Magic только async"
    ],
    "answer": 0,
    "explain": "Удобство. Подходит ответ «MagicMock имеет магические методы по умолчанию».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m398"
  },
  {
    "topic": "магические",
    "q": "Что такое __matmul__?",
    "options": [
      "оператор @",
      "decorator",
      "matrix only NumPy language ban",
      "async"
    ],
    "answer": 0,
    "explain": "PEP 465. Подходит ответ «оператор @».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m399"
  },
  {
    "topic": "MRO",
    "q": "Выбери верный вариант: super() без аргументов в Py3?",
    "options": [
      "берёт класс/self из ячейки",
      "только object",
      "запрещён",
      "первый base hardcode"
    ],
    "answer": 0,
    "explain": "Zero-arg super. Подходит ответ «берёт класс/self из ячейки». MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m400"
  },
  {
    "topic": "secrets",
    "q": "Что такое SystemRandom?",
    "options": [
      "OS RNG интерфейс как random.Random",
      "MT19937",
      "uuid",
      "hash"
    ],
    "answer": 0,
    "explain": "Криптостойкий генератор. Подходит ответ «OS RNG интерфейс как random.Random».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m401"
  },
  {
    "topic": "GIL",
    "q": "Выбери верный вариант: Время переключения GIL roughly связано с?",
    "options": [
      "check interval / eval breaker",
      "только OS quantum",
      "GC only",
      "pip"
    ],
    "answer": 0,
    "explain": "Sys.setswitchinterval. Подходит ответ «check interval / eval breaker». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m402"
  },
  {
    "topic": "DRY",
    "q": "Когда дублирование допустимо по здравому смыслу?",
    "options": [
      "когда общий абстракция дороже двух копий",
      "никогда",
      "всегда в проде",
      "только в тестах запрещено"
    ],
    "answer": 0,
    "explain": "Принцип — ориентир; иногда две похожие вещи лучше не склеивать насильно. Подходит ответ «когда общий абстракция дороже двух копий».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m403"
  },
  {
    "topic": "itertools",
    "q": "Что такое count(10, 2) начнёт?",
    "options": [
      "10,12,14…",
      "0,2,10",
      "10,11",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Бесконечный счётчик. Подходит ответ «10,12,14…». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m404"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое field(repr=False) скрывает?",
    "options": [
      "поле из __repr__",
      "из __init__",
      "из eq",
      "из hash always"
    ],
    "answer": 0,
    "explain": "Настройка field. Подходит ответ «поле из __repr__».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m405"
  },
  {
    "topic": "итераторы",
    "q": "Верно ли, что У list итератор отдельный объект?",
    "options": [
      "да",
      "нет, list is iterator",
      "только для tuple",
      "только dict"
    ],
    "answer": 0,
    "explain": "Iter(list) создаёт list_iterator.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m406"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `OFFSET`?",
    "options": [
      "пропустить N строк",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "OFFSET в SQL. Подходит ответ «пропустить N строк». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m407"
  },
  {
    "topic": "asyncio",
    "q": "В чём разница: async with vs обычный with для lock?",
    "options": [
      "нужен async CM с __aenter__/__aexit__",
      "можно смешивать свободно",
      "with быстрее",
      "запрещено"
    ],
    "answer": 0,
    "explain": "Asyncio.Lock — async context manager. Подходит ответ «нужен async CM с __aenter__/__aexit__». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m408"
  },
  {
    "topic": "exceptions",
    "q": "Что такое FileNotFoundError наследует?",
    "options": [
      "OSError",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От FileNotFoundError до OSError через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m409"
  },
  {
    "topic": "warnings",
    "q": "Что такое warnings.filterwarnings управляет?",
    "options": [
      "показом предупреждений",
      "exceptions",
      "logs level only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Модуль warnings. Подходит ответ «показом предупреждений».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m410"
  },
  {
    "topic": "магические",
    "q": "Что такое __set_name__ у дескриптора?",
    "options": [
      "узнаёт имя атрибута в owner",
      "вызывается при print",
      "GC",
      "import"
    ],
    "answer": 0,
    "explain": "PEP 487. Подходит ответ «узнаёт имя атрибута в owner».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m411"
  },
  {
    "topic": "JSON",
    "q": "Что такое parse_float=Decimal?",
    "options": [
      "точные десятичные из JSON",
      "быстрее float",
      "int only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Хук парсера. Подходит ответ «точные десятичные из JSON».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m412"
  },
  {
    "topic": "GIL",
    "q": "Что такое sys.setswitchinterval меняет?",
    "options": [
      "частоту попыток переключения потоков",
      "GC threshold only",
      "async tick",
      "import time"
    ],
    "answer": 0,
    "explain": "Бывший check interval. Подходит ответ «частоту попыток переключения потоков». GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m413"
  },
  {
    "topic": "KISS",
    "q": "Что ближе к KISS при обработке ошибки?",
    "options": [
      "явный try/except с понятным сообщением",
      "цепочка из 5 декораторов",
      "eval для обработки",
      "глобальный except: pass"
    ],
    "answer": 0,
    "explain": "Простая обработка ошибок читается и отлаживается легче. Подходит ответ «явный try/except с понятным сообщением».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m414"
  },
  {
    "topic": "itertools",
    "q": "Выбери верный вариант: islice(it, 2, 5) берёт?",
    "options": [
      "элементы с 2 по 4 (как range)",
      "первые 5",
      "с 2 до конца",
      "только 2 и 5"
    ],
    "answer": 0,
    "explain": "Ленивый срез итератора. Подходит ответ «элементы с 2 по 4 (как range)». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m415"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Self вместо «Type[Self]» хаков?",
    "options": [
      "удобнее для fluent API",
      "runtime check",
      "быстрее",
      "Enum"
    ],
    "answer": 0,
    "explain": "PEP 673. Подходит ответ «удобнее для fluent API». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m416"
  },
  {
    "topic": "генераторы",
    "q": "Что будет после исчерпания?",
    "options": [
      "StopIteration",
      "None",
      "IndexError",
      "False"
    ],
    "answer": 0,
    "explain": "Протокол итератора. Подходит ответ «StopIteration». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "g = (x for x in range(1))\nnext(g)\nnext(g)",
    "group": "Генераторы и итераторы",
    "id": "m417"
  },
  {
    "topic": "DI",
    "q": "Что такое composition root?",
    "options": [
      "место сборки графа зависимостей",
      "каждый модуль new сам",
      "global random",
      "import side effect only"
    ],
    "answer": 0,
    "explain": "Чистая архитектура. Подходит ответ «место сборки графа зависимостей».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m418"
  },
  {
    "topic": "asyncio",
    "q": "Выбери верный вариант: Queue в asyncio безопасна для?",
    "options": [
      "корутин одного loop",
      "произвольных OS threads без грязи",
      "процессов",
      "GIL bypass"
    ],
    "answer": 0,
    "explain": "Не путать с queue.Queue. Подходит ответ «корутин одного loop». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m419"
  },
  {
    "topic": "context",
    "q": "Что такое ExitStack нужен для?",
    "options": [
      "динамического набора контекстов",
      "одного with",
      "async only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Contextlib.ExitStack. Подходит ответ «динамического набора контекстов».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m420"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт pytest fixture с scope='module'?",
    "options": [
      "один раз на модуль тестов",
      "на каждый assert",
      "на весь CI",
      "только class"
    ],
    "answer": 0,
    "explain": "Экономия дорогой подготовки. Подходит ответ «один раз на модуль тестов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m421"
  },
  {
    "topic": "property",
    "q": "Во что превращает @property?",
    "options": [
      "атрибут-геттер",
      "статический метод",
      "классметод",
      "дескриптор записи только"
    ],
    "answer": 0,
    "explain": "Управляемый атрибут. Подходит ответ «атрибут-геттер».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m422"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.JSON'",
      "'B.JSON'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "Suffix — последний суффикс (для tar.gz это .gz). Подходит ответ «'.JSON'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('B.JSON').suffix)",
    "group": "Stdlib и производительность",
    "id": "m423"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое sharedctypes?",
    "options": [
      "общие ctypes-объекты",
      "любые py objects transparently",
      "asyncio Queue",
      "GIL share"
    ],
    "answer": 0,
    "explain": "Ограниченный shared state. Подходит ответ «общие ctypes-объекты».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m424"
  },
  {
    "topic": "DRY",
    "q": "Два модуля копируют одну и ту же валидацию email — что нарушено?",
    "options": [
      "DRY",
      "KISS",
      "GIL",
      "PEP 8"
    ],
    "answer": 0,
    "explain": "Одинаковая логика в двух местах — классическое нарушение DRY.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m425"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "топ-2 частых",
      "сортирует keys",
      "unique",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Удобная статистика. Подходит ответ «топ-2 частых».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m426"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "1",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Подходит ответ «1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "if (x := 1):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m427"
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт gen.send(x) до первого yield?",
    "options": [
      "нужно сначала next()/send(None)",
      "сразу x",
      "None",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Генератор должен дойти до yield. Подходит ответ «нужно сначала next()/send(None)». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m428"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `JOIN`?",
    "options": [
      "связь таблиц",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "JOIN в SQL. Подходит ответ «связь таблиц». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m429"
  },
  {
    "topic": "asyncio",
    "q": "Что такое await можно внутри?",
    "options": [
      "async def",
      "любой функции",
      "класса без async",
      "lambda"
    ],
    "answer": 0,
    "explain": "Только в корутинах. Подходит ответ «async def». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m430"
  },
  {
    "topic": "context",
    "q": "Во что превращает contextlib.contextmanager?",
    "options": [
      "генератор в CM",
      "класс в функцию",
      "async в sync",
      "list в with"
    ],
    "answer": 0,
    "explain": "Yield разделяет enter/exit. Подходит ответ «генератор в CM».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m431"
  },
  {
    "topic": "EAFP",
    "q": "Что означает EAFP?",
    "options": [
      "Easier to Ask Forgiveness than Permission",
      "Always Find Path",
      "Error After Function",
      "Python anti-pattern"
    ],
    "answer": 0,
    "explain": "Try/except вместо долгих проверок. Подходит ответ «Easier to Ask Forgiveness than Permission».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m432"
  },
  {
    "topic": "магические",
    "q": "Что такое __reversed__?",
    "options": [
      "кастом reversed()",
      "sort",
      "iter only",
      "len"
    ],
    "answer": 0,
    "explain": "Протокол. Подходит ответ «кастом reversed()».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m433"
  },
  {
    "topic": "строки",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Casefold сильнее lower для регистронезависимого сравнения (напр. Немецкое ß). Подходит ответ «True». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "print('X'.casefold() == 'x')",
    "group": "Stdlib и производительность",
    "id": "m434"
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое forkserver start method?",
    "options": [
      "промежуточный сервер для форков",
      "только Windows",
      "async",
      "GIL free"
    ],
    "answer": 0,
    "explain": "Альтернатива fork/spawn. Подходит ответ «промежуточный сервер для форков».",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m435"
  },
  {
    "topic": "принципы",
    "q": "Что такое God object?",
    "options": [
      "один класс знает и делает слишком много",
      "singleton модуль",
      "dataclass",
      "Protocol"
    ],
    "answer": 0,
    "explain": "Нарушает SRP и усложняет тесты. Подходит ответ «один класс знает и делает слишком много».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m436"
  },
  {
    "topic": "collections",
    "q": "Зачем нужен UserDict?",
    "options": [
      "удобное наследование под dict-like",
      "быстрее dict",
      "замена OrderedDict",
      "async map"
    ],
    "answer": 0,
    "explain": "Обёртка для кастомизации. Подходит ответ «удобное наследование под dict-like».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m437"
  },
  {
    "topic": "typing",
    "q": "Выбери все верные про аннотации типов?",
    "options": [
      "в рантайме CPython обычно не проверяет list[int]",
      "mypy/pyright — статические анализаторы",
      "from __future__ import annotations откладывает вычисление аннотаций",
      "typing всегда ускоряет исполнение байткода"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Аннотации — для людей и чекеров; сами по себе не ускоряют CPython. Верными здесь будут пункты: «в рантайме CPython обычно не проверяет list[int]»; «mypy/pyright — статические анализаторы»; «from __future__ import annotations откладывает вычисление аннотаций».",
    "kind": "multi",
    "tags": [
      "typing"
    ],
    "difficulty": "middle",
    "group": "Typing и dataclasses",
    "id": "m438"
  },
  {
    "topic": "генераторы",
    "q": "Выбери верный вариант: gen = (x for x in range(3)); list(gen); list(gen) второй раз?",
    "options": [
      "[]",
      "[0,1,2]",
      "ошибка",
      "[0,1,2] снова"
    ],
    "answer": 0,
    "explain": "Генератор одноразовый — после exhaust пусто. Подходит ответ «[]». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m439"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 504 — кратко?",
    "options": [
      "таймаут шлюза",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 504: таймаут шлюза. Подходит ответ «таймаут шлюза». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m440"
  },
  {
    "topic": "async",
    "q": "Выбери верный вариант: async with нужен для?",
    "options": [
      "async context managers",
      "обычного open только",
      "threads",
      "files sync"
    ],
    "answer": 0,
    "explain": "__aenter__/__aexit__. Подходит ответ «async context managers». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m441"
  },
  {
    "topic": "context",
    "q": "Что такое asynccontextmanager?",
    "options": [
      "async CM из генератора",
      "sync only",
      "thread",
      "process"
    ],
    "answer": 0,
    "explain": "Contextlib. Подходит ответ «async CM из генератора».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m442"
  },
  {
    "topic": "logging",
    "q": "Что такое handlers определяют?",
    "options": [
      "куда писать",
      "формат only",
      "уровень only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Stream/File/… Подходит ответ «куда писать». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m443"
  },
  {
    "topic": "магические",
    "q": "Что такое __index__ нужен для?",
    "options": [
      "преобразования к int индекса/среза",
      "float",
      "str",
      "bool only"
    ],
    "answer": 0,
    "explain": "Числовые протоколы. Подходит ответ «преобразования к int индекса/среза».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m444"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "\"hi\"",
      "hi",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Dumps, а затем строка JSON. Подходит ответ «\"hi\"». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.dumps('hi'))",
    "group": "Stdlib и производительность",
    "id": "m445"
  },
  {
    "topic": "принципы",
    "q": "Что такое «Easier to Ask Forgiveness than Permission» в Python?",
    "options": [
      "сначала попробовать, поймать исключение",
      "всегда if перед каждым шагом",
      "только для async",
      "запрет try/except"
    ],
    "answer": 0,
    "explain": "EAFP — идиоматичный стиль Python (try/except вместо длинных if). Подходит ответ «сначала попробовать, поймать исключение».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m446"
  },
  {
    "topic": "collections",
    "q": "Что такое deque хорош для?",
    "options": [
      "быстрых append/pop с обоих концов",
      "случайного доступа O(1) лучше list",
      "ключей dict",
      "матриц"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь. Подходит ответ «быстрых append/pop с обоих концов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m447"
  },
  {
    "topic": "enum",
    "q": "Что такое unique() декоратор?",
    "options": [
      "запрещает дубли значений",
      "сортирует",
      "авто int",
      "pickle"
    ],
    "answer": 0,
    "explain": "Enum.unique. Подходит ответ «запрещает дубли значений». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m448"
  },
  {
    "topic": "итераторы",
    "q": "Что такое Итератор должен иметь?",
    "options": [
      "__iter__ и __next__",
      "только len",
      "append",
      "__getitem__ обязательно"
    ],
    "answer": 0,
    "explain": "Протокол Iterator. Подходит ответ «__iter__ и __next__».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m449"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 5 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 5 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Подходит ответ «набор из N строк без стабильного порядка». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m450"
  },
  {
    "topic": "asyncio",
    "q": "Что вернёт get_running_loop()?",
    "options": [
      "loop текущей корутины",
      "создаёт новый",
      "None всегда в thread",
      "process loop"
    ],
    "answer": 0,
    "explain": "Предпочтительнее get_event_loop в async. Подходит ответ «loop текущей корутины». Речь про асинхронный event loop и корутины: конкурентность без обязательного создания потоков ОС.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m451"
  },
  {
    "topic": "exceptions",
    "q": "Что такое KeyboardInterrupt наследует?",
    "options": [
      "BaseException",
      "только object",
      "Warning",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "От KeyboardInterrupt до BaseException через промежуточные типы и далее …",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m452"
  },
  {
    "topic": "logging",
    "q": "Что возвращает Filter.filter?",
    "options": [
      "True чтобы пропустить запись",
      "строку",
      "level",
      "handler"
    ],
    "answer": 0,
    "explain": "Булев отбор. Подходит ответ «True чтобы пропустить запись». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m453"
  },
  {
    "topic": "property",
    "q": "Выбери верный вариант: obj.x = 1 при property без setter?",
    "options": [
      "AttributeError",
      "создаст в __dict__ всегда",
      "ok",
      "TypeError only"
    ],
    "answer": 0,
    "explain": "Read-only property. Подходит ответ «AttributeError».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m454"
  },
  {
    "topic": "secrets",
    "q": "Что такое token_urlsafe?",
    "options": [
      "криптостойкий токен для URL",
      "uuid1",
      "random.random",
      "hash lib name"
    ],
    "answer": 0,
    "explain": "Secrets module. Подходит ответ «криптостойкий токен для URL».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m455"
  },
  {
    "topic": "SoC",
    "q": "View смешивает SQL-запросы и HTML-шаблон в одной функции — что нарушено?",
    "options": [
      "Separation of Concerns",
      "только GIL",
      "только LSP",
      "Zen"
    ],
    "answer": 0,
    "explain": "Слои лучше разделять: данные, логика, представление. Подходит ответ «Separation of Concerns».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m456"
  },
  {
    "topic": "itertools",
    "q": "Что такое islice(it, 10)?",
    "options": [
      "первые 10 элементов лениво",
      "сортировка",
      "shuffle",
      "deep copy"
    ],
    "answer": 0,
    "explain": "Срез итератора. Подходит ответ «первые 10 элементов лениво». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m457"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое asdict не делает?",
    "options": [
      "глубокую магию произвольных объектов идеально всегда",
      "рекурсию dataclass/dict/list в простых случаях",
      "копию",
      "dict"
    ],
    "answer": 0,
    "explain": "Ограничения конвертации. Подходит ответ «глубокую магию произвольных объектов идеально всегда».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m458"
  },
  {
    "topic": "генераторы",
    "q": "Выбери все верные про генераторы?",
    "options": [
      "yield приостанавливает функцию и возвращает значение",
      "генератор одноразовый: исчерпан, а затем StopIteration",
      "return в генераторе задаёт value StopIteration",
      "list(gen) всегда безопасен для бесконечного генератора"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Бесконечный gen + list(), а затем зависание/OOM. Используй islice/явный break. Верными здесь будут пункты: «yield приостанавливает функцию и возвращает значение»; «генератор одноразовый: исчерпан, а затем StopIteration»; «return в генераторе задаёт value StopIteration».",
    "kind": "multi",
    "tags": [
      "generators"
    ],
    "difficulty": "middle",
    "group": "Генераторы и итераторы",
    "id": "m459"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 403 — кратко?",
    "options": [
      "запрещено",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 403: запрещено. Подходит ответ «запрещено». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m460"
  },
  {
    "topic": "исключения",
    "q": "Выбери верный вариант: except Exception as e: — e доступен?",
    "options": [
      "в блоке except (и очищается после в 3)",
      "глобально",
      "в finally всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Имя исключения. Подходит ответ «в блоке except (и очищается после в 3)». Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m461"
  },
  {
    "topic": "тесты",
    "q": "Что такое monkeypatch в pytest?",
    "options": [
      "временно патчит атрибуты/env",
      "меняет CPython",
      "удаляет тесты",
      "CI matrix"
    ],
    "answer": 0,
    "explain": "Изоляция сайд-эффектов. Подходит ответ «временно патчит атрибуты/env». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m462"
  },
  {
    "topic": "магические",
    "q": "Что возвращает __enter__?",
    "options": [
      "то, что попадёт в as",
      "всегда None",
      "self обязателен языком",
      "exception"
    ],
    "answer": 0,
    "explain": "With X as y. Подходит ответ «то, что попадёт в as».",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m463"
  },
  {
    "topic": "refcount",
    "q": "Что такое sys.getrefcount(obj)?",
    "options": [
      "считает ссылки (+временные)",
      "размер байт",
      "hash",
      "id"
    ],
    "answer": 0,
    "explain": "Включая временные при вызове. Подходит ответ «считает ссылки (+временные)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m464"
  },
  {
    "topic": "принципы",
    "q": "Когда LBYL уместнее EAFP?",
    "options": [
      "когда проверка дешевле и предсказуема",
      "никогда",
      "всегда",
      "только в C"
    ],
    "answer": 0,
    "explain": "Look Before You Leap — сначала проверить условие, если это яснее. Подходит ответ «когда проверка дешевле и предсказуема».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m465"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(permutations('ab', 2))?",
    "options": [
      "[('a', 'b'), ('b', 'a')]",
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['ba']"
    ],
    "answer": 0,
    "explain": "Перестановки. Подходит ответ «[('a', 'b'), ('b', 'a')]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m466"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое field(hash=False)?",
    "options": [
      "исключает из __hash__",
      "из init",
      "из repr always",
      "из annotations"
    ],
    "answer": 0,
    "explain": "Тонкая настройка. Подходит ответ «исключает из __hash__».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m467"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 4, 9]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Подходит ответ «[0, 1, 4, 9]». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(4)))",
    "group": "Генераторы и итераторы",
    "id": "m468"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 422 обычно значит?",
    "options": [
      "Unprocessable",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "422 — Unprocessable. Подходит ответ «Unprocessable». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m469"
  },
  {
    "topic": "context",
    "q": "Что такое chdir контекст (3.11)?",
    "options": [
      "временная смена cwd",
      "chmod",
      "chown",
      "mount"
    ],
    "answer": 0,
    "explain": "Contextlib.chdir. Подходит ответ «временная смена cwd».",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m470"
  },
  {
    "topic": "testing",
    "q": "Что означает scope='session' у фикстуры?",
    "options": [
      "создать один раз на всю сессию pytest",
      "на каждый тест",
      "никогда не кэшировать",
      "только module"
    ],
    "answer": 0,
    "explain": "Дорогой ресурс (БД) — один раз на прогон. Подходит ответ «создать один раз на всю сессию pytest». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m471"
  },
  {
    "topic": "tempfile",
    "q": "Что такое NamedTemporaryFile удаляется?",
    "options": [
      "часто при закрытии (зависит от delete)",
      "никогда",
      "только reboot",
      "вручную обязателен всегда"
    ],
    "answer": 0,
    "explain": "Параметр delete. Подходит ответ «часто при закрытии (зависит от delete)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m472"
  },
  {
    "topic": "Zen",
    "q": "Выбери верный вариант: «Readability counts» про что?",
    "options": [
      "код читают чаще, чем пишут",
      "короче = лучше",
      "комментарии не нужны",
      "только PEP 8"
    ],
    "answer": 0,
    "explain": "Читаемость — часть сопровождаемости. Подходит ответ «код читают чаще, чем пишут».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m473"
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatch регистрирует?",
    "options": [
      "перегрузки по типу",
      "по имени аргумента любому",
      "по kwargs only",
      "async"
    ],
    "answer": 0,
    "explain": "@f.register(int). Подходит ответ «перегрузки по типу».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m474"
  },
  {
    "topic": "typing",
    "q": "Что такое ParamSpec переносит?",
    "options": [
      "параметры callable в декораторах",
      "только TypeVar значений",
      "GIL",
      "Path"
    ],
    "answer": 0,
    "explain": "PEP 612. Подходит ответ «параметры callable в декораторах». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m475"
  },
  {
    "topic": "generators",
    "q": "Что такое yield from subgen?",
    "options": [
      "делегирует итерацию подгенератору",
      "копирует list",
      "создаёт thread",
      "закрывает файл"
    ],
    "answer": 0,
    "explain": "PEP 380. Подходит ответ «делегирует итерацию подгенератору».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m476"
  },
  {
    "topic": "SQL",
    "q": "Что вернёт UPSERT (ON CONFLICT)?",
    "options": [
      "вставить или обновить",
      "только delete",
      "truncate",
      "vacuum"
    ],
    "answer": 0,
    "explain": "Идемпотентные записи. Подходит ответ «вставить или обновить». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m477"
  },
  {
    "topic": "тесты",
    "q": "Что вернёт freezegun / time-machine?",
    "options": [
      "заморозка времени в тестах",
      "mock HTTP",
      "DB",
      "GIL"
    ],
    "answer": 0,
    "explain": "Детерминизм time. Подходит ответ «заморозка времени в тестах». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m478"
  },
  {
    "topic": "struct",
    "q": "Что такое bool в format?",
    "options": [
      "'?'",
      "'b' only",
      "'i'",
      "нет"
    ],
    "answer": 0,
    "explain": "Символ ? Подходит ответ «'?'».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m479"
  },
  {
    "topic": "принципы",
    "q": "Какой типичный симптом Circular dependency между модулями A и B — типичный?",
    "options": [
      "импорт на уровне модуля в обе стороны",
      "только typing",
      "только pytest",
      "venv"
    ],
    "answer": 0,
    "explain": "Лечат: вынести общее, lazy import, dependency inversion. Подходит ответ «импорт на уровне модуля в обе стороны».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m480"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "4",
      "0",
      "8",
      "?0"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «4». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 8))",
    "group": "Collections и itertools",
    "id": "m481"
  },
  {
    "topic": "typing",
    "q": "Что означает Final[x]?",
    "options": [
      "не должен переназначаться",
      "константа CPU",
      "frozen dataclass",
      "slots"
    ],
    "answer": 0,
    "explain": "Для чекеров. Подходит ответ «не должен переназначаться». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m482"
  },
  {
    "topic": "генераторы",
    "q": "Что такое yield from делегирует?",
    "options": [
      "итерацию/yield во вложенный итератор/генератор",
      "только return",
      "в другой процесс",
      "в C API"
    ],
    "answer": 0,
    "explain": "Также пробрасывает send/throw. Подходит ответ «итерацию/yield во вложенный итератор/генератор». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m483"
  },
  {
    "topic": "SQL",
    "q": "Что такое eager load?",
    "options": [
      "заранее подгружает связи",
      "откладывает forever",
      "кэш Redis",
      "drop"
    ],
    "answer": 0,
    "explain": "Joinedload/selectin. Подходит ответ «заранее подгружает связи». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m484"
  },
  {
    "topic": "testing",
    "q": "Зачем нужен conftest.py в pytest?",
    "options": [
      "общие фикстуры и хуки для каталога тестов",
      "запуск prod",
      "конфиг pip",
      "линтер"
    ],
    "answer": 0,
    "explain": "Фикстуры из conftest видны тестам в подпапках. Подходит ответ «общие фикстуры и хуки для каталога тестов».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m485"
  },
  {
    "topic": "JSON",
    "q": "Что такое sort_keys=True?",
    "options": [
      "сортирует ключи в dumps",
      "сортирует list",
      "меняет loads",
      "ускоряет"
    ],
    "answer": 0,
    "explain": "Стабильный вывод. Подходит ответ «сортирует ключи в dumps».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m486"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Registry плагинов вместо giant if/elif — пример?",
    "options": [
      "Open/Closed + Strategy",
      "нарушение LSP",
      "только GIL",
      "anti-pattern"
    ],
    "answer": 0,
    "explain": "Новый тип регистрируется без правки ядра. Подходит ответ «Open/Closed + Strategy».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m487"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=128) хранит?",
    "options": [
      "до 128 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Подходит ответ «до 128 результатов вызовов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m488"
  },
  {
    "topic": "args",
    "q": "Выбери верный вариант: def f(*args, **kwargs) порядок в сигнатуре?",
    "options": [
      "*args затем **kwargs",
      "**kwargs затем *args",
      "любой",
      "только kwargs"
    ],
    "answer": 0,
    "explain": "Синтаксическое правило. Подходит ответ «*args затем **kwargs».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m489"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "0\n1\n2",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Генератор по next. Подходит ответ «0\n1\n2». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "def g():\n    yield 0\n    yield 1\n    yield 2\nfor x in g():\n    print(x)",
    "group": "Генераторы и итераторы",
    "id": "m490"
  },
  {
    "topic": "ASGI",
    "q": "Что такое websocket в ASGI?",
    "options": [
      "отдельный тип соединения",
      "HTTP only hack",
      "WSGI feature",
      "CGI"
    ],
    "answer": 0,
    "explain": "Двусторонний канал. Подходит ответ «отдельный тип соединения».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m491"
  },
  {
    "topic": "тесты",
    "q": "Что такое mutation testing?",
    "options": [
      "ломает код и смотрит, падают ли тесты",
      "fuzz network",
      "load",
      "snapshot"
    ],
    "answer": 0,
    "explain": "Сила suite. Подходит ответ «ломает код и смотрит, падают ли тесты». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m492"
  },
  {
    "topic": "weakref",
    "q": "Зачем нужен weakref?",
    "options": [
      "ссылаться без удержания GC",
      "ускорить dict",
      "шифровать",
      "сериализовать"
    ],
    "answer": 0,
    "explain": "Слабые ссылки. Подходит ответ «ссылаться без удержания GC».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m493"
  },
  {
    "topic": "SoC",
    "q": "Что такое Separation of Concerns (разделение ответственности)?",
    "options": [
      "разные аспекты системы в разных модулях",
      "один класс на весь проект",
      "только микросервисы",
      "отказ от слоёв"
    ],
    "answer": 0,
    "explain": "UI, бизнес-логика и БД не должны быть перемешаны в одной куче. Подходит ответ «разные аспекты системы в разных модулях».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m494"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "24",
      "10",
      "1",
      "0"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Подходит ответ «24». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4]))",
    "group": "Collections и itertools",
    "id": "m495"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое order=True добавляет?",
    "options": [
      "сравнения < <= и т.д.",
      "hash всегда",
      "slots",
      "JSON"
    ],
    "answer": 0,
    "explain": "По полям по порядку. Подходит ответ «сравнения < <= и т.д.».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m496"
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 4]",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Generator expression материализуется через list. Подходит ответ «[0, 1, 4]». Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(3)))",
    "group": "Генераторы и итераторы",
    "id": "m497"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 401 обычно значит?",
    "options": [
      "Unauthorized",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "401 — Unauthorized. Подходит ответ «Unauthorized». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m498"
  },
  {
    "topic": "logging",
    "q": "Что такое getLogger(__name__)?",
    "options": [
      "иерархия логгеров по модулю",
      "root always",
      "print",
      "warnings"
    ],
    "answer": 0,
    "explain": "Best practice. Подходит ответ «иерархия логгеров по модулю». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m499"
  },
  {
    "topic": "копирование",
    "q": "Что такое copy.copy?",
    "options": [
      "shallow copy",
      "deep copy",
      "ссылка",
      "pickle"
    ],
    "answer": 0,
    "explain": "Поверхностная копия. Подходит ответ «shallow copy».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m500"
  },
  {
    "topic": "patterns",
    "q": "Что такое Repository pattern отделяет?",
    "options": [
      "доступ к данным от бизнес-логики",
      "UI от CSS",
      "CPU от IO",
      "sync от async"
    ],
    "answer": 0,
    "explain": "Сервис работает с абстракцией хранилища. Подходит ответ «доступ к данным от бизнес-логики».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m501"
  },
  {
    "topic": "array",
    "q": "В чём разница: array.array vs list?",
    "options": [
      "типизированный компактный массив",
      "то же самое",
      "всегда быстрее dict",
      "immutable"
    ],
    "answer": 0,
    "explain": "Однотипные числовые значения. Подходит ответ «типизированный компактный массив».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m502"
  },
  {
    "topic": "dataclasses",
    "q": "Что даёт frozen=True?",
    "options": [
      "неизменяемые экземпляры (приблизительно)",
      "быстрее всегда",
      "slots автоматически до 3.9",
      "JSON"
    ],
    "answer": 0,
    "explain": "Присваивание полей, а затем FrozenInstanceError. Подходит ответ «неизменяемые экземпляры (приблизительно)».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m503"
  },
  {
    "topic": "итераторы",
    "q": "Для чего используется StopIteration.value?",
    "options": [
      "для return из генератора",
      "для list index",
      "для dict",
      "для async only"
    ],
    "answer": 0,
    "explain": "PEP 380. Подходит ответ «для return из генератора».",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m504"
  },
  {
    "topic": "SQL",
    "q": "Уровень изоляции READ UNCOMMITTED — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Подходит ответ «разные аномалии чтения/записи; знай свою СУБД».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m505"
  },
  {
    "topic": "logging",
    "q": "Что такое basicConfig повторный вызов?",
    "options": [
      "часто no-op если уже handlers",
      "всегда пересоздаёт",
      "удаляет root",
      "error"
    ],
    "answer": 0,
    "explain": "Идиома один раз. Подходит ответ «часто no-op если уже handlers». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m506"
  },
  {
    "topic": "regex",
    "q": "В чём разница: re.FULLMATCH vs match?",
    "options": [
      "вся строка vs с начала",
      "одно и то же",
      "только bytes",
      "ignorecase"
    ],
    "answer": 0,
    "explain": "Полное совпадение. Подходит ответ «вся строка vs с начала».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m507"
  },
  {
    "topic": "принципы",
    "q": "Выбери верный вариант: Shotgun surgery — когда?",
    "options": [
      "одно изменение требует правок во многих файлах",
      "один файл меняется",
      "только тесты",
      "только docs"
    ],
    "answer": 0,
    "explain": "Признак плохой связности / дублирования. Подходит ответ «одно изменение требует правок во многих файлах».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m508"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.subtract?",
    "options": [
      "может уйти в минус",
      "как - но clip 0",
      "удаляет ключи <1 always",
      "ошибка на минус"
    ],
    "answer": 0,
    "explain": "Отличие от -. Подходит ответ «может уйти в минус».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m509"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case point.x: без кавычек в Python 3.10+?",
    "options": [
      "value pattern / dotted",
      "всегда capture name",
      "ошибка",
      "regex"
    ],
    "answer": 0,
    "explain": "Смотри правила capture vs value. Подходит ответ «value pattern / dotted».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m510"
  },
  {
    "topic": "comprehensions",
    "q": "Что выведет код?",
    "options": [
      "нет (Py3)",
      "да как в 2.7",
      "ошибка",
      "только в dictcomp"
    ],
    "answer": 0,
    "explain": "Свой scope у comprehension. Подходит ответ «нет (Py3)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "[i for i in range(3)]\n# i ?",
    "group": "Генераторы и итераторы",
    "id": "m511"
  },
  {
    "topic": "HTTP",
    "q": "Что такое идемпотентный HTTP-метод пример?",
    "options": [
      "GET / PUT (в идеале)",
      "POST всегда",
      "только CONNECT",
      "TRACE обязателен"
    ],
    "answer": 0,
    "explain": "Повтор не должен менять состояние (семантика). Подходит ответ «GET / PUT (в идеале)». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m512"
  },
  {
    "topic": "тесты",
    "q": "Что проверяет doctest?",
    "options": [
      "примеры в docstring",
      "типы",
      "coverage",
      "perf"
    ],
    "answer": 0,
    "explain": "Живая документация. Подходит ответ «примеры в docstring». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m513"
  },
  {
    "topic": "regex",
    "q": "Что такое possessive quantifiers в regex module?",
    "options": [
      "сторонний regex иногда богаче re",
      "идентичен re всегда",
      "нет нигде",
      "только bytes re"
    ],
    "answer": 0,
    "explain": "Stdlib re ≠ regex. Подходит ответ «сторонний regex иногда богаче re».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m514"
  },
  {
    "topic": "принципы",
    "q": "Что вернёт Mutable default argument def f(x=[]) — ловушка потому что?",
    "options": [
      "список один на все вызовы",
      "list immutable",
      "GIL",
      "только в classmethod"
    ],
    "answer": 0,
    "explain": "Используй None и создавай список внутри. Подходит ответ «список один на все вызовы».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m515"
  },
  {
    "topic": "collections",
    "q": "Что такое deque.appendleft — амортизированно?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь. Подходит ответ «O(1)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m516"
  },
  {
    "topic": "typing",
    "q": "Что такое Protocol нужен для?",
    "options": [
      "структурной типизации (duck typing)",
      "наследования классов",
      "GIL",
      "async"
    ],
    "answer": 0,
    "explain": "Typing.Protocol / PEP 544. Подходит ответ «структурной типизации (duck typing)». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m517"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 409 обычно значит?",
    "options": [
      "Conflict",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "409 — Conflict. Подходит ответ «Conflict». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m518"
  },
  {
    "topic": "testing",
    "q": "Что означает fixture autouse=True?",
    "options": [
      "фикстура подключается ко всем тестам в scope автоматически",
      "только к одному файлу вручную",
      "отключает assert",
      "mock random"
    ],
    "answer": 0,
    "explain": "Например, очистка temp dir после каждого теста. Подходит ответ «фикстура подключается ко всем тестам в scope автоматически».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m519"
  },
  {
    "topic": "sort",
    "q": "Что вернёт sorted(xs, key=lambda x: x[1])?",
    "options": [
      "сортирует по второму элементу",
      "удаляет",
      "группирует",
      "хеширует"
    ],
    "answer": 0,
    "explain": "Key function. Подходит ответ «сортирует по второму элементу».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m520"
  },
  {
    "topic": "patterns",
    "q": "Выбери верный вариант: Паттерн Factory Method создаёт?",
    "options": [
      "объект через метод подкласса/фабрики",
      "только singleton",
      "только metaclass",
      "поток"
    ],
    "answer": 0,
    "explain": "Подкласс решает, какой конкретный тип вернуть. Подходит ответ «объект через метод подкласса/фабрики».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m521"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 4))",
    "group": "Collections и itertools",
    "id": "m522"
  },
  {
    "topic": "match",
    "q": "Что вернёт case {'x': _, **rest}:?",
    "options": [
      "остальные ключи в rest",
      "ошибка",
      "list",
      "set"
    ],
    "answer": 0,
    "explain": "Mapping rest. Подходит ответ «остальные ключи в rest».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m523"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 204 обычно значит?",
    "options": [
      "No Content",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "204 — No Content. Подходит ответ «No Content». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m524"
  },
  {
    "topic": "testing",
    "q": "Зачем capsys / capfd в pytest?",
    "options": [
      "перехватить stdout/stderr в тесте",
      "ускорить CPU",
      "mock сеть",
      "snapshot HTML"
    ],
    "answer": 0,
    "explain": "Проверка вывода print без побочных эффектов. Подходит ответ «перехватить stdout/stderr в тесте». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m525"
  },
  {
    "topic": "pathlib",
    "q": "В чём разница: Path.match vs glob?",
    "options": [
      "match — паттерн на путь, glob — поиск в дереве",
      "одно и то же",
      "match удаляет",
      "glob regex only"
    ],
    "answer": 0,
    "explain": "Разные API. Подходит ответ «match — паттерн на путь, glob — поиск в дереве».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m526"
  },
  {
    "topic": "cohesion",
    "q": "Что такое Сильная связанность (tight coupling) между модулями?",
    "options": [
      "плохо: изменение в одном ломает другой",
      "всегда хорошо",
      "только про потоки",
      "синоним cohesion"
    ],
    "answer": 0,
    "explain": "Слабая связанность упрощает изменения и тесты. Подходит ответ «плохо: изменение в одном ломает другой».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m527"
  },
  {
    "topic": "collections",
    "q": "defaultdict(list): d['x'].append(1) — что с d['x']?",
    "options": [
      "[1], ключ создался сам",
      "KeyError",
      "None",
      "ошибка типа"
    ],
    "answer": 0,
    "explain": "Фабрика list() вызывается для отсутствующего ключа. Подходит ответ «[1], ключ создался сам».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m528"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Optional[str] эквивалент?",
    "options": [
      "str | None",
      "str | int",
      "Union[str, int]",
      "Any"
    ],
    "answer": 0,
    "explain": "Значение str либо None. Подходит ответ «str | None». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m529"
  },
  {
    "topic": "SQL",
    "q": "Что такое транзакция ACID — A?",
    "options": [
      "Atomicity",
      "Async",
      "Array",
      "Auth"
    ],
    "answer": 0,
    "explain": "Всё или ничего. Подходит ответ «Atomicity». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m530"
  },
  {
    "topic": "testing",
    "q": "Выбери верный вариант: Coverage 100% не гарантирует?",
    "options": [
      "отсутствие логических багов",
      "что строки выполнялись",
      "что тесты есть",
      "отчёт pytest-cov"
    ],
    "answer": 0,
    "explain": "Можно покрыть код бессмысленными assert. Подходит ответ «отсутствие логических багов». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m531"
  },
  {
    "topic": "f-string",
    "q": "Что выведет код?",
    "options": [
      "'x=10'",
      "'10'",
      "'x={x}'",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Отладочный = в f-string (3.8+). Подходит ответ «'x=10'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = 10\nprint(f'{x=}')",
    "group": "Stdlib и производительность",
    "id": "m532"
  },
  {
    "topic": "DRY",
    "q": "Какой рефакторинг чаще всего помогает соблюсти DRY?",
    "options": [
      "вынести общую функцию/модуль",
      "скопировать ещё раз",
      "закомментировать дубликат",
      "переименовать переменную"
    ],
    "answer": 0,
    "explain": "Общий код — в одну функцию, класс или утилитный модуль. Подходит ответ «вынести общую функцию/модуль».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m533"
  },
  {
    "topic": "collections",
    "q": "Что такое deque(maxlen=n) при переполнении?",
    "options": [
      "выбрасывает с противоположного конца",
      "ошибка",
      "растёт бесконечно",
      "блокирует"
    ],
    "answer": 0,
    "explain": "Кольцевой буфер. Подходит ответ «выбрасывает с противоположного конца».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m534"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое InitVar?",
    "options": [
      "поле только для __init__, не хранится",
      "classmethod",
      "property",
      "slots field"
    ],
    "answer": 0,
    "explain": "Init-only. Подходит ответ «поле только для __init__, не хранится».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m535"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 500 — кратко?",
    "options": [
      "ошибка сервера",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 500: ошибка сервера. Подходит ответ «ошибка сервера». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m536"
  },
  {
    "topic": "logging",
    "q": "Что такое logger.exception внутри except?",
    "options": [
      "лог + traceback",
      "только message",
      "raise снова",
      "silence"
    ],
    "answer": 0,
    "explain": "Удобный helper. Подходит ответ «лог + traceback». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m537"
  },
  {
    "topic": "строки",
    "q": "Зачем нужно Интернирование строк: sys.intern?",
    "options": [
      "принудительно дедуплицирует str",
      "шифрует",
      "делает bytes",
      "GC disable"
    ],
    "answer": 0,
    "explain": "Для частых ключей. Подходит ответ «принудительно дедуплицирует str». Строки в Python неизменяемы: любой «изменяющий» метод возвращает новую строку, а срезы работают так же, как у последовательностей.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m538"
  },
  {
    "topic": "принципы",
    "q": "Выбери верный вариант: Magic numbers в коде — проблема потому что?",
    "options": [
      "непонятен смысл без именованной константы",
      "медленнее int",
      "ломает GIL",
      "запрещены PEP 8"
    ],
    "answer": 0,
    "explain": "MAX_RETRIES = 3 читается лучше, чем 3. Подходит ответ «непонятен смысл без именованной константы».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m539"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "20",
      "10",
      "25",
      "120"
    ],
    "answer": 0,
    "explain": "P(5,2) = 20. Подходит ответ «20». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(5), 2))))",
    "group": "Collections и itertools",
    "id": "m540"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "3 True",
      "True",
      "ошибка",
      "3"
    ],
    "answer": 0,
    "explain": "Присвоение в выражении. Подходит ответ «3 True». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "print((n := 3), n == 3)",
    "group": "Typing и dataclasses",
    "id": "m541"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 204 — кратко?",
    "options": [
      "успех без тела",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 204: успех без тела. Подходит ответ «успех без тела». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m542"
  },
  {
    "topic": "testing",
    "q": "Что делает @pytest.fixture?",
    "options": [
      "подготавливает данные/ресурс для теста",
      "маркирует skip",
      "заменяет assert",
      "компилирует C"
    ],
    "answer": 0,
    "explain": "Fixture — dependency injection для тестов. Подходит ответ «подготавливает данные/ресурс для теста». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m543"
  },
  {
    "topic": "JSON",
    "q": "Выбери верный вариант: json.dumps({1: 'a'}) ключ станет?",
    "options": [
      "строкой '1'",
      "int 1 в JSON",
      "байтами",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "JSON keys — строки. Подходит ответ «строкой '1'».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m544"
  },
  {
    "topic": "patterns",
    "q": "Допустим ли синтаксис Паттерн Decorator (GoF) отличается от @decorator?",
    "options": [
      "оба оборачивают объект/функцию; GoF — про композицию объектов",
      "это разные вещи без связи",
      "GoF только для классов C++",
      "@ только для async"
    ],
    "answer": 0,
    "explain": "Синтаксический декоратор — частный случай обёртки. Подходит ответ «оба оборачивают объект/функцию; GoF — про композицию объектов».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m545"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "3",
      "9",
      "?0"
    ],
    "answer": 0,
    "explain": "P(3,2) = 6. Подходит ответ «6». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 2))))",
    "group": "Collections и itertools",
    "id": "m546"
  },
  {
    "topic": "typing",
    "q": "Что такое list[int] в 3.9+?",
    "options": [
      "параметризованный тип",
      "runtime list только int enforced",
      "синтаксис ошибки до 3.12",
      "tuple"
    ],
    "answer": 0,
    "explain": "Аннотация; runtime обычно не проверяет. Подходит ответ «параметризованный тип». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m547"
  },
  {
    "topic": "HTTP",
    "q": "Что такое CORS preflight?",
    "options": [
      "OPTIONS перед «сложным» запросом",
      "GET always",
      "TLS handshake",
      "DNS"
    ],
    "answer": 0,
    "explain": "Браузерная безопасность. Подходит ответ «OPTIONS перед «сложным» запросом». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m548"
  },
  {
    "topic": "logging",
    "q": "Почему logger = logging.getLogger(__name__)?",
    "options": [
      "иерархия логгеров по модулю",
      "обязательный синтаксис",
      "быстрее print",
      "отключает root"
    ],
    "answer": 0,
    "explain": "Удобно фильтровать по имени пакета. Подходит ответ «иерархия логгеров по модулю». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m549"
  },
  {
    "topic": "weakref",
    "q": "Что такое finalize(obj, callback)?",
    "options": [
      "вызов при GC объекта",
      "сразу",
      "при import",
      "никогда"
    ],
    "answer": 0,
    "explain": "Слабый финализатор. Подходит ответ «вызов при GC объекта».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m550"
  },
  {
    "topic": "patterns",
    "q": "Что такое Идиоматичный Singleton в Python?",
    "options": [
      "модуль как единственный экземпляр",
      "metaclass обязателен",
      "__new__ с lock всегда",
      "global везде"
    ],
    "answer": 0,
    "explain": "Import config — модуль загружается один раз. Подходит ответ «модуль как единственный экземпляр».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m551"
  },
  {
    "topic": "itertools",
    "q": "Что такое islice(it, None, None, 2)?",
    "options": [
      "каждый второй лениво",
      "list copy",
      "reverse",
      "sort"
    ],
    "answer": 0,
    "explain": "Срез итератора. Подходит ответ «каждый второй лениво». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m552"
  },
  {
    "topic": "walrus",
    "q": "Для чего в условии пишут (n := len(a)) > 0?",
    "options": [
      "присваивание в выражении",
      "аннотацию",
      "decorator",
      "comprehension only"
    ],
    "answer": 0,
    "explain": "PEP 572: моржовый оператор присваивает и сразу использует значение. Подходит ответ «присваивание в выражении».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m553"
  },
  {
    "topic": "SQL",
    "q": "Что такое connection pool exhaustion?",
    "options": [
      "все коннекты заняты — очередь/ошибки",
      "всегда OOM",
      "GIL",
      "DNS"
    ],
    "answer": 0,
    "explain": "Лимиты пула. Подходит ответ «все коннекты заняты — очередь/ошибки». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m554"
  },
  {
    "topic": "тесты",
    "q": "Что даёт tmp_path?",
    "options": [
      "временную директорию pathlib",
      "только str /tmp fixed",
      "s3 bucket",
      "memory fs always"
    ],
    "answer": 0,
    "explain": "Изоляция FS. Подходит ответ «временную директорию pathlib». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m555"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "None",
      "{}",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Невалидный JSON, а затем JSONDecodeError. Подходит ответ «JSONDecodeError». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.loads('nullish'))",
    "group": "Stdlib и производительность",
    "id": "m556"
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Strategy в Python чаще всего?",
    "options": [
      "передача callable/класса стратегии",
      "только наследование от AbstractStrategy",
      "global switch",
      "eval"
    ],
    "answer": 0,
    "explain": "Функции первого класса — естественная стратегия. Подходит ответ «передача callable/класса стратегии».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m557"
  },
  {
    "topic": "dict",
    "q": "В чём опасность?",
    "options": [
      "один list на все ключи",
      "KeyError",
      "нет опасности",
      "deepcopy"
    ],
    "answer": 0,
    "explain": "Fromkeys шарит value. Подходит ответ «один list на все ключи». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "d = dict.fromkeys(['a', 'b'], [])\nd['a'].append(1)\nprint(d['b'])",
    "group": "Collections и itertools",
    "id": "m558"
  },
  {
    "topic": "match",
    "q": "Что вернёт case [x, *rest]: матчит?",
    "options": [
      "последовательность ≥1 с хвостом",
      "только list длины 2",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern. Подходит ответ «последовательность ≥1 с хвостом».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m559"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое OAuth2PasswordBearer?",
    "options": [
      "схема доставания токена",
      "ORM user",
      "JWT decode auto complete security",
      "CORS"
    ],
    "answer": 0,
    "explain": "Каркас auth. Подходит ответ «схема доставания токена».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m560"
  },
  {
    "topic": "logging",
    "q": "Что такое RotatingFileHandler?",
    "options": [
      "ротация по размеру",
      "по времени only Timed",
      "stdout",
      "queue"
    ],
    "answer": 0,
    "explain": "Файловые логи. Подходит ответ «ротация по размеру». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m561"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: bytearray для накопления байт?",
    "options": [
      "мутабельный буфер",
      "immutable как bytes",
      "str",
      "memoryview ban"
    ],
    "answer": 0,
    "explain": "Эффективная сборка. Подходит ответ «мутабельный буфер». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m562"
  },
  {
    "topic": "YAGNI",
    "q": "Программист добавляет поддержку 10 валют «на всякий случай» — что нарушено?",
    "options": [
      "YAGNI",
      "DRY",
      "LSP",
      "GIL"
    ],
    "answer": 0,
    "explain": "Лишняя сложность без требования — классический YAGNI. Подходит ответ «YAGNI».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m563"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.elements()?",
    "options": [
      "итератор с повторами по счёту",
      "unique keys",
      "sorted list always",
      "dict"
    ],
    "answer": 0,
    "explain": "Разворачивает счётчики. Подходит ответ «итератор с повторами по счёту».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m564"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Isinstance с абстрактными/builtin типами. Подходит ответ «True». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "print(isinstance({1}, set))",
    "group": "Typing и dataclasses",
    "id": "m565"
  },
  {
    "topic": "HTTP",
    "q": "Что такое circuit breaker?",
    "options": [
      "временно стопит вызовы к больному сервису",
      "retry forever",
      "кэш DNS",
      "TLS"
    ],
    "answer": 0,
    "explain": "Устойчивость. Подходит ответ «временно стопит вызовы к больному сервису». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m566"
  },
  {
    "topic": "тесты",
    "q": "Что такое snapshot testing?",
    "options": [
      "сравнение с эталонным выводом",
      "property based",
      "load test",
      "mutation"
    ],
    "answer": 0,
    "explain": "UI/API регрессии. Подходит ответ «сравнение с эталонным выводом». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m567"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path('a') / 'b' / 'c' даст?",
    "options": [
      "Path с платформенными разделителями",
      "строку 'a/b/c' всегда",
      "ошибку",
      "bytes"
    ],
    "answer": 0,
    "explain": "Оператор / у Path. Подходит ответ «Path с платформенными разделителями».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m568"
  },
  {
    "topic": "DRY",
    "q": "Что такое DRY относится к?",
    "options": [
      "дублированию логики и знаний",
      "только к именам переменных",
      "только к тестам",
      "количеству файлов"
    ],
    "answer": 0,
    "explain": "Не про «мало строк», а про не повторять смысл. Подходит ответ «дублированию логики и знаний».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m569"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('a', 5), ('b', 2)]",
      "{'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Подходит ответ «[('a', 5), ('b', 2)]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('abracadabra').most_common(2))",
    "group": "Collections и itertools",
    "id": "m570"
  },
  {
    "topic": "args",
    "q": "Как вызвать f?",
    "options": [
      "f(1)",
      "f(a=1)",
      "оба",
      "f()"
    ],
    "answer": 0,
    "explain": "Positional-only до /. Подходит ответ «f(1)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "def f(a, /):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m571"
  },
  {
    "topic": "SQL",
    "q": "Что такое индекс ускоряет?",
    "options": [
      "поиск/фильтр ценой записи",
      "всегда inserts",
      "json dumps",
      "GIL"
    ],
    "answer": 0,
    "explain": "Tradeoff. Подходит ответ «поиск/фильтр ценой записи». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m572"
  },
  {
    "topic": "mock",
    "q": "Что проверяет assert_called_once_with(...)?",
    "options": [
      "ровно один вызов с аргументами",
      "любое число вызовов",
      "только тип",
      "время"
    ],
    "answer": 0,
    "explain": "Из unittest.mock. Подходит ответ «ровно один вызов с аргументами».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m573"
  },
  {
    "topic": "performance",
    "q": "В чём разница: join vs + для N строк?",
    "options": [
      "join обычно предпочтительнее",
      "+ всегда O(1)",
      "без разницы в языке контрактом",
      "f-string в цикле идеал без меры"
    ],
    "answer": 0,
    "explain": "Линейная сборка. Подходит ответ «join обычно предпочтительнее». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m574"
  },
  {
    "topic": "collections",
    "q": "Что делает deque.rotate(1) на 4 элементах?",
    "options": [
      "цикл сдвиг на 1 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Rotate — циклический сдвиг. Подходит ответ «цикл сдвиг на 1 вправо (отриц. — влево)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m575"
  },
  {
    "topic": "dataclasses",
    "q": "Зачем нужен field(default_factory=list)?",
    "options": [
      "избежать shared mutable default",
      "ускорить",
      "сделать frozen",
      "валидацию"
    ],
    "answer": 0,
    "explain": "Каждый экземпляр — свой list. Подходит ответ «избежать shared mutable default».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m576"
  },
  {
    "topic": "SQL",
    "q": "Что такое миграция Alembic?",
    "options": [
      "версионирование схемы",
      "ORM query cache",
      "Redis",
      "nginx"
    ],
    "answer": 0,
    "explain": "Эволюция БД. Подходит ответ «версионирование схемы». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m577"
  },
  {
    "topic": "тесты",
    "q": "Что такое pytest.raises ловит?",
    "options": [
      "ожидаемое исключение",
      "любые silently",
      "warnings only",
      "SystemExit ban"
    ],
    "answer": 0,
    "explain": "Контекст проверки. Подходит ответ «ожидаемое исключение». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m578"
  },
  {
    "topic": "копирование",
    "q": "Что такое copy.deepcopy нужен когда?",
    "options": [
      "есть вложенные изменяемые",
      "всегда вместо =",
      "для int",
      "для None"
    ],
    "answer": 0,
    "explain": "Рекурсивное копирование. Подходит ответ «есть вложенные изменяемые».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m579"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6]",
      "[1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Подходит ответ «[1, 3, 6]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 4))))",
    "group": "Collections и itertools",
    "id": "m580"
  },
  {
    "topic": "args",
    "q": "Что вернёт Positional-only до /?",
    "options": [
      "нельзя передать по имени",
      "можно только по имени",
      "kwargs",
      "varargs"
    ],
    "answer": 0,
    "explain": "Def f(x, /). Подходит ответ «нельзя передать по имени».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m581"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 200 обычно значит?",
    "options": [
      "OK",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "200 — OK. Подходит ответ «OK». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m582"
  },
  {
    "topic": "тесты",
    "q": "Выбери верный вариант: monkeypatch / mock патчат?",
    "options": [
      "атрибуты/окружение на время теста",
      "продакшен БД",
      "GIL",
      "байткод"
    ],
    "answer": 0,
    "explain": "Изоляция побочных эффектов. Подходит ответ «атрибуты/окружение на время теста». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m583"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Для многих membership checks лучше?",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "queue"
    ],
    "answer": 0,
    "explain": "Среднее O(1) у set. Подходит ответ «set». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m584"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2, 3, 4]",
      "[[1, 2], [0, 1, 2, 3, 4]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые. Подходит ответ «[1, 2, 0, 1, 2, 3, 4]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(5)))))",
    "group": "Collections и itertools",
    "id": "m585"
  },
  {
    "topic": "typing",
    "q": "В чём разница: Protocol (structural) vs ABC?",
    "options": [
      "Protocol — утиная типизация; ABC — номинальная",
      "одно и то же",
      "Protocol только runtime",
      "ABC только stubs"
    ],
    "answer": 0,
    "explain": "Typing.Protocol / runtime_checkable. Подходит ответ «Protocol — утиная типизация; ABC — номинальная».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m586"
  },
  {
    "topic": "SQL",
    "q": "Уровень изоляции REPEATABLE READ — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Подходит ответ «разные аномалии чтения/записи; знай свою СУБД».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m587"
  },
  {
    "topic": "mock",
    "q": "Что такое spec=True ограничивает?",
    "options": [
      "атрибуты мока интерфейсом",
      "скорость",
      "GC",
      "patch target"
    ],
    "answer": 0,
    "explain": "Ловит опечатки. Подходит ответ «атрибуты мока интерфейсом».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m588"
  },
  {
    "topic": "f-string",
    "q": "Что вернёт f'{x=!r}' покажет?",
    "options": [
      "имя и repr значения",
      "только x",
      "ошибку до 3.12",
      "hex"
    ],
    "answer": 0,
    "explain": "Debug self-documenting. Подходит ответ «имя и repr значения».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m589"
  },
  {
    "topic": "collections",
    "q": "Выбери верный вариант: deque.popleft() сложность?",
    "options": [
      "O(1)",
      "O(n) как list.pop(0)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Для очередей deque лучше list. Подходит ответ «O(1)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m590"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeVarTuple / Unpack?",
    "options": [
      "вариативные типы кортежей",
      "только dict",
      "Enum",
      "Path"
    ],
    "answer": 0,
    "explain": "PEP 646. Подходит ответ «вариативные типы кортежей». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m591"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 500 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 500 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Подходит ответ «набор из N строк без стабильного порядка». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m592"
  },
  {
    "topic": "testing",
    "q": "Что такое pytest.mark.parametrize нужен для?",
    "options": [
      "один тест — много наборов вход/ожидание",
      "параллель на GPU",
      "coverage 100%",
      "mock всего"
    ],
    "answer": 0,
    "explain": "Табличные тесты без копипасты. Подходит ответ «один тест — много наборов вход/ожидание». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m593"
  },
  {
    "topic": "hashlib",
    "q": "Что вернёт pbkdf2_hmac / scrypt?",
    "options": [
      "KDF для паролей",
      "быстрый checksum",
      "crc",
      "siphash"
    ],
    "answer": 0,
    "explain": "Медленные по дизайну. Подходит ответ «KDF для паролей».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m594"
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatch?",
    "options": [
      "мультиметод по типу 1-го аргумента",
      "async gather",
      "cache",
      "partial only"
    ],
    "answer": 0,
    "explain": "Functools.singledispatch. Подходит ответ «мультиметод по типу 1-го аргумента».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m595"
  },
  {
    "topic": "enum",
    "q": "Что такое Enum члены сравниваются?",
    "options": [
      "по идентичности/значению члена, не как «сырые» int без mixin",
      "всегда как int",
      "только по имени str",
      "нельзя"
    ],
    "answer": 0,
    "explain": "IntEnum — отдельный случай, совместим с int. Подходит ответ «по идентичности/значению члена, не как «сырые» int без mixin».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m596"
  },
  {
    "topic": "HTTP",
    "q": "Что такое идемпотентный PUT?",
    "options": [
      "повтор того же эффекта",
      "всегда создаёт новый ресурс",
      "запрещён",
      "только DELETE"
    ],
    "answer": 0,
    "explain": "Семантика. Подходит ответ «повтор того же эффекта». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m597"
  },
  {
    "topic": "logging",
    "q": "Что такое Logger.propagate?",
    "options": [
      "передача родителям",
      "stop all",
      "change level",
      "format"
    ],
    "answer": 0,
    "explain": "Иерархия. Подходит ответ «передача родителям». Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m598"
  },
  {
    "topic": "is",
    "q": "Выбери верный вариант: Обычно (257 is 257) для литералов в одном выражении?",
    "options": [
      "часто True из-за peephole, но не контракт",
      "всегда False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "На identity int полагаться нельзя — используйте ==. Подходит ответ «часто True из-за peephole, но не контракт».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m599"
  },
  {
    "topic": "functools",
    "q": "Выбери верный вариант: Сколько уникальных ключей кэша у fib(2) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 3 (0..n)",
      "4",
      "2",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Подходит ответ «примерно 3 (0..n)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m600"
  },
  {
    "topic": "typing",
    "q": "Что такое Generic[T] нужен для?",
    "options": [
      "параметризуемых классов",
      "GIL",
      "async",
      "json"
    ],
    "answer": 0,
    "explain": "Generics. Подходит ответ «параметризуемых классов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m601"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `LIMIT`?",
    "options": [
      "ограничить число строк",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "LIMIT в SQL. Подходит ответ «ограничить число строк». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m602"
  },
  {
    "topic": "тесты",
    "q": "Что такое hypothesis.given?",
    "options": [
      "property-based входы",
      "mock",
      "fixture data fixed only",
      "benchmark"
    ],
    "answer": 0,
    "explain": "Генерация примеров. Подходит ответ «property-based входы». Тесты бывают unit, integration, property-based и нагрузочные — каждый слой ловит свой класс ошибок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m603"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "etc/passwd",
      "etc\\passwd",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Подходит ответ «etc/passwd». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('etc', 'passwd'))",
    "group": "Stdlib и производительность",
    "id": "m604"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "8",
      "16",
      "24"
    ],
    "answer": 0,
    "explain": "C(4,2) = 6. Подходит ответ «6». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 2))))",
    "group": "Collections и itertools",
    "id": "m605"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Isinstance с абстрактными/builtin типами. Подходит ответ «False». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "print(isinstance((1, 2), list))",
    "group": "Typing и dataclasses",
    "id": "m606"
  },
  {
    "topic": "HTTP",
    "q": "Что делает DELETE по семантике HTTP?",
    "options": [
      "идемпотентный (в идеале)",
      "никогда не идемпотентный",
      "только с телом JSON",
      "запрещён REST"
    ],
    "answer": 0,
    "explain": "DELETE безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай). Подходит ответ «идемпотентный (в идеале)».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m607"
  },
  {
    "topic": "mock",
    "q": "Что такое patch.dict(os.environ)?",
    "options": [
      "временно меняет env",
      "вечно",
      "удаляет OS",
      "pip"
    ],
    "answer": 0,
    "explain": "Изоляция конфига. Подходит ответ «временно меняет env».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m608"
  },
  {
    "topic": "регулярки",
    "q": "Какой стандартный модуль Python отвечает за regex?",
    "options": [
      "re",
      "regex встроен всегда",
      "grep",
      "pattern"
    ],
    "answer": 0,
    "explain": "Стандартный re. Подходит ответ «re».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m609"
  },
  {
    "topic": "functools",
    "q": "Что вернёт reduce(lambda a,b:a+b, [1,2,3])?",
    "options": [
      "6",
      "[1,2,3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Свёртка. Подходит ответ «6».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m610"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "one",
      "other",
      "ошибка",
      "1"
    ],
    "answer": 0,
    "explain": "Case 1. Подходит ответ «one». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m611"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 403 обычно значит?",
    "options": [
      "Forbidden",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "403 — Forbidden. Подходит ответ «Forbidden». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m612"
  },
  {
    "topic": "testing",
    "q": "Что такое Пирамида тестирования рекомендует?",
    "options": [
      "много unit, меньше integration, ещё меньше e2e",
      "только e2e",
      "без unit",
      "только manual QA"
    ],
    "answer": 0,
    "explain": "Дешёвые тесты внизу, дорогие наверху. Подходит ответ «много unit, меньше integration, ещё меньше e2e».",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m613"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: много append затем join для str частей?",
    "options": [
      "хороший паттерн",
      "хуже += всегда в CPython без оговорок? не опирайся",
      "запрещён",
      "только bytearray"
    ],
    "answer": 0,
    "explain": "Читаемо и предсказуемо. Подходит ответ «хороший паттерн». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m614"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "5",
      "7",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Подходит ответ «5». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [5, 1, 1]))",
    "group": "Collections и itertools",
    "id": "m615"
  },
  {
    "topic": "attrs/pydantic",
    "q": "Выбери верный вариант: Pydantic в отличие от dataclass часто?",
    "options": [
      "валидирует данные на runtime",
      "только генерирует __init__",
      "заменяет GIL",
      "компилирует C"
    ],
    "answer": 0,
    "explain": "Валидация и парсинг. Подходит ответ «валидирует данные на runtime».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m616"
  },
  {
    "topic": "SQL",
    "q": "В чём риск lazy load в ORM?",
    "options": [
      "N+1 запросов",
      "всегда быстрее eager",
      "нет риска",
      "только insert"
    ],
    "answer": 0,
    "explain": "Явный join/options. Подходит ответ «N+1 запросов». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m617"
  },
  {
    "topic": "pathlib",
    "q": "В чём разница: PurePath vs Path?",
    "options": [
      "Pure без I/O",
      "одно и то же",
      "Pure только Windows",
      "Path без строк"
    ],
    "answer": 0,
    "explain": "Логические пути. Подходит ответ «Pure без I/O».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m618"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "1",
      "5",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Подходит ответ «1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nh = [5, 1, 3]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m619"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Callable[[int], str] описывает?",
    "options": [
      "функцию из int в str",
      "list",
      "coroutine only",
      "type var"
    ],
    "answer": 0,
    "explain": "Сигнатура callable. Подходит ответ «функцию из int в str». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m620"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 404 обычно значит?",
    "options": [
      "Not Found",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "404 — Not Found. Подходит ответ «Not Found». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m621"
  },
  {
    "topic": "struct",
    "q": "Что такое calcsize(fmt)?",
    "options": [
      "байт на формат",
      "compile C",
      "json size",
      "hash"
    ],
    "answer": 0,
    "explain": "Размер упаковки. Подходит ответ «байт на формат».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m622"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт accumulate с func=operator.mul?",
    "options": [
      "накопительное произведение",
      "sum only",
      "max only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Кастомная свёртка. Подходит ответ «накопительное произведение». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m623"
  },
  {
    "topic": "match",
    "q": "Что такое case _ :?",
    "options": [
      "wildcard / default ветка",
      "ошибка синтаксиса",
      "только для None",
      "break"
    ],
    "answer": 0,
    "explain": "Ловит всё оставшееся. Подходит ответ «wildcard / default ветка».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m624"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `HAVING`?",
    "options": [
      "фильтр после GROUP BY",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "HAVING в SQL. Подходит ответ «фильтр после GROUP BY». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m625"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "{\"a\": 1}",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "Dumps, а затем строка JSON. Подходит ответ «{\"a\": 1}». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'a': 1}))",
    "group": "Stdlib и производительность",
    "id": "m626"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache?",
    "options": [
      "мемоизация с лимитом",
      "LRU список",
      "async lock",
      "GC hint"
    ],
    "answer": 0,
    "explain": "Кэш результатов функции. Подходит ответ «мемоизация с лимитом».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m627"
  },
  {
    "topic": "enum",
    "q": "Что вернёт Flag / IntFlag для?",
    "options": [
      "битовых флагов",
      "строк",
      "json",
      "async"
    ],
    "answer": 0,
    "explain": "Комбинации флагов. Подходит ответ «битовых флагов». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m628"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `RETURNING`?",
    "options": [
      "вернуть строки после INSERT/UPDATE/DELETE (PG и др.)",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "RETURNING в SQL. Подходит ответ «вернуть строки после INSERT/UPDATE/DELETE (PG и др.)». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m629"
  },
  {
    "topic": "weakref",
    "q": "Выбери верный вариант: WeakValueDictionary забывает значение когда?",
    "options": [
      "не осталось сильных ссылок на объект",
      "всегда через 1с",
      "при hash collision",
      "никогда"
    ],
    "answer": 0,
    "explain": "Кэши без удержания объектов. Подходит ответ «не осталось сильных ссылок на объект».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m630"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[1, 4]",
      "[1, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Подходит ответ «[1, 4]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [4, 4, 1]))",
    "group": "Collections и itertools",
    "id": "m631"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "2",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Подходит ответ «2». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "if (x := 2):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m632"
  },
  {
    "topic": "HTTP",
    "q": "Какая Популярная sync HTTP библиотека?",
    "options": [
      "requests",
      "http.client только принято",
      "urllib обязателен везде",
      "socket сырой"
    ],
    "answer": 0,
    "explain": "Requests — de facto. Подходит ответ «requests». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m633"
  },
  {
    "topic": "sort",
    "q": "Что такое Timsort хорошо для?",
    "options": [
      "частично упорядоченных данных",
      "только random",
      "linked list C",
      "GPU"
    ],
    "answer": 0,
    "explain": "Адаптивность. Подходит ответ «частично упорядоченных данных».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m634"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(1, 2), (3, 4)]",
      "[1,2,3,4]",
      "ошибка",
      "[(1,2,3,4)]"
    ],
    "answer": 0,
    "explain": "Batched(n) группирует по n (3.12+). Если нет — skip? Better use classic:. Подходит ответ «[(1, 2), (3, 4)]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import islice\nit = iter([1, 2, 3, 4])\nprint([tuple(islice(it, 2)), tuple(islice(it, 2))])",
    "group": "Collections и itertools",
    "id": "m635"
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeAlias (3.10+/3.12 type)?",
    "options": [
      "явный алиас типа",
      "runtime cast",
      "decorator",
      "metaclass"
    ],
    "answer": 0,
    "explain": "Читаемые алиасы. Подходит ответ «явный алиас типа». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m636"
  },
  {
    "topic": "HTTP",
    "q": "Что такое POST обычно?",
    "options": [
      "не идемпотентен",
      "идемпотентен",
      "безопасен как GET",
      "кэшируется всегда"
    ],
    "answer": 0,
    "explain": "Побочные эффекты. Подходит ответ «не идемпотентен». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m637"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "Dumps, а затем строка JSON. Подходит ответ «[1, 2, 3]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.dumps([1, 2, 3]))",
    "group": "Stdlib и производительность",
    "id": "m638"
  },
  {
    "topic": "itertools",
    "q": "Что такое groupby требует?",
    "options": [
      "часто предварительной сортировки по ключу",
      "dict",
      "set",
      "async"
    ],
    "answer": 0,
    "explain": "Группирует подряд идущие. Подходит ответ «часто предварительной сортировки по ключу». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m639"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Annotated[int, Ge(0)] идея?",
    "options": [
      "метаданные валидации/инструментов",
      "runtime int subclass",
      "GIL",
      "slots"
    ],
    "answer": 0,
    "explain": "PEP 593 экосистема. Подходит ответ «метаданные валидации/инструментов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m640"
  },
  {
    "topic": "WSGI",
    "q": "Что такое WSGI?",
    "options": [
      "интерфейс sync веб-приложений",
      "async сервер",
      "ORM",
      "шаблонизатор"
    ],
    "answer": 0,
    "explain": "PEP 3333. Подходит ответ «интерфейс sync веб-приложений».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m641"
  },
  {
    "topic": "регулярки",
    "q": "Что такое re.compile полезен когда?",
    "options": [
      "паттерн переиспользуется",
      "один раз",
      "вместо str.find нельзя",
      "для bytes только"
    ],
    "answer": 0,
    "explain": "Компиляция один раз. Подходит ответ «паттерн переиспользуется».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m642"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('a', 3), ('b', 2)]",
      "{'a': 3, 'b': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Подходит ответ «[('a', 3), ('b', 2)]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aaabb').most_common(2))",
    "group": "Collections и itertools",
    "id": "m643"
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(a, b=1, /, c=2, *, d=3): — b?",
    "options": [
      "positional-only с default",
      "keyword-only",
      "varargs",
      "kwargs"
    ],
    "answer": 0,
    "explain": "Смешанная сигнатура. Подходит ответ «positional-only с default».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m644"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: idempotent методы HTTP обычно?",
    "options": [
      "GET PUT DELETE",
      "POST только",
      "PATCH always",
      "CONNECT"
    ],
    "answer": 0,
    "explain": "Семантика HTTP. Подходит ответ «GET PUT DELETE». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m645"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "tmp/x",
      "tmp\\x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Подходит ответ «tmp/x». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('tmp', 'x'))",
    "group": "Stdlib и производительность",
    "id": "m646"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт cycle([1,2])?",
    "options": [
      "бесконечно повторяет",
      "один проход",
      "shuffle",
      "sort"
    ],
    "answer": 0,
    "explain": "Бесконечный итератор. Подходит ответ «бесконечно повторяет». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m647"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "single",
      "ошибка",
      "None",
      "[1]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Подходит ответ «single». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = [1]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m648"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое BackgroundTasks?",
    "options": [
      "работа после ответа",
      "celery cluster",
      "cron",
      "GPU"
    ],
    "answer": 0,
    "explain": "Простые фоновые. Подходит ответ «работа после ответа».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m649"
  },
  {
    "topic": "pathlib",
    "q": "Что такое Path.write_text?",
    "options": [
      "записывает str в файл",
      "bytes only",
      "append always",
      "json"
    ],
    "answer": 0,
    "explain": "Удобный helper. Подходит ответ «записывает str в файл».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m650"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3, 6, 10, 15]",
      "[1, 2, 3, 4, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Подходит ответ «[1, 3, 6, 10, 15]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 6))))",
    "group": "Collections и itertools",
    "id": "m651"
  },
  {
    "topic": "typing",
    "q": "Чем помогает LiteralString?",
    "options": [
      "SQL/shell injection на уровне типов",
      "GIL",
      "медленного str",
      "UTF errors"
    ],
    "answer": 0,
    "explain": "Доверенные строки. Подходит ответ «SQL/shell injection на уровне типов». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m652"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 503 обычно значит?",
    "options": [
      "Unavailable",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "503 — Unavailable. Подходит ответ «Unavailable». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m653"
  },
  {
    "topic": "performance",
    "q": "Что такое интернирование вручную sys.intern?",
    "options": [
      "для повторяющихся str-ключей",
      "для всех объектов",
      "для list",
      "для async"
    ],
    "answer": 0,
    "explain": "Память словарей. Подходит ответ «для повторяющихся str-ключей». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m654"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 3, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Подходит ответ «[1, 3]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [5, 1, 3]))",
    "group": "Collections и itertools",
    "id": "m655"
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(*args, a) — a?",
    "options": [
      "keyword-only",
      "positional",
      "optional auto",
      "variadic"
    ],
    "answer": 0,
    "explain": "После *. Подходит ответ «keyword-only».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m656"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 401 — кратко?",
    "options": [
      "нужна аутентификация",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 401: нужна аутентификация. Подходит ответ «нужна аутентификация». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m657"
  },
  {
    "topic": "pathlib",
    "q": "Что такое Path.glob('**/*.py')?",
    "options": [
      "рекурсивный поиск",
      "только cwd non-recursive always",
      "regex",
      "delete"
    ],
    "answer": 0,
    "explain": "Паттерны путей. Подходит ответ «рекурсивный поиск».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m658"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Islice — ленивый срез. Подходит ответ «[0, 1, 2, 3]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([0, 1, 2, 3, 4, 5], 4)))",
    "group": "Collections и itertools",
    "id": "m659"
  },
  {
    "topic": "typing",
    "q": "В чём разница: TypedDict vs dataclass?",
    "options": [
      "TypedDict для dict-форм, dataclass — объекты",
      "одно и то же",
      "TypedDict runtime class always",
      "dataclass только JSON"
    ],
    "answer": 0,
    "explain": "Разные модели данных. Подходит ответ «TypedDict для dict-форм, dataclass — объекты». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m660"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое UploadFile?",
    "options": [
      "асинхронная работа с upload",
      "только bytes sync read обязателен без api",
      "S3 client",
      "pathlib"
    ],
    "answer": 0,
    "explain": "Starlette files. Подходит ответ «асинхронная работа с upload».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m661"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.gz'",
      "'archive.tar.gz'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "Suffix — последний суффикс (для tar.gz это .gz). Подходит ответ «'.gz'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('archive.tar.gz').suffix)",
    "group": "Stdlib и производительность",
    "id": "m662"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "3",
      "4",
      "0",
      "7"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «3». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 7))",
    "group": "Collections и itertools",
    "id": "m663"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое frozen=True делает?",
    "options": [
      "приблизительно immutable экземпляр",
      "slots",
      "slots+dict",
      "JSON"
    ],
    "answer": 0,
    "explain": "Запрет присваивания полей. Подходит ответ «приблизительно immutable экземпляр».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m664"
  },
  {
    "topic": "DI",
    "q": "Что такое interface segregation в typing?",
    "options": [
      "узкие Protocol вместо жирных ABC",
      "один God Protocol",
      "Any everywhere",
      "dict[str,Any] only"
    ],
    "answer": 0,
    "explain": "ISP. Подходит ответ «узкие Protocol вместо жирных ABC».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m665"
  },
  {
    "topic": "regex",
    "q": "В чём разница: re.search vs re.match?",
    "options": [
      "search — в любом месте; match — с начала строки",
      "одинаково",
      "match быстрее всегда",
      "search только bytes"
    ],
    "answer": 0,
    "explain": "Ещё есть fullmatch. Подходит ответ «search — в любом месте; match — с начала строки».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m666"
  },
  {
    "topic": "dict",
    "q": "Что вернёт merge |= для dict (3.9)?",
    "options": [
      "in-place update",
      "новый dict only",
      "set only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "D |= other. Подходит ответ «in-place update».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m667"
  },
  {
    "topic": "args",
    "q": "Что такое def f(a, /): — a?",
    "options": [
      "positional-only",
      "keyword-only",
      "kwargs",
      "default"
    ],
    "answer": 0,
    "explain": "/ — positional-only (PEP 570). Подходит ответ «positional-only».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m668"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 304 — кратко?",
    "options": [
      "не изменилось / кэш",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 304: не изменилось / кэш. Подходит ответ «не изменилось / кэш». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m669"
  },
  {
    "topic": "hashlib",
    "q": "Что такое hashlib.sha256 нужен для?",
    "options": [
      "криптографического хеша",
      "hash() dict",
      "id()",
      "random"
    ],
    "answer": 0,
    "explain": "Не путать с hash(). Подходит ответ «криптографического хеша».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m670"
  },
  {
    "topic": "collections",
    "q": "Что такое deque rotate?",
    "options": [
      "циклический сдвиг",
      "sort",
      "reverse copy list",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Эффективно с концов. Подходит ответ «циклический сдвиг».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m671"
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "5",
      "no",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": ":= присваивает и использует значение в условии. Подходит ответ «5». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "if (x := 5):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m672"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: Типичная роль `WHERE`?",
    "options": [
      "фильтр строк до группировки",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "WHERE в SQL. Подходит ответ «фильтр строк до группировки». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m673"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: getattr без default на горячем пути?",
    "options": [
      "дороже локальной переменной",
      "быстрее LOAD_FAST",
      "равно global",
      "убирает GIL"
    ],
    "answer": 0,
    "explain": "Кэшируй в локальную. Подходит ответ «дороже локальной переменной». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m674"
  },
  {
    "topic": "itertools",
    "q": "Что выведет list(islice(...))?",
    "options": [
      "[0, 1, 2]",
      "[0,1,2,3,4]",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "Первые 3. Подходит ответ «[0, 1, 2]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import islice, count\nprint(list(islice(count(), 3)))",
    "group": "Collections и itertools",
    "id": "m675"
  },
  {
    "topic": "args",
    "q": "Выбери верный вариант: def f(a, /, b, *, c): — как вызвать верно?",
    "options": [
      "f(1, 2, c=3) или f(1, b=2, c=3)",
      "f(a=1, b=2, c=3)",
      "f(1, 2, 3)",
      "f(c=3, 1, 2)"
    ],
    "answer": 0,
    "explain": "A только позиционно; c только по имени; b — оба способа. Подходит ответ «f(1, 2, c=3) или f(1, b=2, c=3)».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m676"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт ETag / If-None-Match?",
    "options": [
      "кэш-валидация",
      "auth",
      "CORS",
      "TLS"
    ],
    "answer": 0,
    "explain": "Условные запросы. Подходит ответ «кэш-валидация». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m677"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Deepcopy копирует вложенность. Подходит ответ «False». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m678"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "1",
      "9",
      "27"
    ],
    "answer": 0,
    "explain": "P(3,3) = 6. Подходит ответ «6». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 3))))",
    "group": "Collections и itertools",
    "id": "m679"
  },
  {
    "topic": "dataclasses",
    "q": "Зачем нужен field(default_factory=dict)?",
    "options": [
      "новый dict() на каждый экземпляр",
      "общий один dict",
      "запретить поле",
      "только JSON"
    ],
    "answer": 0,
    "explain": "Избегаем общего mutable default. Подходит ответ «новый dict() на каждый экземпляр».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m680"
  },
  {
    "topic": "SQL",
    "q": "Что такое prepared statements?",
    "options": [
      "переиспользование плана + безопасность",
      "ORM only",
      "JSON",
      "миграция"
    ],
    "answer": 0,
    "explain": "Меньше parse/injection. Подходит ответ «переиспользование плана + безопасность». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m681"
  },
  {
    "topic": "import",
    "q": "Что такое sys.path_hooks?",
    "options": [
      "как находятся импорты по path entry",
      "pip",
      "venv activate",
      "sitecustomize only"
    ],
    "answer": 0,
    "explain": "Import machinery. Подходит ответ «как находятся импорты по path entry».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m682"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "1",
      "4",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Подходит ответ «1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nh = [4, 4, 1]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m683"
  },
  {
    "topic": "операторы",
    "q": "Допустим ли синтаксис a := b := 1?",
    "options": [
      "запрещён (SyntaxError)",
      "допустим как a = b = 1",
      "только в if",
      "только 3.12"
    ],
    "answer": 0,
    "explain": "Цепочка walrus так нельзя. Нужно a = b = 1 или (a := (b := 1)). Подходит ответ «запрещён (SyntaxError)».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m684"
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт gzip Content-Encoding?",
    "options": [
      "сжатие тела",
      "шифр",
      "auth",
      "мультилипарт"
    ],
    "answer": 0,
    "explain": "Транспортное сжатие. Подходит ответ «сжатие тела». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m685"
  },
  {
    "topic": "performance",
    "q": "Что выведет код?",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "str"
    ],
    "answer": 0,
    "explain": "Среднее O(1). Подходит ответ «set». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "s = set(range(10000))\nprint(9999 in s)",
    "group": "Stdlib и производительность",
    "id": "m686"
  },
  {
    "topic": "heapq",
    "q": "Что такое merge(*iters)?",
    "options": [
      "слияние sorted-итераторов",
      "sort unsorted",
      "unique",
      "shuffle"
    ],
    "answer": 0,
    "explain": "Как multi-pointer merge. Подходит ответ «слияние sorted-итераторов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m687"
  },
  {
    "topic": "match",
    "q": "Что вернёт case [x, y, *rest] на tuple?",
    "options": [
      "работает для последовательности",
      "только list тип exact",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern. Подходит ответ «работает для последовательности».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m688"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое Depends()?",
    "options": [
      "внедрение зависимостей",
      "SQL join",
      "GIL",
      "template"
    ],
    "answer": 0,
    "explain": "DI в эндпоинтах. Подходит ответ «внедрение зависимостей».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m689"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow копирует верхний уровень. Подходит ответ «True (shallow)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m690"
  },
  {
    "topic": "itertools",
    "q": "Что такое tee(it, n)?",
    "options": [
      "разветвляет итератор (с буфером)",
      "копирует list",
      "shuffle",
      "sort"
    ],
    "answer": 0,
    "explain": "Память растёт, если ветки расходятся. Подходит ответ «разветвляет итератор (с буфером)». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m691"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case 1 | 2 | 3 в Python 3.10+?",
    "options": [
      "or-паттерн",
      "bitwise",
      "ошибка",
      "range"
    ],
    "answer": 0,
    "explain": "Альтернативы. Подходит ответ «or-паттерн».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m692"
  },
  {
    "topic": "HTTP",
    "q": "Что такое HTTPS termination?",
    "options": [
      "TLS часто на proxy/load balancer",
      "только в app forever",
      "DNSSEC",
      "JWT"
    ],
    "answer": 0,
    "explain": "Инфра-паттерн. Подходит ответ «TLS часто на proxy/load balancer». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m693"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: __slots__ + weakref нужен?",
    "options": [
      "явный '__weakref__' в slots",
      "автоматически always",
      "запрещён",
      "только PyPy"
    ],
    "answer": 0,
    "explain": "Иначе нельзя weakref. Подходит ответ «явный '__weakref__' в slots». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m694"
  },
  {
    "topic": "functools",
    "q": "Выбери верный вариант: Сколько уникальных ключей кэша у fib(3) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 4 (0..n)",
      "8",
      "3",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Подходит ответ «примерно 4 (0..n)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m695"
  },
  {
    "topic": "args",
    "q": "Что такое Positional-only полезен для?",
    "options": [
      "стабильного API имён параметров",
      "скорости GIL",
      "async",
      "JSON"
    ],
    "answer": 0,
    "explain": "Можно переименовать внутренне. Подходит ответ «стабильного API имён параметров».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m696"
  },
  {
    "topic": "SQL",
    "q": "Что показывает EXPLAIN?",
    "options": [
      "план запроса",
      "результат rows only",
      "ORM log",
      "миграции"
    ],
    "answer": 0,
    "explain": "Оптимизация SQL. Подходит ответ «план запроса». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m697"
  },
  {
    "topic": "subprocess",
    "q": "Что такое capture_output=True эквивалент?",
    "options": [
      "stdout/err PIPE",
      "DEVNULL",
      "inherit",
      "shell"
    ],
    "answer": 0,
    "explain": "Удобный флаг run. Подходит ответ «stdout/err PIPE».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m698"
  },
  {
    "topic": "collections",
    "q": "Что выведет код?",
    "options": [
      "[('x', 1), ('y', 1)]",
      "{'x': 1, 'y': 1, 'z': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Топ-2 по частоте. Подходит ответ «[('x', 1), ('y', 1)]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('xyz').most_common(2))",
    "group": "Collections и itertools",
    "id": "m699"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое @dataclass генерирует?",
    "options": [
      "__init__, __repr__ и др.",
      "только __slots__",
      "SQL схему",
      "JSON автоматом"
    ],
    "answer": 0,
    "explain": "Шаблон для data-holder. Подходит ответ «__init__, __repr__ и др.».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m700"
  },
  {
    "topic": "SQL",
    "q": "Что такое N+1 проблема?",
    "options": [
      "1 запрос списка + N запросов на связанные сущности",
      "один огромный JOIN всегда bad",
      "только NoSQL",
      "индекс"
    ],
    "answer": 0,
    "explain": "Лечится join/eager load/IN. Подходит ответ «1 запрос списка + N запросов на связанные сущности». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m701"
  },
  {
    "topic": "sqlite",
    "q": "Что такое sqlite3 в stdlib?",
    "options": [
      "встроенная БД в файле/памяти",
      "клиент Postgres",
      "Redis",
      "Mongo"
    ],
    "answer": 0,
    "explain": "Удобно для локального. Подходит ответ «встроенная БД в файле/памяти».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m702"
  },
  {
    "topic": "functools",
    "q": "Что вернёт lru_cache(typed=True)?",
    "options": [
      "различает типы аргументов",
      "отключает кэш",
      "async only",
      "disk cache"
    ],
    "answer": 0,
    "explain": "1 vs 1.0 раздельно. Подходит ответ «различает типы аргументов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m703"
  },
  {
    "topic": "dataclasses",
    "q": "Выбери верный вариант: @dataclass class Point: x: int = 0 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Проблема mutable default; int безопасен. Подходит ответ «нет, int immutable default ок».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m704"
  },
  {
    "topic": "ASGI",
    "q": "Что такое ASGI?",
    "options": [
      "async интерфейс Python веб-приложений",
      "старый CGI",
      "замена TCP",
      "тип list"
    ],
    "answer": 0,
    "explain": "Django/FastAPI/Starlette. Подходит ответ «async интерфейс Python веб-приложений».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m705"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "dict",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "Loads парсит в объекты Python. Подходит ответ «dict». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"x\": [1, 2]}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m706"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 0, 1, 2]",
      "[[1, 2], [0, 1, 2]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые. Подходит ответ «[1, 2, 0, 1, 2]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(3)))))",
    "group": "Collections и itertools",
    "id": "m707"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "99"
    ],
    "answer": 0,
    "explain": "Match/case сопоставляет значение. Подходит ответ «other». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = 99\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m708"
  },
  {
    "topic": "DI",
    "q": "Чем помогает Dependency Injection?",
    "options": [
      "тестируемости и слабой связанности",
      "ускорить GIL",
      "уменьшить RAM магией",
      "заменить типы"
    ],
    "answer": 0,
    "explain": "Явные зависимости. Подходит ответ «тестируемости и слабой связанности».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m709"
  },
  {
    "topic": "struct",
    "q": "Что такое struct.pack упаковывает?",
    "options": [
      "значения в bytes по формату",
      "JSON",
      "pickle",
      "XML"
    ],
    "answer": 0,
    "explain": "Бинарные форматы. Подходит ответ «значения в bytes по формату».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m710"
  },
  {
    "topic": "functools",
    "q": "Что такое wraps копирует?",
    "options": [
      "__module__, __name__, __doc__, …",
      "bytecode",
      "defaults only",
      "GIL"
    ],
    "answer": 0,
    "explain": "Метаданные. Подходит ответ «__module__, __name__, __doc__, …».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m711"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "many",
      "ошибка",
      "None",
      "[1, 2, 3]"
    ],
    "answer": 0,
    "explain": "Паттерны последовательностей в match. Подходит ответ «many». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = [1, 2, 3]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m712"
  },
  {
    "topic": "DI",
    "q": "Выбери верный вариант: ambient context антипаттерн когда?",
    "options": [
      "скрытые глобальные зависимости",
      "явный init",
      "typed ports",
      "tests fakes"
    ],
    "answer": 0,
    "explain": "Невидимые связи. Подходит ответ «скрытые глобальные зависимости».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m713"
  },
  {
    "topic": "subprocess",
    "q": "Что такое DEVNULL?",
    "options": [
      "подавить stdout/stderr",
      "pipe",
      "inherit",
      "capture"
    ],
    "answer": 0,
    "explain": "Subprocess.DEVNULL. Подходит ответ «подавить stdout/stderr».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m714"
  },
  {
    "topic": "heapq",
    "q": "Что такое nsmallest?",
    "options": [
      "k наименьших",
      "полная сортировка обязательна внешне",
      "max heap",
      "unique"
    ],
    "answer": 0,
    "explain": "Симметрично nlargest. Подходит ответ «k наименьших».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m715"
  },
  {
    "topic": "typing",
    "q": "Что вернёт isinstance([1], list[int]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно. Подходит ответ «TypeError (или False в отдельных случаях) — generic alias не для isinstance так».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m716"
  },
  {
    "topic": "DI",
    "q": "Что такое constructor injection?",
    "options": [
      "зависимости через __init__",
      "global import only",
      "monkeypatch prod",
      "env только"
    ],
    "answer": 0,
    "explain": "Тестируемость. Подходит ответ «зависимости через __init__».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m717"
  },
  {
    "topic": "JSON",
    "q": "Выбери верный вариант: json не сериализует напрямую?",
    "options": [
      "set, сложные объекты",
      "dict",
      "list",
      "str"
    ],
    "answer": 0,
    "explain": "Нужен default hook / конвертация. Подходит ответ «set, сложные объекты».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m718"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "4",
      "2",
      "5",
      "?0"
    ],
    "answer": 0,
    "explain": "2^2 = 4. Подходит ответ «4». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=2))))",
    "group": "Collections и itertools",
    "id": "m719"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое replace(obj, **changes)?",
    "options": [
      "новый объект с заменами",
      "мутирует obj",
      "json",
      "slots destroy"
    ],
    "answer": 0,
    "explain": "Dataclasses.replace. Подходит ответ «новый объект с заменами».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m720"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое FastAPI строится вокруг?",
    "options": [
      "type hints + ASGI",
      "только Flask sync",
      "GIL removal",
      "GUI"
    ],
    "answer": 0,
    "explain": "Аннотации, а затем OpenAPI/валидация. Подходит ответ «type hints + ASGI».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m721"
  },
  {
    "topic": "regex",
    "q": "Что такое re.IGNORECASE?",
    "options": [
      "флаг i",
      "multiline",
      "dotall",
      "verbose"
    ],
    "answer": 0,
    "explain": "Регистронезависимо. Подходит ответ «флаг i».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m722"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Накопительная сумма. Подходит ответ «[1, 3]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 3))))",
    "group": "Collections и itertools",
    "id": "m723"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое KW_ONLY sentinel?",
    "options": [
      "поля после — keyword-only",
      "frozen",
      "slots",
      "json"
    ],
    "answer": 0,
    "explain": "Разделитель полей. Подходит ответ «поля после — keyword-only».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m724"
  },
  {
    "topic": "SQL",
    "q": "Выбери верный вариант: SELECT … LIMIT 50 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 50 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. Подходит ответ «набор из N строк без стабильного порядка». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m725"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Deepcopy копирует вложенность. Подходит ответ «False». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m726"
  },
  {
    "topic": "functools",
    "q": "Выбери верный вариант: Сколько уникальных ключей кэша у fib(5) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 6 (0..n)",
      "32",
      "5",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый k от 0..n кэшируется один раз. Подходит ответ «примерно 6 (0..n)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m727"
  },
  {
    "topic": "protocols",
    "q": "Что такое @runtime_checkable ограничен?",
    "options": [
      "наличием методов, не сигнатур глубоко",
      "полной проверкой типов args",
      "скоростью C",
      "ABC ban"
    ],
    "answer": 0,
    "explain": "Не mypy runtime. Подходит ответ «наличием методов, не сигнатур глубоко».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m728"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 502 — кратко?",
    "options": [
      "плохой шлюз",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 502: плохой шлюз. Подходит ответ «плохой шлюз». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m729"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "dict",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "Loads парсит в объекты Python. Подходит ответ «dict». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"ok\": true, \"n\": null}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m730"
  },
  {
    "topic": "itertools",
    "q": "Что такое itertools.chain склеивает?",
    "options": [
      "итерируемые лениво",
      "только list",
      "dict",
      "строки обязательно"
    ],
    "answer": 0,
    "explain": "Последовательная итерация. Подходит ответ «итерируемые лениво». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m731"
  },
  {
    "topic": "enum",
    "q": "Что такое auto() в Enum?",
    "options": [
      "автозначения",
      "random",
      "hash",
      "None"
    ],
    "answer": 0,
    "explain": "Enum.auto. Подходит ответ «автозначения». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m732"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое Depends() нужен для?",
    "options": [
      "внедрения зависимостей (DI) в эндпоинты",
      "SQL only",
      "GIL",
      "замены pydantic"
    ],
    "answer": 0,
    "explain": "Переиспользование auth/db session. Подходит ответ «внедрения зависимостей (DI) в эндпоинты».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m733"
  },
  {
    "topic": "struct",
    "q": "Что такое iter_unpack?",
    "options": [
      "лениво распаковывает буфер",
      "json",
      "pickle",
      "yaml"
    ],
    "answer": 0,
    "explain": "Повторяющийся формат. Подходит ответ «лениво распаковывает буфер».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m734"
  },
  {
    "topic": "collections",
    "q": "Что такое UserList?",
    "options": [
      "обёртка для кастомного list API",
      "быстрее list",
      "tuple",
      "array"
    ],
    "answer": 0,
    "explain": "Наследование удобнее. Подходит ответ «обёртка для кастомного list API».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m735"
  },
  {
    "topic": "dataclasses",
    "q": "Что такое asdict(obj) делает?",
    "options": [
      "рекурсивно в dict",
      "json string",
      "pickle",
      "slots"
    ],
    "answer": 0,
    "explain": "Dataclasses.asdict. Подходит ответ «рекурсивно в dict».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m736"
  },
  {
    "topic": "SQL",
    "q": "Что такое session.rollback в SQLAlchemy?",
    "options": [
      "отменяет транзакцию",
      "drop table",
      "vacuum",
      "commit"
    ],
    "answer": 0,
    "explain": "Откат. Подходит ответ «отменяет транзакцию». SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m737"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.PNG'",
      "'photo.PNG'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "Suffix — последний суффикс (для tar.gz это .gz). Подходит ответ «'.PNG'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('photo.PNG').suffix)",
    "group": "Stdlib и производительность",
    "id": "m738"
  },
  {
    "topic": "functools",
    "q": "Что такое partial(f, 1)(2) эквивалентно?",
    "options": [
      "f(1, 2)",
      "f(2, 1)",
      "f(1)",
      "f()"
    ],
    "answer": 0,
    "explain": "Фиксирует позиционные/keyword аргументы. Подходит ответ «f(1, 2)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m739"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Union[int, str] эквивалент 3.10+?",
    "options": [
      "int | str",
      "int & str",
      "Optional",
      "Any"
    ],
    "answer": 0,
    "explain": "PEP 604. Подходит ответ «int | str». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m740"
  },
  {
    "topic": "FastAPI",
    "q": "Что такое APIRouter?",
    "options": [
      "модульные маршруты",
      "ORM",
      "GIL router",
      "WSGI"
    ],
    "answer": 0,
    "explain": "Композиция приложений. Подходит ответ «модульные маршруты».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m741"
  },
  {
    "topic": "regex",
    "q": "Что такое re.DOTALL?",
    "options": [
      "точка включает \\n",
      "ignorecase",
      "ascii",
      "debug"
    ],
    "answer": 0,
    "explain": "Многострочные матчи. Подходит ответ «точка включает \\n».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m742"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "8",
      "6",
      "3",
      "7"
    ],
    "answer": 0,
    "explain": "2^3 = 8. Подходит ответ «8». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=3))))",
    "group": "Collections и itertools",
    "id": "m743"
  },
  {
    "topic": "dataclasses",
    "q": "Зачем нужен field(default_factory=set)?",
    "options": [
      "новый set() на каждый экземпляр",
      "общий один set",
      "запретить поле",
      "только JSON"
    ],
    "answer": 0,
    "explain": "Избегаем общего mutable default. Подходит ответ «новый set() на каждый экземпляр».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m744"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: Статус 400 — кратко?",
    "options": [
      "ошибка клиента",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 400: ошибка клиента. Подходит ответ «ошибка клиента». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m745"
  },
  {
    "topic": "pathlib",
    "q": "Что получится?",
    "options": [
      "Path('a/b') или a\\b",
      "ошибка",
      "ab",
      "list"
    ],
    "answer": 0,
    "explain": "Оператор /. Подходит ответ «Path('a/b') или a\\b». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import Path\nprint(Path('a') / 'b')",
    "group": "Stdlib и производительность",
    "id": "m746"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "2",
      "0",
      "4",
      "?0"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «2». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 4))",
    "group": "Collections и itertools",
    "id": "m747"
  },
  {
    "topic": "typing",
    "q": "Что вернёт isinstance([1], tuple[int, ...]) в обычном CPython?",
    "options": [
      "TypeError (или False в отдельных случаях) — generic alias не для isinstance так",
      "True всегда",
      "False всегда без ошибки",
      "True только в 3.12+"
    ],
    "answer": 0,
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно. Подходит ответ «TypeError (или False в отдельных случаях) — generic alias не для isinstance так».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m748"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 400 обычно значит?",
    "options": [
      "Bad Request",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "400 — Bad Request. Подходит ответ «Bad Request». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m749"
  },
  {
    "topic": "import",
    "q": "Что такое pkgutil.iter_modules?",
    "options": [
      "перечисляет модули пакета",
      "ставит pip",
      "reload",
      "compile"
    ],
    "answer": 0,
    "explain": "Плагины/дискавери. Подходит ответ «перечисляет модули пакета».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m750"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "7",
      "0",
      "7",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Partial фиксирует первый аргумент, а затем f(0, 7). Подходит ответ «7». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 0)(7))",
    "group": "Collections и itertools",
    "id": "m751"
  },
  {
    "topic": "args",
    "q": "Что такое def f(*, a): — a?",
    "options": [
      "keyword-only",
      "positional-only",
      "optional",
      "variadic"
    ],
    "answer": 0,
    "explain": "* отделяет keyword-only. Подходит ответ «keyword-only».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m752"
  },
  {
    "topic": "SQL",
    "q": "Уровень изоляции SERIALIZABLE — что верно?",
    "options": [
      "разные аномалии чтения/записи; знай свою СУБД",
      "все уровни идентичны в PostgreSQL",
      "только про DDL",
      "отключает индексы"
    ],
    "answer": 0,
    "explain": "Изоляции отличаются допустимыми аномалиями. Подходит ответ «разные аномалии чтения/записи; знай свою СУБД».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m753"
  },
  {
    "topic": "weakref",
    "q": "Что такое getweakrefcount?",
    "options": [
      "число слабых ссылок",
      "refcount сильных",
      "size",
      "hash"
    ],
    "answer": 0,
    "explain": "Интроспекция. Подходит ответ «число слабых ссылок».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m754"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "3",
      "2",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Partial фиксирует первый аргумент, а затем f(1, 2). Подходит ответ «3». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 1)(2))",
    "group": "Collections и itertools",
    "id": "m755"
  },
  {
    "topic": "dataclasses",
    "q": "Выбери верный вариант: InitVar не попадает в?",
    "options": [
      "repr/eq хранимые поля как обычное поле",
      "init",
      "аннотации",
      "класс"
    ],
    "answer": 0,
    "explain": "Только аргумент инициализации. Подходит ответ «repr/eq хранимые поля как обычное поле».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m756"
  },
  {
    "topic": "HTTP",
    "q": "Выбери верный вариант: HTTP 201 обычно значит?",
    "options": [
      "Created",
      "всегда успех",
      "только редирект",
      "WebSocket"
    ],
    "answer": 0,
    "explain": "201 — Created. Подходит ответ «Created». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m757"
  },
  {
    "topic": "struct",
    "q": "Что такое endianness в format?",
    "options": [
      "< little > big",
      "только native",
      "UTF",
      "JSON"
    ],
    "answer": 0,
    "explain": "Struct format chars. Подходит ответ «< little > big».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m758"
  },
  {
    "topic": "functools",
    "q": "Что вернёт cache (3.9) = lru_cache без?",
    "options": [
      "maxsize limit (безлимит)",
      "typed",
      "ключ",
      "hash"
    ],
    "answer": 0,
    "explain": "Functools.cache. Подходит ответ «maxsize limit (безлимит)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m759"
  },
  {
    "topic": "dataclasses",
    "q": "Выбери верный вариант: compare=False исключает поле из?",
    "options": [
      "сравнений",
      "init",
      "repr always",
      "slots"
    ],
    "answer": 0,
    "explain": "Order/eq. Подходит ответ «сравнений».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m760"
  },
  {
    "topic": "DI",
    "q": "В чём разница: service locator vs injection?",
    "options": [
      "injection явнее и тестируемее",
      "locator всегда лучше",
      "одно и то же",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "Явные зависимости. Подходит ответ «injection явнее и тестируемее».",
    "kind": "single",
    "group": "Веб и API",
    "id": "m761"
  },
  {
    "topic": "JSON",
    "q": "В чём разница: json.loads vs load?",
    "options": [
      "строка vs file object",
      "нет разницы",
      "bytes vs path",
      "pickle"
    ],
    "answer": 0,
    "explain": "S = string. Подходит ответ «строка vs file object».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m762"
  },
  {
    "topic": "collections",
    "q": "Что делает deque.rotate(2) на 5 элементах?",
    "options": [
      "цикл сдвиг на 2 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Rotate — циклический сдвиг. Подходит ответ «цикл сдвиг на 2 вправо (отриц. — влево)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m763"
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict inheritance?",
    "options": [
      "можно расширять/переопределять ключи по правилам",
      "запрещено",
      "как dataclass frozen auto",
      "Enum"
    ],
    "answer": 0,
    "explain": "Структуры словарей. Подходит ответ «можно расширять/переопределять ключи по правилам». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m764"
  },
  {
    "topic": "subprocess",
    "q": "Что такое capture_output=True в run?",
    "options": [
      "собирает stdout/stderr",
      "shell=True",
      "async",
      "ignore"
    ],
    "answer": 0,
    "explain": "Subprocess.run. Подходит ответ «собирает stdout/stderr».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m765"
  },
  {
    "topic": "dict",
    "q": "Что вернёт dict.fromkeys(['a','b'], []) — опасность?",
    "options": [
      "один и тот же list на все ключи",
      "KeyError",
      "нет опасности",
      "глубокая копия"
    ],
    "answer": 0,
    "explain": "Value не копируется. Подходит ответ «один и тот же list на все ключи».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m766"
  },
  {
    "topic": "dataclasses",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "ошибка shared",
      "None"
    ],
    "answer": 0,
    "explain": "Default_factory. Подходит ответ «[1]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from dataclasses import dataclass, field\n@dataclass\nclass A:\n    xs: list = field(default_factory=list)\na, b = A(), A()\na.xs.append(1)\nprint(b.xs)",
    "group": "Typing и dataclasses",
    "id": "m767"
  },
  {
    "topic": "GC",
    "q": "Что такое gc.disable()?",
    "options": [
      "отключает cyclic GC",
      "отключает refcount",
      "GIL off",
      "async off"
    ],
    "answer": 0,
    "explain": "Refcount остаётся. Подходит ответ «отключает cyclic GC». Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m768"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=None (безлимит)) хранит?",
    "options": [
      "неограниченно (осторожно с RAM)",
      "ровно 0 записей",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Подходит ответ «неограниченно (осторожно с RAM)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m769"
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict total=False?",
    "options": [
      "ключи опциональны",
      "запрещены",
      "только str values",
      "frozen"
    ],
    "answer": 0,
    "explain": "Частичные словари. Подходит ответ «ключи опциональны». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m770"
  },
  {
    "topic": "регулярки",
    "q": "Что такое (?=...)?",
    "options": [
      "positive lookahead",
      "lookbehind",
      "capture",
      "non-greedy"
    ],
    "answer": 0,
    "explain": "Просмотр вперёд. Подходит ответ «positive lookahead».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m771"
  },
  {
    "topic": "functools",
    "q": "Что такое cached_property?",
    "options": [
      "кэш на экземпляре",
      "lru глобальный",
      "classmethod",
      "slots"
    ],
    "answer": 0,
    "explain": "Пересчёт один раз. Подходит ответ «кэш на экземпляре».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m772"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "one",
      "ошибка",
      "None",
      "1"
    ],
    "answer": 0,
    "explain": "Match/case сопоставляет значение. Подходит ответ «one». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m773"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "list",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "Loads парсит в объекты Python. Подходит ответ «list». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('[1, 2, 3]')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m774"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Islice — ленивый срез. Подходит ответ «[1, 2, 3]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([1, 2, 3, 4, 5], 3)))",
    "group": "Collections и itertools",
    "id": "m775"
  },
  {
    "topic": "typing",
    "q": "Что такое Required/NotRequired в TypedDict?",
    "options": [
      "тонкая настройка обязательности ключей",
      "валидация pydantic",
      "SQL",
      "GIL"
    ],
    "answer": 0,
    "explain": "PEP 655. Подходит ответ «тонкая настройка обязательности ключей». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m776"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.txt'",
      "'a.txt'",
      "ошибка",
      "''"
    ],
    "answer": 0,
    "explain": "Suffix — последний суффикс (для tar.gz это .gz). Подходит ответ «'.txt'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('a.txt').suffix)",
    "group": "Stdlib и производительность",
    "id": "m777"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=None)?",
    "options": [
      "безлимитный кэш (осторожно с памятью)",
      "без кэша",
      "TTL cache",
      "disk cache"
    ],
    "answer": 0,
    "explain": "Эквивалент unbounded memoization. Подходит ответ «безлимитный кэш (осторожно с памятью)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m778"
  },
  {
    "topic": "typing",
    "q": "Что означает Optional[X]?",
    "options": [
      "X | None",
      "X обязателен",
      "any",
      "Union пустой"
    ],
    "answer": 0,
    "explain": "Синоним X | None. Подходит ответ «X | None». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m779"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow копирует верхний уровень. Подходит ответ «True (shallow)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m780"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache не для?",
    "options": [
      "нехешируемых аргументов",
      "int",
      "str",
      "frozenset"
    ],
    "answer": 0,
    "explain": "Ключи кэша hashable. Подходит ответ «нехешируемых аргументов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m781"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case [x, *rest] в Python 3.10+?",
    "options": [
      "матчит последовательность",
      "только list тип строго runtime class",
      "dict",
      "set"
    ],
    "answer": 0,
    "explain": "Sequence pattern. Подходит ответ «матчит последовательность».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m782"
  },
  {
    "topic": "is",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Кэш малых int. Подходит ответ «True». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "print(256 is 256)",
    "group": "Stdlib и производительность",
    "id": "m783"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=2) хранит?",
    "options": [
      "до 2 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Подходит ответ «до 2 результатов вызовов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m784"
  },
  {
    "topic": "typing",
    "q": "Что такое get_type_hints?",
    "options": [
      "резолвит аннотации",
      "runtime enforce",
      "mypy daemon",
      "compile"
    ],
    "answer": 0,
    "explain": "Typing / inspect. Подходит ответ «резолвит аннотации». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m785"
  },
  {
    "topic": "JSON",
    "q": "Что такое object_hook?",
    "options": [
      "постпроцесс dict при loads",
      "dumps only",
      "indent",
      "sort"
    ],
    "answer": 0,
    "explain": "Восстановление типов. Подходит ответ «постпроцесс dict при loads».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m786"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(1, 2), (2, 2), (3, 1)]",
      "[1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Подходит ответ «[(1, 2), (2, 2), (3, 1)]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 1, 2, 2, 3])])",
    "group": "Collections и itertools",
    "id": "m787"
  },
  {
    "topic": "args",
    "q": "Как вызвать f?",
    "options": [
      "f(a=1)",
      "f(1)",
      "оба",
      "никак"
    ],
    "answer": 0,
    "explain": "Keyword-only после *. Подходит ответ «f(a=1)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "def f(*, a):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m788"
  },
  {
    "topic": "GC",
    "q": "Что такое Сборщик циклических ссылок?",
    "options": [
      "gc модуль / cyclic GC",
      "только refcount",
      "GIL",
      "swap"
    ],
    "answer": 0,
    "explain": "Refcount + periodic cycle detection. Подходит ответ «gc модуль / cyclic GC». Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m789"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код?",
    "options": [
      "[1, 2]",
      "[1, 2, 7]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Два наименьших. Подходит ответ «[1, 2]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [9, 2, 7, 1]))",
    "group": "Collections и itertools",
    "id": "m790"
  },
  {
    "topic": "match",
    "q": "Что означает паттерн match case Point(x=0, y=0): при наличии __match_args__/dataclass в Python 3.10+?",
    "options": [
      "positional/keyword patterns",
      "только dict",
      "regex",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Class pattern. Подходит ответ «positional/keyword patterns».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m791"
  },
  {
    "topic": "pathlib",
    "q": "Что такое Path.home()?",
    "options": [
      "домашняя директория",
      "cwd",
      "tmp",
      "root"
    ],
    "answer": 0,
    "explain": "Кроссплатформенно. Подходит ответ «домашняя директория».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m792"
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict(list)['k'].append(1)?",
    "options": [
      "создаёт list автоматически",
      "KeyError",
      "None append error",
      "dict"
    ],
    "answer": 0,
    "explain": "Factory. Подходит ответ «создаёт list автоматически».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m793"
  },
  {
    "topic": "typing",
    "q": "Что вернёт Never (3.11)?",
    "options": [
      "низший тип, недостижимость",
      "Any",
      "object",
      "None"
    ],
    "answer": 0,
    "explain": "Bottom type. Подходит ответ «низший тип, недостижимость». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m794"
  },
  {
    "topic": "memoryview",
    "q": "Что такое memoryview нужен для?",
    "options": [
      "работы со срезами bytes без копирования",
      "GUI",
      "JSON",
      "async sleep"
    ],
    "answer": 0,
    "explain": "Буферный протокол. Подходит ответ «работы со срезами bytes без копирования».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m795"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт batched (3.12)?",
    "options": [
      "чанки по n",
      "shuffle",
      "sort",
      "unique"
    ],
    "answer": 0,
    "explain": "Группировка элементов. Подходит ответ «чанки по n». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m796"
  },
  {
    "topic": "match",
    "q": "Что означает case _ :?",
    "options": [
      "wildcard / default",
      "ошибку",
      "None only",
      "ellipsis object"
    ],
    "answer": 0,
    "explain": "Шаблон по умолчанию. Подходит ответ «wildcard / default».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m797"
  },
  {
    "topic": "copy",
    "q": "В чём разница: copy.copy vs deepcopy?",
    "options": [
      "shallow копирует верх, nested — ссылки; deep — рекурсивно",
      "синонимы",
      "copy всегда deep",
      "deepcopy только list"
    ],
    "answer": 0,
    "explain": "Для вложенных мутабельных нужен deepcopy. Подходит ответ «shallow копирует верх, nested — ссылки; deep — рекурсивно».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m798"
  },
  {
    "topic": "functools",
    "q": "Выбери верный вариант: cached_property не thread-safe из коробки идеально?",
    "options": [
      "да, нюансы гонок",
      "полностью safe всегда",
      "async only safe",
      "process safe"
    ],
    "answer": 0,
    "explain": "Документируй модель. Подходит ответ «да, нюансы гонок».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m799"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "False",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Isinstance с абстрактными/builtin типами. Подходит ответ «False». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "print(isinstance([1], dict))",
    "group": "Typing и dataclasses",
    "id": "m800"
  },
  {
    "topic": "struct",
    "q": "Что такое native size alignment @?",
    "options": [
      "зависит от платформы",
      "всегда packed",
      "network always",
      "UTF"
    ],
    "answer": 0,
    "explain": "Формат @ vs =. Подходит ответ «зависит от платформы».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m801"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=8) хранит?",
    "options": [
      "до 8 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Подходит ответ «до 8 результатов вызовов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m802"
  },
  {
    "topic": "typing",
    "q": "Что проверяет cast не?",
    "options": [
      "да, no-op",
      "валидирует",
      "конвертирует",
      "бросок"
    ],
    "answer": 0,
    "explain": "Только для checker. Подходит ответ «да, no-op». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m803"
  },
  {
    "topic": "tempfile",
    "q": "Что такое gettempdir()?",
    "options": [
      "каталог временных файлов",
      "home",
      "cwd",
      "root"
    ],
    "answer": 0,
    "explain": "Платформенный tmp. Подходит ответ «каталог временных файлов».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m804"
  },
  {
    "topic": "itertools",
    "q": "Что такое repeat(x, 3)?",
    "options": [
      "x x x",
      "бесконечно всегда",
      "ошибка",
      "shuffle x"
    ],
    "answer": 0,
    "explain": "Повтор. Подходит ответ «x x x». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m805"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт slots=True (3.10+) у dataclass?",
    "options": [
      "генерирует __slots__",
      "frozen",
      "kw_only",
      "JSON"
    ],
    "answer": 0,
    "explain": "Экономия памяти. Подходит ответ «генерирует __slots__».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m806"
  },
  {
    "topic": "import",
    "q": "Что такое importlib.util.find_spec?",
    "options": [
      "ищет спецификацию модуля",
      "exec module",
      "pip show",
      "venv"
    ],
    "answer": 0,
    "explain": "Проверка наличия. Подходит ответ «ищет спецификацию модуля».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m807"
  },
  {
    "topic": "functools",
    "q": "Что такое partialmethod?",
    "options": [
      "partial для методов",
      "classmethod",
      "property",
      "cache"
    ],
    "answer": 0,
    "explain": "В классе. Подходит ответ «partial для методов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m808"
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "zero",
      "ошибка",
      "None",
      "0"
    ],
    "answer": 0,
    "explain": "Match/case сопоставляет значение. Подходит ответ «zero». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "x = 0\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m809"
  },
  {
    "topic": "GC",
    "q": "Что такое gc.get_referrers?",
    "options": [
      "кто ссылается на объект",
      "refcount exact только",
      "disk refs",
      "HTTP"
    ],
    "answer": 0,
    "explain": "Отладка утечек. Подходит ответ «кто ссылается на объект». Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m810"
  },
  {
    "topic": "collections",
    "q": "Что делает deque.rotate(3) на 6 элементах?",
    "options": [
      "цикл сдвиг на 3 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Rotate — циклический сдвиг. Подходит ответ «цикл сдвиг на 3 вправо (отриц. — влево)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m811"
  },
  {
    "topic": "walrus",
    "q": "Что такое := запрещён в?",
    "options": [
      "некоторых позиций (напр. лямбда без скобок нюансы)",
      "везде в if",
      "comprehension полностью",
      "функциях"
    ],
    "answer": 0,
    "explain": "Есть синтаксические ограничения. Подходит ответ «некоторых позиций (напр. лямбда без скобок нюансы)».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m812"
  },
  {
    "topic": "pathlib",
    "q": "Что такое expanduser()?",
    "options": [
      "раскрывает ~",
      "env $VAR всегда полностью как shell",
      "symlink resolve",
      "cwd"
    ],
    "answer": 0,
    "explain": "Домашний путь. Подходит ответ «раскрывает ~».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m813"
  },
  {
    "topic": "functools",
    "q": "Выбери верный вариант: reduce без initial на пустом?",
    "options": [
      "TypeError",
      "None",
      "0",
      "[]"
    ],
    "answer": 0,
    "explain": "Нужен initializer. Подходит ответ «TypeError».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m814"
  },
  {
    "topic": "typing",
    "q": "Что такое list[int] в runtime (3.9+)?",
    "options": [
      "generic alias; isinstance ограниченно",
      "точный runtime gate всегда",
      "удаляется",
      "только mypy"
    ],
    "answer": 0,
    "explain": "Аннотации не проверяются CPython сам по себе. Подходит ответ «generic alias; isinstance ограниченно».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m815"
  },
  {
    "topic": "subprocess",
    "q": "Что такое check=True в run?",
    "options": [
      "бросит CalledProcessError при ненулевом коде",
      "игнор код",
      "shell",
      "timeout"
    ],
    "answer": 0,
    "explain": "Строгая проверка статуса. Подходит ответ «бросит CalledProcessError при ненулевом коде».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m816"
  },
  {
    "topic": "array",
    "q": "Что такое array('i') хранит?",
    "options": [
      "signed int компактно",
      "произвольные объекты",
      "str",
      "dict"
    ],
    "answer": 0,
    "explain": "Типизированный массив. Подходит ответ «signed int компактно».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m817"
  },
  {
    "topic": "typing",
    "q": "Что выведет код?",
    "options": [
      "True",
      "False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Isinstance с абстрактными/builtin типами. Подходит ответ «True». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "code": "print(isinstance((1,), tuple))",
    "group": "Typing и dataclasses",
    "id": "m818"
  },
  {
    "topic": "secrets",
    "q": "Выбери верный вариант: secrets модуль лучше random для?",
    "options": [
      "токенов/криптографии",
      "shuffle колоды в игре ok всегда",
      "math sim",
      "sort"
    ],
    "answer": 0,
    "explain": "Криптостойкость. Подходит ответ «токенов/криптографии».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m819"
  },
  {
    "topic": "collections",
    "q": "Что такое OrderedDict.move_to_end?",
    "options": [
      "LRU-подобные структуры",
      "sort",
      "hash rebuild",
      "json"
    ],
    "answer": 0,
    "explain": "Явный порядок. Подходит ответ «LRU-подобные структуры».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m820"
  },
  {
    "topic": "dataclasses",
    "q": "Выбери верный вариант: @dataclass class Cell: x: int = -1 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Проблема mutable default; int безопасен. Подходит ответ «нет, int immutable default ок».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m821"
  },
  {
    "topic": "memoryview",
    "q": "Что такое cast('I')?",
    "options": [
      "переинтерпретация буфера",
      "копия list",
      "json",
      "encode"
    ],
    "answer": 0,
    "explain": "Буферный протокол. Подходит ответ «переинтерпретация буфера».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m822"
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter('aab')['a']?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Подсчёт элементов. Подходит ответ «2».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m823"
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт kw_only=True (3.10)?",
    "options": [
      "поля только keyword",
      "frozen",
      "slots",
      "order"
    ],
    "answer": 0,
    "explain": "Keyword-only fields. Подходит ответ «поля только keyword».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m824"
  },
  {
    "topic": "регулярки",
    "q": "Что такое группы (?P<name>…)?",
    "options": [
      "именованные группы",
      "lookahead",
      "flags",
      "atomic"
    ],
    "answer": 0,
    "explain": "Читаемый extract. Подходит ответ «именованные группы».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m825"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "2",
      "0",
      "3",
      "5"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «2». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 5))",
    "group": "Collections и itertools",
    "id": "m826"
  },
  {
    "topic": "args",
    "q": "Что вернёт Keyword-only после *?",
    "options": [
      "обязательно по имени",
      "можно позиционно",
      "запрещены defaults",
      "только kwargs dict"
    ],
    "answer": 0,
    "explain": "Def f(*, x). Подходит ответ «обязательно по имени».",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m827"
  },
  {
    "topic": "subprocess",
    "q": "В чём риск shell=True?",
    "options": [
      "инъекции через строку",
      "только slow",
      "безопаснее list",
      "нет"
    ],
    "answer": 0,
    "explain": "Prefer argv list. Подходит ответ «инъекции через строку».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m828"
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "1",
      "9",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify h[0] — минимум (для min-heap). Подходит ответ «1». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import heapq\nh = [9, 2, 7, 1]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m829"
  },
  {
    "topic": "enum",
    "q": "Что такое auto() значения?",
    "options": [
      "по правилам Enum/Flag",
      "random uuid",
      "hash id",
      "None"
    ],
    "answer": 0,
    "explain": "Инкремент обычно. Подходит ответ «по правилам Enum/Flag». Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m830"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "x/y/z/w",
      "x/y/z/w/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Подходит ответ «x/y/z/w». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('x', 'y', 'z', 'w'))",
    "group": "Stdlib и производительность",
    "id": "m831"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(5, 3)]",
      "[5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Подходит ответ «[(5, 3)]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([5, 5, 5])])",
    "group": "Collections и itertools",
    "id": "m832"
  },
  {
    "topic": "typing",
    "q": "Что означает Literal['a','b']?",
    "options": [
      "только эти значения",
      "любой str",
      "Enum автоматом",
      "bytes"
    ],
    "answer": 0,
    "explain": "Буквальные типы. Подходит ответ «только эти значения». Аннотации типов — подсказки для анализаторов и IDE; в рантайме Python их обычно не принуждает.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m833"
  },
  {
    "topic": "регулярки",
    "q": "Выбери верный вариант: re.findall(r'\\d+', 'a12b3')?",
    "options": [
      "['12', '3']",
      "['1','2','3']",
      "['a12b3']",
      "[]"
    ],
    "answer": 0,
    "explain": "Все группы цифр подряд. Подходит ответ «['12', '3']».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m834"
  },
  {
    "topic": "heapq",
    "q": "Что реализует heapq?",
    "options": [
      "бинарную кучу на list",
      "AVL",
      "B-tree",
      "deque"
    ],
    "answer": 0,
    "explain": "Приоритетная очередь. Подходит ответ «бинарную кучу на list».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m835"
  },
  {
    "topic": "пакеты",
    "q": "Что такое __init__.py historically?",
    "options": [
      "делает каталог пакетом",
      "обязателен всегда в 3.3+",
      "запускает pip",
      "кэш"
    ],
    "answer": 0,
    "explain": "Namespace packages могут без него. Подходит ответ «делает каталог пакетом».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m836"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт pairwise (3.10)?",
    "options": [
      "(a,b),(b,c),…",
      "chunks",
      "product",
      "cycle"
    ],
    "answer": 0,
    "explain": "Соседние пары. Подходит ответ «(a,b),(b,c),…». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m837"
  },
  {
    "topic": "weakref",
    "q": "Что такое ReferenceType callback?",
    "options": [
      "при смерти объекта",
      "при создании",
      "при hash",
      "при print"
    ],
    "answer": 0,
    "explain": "Слабые колбэки. Подходит ответ «при смерти объекта».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m838"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(1, 1), (2, 1), (1, 1)]",
      "[1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Подходит ответ «[(1, 1), (2, 1), (1, 1)]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 2, 1])])",
    "group": "Collections и itertools",
    "id": "m839"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "None",
      "{}",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Невалидный JSON, а затем JSONDecodeError. Подходит ответ «JSONDecodeError». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.loads('{'))",
    "group": "Stdlib и производительность",
    "id": "m840"
  },
  {
    "topic": "bisect",
    "q": "Что такое bisect модуль для?",
    "options": [
      "бинарного поиска/вставки в sorted list",
      "быстрой сортировки",
      "hash",
      "GIL"
    ],
    "answer": 0,
    "explain": "Поддержание порядка. Подходит ответ «бинарного поиска/вставки в sorted list».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m841"
  },
  {
    "topic": "sort",
    "q": "Что такое key= должен быть?",
    "options": [
      "вызываемым, вызывается раз на элемент (декоратор)",
      "cmp как в Py2 обязателен",
      "async",
      "hash"
    ],
    "answer": 0,
    "explain": "Schwartzian transform внутри. Подходит ответ «вызываемым, вызывается раз на элемент (декоратор)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m842"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "из кэша, без print work",
      "снова work",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Lru_cache. Подходит ответ «из кэша, без print work». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import lru_cache\n@lru_cache\ndef heavy(x):\n    print('work')\n    return x*x\nheavy(2)\nheavy(2)",
    "group": "Collections и itertools",
    "id": "m843"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'a'",
      "'stack'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "Search — первое вхождение. Подходит ответ «'a'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import re\nm = re.search('[aeiou]', 'stack')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m844"
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "0",
      "1",
      "4",
      "?0"
    ],
    "answer": 0,
    "explain": "Индекс вставки слева для сохранения порядка. Подходит ответ «0». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 1))",
    "group": "Collections и itertools",
    "id": "m845"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "home/user/docs",
      "home/user/docs/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Подходит ответ «home/user/docs». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('home', 'user', 'docs'))",
    "group": "Stdlib и производительность",
    "id": "m846"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[10, 20]",
      "[10, 20, 30]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Islice — ленивый срез. Подходит ответ «[10, 20]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([10, 20, 30, 40], 2)))",
    "group": "Collections и itertools",
    "id": "m847"
  },
  {
    "topic": "import",
    "q": "Выбери верный вариант: circular import — проблема когда?",
    "options": [
      "модули импортируют друг друга на top-level",
      "есть venv",
      "много функций",
      "typing"
    ],
    "answer": 0,
    "explain": "Лечится локальным import / рефакторингом. Подходит ответ «модули импортируют друг друга на top-level».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m848"
  },
  {
    "topic": "collections",
    "q": "Выбери верный вариант: OrderedDict всё ещё нужен после 3.7?",
    "options": [
      "для move_to_end / equality по порядку и явного API",
      "нет никогда",
      "только PyPy",
      "для set"
    ],
    "answer": 0,
    "explain": "Специфичные методы. Подходит ответ «для move_to_end / equality по порядку и явного API».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m849"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "usr/bin/python",
      "usr\\bin\\python",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Склейка частей пути. Подходит ответ «usr/bin/python». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('usr', 'bin', 'python'))",
    "group": "Stdlib и производительность",
    "id": "m850"
  },
  {
    "topic": "functools",
    "q": "Что такое partial(f, 1) делает?",
    "options": [
      "новую функцию с зафиксированным аргументом",
      "вызов f",
      "копию кода f",
      "декоратор класса"
    ],
    "answer": 0,
    "explain": "Частичное применение. Подходит ответ «новую функцию с зафиксированным аргументом».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m851"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'12'",
      "'ab12cd'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "Search — первое вхождение. Подходит ответ «'12'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import re\nm = re.search('\\\\d+', 'ab12cd')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m852"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "8",
      "6",
      "2",
      "0"
    ],
    "answer": 0,
    "explain": "Свёртка произведения. Подходит ответ «8». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [2, 2, 2]))",
    "group": "Collections и itertools",
    "id": "m853"
  },
  {
    "topic": "import",
    "q": "Что позволяет zipimport?",
    "options": [
      "импорт из zip",
      "только wheel build",
      "pip download",
      "venv"
    ],
    "answer": 0,
    "explain": "Path entry. Подходит ответ «импорт из zip».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m854"
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache(maxsize=1) хранит?",
    "options": [
      "до 1 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Кэш в памяти процесса. Подходит ответ «до 1 результатов вызовов».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m855"
  },
  {
    "topic": "pickle",
    "q": "Что такое protocol=5 полезен для?",
    "options": [
      "out-of-band буферов (bytes large)",
      "JSON",
      "YAML",
      "XML"
    ],
    "answer": 0,
    "explain": "PEP 574. Подходит ответ «out-of-band буферов (bytes large)».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m856"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "7",
      "2",
      "3"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Подходит ответ «6». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [2, 2, 2]))",
    "group": "Collections и itertools",
    "id": "m857"
  },
  {
    "topic": "copy",
    "q": "Выбери верный вариант: __deepcopy__ можно определить для?",
    "options": [
      "кастомной глубокой копии",
      "только pickle",
      "json",
      "GIL"
    ],
    "answer": 0,
    "explain": "Протокол copy. Подходит ответ «кастомной глубокой копии».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m858"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "16",
      "8",
      "4",
      "9"
    ],
    "answer": 0,
    "explain": "2^4 = 16. Подходит ответ «16». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=4))))",
    "group": "Collections и itertools",
    "id": "m859"
  },
  {
    "topic": "import",
    "q": "Выбери верный вариант: circular import часто лечат?",
    "options": [
      "локальным import / разнесением",
      "удалением типов",
      "GIL",
      "eval"
    ],
    "answer": 0,
    "explain": "Архитектура модулей. Подходит ответ «локальным import / разнесением».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m860"
  },
  {
    "topic": "collections",
    "q": "Выбери верный вариант: namedtuple удобен тем, что?",
    "options": [
      "immutable + доступ по имени поля",
      "мутабельный dict",
      "замена list",
      "async queue"
    ],
    "answer": 0,
    "explain": "Лёгкие записи без класса вручную. Подходит ответ «immutable + доступ по имени поля».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m861"
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path.read_text()?",
    "options": [
      "читает файл как str",
      "bytes only",
      "json",
      "lines iterator always"
    ],
    "answer": 0,
    "explain": "Удобный helper. Подходит ответ «читает файл как str».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m862"
  },
  {
    "topic": "heapq",
    "q": "Что вернёт heappush / heappop?",
    "options": [
      "мин-куча",
      "макс-куча по умолчанию",
      "sort stable extra",
      "deque"
    ],
    "answer": 0,
    "explain": "Наименьший первый. Подходит ответ «мин-куча».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m863"
  },
  {
    "topic": "tempfile",
    "q": "Что такое TemporaryDirectory?",
    "options": [
      "автоочистка каталога",
      "вечный /tmp",
      "только файл",
      "S3"
    ],
    "answer": 0,
    "explain": "Контекстный менеджер. Подходит ответ «автоочистка каталога».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m864"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "10",
      "25",
      "120"
    ],
    "answer": 0,
    "explain": "C(5,2) = 10. Подходит ответ «10». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(5), 2))))",
    "group": "Collections и itertools",
    "id": "m865"
  },
  {
    "topic": "subprocess",
    "q": "Что такое Popen.communicate?",
    "options": [
      "обмен с процессом + wait",
      "nonblocking forever без wait",
      "только kill",
      "shell"
    ],
    "answer": 0,
    "explain": "Избежать deadlock pipe. Подходит ответ «обмен с процессом + wait».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m866"
  },
  {
    "topic": "heapq",
    "q": "Что вернёт heapify in-place?",
    "options": [
      "линейно строит кучу",
      "O(n log n) sort copy",
      "shuffle",
      "unique"
    ],
    "answer": 0,
    "explain": "Эффективная инициализация. Подходит ответ «линейно строит кучу».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m867"
  },
  {
    "topic": "weakref",
    "q": "Что такое WeakValueDictionary хранит?",
    "options": [
      "слабые ссылки на значения",
      "сильные на ключи и значения",
      "только int",
      "файлы"
    ],
    "answer": 0,
    "explain": "GC может удалить value. Подходит ответ «слабые ссылки на значения».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m868"
  },
  {
    "topic": "collections",
    "q": "Что такое ChainMap полезен для?",
    "options": [
      "слоя переопределений mapping",
      "SQL join",
      "async gather",
      "heap"
    ],
    "answer": 0,
    "explain": "Просмотр нескольких dict. Подходит ответ «слоя переопределений mapping».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m869"
  },
  {
    "topic": "pathlib",
    "q": "Что даёт Path('a') / 'b'?",
    "options": [
      "Path('a/b')",
      "ошибку",
      "str 'a/b'",
      "list"
    ],
    "answer": 0,
    "explain": "Оператор / для Path. Подходит ответ «Path('a/b')».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m870"
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict без factory при []?",
    "options": [
      "TypeError/нужен factory",
      "создаёт None",
      "KeyError как dict",
      "0"
    ],
    "answer": 0,
    "explain": "Обязателен default_factory. Подходит ответ «TypeError/нужен factory».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m871"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "ошибка",
      "[0]"
    ],
    "answer": 0,
    "explain": "Shallow: внутренний list общий. Подходит ответ «[1]». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\na[0].append(1)\nprint(b[0])",
    "group": "Stdlib и производительность",
    "id": "m872"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(product('ab', repeat=2))?",
    "options": [
      "[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]",
      "['ab']",
      "['a', 'b']",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Декартово произведение. Подходит ответ «[('a', 'a'), ('a', 'b'), ('b', 'a'), ('b', 'b')]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m873"
  },
  {
    "topic": "performance",
    "q": "В чём разница: Генератор vs list для большого потока?",
    "options": [
      "генератор экономит память",
      "list всегда быстрее и лучше",
      "без разницы",
      "GIL снимает"
    ],
    "answer": 0,
    "explain": "Ленивость. Подходит ответ «генератор экономит память». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m874"
  },
  {
    "topic": "collections",
    "q": "Что такое namedtuple?",
    "options": [
      "легковесный immutable с именами полей",
      "dict",
      "dataclass",
      "list"
    ],
    "answer": 0,
    "explain": "Tuple + атрибуты. Подходит ответ «легковесный immutable с именами полей».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m875"
  },
  {
    "topic": "weakref",
    "q": "Что такое proxy не поднимает?",
    "options": [
      "refcount как сильная ссылка",
      "исключения",
      "GC",
      "typing"
    ],
    "answer": 0,
    "explain": "Слабая прокси. Подходит ответ «refcount как сильная ссылка».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m876"
  },
  {
    "topic": "itertools",
    "q": "Что выведет list(itertools.chain([1], [2, 3]))?",
    "options": [
      "[1, 2, 3]",
      "[[1],[2,3]]",
      "ошибка",
      "[1]"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые подряд. Подходит ответ «[1, 2, 3]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m877"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "42",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "Dumps, а затем строка JSON. Подходит ответ «42». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.dumps(42))",
    "group": "Stdlib и производительность",
    "id": "m878"
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(combinations('abc', 2))?",
    "options": [
      "[('a', 'b'), ('a', 'c'), ('b', 'c')]",
      "все перестановки",
      "[('a', 'a'), …]",
      "['abc']"
    ],
    "answer": 0,
    "explain": "Сочетания без повтора. Подходит ответ «[('a', 'b'), ('a', 'c'), ('b', 'c')]». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m879"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "None",
      "'42a'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "Search — первое вхождение. Подходит ответ «None». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42a')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m880"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "25",
      "5",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Partial фиксирует первый аргумент, а затем f(5, 5). Подходит ответ «10». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 5)(5))",
    "group": "Collections и itertools",
    "id": "m881"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow копирует верхний уровень. Подходит ответ «True (shallow)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m882"
  },
  {
    "topic": "collections",
    "q": "Что делает deque.rotate(4) на 7 элементах?",
    "options": [
      "цикл сдвиг на 4 вправо (отриц. — влево)",
      "сортирует",
      "удаляет k",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Rotate — циклический сдвиг. Подходит ответ «цикл сдвиг на 4 вправо (отриц. — влево)».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m883"
  },
  {
    "topic": "JSON",
    "q": "Что такое ensure_ascii=False?",
    "options": [
      "сохраняет unicode как есть",
      "только ascii escapes always",
      "bytes",
      "pickle"
    ],
    "answer": 0,
    "explain": "Читаемый русский в JSON. Подходит ответ «сохраняет unicode как есть».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m884"
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "7",
      "8",
      "5",
      "3"
    ],
    "answer": 0,
    "explain": "Свёртка суммы. Подходит ответ «7». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [5, 1, 1]))",
    "group": "Collections и itertools",
    "id": "m885"
  },
  {
    "topic": "subprocess",
    "q": "Что вернёт text=True (universal_newlines)?",
    "options": [
      "str вместо bytes",
      "shell",
      "check",
      "timeout"
    ],
    "answer": 0,
    "explain": "Декодирование. Подходит ответ «str вместо bytes».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m886"
  },
  {
    "topic": "collections",
    "q": "Выбери верный вариант: ChainMap пишет по умолчанию в?",
    "options": [
      "первый mapping",
      "последний",
      "все",
      "новый"
    ],
    "answer": 0,
    "explain": "Locals поверх. Подходит ответ «первый mapping».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m887"
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "a/b",
      "a/b/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Path склеивает части. Подходит ответ «a/b». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('a', 'b'))",
    "group": "Stdlib и производительность",
    "id": "m888"
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatchmethod?",
    "options": [
      "диспетчеризация методов по типу",
      "только функции модуля",
      "async",
      "classmethod ban"
    ],
    "answer": 0,
    "explain": "PEP 3124-ish API. Подходит ответ «диспетчеризация методов по типу».",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m889"
  },
  {
    "topic": "hashlib",
    "q": "Что вернёт blake2 / sha3?",
    "options": [
      "современные хеш-функции",
      "crc32 crypto-safe",
      "siphash dict only",
      "md5 recommended password"
    ],
    "answer": 0,
    "explain": "Не путать с паролями — там KDF. Подходит ответ «современные хеш-функции».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m890"
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "12",
      "6",
      "8",
      "16"
    ],
    "answer": 0,
    "explain": "P(4,2) = 12. Подходит ответ «12». itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти. Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(4), 2))))",
    "group": "Collections и itertools",
    "id": "m891"
  },
  {
    "topic": "bytes",
    "q": "Что такое encode/decode связывает?",
    "options": [
      "str ↔ bytes",
      "list ↔ tuple",
      "int ↔ float",
      "json ↔ dict"
    ],
    "answer": 0,
    "explain": "Текстовые кодировки. Подходит ответ «str ↔ bytes».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m892"
  },
  {
    "topic": "JSON",
    "q": "Что будет с set?",
    "options": [
      "TypeError без default",
      "станет list",
      "OK",
      "None"
    ],
    "answer": 0,
    "explain": "Set не JSON. Подходит ответ «TypeError без default». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\njson.dumps({1, 2})",
    "group": "Stdlib и производительность",
    "id": "m893"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: Конкатенация много str в цикле?",
    "options": [
      "лучше join",
      "+= всегда ок",
      "f-string в цикле идеал",
      "bytearray обязателен"
    ],
    "answer": 0,
    "explain": "''.join(parts) эффективнее. Подходит ответ «лучше join». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m894"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow копирует верхний уровень. Подходит ответ «True (shallow)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m895"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "{\"x\": [1, 2]}",
      "ошибка",
      "None",
      "?0"
    ],
    "answer": 0,
    "explain": "Dumps, а затем строка JSON. Подходит ответ «{\"x\": [1, 2]}». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'x': [1, 2]}))",
    "group": "Stdlib и производительность",
    "id": "m896"
  },
  {
    "topic": "weakref",
    "q": "Что такое WeakKeyDictionary ключи?",
    "options": [
      "слабые, должны быть hashable weakrefable",
      "сильные list",
      "int only always immortal",
      "str intern mandatory"
    ],
    "answer": 0,
    "explain": "Осторожно с ключами. Подходит ответ «слабые, должны быть hashable weakrefable».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m897"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "dict",
      "str",
      "JSON",
      "tuple"
    ],
    "answer": 0,
    "explain": "Loads парсит в объекты Python. Подходит ответ «dict». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"a\": 1}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m898"
  },
  {
    "topic": "regex",
    "q": "Что такое \\b граница слова?",
    "options": [
      "word boundary",
      "backspace",
      "begin",
      "byte"
    ],
    "answer": 0,
    "explain": "Частый паттерн. Подходит ответ «word boundary».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m899"
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'42'",
      "'42'",
      "ошибка",
      "[]"
    ],
    "answer": 0,
    "explain": "Search — первое вхождение. Подходит ответ «'42'». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m900"
  },
  {
    "topic": "JSON",
    "q": "Что такое default= в dumps?",
    "options": [
      "сериализатор неизвестных типов",
      "indent",
      "encoding",
      "sort_keys"
    ],
    "answer": 0,
    "explain": "Хук для set/datetime и т.п. Подходит ответ «сериализатор неизвестных типов».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m901"
  },
  {
    "topic": "performance",
    "q": "Выбери верный вариант: много мелких объектов — смотри?",
    "options": [
      "аллокации/GC, slots, interning осторожно",
      "только pep8",
      "только async",
      "только typed"
    ],
    "answer": 0,
    "explain": "Профилируй память. Подходит ответ «аллокации/GC, slots, interning осторожно». Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m902"
  },
  {
    "topic": "sort",
    "q": "Что вернёт key=str.lower?",
    "options": [
      "case-insensitive sort",
      "numeric",
      "by len default",
      "random"
    ],
    "answer": 0,
    "explain": "Нормализация ключа. Подходит ответ «case-insensitive sort».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m903"
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "{\"ok\": true, \"n\": null}",
      "{\"ok\": True, \"n\": None}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Dumps, а затем строка JSON. Подходит ответ «{\"ok\": true, \"n\": null}». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'ok': True, 'n': None}))",
    "group": "Stdlib и производительность",
    "id": "m904"
  },
  {
    "topic": "tempfile",
    "q": "Что такое SpooledTemporaryFile?",
    "options": [
      "сначала RAM, потом диск",
      "только диск",
      "только RAM forever",
      "S3"
    ],
    "answer": 0,
    "explain": "Порог max_size. Подходит ответ «сначала RAM, потом диск».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m905"
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow копирует верхний уровень. Подходит ответ «True (shallow)». Сверь ответ с тем, что реально делает выражение в коде: типы операндов и порядок операций часто важнее «интуиции».",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m906"
  },
  {
    "topic": "JSON",
    "q": "Что такое JSONEncoder subclass?",
    "options": [
      "кастом default",
      "loads only",
      "schema",
      "yaml"
    ],
    "answer": 0,
    "explain": "Расширение dumps. Подходит ответ «кастом default».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m907"
  },
  {
    "topic": "import",
    "q": "Что такое MetaPathFinder?",
    "options": [
      "поиск модулей на meta_path",
      "path entry only",
      "pip",
      "wheel"
    ],
    "answer": 0,
    "explain": "PEP 451. Подходит ответ «поиск модулей на meta_path».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m908"
  }
];
