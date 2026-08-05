window.QUESTIONS_MIDDLE = [
  {
    "topic": "enum",
    "q": "Зачем нужен enum.Enum?",
    "options": [
      "именованных констант",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "GIL flags"
    ],
    "answer": 0,
    "explain": "Перечисления — Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m1",
    "fixed": true
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
    "explain": "Код вычисляется в [0, 1, 2, 3]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(4)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m2",
    "fixed": true
  },
  {
    "topic": "итераторы",
    "q": "Что выведет код?",
    "options": [
      "1",
      "StopIteration сразу",
      "утверждение про другой уровень стека",
      "[1,2]"
    ],
    "answer": 0,
    "explain": "1. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "print(next(iter([1, 2])))",
    "group": "Генераторы и итераторы",
    "id": "m3",
    "fixed": true
  },
  {
    "topic": "ASGI",
    "q": "Что такое Starlette/FastAPI?",
    "options": [
      "ASGI-фреймворки",
      "только WSGI",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "ASGI-фреймворки. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m4",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m5",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что верно про ExitStack.enter_context нужен когда?",
    "options": [
      "динамическое число CM",
      "только один with",
      "вместо try",
      "async only"
    ],
    "answer": 0,
    "explain": "Динамическое число CM. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m6",
    "fixed": true
  },
  {
    "topic": "логирование",
    "q": "Что такое Предпочтительнее print для libs?",
    "options": [
      "logging",
      "sys.stdout.write только",
      "утверждение про другой уровень стека",
      "warnings всегда"
    ],
    "answer": 0,
    "explain": "Модуль logging — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m7",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что даёт объекту метод __call__?",
    "options": [
      "вызываемым",
      "итерируемым",
      "контекстом",
      "дескриптором"
    ],
    "answer": 0,
    "explain": "Вызываемым. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m8",
    "fixed": true
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
    "explain": "Результат выражения — поддерживается. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m9",
    "fixed": true
  },
  {
    "topic": "is",
    "q": "Что означает: Малые int кэшируются; обычно (256 is 256)?",
    "options": [
      "True",
      "False",
      "ошибка",
      "зависит от OS только"
    ],
    "answer": 0,
    "explain": "True. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m10",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что верно про nogil / free-threading статус?",
    "options": [
      "эксперименты/опции новых версий",
      "уже default везде без оговорок",
      "отменён навсегда",
      "только Jython"
    ],
    "answer": 0,
    "explain": "Следи за релизом CPython — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m11",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Почему set.intersection быстрее вложенных циклов для больших множеств?",
    "options": [
      "внутренняя оптимизация по меньшему множеству",
      "утверждение про другой уровень стека",
      "multithreading list",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Внутренняя оптимизация по меньшему множеству. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m12",
    "fixed": true
  },
  {
    "topic": "cohesion",
    "q": "Какой стандартный модуль Python отвечает за utils.py на 3000 строк с HTTP, SQL и PDF — проблема?",
    "options": [
      "низкой связности / смешения ответственностей",
      "утверждение про другой уровень стека",
      "только типов",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Низкой связности / смешения ответственностей. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m13",
    "fixed": true
  },
  {
    "topic": "git",
    "q": "Что верно про git merge --squash делает?",
    "options": [
      "один коммит из всех изменений ветки без merge-коммита в истории feature",
      "удаляет ветку",
      "rebase автоматом",
      "force push"
    ],
    "answer": 0,
    "explain": "Один коммит из всех изменений ветки без merge-коммита в истории feature. Подумай, что произойдёт с remote и историей у коллег.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m14",
    "fixed": true
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
    "explain": "Код вычисляется в [1, 2]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [9, 2, 7, 1]))",
    "group": "Collections и itertools",
    "id": "m15",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что вернёт case {'x': v} матчит?",
    "options": [
      "mapping с ключом x",
      "только dict subclass строго без Protocol",
      "list",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — mapping с ключом x. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m16",
    "fixed": true
  },
  {
    "topic": "closures",
    "q": "Что такое Замыкание?",
    "options": [
      "функция с enclosing переменными",
      "декоратор",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Функция с enclosing переменными. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m17",
    "fixed": true
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
    "explain": "Протокол генератора — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m18",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 403 — кратко?",
    "options": [
      "запрещено",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 403: запрещено — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m19",
    "fixed": true
  },
  {
    "topic": "asyncio",
    "q": "Что такое Future?",
    "options": [
      "ожидаемый результат асинхронной операции",
      "блокирующий time.sleep внутри корутины",
      "новый OS-поток на каждый await",
      "создание нового процесса на каждый await"
    ],
    "answer": 0,
    "explain": "Ожидаемый результат асинхронной операции. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m20",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что вызывает closing(obj)?",
    "options": [
      "obj.close() на выходе",
      "del obj",
      "obj.end()",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Obj.close() на выходе. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m21",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что делает pytest.mark.parametrize?",
    "options": [
      "тест на набор входных данных",
      "утверждение про другой уровень стека",
      "процессы",
      "coverage магически"
    ],
    "answer": 0,
    "explain": "Тест на набор входных данных. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m22",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что определяет метод __eq__?",
    "options": [
      "сравнение на равенство через ==",
      "порядок сортировки через <",
      "хеш объекта для dict/set",
      "строковое представление для print"
    ],
    "answer": 0,
    "explain": "__eq__ задаёт поведение == (и косвенно !=). Для сортировки нужен __lt__ и компания; для dict/set — согласованный __hash__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m23",
    "fixed": true
  },
  {
    "topic": "ABC",
    "q": "Можно ли создать экземпляр ABC, если у него нет abstractmethod?",
    "options": [
      "да — без абстрактных методов ABC уже обычный конкретный класс",
      "нет — любой ABC всегда нельзя инстанцировать",
      "только через eval",
      "только в PyPy"
    ],
    "answer": 0,
    "explain": "ABCMeta запрещает инстанцирование, пока есть нереализованные @abstractmethod. Если абстрактных методов нет — экземпляр создать можно.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m24",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Код падает с ошибкой (JSONDecodeError). Смотри типы аргументов и допустимые операции.",
    "kind": "single",
    "code": "import json\nprint(json.loads('[1, 2,'))",
    "group": "Stdlib и производительность",
    "id": "m25",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что выведет код?",
    "options": [
      "multiprocessing / native",
      "больше threading",
      "time.sleep",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "GIL мешает CPU threads — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "code": "# cpu_bound()\n# threading vs multiprocessing?",
    "group": "Потоки, процессы, GIL",
    "id": "m26",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что верно про DFS на графе можно через?",
    "options": [
      "рекурсию или явный stack",
      "только queue",
      "только sorted",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Рекурсию или явный stack. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m27",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что такое Premature optimization?",
    "options": [
      "оптимизация до измерения узкого места",
      "профилирование",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Оптимизация до измерения узкого места. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m28",
    "fixed": true
  },
  {
    "topic": "git",
    "q": "Что верно про git reflog полезен чтобы?",
    "options": [
      "найти «потерянные» коммиты после reset",
      "удалить remote",
      "форматировать JSON",
      "запустить pytest"
    ],
    "answer": 0,
    "explain": "Журнал перемещений HEAD — Коммиты после reset». Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на общей ветки.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m29",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что такое nlargest(k, it)?",
    "options": [
      "k наибольших эффективно",
      "полная сортировка always обязательна видимо",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "K наибольших эффективно. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m30",
    "fixed": true
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
    "explain": "Подсказка типов, на runtime не проверяет сама. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m31",
    "fixed": true
  },
  {
    "topic": "декораторы",
    "q": "Что делает декоратор @f над def g?",
    "options": [
      "g = f(g)",
      "f = g(f)",
      "g вызывается сразу",
      "синтаксический сахар import"
    ],
    "answer": 0,
    "explain": "Декоратор оборачивает функцию. Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m32",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что верно про yield в функции делает её?",
    "options": [
      "генератором",
      "корутиной всегда",
      "классом",
      "итератором списка"
    ],
    "answer": 0,
    "explain": "Generator function — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m33",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `LIMIT`?",
    "options": [
      "ограничить число строк",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "LIMIT в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m34",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m35",
    "fixed": true
  },
  {
    "topic": "исключения",
    "q": "Что верно про except Exception не ловит?",
    "options": [
      "BaseException вроде KeyboardInterrupt/SystemExit",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "RuntimeError"
    ],
    "answer": 0,
    "explain": "BaseException вроде KeyboardInterrupt/SystemExit. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m36",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что вернёт pytest-asyncio mode?",
    "options": [
      "запуск async тестов",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "Twisted only"
    ],
    "answer": 0,
    "explain": "Результат выражения — запуск async тестов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m37",
    "fixed": true
  },
  {
    "topic": "staticmethod",
    "q": "Что верно про staticmethod отличается тем, что?",
    "options": [
      "нет авто-self/cls — обычная функция в классе",
      "всегда виртуальный",
      "только в ABC",
      "быстрее C"
    ],
    "answer": 0,
    "explain": "Нет авто-self/cls — обычная функция в классе. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m38",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(issubclass(bool, int))",
    "group": "ООП продвинутый",
    "id": "m39",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про локальная переменная в горячем цикле?",
    "options": [
      "часто быстрее атрибута/global",
      "медленнее всегда",
      "запрещена",
      "GIL off"
    ],
    "answer": 0,
    "explain": "LOAD_FAST — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m40",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что верно про numpy отпускает GIL в тяжёлых C-циклах часто?",
    "options": [
      "да, многие операции",
      "никогда",
      "только print",
      "только на Windows"
    ],
    "answer": 0,
    "explain": "C-extensions pattern — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m41",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что верно про functools.lru_cache ускоряет за счёт?",
    "options": [
      "мемоизации результатов чистой функции",
      "GIL off",
      "утверждение про другой уровень стека",
      "multiprocessing"
    ],
    "answer": 0,
    "explain": "Мемоизации результатов чистой функции. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m42",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "В чём суть паттерна Observer?",
    "options": [
      "подписка наблюдателей на изменения субъекта",
      "один поток на CPU",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Подписка наблюдателей на изменения субъекта. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m43",
    "fixed": true
  },
  {
    "topic": "git",
    "q": "Что верно про Merge conflict возникает когда?",
    "options": [
      "Git не может автоматически слить изменения одних строк",
      "два remote",
      "нет .gitignore",
      "большой файл"
    ],
    "answer": 0,
    "explain": "Git не может автоматически слить изменения одних строк. Подумай, что произойдёт с remote и историей у коллег.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m44",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "список пар (элемент, счёт) топ-2",
      "только ключи",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — список пар (элемент, счёт) топ-2. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m45",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что возвращает dataclasses.fields()?",
    "options": [
      "кортеж объектов Field с описанием полей",
      "только словарь текущих значений экземпляра",
      "JSON-строку со схемой",
      "сырые __annotations__ без метаданных Field"
    ],
    "answer": 0,
    "explain": "`fields(class_or_instance)` даёт кортеж `Field`: имя, тип, default, metadata и т.д. Это интроспекция схемы dataclass, а не `asdict` со значениями.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m46",
    "fixed": true
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код?",
    "options": [
      "wrap",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Без functools.wraps у обёртки остаётся имя wrap, не f. Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "code": "def deco(fn):\n    def wrap():\n        return fn()\n    return wrap\n@deco\ndef f():\n    pass\nprint(f.__name__)",
    "group": "Декораторы и замыкания",
    "id": "m47",
    "fixed": true
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
    "explain": "List поглощает genexp — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m48",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 502 — кратко?",
    "options": [
      "плохой шлюз",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 502: плохой шлюз — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m49",
    "fixed": true
  },
  {
    "topic": "asyncio",
    "q": "Что нужно для await?",
    "options": [
      "async def",
      "обычный def",
      "блокирующий time.sleep внутри корутины",
      "новый OS-поток на каждый await"
    ],
    "answer": 0,
    "explain": "Код вычисляется в async def. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "async def main():\n    await asyncio.sleep(0)",
    "group": "Asyncio",
    "id": "m50",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "Что в e?",
    "options": [
      "сообщение 'x'",
      "тип only",
      "traceback only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Код вычисляется в сообщение 'x'. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "try:\n    raise ValueError('x')\nexcept ValueError as e:\n    print(e)",
    "group": "Исключения и контекст",
    "id": "m51",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Зачем нужен parametrize?",
    "options": [
      "набора вход и ожидаемый результат",
      "фикстур только",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Набора вход и ожидаемый результат. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m52",
    "fixed": true
  },
  {
    "topic": "classmethod",
    "q": "Что такое альтернатива constructor через?",
    "options": [
      "@classmethod from_…",
      "staticmethod only",
      "утверждение про другой уровень стека",
      "metaclasses обязателен"
    ],
    "answer": 0,
    "explain": "@classmethod from_…. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m53",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Что такое classmethod получает?",
    "options": [
      "класс (cls), не экземпляр",
      "только self",
      "утверждение про другой уровень стека",
      "метакласс всегда"
    ],
    "answer": 0,
    "explain": "Класс (cls), не экземпляр. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m54",
    "fixed": true
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
    "explain": "Код вычисляется в {\"ok\": true, \"n\": null}. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'ok': True, 'n': None}))",
    "group": "Stdlib и производительность",
    "id": "m55",
    "fixed": true
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
    "explain": "Сериализует объекты. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m56",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что означает: Сложность dict.keys() итерации по n ключам?",
    "options": [
      "O(n)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "O(n). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m57",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что такое Composition over inheritance?",
    "options": [
      "собирать поведение из объектов, а не только наследовать",
      "никогда не использовать классы",
      "только множественное наследование",
      "запрет delegate"
    ],
    "answer": 0,
    "explain": "Собирать поведение из объектов, а не только наследовать. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m58",
    "fixed": true
  },
  {
    "topic": "git",
    "q": "Что верно про git bisect применяют для?",
    "options": [
      "поиска коммита, внесшего баг",
      "удаления веток",
      "форматирования",
      "CI config"
    ],
    "answer": 0,
    "explain": "Бинарный поиск по истории — Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на общей ветки.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m59",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "4",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "C(4,3) = 4 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 3))))",
    "group": "Collections и itertools",
    "id": "m60",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict описывает?",
    "options": [
      "словари с известными ключами/типами",
      "обязательная проверка типов на каждом вызове в CPython",
      "ускорение байткода аннотациями",
      "замена исключений кодами возврата"
    ],
    "answer": 0,
    "explain": "Словари с известными ключами/типами. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m61",
    "fixed": true
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
    "explain": "() нужны, если декоратор-фабрика. Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m62",
    "fixed": true
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
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [10, 20, 30])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m63",
    "fixed": true
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
    "explain": "Меньше аномалий, больше конфликтов. SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m64",
    "fixed": true
  },
  {
    "topic": "async",
    "q": "Зачем нужен async for?",
    "options": [
      "async-итераторов",
      "обычных list",
      "утверждение про другой уровень стека",
      "multiprocessing"
    ],
    "answer": 0,
    "explain": "Async-итераторов. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m65",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое nullcontext?",
    "options": [
      "пустой CM-заглушка",
      "suppress all",
      "file open",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Пустой CM-заглушка. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m66",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что верно про test discovery в pytest по умолчанию ищет?",
    "options": [
      "файлы test_*.py и функции test_*",
      "только TestCase классы",
      "main.py",
      "setup.py"
    ],
    "answer": 0,
    "explain": "Файлы test_*.py и функции test_*. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m67",
    "fixed": true
  },
  {
    "topic": "property",
    "q": "Что верно про setter может менять тип хранимого?",
    "options": [
      "да, на твоей логике",
      "нет языком запрещено",
      "только int",
      "только str"
    ],
    "answer": 0,
    "explain": "Да, на твоей логике. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m68",
    "fixed": true
  },
  {
    "topic": "ABC",
    "q": "Зачем нужен __subclasshook__ у ABC?",
    "options": [
      "кастом isinstance без register",
      "MRO rewrite",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Кастом isinstance без register. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m69",
    "fixed": true
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
    "explain": "Не строй логику на is для str. Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m70",
    "fixed": true
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
    "id": "m71",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что означает: Два указателя (two pointers) на отсортированном массиве дают?",
    "options": [
      "O(n) вместо O(n²) для пар суммы",
      "O(1) память всегда для sort",
      "только для строк",
      "только рекурсия"
    ],
    "answer": 0,
    "explain": "O(n) вместо O(n²) для пар суммы. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m72",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Класс Car наследует Engine, Wheels, Radio вместо «имеет» их — что нарушено?",
    "options": [
      "разумную композицию",
      "только PEP 8",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Разумную композицию. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m73",
    "fixed": true
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
    "explain": "Чистка истории перед PR — Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на общей ветки.",
    "kind": "single",
    "group": "Инструменты и стиль",
    "id": "m74",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "0",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "0. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 1))",
    "group": "Collections и itertools",
    "id": "m75",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что ограничивает TypeVar(bound=...)?",
    "options": [
      "верхнюю границу допустимых типов",
      "только литералы",
      "длину списка",
      "это ускорение байткода в runtime"
    ],
    "answer": 0,
    "explain": "Верхнюю границу допустимых типов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m76",
    "fixed": true
  },
  {
    "topic": "декораторы",
    "q": "Каков порядок применения @a @b def f:?",
    "options": [
      "f = a(b(f))",
      "f = b(a(f))",
      "параллельно",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Ближний декоратор применяется первым. Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m77",
    "fixed": true
  },
  {
    "topic": "listcomp",
    "q": "Что верно про Вложенный for в listcomp порядок?",
    "options": [
      "как вложенные for слева направо",
      "справа налево",
      "параллельно",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Как вложенные for слева направо. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m78",
    "fixed": true
  },
  {
    "topic": "ASGI",
    "q": "Что такое lifespan protocol?",
    "options": [
      "startup/shutdown приложения",
      "только websocket",
      "WSGI sync",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Startup/shutdown приложения. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m79",
    "fixed": true
  },
  {
    "topic": "asyncio",
    "q": "Что верно про wait_for(aw, timeout) при таймауте?",
    "options": [
      "cancels и TimeoutError",
      "блокирующий time.sleep внутри корутины",
      "убивает process",
      "возвращает None"
    ],
    "answer": 0,
    "explain": "Cancels и TimeoutError. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m80",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что делает contextlib.redirect_stdout?",
    "options": [
      "временно подменяет sys.stdout на другой поток",
      "настраивает logging.handlers",
      "запускает subprocess",
      "работает только с pathlib.Path"
    ],
    "answer": 0,
    "explain": "Redirect_stdout(new_target) на время with перенаправляет print/stdout. Удобно тестировать CLI. Это не logging и не subprocess.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m81",
    "fixed": true
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
    "explain": "Централизация — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m82",
    "fixed": true
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
    "explain": "Str для пользователя, repr для отладки. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m83",
    "fixed": true
  },
  {
    "topic": "ABC",
    "q": "Что делает ABC.register()?",
    "options": [
      "виртуальное подклассство без наследования",
      "создаёт файл",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Виртуальное подклассство без наследования. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m84",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что делает Path.resolve()?",
    "options": [
      "абсолютный путь + symlink resolve",
      "только str",
      "удаляет файл",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Абсолютный путь + symlink resolve. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m85",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Что верно про RLock отличается тем что?",
    "options": [
      "реентерабельный",
      "быстрее всегда",
      "для процессов",
      "async only"
    ],
    "answer": 0,
    "explain": "Реентерабельный. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m86",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что выведет код?",
    "options": [
      "5",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "5. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "print(max([1, 5, 3]))",
    "group": "Алгоритмы и структуры данных",
    "id": "m87",
    "fixed": true
  },
  {
    "topic": "Zen",
    "q": "Что означает: «There should be one obvious way to do it» близко к?",
    "options": [
      "KISS и ясному стилю",
      "10 способам сделать одно",
      "отказу от stdlib",
      "только ООП"
    ],
    "answer": 0,
    "explain": "KISS и ясному стилю. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m88",
    "fixed": true
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
    "explain": "Декартово произведение — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m89",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Делят ли экземпляры @dataclass Point поле `x: int = 0`?",
    "options": [
      "нет — immutable default для int безопасен, у каждого экземпляра своё значение",
      "да — как с default [] у list",
      "это SyntaxError",
      "работает только с frozen=True"
    ],
    "answer": 0,
    "explain": "Проблемный shared default — мутабельный (`list`, `dict`). У `int = 0` каждый экземпляр получает своё значение поля; это не общий список на класс.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m90",
    "fixed": true
  },
  {
    "topic": "замыкания",
    "q": "Как починить late binding в цикле?",
    "options": [
      "lambda i=i: i  (default аргумент)",
      "только global",
      "утверждение про другой уровень стека",
      "использовать list обязательно"
    ],
    "answer": 0,
    "explain": "Default фиксирует значение на каждой итерации. Lambda i=i: i (default аргумент). lambda i=i: i (default аргумент).",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m91",
    "fixed": true
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
    "explain": "Результат != sentinel. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m92",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `OFFSET`?",
    "options": [
      "пропустить N строк",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "OFFSET в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m93",
    "fixed": true
  },
  {
    "topic": "asyncio",
    "q": "Что верно про Shield отмены не отменяет?",
    "options": [
      "внутренний awaitable сразу снаружи",
      "KeyboardInterrupt OS",
      "process kill",
      "MemoryError"
    ],
    "answer": 0,
    "explain": "Внутренний awaitable сразу снаружи. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m94",
    "fixed": true
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
    "explain": "Можно вложить / или один with a, b. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m95",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Для чего в pytest фикстуры capsys/capfd?",
    "options": [
      "перехватить stdout/stderr внутри теста",
      "создать временные файлы",
      "поднять HTTP-сервер",
      "заморозить системное время"
    ],
    "answer": 0,
    "explain": "`capsys` / `capfd` ловят то, что тест (и тестируемый код) пишет в stdout/stderr. Удобно проверять CLI-вывод. Для файлов — `tmp_path`, для времени — freeze/mock.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m96",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что обслуживает метод __contains__?",
    "options": [
      "оператор in / not in для объекта",
      "только хеширование для dict",
      "сравнение на равенство ==",
      "создание итератора for"
    ],
    "answer": 0,
    "explain": "__contains__ реализует проверку `x in obj`. Если метода нет, Python может перебрать объект через итерацию. Это не __eq__ и не __hash__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m97",
    "fixed": true
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
    "explain": "Корень иерархии — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m98",
    "fixed": true
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
    "explain": "Результат выражения — в stdlib re ограничено; смотри сторонние. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m99",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что верно про PyPy GIL тоже есть, но?",
    "options": [
      "другой runtime/оптимизации",
      "GIL нет никогда",
      "одинаков бит-в-бит",
      "только Windows"
    ],
    "answer": 0,
    "explain": "Не переноси ожидания 1:1 — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m100",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что означает: Сортировка встроенным sorted() — какой алгоритм в CPython?",
    "options": [
      "Timsort (адаптивный merge/insertion)",
      "quicksort всегда",
      "bubble sort",
      "radix только"
    ],
    "answer": 0,
    "explain": "Timsort (адаптивный merge/insertion). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m101",
    "fixed": true
  },
  {
    "topic": "Zen",
    "q": "Что верно про «Explicit is better than implicit»?",
    "options": [
      "явный код лучше скрытой магии",
      "больше глобальных переменных",
      "меньше типов",
      "только list comprehensions"
    ],
    "answer": 0,
    "explain": "Явный код лучше скрытой магии. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m102",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что верно про defaultdict(int) при отсутствии ключа?",
    "options": [
      "создаёт 0",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Создаёт 0. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m103",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что такое Enum functional API?",
    "options": [
      "Enum('Color', 'R G B')",
      "только class syntax",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Динамическое создание — Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m104",
    "fixed": true
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
    "explain": "Присваивать enclosing переменной. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m105",
    "fixed": true
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
    "explain": "Результат выражения — [0, 2, 4]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m106",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт HTTP/2 multiplexing?",
    "options": [
      "много стримов на соединении",
      "только один request",
      "ошибка",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Меньше head-of-line на уровне HTTP/1. В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m107",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m108",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует TypeError?",
    "options": [
      "Exception",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "Exception. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m109",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что такое fixture в pytest?",
    "options": [
      "подготовка данных/ресурсов",
      "утверждение про другой уровень стека",
      "мок только",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Подготовка данных/ресурсов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m110",
    "fixed": true
  },
  {
    "topic": "property",
    "q": "Что вернёт obj.__dict__ у slots-only?",
    "options": [
      "часто отсутствует",
      "всегда есть",
      "всегда list",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — часто отсутствует. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m111",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "3",
      "ошибка",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "3. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "class C:\n    def __init__(self):\n        self._x = 3\n    @property\n    def x(self):\n        return self._x\nprint(C().x)",
    "group": "ООП продвинутый",
    "id": "m112",
    "fixed": true
  },
  {
    "topic": "sort",
    "q": "Что такое Сортировка в Python?",
    "options": [
      "стабильная (Timsort)",
      "утверждение про другой уровень стека",
      "quicksort гарантирован",
      "только числа"
    ],
    "answer": 0,
    "explain": "Стабильная (Timsort). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m113",
    "fixed": true
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
    "explain": "Результат выражения — Windows/macOS spawn. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m114",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что верно про BFS на графе в Python обычно с?",
    "options": [
      "deque и visited set",
      "list.pop(0) только",
      "heapq только",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Deque и visited set. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m115",
    "fixed": true
  },
  {
    "topic": "KISS",
    "q": "Что такое KISS в Python часто?",
    "options": [
      "прямолинейный код вместо магии",
      "всегда метаклассы",
      "только C-расширения",
      "отказ от функций"
    ],
    "answer": 0,
    "explain": "Прямолинейный код вместо магии. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m116",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict(list): d['k'].append(1) — если ключа не было?",
    "options": [
      "создаст [] и append",
      "утверждение про другой уровень стека",
      "NoneType error",
      "игнор"
    ],
    "answer": 0,
    "explain": "Результат выражения — создаст [] и append. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m117",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "zero",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Zero. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "x = 0\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m118",
    "fixed": true
  },
  {
    "topic": "замыкания",
    "q": "Что выведет код?",
    "options": [
      "10",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "10. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "def make():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 10\n        return n\n    return inc\nprint(make()())",
    "group": "Декораторы и замыкания",
    "id": "m119",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что вызывает gen.close()?",
    "options": [
      "GeneratorExit",
      "StopIteration только",
      "KeyboardInterrupt",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Завершение генератора — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m120",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `ORDER BY`?",
    "options": [
      "сортировка результата",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "ORDER BY в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m121",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m122",
    "fixed": true
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
    "explain": "Код вычисляется в enter\nbody\nexit. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    print('body')",
    "group": "Исключения и контекст",
    "id": "m123",
    "fixed": true
  },
  {
    "topic": "mock",
    "q": "Что умеет side_effect у мока?",
    "options": [
      "кидать/итерировать/вызывать",
      "только return_value",
      "патчить диск",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Кидать/итерировать/вызывать. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m124",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что такое __len__ должен возвращать?",
    "options": [
      "int >= 0",
      "любой float",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Int >= 0. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m125",
    "fixed": true
  },
  {
    "topic": "ABC",
    "q": "Что вернёт update_abstractmethods (3.10)?",
    "options": [
      "пересчёт абстрактности после правок",
      "ошибка",
      "None",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Результат выражения — пересчёт абстрактности после правок. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m126",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что такое timeout в run?",
    "options": [
      "убивает по истечении (TimeoutExpired)",
      "утверждение про другой уровень стека",
      "только warn",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Убивает по истечении (TimeoutExpired). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m127",
    "fixed": true
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
    "explain": "RLock можно захватывать тем же потоком повторно. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m128",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Что верно про Counter.most_common(k) — сложность примерно?",
    "options": [
      "O(n log k) через heap",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "O(n log k) через heap. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m129",
    "fixed": true
  },
  {
    "topic": "YAGNI",
    "q": "Чем YAGNI отличается от KISS?",
    "options": [
      "YAGNI — не делать лишнее; KISS — делать просто",
      "утверждение про другой уровень стека",
      "YAGNI только для тестов",
      "KISS только для SQL"
    ],
    "answer": 0,
    "explain": "YAGNI — не делать лишнее; KISS — делать просто. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m130",
    "fixed": true
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
    "explain": "Цикл сдвиг на 1 вправо (отриц. — влево). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m131",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что такое match/case появился в?",
    "options": [
      "3.10",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "3.12"
    ],
    "answer": 0,
    "explain": "3.10. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m132",
    "fixed": true
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
    "explain": "Код вычисляется в [2, 2, 2]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m133",
    "fixed": true
  },
  {
    "topic": "generators",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[1, 0]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Return в генераторе становится StopIteration.value; list() его не включает — только yield:.",
    "kind": "single",
    "code": "def g():\n    yield 1\n    return 0\nprint(list(g()))",
    "group": "Генераторы и итераторы",
    "id": "m134",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 404 — кратко?",
    "options": [
      "не найдено",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 404: не найдено — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m135",
    "fixed": true
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
    "explain": "Кладёт исключения в результаты вместо raise. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m136",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что делает ExitStack.callback?",
    "options": [
      "регистрирует произвольный teardown",
      "только CM",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Регистрирует произвольный teardown. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m137",
    "fixed": true
  },
  {
    "topic": "warnings",
    "q": "Что такое catch_warnings?",
    "options": [
      "временный контроль warnings",
      "except Exception",
      "утверждение про другой уровень стека",
      "pytest only"
    ],
    "answer": 0,
    "explain": "Временный контроль warnings. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m138",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что такое __length_hint__?",
    "options": [
      "оценка длины для list(it)",
      "точный len обязателен",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Оценка длины для list(it). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m139",
    "fixed": true
  },
  {
    "topic": "slots",
    "q": "Что верно про объявить пустые slots у subclass?",
    "options": [
      "часто нужно [], чтобы не вернуть __dict__",
      "утверждение про другой уровень стека",
      "удаляет parent slots",
      "создаёт list attr"
    ],
    "answer": 0,
    "explain": "Часто нужно [], чтобы не вернуть __dict__. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m140",
    "fixed": true
  },
  {
    "topic": "tempfile",
    "q": "Что возвращает mkstemp?",
    "options": [
      "fd и path",
      "только Path",
      "file object always",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Fd и path. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m141",
    "fixed": true
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
    "explain": "Много I/O ожидания. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m142",
    "fixed": true
  },
  {
    "topic": "алгоритмы",
    "q": "Для чего удобен defaultdict(list)?",
    "options": [
      "группировки элементов по ключу",
      "сортировки O(1)",
      "хеширования паролей",
      "async queue"
    ],
    "answer": 0,
    "explain": "Группировки элементов по ключу. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Алгоритмы и структуры данных",
    "id": "m143",
    "fixed": true
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
    "explain": "Элементы модуля работают на одну цель. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m144",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что такое namedtuple _asdict?",
    "options": [
      "OrderedDict/dict полей",
      "json dumps auto",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "OrderedDict/dict полей. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m145",
    "fixed": true
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
    "explain": "Новый set() на каждый экземпляр. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m146",
    "fixed": true
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
    "explain": "Тройная вложенность функций — Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m147",
    "fixed": true
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
    "explain": "Читаемее для простых преобразований. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m148",
    "fixed": true
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
    "explain": "Фильтрует/валидирует ответ. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m149",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m150",
    "fixed": true
  },
  {
    "topic": "исключения",
    "q": "Что верно про raise X from Y связывает?",
    "options": [
      "__cause__",
      "только message",
      "traceback удаляет",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Exception chaining — Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m151",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое filters на handler?",
    "options": [
      "отсекают записи",
      "меняют уровень root",
      "удаляют logger",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Тонкая настройка — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m152",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что верно про __iter__ + __next__ на одном классе?",
    "options": [
      "объект и iterable и iterator",
      "запрещено",
      "только gen",
      "только async"
    ],
    "answer": 0,
    "explain": "Объект и iterable и iterator. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m153",
    "fixed": true
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
    "explain": "Класс с доп. поведением без самостоятельной роли. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m154",
    "fixed": true
  },
  {
    "topic": "sort",
    "q": "Что делает operator.itemgetter?",
    "options": [
      "быстрый key для сортировки",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Быстрый key для сортировки. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m155",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Что даёт local()?",
    "options": [
      "thread-local storage",
      "process share",
      "async local",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Thread-local storage. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m156",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Какая Global mutable state в библиотеке — проблема для?",
    "options": [
      "тестируемости и предсказуемости",
      "скорости всегда",
      "утверждение про другой уровень стека",
      "async only"
    ],
    "answer": 0,
    "explain": "Тестируемости и предсказуемости. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m157",
    "fixed": true
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
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(2)))))",
    "group": "Collections и itertools",
    "id": "m158",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что верно про Enum'ы сравнимы с int если?",
    "options": [
      "IntEnum / IntFlag",
      "утверждение про другой уровень стека",
      "никогда",
      "только StrEnum"
    ],
    "answer": 0,
    "explain": "Отдельные типы — Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m159",
    "fixed": true
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
    "explain": "Код вычисляется в 2 2 2. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m160",
    "fixed": true
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
    "explain": "X.__iter__(). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m161",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 304 — кратко?",
    "options": [
      "не изменилось / кэш",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 304: не изменилось / кэш. В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m162",
    "fixed": true
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
    "explain": "Задачи могут быть собраны GC / потеря исключений. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m163",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Можно ли передать в contextlib.suppress несколько типов исключений?",
    "options": [
      "да — suppress(TypeError, ValueError) и т.п.",
      "нет — только один тип за раз",
      "только BaseException целиком",
      "только строки с именами ошибок"
    ],
    "answer": 0,
    "explain": "Suppress(*exceptions) принимает несколько типов: внутри with эти исключения глотаются. Удобно вместо длинного try/except pass.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m164",
    "fixed": true
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
    "explain": "Безусловно vs условие. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m165",
    "fixed": true
  },
  {
    "topic": "classmethod",
    "q": "Какой первый аргумент у метода с @classmethod?",
    "options": [
      "cls — сам класс, а не экземпляр",
      "self — экземпляр, как у обычного метода",
      "*args без неявного первого аргумента",
      "методу нельзя иметь аргументы"
    ],
    "answer": 0,
    "explain": "`@classmethod` получает класс (`cls`). Так пишут альтернативные конструкторы (`from_json`). Обычный метод получает `self`, `@staticmethod` — ничего неявного.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m166",
    "fixed": true
  },
  {
    "topic": "ABC",
    "q": "Что такое @abstractmethod на property?",
    "options": [
      "возможно",
      "утверждение про другой уровень стека",
      "только methods",
      "только classmethod"
    ],
    "answer": 0,
    "explain": "Возможно. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m167",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что верно про from __future__ import annotations делает?",
    "options": [
      "откладывает оценку аннотаций (строки)",
      "включает GIL free",
      "Py2 mode",
      "оптимизирует abs"
    ],
    "answer": 0,
    "explain": "Откладывает оценку аннотаций (строки). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m168",
    "fixed": true
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
    "explain": "Pipe двусторонняя пара, Queue многоучастников. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m169",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Command полезен для?",
    "options": [
      "отложенного выполнения и undo/redo",
      "только SQL",
      "только HTTP",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Отложенного выполнения и undo/redo. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m170",
    "fixed": true
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
    "explain": "Islice — ленивый срез — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([1, 2, 3, 4, 5], 3)))",
    "group": "Collections и itertools",
    "id": "m171",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что такое case _ :?",
    "options": [
      "wildcard / default ветка",
      "ошибка синтаксиса",
      "только для None",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Wildcard / default ветка. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m172",
    "fixed": true
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
    "explain": "Копирует метаданные — Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m173",
    "fixed": true
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
    "explain": "Да (с 3), локальные переменные не утекают. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m174",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое SQLAlchemy?",
    "options": [
      "ORM/toolkit для БД",
      "NoSQL база",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Популярный ORM — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m175",
    "fixed": true
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
    "explain": "Результат выражения — планируют корутину. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m176",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует FileNotFoundError?",
    "options": [
      "OSError",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "OSError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m177",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что такое pytest -k 'not slow'?",
    "options": [
      "запустить тесты, имя которых не матчит slow",
      "удалить медленные",
      "только slow",
      "skip CI"
    ],
    "answer": 0,
    "explain": "Запустить тесты, имя которых не матчит slow. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m178",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что вызовет a + b?",
    "options": [
      "a.__add__(b) или b.__radd__(a)",
      "только __iadd__",
      "утверждение про другой уровень стека",
      "hash(a)"
    ],
    "answer": 0,
    "explain": "A.__add__(b) или b.__radd__(a). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m179",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Что верно про MRO при diamond: C(A,B) порядок?",
    "options": [
      "C, а затем A, и далее B, а затем object (примерно, C3)",
      "C, а затем B, и далее A всегда",
      "случайный",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "C, а затем A, и далее B, а затем object (примерно, C3). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m180",
    "fixed": true
  },
  {
    "topic": "sort",
    "q": "Что выведет код?",
    "options": [
      "стабильный (сохраняет порядок)",
      "утверждение про другой уровень стека",
      "по id",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Код вычисляется в стабильный (сохраняет порядок). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "xs = [('b', 1), ('a', 1)]\nprint(sorted(xs, key=lambda t: t[1]))",
    "group": "Stdlib и производительность",
    "id": "m181",
    "fixed": true
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
    "explain": "Синхронная встреча. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m182",
    "fixed": true
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
    "explain": "Простому расширяемому дизайну без лишних фич. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m183",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "20",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "P(5,2) = 20 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(5), 2))))",
    "group": "Collections и itertools",
    "id": "m184",
    "fixed": true
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
    "explain": "Результат выражения — метаданные для инструментов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m185",
    "fixed": true
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
    "explain": "Иначе инспекция видит wrapper. Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m186",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что создаёт выражение (x for x in range(3))?",
    "options": [
      "generator expression — ленивый итератор",
      "сразу список [0, 1, 2]",
      "кортеж (0, 1, 2)",
      "set {0, 1, 2}"
    ],
    "answer": 0,
    "explain": "Круглые скобки с for — generator expression, не tuple. Значения считаются по мере next(). Для кортежа нужен tuple(...), для списка — [...].",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m187",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое covering index?",
    "options": [
      "индекс закрывает запрос без heap",
      "полный table scan",
      "foreign key",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Меньше I/O — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m188",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m189",
    "fixed": true
  },
  {
    "topic": "with",
    "q": "Что вернёт with A() as a, B() as b?",
    "options": [
      "да, поддерживается",
      "ошибка",
      "только async with",
      "только 3.12+"
    ],
    "answer": 0,
    "explain": "Результат выражения — да, поддерживается. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m190",
    "fixed": true
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
    "explain": "Временно подменить атрибут/ENV/путь. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m191",
    "fixed": true
  },
  {
    "topic": "staticmethod",
    "q": "Что делает декоратор @staticmethod?",
    "options": [
      "не принимает self/cls автоматически",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "только в metaclasses"
    ],
    "answer": 0,
    "explain": "Не принимает self/cls автоматически. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m192",
    "fixed": true
  },
  {
    "topic": "MRO",
    "q": "Что выведет C.__mro__[0].__name__?",
    "options": [
      "C",
      "ошибка",
      "None",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Первый в MRO — сам класс — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "code": "class A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__[0].__name__)",
    "group": "ООП продвинутый",
    "id": "m193",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m194",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Что такое Timer запускает?",
    "options": [
      "функцию через delay в потоке",
      "async sleep",
      "cron OS",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Функцию через delay в потоке. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m195",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что верно про Spaghetti code — признак?",
    "options": [
      "запутанных зависимостей и потока управления",
      "только async",
      "только ООП",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Запутанных зависимостей и потока управления. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m196",
    "fixed": true
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
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 5))))",
    "group": "Collections и itertools",
    "id": "m197",
    "fixed": true
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
    "explain": "Pair. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "x = [1, 2]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m198",
    "fixed": true
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
    "id": "m199",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что верно про return value в генераторе (3.3+)?",
    "options": [
      "кладёт value в StopIteration.value",
      "синтаксическая ошибка",
      "как обычный return из caller",
      "игнорируется"
    ],
    "answer": 0,
    "explain": "Кладёт value в StopIteration.value. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m200",
    "fixed": true
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
    "explain": "Разные аномалии чтения/записи; знай свою СУБД. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m201",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m202",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует KeyboardInterrupt?",
    "options": [
      "BaseException",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "BaseException. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m203",
    "fixed": true
  },
  {
    "topic": "warnings",
    "q": "Что делает warnings.simplefilter('error')?",
    "options": [
      "предупреждение превращается в исключение",
      "silence all",
      "log only",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Предупреждение превращается в исключение. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m204",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что обслуживает метод __getitem__?",
    "options": [
      "obj[key]",
      "obj.key",
      "утверждение про другой уровень стека",
      "with obj"
    ],
    "answer": 0,
    "explain": "Obj[key]. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m205",
    "fixed": true
  },
  {
    "topic": "MRO",
    "q": "Что такое MRO?",
    "options": [
      "порядок поиска методов",
      "утверждение про другой уровень стека",
      "тип ошибки",
      "менеджер памяти"
    ],
    "answer": 0,
    "explain": "Method Resolution Order (C3). MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m206",
    "fixed": true
  },
  {
    "topic": "pickle",
    "q": "Что верно про find_class можно ограничить для?",
    "options": [
      "безопасной загрузки whitelist",
      "ускорения",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Безопасной загрузки whitelist. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m207",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Что такое threading.Condition?",
    "options": [
      "монитор: lock плюс wait/notify для ожидания условия",
      "то же самое, что Event, без lock",
      "примитив только для asyncio",
      "примитив только для multiprocessing"
    ],
    "answer": 0,
    "explain": "Condition = lock + wait/notify_all. Поток ждёт условия под локом и просыпается по notify. Event проще (флаг), Condition — классический монитор.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m208",
    "fixed": true
  },
  {
    "topic": "Zen",
    "q": "Как посмотреть Zen of Python в интерпретаторе?",
    "options": [
      "import this",
      "утверждение про другой уровень стека",
      "python -m zen",
      "help(zen)"
    ],
    "answer": 0,
    "explain": "Import this. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m209",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что верно про lru_cache(maxsize=128) хранит?",
    "options": [
      "до 128 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "До 128 результатов вызовов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m210",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance([1, 2], list))",
    "group": "Typing и dataclasses",
    "id": "m211",
    "fixed": true
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
    "explain": "Код вычисляется в before, затем 1. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "def deco(f):\n    def wrap():\n        print('before')\n        return f()\n    return wrap\n@deco\ndef f():\n    return 1\nprint(f())",
    "group": "Декораторы и замыкания",
    "id": "m212",
    "fixed": true
  },
  {
    "topic": "comprehensions",
    "q": "Что вернёт [(x, y) for x in range(2) for y in range(2)] длина?",
    "options": [
      "4",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — 4. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m213",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 301 обычно значит?",
    "options": [
      "Moved Permanently",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "301 — Moved Permanently — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m214",
    "fixed": true
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
    "explain": "Task планирует конкурентно; await — последовательно. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m215",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое Если __exit__ вернул True?",
    "options": [
      "подавляет исключение",
      "ре-рейзит всегда",
      "закрывает GIL",
      "игнор return"
    ],
    "answer": 0,
    "explain": "Подавляет исключение. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m216",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что верно про unittest.mock.patch лучше использовать как?",
    "options": [
      "context manager или decorator на время теста",
      "глобально в prod",
      "вместо DI всегда",
      "в __init__ модуля"
    ],
    "answer": 0,
    "explain": "Context manager или decorator на время теста. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m217",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Зачем нужен метод `__bytes__`?",
    "options": [
      "bytes(obj)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Bytes(obj). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m218",
    "fixed": true
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
    "explain": "Даёт доступ как к атрибуту, считая через метод. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m219",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Код падает с ошибкой (JSONDecodeError). Смотри типы аргументов и допустимые операции.",
    "kind": "single",
    "code": "import json\nprint(json.loads('{'))",
    "group": "Stdlib и производительность",
    "id": "m220",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что означает: время в чистом Python CPU bound на 2 threads?",
    "options": [
      "часто ≈1 ядро из-за GIL",
      "линейный x2 всегда",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Классический вопрос собеса — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m221",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Adapter нужен когда?",
    "options": [
      "нужно подогнать чужой интерфейс под свой",
      "нужен singleton",
      "нужен GIL",
      "нужен pickle"
    ],
    "answer": 0,
    "explain": "Нужно подогнать чужой интерфейс под свой. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m222",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что делает chain.from_iterable?",
    "options": [
      "сплющивает один уровень",
      "deep flatten any",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Без распаковки *huge — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m223",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Для чего нужен dataclasses.make_dataclass?",
    "options": [
      "динамически создать класс-dataclass во время выполнения",
      "только как замена NamedTuple",
      "только как замена TypedDict",
      "это синтаксический сахар для JSON Schema"
    ],
    "answer": 0,
    "explain": "Make_dataclass собирает dataclass из имени и списка полей в runtime — удобно для кодогенерации/динамических схем. NamedTuple/TypedDict — другие инструменты.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m224",
    "fixed": true
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
    "explain": "Код вычисляется в [3, 3, 3, 3]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(4)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m225",
    "fixed": true
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
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in ['a', 'b'])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m226",
    "fixed": true
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
    "explain": "PUT безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай).",
    "kind": "single",
    "group": "Веб и API",
    "id": "m227",
    "fixed": true
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
    "explain": "Create_task планирует в фоне event loop. Сверяй с тем, блокирует ли это loop и кто владеет Task.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m228",
    "fixed": true
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
    "explain": "Можно вложить / или один with a, b. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m229",
    "fixed": true
  },
  {
    "topic": "mock",
    "q": "Что такое assert_called_once_with?",
    "options": [
      "проверяет единственный вызов с args",
      "всегда True",
      "мокает time",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Проверяет единственный вызов с args. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m230",
    "fixed": true
  },
  {
    "topic": "property",
    "q": "Что такое cached_property сброс?",
    "options": [
      "del obj.attr / pop из __dict__",
      "авто каждый доступ",
      "утверждение про другой уровень стека",
      "GC only"
    ],
    "answer": 0,
    "explain": "Del obj.attr / pop из __dict__. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m231",
    "fixed": true
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
    "explain": "Аккуратности с объявлением слотов в цепочке. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m232",
    "fixed": true
  },
  {
    "topic": "pickle",
    "q": "Для чего используется pickle?",
    "options": [
      "сериализации объектов Python",
      "JSON веба",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Сериализации объектов Python. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m233",
    "fixed": true
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
    "explain": "Shared typed buffer. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m234",
    "fixed": true
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
    "explain": "Глотает ошибки и скрывает баги. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m235",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "5",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "5. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [5, 1, 1]))",
    "group": "Collections и itertools",
    "id": "m236",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что верно про KeywordTypeError при лишнем имени?",
    "options": [
      "TypeError",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "SyntaxError runtime"
    ],
    "answer": 0,
    "explain": "TypeError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m237",
    "fixed": true
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
    "explain": "Копирует метаданные на обёртку. Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m238",
    "fixed": true
  },
  {
    "topic": "итераторы",
    "q": "Что такое collections.abc.Iterable требует?",
    "options": [
      "__iter__",
      "__next__ обязательно",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "__iter__. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m239",
    "fixed": true
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
    "explain": "Защита от зависаний — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m240",
    "fixed": true
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
    "explain": "Запускает конкурентно и ждёт все. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m241",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое aclosing для async?",
    "options": [
      "async close аналог closing",
      "sync only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Async close аналог closing. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m242",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое LoggerAdapter?",
    "options": [
      "контекстные поля в логах",
      "утверждение про другой уровень стека",
      "filter ban",
      "root replace"
    ],
    "answer": 0,
    "explain": "Request_id и т.п — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m243",
    "fixed": true
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое `property` в Python?",
    "options": [
      "data descriptor",
      "non-data only",
      "classmethod",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "__set__ есть — Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m244",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Что такое staticmethod?",
    "options": [
      "функция в классе без self/cls",
      "то же что classmethod",
      "абстрактный метод",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Функция в классе без self/cls. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m245",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m246",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что верно про I/O в socket обычно?",
    "options": [
      "отпускает GIL на время ожидания",
      "держит GIL forever",
      "создаёт process",
      "отключает async"
    ],
    "answer": 0,
    "explain": "Потоки полезны для I/O — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m247",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Template Method?",
    "options": [
      "базовый класс задаёт скелет, подклассы — шаги",
      "копирование HTML",
      "утверждение про другой уровень стека",
      "async template"
    ],
    "answer": 0,
    "explain": "Базовый класс задаёт скелет, подклассы — шаги. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m248",
    "fixed": true
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
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 1, 2, 2, 3])])",
    "group": "Collections и itertools",
    "id": "m249",
    "fixed": true
  },
  {
    "topic": "protocols",
    "q": "Что даёт @runtime_checkable у Protocol?",
    "options": [
      "isinstance может проверить методы",
      "всегда без runtime",
      "заменяет ABC полностью без оговорок",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Isinstance может проверить методы. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m250",
    "fixed": true
  },
  {
    "topic": "замыкания",
    "q": "Верно ли, что cell в замыкании хранит?",
    "options": [
      "cell_contents enclosing переменной",
      "утверждение про другой уровень стека",
      "GIL lock",
      "только int"
    ],
    "answer": 0,
    "explain": "Cell_contents enclosing переменной. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m251",
    "fixed": true
  },
  {
    "topic": "coroutines",
    "q": "Что такое gen.send(x) передаёт?",
    "options": [
      "значение в yield",
      "в return",
      "в global",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Значение в yield. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m252",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 503 обычно значит?",
    "options": [
      "Unavailable",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "503 — Unavailable — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m253",
    "fixed": true
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
    "explain": "Нужно cancel/await корректно. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m254",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое suppress(FileNotFoundError)?",
    "options": [
      "молчаливый пропуск",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Молчаливый пропуск. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m255",
    "fixed": true
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
    "explain": "Проверяет связку компонентов (БД, API). Смотри, что именно проверяет инструмент и чего он не делает.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m256",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что верно про __hash__ должен быть согласован с?",
    "options": [
      "__eq__",
      "__str__",
      "__len__",
      "id always only"
    ],
    "answer": 0,
    "explain": "__eq__. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m257",
    "fixed": true
  },
  {
    "topic": "slots",
    "q": "Что ограничивает __slots__?",
    "options": [
      "набор атрибутов, экономит память",
      "число методов",
      "наследование",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Набор атрибутов, экономит память. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m258",
    "fixed": true
  },
  {
    "topic": "secrets",
    "q": "Что такое compare_digest?",
    "options": [
      "защита от timing attacks",
      "быстрее ==",
      "hash lib",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Защита от timing attacks. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m259",
    "fixed": true
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
    "explain": "Для CPU — multiprocessing/C-ext. GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m260",
    "fixed": true
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
    "explain": "Когда нужно комбинировать разное поведение. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m261",
    "fixed": true
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
    "explain": "Складывает счётчики. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m262",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что верно про NewType создаёт?",
    "options": [
      "отдельный тип для чекера (runtime тонкий)",
      "новый class always heavy",
      "обязательная проверка типов на каждом вызове в CPython",
      "ускорение байткода аннотациями"
    ],
    "answer": 0,
    "explain": "Отдельный тип для чекера (runtime тонкий). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m263",
    "fixed": true
  },
  {
    "topic": "декораторы",
    "q": "Что выведет код?",
    "options": [
      "wrap\nf",
      "f\nwrap",
      "утверждение про другой уровень стека",
      "ошибка"
    ],
    "answer": 0,
    "explain": "G = deco(g) при определении — Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "code": "def deco(fn):\n    print('wrap')\n    return fn\n@deco\ndef f():\n    print('f')\nf()",
    "group": "Декораторы и замыкания",
    "id": "m264",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что будет при next(gen) после исчерпания генератора?",
    "options": [
      "исключение StopIteration",
      "None без исключения",
      "перезапуск генератора с начала",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Исчерпанный генератор при next() бросает StopIteration. for это глотает сам; вручную next() — лови или используй default: next(gen, sentinel).",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m265",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое idempotency-key header паттерн?",
    "options": [
      "безопасный повтор POST",
      "кэш ETag",
      "утверждение про другой уровень стека",
      "JWT refresh only"
    ],
    "answer": 0,
    "explain": "Платёжные API — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m266",
    "fixed": true
  },
  {
    "topic": "asyncio",
    "q": "Зачем нужен run_in_executor?",
    "options": [
      "блокирующего кода в thread/process pool",
      "быстрее await sleep",
      "замены gather",
      "GUI only"
    ],
    "answer": 0,
    "explain": "Блокирующего кода в thread/process pool. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m267",
    "fixed": true
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
    "explain": "PEP 654 — Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m268",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что верно про snapshot-тест (golden file) полезен для?",
    "options": [
      "фиксации эталонного вывода/сериализации",
      "perf only",
      "security audit",
      "это замена тестов одним ручным кликом"
    ],
    "answer": 0,
    "explain": "Фиксации эталонного вывода/сериализации. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m269",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что верно про __bool__ если нет, берётся?",
    "options": [
      "__len__ != 0",
      "всегда True",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "__len__ != 0. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m270",
    "fixed": true
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
    "explain": "Результат выражения — запрещает инстанс без реализации. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m271",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что делает importlib.reload?",
    "options": [
      "перезагружает модуль",
      "удаляет пакет",
      "чистит pip",
      "restart OS"
    ],
    "answer": 0,
    "explain": "Перезагружает модуль. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m272",
    "fixed": true
  },
  {
    "topic": "multiprocessing",
    "q": "Что вернёт Pool.map chunksize?",
    "options": [
      "влияет на нарезку задач",
      "отключает pickle",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — влияет на нарезку задач. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m273",
    "fixed": true
  },
  {
    "topic": "KISS",
    "q": "Команда пишет «фабрику фабрик» ради одного if — что нарушено?",
    "options": [
      "KISS — решение сложнее задачи",
      "только DRY, и больше ничего",
      "обязательный принцип из asyncio",
      "Liskov Substitution"
    ],
    "answer": 0,
    "explain": "Оверинжиниринг ради одного условия ломает KISS. Сначала простой if/функция; фабрики фабрик — когда вариативность реально выросла.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m274",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что вернёт list(accumulate([1,2,3]))?",
    "options": [
      "[1, 3, 6]",
      "ошибка",
      "[1, 2, 3]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m275",
    "fixed": true
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
    "explain": "Структурные атрибуты. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m276",
    "fixed": true
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
    "explain": "Ближний к def первый — Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m277",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что такое Генератор — одноразовый?",
    "options": [
      "да, после исчерпания пуст",
      "нет, рестарт сам",
      "как list",
      "кэшируется"
    ],
    "answer": 0,
    "explain": "Нужен новый вызов функции — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m278",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про httpx хорош тем что?",
    "options": [
      "поддерживает sync и async",
      "только Python 2",
      "заменяет Django",
      "встроен в stdlib"
    ],
    "answer": 0,
    "explain": "Современный клиент — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m279",
    "fixed": true
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
    "explain": "Корутины конкурентно. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m280",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует ZeroDivisionError?",
    "options": [
      "ArithmeticError",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "ArithmeticError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m281",
    "fixed": true
  },
  {
    "topic": "warnings",
    "q": "Что означает: filterwarnings('ignore', category=DeprecationWarning)?",
    "options": [
      "глушит deprecations",
      "превращает в error",
      "удаляет API",
      "CI fail"
    ],
    "answer": 0,
    "explain": "Глушит deprecations. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m282",
    "fixed": true
  },
  {
    "topic": "дескрипторы",
    "q": "Что такое Дескриптор — объект с?",
    "options": [
      "__get__/__set__/__delete__",
      "только __call__",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Протокол дескрипторов; property на нём. Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m283",
    "fixed": true
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
    "explain": "__new__ создаёт объект, __init__ инициализирует. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m284",
    "fixed": true
  },
  {
    "topic": "регулярки",
    "q": "Что позволяет re.VERBOSE?",
    "options": [
      "комментарии и пробелы в паттерне",
      "быстрее match",
      "только bytes",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Комментарии и пробелы в паттерне. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m285",
    "fixed": true
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
    "explain": "Один поток bytecode одновременно. GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m286",
    "fixed": true
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
    "explain": "Объект-заглушка с безопасным no-op поведением. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m287",
    "fixed": true
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
    "explain": "Цикл сдвиг на 3 вправо (отриц. — влево). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m288",
    "fixed": true
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
    "explain": "Код вычисляется в обычно нет. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "def f(xs: list[int]):\n    return xs\nprint(f(['a']))",
    "group": "Typing и dataclasses",
    "id": "m289",
    "fixed": true
  },
  {
    "topic": "замыкания",
    "q": "Что хранит __closure__ у функции?",
    "options": [
      "кортеж cell или None",
      "dict locals",
      "список args",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Кортеж cell или None. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m290",
    "fixed": true
  },
  {
    "topic": "итераторы",
    "q": "Что такое iter(obj) ожидает?",
    "options": [
      "__iter__ или __getitem__",
      "только len",
      "только __next__",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "__iter__ или __getitem__. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m291",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 204 обычно значит?",
    "options": [
      "No Content",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "204 — No Content — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m292",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m293",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что выведет код?",
    "options": [
      "enter\nexit",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Код вычисляется в enter\nexit. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    pass",
    "group": "Исключения и контекст",
    "id": "m294",
    "fixed": true
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
    "explain": "Look Before You Leap. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m295",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что обслуживает метод __format__?",
    "options": [
      "format(obj, spec) / f'{obj:spec}'",
      "str only",
      "repr only",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Format(obj, spec) / f'{obj:spec}'. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m296",
    "fixed": true
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
    "explain": "Фиксирует атрибуты, экономит память (нет __dict__). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m297",
    "fixed": true
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
    "explain": "Utf-8 даёт 'hi'. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m298",
    "fixed": true
  },
  {
    "topic": "multiprocessing",
    "q": "Что даёт Manager().dict()?",
    "options": [
      "прокси-словарь между процессами",
      "обычный dict shared memory transparently for any object graph без цены",
      "утверждение про другой уровень стека",
      "GIL off"
    ],
    "answer": 0,
    "explain": "Прокси-словарь между процессами. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m299",
    "fixed": true
  },
  {
    "topic": "YAGNI",
    "q": "Что такое YAGNI?",
    "options": [
      "You Aren't Gonna Need It — не пиши «на будущее»",
      "Your API Never Gets Installed",
      "Yield All Generated Items",
      "Yet Another Generic Interface"
    ],
    "answer": 0,
    "explain": "You Aren't Gonna Need It — не пиши «на будущее». Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m300",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "3",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "3. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 1)(2))",
    "group": "Collections и itertools",
    "id": "m301",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что даёт StrEnum в Python 3.11+?",
    "options": [
      "перечисление, члены которого являются str и сравнимы со строками",
      "только числовые коды без строкового значения",
      "замену dataclass",
      "асинхронный enum для asyncio"
    ],
    "answer": 0,
    "explain": "Enum.StrEnum (3.11+): члены — и Enum, и str. Удобно для статусов/кодов API: можно сравнивать с обычными строками и сериализовать без .value вручную.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m302",
    "fixed": true
  },
  {
    "topic": "замыкания",
    "q": "Что напечатают funcs[0]() при классической ошибке позднего связывания?",
    "options": [
      "2",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "2. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n# funcs[0]()",
    "group": "Декораторы и замыкания",
    "id": "m303",
    "fixed": true
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
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [0, 1])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m304",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 500 обычно значит?",
    "options": [
      "Server Error",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "500 — Server Error — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m305",
    "fixed": true
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
    "explain": "Результат выражения — await блокирующую функцию в thread. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m306",
    "fixed": true
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
    "explain": "Можно вложить / или один with a, b. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m307",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое Structured logging?",
    "options": [
      "поля/JSON, не только текст",
      "только print",
      "pickle logs",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Наблюдаемость — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m308",
    "fixed": true
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
    "explain": "Data vs non-data descriptors. Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m309",
    "fixed": true
  },
  {
    "topic": "MRO",
    "q": "Какую задачу решает diamond inheritance?",
    "options": [
      "C3 linearization",
      "случайный порядок",
      "только первый parent",
      "запрет syntax"
    ],
    "answer": 0,
    "explain": "Предсказуемый MRO — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m310",
    "fixed": true
  },
  {
    "topic": "csv",
    "q": "Что читает csv.DictReader?",
    "options": [
      "строки как dict по заголовку",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Строки как dict по заголовку. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m311",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Для чего хорошо подходит threading?",
    "options": [
      "I/O-bound задач",
      "чистого CPU всегда",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "I/O-bound задач. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m312",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Как проявляется Chain of Responsibility в middleware веб-фреймворка?",
    "options": [
      "цепочка обработчиков запроса",
      "linked list в БД",
      "GIL chain",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Цепочка обработчиков запроса. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m313",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Чем помогает total_ordering?",
    "options": [
      "достроить сравнения из немногих методов",
      "сортировать быстрее C",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Достроить сравнения из немногих методов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m314",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое Unpack/TypeVarTuple связаны с?",
    "options": [
      "вариативными generics",
      "это ускорение байткода в runtime",
      "это обязательная проверка типов на каждом вызове",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Вариативными generics. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m315",
    "fixed": true
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
    "explain": "Lambda i=i: i. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m316",
    "fixed": true
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
    "explain": "Generator expression материализуется через list. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(2)))",
    "group": "Генераторы и итераторы",
    "id": "m317",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что верно про SELECT … LIMIT 5 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 5 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m318",
    "fixed": true
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
    "explain": "Задачи могут быть собраны GC / потеря исключений. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m319",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое ContextDecorator?",
    "options": [
      "CM + decorator сразу",
      "только async",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "CM + decorator сразу. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m320",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что проверяет pytest.raises(ValueError)?",
    "options": [
      "что код бросает ожидаемое исключение",
      "что исключения нет",
      "типы mypy",
      "только ручная проверка без автотестов"
    ],
    "answer": 0,
    "explain": "Что код бросает ожидаемое исключение. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m321",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что такое Если __eq__ определён, __hash__?",
    "options": [
      "часто ставят None для mutable",
      "обязателен всегда",
      "удаляется интерпретатором насильно",
      "наследуется от object всегда ок"
    ],
    "answer": 0,
    "explain": "Часто ставят None для mutable. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m322",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "B",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "B. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A'\nclass B(A):\n    def hello(self):\n        return 'B'\nprint(B().hello())",
    "group": "ООП продвинутый",
    "id": "m323",
    "fixed": true
  },
  {
    "topic": "memory",
    "q": "Что вернёт sys.getsizeof([1,2]) учитывает?",
    "options": [
      "overhead контейнера, не глубоко элементы всегда",
      "всю глубокую структуру",
      "только int",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Результат выражения — overhead контейнера, не глубоко элементы всегда. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m324",
    "fixed": true
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
    "explain": "Сигнализации между потоками. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m325",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Как обычно делают Dependency Injection вручную в Python?",
    "options": [
      "передают зависимость в __init__ (или фабрику) явно",
      "всегда делают import внутри каждого метода",
      "держат всё в одной global config",
      "собирают объекты через eval"
    ],
    "answer": 0,
    "explain": "Ручной DI в Python — это явные аргументы конструктора/фабрики. Фреймворк не обязателен. Global/import-внутри/eval ухудшают тестируемость.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m326",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "3",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "3. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 7))",
    "group": "Collections и itertools",
    "id": "m327",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что такое паттерн match case _ if guard в Python 3.10+?",
    "options": [
      "guard условие",
      "wildcard запрещён с if",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Guard условие. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m328",
    "fixed": true
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
    "explain": "Код вычисляется в [4, 4, 4, 4, 4]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(5)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m329",
    "fixed": true
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
    "explain": "Ленивость и мало памяти — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m330",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 400 обычно значит?",
    "options": [
      "Bad Request",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "400 — Bad Request — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m331",
    "fixed": true
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
    "id": "m332",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует KeyError?",
    "options": [
      "LookupError",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "LookupError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m333",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что такое coverage.py измеряет?",
    "options": [
      "покрытие строк/веток",
      "скорость",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Покрытие строк/веток. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m334",
    "fixed": true
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
    "explain": "Hi. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "class Obj:\n    def __str__(self):\n        return 'hi'\nprint(Obj())",
    "group": "Контекст и магические методы",
    "id": "m335",
    "fixed": true
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
    "explain": "Исторически да, сейчас комбинации decorator. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m336",
    "fixed": true
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
    "explain": "Код вычисляется в var/log/syslog. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'syslog'))",
    "group": "Stdlib и производительность",
    "id": "m337",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Что верно про Lock.acquire в том же потоке повторно без RLock?",
    "options": [
      "дедлок",
      "утверждение про другой уровень стека",
      "ошибка импорта",
      "auto-release"
    ],
    "answer": 0,
    "explain": "Дедлок. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m338",
    "fixed": true
  },
  {
    "topic": "KISS",
    "q": "Что такое KISS?",
    "options": [
      "Keep It Simple, Stupid — проще решение лучше",
      "Keep It Super Short",
      "Kill Invalid Syntax Silently",
      "Key In Secure Storage"
    ],
    "answer": 0,
    "explain": "Keep It Simple, Stupid — проще решение лучше. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m339",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "20",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "20. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [10, 2]))",
    "group": "Collections и itertools",
    "id": "m340",
    "fixed": true
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
    "explain": "Новый dict() на каждый экземпляр. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m341",
    "fixed": true
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
    "explain": "Код вычисляется в [0, 1, 2, 3, 4]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(5)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m342",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что делает next(gen) на исчерпанном генераторе?",
    "options": [
      "StopIteration",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "перезапуск"
    ],
    "answer": 0,
    "explain": "Итератор закончился — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m343",
    "fixed": true
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
    "explain": "GET безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай).",
    "kind": "single",
    "group": "Веб и API",
    "id": "m344",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m345",
    "fixed": true
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
    "explain": "__enter__/__exit__. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m346",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что такое xfail?",
    "options": [
      "ожидаемый провал",
      "утверждение про другой уровень стека",
      "pass force",
      "error CI"
    ],
    "answer": 0,
    "explain": "Ожидаемый провал. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m347",
    "fixed": true
  },
  {
    "topic": "classmethod",
    "q": "Что верно про classmethod получает первым аргументом?",
    "options": [
      "класс (cls), не экземпляр",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "metaclass всегда"
    ],
    "answer": 0,
    "explain": "Класс (cls), не экземпляр. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m348",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Что выведет код?",
    "options": [
      "A.x",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "A.x. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A.x'\nclass B(A):\n    def hello(self):\n        return super().hello()\nprint(B().hello())",
    "group": "ООП продвинутый",
    "id": "m349",
    "fixed": true
  },
  {
    "topic": "copy",
    "q": "Что означает: Для объекта с циклическими ссылками deepcopy?",
    "options": [
      "справляется через memo",
      "всегда падает",
      "игнорирует циклы молча теряя",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Справляется через memo. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m350",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что означает: Продление CPU в C-extension без отпуска GIL?",
    "options": [
      "блокирует другие Python-потоки",
      "ускоряет их",
      "отключает process",
      "влияет только async"
    ],
    "answer": 0,
    "explain": "Держи ALLOW_THREADS для тяжёлого C. GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m351",
    "fixed": true
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
    "explain": "Простой интерфейс к сложной подсистеме. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m352",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "1. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import heapq\nh = [9, 2, 7, 1]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m353",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "5",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "5. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "if (n := len('hello')) > 3:\n    print(n)",
    "group": "Typing и dataclasses",
    "id": "m354",
    "fixed": true
  },
  {
    "topic": "декораторы",
    "q": "Что такое Декоратор класса получает?",
    "options": [
      "класс как аргумент",
      "только экземпляр",
      "утверждение про другой уровень стека",
      "MRO list"
    ],
    "answer": 0,
    "explain": "@decorator над class — Декоратор — это функция, которая принимает другую функцию и возвращает обёртку с доп. Поведением.",
    "kind": "single",
    "group": "Декораторы и замыкания",
    "id": "m355",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что выведет код?",
    "options": [
      "1",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Первый next() доходит до первого yield и отдаёт 1. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "def g():\n    x = yield 1\n    yield x\ngen = g()\nprint(next(gen))",
    "group": "Генераторы и итераторы",
    "id": "m356",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 404 обычно значит?",
    "options": [
      "Not Found",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "404 — Not Found — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m357",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m358",
    "fixed": true
  },
  {
    "topic": "исключения",
    "q": "Что такое contextlib.suppress(Error)?",
    "options": [
      "игнорирует указанные исключения",
      "логирует",
      "превращает в warning",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Молчаливый пропуск — Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m359",
    "fixed": true
  },
  {
    "topic": "mock",
    "q": "Что подменяет unittest.mock.patch?",
    "options": [
      "объект в пространстве имён",
      "исходник на диске",
      "утверждение про другой уровень стека",
      "байткод навсегда"
    ],
    "answer": 0,
    "explain": "Объект в пространстве имён. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m360",
    "fixed": true
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
    "explain": "Разрешить присваивание атрибуту-property. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m361",
    "fixed": true
  },
  {
    "topic": "ABC",
    "q": "Что такое @abstractmethod гарантирует?",
    "options": [
      "нельзя инстанцировать подкласс без реализации",
      "runtime скорость",
      "GIL off",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Нельзя инстанцировать подкласс без реализации. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m362",
    "fixed": true
  },
  {
    "topic": "copy",
    "q": "Что такое shallow copy копирует?",
    "options": [
      "контейнер, но не вложенные объекты глубоко",
      "весь граф",
      "только int",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Контейнер, но не вложенные объекты глубоко. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m363",
    "fixed": true
  },
  {
    "topic": "multiprocessing",
    "q": "Что верно про multiprocessing обходит GIL через?",
    "options": [
      "отдельные процессы",
      "больше потоков",
      "снятие GIL флагом",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Отдельные процессы. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m364",
    "fixed": true
  },
  {
    "topic": "DRY",
    "q": "Что такое принцип DRY?",
    "options": [
      "Don't Repeat Yourself — не дублировать знание/логику",
      "Do Repeat Yourself",
      "Delete Rarely Your code",
      "Debug Runs Yearly"
    ],
    "answer": 0,
    "explain": "DRY про одну точку правды для бизнес-правил и логики; копипаста расходится со временем.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m365",
    "fixed": true
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
    "explain": "Itertools.zip_longest — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m366",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(isinstance((1, 2), list))",
    "group": "Typing и dataclasses",
    "id": "m367",
    "fixed": true
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
    "explain": "Код вычисляется в 0 1 2. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda i=i: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "group": "Декораторы и замыкания",
    "id": "m368",
    "fixed": true
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
    "explain": "Два next() забирают первые элементы. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in [1, 2])\nprint(next(g), next(g))",
    "group": "Генераторы и итераторы",
    "id": "m369",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт keep-alive?",
    "options": [
      "переиспользование TCP",
      "новый TCP always",
      "ошибка",
      "QUIC only"
    ],
    "answer": 0,
    "explain": "Меньше handshake — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m370",
    "fixed": true
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
    "explain": "Задачи могут быть собраны GC / потеря исключений. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m371",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "Что вернёт add_note (3.11)?",
    "options": [
      "добавляет текст к исключению",
      "меняет тип",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — добавляет текст к исключению. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m372",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Как pytest находит тесты по умолчанию?",
    "options": [
      "по именам test_*.py / *_test.py и функциям test_*",
      "по любому файлу .py в репозитории",
      "только по if __name__ == '__main__'",
      "только через doctest"
    ],
    "answer": 0,
    "explain": "Discovery pytest смотрит на конвенции имён файлов и тест-функций. Не каждый .py подхватится, и main/doctest — другие механизмы.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m373",
    "fixed": true
  },
  {
    "topic": "property",
    "q": "Что такое doc у property?",
    "options": [
      "можно задать доку геттера",
      "утверждение про другой уровень стека",
      "только class docstring",
      "pep8 ban"
    ],
    "answer": 0,
    "explain": "Можно задать доку геттера. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m374",
    "fixed": true
  },
  {
    "topic": "MRO",
    "q": "Что показывает Class.__mro__?",
    "options": [
      "цепочку базовых классов",
      "только родителей 1 уровня",
      "атрибуты",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Линеаризация наследования — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m375",
    "fixed": true
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
    "explain": "Результат выражения — [1, 2]. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m376",
    "fixed": true
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое initializer у Pool?",
    "options": [
      "setup в worker process",
      "в parent only",
      "утверждение про другой уровень стека",
      "import ban"
    ],
    "answer": 0,
    "explain": "Setup в worker process. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m377",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что верно про Copy-paste programming ведёт к?",
    "options": [
      "расхождению копий и багам при правках",
      "лучшему DRY",
      "ускорению",
      "типизации"
    ],
    "answer": 0,
    "explain": "Расхождению копий и багам при правках. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m378",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "7",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "7. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 3)(4))",
    "group": "Collections и itertools",
    "id": "m379",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что означает аннотация typing.NoReturn?",
    "options": [
      "функция не завершается нормальным return (exit/throw/бесконечный цикл)",
      "то же самое, что return None",
      "ускоряет байткод в runtime",
      "доступна только в Python 2.7"
    ],
    "answer": 0,
    "explain": "NoReturn — для функций вроде sys.exit или вечного loop: нормального возврата нет. Это не `-> None`. В новых версиях близок typing.Never.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m380",
    "fixed": true
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
    "explain": "Код вычисляется в [0, 1, 2]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(3)]\nprint([f() for f in fs])",
    "group": "Декораторы и замыкания",
    "id": "m381",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Как передать значение внутрь генератора через yield-выражение?",
    "options": [
      "методом gen.send(value)",
      "только через next(gen)",
      "только через gen.throw",
      "только через gen.close"
    ],
    "answer": 0,
    "explain": "`x = yield` получает то, что передали `gen.send(x)`. `next` шлёт None, `throw` кидает исключение внутрь, `close` завершает генератор.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m382",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 400 — кратко?",
    "options": [
      "ошибка клиента",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 400: ошибка клиента — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m383",
    "fixed": true
  },
  {
    "topic": "asyncio",
    "q": "Что такое StreamReader/Writer?",
    "options": [
      "высокоуровневые потоки TCP",
      "файлы pathlib",
      "блокирующий time.sleep внутри корутины",
      "subprocess only"
    ],
    "answer": 0,
    "explain": "Высокоуровневые потоки TCP. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m384",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует ValueError?",
    "options": [
      "Exception",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "Exception. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m385",
    "fixed": true
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
    "explain": "Плагинная настройка. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m386",
    "fixed": true
  },
  {
    "topic": "property",
    "q": "Что такое deleter у property?",
    "options": [
      "обрабатывает del obj.x",
      "удаляет class",
      "GC freeze",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Обрабатывает del obj.x. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m387",
    "fixed": true
  },
  {
    "topic": "ООП",
    "q": "Для чего используется super()?",
    "options": [
      "вызова метода родителя по MRO",
      "создания потока",
      "импорта",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Вызова метода родителя по MRO. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m388",
    "fixed": true
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
    "explain": "Хеш-таблица — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m389",
    "fixed": true
  },
  {
    "topic": "threading",
    "q": "Что верно про daemon thread при выходе main?",
    "options": [
      "может оборваться",
      "всегда join",
      "становится process",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Может оборваться. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m390",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Builder подходит когда?",
    "options": [
      "много опциональных параметров объекта",
      "один int",
      "только dataclass frozen",
      "только dict"
    ],
    "answer": 0,
    "explain": "Много опциональных параметров объекта. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m391",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что такое bisect_left?",
    "options": [
      "точка вставки слева от равных",
      "удаление",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Точка вставки слева от равных. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m392",
    "fixed": true
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
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m393",
    "fixed": true
  },
  {
    "topic": "coroutines",
    "q": "Что означает: await gen — нельзя; await coroutine — да. Генератор awaitable?",
    "options": [
      "нет (пока не @types.coroutine нюансы)",
      "да всегда",
      "только list",
      "только async for"
    ],
    "answer": 0,
    "explain": "Нет (пока не @types.coroutine нюансы). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m394",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое status 429?",
    "options": [
      "too many requests",
      "not found",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Rate limit — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m395",
    "fixed": true
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
    "explain": "Логируется при GC task (и в 3.11+ лучше видно). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m396",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "Что вернёт Exception.__notes__ (3.11)?",
    "options": [
      "доп. заметки к исключению",
      "stack only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — доп. заметки к исключению. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m397",
    "fixed": true
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
    "explain": "MagicMock имеет магические методы по умолчанию. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m398",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Зачем нужен `__matmul__`?",
    "options": [
      "оператор @",
      "утверждение про другой уровень стека",
      "matrix only NumPy language ban",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Оператор @. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m399",
    "fixed": true
  },
  {
    "topic": "MRO",
    "q": "Что верно про super() без аргументов в Py3?",
    "options": [
      "берёт класс/self из ячейки",
      "только object",
      "утверждение про другой уровень стека",
      "первый base hardcode"
    ],
    "answer": 0,
    "explain": "Zero-arg super — MRO (Method Resolution Order) задаёт порядок поиска методов при множественном наследовании по алгоритму C3.",
    "kind": "single",
    "group": "ООП продвинутый",
    "id": "m400",
    "fixed": true
  },
  {
    "topic": "secrets",
    "q": "Что такое SystemRandom?",
    "options": [
      "OS RNG интерфейс как random.Random",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "OS RNG интерфейс как random.Random. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m401",
    "fixed": true
  },
  {
    "topic": "GIL",
    "q": "Что верно про Время переключения GIL roughly связано с?",
    "options": [
      "check interval / eval breaker",
      "только OS quantum",
      "GC only",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Sys.setswitchinterval — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m402",
    "fixed": true
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
    "explain": "Принцип — ориентир; иногда две похожие вещи лучше не склеивать насильно.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m403",
    "fixed": true
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
    "explain": "Бесконечный счётчик — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m404",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что такое field(repr=False) скрывает?",
    "options": [
      "поле из __repr__",
      "из __init__",
      "утверждение про другой уровень стека",
      "из hash always"
    ],
    "answer": 0,
    "explain": "Поле из __repr__. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m405",
    "fixed": true
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
    "explain": "Да. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m406",
    "fixed": true
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
    "explain": "Разные аномалии чтения/записи; знай свою СУБД. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m407",
    "fixed": true
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
    "explain": "Нужен async CM с __aenter__/__aexit__. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m408",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует IndexError?",
    "options": [
      "LookupError",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "LookupError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m409",
    "fixed": true
  },
  {
    "topic": "warnings",
    "q": "Что такое warnings.filterwarnings управляет?",
    "options": [
      "показом предупреждений",
      "утверждение про другой уровень стека",
      "logs level only",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Показом предупреждений. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m410",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что такое __set_name__ у дескриптора?",
    "options": [
      "узнаёт имя атрибута в owner",
      "вызывается при print",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Узнаёт имя атрибута в owner. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m411",
    "fixed": true
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
    "explain": "Точные десятичные из JSON. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m412",
    "fixed": true
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
    "explain": "Бывший check interval — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m413",
    "fixed": true
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
    "explain": "Явный try/except с понятным сообщением. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m414",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что верно про islice(it, 2, 5) берёт?",
    "options": [
      "элементы с 2 по 4 (как range)",
      "первые 5",
      "с 2 до конца",
      "только 2 и 5"
    ],
    "answer": 0,
    "explain": "Ленивый срез итератора — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m415",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт Self вместо «Type[Self]» хаков?",
    "options": [
      "удобнее для fluent API",
      "runtime check",
      "быстрее",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Результат выражения — удобнее для fluent API. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m416",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что будет после исчерпания?",
    "options": [
      "StopIteration",
      "ошибка",
      "утверждение про другой уровень стека",
      "None"
    ],
    "answer": 0,
    "explain": "Протокол итератора — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "g = (x for x in range(1))\nnext(g)\nnext(g)",
    "group": "Генераторы и итераторы",
    "id": "m417",
    "fixed": true
  },
  {
    "topic": "DI",
    "q": "Что такое composition root?",
    "options": [
      "место, где собирают граф зависимостей приложения",
      "когда каждый модуль сам делает new зависимостей",
      "случайный global singleton",
      "побочный эффект на import модуля"
    ],
    "answer": 0,
    "explain": "Composition root — обычно main/bootstrap: там связывают реализации с портами. Остальной код принимает зависимости явно, а не разбрасывает new/global.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m418",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m419",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Зачем нужен ExitStack?",
    "options": [
      "динамического набора контекстов",
      "одного with",
      "async only",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Динамического набора контекстов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m420",
    "fixed": true
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
    "explain": "Результат выражения — один раз на модуль тестов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m421",
    "fixed": true
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
    "explain": "Атрибут-геттер. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m422",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m423",
    "fixed": true
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
    "explain": "Общие ctypes-объекты. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m424",
    "fixed": true
  },
  {
    "topic": "DRY",
    "q": "Два модуля копируют одну и ту же валидацию email — что нарушено?",
    "options": [
      "DRY",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "DRY. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m425",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "топ-2 частых",
      "сортирует keys",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — топ-2 частых. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m426",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance({'a': 1}, dict))",
    "group": "Typing и dataclasses",
    "id": "m427",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что вернёт gen.send(x) до первого yield?",
    "options": [
      "нужно сначала next()/send(None)",
      "сразу x",
      "ошибка",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Генератор должен дойти до yield. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m428",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 429 обычно значит?",
    "options": [
      "Too Many Requests",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "429 — Too Many Requests — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m429",
    "fixed": true
  },
  {
    "topic": "asyncio",
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
    "group": "Asyncio",
    "id": "m430",
    "fixed": true
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
    "explain": "Генератор в CM. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m431",
    "fixed": true
  },
  {
    "topic": "EAFP",
    "q": "Что такое EAFP?",
    "options": [
      "Easier to Ask Forgiveness than Permission",
      "Always Find Path",
      "Error After Function",
      "Python anti-pattern"
    ],
    "answer": 0,
    "explain": "Easier to Ask Forgiveness than Permission. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m432",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Зачем нужен __reversed__?",
    "options": [
      "чтобы объект поддерживал reversed(obj) со своей логикой",
      "чтобы сортировать элементы",
      "это синоним __iter__",
      "только для числовых типов"
    ],
    "answer": 0,
    "explain": "__reversed__ — протокол для reversed(). Если его нет, reversed может идти через последовательность (__len__/__getitem__). Это не sort и не замена __iter__.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m433",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print('X'.casefold() == 'x')",
    "group": "Stdlib и производительность",
    "id": "m434",
    "fixed": true
  },
  {
    "topic": "multiprocessing",
    "q": "Что такое forkserver start method?",
    "options": [
      "промежуточный сервер для форков",
      "только Windows",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Промежуточный сервер для форков. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Потоки, процессы, GIL",
    "id": "m435",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что такое God object?",
    "options": [
      "один класс знает и делает слишком много",
      "singleton модуль",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Один класс знает и делает слишком много. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m436",
    "fixed": true
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
    "explain": "Удобное наследование под dict-like. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m437",
    "fixed": true
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
    "id": "m438",
    "fixed": true
  },
  {
    "topic": "генераторы",
    "q": "Что означает: gen = (x for x in range(3)); list(gen); list(gen) второй раз?",
    "options": [
      "[]",
      "[0,1,2]",
      "ошибка",
      "[0,1,2] снова"
    ],
    "answer": 0,
    "explain": "Генератор одноразовый — после exhaust пусто. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m439",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 409 обычно значит?",
    "options": [
      "Conflict",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "409 — Conflict — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m440",
    "fixed": true
  },
  {
    "topic": "async",
    "q": "Зачем нужен async with?",
    "options": [
      "async context managers",
      "обычного open только",
      "утверждение про другой уровень стека",
      "files sync"
    ],
    "answer": 0,
    "explain": "Async context managers. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m441",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое asynccontextmanager?",
    "options": [
      "async CM из генератора",
      "sync only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Async CM из генератора. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m442",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое handlers определяют?",
    "options": [
      "куда писать",
      "формат only",
      "уровень only",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Stream/File/… Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m443",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Зачем нужен __index__?",
    "options": [
      "преобразования к int индекса/среза",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "bool only"
    ],
    "answer": 0,
    "explain": "Преобразования к int индекса/среза. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m444",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "{\"a\": 1}",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в {\"a\": 1}. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'a': 1}))",
    "group": "Stdlib и производительность",
    "id": "m445",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Верно ли утверждение: Easier to Ask Forgiveness than Permission» в Python?",
    "options": [
      "сначала попробовать, поймать исключение",
      "всегда if перед каждым шагом",
      "только для async",
      "запрет try/except"
    ],
    "answer": 0,
    "explain": "Сначала попробовать, поймать исключение. в Python».",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m446",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что такое deque хорош для?",
    "options": [
      "быстрых append/pop с обоих концов",
      "случайного доступа O(1) лучше list",
      "ключей dict",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Быстрых append/pop с обоих концов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m447",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что такое unique() декоратор?",
    "options": [
      "запрещает дубли значений",
      "сортирует",
      "авто int",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Enum.unique — Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m448",
    "fixed": true
  },
  {
    "topic": "итераторы",
    "q": "Что такое Итератор должен иметь?",
    "options": [
      "__iter__ и __next__",
      "только len",
      "утверждение про другой уровень стека",
      "__getitem__ обязательно"
    ],
    "answer": 0,
    "explain": "__iter__ и __next__. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m449",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 200 — кратко?",
    "options": [
      "успех с телом",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 200: успех с телом — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m450",
    "fixed": true
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
    "explain": "Результат выражения — loop текущей корутины. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Asyncio",
    "id": "m451",
    "fixed": true
  },
  {
    "topic": "exceptions",
    "q": "От чего наследует StopIteration?",
    "options": [
      "Exception",
      "только object",
      "утверждение про другой уровень стека",
      "OSError всегда"
    ],
    "answer": 0,
    "explain": "Exception. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m452",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что возвращает Filter.filter?",
    "options": [
      "True чтобы пропустить запись",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Булев отбор — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m453",
    "fixed": true
  },
  {
    "topic": "property",
    "q": "Что верно про obj.x = 1 при property без setter?",
    "options": [
      "AttributeError",
      "создаст в __dict__ всегда",
      "утверждение про другой уровень стека",
      "TypeError only"
    ],
    "answer": 0,
    "explain": "AttributeError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m454",
    "fixed": true
  },
  {
    "topic": "secrets",
    "q": "Что такое token_urlsafe?",
    "options": [
      "криптостойкий токен для URL",
      "утверждение про другой уровень стека",
      "random.random",
      "hash lib name"
    ],
    "answer": 0,
    "explain": "Криптостойкий токен для URL. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m455",
    "fixed": true
  },
  {
    "topic": "SoC",
    "q": "View смешивает SQL-запросы и HTML-шаблон в одной функции — что нарушено?",
    "options": [
      "Separation of Concerns",
      "утверждение про другой уровень стека",
      "только LSP",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Separation of Concerns. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m456",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что такое islice(it, 10)?",
    "options": [
      "первые 10 элементов лениво",
      "сортировка",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Срез итератора — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m457",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что делает asdict не?",
    "options": [
      "глубокую магию произвольных объектов идеально всегда",
      "рекурсию dataclass/dict/list в простых случаях",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Глубокую магию произвольных объектов идеально всегда. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m458",
    "fixed": true
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
    "id": "m459",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 201 обычно значит?",
    "options": [
      "Created",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "201 — Created — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m460",
    "fixed": true
  },
  {
    "topic": "исключения",
    "q": "Что верно про except Exception as e: — e доступен?",
    "options": [
      "в блоке except (и очищается после в 3)",
      "глобально",
      "в finally всегда",
      "никогда"
    ],
    "answer": 0,
    "explain": "Имя исключения — Исключения лучше ловить точечно: широкий except Exception маскирует настоящие ошибки.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m461",
    "fixed": true
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
    "explain": "Временно патчит атрибуты/env. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m462",
    "fixed": true
  },
  {
    "topic": "магические",
    "q": "Что возвращает __enter__?",
    "options": [
      "то, что попадёт в as",
      "всегда None",
      "self обязателен языком",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "То, что попадёт в as. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Контекст и магические методы",
    "id": "m463",
    "fixed": true
  },
  {
    "topic": "refcount",
    "q": "Что такое sys.getrefcount(obj)?",
    "options": [
      "считает ссылки (+временные)",
      "размер байт",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Считает ссылки (+временные). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m464",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Когда LBYL уместнее EAFP?",
    "options": [
      "когда проверка дешевле и предсказуема",
      "никогда",
      "утверждение про другой уровень стека",
      "только в C"
    ],
    "answer": 0,
    "explain": "Когда проверка дешевле и предсказуема. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m465",
    "fixed": true
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
    "explain": "Перестановки — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m466",
    "fixed": true
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
    "explain": "Исключает из __hash__. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m467",
    "fixed": true
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
    "explain": "Generator expression материализуется через list. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(4)))",
    "group": "Генераторы и итераторы",
    "id": "m468",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `HAVING`?",
    "options": [
      "фильтр после GROUP BY",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "HAVING в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m469",
    "fixed": true
  },
  {
    "topic": "context",
    "q": "Что такое chdir контекст (3.11)?",
    "options": [
      "временная смена cwd",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Временная смена cwd. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Исключения и контекст",
    "id": "m470",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что такое scope='session' у фикстуры?",
    "options": [
      "создать один раз на всю сессию pytest",
      "на каждый тест",
      "никогда не кэшировать",
      "только module"
    ],
    "answer": 0,
    "explain": "Создать один раз на всю сессию pytest. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m471",
    "fixed": true
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
    "explain": "Часто при закрытии (зависит от delete). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m472",
    "fixed": true
  },
  {
    "topic": "Zen",
    "q": "Что такое «Readability counts» про что?",
    "options": [
      "код читают чаще, чем пишут",
      "короче = лучше",
      "комментарии не нужны",
      "только PEP 8"
    ],
    "answer": 0,
    "explain": "Код читают чаще, чем пишут. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m473",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatch регистрирует?",
    "options": [
      "перегрузки по типу",
      "по имени аргумента любому",
      "по kwargs only",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Перегрузки по типу. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m474",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что переносит ParamSpec (PEP 612)?",
    "options": [
      "параметры callable — чтобы декораторы сохраняли сигнатуру",
      "только значения TypeVar без параметров функции",
      "ускорение байткода в runtime",
      "пути файловой системы pathlib"
    ],
    "answer": 0,
    "explain": "ParamSpec нужен в декораторах/обёртках: сохранить *args/**kwargs типы исходной функции. Это typing для checker'а, не runtime-ускорение.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m475",
    "fixed": true
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
    "explain": "Делегирует итерацию подгенератору. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m476",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что вернёт UPSERT (ON CONFLICT)?",
    "options": [
      "вставить или обновить",
      "только delete",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Идемпотентные записи — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m477",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что вернёт freezegun / time-machine?",
    "options": [
      "заморозка времени в тестах",
      "mock HTTP",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — заморозка времени в тестах. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m478",
    "fixed": true
  },
  {
    "topic": "struct",
    "q": "Что такое bool в format?",
    "options": [
      "'?'",
      "'b' only",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "'?'. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m479",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Какой типичный симптом Circular dependency между модулями A и B — типичный?",
    "options": [
      "импорт на уровне модуля в обе стороны",
      "только typing",
      "только pytest",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Импорт на уровне модуля в обе стороны. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m480",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "C(5,2) = 10 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(5), 2))))",
    "group": "Collections и itertools",
    "id": "m481",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое Final[x]?",
    "options": [
      "не должен переназначаться",
      "константа CPU",
      "frozen dataclass",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Не должен переназначаться. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m482",
    "fixed": true
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
    "explain": "Также пробрасывает send/throw. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m483",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое eager load?",
    "options": [
      "заранее подгружает связи",
      "откладывает forever",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Joinedload/selectin — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m484",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Зачем нужен conftest.py в pytest?",
    "options": [
      "общие фикстуры и хуки для каталога тестов",
      "запуск prod",
      "конфиг pip",
      "проверку только вручную без автотестов"
    ],
    "answer": 0,
    "explain": "Общие фикстуры и хуки для каталога тестов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m485",
    "fixed": true
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
    "explain": "Сортирует ключи в dumps. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m486",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Registry плагинов вместо giant if/elif — пример каких принципов?",
    "options": [
      "Open/Closed и Strategy: новые ветки — новые реализации",
      "нарушение LSP",
      "только про GIL",
      "антипаттерн без исключений"
    ],
    "answer": 0,
    "explain": "Регистр стратегий/плагинов позволяет добавить обработчик без правки гигантского if/elif — Open/Closed + Strategy.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m487",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "1",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "1. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 4))",
    "group": "Collections и itertools",
    "id": "m488",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что верно про def f(*args, **kwargs) порядок в сигнатуре?",
    "options": [
      "*args затем **kwargs",
      "**kwargs затем *args",
      "утверждение про другой уровень стека",
      "только kwargs"
    ],
    "answer": 0,
    "explain": "*args затем **kwargs. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m489",
    "fixed": true
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
    "explain": "Генератор по next — Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "def g():\n    yield 0\n    yield 1\n    yield 2\nfor x in g():\n    print(x)",
    "group": "Генераторы и итераторы",
    "id": "m490",
    "fixed": true
  },
  {
    "topic": "ASGI",
    "q": "Что такое websocket в ASGI?",
    "options": [
      "отдельный тип соединения",
      "HTTP only hack",
      "WSGI feature",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Отдельный тип соединения. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m491",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что такое mutation testing?",
    "options": [
      "намеренно ломает код и смотрит, падают ли тесты",
      "фаззинг сети случайными пакетами",
      "нагрузочный тест RPS",
      "сравнение snapshot UI"
    ],
    "answer": 0,
    "explain": "Mutation testing «убивает» мутантов: если после мелкой порчи кода тесты зелёные — suite слаб. Это не load/fuzz/snapshot, а оценка силы проверок.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m492",
    "fixed": true
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
    "explain": "Ссылаться без удержания GC. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m493",
    "fixed": true
  },
  {
    "topic": "SoC",
    "q": "Верно ли утверждение: Separation of Concerns (разделение ответственности)?",
    "options": [
      "разные аспекты системы в разных модулях",
      "один класс на весь проект",
      "только микросервисы",
      "отказ от слоёв"
    ],
    "answer": 0,
    "explain": "Разные аспекты системы в разных модулях. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m494",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "1. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import heapq\nh = [4, 4, 1]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m495",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что такое order=True добавляет?",
    "options": [
      "сравнения < <= и т.д.",
      "hash всегда",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Сравнения < <= и т.д. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m496",
    "fixed": true
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
    "explain": "Generator expression материализуется через list. Генератор отдаёт значения через yield и сохраняет состояние между вызовами next.",
    "kind": "single",
    "code": "print(list(x * x for x in range(3)))",
    "group": "Генераторы и итераторы",
    "id": "m497",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 504 — кратко?",
    "options": [
      "таймаут шлюза",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 504: таймаут шлюза — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m498",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое getLogger(__name__)?",
    "options": [
      "иерархия логгеров по модулю",
      "root always",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Best practice — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m499",
    "fixed": true
  },
  {
    "topic": "копирование",
    "q": "Что делает copy.copy?",
    "options": [
      "shallow copy",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Shallow copy. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m500",
    "fixed": true
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
    "explain": "Доступ к данным от бизнес-логики. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m501",
    "fixed": true
  },
  {
    "topic": "array",
    "q": "В чём разница: array.array vs list?",
    "options": [
      "типизированный компактный массив",
      "то же самое",
      "всегда быстрее dict",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Типизированный компактный массив. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m502",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что даёт frozen=True?",
    "options": [
      "неизменяемые экземпляры (приблизительно)",
      "быстрее всегда",
      "slots автоматически до 3.9",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Неизменяемые экземпляры (приблизительно). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m503",
    "fixed": true
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
    "explain": "Для return из генератора. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Генераторы и итераторы",
    "id": "m504",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что верно про SELECT … LIMIT 1 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 1 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m505",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое basicConfig повторный вызов?",
    "options": [
      "часто no-op если уже handlers",
      "всегда пересоздаёт",
      "удаляет root",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Идиома один раз — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m506",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "В чём разница: re.FULLMATCH vs match?",
    "options": [
      "вся строка vs с начала",
      "одно и то же",
      "только bytes",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Вся строка vs с начала. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m507",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что верно про Shotgun surgery — когда?",
    "options": [
      "одно изменение требует правок во многих файлах",
      "один файл меняется",
      "только тесты",
      "только docs"
    ],
    "answer": 0,
    "explain": "Одно изменение требует правок во многих файлах. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m508",
    "fixed": true
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
    "explain": "Результат выражения — может уйти в минус. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m509",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что означает: паттерн match case point.x: без кавычек в Python 3.10+?",
    "options": [
      "value pattern / dotted",
      "всегда capture name",
      "ошибка",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Value pattern / dotted. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m510",
    "fixed": true
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
    "explain": "Код вычисляется в нет (Py3). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "[i for i in range(3)]\n# i ?",
    "group": "Генераторы и итераторы",
    "id": "m511",
    "fixed": true
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
    "explain": "Повтор не должен менять состояние (семантика). В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m512",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что проверяет doctest?",
    "options": [
      "примеры в docstring",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Примеры в docstring. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m513",
    "fixed": true
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
    "explain": "Сторонний regex иногда богаче re. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m514",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что вернёт Mutable default argument def f(x=[]) — ловушка потому что?",
    "options": [
      "список один на все вызовы",
      "list immutable",
      "ошибка",
      "только в classmethod"
    ],
    "answer": 0,
    "explain": "Результат выражения — список один на все вызовы. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m515",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Какова амортизированная сложность deque.appendleft?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Collections.deque заточен под O(1) append/appendleft/pop/popleft. У list appendleft был бы O(n) из-за сдвига.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m516",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Зачем нужен Protocol?",
    "options": [
      "структурной типизации (duck typing)",
      "наследования классов",
      "это ускорение байткода в runtime",
      "это обязательная проверка типов на каждом вызове"
    ],
    "answer": 0,
    "explain": "Структурной типизации (duck typing). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m517",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `GROUP BY`?",
    "options": [
      "агрегация по ключу",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "GROUP BY в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m518",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что такое fixture autouse=True?",
    "options": [
      "фикстура подключается ко всем тестам в scope автоматически",
      "только к одному файлу вручную",
      "отключает assert",
      "mock random"
    ],
    "answer": 0,
    "explain": "Фикстура подключается ко всем тестам в scope автоматически. Смотри, что именно проверяет инструмент и чего он не делает.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m519",
    "fixed": true
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
    "explain": "Результат выражения — сортирует по второму элементу. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m520",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Factory Method создаёт?",
    "options": [
      "объект через метод подкласса/фабрики",
      "только singleton",
      "только metaclass",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Объект через метод подкласса/фабрики. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m521",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "8",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "8. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=3))))",
    "group": "Collections и itertools",
    "id": "m522",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что вернёт case {'x': _, **rest}:?",
    "options": [
      "остальные ключи в rest",
      "ошибка",
      "list",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — остальные ключи в rest. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m523",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 500 — кратко?",
    "options": [
      "ошибка сервера",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 500: ошибка сервера — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m524",
    "fixed": true
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
    "explain": "Перехватить stdout/stderr в тесте. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m525",
    "fixed": true
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
    "explain": "Match — паттерн на путь, glob — поиск в дереве. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m526",
    "fixed": true
  },
  {
    "topic": "cohesion",
    "q": "Что означает: Сильная связанность (tight coupling) между модулями?",
    "options": [
      "плохо: изменение в одном ломает другой",
      "всегда хорошо",
      "только про потоки",
      "синоним cohesion"
    ],
    "answer": 0,
    "explain": "Плохо: изменение в одном ломает другой. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m527",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "defaultdict(list): d['x'].append(1) — что с d['x']?",
    "options": [
      "[1], ключ создался сам",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "ошибка типа"
    ],
    "answer": 0,
    "explain": "[1], ключ создался сам. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m528",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт Optional[str] эквивалент?",
    "options": [
      "str | None",
      "str | int",
      "Union[str, int]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — str | None. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m529",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое буква A в ACID?",
    "options": [
      "Atomicity — транзакция либо полностью применяется, либо полностью откатывается",
      "Availability — сервис всегда отвечает 200",
      "Asynchrony — все операции только через asyncio",
      "Aggregation — данные всегда в одной таблице"
    ],
    "answer": 0,
    "explain": "A в ACID — Atomicity: промежуточного «наполовину записали» для клиента не видно. Упал посередине — откат. Не путать с Availability из CAP.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m530",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Что верно про Coverage 100% не гарантирует?",
    "options": [
      "отсутствие логических багов",
      "что строки выполнялись",
      "что тесты есть",
      "отчёт pytest-cov"
    ],
    "answer": 0,
    "explain": "Отсутствие логических багов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m531",
    "fixed": true
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
    "explain": "Код вычисляется в 'x=10'. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "x = 10\nprint(f'{x=}')",
    "group": "Stdlib и производительность",
    "id": "m532",
    "fixed": true
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
    "explain": "Вынести общую функцию/модуль. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m533",
    "fixed": true
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
    "explain": "Выбрасывает с противоположного конца. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m534",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что такое InitVar?",
    "options": [
      "поле только для __init__, не хранится",
      "classmethod",
      "утверждение про другой уровень стека",
      "slots field"
    ],
    "answer": 0,
    "explain": "Поле только для __init__, не хранится. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m535",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 401 обычно значит?",
    "options": [
      "Unauthorized",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "401 — Unauthorized — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m536",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое logger.exception внутри except?",
    "options": [
      "лог + traceback",
      "только message",
      "raise снова",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Удобный helper — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m537",
    "fixed": true
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
    "explain": "Для частых ключей — Строки в Python неизменяемы: любой «изменяющий» метод возвращает новую строку, а срезы работают так же, как у последовательностей.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m538",
    "fixed": true
  },
  {
    "topic": "принципы",
    "q": "Что верно про Magic numbers в коде — проблема потому что?",
    "options": [
      "непонятен смысл без именованной константы",
      "медленнее int",
      "ломает GIL",
      "запрещены PEP 8"
    ],
    "answer": 0,
    "explain": "Непонятен смысл без именованной константы. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m539",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что означает: Сколько уникальных ключей кэша у fib(3) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 4 (0..n)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Примерно 4 (0..n). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m540",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "3 True",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Код вычисляется в 3 True. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "print((n := 3), n == 3)",
    "group": "Typing и dataclasses",
    "id": "m541",
    "fixed": true
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
    "explain": "DELETE безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай).",
    "kind": "single",
    "group": "Веб и API",
    "id": "m542",
    "fixed": true
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
    "explain": "Подготавливает данные/ресурс для теста. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m543",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что верно про json.dumps({1: 'a'}) ключ станет?",
    "options": [
      "строкой '1'",
      "int 1 в JSON",
      "байтами",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Строкой '1'. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m544",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Допустим ли синтаксис Паттерн Decorator (GoF) отличается от @decorator?",
    "options": [
      "оба оборачивают объект/функцию; GoF — про композицию объектов",
      "утверждение про другой уровень стека",
      "GoF только для классов C++",
      "@ только для async"
    ],
    "answer": 0,
    "explain": "Оба оборачивают объект/функцию; GoF — про композицию объектов. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m545",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "7",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "7. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 0)(7))",
    "group": "Collections и itertools",
    "id": "m546",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое list[int] в 3.9+?",
    "options": [
      "параметризованный тип",
      "runtime list только int enforced",
      "синтаксис ошибки до 3.12",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Параметризованный тип. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m547",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое CORS preflight?",
    "options": [
      "OPTIONS перед «сложным» запросом",
      "GET always",
      "TLS handshake",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Браузерная безопасность — Запросом». В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m548",
    "fixed": true
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
    "explain": "Удобно фильтровать по имени пакета. Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m549",
    "fixed": true
  },
  {
    "topic": "weakref",
    "q": "Что такое finalize(obj, callback)?",
    "options": [
      "вызов при GC объекта",
      "утверждение про другой уровень стека",
      "при import",
      "никогда"
    ],
    "answer": 0,
    "explain": "Вызов при GC объекта. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m550",
    "fixed": true
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
    "explain": "Модуль как единственный экземпляр. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m551",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что делает islice(it, None, None, 2)?",
    "options": [
      "берёт каждый второй элемент из итератора",
      "разворачивает итератор в список дважды",
      "всегда возвращает пустой итератор",
      "сортирует элементы по убыванию"
    ],
    "answer": 0,
    "explain": "Itertools.islice(it, start, stop, step): start/stop = None значит «с начала / до конца», step=2 — каждый второй элемент, лениво, без полного списка.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m552",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Для чего в условии пишут (n := len(a)) > 0?",
    "options": [
      "присваивание в выражении",
      "аннотацию",
      "утверждение про другой уровень стека",
      "comprehension only"
    ],
    "answer": 0,
    "explain": "Присваивание в выражении. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m553",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое connection pool exhaustion?",
    "options": [
      "все коннекты заняты — очередь/ошибки",
      "всегда OOM",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Лимиты пула — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m554",
    "fixed": true
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
    "explain": "Временную директорию pathlib. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m555",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "dict",
      "ошибка",
      "None",
      "tuple"
    ],
    "answer": 0,
    "explain": "Dict. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"x\": [1, 2]}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m556",
    "fixed": true
  },
  {
    "topic": "patterns",
    "q": "Что такое Паттерн Strategy в Python чаще всего?",
    "options": [
      "передача callable/класса стратегии",
      "только наследование от AbstractStrategy",
      "global switch",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Передача callable/класса стратегии. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m557",
    "fixed": true
  },
  {
    "topic": "dict",
    "q": "В чём опасность?",
    "options": [
      "один list на все ключи",
      "утверждение про другой уровень стека",
      "нет опасности",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Код вычисляется в один list на все ключи. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "d = dict.fromkeys(['a', 'b'], [])\nd['a'].append(1)\nprint(d['b'])",
    "group": "Collections и itertools",
    "id": "m558",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что вернёт case [x, *rest]: матчит?",
    "options": [
      "последовательность ≥1 с хвостом",
      "только list длины 2",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — последовательность ≥1 с хвостом. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m559",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Что такое OAuth2PasswordBearer?",
    "options": [
      "схема доставания токена",
      "ORM user",
      "JWT decode auto complete security",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Схема доставания токена. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m560",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что такое RotatingFileHandler?",
    "options": [
      "ротация по размеру",
      "по времени only Timed",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Файловые логи — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m561",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про bytearray для накопления байт?",
    "options": [
      "мутабельный буфер",
      "immutable как bytes",
      "утверждение про другой уровень стека",
      "memoryview ban"
    ],
    "answer": 0,
    "explain": "Эффективная сборка — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m562",
    "fixed": true
  },
  {
    "topic": "YAGNI",
    "q": "Программист добавляет поддержку 10 валют «на всякий случай» — что нарушено?",
    "options": [
      "YAGNI",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "YAGNI. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m563",
    "fixed": true
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
    "explain": "Результат выражения — итератор с повторами по счёту. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m564",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "1",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "1. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "if (x := 1):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m565",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Зачем нужен circuit breaker при вызове внешнего сервиса?",
    "options": [
      "временно перестаёт звать падающую зависимость и даёт ей «остыть»",
      "всегда повторяет запрос без паузы до успеха",
      "шифрует трафик между сервисами",
      "балансирует CPU между потоками Python"
    ],
    "answer": 0,
    "explain": "Circuit breaker после серии ошибок открывается и быстро отказывает без реальных вызовов. Через паузу пробует снова (half-open). Так не устраивают retry storm и не тратят бюджет на заведомо мёртвый сервис.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m566",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что такое snapshot testing?",
    "options": [
      "сравнение с эталонным выводом",
      "property based",
      "load test",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Сравнение с эталонным выводом. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m567",
    "fixed": true
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
    "explain": "Результат выражения — Path с платформенными разделителями. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m568",
    "fixed": true
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
    "explain": "Дублированию логики и знаний. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Архитектура и дизайн",
    "id": "m569",
    "fixed": true
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
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(4)))))",
    "group": "Collections и itertools",
    "id": "m570",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Как вызвать f?",
    "options": [
      "f(1)",
      "f(a=1)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "F(1). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "def f(a, /):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m571",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое индекс ускоряет?",
    "options": [
      "поиск/фильтр ценой записи",
      "всегда inserts",
      "json dumps",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Tradeoff — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m572",
    "fixed": true
  },
  {
    "topic": "mock",
    "q": "Что проверяет assert_called_once_with(...)?",
    "options": [
      "ровно один вызов с аргументами",
      "любое число вызовов",
      "только тип",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Ровно один вызов с аргументами. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m573",
    "fixed": true
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
    "explain": "Линейная сборка — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m574",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "P(3,2) = 6 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 2))))",
    "group": "Collections и itertools",
    "id": "m575",
    "fixed": true
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
    "explain": "Избежать shared mutable default. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m576",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое миграция Alembic?",
    "options": [
      "версионирование схемы",
      "ORM query cache",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Эволюция БД — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m577",
    "fixed": true
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
    "explain": "Ожидаемое исключение. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m578",
    "fixed": true
  },
  {
    "topic": "копирование",
    "q": "Что верно про copy.deepcopy нужен когда?",
    "options": [
      "есть вложенные изменяемые",
      "всегда вместо =",
      "для int",
      "для None"
    ],
    "answer": 0,
    "explain": "Есть вложенные изменяемые. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m579",
    "fixed": true
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
    "explain": "Islice — ленивый срез — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([10, 20, 30, 40], 2)))",
    "group": "Collections и itertools",
    "id": "m580",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что вернёт Positional-only до /?",
    "options": [
      "нельзя передать по имени",
      "можно только по имени",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — нельзя передать по имени. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m581",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 409 — кратко?",
    "options": [
      "конфликт состояния",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 409: конфликт состояния. В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m582",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что верно про monkeypatch / mock патчат?",
    "options": [
      "атрибуты/окружение на время теста",
      "продакшен БД",
      "утверждение про другой уровень стека",
      "байткод"
    ],
    "answer": 0,
    "explain": "Атрибуты/окружение на время теста. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m583",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про Для многих membership checks лучше?",
    "options": [
      "set",
      "утверждение про другой уровень стека",
      "tuple всегда",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Среднее O(1) у set — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m584",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "11",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "11. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 10)(1))",
    "group": "Collections и itertools",
    "id": "m585",
    "fixed": true
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
    "explain": "Protocol — утиная типизация; ABC — номинальная. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m586",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что верно про SELECT … LIMIT 50 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 50 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m587",
    "fixed": true
  },
  {
    "topic": "mock",
    "q": "Что ограничивает spec=True?",
    "options": [
      "атрибуты мока интерфейсом",
      "скорость",
      "утверждение про другой уровень стека",
      "patch target"
    ],
    "answer": 0,
    "explain": "Атрибуты мока интерфейсом. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m588",
    "fixed": true
  },
  {
    "topic": "f-string",
    "q": "Что вернёт f'{x=!r}' покажет?",
    "options": [
      "имя и repr значения",
      "только x",
      "ошибку до 3.12",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — имя и repr значения. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m589",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что верно про deque.popleft() сложность?",
    "options": [
      "O(1)",
      "O(n) как list.pop(0)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "O(1). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m590",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeVarTuple / Unpack?",
    "options": [
      "вариативные типы кортежей",
      "только dict",
      "обязательная проверка типов на каждом вызове в CPython",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — вариативные типы кортежей. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m591",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 204 — кратко?",
    "options": [
      "успех без тела",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 204: успех без тела — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m592",
    "fixed": true
  },
  {
    "topic": "testing",
    "q": "Зачем нужен pytest.mark.parametrize?",
    "options": [
      "один тест — много наборов вход/ожидание",
      "параллель на GPU",
      "coverage 100%",
      "mock всего"
    ],
    "answer": 0,
    "explain": "Один тест — много наборов вход/ожидание. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m593",
    "fixed": true
  },
  {
    "topic": "hashlib",
    "q": "Что вернёт pbkdf2_hmac / scrypt?",
    "options": [
      "KDF для паролей",
      "быстрый checksum",
      "ошибка",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Результат выражения — KDF для паролей. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m594",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatch?",
    "options": [
      "мультиметод по типу 1-го аргумента",
      "async gather",
      "утверждение про другой уровень стека",
      "partial only"
    ],
    "answer": 0,
    "explain": "Мультиметод по типу 1-го аргумента. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m595",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что такое Enum члены сравниваются?",
    "options": [
      "по идентичности/значению члена, не как «сырые» int без mixin",
      "всегда как int",
      "только по имени str",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "По идентичности/значению члена, не как «сырые» int без mixin. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m596",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое идемпотентный PUT?",
    "options": [
      "повтор того же эффекта",
      "всегда создаёт новый ресурс",
      "утверждение про другой уровень стека",
      "только DELETE"
    ],
    "answer": 0,
    "explain": "Семантика — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m597",
    "fixed": true
  },
  {
    "topic": "logging",
    "q": "Что делает Logger.propagate?",
    "options": [
      "передача родителям",
      "stop all",
      "change level",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Иерархия — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m598",
    "fixed": true
  },
  {
    "topic": "is",
    "q": "Что означает: Обычно (257 is 257) для литералов в одном выражении?",
    "options": [
      "часто True из-за peephole, но не контракт",
      "всегда False",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Часто True из-за peephole, но не контракт. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m599",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что верно про lru_cache(maxsize=2) хранит?",
    "options": [
      "до 2 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "До 2 результатов вызовов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m600",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Зачем нужен Generic[T]?",
    "options": [
      "параметризуемых классов",
      "это ускорение байткода в runtime",
      "это обязательная проверка типов на каждом вызове",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Параметризуемых классов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m601",
    "fixed": true
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
    "explain": "Разные аномалии чтения/записи; знай свою СУБД. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m602",
    "fixed": true
  },
  {
    "topic": "тесты",
    "q": "Что делает hypothesis.given?",
    "options": [
      "property-based входы",
      "утверждение про другой уровень стека",
      "fixture data fixed only",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Property-based входы. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m603",
    "fixed": true
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
    "explain": "Код вычисляется в True (shallow). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m604",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "P(3,3) = 6 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 3))))",
    "group": "Collections и itertools",
    "id": "m605",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "2",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "2. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "if (x := 2):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m606",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 401 — кратко?",
    "options": [
      "нужна аутентификация",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 401: нужна аутентификация. В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m607",
    "fixed": true
  },
  {
    "topic": "mock",
    "q": "Что такое patch.dict(os.environ)?",
    "options": [
      "временно меняет env",
      "утверждение про другой уровень стека",
      "удаляет OS",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Временно меняет env. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m608",
    "fixed": true
  },
  {
    "topic": "регулярки",
    "q": "Какой стандартный модуль отвечает за regex?",
    "options": [
      "re",
      "встроенный литерал /pattern/ как в JS",
      "отдельная утилита grep в stdlib",
      "модуль pattern"
    ],
    "answer": 0,
    "explain": "Регулярки в stdlib — модуль re. Отдельного встроенного /regex/ синтаксиса в Python нет.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m609",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что вернёт reduce(lambda a,b:a+b, [1,2,3])?",
    "options": [
      "6",
      "[1,2,3]",
      "ошибка",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Результат выражения — 6. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m610",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "one",
      "утверждение про другой уровень стека",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "One. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m611",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `WHERE`?",
    "options": [
      "фильтр строк до группировки",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "WHERE в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m612",
    "fixed": true
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
    "explain": "Много unit, меньше integration, ещё меньше e2e. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Тесты и качество",
    "id": "m613",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про много append затем join для str частей?",
    "options": [
      "хороший паттерн",
      "хуже += всегда в CPython без оговорок? не опирайся",
      "утверждение про другой уровень стека",
      "только bytearray"
    ],
    "answer": 0,
    "explain": "Читаемо и предсказуемо — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m614",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "2",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "2. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 4))",
    "group": "Collections и itertools",
    "id": "m615",
    "fixed": true
  },
  {
    "topic": "attrs/pydantic",
    "q": "Что верно про Pydantic в отличие от dataclass часто?",
    "options": [
      "валидирует данные на runtime",
      "только генерирует __init__",
      "заменяет GIL",
      "компилирует C"
    ],
    "answer": 0,
    "explain": "Валидирует данные на runtime. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m616",
    "fixed": true
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
    "explain": "Явный join/options — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m617",
    "fixed": true
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
    "explain": "Pure без I/O. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m618",
    "fixed": true
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
    "explain": "Код вычисляется в [('a', 2), ('b', 1)]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aab').most_common(2))",
    "group": "Collections и itertools",
    "id": "m619",
    "fixed": true
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
    "explain": "Результат выражения — функцию из int в str. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m620",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `JOIN`?",
    "options": [
      "связь таблиц",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "JOIN в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m621",
    "fixed": true
  },
  {
    "topic": "struct",
    "q": "Что возвращает struct.calcsize(fmt)?",
    "options": [
      "размер в байтах для данного формата упаковки",
      "скомпилированный C-код",
      "размер JSON-строки",
      "хеш строки формата"
    ],
    "answer": 0,
    "explain": "Struct.calcsize(fmt) считает, сколько байт займёт pack(fmt, ...). Нужно для буферов и бинарных протоколов.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m622",
    "fixed": true
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
    "explain": "Кастомная свёртка — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m623",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "empty",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в empty. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "x = []\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m624",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 502 обычно значит?",
    "options": [
      "Bad Gateway",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "502 — Bad Gateway — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m625",
    "fixed": true
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
    "explain": "A/b. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('a', 'b'))",
    "group": "Stdlib и производительность",
    "id": "m626",
    "fixed": true
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
    "explain": "Мемоизация с лимитом. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m627",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Для чего нужны Flag / IntFlag?",
    "options": [
      "для битовых флагов, которые можно комбинировать через |",
      "для перечисления обычных строк",
      "для JSON Schema",
      "для аннотаций pathlib"
    ],
    "answer": 0,
    "explain": "Flag/IntFlag — enum с битовыми масками: |, & и проверки членства. Обычный Enum/StrEnum — про другие сценарии.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m628",
    "fixed": true
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
    "explain": "Разные аномалии чтения/записи; знай свою СУБД. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m629",
    "fixed": true
  },
  {
    "topic": "weakref",
    "q": "Что верно про WeakValueDictionary забывает значение когда?",
    "options": [
      "не осталось сильных ссылок на объект",
      "всегда через 1с",
      "при hash collision",
      "никогда"
    ],
    "answer": 0,
    "explain": "Не осталось сильных ссылок на объект. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m630",
    "fixed": true
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
    "explain": "Цикл сдвиг на 2 вправо (отриц. — влево). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m631",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance((1,), tuple))",
    "group": "Typing и dataclasses",
    "id": "m632",
    "fixed": true
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
    "explain": "De facto — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m633",
    "fixed": true
  },
  {
    "topic": "sort",
    "q": "Что такое Timsort хорошо для?",
    "options": [
      "частично упорядоченных данных",
      "только random",
      "linked list C",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Частично упорядоченных данных. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m634",
    "fixed": true
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
    "explain": "Batched(n) группирует по n (3.12+). Если нет — skip? Better use classic::.",
    "kind": "single",
    "code": "from itertools import islice\nit = iter([1, 2, 3, 4])\nprint([tuple(islice(it, 2)), tuple(islice(it, 2))])",
    "group": "Collections и itertools",
    "id": "m635",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт TypeAlias (3.10+/3.12 type)?",
    "options": [
      "явный алиас типа",
      "runtime cast",
      "ошибка",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Результат выражения — явный алиас типа. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m636",
    "fixed": true
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
    "explain": "Побочные эффекты — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m637",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'42'",
      "'42'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "'42'. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m638",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что такое groupby требует?",
    "options": [
      "часто предварительной сортировки по ключу",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Группирует подряд идущие — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m639",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт Annotated[int, Ge(0)] идея?",
    "options": [
      "метаданные валидации/инструментов",
      "runtime int subclass",
      "ошибка",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Результат выражения — метаданные валидации/инструментов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m640",
    "fixed": true
  },
  {
    "topic": "WSGI",
    "q": "Что такое WSGI?",
    "options": [
      "интерфейс sync веб-приложений",
      "async сервер",
      "утверждение про другой уровень стека",
      "шаблонизатор"
    ],
    "answer": 0,
    "explain": "Интерфейс sync веб-приложений. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m641",
    "fixed": true
  },
  {
    "topic": "регулярки",
    "q": "Что верно про re.compile полезен когда?",
    "options": [
      "паттерн переиспользуется",
      "один раз",
      "вместо str.find нельзя",
      "для bytes только"
    ],
    "answer": 0,
    "explain": "Паттерн переиспользуется. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m642",
    "fixed": true
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
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 4))))",
    "group": "Collections и itertools",
    "id": "m643",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(a, b=1, /, c=2, *, d=3): — b?",
    "options": [
      "positional-only с default",
      "keyword-only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — positional-only с default. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m644",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про idempotent методы HTTP обычно?",
    "options": [
      "GET PUT DELETE",
      "POST только",
      "PATCH always",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Семантика HTTP — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m645",
    "fixed": true
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
    "explain": "Код вычисляется в True (shallow). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m646",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что вернёт cycle([1,2])?",
    "options": [
      "бесконечно повторяет",
      "один проход",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Бесконечный итератор — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m647",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что означает: @dataclass class Cell: x: int = -1 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Нет, int immutable default ок. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m648",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Что такое BackgroundTasks?",
    "options": [
      "работа после ответа",
      "celery cluster",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Работа после ответа. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m649",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что делает Path.write_text?",
    "options": [
      "записывает str в файл",
      "bytes only",
      "append always",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Записывает str в файл. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m650",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "10. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 5)(5))",
    "group": "Collections и itertools",
    "id": "m651",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Чем помогает LiteralString?",
    "options": [
      "SQL/shell injection на уровне типов",
      "это ускорение байткода в runtime",
      "медленного str",
      "UTF errors"
    ],
    "answer": 0,
    "explain": "SQL/shell injection на уровне типов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m652",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое Типичная роль `RETURNING`?",
    "options": [
      "вернуть строки после INSERT/UPDATE/DELETE (PG и др.)",
      "создать индекс всегда",
      "только DDL",
      "транзакция BEGIN"
    ],
    "answer": 0,
    "explain": "RETURNING в SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m653",
    "fixed": true
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
    "explain": "Память словарей — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m654",
    "fixed": true
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
    "explain": "Код вычисляется в [('a', 3), ('b', 2)]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aaabb').most_common(2))",
    "group": "Collections и itertools",
    "id": "m655",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что вернёт def f(*args, a) — a?",
    "options": [
      "keyword-only",
      "утверждение про другой уровень стека",
      "optional auto",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — keyword-only. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m656",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 200 обычно значит?",
    "options": [
      "OK",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "200 — OK — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m657",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что такое Path.glob('**/*.py')?",
    "options": [
      "рекурсивный поиск",
      "только cwd non-recursive always",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Рекурсивный поиск. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m658",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "8",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "8. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [2, 2, 2]))",
    "group": "Collections и itertools",
    "id": "m659",
    "fixed": true
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
    "explain": "TypedDict для dict-форм, dataclass — объекты. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m660",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Что такое UploadFile?",
    "options": [
      "асинхронная работа с upload",
      "только bytes sync read обязателен без api",
      "S3 client",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Асинхронная работа с upload. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m661",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m662",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "C(4,2) = 6 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 2))))",
    "group": "Collections и itertools",
    "id": "m663",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что делает frozen=True?",
    "options": [
      "приблизительно immutable экземпляр",
      "утверждение про другой уровень стека",
      "slots+dict",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Приблизительно immutable экземпляр. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m664",
    "fixed": true
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
    "explain": "Узкие Protocol вместо жирных ABC. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m665",
    "fixed": true
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
    "explain": "Search — в любом месте; match — с начала строки. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m666",
    "fixed": true
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
    "explain": "Результат выражения — in-place update. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m667",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что такое параметр `a` в `def f(a, /)`?",
    "options": [
      "positional-only",
      "keyword-only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Positional-only. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m668",
    "fixed": true
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
    "explain": "HEAD безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай).",
    "kind": "single",
    "group": "Веб и API",
    "id": "m669",
    "fixed": true
  },
  {
    "topic": "hashlib",
    "q": "Зачем нужен hashlib.sha256?",
    "options": [
      "криптографического хеша",
      "hash() dict",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Криптографического хеша. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m670",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что такое deque rotate?",
    "options": [
      "циклический сдвиг",
      "утверждение про другой уровень стека",
      "reverse copy list",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Циклический сдвиг. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m671",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(isinstance({1}, set))",
    "group": "Typing и dataclasses",
    "id": "m672",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 422 обычно значит?",
    "options": [
      "Unprocessable",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "422 — Unprocessable — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m673",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про getattr без default на горячем пути?",
    "options": [
      "дороже локальной переменной",
      "быстрее LOAD_FAST",
      "равно global",
      "убирает GIL"
    ],
    "answer": 0,
    "explain": "Кэшируй в локальную — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m674",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет list(islice(...))?",
    "options": [
      "[0, 1, 2]",
      "[0,1,2,3,4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Первые 3 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти:.",
    "kind": "single",
    "code": "from itertools import islice, count\nprint(list(islice(count(), 3)))",
    "group": "Collections и itertools",
    "id": "m675",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что верно про def f(a, /, b, *, c): — как вызвать верно?",
    "options": [
      "f(1, 2, c=3) или f(1, b=2, c=3)",
      "f(a=1, b=2, c=3)",
      "f(1, 2, 3)",
      "f(c=3, 1, 2)"
    ],
    "answer": 0,
    "explain": "F(1, 2, c=3) или f(1, b=2, c=3). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m676",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт ETag / If-None-Match?",
    "options": [
      "кэш-валидация",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Условные запросы — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m677",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в [1, 2, 3]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import json\nprint(json.dumps([1, 2, 3]))",
    "group": "Stdlib и производительность",
    "id": "m678",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что означает: Сколько уникальных ключей кэша у fib(4) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 5 (0..n)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Примерно 5 (0..n). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m679",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "single",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в single. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "x = [1]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m680",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое prepared statements?",
    "options": [
      "переиспользование плана + безопасность",
      "ORM only",
      "утверждение про другой уровень стека",
      "миграция"
    ],
    "answer": 0,
    "explain": "Меньше parse/injection — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m681",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что делает sys.path_hooks?",
    "options": [
      "как находятся импорты по path entry",
      "утверждение про другой уровень стека",
      "venv activate",
      "sitecustomize only"
    ],
    "answer": 0,
    "explain": "Как находятся импорты по path entry. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m682",
    "fixed": true
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
    "explain": "Код вычисляется в [('a', 5), ('b', 2)]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('abracadabra').most_common(2))",
    "group": "Collections и itertools",
    "id": "m683",
    "fixed": true
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
    "explain": "Запрещён (SyntaxError). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m684",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что вернёт gzip Content-Encoding?",
    "options": [
      "сжатие тела",
      "шифр",
      "утверждение про другой уровень стека",
      "мультилипарт"
    ],
    "answer": 0,
    "explain": "Транспортное сжатие — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m685",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что выведет код?",
    "options": [
      "set",
      "list",
      "tuple всегда",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Среднее O(1) — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "code": "s = set(range(10000))\nprint(9999 in s)",
    "group": "Stdlib и производительность",
    "id": "m686",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что такое merge(*iters)?",
    "options": [
      "слияние sorted-итераторов",
      "sort unsorted",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Слияние sorted-итераторов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m687",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что вернёт case [x, y, *rest] на tuple?",
    "options": [
      "работает для последовательности",
      "только list тип exact",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — работает для последовательности. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m688",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Что такое Depends()?",
    "options": [
      "внедрение зависимостей",
      "SQL join",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Внедрение зависимостей. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m689",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "Код падает с ошибкой (JSONDecodeError). Смотри типы аргументов и допустимые операции.",
    "kind": "single",
    "code": "import json\nprint(json.loads('nullish'))",
    "group": "Stdlib и производительность",
    "id": "m690",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что такое tee(it, n)?",
    "options": [
      "разветвляет итератор (с буфером)",
      "копирует list",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Память растёт, если ветки расходятся. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m691",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что такое паттерн match case 1 | 2 | 3 в Python 3.10+?",
    "options": [
      "or-паттерн",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Or-паттерн. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m692",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое HTTPS termination?",
    "options": [
      "TLS часто на proxy/load balancer",
      "только в app forever",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Инфра-паттерн — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m693",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про __slots__ + weakref нужен?",
    "options": [
      "явный '__weakref__' в slots",
      "автоматически always",
      "утверждение про другой уровень стека",
      "только PyPy"
    ],
    "answer": 0,
    "explain": "Иначе нельзя weakref — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m694",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что верно про lru_cache(maxsize=8) хранит?",
    "options": [
      "до 8 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "До 8 результатов вызовов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m695",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что верно про Positional-only полезен для?",
    "options": [
      "стабильного API имён параметров",
      "скорости GIL",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Стабильного API имён параметров. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m696",
    "fixed": true
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
    "explain": "Оптимизация SQL — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m697",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что такое capture_output=True эквивалент?",
    "options": [
      "stdout/err PIPE",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Stdout/err PIPE. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m698",
    "fixed": true
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
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(3)))))",
    "group": "Collections и itertools",
    "id": "m699",
    "fixed": true
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
    "explain": "__init__, __repr__ и др. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m700",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое N+1 проблема?",
    "options": [
      "1 запрос списка + N запросов на связанные сущности",
      "один огромный JOIN всегда bad",
      "только NoSQL",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Лечится join/eager load/IN — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m701",
    "fixed": true
  },
  {
    "topic": "sqlite",
    "q": "Что такое sqlite3 в stdlib?",
    "options": [
      "встроенная БД в файле/памяти",
      "клиент Postgres",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Встроенная БД в файле/памяти. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m702",
    "fixed": true
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
    "explain": "Результат выражения — различает типы аргументов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m703",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в other. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "x = 2\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m704",
    "fixed": true
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
    "explain": "Async интерфейс Python веб-приложений. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m705",
    "fixed": true
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
    "explain": "Код вычисляется в x/y/z/w. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('x', 'y', 'z', 'w'))",
    "group": "Stdlib и производительность",
    "id": "m706",
    "fixed": true
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
    "explain": "Islice — ленивый срез — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import islice\nprint(list(islice([0, 1, 2, 3, 4, 5], 4)))",
    "group": "Collections и itertools",
    "id": "m707",
    "fixed": true
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
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m708",
    "fixed": true
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
    "explain": "Тестируемости и слабой связанности. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m709",
    "fixed": true
  },
  {
    "topic": "struct",
    "q": "Что такое struct.pack упаковывает?",
    "options": [
      "значения в bytes по формату",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Значения в bytes по формату. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m710",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое wraps копирует?",
    "options": [
      "__module__, __name__, __doc__, …",
      "утверждение про другой уровень стека",
      "defaults only",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "__module__, __name__, __doc__, …. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m711",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что означает: @dataclass class Node: x: int = 1 — экземпляры делят x?",
    "options": [
      "нет, int immutable default ок",
      "да, как list",
      "ошибка синтаксиса",
      "только frozen"
    ],
    "answer": 0,
    "explain": "Нет, int immutable default ок. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m712",
    "fixed": true
  },
  {
    "topic": "DI",
    "q": "Что верно про ambient context антипаттерн когда?",
    "options": [
      "скрытые глобальные зависимости",
      "явный init",
      "typed ports",
      "tests fakes"
    ],
    "answer": 0,
    "explain": "Скрытые глобальные зависимости. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m713",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что такое DEVNULL?",
    "options": [
      "подавить stdout/stderr",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Подавить stdout/stderr. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m714",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что делает `heapq.nsmallest`?",
    "options": [
      "k наименьших",
      "полная сортировка обязательна внешне",
      "max heap",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "K наименьших. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m715",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "10",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "10. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "if (x := 10):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m716",
    "fixed": true
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
    "explain": "Зависимости через __init__. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m717",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что верно про json не сериализует напрямую?",
    "options": [
      "set, сложные объекты",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Set, сложные объекты. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m718",
    "fixed": true
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
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([1, 2, 1])])",
    "group": "Collections и itertools",
    "id": "m719",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что такое replace(obj, **changes)?",
    "options": [
      "новый объект с заменами",
      "мутирует obj",
      "утверждение про другой уровень стека",
      "slots destroy"
    ],
    "answer": 0,
    "explain": "Новый объект с заменами. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m720",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Что такое FastAPI строится вокруг?",
    "options": [
      "type hints + ASGI",
      "только Flask sync",
      "GIL removal",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Type hints + ASGI. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m721",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что делает re.IGNORECASE?",
    "options": [
      "флаг i",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Флаг i. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m722",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "16",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "16. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=4))))",
    "group": "Collections и itertools",
    "id": "m723",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что такое KW_ONLY sentinel?",
    "options": [
      "поля после — keyword-only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Поля после — keyword-only. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m724",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 201 — кратко?",
    "options": [
      "ресурс создан",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 201: ресурс создан — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m725",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "\"hi\"",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "\"hi\". Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import json\nprint(json.dumps('hi'))",
    "group": "Stdlib и производительность",
    "id": "m726",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что верно про lru_cache(maxsize=None (безлимит)) хранит?",
    "options": [
      "неограниченно (осторожно с RAM)",
      "ровно 0 записей",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "Неограниченно (осторожно с RAM). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m727",
    "fixed": true
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
    "explain": "Наличием методов, не сигнатур глубоко. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m728",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что верно про HTTP 403 обычно значит?",
    "options": [
      "Forbidden",
      "всегда успех",
      "только редирект",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "403 — Forbidden — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m729",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'a'",
      "'stack'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "'a'. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import re\nm = re.search('[aeiou]', 'stack')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m730",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что такое itertools.chain склеивает?",
    "options": [
      "итерируемые лениво",
      "только list",
      "утверждение про другой уровень стека",
      "строки обязательно"
    ],
    "answer": 0,
    "explain": "Последовательная итерация — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m731",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что такое auto() в Enum?",
    "options": [
      "автозначения",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Enum.auto — Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m732",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Зачем нужен Depends()?",
    "options": [
      "внедрения зависимостей (DI) в эндпоинты",
      "SQL only",
      "утверждение про другой уровень стека",
      "замены pydantic"
    ],
    "answer": 0,
    "explain": "Внедрения зависимостей (DI) в эндпоинты. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m733",
    "fixed": true
  },
  {
    "topic": "struct",
    "q": "Что такое iter_unpack?",
    "options": [
      "лениво распаковывает буфер",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Лениво распаковывает буфер. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m734",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что такое UserList?",
    "options": [
      "обёртка для кастомного list API",
      "быстрее list",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Обёртка для кастомного list API. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m735",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что делает asdict(obj)?",
    "options": [
      "рекурсивно в dict",
      "json string",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Рекурсивно в dict. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m736",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что такое session.rollback в SQLAlchemy?",
    "options": [
      "отменяет транзакцию",
      "drop table",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Откат — SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m737",
    "fixed": true
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
    "explain": "Код вычисляется в True (shallow). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m738",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое partial(f, 1)(2) эквивалентно?",
    "options": [
      "f(1, 2)",
      "f(2, 1)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "F(1, 2). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m739",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт Union[int, str] эквивалент 3.10+?",
    "options": [
      "int | str",
      "int & str",
      "обязательная проверка типов на каждом вызове в CPython",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — int | str. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m740",
    "fixed": true
  },
  {
    "topic": "FastAPI",
    "q": "Что такое APIRouter?",
    "options": [
      "модульные маршруты",
      "утверждение про другой уровень стека",
      "GIL router",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Модульные маршруты. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m741",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что делает re.DOTALL?",
    "options": [
      "точка включает \\n",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Точка включает \\n. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m742",
    "fixed": true
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
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([0, 0, 1, 1, 0])])",
    "group": "Collections и itertools",
    "id": "m743",
    "fixed": true
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
    "explain": "Many. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "x = [1, 2, 3]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "group": "Typing и dataclasses",
    "id": "m744",
    "fixed": true
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
    "explain": "OPTIONS безопасен к повтору на уровне семантики спеки (кэш/прокси учитывай).",
    "kind": "single",
    "group": "Веб и API",
    "id": "m745",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что получится?",
    "options": [
      "Path('a/b') или a\\b",
      "ошибка",
      "None",
      "list"
    ],
    "answer": 0,
    "explain": "Код вычисляется в Path('a/b') или a\\b. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import Path\nprint(Path('a') / 'b')",
    "group": "Stdlib и производительность",
    "id": "m746",
    "fixed": true
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
    "explain": "Цикл сдвиг на 4 вправо (отриц. — влево). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m747",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "one",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "One. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m748",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 503 — кратко?",
    "options": [
      "сервис недоступен",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 503: сервис недоступен — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m749",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что делает pkgutil.iter_modules?",
    "options": [
      "перечисляет модули пакета",
      "ставит pip",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Перечисляет модули пакета. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m750",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что верно про lru_cache(maxsize=1) хранит?",
    "options": [
      "до 1 результатов вызовов",
      "только последний вызов всегда",
      "на диске",
      "в Redis"
    ],
    "answer": 0,
    "explain": "До 1 результатов вызовов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m751",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Что такое параметр `a` в `def f(*, a)`?",
    "options": [
      "keyword-only",
      "positional-only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Keyword-only. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m752",
    "fixed": true
  },
  {
    "topic": "SQL",
    "q": "Что верно про SELECT … LIMIT 500 без ORDER BY?",
    "options": [
      "набор из N строк без стабильного порядка",
      "всегда первые 500 по PK",
      "ошибка синтаксиса",
      "полный table lock"
    ],
    "answer": 0,
    "explain": "Без ORDER BY порядок не гарантирован. SQL-запросы лучше параметризовать: склейка строк с пользовательским вводом открывает инъекции.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m753",
    "fixed": true
  },
  {
    "topic": "weakref",
    "q": "Что такое getweakrefcount?",
    "options": [
      "число слабых ссылок",
      "refcount сильных",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Число слабых ссылок. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m754",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "7",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "7. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [5, 1, 1]))",
    "group": "Collections и itertools",
    "id": "m755",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что верно про InitVar не попадает в?",
    "options": [
      "repr/eq хранимые поля как обычное поле",
      "утверждение про другой уровень стека",
      "аннотации",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Repr/eq хранимые поля как обычное поле. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m756",
    "fixed": true
  },
  {
    "topic": "HTTP",
    "q": "Что такое Статус 429 — кратко?",
    "options": [
      "лимит запросов",
      "всегда фатальный краш Python",
      "только WebSocket",
      "успех всегда"
    ],
    "answer": 0,
    "explain": "HTTP 429: лимит запросов — В вебе важны статус-коды, идемпотентность методов и аккуратная работа с телом запроса.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m757",
    "fixed": true
  },
  {
    "topic": "struct",
    "q": "Что такое endianness в format?",
    "options": [
      "< little > big",
      "только native",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "< little > big. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m758",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что вернёт cache (3.9) = lru_cache без?",
    "options": [
      "maxsize limit (безлимит)",
      "утверждение про другой уровень стека",
      "ключ",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — maxsize limit (безлимит). Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m759",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что верно про compare=False исключает поле из?",
    "options": [
      "сравнений",
      "утверждение про другой уровень стека",
      "repr always",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Сравнений. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m760",
    "fixed": true
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
    "explain": "Injection явнее и тестируемее. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Веб и API",
    "id": "m761",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "В чём разница: json.loads vs load?",
    "options": [
      "строка vs file object",
      "нет разницы",
      "bytes vs path",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Строка vs file object. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m762",
    "fixed": true
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
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 6))))",
    "group": "Collections и itertools",
    "id": "m763",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict inheritance?",
    "options": [
      "можно расширять/переопределять ключи по правилам",
      "запрещено",
      "как dataclass frozen auto",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Можно расширять/переопределять ключи по правилам. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m764",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что такое capture_output=True в run?",
    "options": [
      "собирает stdout/stderr",
      "shell=True",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Собирает stdout/stderr. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m765",
    "fixed": true
  },
  {
    "topic": "dict",
    "q": "Что вернёт dict.fromkeys(['a','b'], []) — опасность?",
    "options": [
      "один и тот же list на все ключи",
      "утверждение про другой уровень стека",
      "нет опасности",
      "глубокая копия"
    ],
    "answer": 0,
    "explain": "Результат выражения — один и тот же list на все ключи. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m766",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "ошибка",
      "ошибка shared",
      "None"
    ],
    "answer": 0,
    "explain": "[1]. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from dataclasses import dataclass, field\n@dataclass\nclass A:\n    xs: list = field(default_factory=list)\na, b = A(), A()\na.xs.append(1)\nprint(b.xs)",
    "group": "Typing и dataclasses",
    "id": "m767",
    "fixed": true
  },
  {
    "topic": "GC",
    "q": "Что делает gc.disable()?",
    "options": [
      "отключает cyclic GC",
      "отключает refcount",
      "GIL off",
      "async off"
    ],
    "answer": 0,
    "explain": "Refcount остаётся — Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m768",
    "fixed": true
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
    "explain": "Накопительная сумма — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import accumulate\nprint(list(accumulate(range(1, 3))))",
    "group": "Collections и itertools",
    "id": "m769",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое TypedDict total=False?",
    "options": [
      "ключи опциональны",
      "запрещены",
      "только str values",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Ключи опциональны. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m770",
    "fixed": true
  },
  {
    "topic": "регулярки",
    "q": "Что такое (?=...)?",
    "options": [
      "positive lookahead",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "non-greedy"
    ],
    "answer": 0,
    "explain": "Positive lookahead. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m771",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое cached_property?",
    "options": [
      "кэш на экземпляре",
      "lru глобальный",
      "classmethod",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Кэш на экземпляре. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m772",
    "fixed": true
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
    "explain": "Для generics нужен typing.get_origin / runtime_checkable Protocol осторожно.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m773",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "None",
      "'42a'",
      "ошибка",
      "True"
    ],
    "answer": 0,
    "explain": "None. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42a')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m774",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "24",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "24. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4]))",
    "group": "Collections и itertools",
    "id": "m775",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое Required/NotRequired в TypedDict?",
    "options": [
      "тонкая настройка обязательности ключей",
      "валидация pydantic",
      "это ускорение байткода в runtime",
      "это обязательная проверка типов на каждом вызове"
    ],
    "answer": 0,
    "explain": "Тонкая настройка обязательности ключей. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m776",
    "fixed": true
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
    "explain": "Код вычисляется в True (shallow). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m777",
    "fixed": true
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
    "explain": "Безлимитный кэш (осторожно с памятью). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m778",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое Optional[X]?",
    "options": [
      "X | None",
      "X обязателен",
      "это ускорение байткода в runtime",
      "Union пустой"
    ],
    "answer": 0,
    "explain": "X | None. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m779",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "42",
      "ошибка",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "42. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import json\nprint(json.dumps(42))",
    "group": "Stdlib и производительность",
    "id": "m780",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое lru_cache не для?",
    "options": [
      "нехешируемых аргументов",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Нехешируемых аргументов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m781",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что такое паттерн match case [x, *rest] в Python 3.10+?",
    "options": [
      "матчит последовательность",
      "только list тип строго runtime class",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Матчит последовательность. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m782",
    "fixed": true
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
    "explain": "Выражение в коде истинно. Пройди операторы и типы операндов по шагам.",
    "kind": "single",
    "code": "print(256 is 256)",
    "group": "Stdlib и производительность",
    "id": "m783",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "4",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "4. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 8))",
    "group": "Collections и itertools",
    "id": "m784",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое get_type_hints?",
    "options": [
      "резолвит аннотации",
      "runtime enforce",
      "mypy daemon",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Резолвит аннотации. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m785",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что такое object_hook?",
    "options": [
      "постпроцесс dict при loads",
      "dumps only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Постпроцесс dict при loads. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m786",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что означает: Сколько уникальных ключей кэша у fib(5) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 6 (0..n)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Примерно 6 (0..n). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m787",
    "fixed": true
  },
  {
    "topic": "args",
    "q": "Как вызвать f?",
    "options": [
      "f(a=1)",
      "f(1)",
      "ошибка",
      "никак"
    ],
    "answer": 0,
    "explain": "Код вычисляется в f(a=1). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "def f(*, a):\n    return a",
    "group": "Typing и dataclasses",
    "id": "m788",
    "fixed": true
  },
  {
    "topic": "GC",
    "q": "Что такое Сборщик циклических ссылок?",
    "options": [
      "gc модуль / cyclic GC",
      "только refcount",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Refcount + periodic cycle detection. Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m789",
    "fixed": true
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
    "explain": "Код вычисляется в [('i', 4), ('s', 4)]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('mississippi').most_common(2))",
    "group": "Collections и itertools",
    "id": "m790",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что означает: паттерн match case Point(x=0, y=0): при наличии __match_args__/dataclass в Python 3.10+?",
    "options": [
      "positional/keyword patterns",
      "только dict",
      "утверждение про другой уровень стека",
      "ошибка всегда"
    ],
    "answer": 0,
    "explain": "Positional/keyword patterns. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m791",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что делает Path.home()?",
    "options": [
      "домашняя директория",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Домашняя директория. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m792",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict(list)['k'].append(1)?",
    "options": [
      "создаёт list автоматически",
      "утверждение про другой уровень стека",
      "None append error",
      "dict"
    ],
    "answer": 0,
    "explain": "Результат выражения — создаёт list автоматически. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m793",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что вернёт Never (3.11)?",
    "options": [
      "низший тип, недостижимость",
      "ошибка",
      "обязательная проверка типов на каждом вызове в CPython",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — низший тип, недостижимость. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m794",
    "fixed": true
  },
  {
    "topic": "memoryview",
    "q": "Зачем нужен memoryview?",
    "options": [
      "работы со срезами bytes без копирования",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "async sleep"
    ],
    "answer": 0,
    "explain": "Работы со срезами bytes без копирования. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m795",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что вернёт batched (3.12)?",
    "options": [
      "чанки по n",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Группировка элементов — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m796",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что такое case _ :?",
    "options": [
      "wildcard / default",
      "утверждение про другой уровень стека",
      "None only",
      "ellipsis object"
    ],
    "answer": 0,
    "explain": "Wildcard / default. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m797",
    "fixed": true
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
    "explain": "Shallow копирует верх, nested — ссылки; deep — рекурсивно. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m798",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что означает: cached_property не thread-safe из коробки идеально?",
    "options": [
      "да, нюансы гонок",
      "полностью safe всегда",
      "async only safe",
      "process safe"
    ],
    "answer": 0,
    "explain": "Да, нюансы гонок. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m799",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "5",
      "утверждение про другой уровень стека",
      "ошибка",
      "поведение, которого здесь нет"
    ],
    "answer": 0,
    "explain": "5. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "if (x := 5):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m800",
    "fixed": true
  },
  {
    "topic": "struct",
    "q": "Что такое native size alignment @?",
    "options": [
      "зависит от платформы",
      "всегда packed",
      "network always",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Зависит от платформы. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m801",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "2",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "2. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 5))",
    "group": "Collections и itertools",
    "id": "m802",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что проверяет cast не?",
    "options": [
      "да, no-op",
      "валидирует",
      "конвертирует",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Да, no-op. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m803",
    "fixed": true
  },
  {
    "topic": "tempfile",
    "q": "Что такое gettempdir()?",
    "options": [
      "каталог временных файлов",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Каталог временных файлов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m804",
    "fixed": true
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
    "explain": "Повтор — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m805",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт slots=True (3.10+) у dataclass?",
    "options": [
      "генерирует __slots__",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — генерирует __slots__. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m806",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что делает importlib.util.find_spec?",
    "options": [
      "ищет спецификацию модуля",
      "exec module",
      "pip show",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Ищет спецификацию модуля. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m807",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое partialmethod?",
    "options": [
      "partial для методов",
      "classmethod",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Partial для методов. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m808",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "print(isinstance([1], dict))",
    "group": "Typing и dataclasses",
    "id": "m809",
    "fixed": true
  },
  {
    "topic": "GC",
    "q": "Что делает gc.get_referrers?",
    "options": [
      "кто ссылается на объект",
      "refcount exact только",
      "disk refs",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Отладка утечек — Сборка мусора сочетает подсчёт ссылок и отдельный проход для циклов ссылок.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m810",
    "fixed": true
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
    "explain": "Chain склеивает итерируемые — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import chain\nprint(list(chain([1, 2], list(range(5)))))",
    "group": "Collections и itertools",
    "id": "m811",
    "fixed": true
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
    "explain": "Некоторых позиций (напр. лямбда без скобок нюансы). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m812",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что делает expanduser()?",
    "options": [
      "раскрывает ~",
      "env $VAR всегда полностью как shell",
      "symlink resolve",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Раскрывает ~. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m813",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что верно про reduce без initial на пустом?",
    "options": [
      "TypeError",
      "True",
      "False",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "TypeError. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m814",
    "fixed": true
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
    "explain": "Generic alias; isinstance ограниченно. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m815",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что такое check=True в run?",
    "options": [
      "бросит CalledProcessError при ненулевом коде",
      "игнор код",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Бросит CalledProcessError при ненулевом коде. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m816",
    "fixed": true
  },
  {
    "topic": "array",
    "q": "Что верно про array('i') хранит?",
    "options": [
      "signed int компактно",
      "произвольные объекты",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Signed int компактно. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m817",
    "fixed": true
  },
  {
    "topic": "walrus",
    "q": "Что выведет код?",
    "options": [
      "no",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "No. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "if (x := 0):\n    print(x)\nelse:\n    print('no')",
    "group": "Typing и dataclasses",
    "id": "m818",
    "fixed": true
  },
  {
    "topic": "secrets",
    "q": "Что верно про secrets модуль лучше random для?",
    "options": [
      "токенов/криптографии",
      "shuffle колоды в игре ok всегда",
      "math sim",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Токенов/криптографии. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m819",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что делает OrderedDict.move_to_end?",
    "options": [
      "LRU-подобные структуры",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "LRU-подобные структуры. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m820",
    "fixed": true
  },
  {
    "topic": "match",
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в other. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "x = 99\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "group": "Typing и dataclasses",
    "id": "m821",
    "fixed": true
  },
  {
    "topic": "memoryview",
    "q": "Что такое cast('I')?",
    "options": [
      "переинтерпретация буфера",
      "копия list",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Переинтерпретация буфера. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m822",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что вернёт Counter('aab')['a']?",
    "options": [
      "2",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — 2. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m823",
    "fixed": true
  },
  {
    "topic": "dataclasses",
    "q": "Что вернёт kw_only=True (3.10)?",
    "options": [
      "поля только keyword",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Результат выражения — поля только keyword. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m824",
    "fixed": true
  },
  {
    "topic": "регулярки",
    "q": "Что такое группы (?P<name>…)?",
    "options": [
      "именованные группы",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Именованные группы. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m825",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "4",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "4. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=2))))",
    "group": "Collections и itertools",
    "id": "m826",
    "fixed": true
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
    "explain": "Результат выражения — обязательно по имени. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m827",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "В чём риск shell=True?",
    "options": [
      "инъекции через строку",
      "только slow",
      "безопаснее list",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Инъекции через строку. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m828",
    "fixed": true
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
    "explain": "Код вычисляется в [('x', 1), ('y', 1)]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('xyz').most_common(2))",
    "group": "Collections и itertools",
    "id": "m829",
    "fixed": true
  },
  {
    "topic": "enum",
    "q": "Что такое auto() значения?",
    "options": [
      "по правилам Enum/Flag",
      "random uuid",
      "hash id",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Инкремент обычно — Enum задаёт именованные константы с фиксированным набором значений.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m830",
    "fixed": true
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
    "explain": "Код вычисляется в usr/bin/python. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('usr', 'bin', 'python'))",
    "group": "Stdlib и производительность",
    "id": "m831",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "1. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import heapq\nh = [5, 1, 3]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m832",
    "fixed": true
  },
  {
    "topic": "typing",
    "q": "Что такое Literal['a','b']?",
    "options": [
      "только эти значения",
      "любой str",
      "Enum автоматом",
      "обязательная проверка типов на каждом вызове в CPython"
    ],
    "answer": 0,
    "explain": "Только эти значения. Это про проверку типов/сигнатуры, не про ускорение runtime.",
    "kind": "single",
    "group": "Typing и dataclasses",
    "id": "m833",
    "fixed": true
  },
  {
    "topic": "регулярки",
    "q": "Что верно про re.findall(r'\\d+', 'a12b3')?",
    "options": [
      "['12', '3']",
      "['1','2','3']",
      "['a12b3']",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "['12', '3']. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m834",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что реализует heapq?",
    "options": [
      "бинарную кучу на list",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Бинарную кучу на list. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m835",
    "fixed": true
  },
  {
    "topic": "пакеты",
    "q": "Что такое __init__.py historically?",
    "options": [
      "делает каталог пакетом",
      "обязателен всегда в 3.3+",
      "запускает pip",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Делает каталог пакетом. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m836",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что вернёт pairwise (3.10)?",
    "options": [
      "(a,b),(b,c),…",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Соседние пары — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m837",
    "fixed": true
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
    "explain": "При смерти объекта. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m838",
    "fixed": true
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
    "explain": "Код вычисляется в [1, 3]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [5, 1, 3]))",
    "group": "Collections и itertools",
    "id": "m839",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "{\"x\": [1, 2]}",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Код вычисляется в {\"x\": [1, 2]}. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'x': [1, 2]}))",
    "group": "Stdlib и производительность",
    "id": "m840",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что такое bisect модуль для?",
    "options": [
      "бинарного поиска/вставки в sorted list",
      "быстрой сортировки",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Бинарного поиска/вставки в sorted list. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m841",
    "fixed": true
  },
  {
    "topic": "sort",
    "q": "Что такое key= должен быть?",
    "options": [
      "вызываемым, вызывается раз на элемент (декоратор)",
      "cmp как в Py2 обязателен",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Вызываемым, вызывается раз на элемент (декоратор). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m842",
    "fixed": true
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
    "explain": "Код вычисляется в из кэша, без print work. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from functools import lru_cache\n@lru_cache\ndef heavy(x):\n    print('work')\n    return x*x\nheavy(2)\nheavy(2)",
    "group": "Collections и itertools",
    "id": "m843",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.JSON'",
      "'B.JSON'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Код вычисляется в '.JSON'. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('B.JSON').suffix)",
    "group": "Stdlib и производительность",
    "id": "m844",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "3",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "C(3,2) = 3 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(3), 2))))",
    "group": "Collections и itertools",
    "id": "m845",
    "fixed": true
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
    "explain": "Код вычисляется в tmp/x. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('tmp', 'x'))",
    "group": "Stdlib и производительность",
    "id": "m846",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "6",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "6. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [2, 2, 2]))",
    "group": "Collections и itertools",
    "id": "m847",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что верно про circular import — проблема когда?",
    "options": [
      "модули импортируют друг друга на top-level",
      "есть venv",
      "много функций",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Модули импортируют друг друга на top-level. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m848",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что верно про OrderedDict всё ещё нужен после 3.7?",
    "options": [
      "для move_to_end / equality по порядку и явного API",
      "нет никогда",
      "только PyPy",
      "для set"
    ],
    "answer": 0,
    "explain": "Для move_to_end / equality по порядку и явного API. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m849",
    "fixed": true
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
    "explain": "Выражение в коде ложно. Проверь сравнения, пустоту коллекций и приоритет операций.",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.deepcopy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m850",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что делает partial(f, 1)?",
    "options": [
      "новую функцию с зафиксированным аргументом",
      "вызов f",
      "копию кода f",
      "декоратор класса"
    ],
    "answer": 0,
    "explain": "Новую функцию с зафиксированным аргументом. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m851",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.txt'",
      "'a.txt'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Код вычисляется в '.txt'. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('a.txt').suffix)",
    "group": "Stdlib и производительность",
    "id": "m852",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "5",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "5. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import heapq\nh = [10, 20, 5, 30]\nheapq.heapify(h)\nprint(h[0])",
    "group": "Collections и itertools",
    "id": "m853",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что позволяет zipimport?",
    "options": [
      "импорт из zip",
      "только wheel build",
      "pip download",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Импорт из zip. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m854",
    "fixed": true
  },
  {
    "topic": "bisect",
    "q": "Что выведет код?",
    "options": [
      "0",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "ошибка"
    ],
    "answer": 0,
    "explain": "0. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 0))",
    "group": "Collections и itertools",
    "id": "m855",
    "fixed": true
  },
  {
    "topic": "pickle",
    "q": "Что верно про protocol=5 полезен для?",
    "options": [
      "out-of-band буферов (bytes large)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Out-of-band буферов (bytes large). Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m856",
    "fixed": true
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
    "explain": "Код вычисляется в [1, 4]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [4, 4, 1]))",
    "group": "Collections и itertools",
    "id": "m857",
    "fixed": true
  },
  {
    "topic": "copy",
    "q": "Что верно про __deepcopy__ можно определить для?",
    "options": [
      "кастомной глубокой копии",
      "только pickle",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Кастомной глубокой копии. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m858",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "10",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "10. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [1, 2, 3, 4]))",
    "group": "Collections и itertools",
    "id": "m859",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что верно про circular import часто лечат?",
    "options": [
      "локальным import / разнесением",
      "удалением типов",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Локальным import / разнесением. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m860",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что верно про namedtuple удобен тем, что?",
    "options": [
      "immutable + доступ по имени поля",
      "мутабельный dict",
      "замена list",
      "async queue"
    ],
    "answer": 0,
    "explain": "Immutable + доступ по имени поля. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m861",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что вернёт Path.read_text()?",
    "options": [
      "читает файл как str",
      "bytes only",
      "ошибка",
      "lines iterator always"
    ],
    "answer": 0,
    "explain": "Результат выражения — читает файл как str. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m862",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что вернёт heappush / heappop?",
    "options": [
      "мин-куча",
      "макс-куча по умолчанию",
      "sort stable extra",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Результат выражения — мин-куча. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m863",
    "fixed": true
  },
  {
    "topic": "tempfile",
    "q": "Что такое TemporaryDirectory?",
    "options": [
      "автоочистка каталога",
      "вечный /tmp",
      "только файл",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Автоочистка каталога. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m864",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "[(5, 3)]",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Groupby группирует только подряд идущие одинаковые. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([5, 5, 5])])",
    "group": "Collections и itertools",
    "id": "m865",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что делает Popen.communicate?",
    "options": [
      "обмен с процессом + wait",
      "nonblocking forever без wait",
      "только kill",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Обмен с процессом + wait. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m866",
    "fixed": true
  },
  {
    "topic": "heapq",
    "q": "Что вернёт heapify in-place?",
    "options": [
      "линейно строит кучу",
      "O(n log n) sort copy",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — линейно строит кучу. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m867",
    "fixed": true
  },
  {
    "topic": "weakref",
    "q": "Что верно про WeakValueDictionary хранит?",
    "options": [
      "слабые ссылки на значения",
      "сильные на ключи и значения",
      "только int",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Слабые ссылки на значения. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m868",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что верно про ChainMap полезен для?",
    "options": [
      "слоя переопределений mapping",
      "SQL join",
      "async gather",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Слоя переопределений mapping. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m869",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что даёт Path('a') / 'b'?",
    "options": [
      "Path('a/b')",
      "утверждение про другой уровень стека",
      "str 'a/b'",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Path('a/b'). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m870",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что вернёт defaultdict без factory при []?",
    "options": [
      "TypeError/нужен factory",
      "создаёт None",
      "KeyError как dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — TypeError/нужен factory. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m871",
    "fixed": true
  },
  {
    "topic": "copy",
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "ошибка",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "[1]. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\na[0].append(1)\nprint(b[0])",
    "group": "Stdlib и производительность",
    "id": "m872",
    "fixed": true
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
    "explain": "Декартово произведение — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m873",
    "fixed": true
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
    "explain": "Ленивость — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m874",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что такое namedtuple?",
    "options": [
      "легковесный immutable с именами полей",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Легковесный immutable с именами полей. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m875",
    "fixed": true
  },
  {
    "topic": "weakref",
    "q": "Что такое proxy не поднимает?",
    "options": [
      "refcount как сильная ссылка",
      "исключения",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Refcount как сильная ссылка. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m876",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет list(itertools.chain([1], [2, 3]))?",
    "options": [
      "[1, 2, 3]",
      "[[1],[2,3]]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Chain склеивает итерируемые подряд. Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m877",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "dict",
      "ошибка",
      "None",
      "tuple"
    ],
    "answer": 0,
    "explain": "Dict. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"a\": 1}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m878",
    "fixed": true
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
    "explain": "Сочетания без повтора — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m879",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.gz'",
      "'archive.tar.gz'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Код вычисляется в '.gz'. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('archive.tar.gz').suffix)",
    "group": "Stdlib и производительность",
    "id": "m880",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что выведет код?",
    "options": [
      "12",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "12. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [10, 2]))",
    "group": "Collections и itertools",
    "id": "m881",
    "fixed": true
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
    "explain": "Код вычисляется в True (shallow). Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "group": "Stdlib и производительность",
    "id": "m882",
    "fixed": true
  },
  {
    "topic": "itertools",
    "q": "Что выведет код?",
    "options": [
      "12",
      "утверждение про другой уровень стека",
      "поведение, которого здесь нет",
      "опасное упрощение без связи с темой"
    ],
    "answer": 0,
    "explain": "P(4,2) = 12 — Itertools даёт ленивые комбинаторы для итераторов без лишних списков в памяти.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(4), 2))))",
    "group": "Collections и itertools",
    "id": "m883",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что такое ensure_ascii=False?",
    "options": [
      "сохраняет unicode как есть",
      "только ascii escapes always",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Сохраняет unicode как есть. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m884",
    "fixed": true
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
    "explain": "Код вычисляется в [5, 10]. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [10, 20, 5, 30]))",
    "group": "Collections и itertools",
    "id": "m885",
    "fixed": true
  },
  {
    "topic": "subprocess",
    "q": "Что вернёт text=True (universal_newlines)?",
    "options": [
      "str вместо bytes",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Результат выражения — str вместо bytes. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m886",
    "fixed": true
  },
  {
    "topic": "collections",
    "q": "Что верно про ChainMap пишет по умолчанию в?",
    "options": [
      "первый mapping",
      "последний",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Первый mapping. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m887",
    "fixed": true
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
    "explain": "Код вычисляется в etc/passwd. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('etc', 'passwd'))",
    "group": "Stdlib и производительность",
    "id": "m888",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что такое singledispatchmethod?",
    "options": [
      "диспетчеризация методов по типу",
      "только функции модуля",
      "утверждение про другой уровень стека",
      "classmethod ban"
    ],
    "answer": 0,
    "explain": "Диспетчеризация методов по типу. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m889",
    "fixed": true
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
    "explain": "Результат выражения — современные хеш-функции. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m890",
    "fixed": true
  },
  {
    "topic": "functools",
    "q": "Что означает: Сколько уникальных ключей кэша у fib(2) с lru_cache при наивной рекурсии fib(n)=fib(n-1)+fib(n-2)?",
    "options": [
      "примерно 3 (0..n)",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Примерно 3 (0..n). Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Collections и itertools",
    "id": "m891",
    "fixed": true
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
    "explain": "Str ↔ bytes. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m892",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что будет с set?",
    "options": [
      "TypeError без default",
      "станет list",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Код вычисляется в TypeError без default. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "import json\njson.dumps({1, 2})",
    "group": "Stdlib и производительность",
    "id": "m893",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про Конкатенация много str в цикле?",
    "options": [
      "лучше join",
      "+= всегда ок",
      "f-string в цикле идеал",
      "bytearray обязателен"
    ],
    "answer": 0,
    "explain": "''.join(parts) эффективнее — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m894",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "list",
      "ошибка",
      "None",
      "tuple"
    ],
    "answer": 0,
    "explain": "List. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('[1, 2, 3]')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m895",
    "fixed": true
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
    "explain": "Код вычисляется в home/user/docs. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('home', 'user', 'docs'))",
    "group": "Stdlib и производительность",
    "id": "m896",
    "fixed": true
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
    "explain": "Слабые, должны быть hashable weakrefable. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m897",
    "fixed": true
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
    "explain": "Код вычисляется в var/log/app.log. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'app.log'))",
    "group": "Stdlib и производительность",
    "id": "m898",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что такое \\b граница слова?",
    "options": [
      "word boundary",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Word boundary. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m899",
    "fixed": true
  },
  {
    "topic": "pathlib",
    "q": "Что выведет код?",
    "options": [
      "'.PNG'",
      "'photo.PNG'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Код вычисляется в '.PNG'. Пройди выражение слева направо с учётом типов.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('photo.PNG').suffix)",
    "group": "Stdlib и производительность",
    "id": "m900",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что такое default= в dumps?",
    "options": [
      "сериализатор неизвестных типов",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет",
      "опасное упрощение, ломающее корректность"
    ],
    "answer": 0,
    "explain": "Сериализатор неизвестных типов. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m901",
    "fixed": true
  },
  {
    "topic": "performance",
    "q": "Что верно про много мелких объектов — смотри?",
    "options": [
      "аллокации/GC, slots, interning осторожно",
      "только pep8",
      "только async",
      "только typed"
    ],
    "answer": 0,
    "explain": "Профилируй память — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m902",
    "fixed": true
  },
  {
    "topic": "sort",
    "q": "Что вернёт key=str.lower?",
    "options": [
      "case-insensitive sort",
      "утверждение про другой уровень стека",
      "by len default",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Результат выражения — case-insensitive sort. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m903",
    "fixed": true
  },
  {
    "topic": "regex",
    "q": "Что выведет код?",
    "options": [
      "'12'",
      "'ab12cd'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "'12'. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import re\nm = re.search('\\\\d+', 'ab12cd')\nprint(None if m is None else m.group())",
    "group": "Stdlib и производительность",
    "id": "m904",
    "fixed": true
  },
  {
    "topic": "tempfile",
    "q": "Что такое SpooledTemporaryFile?",
    "options": [
      "сначала RAM, потом диск",
      "только диск",
      "только RAM forever",
      "утверждение про другой уровень стека"
    ],
    "answer": 0,
    "explain": "Сначала RAM, потом диск. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m905",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что выведет код?",
    "options": [
      "dict",
      "ошибка",
      "None",
      "tuple"
    ],
    "answer": 0,
    "explain": "Dict. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"ok\": true, \"n\": null}')).__name__)",
    "group": "Stdlib и производительность",
    "id": "m906",
    "fixed": true
  },
  {
    "topic": "JSON",
    "q": "Что такое JSONEncoder subclass?",
    "options": [
      "кастом default",
      "loads only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Кастом default. Не путай с соседними похожими терминами из той же темы.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m907",
    "fixed": true
  },
  {
    "topic": "import",
    "q": "Что такое MetaPathFinder?",
    "options": [
      "поиск модулей на meta_path",
      "path entry only",
      "утверждение про другой уровень стека",
      "поведение, которого в CPython нет"
    ],
    "answer": 0,
    "explain": "Поиск модулей на meta_path. Соседние варианты обычно про другой механизм или уровень стека.",
    "kind": "single",
    "group": "Stdlib и производительность",
    "id": "m908",
    "fixed": true
  }
];
