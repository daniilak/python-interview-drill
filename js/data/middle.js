// AUTO-BUNDLED from js/data/middle/*.js — не правь руками.
window.QUESTIONS_MIDDLE = [
  {
    "q": "Зачем нужен enum.Enum?",
    "options": [
      "чтобы задать набор именованных констант с фиксированными значениями",
      "чтобы ускорить циклы за счёт GIL",
      "чтобы заменить все int на строки в рантайме",
      "чтобы отключить проверку типов в mypy"
    ],
    "answer": 0,
    "explain": "Enum — перечисление: именованные члены вместо «магических» чисел/строк. Сравнение идёт по идентичности членов, набор значений фиксирован. Это не про GIL и не про ускорение.",
    "kind": "single",
    "id": "m1",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3]",
      "[3, 3, 3, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default i=i фиксирует значение на каждой итерации → [0,1,2,3].",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(4)]\nprint([f() for f in fs])",
    "id": "m2",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "StopIteration сразу",
      "[1, 2]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "iter([1, 2]) даёт итератор; next(...) забирает первый элемент — 1. StopIteration будет только когда элементы кончатся.",
    "kind": "single",
    "code": "print(next(iter([1, 2])))",
    "id": "m3",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что такое Starlette и FastAPI?",
    "options": [
      "ASGI-фреймворки (FastAPI построен поверх Starlette)",
      "только классические WSGI-приложения как Flask 1.x",
      "замена PostgreSQL",
      "линтеры для аннотаций типов"
    ],
    "answer": 0,
    "explain": "Starlette — лёгкий ASGI-фреймворк; FastAPI использует его для HTTP/WebSocket и добавляет валидацию через type hints. Это не WSGI и не СУБД.",
    "kind": "single",
    "id": "m4",
    "fixed": true,
    "topic": "ASGI",
    "group": "Веб и API"
  },
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Когда нужен contextlib.ExitStack.enter_context?",
    "options": [
      "когда число context manager'ов известно только в рантайме",
      "когда достаточно одного обычного with",
      "вместо любого try/except",
      "только для async with"
    ],
    "answer": 0,
    "explain": "ExitStack позволяет в цикле/по условию открывать произвольное число CM и гарантированно закрыть все при выходе. Для одного фиксированного with он не нужен. Для async есть AsyncExitStack.",
    "kind": "single",
    "id": "m6",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Чем в библиотеках лучше заменить print для диагностики?",
    "options": [
      "модулем logging с уровнями и обработчиками",
      "только sys.stdout.write без уровней",
      "обязательно warnings.warn на каждое сообщение",
      "print в stderr через f-string — этого достаточно в проде"
    ],
    "answer": 0,
    "explain": "logging даёт уровни, фильтры, хендлеры и отключение шума. print нельзя централизованно настроить в приложении, которое использует твою библиотеку.",
    "kind": "single",
    "id": "m7",
    "fixed": true,
    "topic": "логирование",
    "group": "Тесты и качество"
  },
  {
    "q": "Что даёт объекту метод __call__?",
    "options": [
      "возможность вызывать объект как функцию: obj(...)",
      "возможность писать for x in obj",
      "использование в with obj",
      "поведение дескриптора при доступе к атрибуту"
    ],
    "answer": 0,
    "explain": "__call__ делает экземпляр callable. Итерация — __iter__/__getitem__, контекст — __enter__/__exit__, дескриптор — __get__/__set__.",
    "kind": "single",
    "id": "m8",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m9",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что обычно вернёт выражение `256 is 256` в CPython?",
    "options": [
      "True — малые int часто закэшированы (intern)",
      "False всегда",
      "TypeError",
      "зависит только от ОС, не от CPython"
    ],
    "answer": 0,
    "explain": "CPython кэширует небольшой диапазон целых (часто −5…256). Для них is может быть True. На это нельзя полагаться в логике — сравнивай через ==.",
    "kind": "single",
    "id": "m10",
    "fixed": true,
    "topic": "is",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m11",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Почему set.intersection на больших множествах быстрее наивных вложенных циклов?",
    "options": [
      "внутри есть оптимизация: итерация идёт по меньшему множеству и lookup в большем",
      "intersection всегда запускает отдельный поток на ядро",
      "list внутри быстрее set для поиска",
      "GIL на время intersection полностью отключается"
    ],
    "answer": 0,
    "explain": "Реализация пересечения в CPython выбирает меньшее множество для обхода и проверяет членство в большем за ~O(1). Вложенные циклы по list дают O(n·m).",
    "kind": "single",
    "id": "m12",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "В чём проблема utils.py на тысячи строк с HTTP, SQL и PDF сразу?",
    "options": [
      "низкая связность: в одном модуле смешаны разные ответственности",
      "это запрещено синтаксисом Python",
      "так нельзя из‑за GIL",
      "проблема только в отсутствии type hints"
    ],
    "answer": 0,
    "explain": "God-module смешивает несвязанные задачи — сложно тестировать и менять. Лучше разнести по модулям/пакетам с одной зоной ответственности (high cohesion).",
    "kind": "single",
    "id": "m13",
    "fixed": true,
    "topic": "cohesion",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m14",
    "fixed": true,
    "topic": "git",
    "group": "Инструменты и стиль"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2]",
      "[1, 2, 7]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [1, 2].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [9, 2, 7, 1]))",
    "id": "m15",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m16",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое замыкание (closure) в Python?",
    "options": [
      "функция, которая помнит переменные из enclosing-области, где её создали",
      "синоним декоратора @wraps",
      "обязательный атрибут любого класса",
      "способ отключить LEGB"
    ],
    "answer": 0,
    "explain": "Вложенная функция захватывает свободные переменные внешней области (видно в __closure__). Декоратор часто использует замыкание, но сам по себе им не является.",
    "kind": "single",
    "id": "m17",
    "fixed": true,
    "topic": "closures",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m18",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m19",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что делает contextlib.closing(obj) при выходе из with?",
    "options": [
      "вызывает obj.close()",
      "делает del obj",
      "вызывает obj.end()",
      "только подавляет исключения"
    ],
    "answer": 0,
    "explain": "closing оборачивает объект без протокола CM и на выходе зовёт close(). Удобно для urlopen и похожих API.",
    "kind": "single",
    "id": "m21",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что делает pytest.mark.parametrize?",
    "options": [
      "запускает один тест много раз на наборе входных данных",
      "создаёт отдельные процессы ОС на каждый кейс",
      "сам включает coverage.py",
      "заменяет все assert на print"
    ],
    "answer": 0,
    "explain": "parametrize разворачивает тест в несколько кейсов с разными аргументами. Это про данные, не про multiprocessing и не про coverage.",
    "kind": "single",
    "id": "m22",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m23",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m24",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "json.loads падает с JSONDecodeError на невалидном JSON.",
    "kind": "single",
    "code": "import json\nprint(json.loads('[1, 2,'))",
    "id": "m25",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для CPU-bound задачи в CPython что обычно выбирают?",
    "options": [
      "multiprocessing (или native-расширение), а не голый threading",
      "больше потоков threading — GIL не мешает CPU",
      "time.sleep в каждом потоке",
      "только asyncio без процессов"
    ],
    "answer": 0,
    "explain": "GIL не даёт нескольким Python-потокам крутить байткод параллельно на CPU. Для параллелизма CPU — процессы или код вне GIL (C/Rust). threading хорош для I/O.",
    "kind": "single",
    "code": "# cpu_bound()\n# threading vs multiprocessing?",
    "id": "m26",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Как реализовать DFS по графу?",
    "options": [
      "рекурсией или явным стеком",
      "только очередью (это как раз BFS)",
      "только через sorted() рёбер",
      "только через set.intersection"
    ],
    "answer": 0,
    "explain": "DFS — глубина: стек или рекурсия. Очередь — BFS. sorted и intersection тут ни при чём.",
    "kind": "single",
    "id": "m27",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Что такое premature optimization?",
    "options": [
      "оптимизация до того, как измерили узкое место",
      "любое профилирование cProfile",
      "запрет на list comprehension",
      "обязательный отказ от алгоритмов O(n)"
    ],
    "answer": 0,
    "explain": "«Преждевременная оптимизация» — ускорять наугад без замеров. Сначала ясный код и профайлер, потом точечные правки.",
    "kind": "single",
    "id": "m28",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m29",
    "fixed": true,
    "topic": "git",
    "group": "Инструменты и стиль"
  },
  {
    "q": "Что делает heapq.nlargest(k, iterable)?",
    "options": [
      "эффективно находит k наибольших элементов (куча), без полной сортировки всего",
      "всегда полностью сортирует весь iterable и режет хвост",
      "удаляет k наименьших из исходного списка на месте",
      "работает только с числами int"
    ],
    "answer": 0,
    "explain": "nlargest/nsmallest используют кучу размера k — выгоднее полной сортировки, когда k ≪ n. Для k≈n проще sorted(... )[:k].",
    "kind": "single",
    "id": "m30",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m31",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m32",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m33",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m34",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что не ловит `except Exception`?",
    "options": [
      "потомков BaseException вроде KeyboardInterrupt и SystemExit",
      "обычный ValueError",
      "RuntimeError",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Exception — ветка «обычных» ошибок. KeyboardInterrupt/SystemExit наследуют BaseException напрямую и except Exception их не глотает — это сделано нарочно.",
    "kind": "single",
    "id": "m36",
    "fixed": true,
    "topic": "исключения",
    "group": "Исключения и контекст"
  },
  {
    "q": "Для чего нужен pytest-asyncio?",
    "options": [
      "чтобы запускать и корректно завершать async-тесты на event loop",
      "чтобы заменить unittest на Twisted",
      "чтобы ускорить sync-тесты без async def",
      "чтобы отключить assert в async-коде"
    ],
    "answer": 0,
    "explain": "Плагин поднимает loop и позволяет писать `async def test_...`. Без него pytest не умеет await'ить корутины-тесты из коробки.",
    "kind": "single",
    "id": "m37",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Чем @staticmethod отличается от обычного метода?",
    "options": [
      "не получает ни self, ни cls — просто функция в пространстве класса",
      "всегда виртуальный в смысле C++",
      "можно объявлять только внутри ABC",
      "компилируется в C и поэтому быстрее"
    ],
    "answer": 0,
    "explain": "staticmethod не привязывает экземпляр/класс. Это обычная функция, лежащая в классе для организации API. Не путать с classmethod (получает cls).",
    "kind": "single",
    "id": "m38",
    "fixed": true,
    "topic": "staticmethod",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m39",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m40",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m41",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "За счёт чего functools.lru_cache ускоряет вызовы?",
    "options": [
      "мемоизации результатов для одинаковых аргументов у чистой функции",
      "отключения GIL на время вызова",
      "автоматического запуска в другом процессе",
      "JIT-компиляции всего модуля"
    ],
    "answer": 0,
    "explain": "lru_cache хранит последние результаты. Имеет смысл для чистых функций без сайд-эффектов. Это не multiprocessing и не снятие GIL.",
    "kind": "single",
    "id": "m42",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "В чём суть паттерна Observer?",
    "options": [
      "наблюдатели подписываются на события субъекта и получают уведомления",
      "один OS-поток жёстко привязан к одному CPU",
      "запрет любых колбэков",
      "замена всех событий на polling раз в час"
    ],
    "answer": 0,
    "explain": "Subject хранит подписчиков и при изменении зовёт их. В Python это callbacks, signals, event bus. Не про планировщик CPU.",
    "kind": "single",
    "id": "m43",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m44",
    "fixed": true,
    "topic": "git",
    "group": "Инструменты и стиль"
  },
  {
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
    "id": "m45",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m46",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "wrap",
      "f",
      "deco",
      "None"
    ],
    "answer": 0,
    "explain": "Без @functools.wraps обёртка сохраняет своё имя: f.__name__ == 'wrap', а не 'f'.",
    "kind": "single",
    "code": "def deco(fn):\n    def wrap():\n        return fn()\n    return wrap\n@deco\ndef f():\n    pass\nprint(f.__name__)",
    "id": "m47",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m48",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m49",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что в e?",
    "options": [
      "сообщение 'x'",
      "тип only",
      "traceback only",
      "ошибка"
    ],
    "answer": 0,
    "explain": "except ловит указанное исключение и продолжает выполнение → сообщение 'x'.",
    "kind": "single",
    "code": "try:\n    raise ValueError('x')\nexcept ValueError as e:\n    print(e)",
    "id": "m51",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Зачем в тестах используют parametrize?",
    "options": [
      "чтобы описать набор входов и ожидаемых результатов без копипасты теста",
      "только чтобы создавать фикстуры",
      "чтобы мокать сеть",
      "чтобы отключить discovery"
    ],
    "answer": 0,
    "explain": "Один тест + таблица данных вместо десятка почти одинаковых функций. Фикстуры и моки — отдельные механизмы pytest.",
    "kind": "single",
    "id": "m52",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Как часто делают альтернативный конструктор класса?",
    "options": [
      "через @classmethod вроде from_dict / from_json",
      "только через @staticmethod",
      "только через обязательный метакласс",
      "только через eval строки с кодом"
    ],
    "answer": 0,
    "explain": "classmethod получает cls и может вернуть экземпляр. Классика: `@classmethod def from_json(cls, data): ...`. staticmethod не знает класс.",
    "kind": "single",
    "id": "m53",
    "fixed": true,
    "topic": "classmethod",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что получает метод с @classmethod первым аргументом?",
    "options": [
      "класс (cls), а не экземпляр",
      "только экземпляр self",
      "метакласс всегда",
      "ничего — аргументов нет"
    ],
    "answer": 0,
    "explain": "classmethod видит класс: удобно для фабрик и доступа к атрибутам класса. Обычный метод получает self.",
    "kind": "single",
    "id": "m54",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "{\"ok\": true, \"n\": null}",
      "{\"ok\": True, \"n\": None}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → {\"ok\": true, \"n\": null}.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'ok': True, 'n': None}))",
    "id": "m55",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Как multiprocessing.Queue передаёт объекты между процессами?",
    "options": [
      "сериализует (обычно pickle) и копирует данные",
      "всегда разделяет ту же память Python-объекта без копирования",
      "умеет передавать только str",
      "обходит GIL, шаря байткод"
    ],
    "answer": 0,
    "explain": "Между процессами нет общего адресного пространства объектов Python: Queue пиклит/депиклит. Не всё пиклится; мутабельный шаринг «как в потоках» тут не работает.",
    "kind": "single",
    "id": "m56",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Какова сложность итерации по всем ключам dict из n элементов?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Обойти n ключей — линейно. Поиск одного ключа в среднем O(1), но это другая операция.",
    "kind": "single",
    "id": "m57",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Что значит принцип «composition over inheritance»?",
    "options": [
      "собирать поведение из объектов-частей, а не тянуть всё через наследование",
      "никогда не использовать классы",
      "всегда писать только множественное наследование",
      "запретить делегирование"
    ],
    "answer": 0,
    "explain": "Композиция («has-a») часто гибче глубоких иерархий («is-a»). Наследование не запрещено — просто не первый инструмент по умолчанию.",
    "kind": "single",
    "id": "m58",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m59",
    "fixed": true,
    "topic": "git",
    "group": "Инструменты и стиль"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "4",
      "3",
      "6",
      "0"
    ],
    "answer": 0,
    "explain": "combinations(range(4), 3) — все сочетания из 4 по 3: C(4,3)=4. Это ленивый itertools, list(...) только считает длину.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 3))))",
    "id": "m60",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что описывает typing.TypedDict?",
    "options": [
      "словарь с известным набором ключей и типами значений для чекера",
      "обязательную runtime-проверку типов на каждом обращении",
      "ускорение байткода за счёт аннотаций",
      "замену исключений кодами возврата"
    ],
    "answer": 0,
    "explain": "TypedDict — контракт для type checker (mypy/pyright). В рантайме это обычный dict, аннотации сами по себе не проверяются и не ускоряют VM.",
    "kind": "single",
    "id": "m61",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m62",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m63",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m64",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Зачем нужен async for?",
    "options": [
      "чтобы итерировать async-итераторы (__aiter__/__anext__) без блокировки loop",
      "чтобы быстрее обходить обычный list",
      "вместо multiprocessing.Pool",
      "чтобы запретить for в корутинах"
    ],
    "answer": 0,
    "explain": "async for ждёт __anext__ у асинхронного итератора (потоки данных, курсоры). Обычный list обходят обычным for — async for ему не нужен.",
    "kind": "single",
    "id": "m65",
    "fixed": true,
    "topic": "async",
    "group": "Asyncio"
  },
  {
    "q": "Зачем нужен contextlib.nullcontext?",
    "options": [
      "как пустая заглушка CM, когда with нужен условно",
      "чтобы подавить все исключения как suppress(BaseException)",
      "чтобы открыть файл",
      "чтобы заменить async with"
    ],
    "answer": 0,
    "explain": "nullcontext() — no-op context manager. Удобно писать один with, а CM выбирать: реальный или nullcontext(), если ничего делать не надо.",
    "kind": "single",
    "id": "m66",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что pytest ищет по умолчанию при discovery?",
    "options": [
      "файлы test_*.py / *_test.py и функции/методы test_*",
      "только классы unittest.TestCase",
      "только main.py",
      "только setup.py"
    ],
    "answer": 0,
    "explain": "Стандартные правила имён. unittest.TestCase тоже подхватится, но не «только они». main.py/setup.py сами по себе тестами не считаются.",
    "kind": "single",
    "id": "m67",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Может ли @property.setter поменять тип хранимого значения?",
    "options": [
      "да — это твоя логика в setter",
      "нет, язык это запрещает",
      "можно хранить только int",
      "можно хранить только str"
    ],
    "answer": 0,
    "explain": "В setter ты волен нормализовать, конвертировать или хранить что угодно. Язык тип поля не фиксирует — только соглашения и type hints.",
    "kind": "single",
    "id": "m68",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Зачем ABC нужен __subclasshook__?",
    "options": [
      "чтобы кастомизировать isinstance/issubclass без явного register",
      "чтобы переписать MRO всех классов",
      "чтобы ускорить import",
      "чтобы запретить наследование"
    ],
    "answer": 0,
    "explain": "__subclasshook__ позволяет ABC сказать: «считай класс виртуальным подклассом, если есть такие-то методы» — структурная проверка для isinstance.",
    "kind": "single",
    "id": "m69",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m70",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m71",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что даёт техника two pointers на отсортированном массиве для задачи «пара с суммой»?",
    "options": [
      "часто O(n) вместо наивных O(n²)",
      "гарантию O(1) доп. памяти при любой сортировке",
      "приём только для строк",
      "обязательную рекурсию"
    ],
    "answer": 0,
    "explain": "Два указателя с краёв сходятся: сравниваешь сумму с таргетом и двигаешь левый/правый. На отсортированных данных это линейный проход.",
    "kind": "single",
    "id": "m72",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Car наследует Engine, Wheels, Radio вместо «имеет» их — что здесь не так?",
    "options": [
      "сломана разумная композиция: это has-a, а не is-a",
      "нарушен только PEP 8 про имена",
      "так нельзя из‑за GIL",
      "Python запрещает множественное наследование"
    ],
    "answer": 0,
    "explain": "Машина не является двигателем — она его содержит. Наследование здесь путает модель; лучше поля/композиция. Множественное наследование в Python разрешено, но не оправдывает такую модель.",
    "kind": "single",
    "id": "m73",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m74",
    "fixed": true,
    "topic": "git",
    "group": "Инструменты и стиль"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "0",
      "1",
      "-1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left([1,3,5,7], 1) — индекс, куда вставить 1, чтобы сохранить порядок: уже стоит на позиции 0.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 1))",
    "id": "m75",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
    "q": "Что задаёт TypeVar(..., bound=...)?",
    "options": [
      "верхнюю границу допустимых подстановок типа",
      "что параметр обязан быть литералом",
      "максимальную длину list",
      "ускорение байткода в runtime"
    ],
    "answer": 0,
    "explain": "bound=Base значит: вместо TypeVar можно подставить только Base и его подтипы. Это подсказка для чекера, не runtime-ускорение.",
    "kind": "single",
    "id": "m76",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m77",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "В каком порядке идут вложенные for в list comprehension?",
    "options": [
      "слева направо — как у обычных вложенных for",
      "справа налево",
      "параллельно без порядка",
      "сначала все if, потом for"
    ],
    "answer": 0,
    "explain": "`[x for a in A for b in B]` читается как for a in A: for b in B. Порядок как в императивном коде, не «наоборот».",
    "kind": "single",
    "id": "m78",
    "fixed": true,
    "topic": "listcomp",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что такое lifespan protocol в ASGI?",
    "options": [
      "хуки startup/shutdown приложения вокруг обработки запросов",
      "протокол только для WebSocket-кадров",
      "то же самое, что WSGI sync callable",
      "замена OpenAPI-схемы"
    ],
    "answer": 0,
    "explain": "Lifespan — события запуска и остановки приложения (инициализация пулов, закрытие соединений) до/после обслуживания запросов. Это не про кадры WebSocket и не WSGI.",
    "kind": "single",
    "id": "m79",
    "fixed": true,
    "topic": "ASGI",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
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
    "id": "m81",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
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
    "id": "m82",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "В чём разница между __str__ и __repr__?",
    "options": [
      "__str__ — для пользователя, __repr__ — однозначное представление для отладки",
      "разницы нет, методы полные синонимы",
      "__str__ можно только у чисел",
      "__repr__ в языке запрещён"
    ],
    "answer": 0,
    "explain": "print и str() зовут __str__; в интерактивке и для отладки предпочтителен __repr__ (желательно eval-able). Если __str__ нет — падают на __repr__.",
    "kind": "single",
    "id": "m83",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что делает ABC.register(cls)?",
    "options": [
      "объявляет cls виртуальным подклассом ABC без наследования",
      "создаёт файл на диске",
      "регистрирует класс в sys.modules",
      "добавляет класс в MRO всех потомков принудительно"
    ],
    "answer": 0,
    "explain": "После register isinstance(obj, ABC) может быть True, даже если cls не наследует ABC в MRO. Это виртуальное подклассство, не запись на диск.",
    "kind": "single",
    "id": "m84",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что делает Path.resolve()?",
    "options": [
      "возвращает абсолютный путь и разрешает symlink'и",
      "только превращает Path в str",
      "удаляет файл по этому пути",
      "создаёт недостающие каталоги"
    ],
    "answer": 0,
    "explain": "resolve() нормализует путь до абсолютного и следует по символическим ссылкам (есть нюансы strict=). Это не unlink и не mkdir.",
    "kind": "single",
    "id": "m85",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Чем threading.RLock отличается от Lock?",
    "options": [
      "тот же поток может захватить RLock повторно (реентерабельность)",
      "RLock всегда быстрее Lock",
      "RLock работает между процессами",
      "RLock можно использовать только в asyncio"
    ],
    "answer": 0,
    "explain": "Обычный Lock повторный acquire тем же потоком — deadlock. RLock считает глубину захвата. Для процессов — другие примитивы multiprocessing.",
    "kind": "single",
    "id": "m86",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "5",
      "1",
      "3",
      "TypeError"
    ],
    "answer": 0,
    "explain": "max([1, 5, 3]) возвращает наибольший элемент — 5.",
    "kind": "single",
    "code": "print(max([1, 5, 3]))",
    "id": "m87",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "К чему близок принцип «There should be one–and preferably only one–obvious way to do it»?",
    "options": [
      "к ясному стилю и духу KISS: один очевидный путь",
      "к тому, чтобы иметь 10 равноправных способов сделать одно и то же",
      "к отказу от стандартной библиотеки",
      "к обязательному ООП в каждом скрипте"
    ],
    "answer": 0,
    "explain": "Из Zen of Python: предпочитай один очевидный способ, а не зоопарк равноценных API. Это про ясность, не про запрет stdlib.",
    "kind": "single",
    "id": "m88",
    "fixed": true,
    "topic": "Zen",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m89",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m90",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Как починить late binding у lambda в цикле for i in ...?",
    "options": [
      "зафиксировать значение default-аргументом: lambda i=i: ...",
      "только объявить i как global",
      "обязательно завернуть всё в list() заранее",
      "переименовать lambda в def без других изменений — само починится"
    ],
    "answer": 0,
    "explain": "Замыкание видит переменную i, а не значение на итерации. Default `i=i` вычисляется в момент создания функции и «замораживает» число.",
    "kind": "single",
    "id": "m91",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Как работает iter(callable, sentinel)?",
    "options": [
      "вызывает callable, пока результат не станет равен sentinel",
      "всегда делает ровно один вызов",
      "игнорирует sentinel и крутится бесконечно",
      "работает только с list"
    ],
    "answer": 0,
    "explain": "Двухаргументный iter — классика для `iter(file.readline, '')`: читаем, пока не пустая строка-sentinel.",
    "kind": "single",
    "id": "m92",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m93",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Как открыть два контекста без ExitStack?",
    "options": [
      "вложить with или написать with a, b",
      "никак — ExitStack обязателен всегда",
      "только через async with",
      "нужно удерживать GIL вручную"
    ],
    "answer": 0,
    "explain": "Фиксированное число CM: `with a, b:` или вложенность. ExitStack нужен, когда набор CM динамический.",
    "kind": "single",
    "id": "m95",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
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
    "id": "m96",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m97",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m98",
    "fixed": true,
    "topic": "MRO",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m99",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m100",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Какой алгоритм сортировки у встроенного sorted()/list.sort() в CPython?",
    "options": [
      "Timsort — адаптивный гибрид merge/insertion",
      "всегда классический quicksort",
      "bubble sort",
      "только radix sort"
    ],
    "answer": 0,
    "explain": "CPython использует Timsort: стабильный, хорошо работает на частично упорядоченных данных. Не quicksort и не bubble.",
    "kind": "single",
    "id": "m101",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Что означает «Explicit is better than implicit»?",
    "options": [
      "явный код лучше скрытой магии",
      "нужно больше глобальных переменных",
      "нужно меньше аннотаций типов",
      "разрешены только list comprehensions"
    ],
    "answer": 0,
    "explain": "Из Zen: лучше писать явно (аргументы, зависимости, поведение), чем полагаться на неочевидные побочные эффекты и «магию».",
    "kind": "single",
    "id": "m102",
    "fixed": true,
    "topic": "Zen",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что сделает defaultdict(int), если ключа ещё не было?",
    "options": [
      "создаст значение 0 и вернёт его",
      "бросит KeyError",
      "вернёт None",
      "создаст пустой list"
    ],
    "answer": 0,
    "explain": "factory для defaultdict(int) — вызов int() → 0. Для списков берут defaultdict(list).",
    "kind": "single",
    "id": "m103",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое functional API у Enum?",
    "options": [
      "динамическое создание: Enum('Color', 'RED GREEN BLUE')",
      "единственный способ — только class Color(Enum): ...",
      "API только для IntFlag",
      "замена dataclass"
    ],
    "answer": 0,
    "explain": "Кроме class-синтаксиса Enum можно собрать вызовом-фабрикой со строкой имён или списком. Удобно для кодогенерации.",
    "kind": "single",
    "id": "m104",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Зачем нужен nonlocal x?",
    "options": [
      "чтобы присваивать переменной из enclosing (не global) области",
      "чтобы читать builtin open",
      "чтобы создать threading.local",
      "чтобы удалить имя x из builtins"
    ],
    "answer": 0,
    "explain": "Без nonlocal присваивание создаёт локальную переменную. nonlocal помечает: пишем во внешнюю функцию, не в global.",
    "kind": "single",
    "id": "m105",
    "fixed": true,
    "topic": "closures",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m106",
    "fixed": true,
    "topic": "listcomp",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что даёт multiplexing в HTTP/2?",
    "options": [
      "несколько независимых стримов на одном TCP-соединении",
      "ровно один request на соединение, как в HTTP/1.0 без keep-alive",
      "обязательный отказ от TLS",
      "замену DNS"
    ],
    "answer": 0,
    "explain": "HTTP/2 мультиплексирует стримы: параллельные запросы без head-of-line на уровне HTTP/1. Не отменяет TCP HOL полностью, но сильно лучше.",
    "kind": "single",
    "id": "m107",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От какого класса наследует TypeError?",
    "options": [
      "Exception",
      "только object, минуя Exception",
      "всегда OSError",
      "BaseException напрямую, минуя Exception"
    ],
    "answer": 0,
    "explain": "TypeError — обычная ошибка: Exception → TypeError. except Exception его поймает.",
    "kind": "single",
    "id": "m109",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что такое fixture в pytest?",
    "options": [
      "переиспользуемая подготовка данных/ресурсов с автоматическим teardown",
      "только синоним unittest.mock",
      "обязательный sleep в начале теста",
      "файл coverage.xml"
    ],
    "answer": 0,
    "explain": "Фикстуры через @pytest.fixture дают setup/teardown и dependency injection в аргументы теста. Mock — отдельный инструмент.",
    "kind": "single",
    "id": "m110",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m111",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "AttributeError",
      "None",
      "property"
    ],
    "answer": 0,
    "explain": "Обращение к c.x вызывает getter property и возвращает self._x, то есть 3.",
    "kind": "single",
    "code": "class C:\n    def __init__(self):\n        self._x = 3\n    @property\n    def x(self):\n        return self._x\nprint(C().x)",
    "id": "m112",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Какое важное свойство у сортировки в CPython?",
    "options": [
      "она стабильная (Timsort сохраняет порядок равных элементов)",
      "это всегда нестабильный quicksort",
      "sorted работает только с числами",
      "list.sort запрещён для строк"
    ],
    "answer": 0,
    "explain": "Стабильность значит: равные ключи остаются в исходном относительном порядке. Timsort это гарантирует.",
    "kind": "single",
    "id": "m113",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m114",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Чем обычно реализуют BFS по графу в Python?",
    "options": [
      "очередью collections.deque и множеством visited",
      "только list.pop(0) без deque",
      "только heapq",
      "только рекурсией без очереди"
    ],
    "answer": 0,
    "explain": "BFS — ширина: FIFO-очередь. deque.popleft() — O(1), list.pop(0) — O(n). heapq — для приоритетов, не классический BFS.",
    "kind": "single",
    "id": "m115",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Что на практике значит KISS в Python-коде?",
    "options": [
      "прямолинейный понятный код вместо лишней «магии»",
      "всегда метаклассы и дескрипторы",
      "писать всё только на C-расширениях",
      "отказаться от функций и модулей"
    ],
    "answer": 0,
    "explain": "Keep It Simple: сначала ясное решение. Метаклассы и native — когда простота уже не тянет требования.",
    "kind": "single",
    "id": "m116",
    "fixed": true,
    "topic": "KISS",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что произойдёт при d['k'].append(1), если d = defaultdict(list) и ключа 'k' не было?",
    "options": [
      "создастся [], затем append(1)",
      "KeyError",
      "AttributeError: NoneType",
      "операция тихо проигнорируется"
    ],
    "answer": 0,
    "explain": "Нет ключа → factory list() → пустой список кладётся в d['k'] → append. Удобно для группировки.",
    "kind": "single",
    "id": "m117",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "zero",
      "one",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "match/case сопоставляет x=0 с case 0 и печатает zero.",
    "kind": "single",
    "code": "x = 0\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m118",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "UnboundLocalError",
      "NameError"
    ],
    "answer": 0,
    "explain": "nonlocal n позволяет inc увеличить enclosing n с 0 до 10; make() возвращает это значение.",
    "kind": "single",
    "code": "def make():\n    n = 0\n    def inc():\n        nonlocal n\n        n += 10\n        return n\n    return inc\nprint(make()())",
    "id": "m119",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что происходит при gen.close()?",
    "options": [
      "внутрь генератора бросается GeneratorExit и он завершается",
      "только обычный StopIteration без GeneratorExit",
      "всегда KeyboardInterrupt",
      "генератор перезапускается с первого yield"
    ],
    "answer": 0,
    "explain": "close() шлёт GeneratorExit. Генератор должен завершиться; глотать GeneratorExit и продолжать yield — ошибка.",
    "kind": "single",
    "id": "m120",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m121",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что напечатает?",
    "options": [
      "enter\nbody\nexit",
      "body\nenter\nexit",
      "enter\nexit\nbody",
      "ошибка"
    ],
    "answer": 0,
    "explain": "with вызывает __enter__, тело, затем __exit__. Вывод: enter\nbody\nexit.",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    print('body')",
    "id": "m123",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что умеет side_effect у unittest.mock?",
    "options": [
      "кидать исключения, отдавать значения из итерируемого или звать callable",
      "только фиксированный return_value",
      "патчить файлы на диске",
      "заменять sys.modules"
    ],
    "answer": 0,
    "explain": "side_effect гибче return_value: последовательность ответов, исключение или своя функция. Диск сам по себе не трогает.",
    "kind": "single",
    "id": "m124",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
    "q": "Что должен возвращать __len__?",
    "options": [
      "целое int ≥ 0",
      "любой float",
      "строку с длиной",
      "None"
    ],
    "answer": 0,
    "explain": "Протокол длины требует неотрицательный int. Иначе TypeError при len(obj).",
    "kind": "single",
    "id": "m125",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Для чего abc.update_abstractmethods (3.10+)?",
    "options": [
      "пересчитать набор абстрактных методов после динамических правок класса",
      "всегда бросить TypeError",
      "вернуть None и ничего не делать полезного",
      "удалить все abstractmethod"
    ],
    "answer": 0,
    "explain": "Если вы на лету добавляете/убираете @abstractmethod, update_abstractmethods обновляет статус абстрактности класса.",
    "kind": "single",
    "id": "m126",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что делает timeout у subprocess.run?",
    "options": [
      "по истечении убивает процесс и бросает TimeoutExpired",
      "только пишет warning в stderr",
      "игнорирует лимит на Windows",
      "меняет приоритет nice"
    ],
    "answer": 0,
    "explain": "run(..., timeout=N) ждёт не дольше N секунд, затем terminate/kill (с нюансами) и TimeoutExpired.",
    "kind": "single",
    "id": "m127",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "В чём практическая разница Lock и RLock?",
    "options": [
      "RLock тот же поток может взять повторно; обычный Lock — нет",
      "Lock всегда быстрее и тоже reentrant",
      "это одно и то же под разными именами",
      "RLock существует только в asyncio"
    ],
    "answer": 0,
    "explain": "Нужен ли reentrancy — главный критерий выбора. Оба — для потоков одного процесса, не для multiprocessing.",
    "kind": "single",
    "id": "m128",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Какова типичная сложность Counter.most_common(k)?",
    "options": [
      "примерно O(n log k) через кучу",
      "всегда O(1)",
      "O(n²) обязательно",
      "O(log n) как бинарный поиск"
    ],
    "answer": 0,
    "explain": "Считаем частоты за O(n), затем heapq.nlargest по счётчикам — O(n log k) для топ-k.",
    "kind": "single",
    "id": "m129",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Чем YAGNI отличается от KISS?",
    "options": [
      "YAGNI — не делать незапрошенное; KISS — делать просто то, что делаешь",
      "YAGNI только про тесты, KISS только про SQL",
      "это полные синонимы без оттенков",
      "KISS запрещает функции, YAGNI запрещает классы"
    ],
    "answer": 0,
    "explain": "YAGNI отсекает лишние фичи «на будущее». KISS — про простоту реализации нужного. Часто идут рядом, но это разные акценты.",
    "kind": "single",
    "id": "m130",
    "fixed": true,
    "topic": "YAGNI",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что делает deque.rotate(1) для очереди из 4 элементов?",
    "options": [
      "циклический сдвиг на 1 вправо (отрицательный n — влево)",
      "сортирует элементы",
      "удаляет один элемент",
      "всегда бросает ошибку"
    ],
    "answer": 0,
    "explain": "rotate(n) крутит deque на n шагов. Это не sort и не pop.",
    "kind": "single",
    "id": "m131",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "В какой версии Python появился match/case?",
    "options": [
      "3.10",
      "3.8",
      "3.12",
      "2.7"
    ],
    "answer": 0,
    "explain": "Structural pattern matching (PEP 634) — с Python 3.10.",
    "kind": "single",
    "id": "m132",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[2, 2, 2]",
      "[0, 1, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "lambda: i без default ловит i по имени; после цикла все дают последнее i.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(3)]\nprint([f() for f in fs])",
    "id": "m133",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m134",
    "fixed": true,
    "topic": "generators",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m135",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что меняет asyncio.gather(..., return_exceptions=True)?",
    "options": [
      "исключения кладутся в список результатов вместо немедленного raise",
      "все задачи молча отменяются",
      "gather начинает работать только с sync-функциями",
      "event loop останавливается"
    ],
    "answer": 0,
    "explain": "По умолчанию первая ошибка пробрасывается. С return_exceptions=True получишь смесь результатов и exception-объектов.",
    "kind": "single",
    "id": "m136",
    "fixed": true,
    "topic": "async",
    "group": "Asyncio"
  },
  {
    "q": "Что делает ExitStack.callback(...)",
    "options": [
      "регистрирует произвольный teardown-колбэк на выход из стека",
      "умеет входить только в context manager'ы, не в голые функции",
      "заменяет sys.excepthook",
      "включает GC"
    ],
    "answer": 0,
    "explain": "callback регистрирует функцию, которая вызовется при раскрутке ExitStack — удобно для ручной очистки без CM.",
    "kind": "single",
    "id": "m137",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Зачем нужен warnings.catch_warnings?",
    "options": [
      "временно перехватить/настроить warnings в блоке with",
      "это синоним except Exception",
      "это фикстура только pytest",
      "отключает SyntaxWarning навсегда в процессе"
    ],
    "answer": 0,
    "explain": "catch_warnings — контекст для тестов и локальной политики предупреждений. Не замена except и не глобальный kill switch навсегда.",
    "kind": "single",
    "id": "m138",
    "fixed": true,
    "topic": "warnings",
    "group": "Тесты и качество"
  },
  {
    "q": "Для чего нужен __length_hint__?",
    "options": [
      "дать оценку длины итератора (например для list(it)), не обязан быть точным len",
      "обязан вернуть точный len, иначе TypeError",
      "заменить __len__ у всех контейнеров",
      "нужен только для str"
    ],
    "answer": 0,
    "explain": "length_hint — подсказка для предаллокации. Это не строгий протокол len(); hint может врать.",
    "kind": "single",
    "id": "m139",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Зачем у subclass с __slots__ часто пишут __slots__ = ()?",
    "options": [
      "чтобы не вернуть экземпляру __dict__, сохранив экономию памяти",
      "чтобы удалить slots родителя",
      "чтобы создать атрибут-список с именем slots",
      "это синтаксический сахар без эффекта"
    ],
    "answer": 0,
    "explain": "Если у потомка не объявить slots, снова появится __dict__ и смысл slots родителя теряется. Пустой кортеж — «своих полей нет, dict не нужен».",
    "kind": "single",
    "id": "m140",
    "fixed": true,
    "topic": "slots",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что возвращает tempfile.mkstemp?",
    "options": [
      "пару (fd, path) — дескриптор и путь",
      "только pathlib.Path",
      "всегда готовый текстовый file object",
      "только имя без fd"
    ],
    "answer": 0,
    "explain": "mkstemp низкоуровневый: os-level fd + путь. Закрывать fd и удалять файл — твоя ответственность (или бери NamedTemporaryFile).",
    "kind": "single",
    "id": "m141",
    "fixed": true,
    "topic": "tempfile",
    "group": "Stdlib и производительность"
  },
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
    "fixed": true,
    "topic": "concurrency",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Для чего удобен defaultdict(list)?",
    "options": [
      "группировать элементы по ключу без проверки «есть ли ключ»",
      "сортировать за O(1)",
      "хешировать пароли",
      "заменить asyncio.Queue"
    ],
    "answer": 0,
    "explain": "Классика: d[key].append(item) при группировке. Сортировка, крипто и очереди — другие инструменты.",
    "kind": "single",
    "id": "m143",
    "fixed": true,
    "topic": "алгоритмы",
    "group": "Алгоритмы и структуры данных"
  },
  {
    "q": "Что значит высокая связность (cohesion) модуля?",
    "options": [
      "элементы модуля работают на одну цель",
      "модуль знает обо всём проекте",
      "везде import *",
      "один гигантский файл на всё приложение"
    ],
    "answer": 0,
    "explain": "High cohesion — функции и типы модуля про одну тему. Обратное — «свалка» несвязанных утилит. Это не про размер файла сам по себе.",
    "kind": "single",
    "id": "m144",
    "fixed": true,
    "topic": "cohesion",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что возвращает namedtuple._asdict()?",
    "options": [
      "словарь (раньше OrderedDict) с полями экземпляра",
      "автоматически JSON через dumps",
      "кортеж только имён полей",
      "глубокую копию вложенных объектов"
    ],
    "answer": 0,
    "explain": "_asdict() отдаёт mapping поле→значение. JSON сам не пишет — для этого json.dumps.",
    "kind": "single",
    "id": "m145",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем field(default_factory=set) в dataclass?",
    "options": [
      "чтобы у каждого экземпляра был свой новый set()",
      "чтобы все экземпляры делили один общий set",
      "чтобы запретить поле",
      "только для сериализации в JSON"
    ],
    "answer": 0,
    "explain": "Мутабельный default нельзя писать как x: set = set(). default_factory вызывает фабрику на каждый экземпляр — иначе shared state.",
    "kind": "single",
    "id": "m146",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m147",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Чем простой list comprehension часто удобнее map+lambda?",
    "options": [
      "обычно читаемее для простых преобразований",
      "всегда быстрее чистого C без исключений",
      "не создаёт list (ленивый)",
      "запрещён PEP 8"
    ],
    "answer": 0,
    "explain": "Listcomp явно показывает цикл и условие. map+lambda часто хуже читается; listcomp всё равно строит список (не ленивый genexp).",
    "kind": "single",
    "id": "m148",
    "fixed": true,
    "topic": "comprehensions",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Для чего в FastAPI параметр response_model?",
    "options": [
      "валидирует и фильтрует поля ответа по схеме",
      "меняет HTTP-метод запроса",
      "отключает OpenAPI",
      "выключает async"
    ],
    "answer": 0,
    "explain": "response_model (обычно Pydantic) обрезает лишние поля и проверяет типы на выходе. На method/OpenAPI «выключить» он не влияет так.",
    "kind": "single",
    "id": "m149",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что связывает конструкция raise X from Y?",
    "options": [
      "__cause__ — явную цепочку исключений",
      "только текст message",
      "удаляет traceback",
      "заменяет sys.exc_info навсегда"
    ],
    "answer": 0,
    "explain": "`raise New from old` ставит __cause__ (explicit chaining). Traceback не стирается — наоборот, оба видны.",
    "kind": "single",
    "id": "m151",
    "fixed": true,
    "topic": "исключения",
    "group": "Исключения и контекст"
  },
  {
    "q": "Для чего filters у logging.Handler?",
    "options": [
      "отсекать записи, которые handler не должен обрабатывать",
      "менять уровень корневого logger глобально",
      "удалять сам Logger из менеджера",
      "ротировать файлы логов"
    ],
    "answer": 0,
    "explain": "Filter решает, пропустить LogRecord дальше. Уровень — отдельно; ротация — у RotatingFileHandler и т.п.",
    "kind": "single",
    "id": "m152",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Что значит, если класс реализует и __iter__, и __next__?",
    "options": [
      "экземпляр одновременно iterable и iterator",
      "так делать запрещено языком",
      "нужен только generator",
      "так можно только в async"
    ],
    "answer": 0,
    "explain": "Iterable даёт iterator через __iter__; iterator ещё имеет __next__. Совместить можно (одноразовый объект), но чаще разделяют.",
    "kind": "single",
    "id": "m153",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что такое миксин обычно?",
    "options": [
      "класс с дополнительным поведением без самостоятельной «главной» роли",
      "абстрактный модуль sys",
      "синоним декоратора",
      "обязательный метакласс"
    ],
    "answer": 0,
    "explain": "Mixin подмешивают в наследование ради методов (логирование, сериализация). Сам по себе как доменная сущность не живёт.",
    "kind": "single",
    "id": "m154",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Для чего часто используют operator.itemgetter в сортировке?",
    "options": [
      "как быстрый key= для sorted/min/max по индексу/ключу",
      "чтобы отключить Timsort",
      "чтобы сравнивать только id() объектов",
      "это замена heapq"
    ],
    "answer": 0,
    "explain": "itemgetter(1) быстрее и короче lambda t: t[1] на горячих сортировках. Алгоритм sorted не меняет.",
    "kind": "single",
    "id": "m155",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что даёт threading.local()?",
    "options": [
      "хранилище, своё для каждого потока",
      "общую память между процессами",
      "contextvars для asyncio",
      "файловый lock ОС"
    ],
    "answer": 0,
    "explain": "thread-local: у каждого Thread свои атрибуты на local(). Для процессов не шарится; для async-задач смотри contextvars.",
    "kind": "single",
    "id": "m156",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Почему глобальное мутабельное состояние в библиотеке — проблема?",
    "options": [
      "ломает тестируемость и предсказуемость между вызовами",
      "всегда замедляет интерпретатор вдвое",
      "запрещено синтаксисом",
      "мешает только asyncio"
    ],
    "answer": 0,
    "explain": "Глобалы утекают между тестами и пользователями API. Лучше явные аргументы/контекст. Скорость тут вторична.",
    "kind": "single",
    "id": "m157",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m158",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Когда члены Enum сравнимы с int?",
    "options": [
      "если это IntEnum или IntFlag",
      "всегда у любого Enum",
      "никогда",
      "только у StrEnum"
    ],
    "answer": 0,
    "explain": "Обычный Enum с int не равен числу. IntEnum/IntFlag ведут себя как int. StrEnum — про строки.",
    "kind": "single",
    "id": "m159",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведут все вызовы?",
    "options": [
      "2 2 2",
      "0 1 2",
      "ошибка",
      "None None None"
    ],
    "answer": 0,
    "explain": "Классический late binding в цикле: все замыкания видят финальное i=2.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "id": "m160",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что вызывает iter(x) у обычного объекта?",
    "options": [
      "x.__iter__()",
      "сразу x.__next__()",
      "обязательно list(x)",
      "x.next() как в Python 2"
    ],
    "answer": 0,
    "explain": "iter запрашивает итератор через __iter__ (или sequence protocol). __next__ зовёт уже у итератора.",
    "kind": "single",
    "id": "m161",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m162",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
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
    "id": "m164",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Чем pytest.mark.skip отличается от skipif?",
    "options": [
      "skip — всегда; skipif — по условию",
      "это полные синонимы",
      "skipif удаляет файл теста с диска",
      "skip то же, что xfail"
    ],
    "answer": 0,
    "explain": "skip безусловен, skipif(expr) пропускает при истинном условии. xfail — ожидаемый провал, другая семантика.",
    "kind": "single",
    "id": "m165",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m166",
    "fixed": true,
    "topic": "classmethod",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Можно ли поставить @abstractmethod на property?",
    "options": [
      "да — абстрактный геттер/сеттер в ABC",
      "нет, только на обычные methods",
      "только вместе с classmethod",
      "только в Python 2"
    ],
    "answer": 0,
    "explain": "@abstractmethod может декорировать property: подкласс обязан реализовать свойство. Это штатный приём ABC.",
    "kind": "single",
    "id": "m167",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что делает from __future__ import annotations?",
    "options": [
      "откладывает вычисление аннотаций (хранит как строки / отложенно)",
      "включает free-threading без GIL",
      "режим совместимости с Python 2",
      "ускоряет встроенную abs"
    ],
    "answer": 0,
    "explain": "PEP 563/649-направление: аннотации не вычисляются сразу при определении класса/функции — удобно для forward refs. Не про GIL.",
    "kind": "single",
    "id": "m168",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Чем multiprocessing.Pipe отличается от Queue?",
    "options": [
      "Pipe — пара концов на двоих; Queue — очередь для многих участников",
      "это одно и то же API",
      "Pipe работает только с asyncio",
      "Queue передаёт объекты без сериализации"
    ],
    "answer": 0,
    "explain": "Pipe удобен для двух процессов. Queue — многопроизводителей/потребителей, с пиклом. Оба не шарят сырые py-объекты.",
    "kind": "single",
    "id": "m169",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Для чего полезен паттерн Command?",
    "options": [
      "отложенное выполнение, очередь действий, undo/redo",
      "только для SQL-запросов",
      "только для HTTP",
      "замена enum"
    ],
    "answer": 0,
    "explain": "Command инкапсулирует действие как объект — можно класть в очередь, логировать, откатывать. Не привязан к SQL/HTTP.",
    "kind": "single",
    "id": "m170",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m171",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что означает ветка `case _:` в match?",
    "options": [
      "wildcard — срабатывает, если ничего выше не подошло",
      "синтаксическая ошибка",
      "матчит только None",
      "обязательна в каждом match"
    ],
    "answer": 0,
    "explain": "_ — общий случай (default). Не обязан быть, но удобен как «иначе».",
    "kind": "single",
    "id": "m172",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m173",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Есть ли у list comprehension своя область видимости?",
    "options": [
      "да, с Python 3 переменные comprehension не утекают наружу",
      "нет, как было в 2.7",
      "только у async for",
      "только у dict comprehension"
    ],
    "answer": 0,
    "explain": "В Py3 `[i for i in ...]`: i не остаётся снаружи. В 2.7 listcomp утекал — частая ловушка миграции.",
    "kind": "single",
    "id": "m174",
    "fixed": true,
    "topic": "comprehensions",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что такое SQLAlchemy?",
    "options": [
      "ORM и SQL toolkit для работы с БД",
      "отдельная NoSQL-база данных",
      "встроенный модуль stdlib вместо sqlite3",
      "брокер сообщений"
    ],
    "answer": 0,
    "explain": "SQLAlchemy — библиотека: Core (SQL expression) и ORM. Это не СУБД и не часть стандартной библиотеки.",
    "kind": "single",
    "id": "m175",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует FileNotFoundError?",
    "options": [
      "OSError (иерархия ошибок ОС/I/O)",
      "только object",
      "напрямую Exception, минуя OSError",
      "Warning"
    ],
    "answer": 0,
    "explain": "С PEP 3151 детализировали OSError: FileNotFoundError — его подкласс. except OSError поймает и его.",
    "kind": "single",
    "id": "m177",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что делает pytest -k 'not slow'?",
    "options": [
      "запускает тесты, чьи имена не матчят выражение slow",
      "удаляет медленные тесты с диска",
      "запускает только slow",
      "отключает CI"
    ],
    "answer": 0,
    "explain": "-k фильтрует по подстроке/выражению в имени ноды. Файлы не трогает.",
    "kind": "single",
    "id": "m178",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Что вызывается при выражении a + b?",
    "options": [
      "сначала a.__add__(b), иначе b.__radd__(a)",
      "только a.__iadd__(b)",
      "обязательно hash(a)",
      "только b.__add__(a)"
    ],
    "answer": 0,
    "explain": "Бинарный +: левый __add__, при NotImplemented — отражённый __radd__. __iadd__ — для +=.",
    "kind": "single",
    "id": "m179",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Каков типичный MRO при diamond: class C(A, B)?",
    "options": [
      "C, затем A, затем B, затем общие базы по C3 (упрощённо)",
      "всегда C, B, A без исключений",
      "случайный порядок каждый запуск",
      "всегда TypeError"
    ],
    "answer": 0,
    "explain": "C3 линеаризация фиксирует порядок: слева направо с учётом монотонности. Точный хвост зависит от баз A/B; смотри Class.__mro__.",
    "kind": "single",
    "id": "m180",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что выведет/покажет код про стабильность sorted?",
    "options": [
      "порядок равных по ключу элементов сохранится (стабильная сортировка)",
      "элементы переставятся случайно при равном ключе",
      "сортировка по id() объектов",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Оба кортежа с ключом 1: Timsort сохранит исходный относительный порядок ('b' перед 'a').",
    "kind": "single",
    "code": "xs = [('b', 1), ('a', 1)]\nprint(sorted(xs, key=lambda t: t[1]))",
    "id": "m181",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для чего threading.Barrier на N потоков?",
    "options": [
      "чтобы N потоков встретились в одной точке синхронизации",
      "это обычный Lock на один поток",
      "это asyncio.gather",
      "барьер ядра ОС между процессами"
    ],
    "answer": 0,
    "explain": "Barrier.wait() блокирует, пока не соберётся parties потоков, затем отпускает всех. Не путать с process-барьерами.",
    "kind": "single",
    "id": "m182",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "С чем YAGNI совместим?",
    "options": [
      "с простым расширяемым дизайном без лишних фич «на вырост»",
      "с написанием всего возможного API заранее",
      "с сотней уровней наследования",
      "с преждевременной микрооптимизацией"
    ],
    "answer": 0,
    "explain": "YAGNI не запрещает хороший дизайн — запрещает строить то, что никто не просил. Преждевременная оптимизация — как раз противник.",
    "kind": "single",
    "id": "m183",
    "fixed": true,
    "topic": "YAGNI",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "20",
      "10",
      "5",
      "25"
    ],
    "answer": 0,
    "explain": "permutations(range(5), 2) — размещения из 5 по 2: P(5,2)=5×4=20.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(5), 2))))",
    "id": "m184",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m185",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m186",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m187",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что такое covering index?",
    "options": [
      "индекс, из которого СУБД может ответить на запрос, не читая heap/таблицу",
      "полный table scan",
      "синоним foreign key",
      "обязательный PRIMARY KEY"
    ],
    "answer": 0,
    "explain": "Covering/index-only scan: все нужные колонки есть в индексе. Это про план запроса, не про FK.",
    "kind": "single",
    "id": "m188",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
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
    "id": "m190",
    "fixed": true,
    "topic": "with",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что позволяет monkeypatch в pytest?",
    "options": [
      "временно подменить атрибут, переменную окружения или путь в тесте",
      "патчить прод без отката",
      "удалить git-репозиторий",
      "отключить GIL"
    ],
    "answer": 0,
    "explain": "monkeypatch безопасен в рамках теста и откатывается. Это не про прод и не про GIL.",
    "kind": "single",
    "id": "m191",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Что делает декоратор @staticmethod?",
    "options": [
      "метод не получает автоматически self/cls — обычная функция в классе",
      "включает JIT для метода",
      "делает метод абстрактным",
      "разрешён только внутри метакласса"
    ],
    "answer": 0,
    "explain": "staticmethod — namespace класса без привязки экземпляра. Не путать с classmethod.",
    "kind": "single",
    "id": "m192",
    "fixed": true,
    "topic": "staticmethod",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "C",
      "B",
      "A",
      "object"
    ],
    "answer": 0,
    "explain": "C.__mro__[0] — сам класс C, поэтому имя 'C'.",
    "kind": "single",
    "code": "class A: pass\nclass B(A): pass\nclass C(B): pass\nprint(C.__mro__[0].__name__)",
    "id": "m193",
    "fixed": true,
    "topic": "MRO",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m194",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает threading.Timer?",
    "options": [
      "запускает функцию в отдельном потоке после delay секунд",
      "это asyncio.sleep",
      "ставит системный cron",
      "блокирует главный поток без нового Thread"
    ],
    "answer": 0,
    "explain": "Timer — Thread с отложенным start. Не cron ОС и не корутина.",
    "kind": "single",
    "id": "m195",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что такое spaghetti code?",
    "options": [
      "запутанные зависимости и поток управления",
      "обязательно только async-код",
      "обязательно только ООП",
      "синоним чистой архитектуры"
    ],
    "answer": 0,
    "explain": "«Спагетти» — goto-подобная каша связей. Не привязано к async или ООП как таковым.",
    "kind": "single",
    "id": "m196",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m197",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "pair",
      "empty",
      "single",
      "[1, 2]"
    ],
    "answer": 0,
    "explain": "Список из двух элементов матчит case [_, _] (в обрезанном коде — ветка pair).",
    "kind": "single",
    "code": "x = [1, 2]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m198",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m199",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Куда попадает значение `return x` внутри генератора (3.3+)?",
    "options": [
      "в StopIteration.value (его забирает yield from)",
      "это SyntaxError",
      "сразу return в вызывающий кадр как у обычной функции",
      "значение всегда игнорируется"
    ],
    "answer": 0,
    "explain": "return в генераторе завершает его с StopIteration.value. yield from пробрасывает это значение наружу.",
    "kind": "single",
    "id": "m200",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что важно помнить про SERIALIZABLE?",
    "options": [
      "это самый строгий уровень, но аномалии/реализация зависят от СУБД",
      "во всех СУБД SERIALIZABLE ведёт себя идентично",
      "уровень только про DDL",
      "он отключает индексы"
    ],
    "answer": 0,
    "explain": "Имя одно, семантика (SSI vs S2PL и т.д.) разная. Читай документацию своей БД.",
    "kind": "single",
    "id": "m201",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует KeyboardInterrupt?",
    "options": [
      "BaseException (не Exception)",
      "только object",
      "Exception напрямую",
      "OSError"
    ],
    "answer": 0,
    "explain": "Ctrl+C → KeyboardInterrupt ⊂ BaseException. except Exception его не глотает — выход остаётся возможным.",
    "kind": "single",
    "id": "m203",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что делает warnings.simplefilter('error')?",
    "options": [
      "превращает подходящие warnings в исключения",
      "глушит все предупреждения",
      "только пишет в log",
      "отключает SyntaxError"
    ],
    "answer": 0,
    "explain": "filter 'error' полезен в тестах: предупреждение не проскользнёт молча. 'ignore' — наоборот глушит.",
    "kind": "single",
    "id": "m204",
    "fixed": true,
    "topic": "warnings",
    "group": "Тесты и качество"
  },
  {
    "q": "Что обслуживает метод __getitem__?",
    "options": [
      "доступ obj[key] / срезы",
      "доступ obj.key через точку",
      "вход в with obj",
      "вызов obj()"
    ],
    "answer": 0,
    "explain": "Квадратные скобки → __getitem__/__setitem__. Точка — __getattribute__, with — __enter__, вызов — __call__.",
    "kind": "single",
    "id": "m205",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что такое MRO?",
    "options": [
      "Method Resolution Order — порядок поиска атрибутов/методов у класса",
      "тип исключения импорта",
      "менеджер памяти pymalloc",
      "формат wheel-файла"
    ],
    "answer": 0,
    "explain": "MRO (C3) видно в Class.__mro__. От него зависит, чей метод вызовется при множественном наследовании.",
    "kind": "single",
    "id": "m206",
    "fixed": true,
    "topic": "MRO",
    "group": "ООП продвинутый"
  },
  {
    "q": "Зачем ограничивать find_class при Unpickler?",
    "options": [
      "чтобы whitelist'ить безопасные классы при загрузке",
      "чтобы ускорить pickle в 10 раз",
      "чтобы отключить GC",
      "это нужно только для json"
    ],
    "answer": 0,
    "explain": "Кастомный find_class — база безопасного unpickle. Иначе pickle с недоверенных данных = RCE.",
    "kind": "single",
    "id": "m207",
    "fixed": true,
    "topic": "pickle",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m208",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Как посмотреть Zen of Python в интерпретаторе?",
    "options": [
      "import this",
      "python -m zen",
      "help(zen)",
      "print(__zen__)"
    ],
    "answer": 0,
    "explain": "Пасхалка: `import this` печатает Zen. Отдельного модуля zen в stdlib нет.",
    "kind": "single",
    "id": "m209",
    "fixed": true,
    "topic": "Zen",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что хранит lru_cache(maxsize=128)?",
    "options": [
      "до 128 закэшированных результатов вызовов (LRU)",
      "только самый последний вызов",
      "кэш обязательно на диске",
      "кэш в Redis"
    ],
    "answer": 0,
    "explain": "maxsize — ёмкость in-memory LRU. None = безлимит (осторожно с утечками). Диск/Redis сами не подключены.",
    "kind": "single",
    "id": "m210",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m211",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код (по порядку)?",
    "options": [
      "before, затем 1",
      "только 1",
      "ошибка",
      "только before"
    ],
    "answer": 0,
    "explain": "Выполнение кода даёт before, затем 1. Разбери операции по строкам: присваивания, вызовы и то, что реально печатает print.",
    "kind": "single",
    "code": "def deco(f):\n    def wrap():\n        print('before')\n        return f()\n    return wrap\n@deco\ndef f():\n    return 1\nprint(f())",
    "id": "m212",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Какова длина [(x, y) for x in range(2) for y in range(2)]?",
    "options": [
      "4",
      "2",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Два по два: (0,0),(0,1),(1,0),(1,1) — четыре пары.",
    "kind": "single",
    "id": "m213",
    "fixed": true,
    "topic": "comprehensions",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 301?",
    "options": [
      "Moved Permanently — постоянный редирект",
      "успех 200-го класса",
      "временный редирект 302 по определению",
      "ошибка клиента 4xx"
    ],
    "answer": 0,
    "explain": "301 — постоянный перенос URI. Временные — 302/307; успех — 2xx.",
    "kind": "single",
    "id": "m214",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что будет, если __exit__ вернул True?",
    "options": [
      "исключение из with-блока подавляется",
      "исключение всегда пробрасывается снова",
      "закрывается GIL",
      "return из функции игнорируется"
    ],
    "answer": 0,
    "explain": "True из __exit__ означает «я обработал исключение». False/None — проброс дальше. Так работает contextlib.suppress.",
    "kind": "single",
    "id": "m216",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Как лучше использовать unittest.mock.patch в тесте?",
    "options": [
      "как context manager или декоратор — только на время теста",
      "патчить прод навсегда при импорте модуля",
      "только через eval строки с путём",
      "patch нельзя откатить"
    ],
    "answer": 0,
    "explain": "patch как with/decorator гарантирует откат. Глобальный патч при import ломает другие тесты и прод.",
    "kind": "single",
    "id": "m217",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем объекту метод __bytes__?",
    "options": [
      "чтобы bytes(obj) вернул байтовое представление",
      "чтобы заменить str(obj)",
      "это обязательный метод любого класса",
      "только для pathlib"
    ],
    "answer": 0,
    "explain": "Протокол bytes(obj) → __bytes__. Не путать со __str__/__repr__.",
    "kind": "single",
    "id": "m218",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что обычно даёт @property?",
    "options": [
      "доступ как к атрибуту, а внутри — вычисление через метод",
      "обязательное хранение значения в __dict__ без геттера",
      "запрет на setter навсегда",
      "ускорение за счёт слотов"
    ],
    "answer": 0,
    "explain": "property маскирует метод под атрибут: obj.x вызывает getter. Setter/deleter опциональны.",
    "kind": "single",
    "id": "m219",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "json.loads падает с JSONDecodeError на невалидном JSON.",
    "kind": "single",
    "code": "import json\nprint(json.loads('{'))",
    "id": "m220",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что часто происходит с CPU-bound чистым Python на 2 threading-потоках?",
    "options": [
      "упираетесь примерно в одно ядро из‑за GIL",
      "линейный прирост ×2 всегда",
      "GIL автоматически отключается",
      "интерпретатор создаёт 2 процесса"
    ],
    "answer": 0,
    "explain": "GIL сериализует исполнение байткода. Два CPU-потока редко дают ×2. Для CPU — multiprocessing/native.",
    "kind": "single",
    "id": "m221",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Когда нужен паттерн Adapter?",
    "options": [
      "когда чужой интерфейс надо подогнать под ожидаемый вами",
      "когда нужно ускорить GIL",
      "только при работе с JSON",
      "вместо любых тестов"
    ],
    "answer": 0,
    "explain": "Adapter переводит вызовы вашего API в API легаси/библиотеки, не меняя её код.",
    "kind": "single",
    "id": "m222",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что делает itertools.chain.from_iterable?",
    "options": [
      "сплющивает один уровень вложенности итерируемых",
      "рекурсивно раскрывает любую глубину",
      "сортирует элементы",
      "удаляет дубликаты"
    ],
    "answer": 0,
    "explain": "from_iterable([[1,2],[3]]) → 1,2,3. Только один уровень; для глубокого flatten нужен свой код.",
    "kind": "single",
    "id": "m223",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m224",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[3, 3, 3, 3]",
      "[0, 1, 2, 3]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "То же late binding: range(4) → последнее i=3 у всех lambda.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(4)]\nprint([f() for f in fs])",
    "id": "m225",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m226",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m227",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Как открыть три контекста без ExitStack?",
    "options": [
      "вложить with или написать with a, b, c",
      "нельзя — ExitStack обязателен",
      "только async with",
      "только через try/finally вручную без with"
    ],
    "answer": 0,
    "explain": "Фиксированный набор CM: синтаксис with a, b, c. ExitStack — когда набор динамический.",
    "kind": "single",
    "id": "m229",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что проверяет mock.assert_called_once_with(...)",
    "options": [
      "что мок вызвали ровно один раз с такими аргументами",
      "что мок никогда не вызывали",
      "что файл на диске изменился",
      "что покрыты все ветки"
    ],
    "answer": 0,
    "explain": "Это assert на историю вызовов мока. Не про файлы и не про coverage.",
    "kind": "single",
    "id": "m230",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
    "q": "Как сбросить functools.cached_property у экземпляра?",
    "options": [
      "del obj.attr (или убрать ключ из obj.__dict__)",
      "вызвать gc.collect() — этого достаточно всегда",
      "cached_property нельзя сбросить",
      "только перезапустить процесс"
    ],
    "answer": 0,
    "explain": "Значение кэшируется в __dict__ экземпляра. del obj.attr заставит пересчитать при следующем доступе.",
    "kind": "single",
    "id": "m231",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что важно при наследовании классов с __slots__?",
    "options": [
      "аккуратно объявлять slots в каждом звене цепочки",
      "slots родителя копируются автоматически без объявления",
      "у потомка slots запрещены",
      "slots работают только с multiple inheritance"
    ],
    "answer": 0,
    "explain": "Потомок без своего __slots__ снова получает __dict__. Нужно явно объявлять (хотя бы пустые) slots.",
    "kind": "single",
    "id": "m232",
    "fixed": true,
    "topic": "slots",
    "group": "ООП продвинутый"
  },
  {
    "q": "Для чего используется pickle?",
    "options": [
      "сериализация/десериализация объектов Python",
      "безопасный обмен данными с интернетом по умолчанию",
      "замена JSON во всех API",
      "компиляция в байткод .pyc"
    ],
    "answer": 0,
    "explain": "pickle сохраняет граф объектов Python. На недоверенных данных опасен (RCE). Для обмена с внешним миром чаще JSON и схема.",
    "kind": "single",
    "id": "m233",
    "fixed": true,
    "topic": "pickle",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое multiprocessing.Array('i', n)?",
    "options": [
      "разделяемый между процессами типизированный буфер из n int",
      "обычный list Python в общей куче без ограничений",
      "массив только для asyncio",
      "NumPy ndarray"
    ],
    "answer": 0,
    "explain": "Array из multiprocessing — shared memory с ctypes-типом. Это не прозрачный list со ссылками на py-объекты.",
    "kind": "single",
    "id": "m234",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Почему `except: pass` без логирования — плохо?",
    "options": [
      "глотает любые ошибки и прячет баги",
      "ускоряет программу незаконно",
      "запрещено синтаксисом",
      "ломает только async"
    ],
    "answer": 0,
    "explain": "Голый except ловит даже KeyboardInterrupt/SystemExit (через BaseException в старых привычках — на деле bare except ловит BaseException). Без лога вы не узнаете о сбое.",
    "kind": "single",
    "id": "m235",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "5",
      "0",
      "1",
      "TypeError"
    ],
    "answer": 0,
    "explain": "reduce умножает элементы: 5*1*1 = 5. Начальное значение не задано — берётся первый элемент как аккумулятор.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [5, 1, 1]))",
    "id": "m236",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что будет при вызове функции с лишним именованным аргументом?",
    "options": [
      "TypeError",
      "молчаливое игнорирование",
      "Warning",
      "аргумент попадёт в **kwargs всегда, даже если их нет"
    ],
    "answer": 0,
    "explain": "Лишнее имя без **kwargs → TypeError: got an unexpected keyword argument.",
    "kind": "single",
    "id": "m237",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m238",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что требует collections.abc.Iterable?",
    "options": [
      "метод __iter__ (или sequence protocol)",
      "обязательно __len__",
      "обязательно __call__",
      "наследование от list"
    ],
    "answer": 0,
    "explain": "Iterable — тот, у кого есть __iter__. Iterator дополнительно даёт __next__.",
    "kind": "single",
    "id": "m239",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m240",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Для чего contextlib.aclosing?",
    "options": [
      "async-аналог closing: на выходе await obj.aclose()",
      "только для sync close()",
      "замена async with навсегда",
      "отключение event loop"
    ],
    "answer": 0,
    "explain": "aclosing гарантирует aclose() у async-генераторов/ресурсов при выходе из async with.",
    "kind": "single",
    "id": "m242",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Зачем нужен logging.LoggerAdapter?",
    "options": [
      "добавлять контекстные поля (user_id и т.п.) к каждой записи",
      "менять уровень root logger",
      "ротировать файлы",
      "заменять print"
    ],
    "answer": 0,
    "explain": "Adapter оборачивает logger и подмешивает extra-контекст. Уровни/хендлеры настраиваются отдельно.",
    "kind": "single",
    "id": "m243",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Чем является встроенный property с точки зрения дескрипторов?",
    "options": [
      "data descriptor (__get__/__set__/__delete__)",
      "non-data descriptor только с __get__",
      "обычный dict в экземпляре",
      "метакласс"
    ],
    "answer": 0,
    "explain": "property — data descriptor: перехватывает get/set/delete и поэтому сильнее instance __dict__.",
    "kind": "single",
    "id": "m244",
    "fixed": true,
    "topic": "дескрипторы",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что такое staticmethod?",
    "options": [
      "функция в классе без неявных self/cls",
      "метод, который всегда видит экземпляр",
      "абстрактный метод ABC",
      "генератор"
    ],
    "answer": 0,
    "explain": "staticmethod не биндится. Нужен, когда логически функция относится к классу, но не использует состояние.",
    "kind": "single",
    "id": "m245",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m246",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m247",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "В чём суть паттерна Template Method?",
    "options": [
      "базовый класс задаёт скелет алгоритма, подклассы переопределяют шаги",
      "это только про HTML-шаблоны Jinja",
      "запрет наследования",
      "замена Strategy навсегда"
    ],
    "answer": 0,
    "explain": "Шаблонный метод фиксирует порядок шагов в базе; детали — в override. Не путать с шаблонизаторами веб-страниц.",
    "kind": "single",
    "id": "m248",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m249",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что даёт @runtime_checkable у typing.Protocol?",
    "options": [
      "isinstance/issubclass могут проверить наличие методов структурно",
      "обязательную проверку типов на каждом вызове в CPython",
      "ускорение байткода",
      "сериализацию в JSON"
    ],
    "answer": 0,
    "explain": "По умолчанию Protocol только для чекера. runtime_checkable включает ограниченный isinstance по наличию атрибутов.",
    "kind": "single",
    "id": "m250",
    "fixed": true,
    "topic": "protocols",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что хранит cell замыкания?",
    "options": [
      "cell_contents — текущее значение enclosing-переменной",
      "байткод всей внешней функции",
      "только имя переменной без значения",
      "ссылку на GIL"
    ],
    "answer": 0,
    "explain": "В __closure__ лежат cell; у каждой есть cell_contents. Это живая привязка к переменной enclosing scope.",
    "kind": "single",
    "id": "m251",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что делает gen.send(x)?",
    "options": [
      "передаёт x результатом текущего yield и возобновляет генератор",
      "всегда бросает StopIteration",
      "эквивалент close()",
      "создаёт новый генератор"
    ],
    "answer": 0,
    "explain": "После первого next, send(value) становится тем, что получает `y = yield ...`. Первый запуск — только next/send(None).",
    "kind": "single",
    "id": "m252",
    "fixed": true,
    "topic": "coroutines",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 503?",
    "options": [
      "Service Unavailable — сервис временно недоступен",
      "успешный OK",
      "постоянный редирект 301",
      "ошибка клиента 400"
    ],
    "answer": 0,
    "explain": "503 — серверная недоступность (перегруз, maintenance). Часто с Retry-After.",
    "kind": "single",
    "id": "m253",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что делает contextlib.suppress(FileNotFoundError)?",
    "options": [
      "молча пропускает FileNotFoundError внутри with",
      "создаёт отсутствующий файл",
      "глушит все BaseException",
      "логирует ошибку обязательно"
    ],
    "answer": 0,
    "explain": "suppress(*exceptions) — узкий try/except pass для указанных типов. Остальное пробрасывается.",
    "kind": "single",
    "id": "m255",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
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
    "id": "m256",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "С чем должен быть согласован __hash__?",
    "options": [
      "с __eq__: равные объекты → одинаковый hash",
      "только с __repr__",
      "только с id()",
      "hash может быть любым даже при =="
    ],
    "answer": 0,
    "explain": "Инвариант: если a == b, то hash(a) == hash(b). Иначе dict/set ломаются.",
    "kind": "single",
    "id": "m257",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что ограничивает __slots__?",
    "options": [
      "набор допустимых атрибутов экземпляра и часто экономит память",
      "скорость импорта модулей",
      "версию Python",
      "число методов класса"
    ],
    "answer": 0,
    "explain": "Без __dict__ (и часто без __weakref__) экземпляры компактнее, но нельзя свободно вешать новые атрибуты.",
    "kind": "single",
    "id": "m258",
    "fixed": true,
    "topic": "slots",
    "group": "ООП продвинутый"
  },
  {
    "q": "Зачем secrets.compare_digest?",
    "options": [
      "сравнивать секреты за примерно постоянное время (анти timing attack)",
      "быстрее обычного == на длинных строках всегда",
      "хешировать пароли",
      "генерировать JWT"
    ],
    "answer": 0,
    "explain": "Обычное == может коротко замкнуться на первом отличии. compare_digest снижает утечку по времени.",
    "kind": "single",
    "id": "m259",
    "fixed": true,
    "topic": "secrets",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m260",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Когда композиция предпочтительнее наследования?",
    "options": [
      "когда нужно комбинировать разное поведение без жёсткой иерархии is-a",
      "когда в языке нет классов",
      "только для dataclass",
      "никогда — наследование всегда лучше"
    ],
    "answer": 0,
    "explain": "Has-a гибче глубоких is-a деревьев. Наследование оставляй для настоящей подтипизации.",
    "kind": "single",
    "id": "m261",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что делает сложение двух Counter?",
    "options": [
      "складывает счётчики по ключам",
      "конкатенирует как строки",
      "убирает все ключи",
      "возвращает set ключей"
    ],
    "answer": 0,
    "explain": "Counter({'a':1}) + Counter({'a':2}) → {'a':3}. Вычитание обнуляет неположительные.",
    "kind": "single",
    "id": "m262",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что создаёт typing.NewType?",
    "options": [
      "отдельный тип для type checker; в runtime — тонкая обёртка/функция",
      "новый класс с другим MRO обязательно",
      "ускорение словаря",
      "таблицу в БД"
    ],
    "answer": 0,
    "explain": "UserId = NewType('UserId', int): для mypy UserId ≠ int, в runtime это всё ещё int-подобные значения.",
    "kind": "single",
    "id": "m263",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "wrap\nf",
      "f\nwrap",
      "только wrap",
      "TypeError"
    ],
    "answer": 0,
    "explain": "@deco срабатывает при определении: печатает wrap и возвращает ту же f. Вызов f() печатает f. Итого две строки: wrap, затем f.",
    "kind": "single",
    "code": "def deco(fn):\n    print('wrap')\n    return fn\n@deco\ndef f():\n    print('f')\nf()",
    "id": "m264",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m265",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Зачем паттерн Idempotency-Key в заголовках?",
    "options": [
      "чтобы безопасные повторы POST не создавали дубликаты операций",
      "чтобы ускорить TLS",
      "чтобы отключить кэш",
      "это замена CSRF-токена"
    ],
    "answer": 0,
    "explain": "Клиент шлёт уникальный ключ; сервер дедуплицирует запросы. Важно при ретраях сети.",
    "kind": "single",
    "id": "m266",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
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
    "id": "m268",
    "fixed": true,
    "topic": "исключения",
    "group": "Исключения и контекст"
  },
  {
    "q": "Чем полезен snapshot/golden-file тест?",
    "options": [
      "фиксирует эталонный вывод/сериализацию и ловит случайные изменения",
      "заменяет все unit-тесты",
      "измеряет RPS",
      "проверяет только типы mypy"
    ],
    "answer": 0,
    "explain": "Сравниваешь актуальный артефакт с сохранённым эталоном. Удобно для отчётов/сериализации; хрупко при частых легитимных изменениях формата.",
    "kind": "single",
    "id": "m269",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Если нет __bool__, откуда берётся истинность объекта?",
    "options": [
      "из __len__ != 0 (если есть), иначе объект обычно truthy",
      "всегда False",
      "всегда из hash",
      "из __repr__"
    ],
    "answer": 0,
    "explain": "Правило: __bool__, иначе __len__, иначе True. Пустой контейнер с __len__==0 ложен.",
    "kind": "single",
    "id": "m270",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m271",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что делает importlib.reload(module)?",
    "options": [
      "переисполняет модуль в том же объекте из sys.modules",
      "удаляет модуль без повторного import",
      "создаёт отдельный интерпретатор",
      "очищает pip cache"
    ],
    "answer": 0,
    "explain": "reload обновляет уже импортированный модуль. Ссылки на старые объекты у клиентов могут остаться — это тонкое место.",
    "kind": "single",
    "id": "m272",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m273",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
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
    "id": "m274",
    "fixed": true,
    "topic": "KISS",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что вернёт list(accumulate([1, 2, 3]))?",
    "options": [
      "[1, 3, 6]",
      "[1, 2, 3]",
      "[6]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "itertools.accumulate — накопительная свёртка: 1, 1+2=3, 3+3=6.",
    "kind": "single",
    "id": "m275",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что означает Protocol с @property в typing?",
    "options": [
      "структурное требование: у объекта должен быть такой атрибут/свойство",
      "обязательный runtime property decorator",
      "генерацию __slots__",
      "запрет dataclass"
    ],
    "answer": 0,
    "explain": "В Protocol свойство описывает наличие атрибута для чекера (и runtime_checkable — ограниченно). Это не создаёт property само.",
    "kind": "single",
    "id": "m276",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m277",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m278",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m279",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует ZeroDivisionError?",
    "options": [
      "ArithmeticError",
      "только OSError",
      "Warning",
      "StopIteration"
    ],
    "answer": 0,
    "explain": "ZeroDivisionError ⊂ ArithmeticError ⊂ Exception. except ArithmeticError поймает и его.",
    "kind": "single",
    "id": "m281",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что делает filterwarnings('ignore', category=DeprecationWarning)?",
    "options": [
      "глушит предупреждения указанной категории",
      "превращает их в ошибки",
      "удаляет deprecated API из stdlib",
      "включает -Werror глобально"
    ],
    "answer": 0,
    "explain": "Это политика warnings: ignore скрывает, error повышает до исключения. На код stdlib не влияет.",
    "kind": "single",
    "id": "m282",
    "fixed": true,
    "topic": "warnings",
    "group": "Тесты и качество"
  },
  {
    "q": "Что такое дескриптор?",
    "options": [
      "объект с __get__/__set__/__delete__, управляющий доступом к атрибуту",
      "любой модуль в sys.modules",
      "только property из C",
      "файл .pyc"
    ],
    "answer": 0,
    "explain": "Протокол дескрипторов лежит в основе property, classmethod, functions-as-bound-methods.",
    "kind": "single",
    "id": "m283",
    "fixed": true,
    "topic": "дескрипторы",
    "group": "Контекст и магические методы"
  },
  {
    "q": "В чём разница __new__ и __init__?",
    "options": [
      "__new__ создаёт экземпляр, __init__ его инициализирует",
      "это полные синонимы",
      "__init__ вызывается до __new__",
      "__new__ нельзя переопределять"
    ],
    "answer": 0,
    "explain": "__new__ — конструктор (возвращает instance), затем __init__ настраивает поля. Для immutable часто важнее __new__.",
    "kind": "single",
    "id": "m284",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что позволяет флаг re.VERBOSE?",
    "options": [
      "писать пробелы и комментарии внутри regexp для читаемости",
      "ускорить match в 100 раз",
      "отключить unicode",
      "запретить группы"
    ],
    "answer": 0,
    "explain": "VERBOSE (X) игнорирует незаэкранированные пробелы и #комментарии в паттерне. На скорость сам по себе почти не влияет.",
    "kind": "single",
    "id": "m285",
    "fixed": true,
    "topic": "регулярки",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m286",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что такое Null Object pattern?",
    "options": [
      "объект-заглушка с безопасным no-op поведением вместо None",
      "обязательный None в каждом поле",
      "паттерн только для SQL NULL",
      "удаление объекта через gc"
    ],
    "answer": 0,
    "explain": "Вместо проверок if x is None дают объект с пустыми методами. Убирает ветвления, но маскирует отсутствие реальной зависимости — осторожно.",
    "kind": "single",
    "id": "m287",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что делает deque.rotate(3) на 6 элементах?",
    "options": [
      "циклический сдвиг на 3 вправо",
      "удаляет 3 элемента",
      "сортирует по возрастанию",
      "разворачивает всю очередь"
    ],
    "answer": 0,
    "explain": "rotate(n) крутит вправо на n; отрицательный n — влево. Длина сохраняется.",
    "kind": "single",
    "id": "m288",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "обычно нет",
      "да всегда TypeError",
      "только mypy runtime",
      "GIL check"
    ],
    "answer": 0,
    "explain": "Аннотации list[int] в runtime обычно не проверяют элементы сами по себе.",
    "kind": "single",
    "code": "def f(xs: list[int]):\n    return xs\nprint(f(['a']))",
    "id": "m289",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что лежит в function.__closure__?",
    "options": [
      "кортеж cell с захваченными enclosing-переменными или None",
      "всегда пустой list",
      "байткод функции",
      "глобальный dict модуля"
    ],
    "answer": 0,
    "explain": "Если свободных переменных нет — __closure__ is None. Иначе tuple cell'ов с cell_contents.",
    "kind": "single",
    "id": "m290",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что ожидает iter(obj) у объекта?",
    "options": [
      "__iter__ или протокол последовательности через __getitem__",
      "обязательно только __next__",
      "обязательно __len__",
      "метод close()"
    ],
    "answer": 0,
    "explain": "iter сначала ищет __iter__. Если его нет — пробует sequence protocol (__getitem__ с 0,1,2,…). __next__ — у уже полученного итератора.",
    "kind": "single",
    "id": "m291",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 204?",
    "options": [
      "No Content — успех без тела ответа",
      "ошибка клиента",
      "постоянный редирект",
      "сервис недоступен"
    ],
    "answer": 0,
    "explain": "204 — запрос обработан, тела нет (часто после DELETE/PUT). Это 2xx, не ошибка.",
    "kind": "single",
    "id": "m292",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "enter\nexit",
      "exit\nenter",
      "только enter",
      "ошибка"
    ],
    "answer": 0,
    "explain": "with вызывает __enter__ (печатает enter), затем тело, затем __exit__ (печатает exit).",
    "kind": "single",
    "code": "class CM:\n    def __enter__(self):\n        print('enter')\n        return self\n    def __exit__(self, *a):\n        print('exit')\nwith CM():\n    pass",
    "id": "m294",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что такое LBYL?",
    "options": [
      "Look Before You Leap — сначала проверка, потом действие",
      "Easier to Ask Forgiveness — только про try/except",
      "запрет на исключения",
      "стиль только для C"
    ],
    "answer": 0,
    "explain": "LBYL: if key in d: ... Противоположный идиоматичный стиль в Python часто EAFP (try/except KeyError).",
    "kind": "single",
    "id": "m295",
    "fixed": true,
    "topic": "LBYL",
    "group": "Тесты и качество"
  },
  {
    "q": "Что обслуживает метод __format__?",
    "options": [
      "format(obj, spec) и f-строки с форматом {obj:spec}",
      "только str(obj)",
      "только repr(obj)",
      "hash(obj)"
    ],
    "answer": 0,
    "explain": "Спецификация формата после двоеточия идёт в __format__. str/repr — отдельные протоколы.",
    "kind": "single",
    "id": "m296",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Зачем объявляют __slots__?",
    "options": [
      "зафиксировать набор атрибутов и часто сэкономить память (без __dict__)",
      "ускорить import модуля",
      "запретить методы класса",
      "включить JIT"
    ],
    "answer": 0,
    "explain": "Слоты убирают per-instance __dict__ (если не добавить его явно) — меньше RAM, жёстче схема атрибутов.",
    "kind": "single",
    "id": "m297",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что вернёт b'hi'.decode() по умолчанию?",
    "options": [
      "строку 'hi' в UTF-8",
      "байт за байтом как Latin-1 всегда без UTF-8",
      "ошибку без encoding=",
      "bytearray"
    ],
    "answer": 0,
    "explain": "decode() по умолчанию использует UTF-8 (с 3.x). 'hi' из двух ASCII-байт декодируется в 'hi'.",
    "kind": "single",
    "id": "m298",
    "fixed": true,
    "topic": "bytes",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что даёт Manager().dict() в multiprocessing?",
    "options": [
      "прокси-словарь, которым могут пользоваться разные процессы",
      "обычный dict в общей куче без прокси",
      "только локальный dict текущего процесса",
      "Redis-клиент"
    ],
    "answer": 0,
    "explain": "Manager поднимает серверный процесс и отдаёт прокси. Доступ идёт через IPC/pickle, это не прозрачный shared dict.",
    "kind": "single",
    "id": "m299",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что значит YAGNI?",
    "options": [
      "You Aren't Gonna Need It — не пиши функциональность «на будущее» без запроса",
      "пиши всё заранее на вырост",
      "запрет рефакторинга",
      "обязательный микросервис на каждую функцию"
    ],
    "answer": 0,
    "explain": "YAGNI из XP: не усложняй систему фичами, которые ещё не нужны. Совместим с простым чистым дизайном.",
    "kind": "single",
    "id": "m300",
    "fixed": true,
    "topic": "YAGNI",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "1",
      "2",
      "TypeError"
    ],
    "answer": 0,
    "explain": "partial закрепляет часть аргументов; вызов добирает остальные → 3.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 1)(2))",
    "id": "m301",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m302",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что вернут все funcs[i]() при late binding в цикле без default?",
    "options": [
      "последнее значение i (часто одинаковое у всех)",
      "разные 0,1,2 без фиксации",
      "всегда TypeError",
      "None"
    ],
    "answer": 0,
    "explain": "Замыкания захватывают переменную i, не значение на итерации. После цикла i == последнее; чинится lambda i=i.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n# funcs[0]()",
    "id": "m303",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m304",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 500?",
    "options": [
      "Internal Server Error — ошибка на стороне сервера",
      "успех",
      "клиентский 4xx",
      "редирект"
    ],
    "answer": 0,
    "explain": "5xx — вина/сбой сервера. 500 — общий внутренний сбой без более точного кода.",
    "kind": "single",
    "id": "m305",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Нужен ли ExitStack для одного фиксированного with?",
    "options": [
      "нет — достаточно обычного with",
      "да, ExitStack обязателен всегда",
      "только async ExitStack",
      "только с GIL"
    ],
    "answer": 0,
    "explain": "ExitStack нужен при динамическом числе CM. Один-два известных — обычный with.",
    "kind": "single",
    "id": "m307",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что такое structured logging?",
    "options": [
      "логи с полями/JSON, а не только свободный текст",
      "обязательный print в stdout",
      "логирование только ошибок без info",
      "запись логов в pickle"
    ],
    "answer": 0,
    "explain": "Структурированные логи удобно фильтровать и парсить (level, request_id, …). Текст «как получится» хуже для продакшена.",
    "kind": "single",
    "id": "m308",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m309",
    "fixed": true,
    "topic": "дескрипторы",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m310",
    "fixed": true,
    "topic": "MRO",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что читает csv.DictReader?",
    "options": [
      "строки файла как dict по заголовкам колонок",
      "только список списков без ключей",
      "JSON-объекты",
      "бинарный Excel"
    ],
    "answer": 0,
    "explain": "Первая строка — имена полей; дальше каждая запись — dict[field]=value.",
    "kind": "single",
    "id": "m311",
    "fixed": true,
    "topic": "csv",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для каких задач хорошо подходит threading в CPython?",
    "options": [
      "I/O-bound: сеть, диск, ожидание",
      "чистый CPU-bound Python без native",
      "вместо любых процессов всегда",
      "только GUI на macOS"
    ],
    "answer": 0,
    "explain": "Пока поток ждёт I/O, другие могут работать. CPU-байткод упирается в GIL.",
    "kind": "single",
    "id": "m312",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Как выглядит Chain of Responsibility в middleware веб-фреймворка?",
    "options": [
      "цепочка обработчиков: каждый может обработать запрос или передать дальше",
      "один гигантский if без делегирования",
      "только паттерн Singleton",
      "обязательный SQL trigger"
    ],
    "answer": 0,
    "explain": "Middleware/pipeline — классическая цепочка ответственности для HTTP-запроса.",
    "kind": "single",
    "id": "m313",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Чем помогает functools.total_ordering?",
    "options": [
      "достраивает остальные сравнения, если задать __eq__ и одно из < ≤ > ≥",
      "ускоряет Timsort в C",
      "заменяет dataclass",
      "отключает __hash__"
    ],
    "answer": 0,
    "explain": "Декоратор класса генерирует недостающие rich comparisons из минимального набора.",
    "kind": "single",
    "id": "m314",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "С чем связаны Unpack и TypeVarTuple?",
    "options": [
      "с вариативными generics (произвольное число type-параметров)",
      "с ускорением runtime",
      "только с Enum",
      "с файловым I/O"
    ],
    "answer": 0,
    "explain": "TypeVarTuple/Unpack (PEP 646) описывают *Ts в типах — для чекера, не для скорости VM.",
    "kind": "single",
    "id": "m315",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Как зафиксировать значение i в lambda внутри for-цикла?",
    "options": [
      "default-аргументом: lambda i=i: ...",
      "только через global i",
      "никак — язык запрещает",
      "переименовать lambda в list"
    ],
    "answer": 0,
    "explain": "Default вычисляется в момент создания функции и захватывает текущее i.",
    "kind": "single",
    "id": "m316",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1]",
      "[0, 1, 4]",
      "0 1",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Generator expression x*x for x in range(2) → 0, 1. list(...) материализует в [0, 1].",
    "kind": "single",
    "code": "print(list(x * x for x in range(2)))",
    "id": "m317",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m318",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что такое ContextDecorator?",
    "options": [
      "база, чтобы объект был и context manager, и decorator",
      "только async CM",
      "замена ExitStack",
      "фикстура pytest"
    ],
    "answer": 0,
    "explain": "contextlib.ContextDecorator позволяет писать класс, работающий и как with, и как @decorator.",
    "kind": "single",
    "id": "m320",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что проверяет pytest.raises(ValueError)?",
    "options": [
      "что код внутри бросает ValueError (иначе тест красный)",
      "что исключений нет",
      "покрытие строк",
      "скорость теста"
    ],
    "answer": 0,
    "explain": "Контекст raises ловит ожидаемый тип; если его не было или тип другой — assert падает.",
    "kind": "single",
    "id": "m321",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Если определили __eq__, что часто делают с __hash__ у мутабельных объектов?",
    "options": [
      "ставят __hash__ = None, чтобы объект был unhashable",
      "оставляют hash от id и ломают инвариант",
      "обязательно хешируют все поля всегда",
      "удаляют __eq__"
    ],
    "answer": 0,
    "explain": "После своего __eq__ наследуемый __hash__ отключается (None). Для ключей dict нужен согласованный неизменяемый hash.",
    "kind": "single",
    "id": "m322",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "B",
      "A",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "У экземпляра B свой hello перекрывает A → печатается B.",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A'\nclass B(A):\n    def hello(self):\n        return 'B'\nprint(B().hello())",
    "id": "m323",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что учитывает sys.getsizeof([1, 2])?",
    "options": [
      "overhead самого контейнера list, не глубокий размер элементов",
      "рекурсивно всю память всех вложенных объектов всегда",
      "только один указатель",
      "размер файла .pyc"
    ],
    "answer": 0,
    "explain": "getsizeof не глубокий: для списка — структура списка + указатели, без sizeof(1) и sizeof(2) как отдельных объектов.",
    "kind": "single",
    "id": "m324",
    "fixed": true,
    "topic": "memory",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для чего threading.Event?",
    "options": [
      "сигнализация между потоками: wait/set/clear",
      "замена multiprocessing.Queue",
      "async sleep",
      "файловый lock"
    ],
    "answer": 0,
    "explain": "Event — флаг: один поток set(), другие wait(). Проще Condition, когда нужно только «случилось».",
    "kind": "single",
    "id": "m325",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
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
    "id": "m326",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "2",
      "4",
      "-1"
    ],
    "answer": 0,
    "explain": "bisect_left по отсортированному списку возвращает индекс вставки; для значения из кода это 3.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 7))",
    "id": "m327",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое guard в `case … if условие:`?",
    "options": [
      "доп. условие: ветка срабатывает только если guard истинен",
      "синтаксическая ошибка до 3.12",
      "замена match",
      "только для чисел"
    ],
    "answer": 0,
    "explain": "Pattern matching + if-guard (PEP 634). Паттерн совпал, но guard False — идём к следующей ветке.",
    "kind": "single",
    "id": "m328",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[4, 4, 4, 4, 4]",
      "[0, 1, 2, 3, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Late binding: после range(5) все lambda возвращают 4.",
    "kind": "single",
    "code": "fs = [lambda: i for i in range(5)]\nprint([f() for f in fs])",
    "id": "m329",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m330",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 400?",
    "options": [
      "Bad Request — некорректный запрос клиента",
      "успех",
      "ошибка только сервера 5xx",
      "редирект"
    ],
    "answer": 0,
    "explain": "4xx — клиентская ошибка. 400 — общий «запрос кривой» (валидация, синтаксис).",
    "kind": "single",
    "id": "m331",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует KeyError?",
    "options": [
      "LookupError",
      "OSError",
      "Warning",
      "StopIteration"
    ],
    "answer": 0,
    "explain": "KeyError ⊂ LookupError ⊂ Exception. IndexError тоже из LookupError.",
    "kind": "single",
    "id": "m333",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что измеряет coverage.py?",
    "options": [
      "покрытие строк/веток кода тестами",
      "скорость HTTP",
      "число уязвимостей",
      "размер wheel"
    ],
    "answer": 0,
    "explain": "Coverage показывает, какие строки исполнялись. Это не нагрузка и не security scanner.",
    "kind": "single",
    "id": "m334",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Что напечатает print(obj)?",
    "options": [
      "hi",
      "Obj",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "print зовёт str → __str__, который в коде возвращает 'hi'.",
    "kind": "single",
    "code": "class Obj:\n    def __str__(self):\n        return 'hi'\nprint(Obj())",
    "id": "m335",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Как сейчас задают абстрактный classmethod?",
    "options": [
      "комбинацией @classmethod и @abstractmethod (порядок важен)",
      "только устаревшим abstractclassmethod без альтернатив",
      "нельзя никак",
      "только через __slots__"
    ],
    "answer": 0,
    "explain": "abstractclassmethod устарел; пиши @classmethod над/под @abstractmethod по документации ABC.",
    "kind": "single",
    "id": "m336",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "var/log/syslog",
      "var\\log\\syslog",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: var/log/syslog.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'syslog'))",
    "id": "m337",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что будет, если тот же поток второй раз сделает Lock.acquire() без RLock?",
    "options": [
      "дедлок — поток ждёт сам себя",
      "счётчик увеличится как у RLock",
      "ошибка TypeError сразу",
      "lock молча игнорируется"
    ],
    "answer": 0,
    "explain": "Не-реентерабельный Lock повторно из того же потока не отпускается → deadlock. Нужен RLock.",
    "kind": "single",
    "id": "m338",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что значит KISS?",
    "options": [
      "Keep It Simple, Stupid — предпочитай простое решение",
      "пиши максимальное число абстракций сразу",
      "запрет функций",
      "только микросервисы"
    ],
    "answer": 0,
    "explain": "KISS — простота реализации. Не путать с YAGNI (не делать лишнее) хотя часто рядом.",
    "kind": "single",
    "id": "m339",
    "fixed": true,
    "topic": "KISS",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "20",
      "5",
      "0",
      "TypeError"
    ],
    "answer": 0,
    "explain": "reduce последовательно сворачивает последовательность бинарной функцией → 20.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [10, 2]))",
    "id": "m340",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем field(default_factory=dict) в dataclass?",
    "options": [
      "новый dict() на каждый экземпляр",
      "один общий dict на все экземпляры",
      "запрет поля",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Мутабельный default нельзя шарить. default_factory вызывает dict() при создании каждого instance.",
    "kind": "single",
    "id": "m341",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2, 3, 4]",
      "[4, 4, 4, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "lambda i=i сохраняет текущее i → независимые значения 0..4.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(5)]\nprint([f() for f in fs])",
    "id": "m342",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что делает next(gen) на исчерпанном генераторе?",
    "options": [
      "бросает StopIteration",
      "возвращает None без исключения",
      "перезапускает генератор",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "Исчерпанный gen при next → StopIteration. for глотает его сам; next(gen, default) безопаснее.",
    "kind": "single",
    "id": "m343",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m344",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что должен реализовать контекстный менеджер?",
    "options": [
      "__enter__ и __exit__",
      "только __call__",
      "только __iter__",
      "только close()"
    ],
    "answer": 0,
    "explain": "Протокол with: __enter__ при входе, __exit__ при выходе (и при исключении).",
    "kind": "single",
    "id": "m346",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что такое pytest.mark.xfail?",
    "options": [
      "ожидаемый провал теста (известная проблема)",
      "безусловный skip",
      "успешный тест",
      "удаление теста"
    ],
    "answer": 0,
    "explain": "xfail помечает, что тест сейчас красный осознанно. Отличается от skip (не запускаем).",
    "kind": "single",
    "id": "m347",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Какой первый аргумент у @classmethod?",
    "options": [
      "класс cls, не экземпляр",
      "экземпляр self",
      "метакласс всегда",
      "ничего"
    ],
    "answer": 0,
    "explain": "classmethod получает класс — удобно для альтернативных конструкторов.",
    "kind": "single",
    "id": "m348",
    "fixed": true,
    "topic": "classmethod",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "A.x",
      "B.x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Атрибут/метод резолвится в A (см. код) — результат A.x.",
    "kind": "single",
    "code": "class A:\n    def hello(self):\n        return 'A.x'\nclass B(A):\n    def hello(self):\n        return super().hello()\nprint(B().hello())",
    "id": "m349",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
    "q": "Как deepcopy справляется с циклами ссылок?",
    "options": [
      "через memo — словарь уже скопированных id",
      "падает RecursionError всегда",
      "игнорирует циклы и портит данные молча без memo",
      "deepcopy запрещён для циклов"
    ],
    "answer": 0,
    "explain": "copy.deepcopy ведёт memo, чтобы не зациклиться и сохранить структуру графа.",
    "kind": "single",
    "id": "m350",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m351",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что такое паттерн Facade?",
    "options": [
      "простой фасад-интерфейс над сложной подсистемой",
      "обязательное наследование от всех классов подсистемы",
      "только UI-кнопка",
      "замена Adapter"
    ],
    "answer": 0,
    "explain": "Фасад прячет кучу сервисов за одним понятным API. Adapter — про совместимость интерфейсов, близко, но другая цель.",
    "kind": "single",
    "id": "m352",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "9",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в h[0]; heappop/печать по коду даёт 1.",
    "kind": "single",
    "code": "import heapq\nh = [9, 2, 7, 1]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m353",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "5",
      "True",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Морж := присваивает n = len('hello') == 5 и условие > 3 истинно → печатается 5.",
    "kind": "single",
    "code": "if (n := len('hello')) > 3:\n    print(n)",
    "id": "m354",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что получает декоратор класса?",
    "options": [
      "класс как аргумент (и должен вернуть класс/замену)",
      "только экземпляр",
      "только функцию",
      "модуль"
    ],
    "answer": 0,
    "explain": "@deco над class X передаёт в deco сам класс X после создания тела.",
    "kind": "single",
    "id": "m355",
    "fixed": true,
    "topic": "декораторы",
    "group": "Декораторы и замыкания"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "None",
      "ошибка",
      "x"
    ],
    "answer": 0,
    "explain": "Первый next(gen) выполняет до yield 1 и отдаёт 1. (Дальше send передаст значение в x.)",
    "kind": "single",
    "code": "def g():\n    x = yield 1\n    yield x\ngen = g()\nprint(next(gen))",
    "id": "m356",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 404?",
    "options": [
      "Not Found — ресурс не найден",
      "успех",
      "ошибка сервера 500",
      "редирект 301"
    ],
    "answer": 0,
    "explain": "404 — клиент обратился к несуществующему URI. Это 4xx.",
    "kind": "single",
    "id": "m357",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что делает contextlib.suppress(SomeError)?",
    "options": [
      "игнорирует указанные типы исключений внутри with",
      "логирует и пробрасывает всегда",
      "создаёт файл при ошибке",
      "глушит BaseException целиком по умолчанию"
    ],
    "answer": 0,
    "explain": "Узкий try/except pass для перечисленных типов. Остальное не глотается.",
    "kind": "single",
    "id": "m359",
    "fixed": true,
    "topic": "исключения",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что подменяет unittest.mock.patch?",
    "options": [
      "объект по имени в указанном пространстве имён на время патча",
      "файл на диске с исходником",
      "байткод интерпретатора навсегда",
      "версию Python"
    ],
    "answer": 0,
    "explain": "patch('pkg.mod.attr') подменяет имя там, куда смотрит код. Важно патчить место использования.",
    "kind": "single",
    "id": "m360",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем нужен @property.setter?",
    "options": [
      "разрешить присваивание obj.x = ... через property",
      "запретить любые присваивания",
      "создать classmethod",
      "включить slots"
    ],
    "answer": 0,
    "explain": "Без setter property read-only. @x.setter задаёт логику записи.",
    "kind": "single",
    "id": "m361",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что гарантирует @abstractmethod в ABC?",
    "options": [
      "нельзя создать экземпляр подкласса, пока абстрактные методы не реализованы",
      "метод нельзя переопределить",
      "метод станет staticmethod",
      "рантайм проверит типы аргументов"
    ],
    "answer": 0,
    "explain": "ABCMeta блокирует инстанцирование при незакрытых abstractmethod.",
    "kind": "single",
    "id": "m362",
    "fixed": true,
    "topic": "ABC",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что копирует shallow copy?",
    "options": [
      "контейнер верхнего уровня; вложенные объекты остаются общими",
      "полный глубокий граф всегда",
      "только id() без данных",
      "ничего — это no-op"
    ],
    "answer": 0,
    "explain": "list.copy()/copy.copy — новая оболочка, те же вложения. Для полного графа — deepcopy.",
    "kind": "single",
    "id": "m363",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Как multiprocessing обходит ограничение GIL для CPU?",
    "options": [
      "отдельными процессами со своими интерпретаторами",
      "отключением GIL флагом в threading",
      "только через asyncio",
      "увеличением числа зелёных потоков"
    ],
    "answer": 0,
    "explain": "У каждого процесса свой GIL. Цена — IPC и pickle. threading GIL не снимает.",
    "kind": "single",
    "id": "m364",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
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
    "id": "m365",
    "fixed": true,
    "topic": "DRY",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m366",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m367",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведут все вызовы?",
    "options": [
      "0 1 2",
      "2 2 2",
      "ошибка",
      "1 1 1"
    ],
    "answer": 0,
    "explain": "lambda i=i (или аналог в коде) фиксирует значение на итерации → 0 1 2.",
    "kind": "single",
    "code": "funcs = []\nfor i in range(3):\n    funcs.append(lambda i=i: i)\nprint(funcs[0](), funcs[1](), funcs[2]())",
    "id": "m368",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m369",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m370",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что делает BaseException.add_note в 3.11+?",
    "options": [
      "добавляет текстовую заметку к исключению",
      "меняет тип исключения",
      "удаляет traceback",
      "глушит логирование"
    ],
    "answer": 0,
    "explain": "add_note дополняет сообщение для отладки; заметки видны при печати исключения (__notes__).",
    "kind": "single",
    "id": "m372",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
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
    "id": "m373",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Откуда берётся docstring у `property`?",
    "options": [
      "из docstring геттера (или аргумента doc= у property)",
      "только из docstring самого класса",
      "у property docstring задать нельзя",
      "только из комментария # рядом с полем по PEP 8"
    ],
    "answer": 0,
    "explain": "У `@property` в `__doc__` попадает docstring метода-геттера. Его же можно передать явно: `property(fget, doc=\"...\")`. `help(obj.prop)` и IDE показывают именно это — не docstring класса и не обычный `#` комментарий.",
    "kind": "single",
    "id": "m374",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что показывает Class.__mro__?",
    "options": [
      "кортеж цепочки базовых классов в порядке поиска методов",
      "только прямых родителей",
      "список всех атрибутов экземпляра",
      "размер объекта в байтах"
    ],
    "answer": 0,
    "explain": "MRO — линейный порядок для attribute lookup при множественном наследовании (C3).",
    "kind": "single",
    "id": "m375",
    "fixed": true,
    "topic": "MRO",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m376",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Зачем initializer у multiprocessing.Pool?",
    "options": [
      "выполнить setup в каждом worker-процессе при старте",
      "инициализировать только главный процесс",
      "заменить map",
      "отключить pickle"
    ],
    "answer": 0,
    "explain": "initializer(initargs) зовётся в воркерах один раз — удобно открыть соединения/загрузить модель.",
    "kind": "single",
    "id": "m377",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "К чему ведёт copy-paste programming?",
    "options": [
      "к расхождению копий и багам при правках в одном месте",
      "к обязательному ускорению",
      "к меньшему числу тестов автоматически",
      "к запрету функций"
    ],
    "answer": 0,
    "explain": "Дублируешь код — правишь в одном месте, забываешь в другом. Выноси общую функцию/модуль.",
    "kind": "single",
    "id": "m378",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "7",
      "3",
      "4",
      "TypeError"
    ],
    "answer": 0,
    "explain": "partial фиксирует аргументы; вызов даёт сумму/операцию из кода — 7.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 3)(4))",
    "id": "m379",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m380",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Default-аргумент фиксирует i → [0,1,2], не late binding.",
    "kind": "single",
    "code": "fs = [lambda i=i: i for i in range(3)]\nprint([f() for f in fs])",
    "id": "m381",
    "fixed": true,
    "topic": "замыкания",
    "group": "Декораторы и замыкания"
  },
  {
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
    "id": "m382",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m383",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует ValueError?",
    "options": [
      "Exception",
      "OSError",
      "Warning",
      "BaseException напрямую минуя Exception"
    ],
    "answer": 0,
    "explain": "ValueError — обычная прикладная ошибка значения ⊂ Exception.",
    "kind": "single",
    "id": "m385",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Для чего хук pytest_configure?",
    "options": [
      "плагинная настройка на старте pytest-сессии",
      "обязательный sleep",
      "удаление тестов",
      "замена assert"
    ],
    "answer": 0,
    "explain": "В conftest/плагине pytest_configure вызывается при инициализации — регистрация маркеров и т.п.",
    "kind": "single",
    "id": "m386",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Что делает @property.deleter?",
    "options": [
      "обрабатывает del obj.x для property",
      "удаляет класс из модуля",
      "чистит весь __dict__",
      "вызывает gc.collect"
    ],
    "answer": 0,
    "explain": "@x.deleter задаёт логику удаления атрибута-property. Без него del obj.x может быть запрещён.",
    "kind": "single",
    "id": "m387",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Для чего используют super()?",
    "options": [
      "вызов метода следующего класса в MRO (часто «родителя»)",
      "создание нового процесса",
      "отключение наследования",
      "доступ только к object.__init__ минуя MRO"
    ],
    "answer": 0,
    "explain": "super() следует MRO — критично при diamond inheritance и cooperative multiple inheritance.",
    "kind": "single",
    "id": "m388",
    "fixed": true,
    "topic": "ООП",
    "group": "ООП продвинутый"
  },
  {
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
    "id": "m389",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что будет с daemon-потоком при выходе main?",
    "options": [
      "он может оборваться, не дождавшись завершения",
      "всегда join'ится автоматически до конца",
      "превращается в процесс",
      "становится non-daemon"
    ],
    "answer": 0,
    "explain": "daemon=True не удерживает процесс. Критичную работу не оставляй только в daemon без join.",
    "kind": "single",
    "id": "m390",
    "fixed": true,
    "topic": "threading",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Когда уместен паттерн Builder?",
    "options": [
      "когда у объекта много опциональных шагов/параметров сборки",
      "когда достаточно одного позиционного аргумента",
      "только для GUI",
      "вместо любых фабрик всегда хуже"
    ],
    "answer": 0,
    "explain": "Builder пошагово собирает сложный объект. Для 1–2 полей обычно хватит конструктора/dataclass.",
    "kind": "single",
    "id": "m391",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что возвращает bisect.bisect_left?",
    "options": [
      "индекс вставки слева от равных элементов",
      "индекс удаления элемента",
      "всегда -1 если нет точного match",
      "новый отсортированный список"
    ],
    "answer": 0,
    "explain": "bisect_left/right — точки вставки в отсортированную последовательность за O(log n).",
    "kind": "single",
    "id": "m392",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m393",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Можно ли напрямую await обычный generator?",
    "options": [
      "нет (нужна корутина; @types.coroutine — отдельный нюанс)",
      "да, любой gen await'ится",
      "да, если есть yield from",
      "только в Python 2"
    ],
    "answer": 0,
    "explain": "await ждёт awaitable (coroutine, Task, Future…). Обычный generator — не awaitable, пока специально не обёрнут.",
    "kind": "single",
    "id": "m394",
    "fixed": true,
    "topic": "coroutines",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что значит HTTP 429?",
    "options": [
      "Too Many Requests — сработали rate limits",
      "успех",
      "не найден ресурс",
      "ошибка TLS"
    ],
    "answer": 0,
    "explain": "429 — клиент превысил лимит частоты. Часто вместе с Retry-After.",
    "kind": "single",
    "id": "m395",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Что такое Exception.__notes__ (3.11+)?",
    "options": [
      "список дополнительных текстовых заметок к исключению",
      "стек вызовов",
      "код возврата процесса",
      "уровень логирования"
    ],
    "answer": 0,
    "explain": "add_note наполняет __notes__; они печатаются вместе с исключением.",
    "kind": "single",
    "id": "m397",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Чем MagicMock отличается от Mock?",
    "options": [
      "MagicMock заранее имеет заглушки магических методов",
      "Mock быстрее в 100 раз всегда",
      "MagicMock нельзя использовать в assert",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "У MagicMock из коробки __iter__, __int__ и т.д. Обычный Mock их не создаёт автоматически.",
    "kind": "single",
    "id": "m398",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем нужен __matmul__?",
    "options": [
      "оператор @ (матричное умножение / другие семантики)",
      "только декораторы",
      "только async with",
      "форматирование строк"
    ],
    "answer": 0,
    "explain": "PEP 465 ввёл @. NumPy использует для matmul; можно определить свою семантику.",
    "kind": "single",
    "id": "m399",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Как super() без аргументов находит класс и self в Python 3?",
    "options": [
      "из неявной ячейки __class__ / кадра метода",
      "только через глобальный MRO lookup без привязки",
      "по имени файла",
      "случайным выбором базы"
    ],
    "answer": 0,
    "explain": "В методе супер без аргументов опирается на __class__ cell. В обычной функции так вызвать нельзя.",
    "kind": "single",
    "id": "m400",
    "fixed": true,
    "topic": "MRO",
    "group": "ООП продвинутый"
  },
  {
    "q": "Что такое random.SystemRandom?",
    "options": [
      "интерфейс как у Random, но энтропия из OS RNG",
      "быстрее random.random всегда без оговорок",
      "ГПСЧ только для тестов с фиксированным seed",
      "замена secrets.compare_digest"
    ],
    "answer": 0,
    "explain": "SystemRandom.cryptographically опирается на os.urandom. Для токенов чаще модуль secrets.",
    "kind": "single",
    "id": "m401",
    "fixed": true,
    "topic": "secrets",
    "group": "Stdlib и производительность"
  },
  {
    "q": "С чем roughly связан интервал переключения GIL?",
    "options": [
      "check interval / eval breaker (счётчик инструкций и проверки)",
      "только частотой GC поколений",
      "только размером heap",
      "частотой fsync диска"
    ],
    "answer": 0,
    "explain": "Исторически sys.setcheckinterval, позже switchinterval/eval breaker. GIL отпускается периодически и на blocking I/O.",
    "kind": "single",
    "id": "m402",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
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
    "id": "m403",
    "fixed": true,
    "topic": "DRY",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m404",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает field(repr=False) в dataclass?",
    "options": [
      "скрывает поле из автогенерируемого __repr__",
      "удаляет поле из экземпляра",
      "запрещает сравнение",
      "делает поле ClassVar"
    ],
    "answer": 0,
    "explain": "Удобно не светить секреты/тяжёлые поля в repr. На хранение значения не влияет.",
    "kind": "single",
    "id": "m405",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Верно ли, что у list итератор — отдельный объект?",
    "options": [
      "да — iter(list) создаёт отдельный list_iterator",
      "нет — list сам себе итератор без объекта",
      "только для tuple",
      "только после reverse()"
    ],
    "answer": 0,
    "explain": "У списка нет __next__; iter(lst) возвращает новый list_iterator. Можно иметь несколько независимых итераторов.",
    "kind": "single",
    "id": "m406",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что характерно для уровня изоляции READ COMMITTED?",
    "options": [
      "не видишь незакоммиченные чужие данные; dirty read обычно нет, но возможны non-repeatable read",
      "полный serializable без аномалий всегда",
      "то же, что READ UNCOMMITTED во всех СУБД",
      "запрет любых SELECT"
    ],
    "answer": 0,
    "explain": "READ COMMITTED — типичный default (PostgreSQL и др.). Детали аномалий зависят от СУБД и MVCC.",
    "kind": "single",
    "id": "m407",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует IndexError?",
    "options": [
      "LookupError",
      "OSError",
      "Warning",
      "StopIteration"
    ],
    "answer": 0,
    "explain": "IndexError ⊂ LookupError, рядом с KeyError.",
    "kind": "single",
    "id": "m409",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что делает warnings.filterwarnings?",
    "options": [
      "настраивает показ/игнор/ошибку для категорий предупреждений",
      "удаляет модуль warnings",
      "включает только logging",
      "чинит байткод"
    ],
    "answer": 0,
    "explain": "Можно превратить Warning в exception, скрыть DeprecationWarning и т.д.",
    "kind": "single",
    "id": "m410",
    "fixed": true,
    "topic": "warnings",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем дескриптору __set_name__?",
    "options": [
      "узнать имя атрибута и класс-владельца при создании класса",
      "вызывать при каждом get",
      "заменить __get__",
      "только для slots"
    ],
    "answer": 0,
    "explain": "PEP 487: при определении класса дескриптор получает owner и name — удобно для Field/validators.",
    "kind": "single",
    "id": "m411",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Зачем json.loads(..., parse_float=Decimal)?",
    "options": [
      "парсить числа как Decimal вместо float — точные десятичные",
      "ускорить парсинг в 10 раз",
      "запретить числа в JSON",
      "вернуть int всегда"
    ],
    "answer": 0,
    "explain": "float двоичный и теряет точность денег. Decimal через parse_float сохраняет десятичную запись.",
    "kind": "single",
    "id": "m412",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m413",
    "fixed": true,
    "topic": "GIL",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что ближе к KISS при обработке ошибки?",
    "options": [
      "явный try/except с понятным сообщением/действием",
      "десять слоёв абстрактных ErrorHandlerFactory",
      "глотать все Exception молча",
      "перезапуск процесса на любой KeyError"
    ],
    "answer": 0,
    "explain": "Простая понятная обработка лучше «архитектуры ради архитектуры».",
    "kind": "single",
    "id": "m414",
    "fixed": true,
    "topic": "KISS",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m415",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m416",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что будет после исчерпания генератора при next()?",
    "options": [
      "StopIteration",
      "None без исключения",
      "перезапуск с начала",
      "MemoryError"
    ],
    "answer": 0,
    "explain": "Исчерпанный генератор поднимает StopIteration. for ловит его сам.",
    "kind": "single",
    "code": "g = (x for x in range(1))\nnext(g)\nnext(g)",
    "id": "m417",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m418",
    "fixed": true,
    "topic": "DI",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Зачем нужен contextlib.ExitStack?",
    "options": [
      "динамически набирать и гарантированно закрывать набор контекстов",
      "заменить любой with одним print",
      "только для async",
      "ускорить open()"
    ],
    "answer": 0,
    "explain": "Когда число CM неизвестно заранее — enter_context в цикле, выход закроет все в обратном порядке.",
    "kind": "single",
    "id": "m420",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
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
    "id": "m421",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Во что превращает функция @property?",
    "options": [
      "атрибут с геттером (и опционально setter/deleter)",
      "staticmethod",
      "classmethod без self",
      "модульную функцию"
    ],
    "answer": 0,
    "explain": "@property делает вызов метода через доступ obj.x без скобок.",
    "kind": "single",
    "id": "m422",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m423",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое multiprocessing.sharedctypes?",
    "options": [
      "общие ctypes-значения/массивы между процессами",
      "обычный list без IPC",
      "только TCP-сокеты",
      "замена pickle"
    ],
    "answer": 0,
    "explain": "Value/Array из sharedctypes живут в shared memory; удобно для чисел, не для произвольных объектов.",
    "kind": "single",
    "id": "m424",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Два модуля копируют одну и ту же валидацию email — что нарушено?",
    "options": [
      "DRY — Don't Repeat Yourself",
      "только SOLID Liskov",
      "GIL",
      "HTTP/2"
    ],
    "answer": 0,
    "explain": "Одинаковая логика в двух местах расходится. Вынеси в общую функцию/модуль.",
    "kind": "single",
    "id": "m425",
    "fixed": true,
    "topic": "DRY",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что вернёт Counter.most_common(2)?",
    "options": [
      "топ-2 самых частых элементов как (элемент, счётчик)",
      "все ключи в алфавите",
      "только сумму счётчиков",
      "очищенный Counter"
    ],
    "answer": 0,
    "explain": "most_common(n) — n пар по убыванию частоты; без n — все.",
    "kind": "single",
    "id": "m426",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m427",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m428",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 429?",
    "options": [
      "Too Many Requests — лимит частоты",
      "успех 2xx",
      "Not Found",
      "Internal Server Error"
    ],
    "answer": 0,
    "explain": "Rate limiting. Смотри Retry-After. Не путать с 503.",
    "kind": "single",
    "id": "m429",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "Во что превращает @contextlib.contextmanager генератор?",
    "options": [
      "в контекстный менеджер (__enter__/__exit__)",
      "в async iterator обязательно",
      "в thread lock",
      "в dataclass"
    ],
    "answer": 0,
    "explain": "Код до yield — вход, после — выход/очистка. Исключения пробрасываются в генератор.",
    "kind": "single",
    "id": "m431",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что такое EAFP?",
    "options": [
      "Easier to Ask Forgiveness than Permission — try/except вместо предварительных проверок",
      "Look Before You Leap",
      "запрет исключений",
      "стиль только для Java"
    ],
    "answer": 0,
    "explain": "Идиома Python: пробуй операцию, лови ожидаемую ошибку. LBYL — противоположный стиль.",
    "kind": "single",
    "id": "m432",
    "fixed": true,
    "topic": "EAFP",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m433",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
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
    "id": "m434",
    "fixed": true,
    "topic": "строки",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое start method forkserver?",
    "options": [
      "отдельный сервер-процесс, от которого форкают воркеры",
      "то же, что spawn без отличий",
      "только Windows default",
      "отключение multiprocessing"
    ],
    "answer": 0,
    "explain": "forkserver безопаснее/предсказуемее голого fork после многопоточности; spawn — чистый старт интерпретатора.",
    "kind": "single",
    "id": "m435",
    "fixed": true,
    "topic": "multiprocessing",
    "group": "Потоки, процессы, GIL"
  },
  {
    "q": "Что такое God object?",
    "options": [
      "один класс, который знает и делает слишком много",
      "идеальный SRP-класс",
      "пустой интерфейс",
      "только DI-контейнер"
    ],
    "answer": 0,
    "explain": "Антипаттерн: всё свалено в одном месте → сложно тестировать и менять. Дроби по ответственностям.",
    "kind": "single",
    "id": "m436",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Зачем collections.UserDict?",
    "options": [
      "удобная база для своего dict-like класса через наследование",
      "быстрее встроенного dict всегда",
      "замена defaultdict",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Наследовать встроенный dict исторически неудобно; UserDict.data — нормальный путь кастомизации.",
    "kind": "single",
    "id": "m437",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m438",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m439",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 409?",
    "options": [
      "Conflict — конфликт состояния ресурса",
      "успех",
      "неавторизован",
      "редирект"
    ],
    "answer": 0,
    "explain": "409 — конфликт версий/состояния (optimistic locking, duplicate create).",
    "kind": "single",
    "id": "m440",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Зачем нужен async with?",
    "options": [
      "для асинхронных контекстных менеджеров (__aenter__/__aexit__)",
      "замена любого with синхронного всегда",
      "только для print",
      "отключение event loop"
    ],
    "answer": 0,
    "explain": "Ресурсы с await на входе/выходе (Lock, сессии aiohttp) требуют async with.",
    "kind": "single",
    "id": "m441",
    "fixed": true,
    "topic": "async",
    "group": "Asyncio"
  },
  {
    "q": "Что такое contextlib.asynccontextmanager?",
    "options": [
      "превращает async-генератор в async context manager",
      "только синхронный CM",
      "замена create_task",
      "фикстура pytest"
    ],
    "answer": 0,
    "explain": "Аналог @contextmanager, но с async def и await до/после yield.",
    "kind": "single",
    "id": "m442",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что определяют handlers у логгера?",
    "options": [
      "куда писать записи: файл, stderr, syslog, …",
      "только формат времени без назначения",
      "уровень root навсегда фиксированно без handler",
      "имя логгера"
    ],
    "answer": 0,
    "explain": "Logger → Filter → Handler → Formatter. Handler — «куда».",
    "kind": "single",
    "id": "m443",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем нужен __index__?",
    "options": [
      "преобразование к int для индексов/срезов/bin/hex/oct",
      "только для float",
      "хеширование строк",
      "async await"
    ],
    "answer": 0,
    "explain": "Объекты вроде numpy.int64 реализуют __index__, чтобы работать как индексы без потери точности __int__.",
    "kind": "single",
    "id": "m444",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "{\"a\": 1}",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → {\"a\": 1}.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'a': 1}))",
    "id": "m445",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m446",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Для чего хорошо подходит collections.deque?",
    "options": [
      "быстрых append/pop с обоих концов",
      "только случайного доступа O(1) лучше list",
      "замены dict",
      "SQL-запросов"
    ],
    "answer": 0,
    "explain": "Двусторонняя очередь: O(1) на концах. Индексация в середине дороже, чем у list.",
    "kind": "single",
    "id": "m447",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает @enum.unique?",
    "options": [
      "запрещает дублирующиеся значения членов Enum",
      "делает Enum быстрее",
      "разрешает любые дубли",
      "конвертирует в IntFlag"
    ],
    "answer": 0,
    "explain": "При дубле значения unique поднимает ValueError на этапе определения класса.",
    "kind": "single",
    "id": "m448",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что должен иметь итератор?",
    "options": [
      "__iter__ (обычно return self) и __next__",
      "только __len__",
      "только __getitem__",
      "только close()"
    ],
    "answer": 0,
    "explain": "Протокол итератора: __next__ отдаёт следующий или StopIteration; __iter__ возвращает себя.",
    "kind": "single",
    "id": "m449",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m450",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
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
    "fixed": true,
    "topic": "asyncio",
    "group": "Asyncio"
  },
  {
    "q": "От чего наследует StopIteration?",
    "options": [
      "Exception",
      "BaseException напрямую минуя Exception",
      "OSError",
      "Warning"
    ],
    "answer": 0,
    "explain": "StopIteration ⊂ Exception. GeneratorExit — уже из BaseException (не глотать в except Exception вслепую в генераторах — отдельная тема).",
    "kind": "single",
    "id": "m452",
    "fixed": true,
    "topic": "exceptions",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что должен вернуть logging.Filter.filter, чтобы запись прошла?",
    "options": [
      "True (или truthy)",
      "False чтобы пропустить дальше",
      "всегда None",
      "уровень CRITICAL"
    ],
    "answer": 0,
    "explain": "filter возвращает True — запись идёт дальше; False — отбрасывается.",
    "kind": "single",
    "id": "m453",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Что будет при obj.x = 1, если x — property без setter?",
    "options": [
      "AttributeError",
      "тихое игнорирование",
      "создание обычного атрибута в обход всегда",
      "TypeError от int"
    ],
    "answer": 0,
    "explain": "Read-only property запрещает присваивание → AttributeError: can't set attribute.",
    "kind": "single",
    "id": "m454",
    "fixed": true,
    "topic": "property",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что делает secrets.token_urlsafe?",
    "options": [
      "криптостойкий токен, безопасный для URL (Base64url)",
      "только UUID1 из MAC",
      "предсказуемый счётчик",
      "MD5 от пароля"
    ],
    "answer": 0,
    "explain": "Для session id/CSRF используй secrets, не random. token_urlsafe удобен в query/path.",
    "kind": "single",
    "id": "m455",
    "fixed": true,
    "topic": "secrets",
    "group": "Stdlib и производительность"
  },
  {
    "q": "View смешивает SQL и HTML в одной функции — что нарушено?",
    "options": [
      "Separation of Concerns — разные обязанности свалены вместе",
      "только DRY без SoC",
      "GIL",
      "UTF-8"
    ],
    "answer": 0,
    "explain": "Разделяй доступ к данным, бизнес-логику и представление — проще тестировать и менять.",
    "kind": "single",
    "id": "m456",
    "fixed": true,
    "topic": "SoC",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что делает itertools.islice(it, 10)?",
    "options": [
      "лениво берёт первые 10 элементов итератора",
      "создаёт list из всего it сразу всегда",
      "сортирует it",
      "удаляет 10 элементов из источника"
    ],
    "answer": 0,
    "explain": "islice — срез без материализации всего потока. Есть варианты start/stop/step.",
    "kind": "single",
    "id": "m457",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что dataclasses.asdict делает неидеально?",
    "options": [
      "не волшебно сериализует произвольные вложенные объекты «как надо всегда»",
      "всегда падает на любом dataclass",
      "удаляет поля",
      "меняет исходный объект in-place"
    ],
    "answer": 0,
    "explain": "asdict рекурсивно обходит dataclasses/dict/list, но кастомные типы могут потребовать своего encoder.",
    "kind": "single",
    "id": "m458",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m459",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что обычно значит HTTP 201?",
    "options": [
      "Created — ресурс создан",
      "No Content",
      "Bad Request",
      "Not Found"
    ],
    "answer": 0,
    "explain": "201 после успешного POST/создания; часто с Location на новый URI.",
    "kind": "single",
    "id": "m460",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
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
    "id": "m461",
    "fixed": true,
    "topic": "исключения",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что такое monkeypatch в pytest?",
    "options": [
      "временная подмена атрибутов/env/dict с автооткатом",
      "постоянный патч продакшена",
      "замена интерпретатора",
      "только mock из unittest без отката"
    ],
    "answer": 0,
    "explain": "Фикстура monkeypatch.setenv/setattr безопасна: после теста всё восстанавливается.",
    "kind": "single",
    "id": "m462",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Что возвращает __enter__?",
    "options": [
      "значение, которое попадёт в переменную после as",
      "всегда None обязательно",
      "только True/False успеха",
      "исключение"
    ],
    "answer": 0,
    "explain": "with CM() as x: — x = результат __enter__. Часто возвращают self.",
    "kind": "single",
    "id": "m463",
    "fixed": true,
    "topic": "магические",
    "group": "Контекст и магические методы"
  },
  {
    "q": "Что показывает sys.getrefcount(obj)?",
    "options": [
      "число ссылок на объект (часто +1 из‑за временной ссылки аргумента)",
      "размер в байтах",
      "поколение GC",
      "число потоков"
    ],
    "answer": 0,
    "explain": "Счётчик ссылок CPython. Вызов getrefcount сам добавляет временную ссылку — не удивляйся +1.",
    "kind": "single",
    "id": "m464",
    "fixed": true,
    "topic": "refcount",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Когда LBYL уместнее EAFP?",
    "options": [
      "когда проверка дешёвая и предсказуемая, а исключение дорогое/редкое неожиданно",
      "всегда в Python без исключений",
      "только в C++",
      "никогда — EAFP единственный стиль"
    ],
    "answer": 0,
    "explain": "Пример: if path.exists() перед лёгкой веткой UI. Для dict чаще EAFP (KeyError). Гонки TOCTOU — отдельный риск LBYL.",
    "kind": "single",
    "id": "m465",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m466",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает field(hash=False) в dataclass?",
    "options": [
      "исключает поле из автогенерируемого __hash__",
      "запрещает хранить поле",
      "делает поле ClassVar",
      "включает slots"
    ],
    "answer": 0,
    "explain": "При hash=True у dataclass можно выкинуть мутабельные/шумные поля из хеша.",
    "kind": "single",
    "id": "m467",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m468",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m469",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что делает contextlib.chdir (3.11+)?",
    "options": [
      "временно меняет текущую рабочую директорию внутри with",
      "удаляет каталог",
      "только читает cwd без смены",
      "меняет PYTHONPATH"
    ],
    "answer": 0,
    "explain": "На входе os.chdir(path), на выходе возврат прежнего cwd — даже при исключении.",
    "kind": "single",
    "id": "m470",
    "fixed": true,
    "topic": "context",
    "group": "Исключения и контекст"
  },
  {
    "q": "Что значит scope='session' у pytest-фикстуры?",
    "options": [
      "создать ресурс один раз на всю тестовую сессию",
      "на каждый тест заново обязательно",
      "только на один модуль без session",
      "отключить фикстуру"
    ],
    "answer": 0,
    "explain": "session > package > module > class > function. Тяжёлые ресурсы (БД) часто session-scoped.",
    "kind": "single",
    "id": "m471",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Когда удаляется NamedTemporaryFile?",
    "options": [
      "часто при закрытии (параметр delete; на Windows нюансы)",
      "никогда автоматически",
      "только при reboot ОС",
      "сразу при создании до записи"
    ],
    "answer": 0,
    "explain": "delete=True (default) — unlink при close. На Windows нельзя открыть второй раз, пока файл открыт — классическая ловушка.",
    "kind": "single",
    "id": "m472",
    "fixed": true,
    "topic": "tempfile",
    "group": "Stdlib и производительность"
  },
  {
    "q": "О чём «Readability counts» в Zen of Python?",
    "options": [
      "код читают чаще, чем пишут — читаемость важна",
      "нужно писать максимально коротко любой ценой",
      "запрет комментариев",
      "только про скорость CPU"
    ],
    "answer": 0,
    "explain": "Один из афоризмов import this: ясность важнее «гольф-кода».",
    "kind": "single",
    "id": "m473",
    "fixed": true,
    "topic": "Zen",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что регистрирует functools.singledispatch?",
    "options": [
      "перегрузки функции по типу первого аргумента",
      "перегрузки по имени функции в C",
      "только методы класса",
      "async задачи"
    ],
    "answer": 0,
    "explain": "@singledispatch + @func.register(int) выбирает реализацию по type(arg0).",
    "kind": "single",
    "id": "m474",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m475",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает yield from subgen?",
    "options": [
      "делегирует итерацию (и send/throw) подгенератору",
      "только копирует list(subgen)",
      "создаёт поток",
      "эквивалент return subgen"
    ],
    "answer": 0,
    "explain": "yield from прозрачно прокидывает протокол генератора в subgen и пробрасывает StopIteration.value.",
    "kind": "single",
    "id": "m476",
    "fixed": true,
    "topic": "generators",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что делает UPSERT (INSERT … ON CONFLICT)?",
    "options": [
      "вставляет строку или обновляет её при конфликте уникального ключа",
      "только удаляет строки",
      "только делает SELECT",
      "создаёт новую базу данных"
    ],
    "answer": 0,
    "explain": "UPSERT = insert or update. В PostgreSQL: INSERT … ON CONFLICT (…) DO UPDATE/NOTHING. В SQLite похожий синтаксис; в MySQL чаще ON DUPLICATE KEY UPDATE.",
    "kind": "single",
    "id": "m477",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
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
    "id": "m478",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Какой format-символ struct для bool (1 байт)?",
    "options": [
      "'?'",
      "'b' всегда для bool",
      "'s'",
      "'p'"
    ],
    "answer": 0,
    "explain": "struct: '?' — _Bool. 'b'/'B' — signed/unsigned char.",
    "kind": "single",
    "id": "m479",
    "fixed": true,
    "topic": "struct",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Типичный симптом circular dependency модулей A и B?",
    "options": [
      "импорт на уровне модуля друг друга → частично инициализированные модули / ImportError",
      "обязательное ускорение старта",
      "запрет функций",
      "автоматический deadlock ОС"
    ],
    "answer": 0,
    "explain": "Лечится: отложенный импорт, общий третий модуль, инверсия зависимостей.",
    "kind": "single",
    "id": "m480",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 10.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(5), 2))))",
    "id": "m481",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что означает typing.Final?",
    "options": [
      "имя не должно переназначаться (для type checker)",
      "значение вычисляется в runtime как const в C",
      "запрет чтения",
      "только для классов"
    ],
    "answer": 0,
    "explain": "Final — контракт для mypy/pyright. В runtime обычное присваивание всё ещё возможно.",
    "kind": "single",
    "id": "m482",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m483",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что такое eager load связей в ORM?",
    "options": [
      "заранее подгрузить связанные объекты одним/несколькими запросами",
      "всегда ленивая загрузка по одному SELECT на доступ",
      "удаление связей",
      "только raw SQL без ORM"
    ],
    "answer": 0,
    "explain": "Eager (joined/selectin) борется с N+1. Lazy — по умолчанию во многих ORM.",
    "kind": "single",
    "id": "m484",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Зачем conftest.py в pytest?",
    "options": [
      "общие фикстуры и хуки для каталога тестов без импорта",
      "конфиг продакшен-сервера",
      "замена pytest.ini полностью всегда",
      "компиляция C-расширений"
    ],
    "answer": 0,
    "explain": "pytest сам подхватывает conftest.py вверх по дереву — фикстуры видны тестам ниже.",
    "kind": "single",
    "id": "m485",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Что делает json.dumps(..., sort_keys=True)?",
    "options": [
      "сортирует ключи объектов для стабильного вывода",
      "сортирует значения массивов",
      "удаляет ключи",
      "включает pretty-print без indent"
    ],
    "answer": 0,
    "explain": "Удобно для диффов и канонического представления. Не влияет на семантику JSON-объекта.",
    "kind": "single",
    "id": "m486",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m487",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "0",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 1.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 4))",
    "id": "m488",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
    "q": "Какой порядок *args и **kwargs в сигнатуре?",
    "options": [
      "*args затем **kwargs (kwargs всегда последние)",
      "**kwargs затем *args",
      "только kwargs без позиции",
      "порядок не важен синтаксически"
    ],
    "answer": 0,
    "explain": "def f(a, *args, **kwargs). Keyword-only после * тоже возможны.",
    "kind": "single",
    "id": "m489",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m490",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
    "q": "Что такое websocket в ASGI?",
    "options": [
      "отдельный тип соединения (не обычный HTTP request/response)",
      "то же, что HTTP/1.0 без отличий",
      "только UDP",
      "синхронный WSGI-сокет"
    ],
    "answer": 0,
    "explain": "ASGI различает http, websocket, lifespan. Websocket — долгоживущий двунаправленный канал.",
    "kind": "single",
    "id": "m491",
    "fixed": true,
    "topic": "ASGI",
    "group": "Веб и API"
  },
  {
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
    "id": "m492",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем weakref?",
    "options": [
      "ссылаться на объект, не мешая сборщику его удалить",
      "увеличить refcount навсегда",
      "заменить все обычные ссылки",
      "ускорить dict"
    ],
    "answer": 0,
    "explain": "Кэши, наблюдатели, графы без циклов удержания. WeakValueDictionary и т.п.",
    "kind": "single",
    "id": "m493",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое Separation of Concerns?",
    "options": [
      "разные аспекты системы живут в разных модулях/слоях",
      "всё в одном God object",
      "запрет функций",
      "только про UI-цвета"
    ],
    "answer": 0,
    "explain": "SoC снижает связность: меняешь представление — не трогаешь БД-слой.",
    "kind": "single",
    "id": "m494",
    "fixed": true,
    "topic": "SoC",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "9",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: 1.",
    "kind": "single",
    "code": "import heapq\nh = [4, 4, 1]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m495",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что добавляет dataclass(order=True)?",
    "options": [
      "методы сравнения < <= > >= по полям",
      "только __hash__",
      "сортировку полей в памяти",
      "запрет eq"
    ],
    "answer": 0,
    "explain": "order=True требует eq=True и генерирует ordering из порядка полей.",
    "kind": "single",
    "id": "m496",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m497",
    "fixed": true,
    "topic": "генераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m498",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Зачем logging.getLogger(__name__)?",
    "options": [
      "логгер с иерархическим именем модуля (pkg.mod)",
      "всегда один глобальный root без имени",
      "отключение логов",
      "создание файла .log автоматически без handler"
    ],
    "answer": 0,
    "explain": "Иерархия: настройка pkg влияет на pkg.mod. Привычный паттерн в библиотеках.",
    "kind": "single",
    "id": "m499",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Что делает copy.copy?",
    "options": [
      "shallow copy — новая оболочка, общие вложения",
      "глубокую копию всего графа",
      "перемещение объекта",
      "сериализацию в JSON"
    ],
    "answer": 0,
    "explain": "Для полного графа — copy.deepcopy. У list есть и lst.copy().",
    "kind": "single",
    "id": "m500",
    "fixed": true,
    "topic": "копирование",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что отделяет Repository pattern?",
    "options": [
      "доступ к данным от бизнес-логики",
      "UI от CSS только",
      "потоки от процессов",
      "HTTP от TCP на уровне ядра"
    ],
    "answer": 0,
    "explain": "Репозиторий прячет ORM/SQL; доменный код говорит «дай пользователя», не зная таблиц.",
    "kind": "single",
    "id": "m501",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Чем array.array отличается от list?",
    "options": [
      "типизированный компактный массив однотипных C-значений",
      "хранит любые объекты Python как list",
      "это то же, что ndarray всегда",
      "только строки"
    ],
    "answer": 0,
    "explain": "array('i', ...) экономит память vs list[int], но без векторных операций NumPy.",
    "kind": "single",
    "id": "m502",
    "fixed": true,
    "topic": "array",
    "group": "Collections и itertools"
  },
  {
    "q": "Что даёт dataclass(frozen=True)?",
    "options": [
      "неизменяемые экземпляры (присваивание полей → ошибка)",
      "ускорение в 100 раз",
      "запрет __init__",
      "mutable по умолчанию сильнее"
    ],
    "answer": 0,
    "explain": "frozen генерирует __setattr__, запрещающий изменения; удобно для hashable value-objects.",
    "kind": "single",
    "id": "m503",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Для чего StopIteration.value?",
    "options": [
      "значение return из генератора/корутины",
      "код ошибки ОС",
      "номер строки",
      "уровень логирования"
    ],
    "answer": 0,
    "explain": "return x в генераторе → StopIteration(value=x). yield from пробрасывает это значение.",
    "kind": "single",
    "id": "m504",
    "fixed": true,
    "topic": "итераторы",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m505",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что часто бывает при повторном logging.basicConfig?",
    "options": [
      "no-op, если у root уже есть handlers",
      "всегда полностью перезаписывает конфиг",
      "удаляет все логгеры",
      "поднимает SystemExit"
    ],
    "answer": 0,
    "explain": "basicConfig срабатывает один раз «из коробки». Для перенастройки — dictConfig/handlers вручную force=True (3.8+).",
    "kind": "single",
    "id": "m506",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Чем re.fullmatch отличается от re.match?",
    "options": [
      "fullmatch — вся строка; match — только с начала (хвост может остаться)",
      "разницы нет",
      "match требует всю строку, fullmatch — нет",
      "fullmatch только для bytes"
    ],
    "answer": 0,
    "explain": "Частая ловушка: match('a', 'abc') успешен. Для «вся строка» — fullmatch или \\Z.",
    "kind": "single",
    "id": "m507",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Когда говорят о shotgun surgery?",
    "options": [
      "одно изменение требует правок во многих разрозненных местах",
      "одна правка в одном модуле всегда",
      "удаление всего репозитория",
      "только про CI"
    ],
    "answer": 0,
    "explain": "Запах кода: ответственность размазана. Лечится сбором связанного в одно место / модуль.",
    "kind": "single",
    "id": "m508",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m509",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что значит `case point.x:` в match (без кавычек)?",
    "options": [
      "value pattern — сравнение с уже существующим значением point.x",
      "захват имени в новую переменную point",
      "синтаксическая ошибка",
      "только type pattern"
    ],
    "answer": 0,
    "explain": "Имя с точкой — value pattern. Голое имя — capture. Для констант часто пишут case MyEnum.X:.",
    "kind": "single",
    "id": "m510",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "нет (Py3)",
      "да как в 2.7",
      "ошибка",
      "только в dictcomp"
    ],
    "answer": 0,
    "explain": "В Python 3 переменная comprehension не протекает во внешнюю область.",
    "kind": "single",
    "code": "[i for i in range(3)]\n# i ?",
    "id": "m511",
    "fixed": true,
    "topic": "comprehensions",
    "group": "Генераторы и итераторы"
  },
  {
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
    "id": "m512",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что проверяет doctest?",
    "options": [
      "интерактивные примеры из docstring на совпадение вывода",
      "покрытие ветвлений как coverage",
      "нагрузочное тестирование",
      "типы аргументов в runtime"
    ],
    "answer": 0,
    "explain": "doctest гоняет >>> примеры. Хорош для документации; для сложной логики обычно pytest.",
    "kind": "single",
    "id": "m513",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Про possessive quantifiers в стандартном re?",
    "options": [
      "в stdlib re их нет; сторонний модуль regex богаче",
      "они есть как ++ в re всегда",
      "это то же, что possessive в str.split",
      "только в bytes-режиме"
    ],
    "answer": 0,
    "explain": "Пакет regex (PyPI) ближе к Perl/PCRE. Стандартный re — умеренный набор.",
    "kind": "single",
    "id": "m514",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m515",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m516",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем typing.Protocol?",
    "options": [
      "структурная типизация: «есть нужные методы» без наследования",
      "ускорение CPython",
      "создание процессов",
      "только Enum"
    ],
    "answer": 0,
    "explain": "Protocol (PEP 544) — duck typing для чекера. runtime_checkable — опционально.",
    "kind": "single",
    "id": "m517",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m518",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
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
    "id": "m519",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m520",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что создаёт Factory Method?",
    "options": [
      "объект через метод, который подкласс/фабрика может переопределить",
      "обязательно один глобальный Singleton",
      "только файлы на диске",
      "HTTP-ответ"
    ],
    "answer": 0,
    "explain": "Фабричный метод прячет конкретный класс продукта за «создай X».",
    "kind": "single",
    "id": "m521",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "8",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "itertools строит комбинаторный итератор; len(...) здесь 8.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=3))))",
    "id": "m522",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m523",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m524",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Зачем capsys / capfd в pytest?",
    "options": [
      "перехватить stdout/stderr теста и проверить вывод",
      "задать cap на CPU",
      "мок сети",
      "создать временный каталог"
    ],
    "answer": 0,
    "explain": "capsys — уровень Python; capfd — на уровне FD (print/C-extensions).",
    "kind": "single",
    "id": "m525",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Чем Path.match отличается от Path.glob?",
    "options": [
      "match проверяет паттерн на сам путь; glob ищет файлы в дереве",
      "glob только для одного файла, match — рекурсия",
      "разницы нет",
      "match удаляет файлы"
    ],
    "answer": 0,
    "explain": "p.match('*.py') vs list(Path('.').glob('**/*.py')).",
    "kind": "single",
    "id": "m526",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что значит сильная связанность (tight coupling) модулей?",
    "options": [
      "плохо: изменение в одном часто ломает другой",
      "хорошо всегда — чем жёстче, тем лучше",
      "только про GIL",
      "про кодировку файлов"
    ],
    "answer": 0,
    "explain": "Слабая связанность + сильная связность внутри модуля — цель дизайна. Coupling ≠ cohesion.",
    "kind": "single",
    "id": "m527",
    "fixed": true,
    "topic": "cohesion",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "defaultdict(list): d['x'].append(1) — что с d['x']?",
    "options": [
      "[1], ключ создался фабрикой list сам",
      "KeyError",
      "None",
      "ошибка append"
    ],
    "answer": 0,
    "explain": "При отсутствии ключа вызывается default_factory → list(), затем append.",
    "kind": "single",
    "id": "m528",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m529",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m530",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Coverage 100% гарантирует отсутствие логических багов?",
    "options": [
      "нет — покрытые строки ≠ правильная логика всех входов",
      "да, полностью",
      "да, если есть doctest",
      "да для async кода"
    ],
    "answer": 0,
    "explain": "Покрытие — необходимое, но не достаточное. Нужны осмысленные ассерты и кейсы.",
    "kind": "single",
    "id": "m531",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'x=10'",
      "'10'",
      "'x={x}'",
      "ошибка"
    ],
    "answer": 0,
    "explain": "f-строка подставляет значение с форматом. Печать: 'x=10'.",
    "kind": "single",
    "code": "x = 10\nprint(f'{x=}')",
    "id": "m532",
    "fixed": true,
    "topic": "f-string",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Какой рефакторинг чаще помогает DRY?",
    "options": [
      "вынести общую функцию/модуль",
      "скопировать ещё раз «на всякий»",
      "увеличить число God objects",
      "удалить все тесты"
    ],
    "answer": 0,
    "explain": "Одна реализация в одном месте + вызовы. Не путать с преждевременной абстракцией.",
    "kind": "single",
    "id": "m533",
    "fixed": true,
    "topic": "DRY",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что делает deque(maxlen=n) при переполнении?",
    "options": [
      "выбрасывает элемент с противоположного конца",
      "поднимает IndexError",
      "растёт без лимита",
      "очищает всю deque"
    ],
    "answer": 0,
    "explain": "Кольцевой буфер фиксированной длины — удобно для последних N событий.",
    "kind": "single",
    "id": "m534",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое InitVar в dataclass?",
    "options": [
      "поле только для __init__/__post_init__, в экземпляре не хранится",
      "обычное поле в __dict__",
      "ClassVar",
      "property"
    ],
    "answer": 0,
    "explain": "InitVar передаётся в конструктор и __post_init__, но не становится атрибутом instance.",
    "kind": "single",
    "id": "m535",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что обычно значит HTTP 401?",
    "options": [
      "Unauthorized — нужна аутентификация",
      "Forbidden без нюансов 403",
      "успех",
      "Not Found"
    ],
    "answer": 0,
    "explain": "401 — «кто ты?». 403 — «знаю кто, но нельзя». Часто WWW-Authenticate.",
    "kind": "single",
    "id": "m536",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что делает logger.exception внутри except?",
    "options": [
      "пишет лог уровня ERROR с traceback",
      "только print без traceback",
      "глотает исключение молча",
      "меняет тип исключения"
    ],
    "answer": 0,
    "explain": "exception() = error(..., exc_info=True). Вне except traceback может быть пустым.",
    "kind": "single",
    "id": "m537",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m538",
    "fixed": true,
    "topic": "строки",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Почему magic numbers — проблема?",
    "options": [
      "непонятен смысл числа без именованной константы/контекста",
      "числа запрещены в Python",
      "интерпретатор падает на литералах",
      "только про float"
    ],
    "answer": 0,
    "explain": "86400 vs SECONDS_PER_DAY — второй читается. Константы документируют намерение.",
    "kind": "single",
    "id": "m539",
    "fixed": true,
    "topic": "принципы",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Сколько примерно уникальных ключей кэша у fib(n) с lru_cache при наивной рекурсии?",
    "options": [
      "порядка n+1 значений (0..n)",
      "только 1",
      "2^n отдельных ключей без повторов",
      "0 — кэш не работает с int"
    ],
    "answer": 0,
    "explain": "Каждый k из 0..n считается один раз и кэшируется; дальше hit. Без кэша — экспонента вызовов.",
    "kind": "single",
    "id": "m540",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3 True",
      "True",
      "3",
      "SyntaxError"
    ],
    "answer": 0,
    "explain": "(n := 3) присваивает n и даёт 3; затем n == 3 → True. print печатает оба значения: 3 True.",
    "kind": "single",
    "code": "print((n := 3), n == 3)",
    "id": "m541",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m542",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что делает @pytest.fixture?",
    "options": [
      "объявляет фикстуру — подготовку данных/ресурса для тестов",
      "помечает тест как skipped",
      "заменяет assert",
      "компилирует C-код"
    ],
    "answer": 0,
    "explain": "Тест принимает имя фикстуры аргументом — pytest инжектит результат.",
    "kind": "single",
    "id": "m543",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Что станет с ключом в json.dumps({1: 'a'})?",
    "options": [
      "числовой ключ станет строкой '1'",
      "останется int 1 в JSON",
      "ошибка всегда",
      "ключ удалится"
    ],
    "answer": 0,
    "explain": "JSON допускает только строковые ключи объектов. Python молча конвертирует int→str.",
    "kind": "single",
    "id": "m544",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Чем GoF Decorator отличается от Python @decorator?",
    "options": [
      "оба оборачивают; GoF — композиция объектов, @ — обычно функции/классы на этапе определения",
      "это одно и то же без нюансов",
      "@decorator запрещён в Python",
      "GoF только про HTTP"
    ],
    "answer": 0,
    "explain": "Идея «обернуть поведение» общая; реализация и момент применения разные.",
    "kind": "single",
    "id": "m545",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "7",
      "3",
      "4",
      "TypeError"
    ],
    "answer": 0,
    "explain": "functools.partial фиксирует часть аргументов; полный вызов даёт 7.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 0)(7))",
    "id": "m546",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое list[int] в Python 3.9+?",
    "options": [
      "параметризованный тип для аннотаций (встроенный generic)",
      "создаёт list только из int в runtime всегда",
      "синтаксическая ошибка до 3.12",
      "замена array.array"
    ],
    "answer": 0,
    "explain": "PEP 585: list[int] вместо List[int] из typing. В runtime list[int] — generic alias, не валидатор.",
    "kind": "single",
    "id": "m547",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое CORS preflight?",
    "options": [
      "запрос OPTIONS перед «сложным» кросс-доменным запросом",
      "обязательный GET перед каждым POST",
      "сжатие gzip",
      "редирект 301"
    ],
    "answer": 0,
    "explain": "Браузер спрашивает сервер разрешения (методы/заголовки). Простые запросы могут идти без preflight.",
    "kind": "single",
    "id": "m548",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
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
    "id": "m549",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Что делает weakref.finalize(obj, callback)?",
    "options": [
      "регистрирует вызов callback при уничтожении объекта GC",
      "увеличивает refcount навсегда",
      "немедленно удаляет obj",
      "заменяет __del__"
    ],
    "answer": 0,
    "explain": "Надёжнее __del__ для очистки: finalize живёт отдельно и не создаёт цикл так же легко.",
    "kind": "single",
    "id": "m550",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Идиоматичный Singleton в Python часто выглядит как?",
    "options": [
      "модуль как единственный экземпляр состояния",
      "обязательный класс с кучей __new__ магии всегда",
      "только Borg",
      "запрет модулей"
    ],
    "answer": 0,
    "explain": "import один раз → один модуль. Часто проще и яснее классического GoF Singleton.",
    "kind": "single",
    "id": "m551",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m552",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем в условии пишут (n := len(a)) > 0?",
    "options": [
      "присвоить и сразу использовать значение в выражении (walrus)",
      "это синтаксическая ошибка",
      "только для async",
      "создаёт отдельный поток"
    ],
    "answer": 0,
    "explain": ":= позволяет не звать len дважды. Скобки часто нужны из‑за приоритета.",
    "kind": "single",
    "id": "m553",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое connection pool exhaustion?",
    "options": [
      "все соединения из пула заняты — очередь или ошибки у клиентов",
      "слишком много свободных коннектов всегда хорошо без лимита",
      "только про HTTP keep-alive",
      "исчерпание диска"
    ],
    "answer": 0,
    "explain": "Пул конечен. Утечки (не вернули коннект), долгие транзакции → таймауты. Смотри размер пула и время жизни.",
    "kind": "single",
    "id": "m554",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что даёт фикстура tmp_path?",
    "options": [
      "временную директорию pathlib.Path на тест",
      "временный TCP-порт",
      "мок БД",
      "кэш pytest"
    ],
    "answer": 0,
    "explain": "pytest создаёт уникальный каталог и чистит по политике. Удобно писать файлы в тестах.",
    "kind": "single",
    "id": "m555",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "dict",
      "list",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads парсит JSON-текст в объекты Python → dict.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"x\": [1, 2]}')).__name__)",
    "id": "m556",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Как чаще всего делают Strategy в Python?",
    "options": [
      "передачей callable или класса стратегии",
      "только через огромную иерархию с 10 интерфейсами",
      "через GIL",
      "через HTTP 418"
    ],
    "answer": 0,
    "explain": "Функции первого класса: strategy=fn или strategy.do(). Меньше бойлерплейта, чем в Java.",
    "kind": "single",
    "id": "m557",
    "fixed": true,
    "topic": "patterns",
    "group": "Архитектура и дизайн"
  },
  {
    "q": "В чём опасность dict.fromkeys(['a','b'], [])?",
    "options": [
      "один и тот же list шарится всеми ключами",
      "ключи удаляются",
      "всегда TypeError",
      "создаётся deepcopy автоматически"
    ],
    "answer": 0,
    "explain": "Мутабельный default один объект. d['a'].append(1) видно в d['b']. Нужна фабрика на ключ.",
    "kind": "single",
    "code": "d = dict.fromkeys(['a', 'b'], [])\nd['a'].append(1)\nprint(d['b'])",
    "id": "m558",
    "fixed": true,
    "topic": "dict",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m559",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое OAuth2PasswordBearer в FastAPI?",
    "options": [
      "схема извлечения Bearer-токена из заголовка Authorization",
      "хеширование паролей",
      "ORM-модель пользователя",
      "CORS middleware"
    ],
    "answer": 0,
    "explain": "Depends(oauth2_scheme) достаёт token string; проверка/JWT — уже твоя логика.",
    "kind": "single",
    "id": "m560",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
    "q": "Что делает RotatingFileHandler?",
    "options": [
      "ротирует лог-файл по размеру (backupCount)",
      "ротирует только по времени (это TimedRotating)",
      "пишет только в syslog",
      "сжимает HTTP"
    ],
    "answer": 0,
    "explain": "При maxBytes файл переименовывается, открывается новый. TimedRotatingFileHandler — по времени.",
    "kind": "single",
    "id": "m561",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Зачем bytearray для накопления байт?",
    "options": [
      "мутабельный буфер — дешевле, чем конкатенировать bytes",
      "bytearray неизменяем как bytes",
      "только для строк Unicode",
      "замена memoryview всегда"
    ],
    "answer": 0,
    "explain": "append/extend в bytearray; в конце bytes(buf). Конкатенация bytes в цикле создаёт много копий.",
    "kind": "single",
    "id": "m562",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Добавили поддержку 10 валют «на всякий случай» без запроса — что нарушено?",
    "options": [
      "YAGNI",
      "только DRY",
      "HTTP",
      "GIL"
    ],
    "answer": 0,
    "explain": "You Aren't Gonna Need It: не строй фичи до реальной нужды.",
    "kind": "single",
    "id": "m563",
    "fixed": true,
    "topic": "YAGNI",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m564",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "1",
      "0",
      "True",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 1.",
    "kind": "single",
    "code": "if (x := 1):\n    print(x)\nelse:\n    print('no')",
    "id": "m565",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m566",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что такое snapshot testing?",
    "options": [
      "сравнение текущего вывода с сохранённым эталоном",
      "нагрузочный тест RPS",
      "проверка только типов",
      "fuzzing без эталона"
    ],
    "answer": 0,
    "explain": "Удобно для UI/сериализации. Минус — эталоны надо осознанно обновлять при намеренных изменениях.",
    "kind": "single",
    "id": "m567",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m568",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "К чему относится DRY?",
    "options": [
      "к дублированию логики и знаний в системе",
      "только к копипасте строк без смысла",
      "к запрету функций",
      "к HTTP-кэшу"
    ],
    "answer": 0,
    "explain": "Don't Repeat Yourself — одно знание в одном месте. Не путать с «никогда не повторять символы».",
    "kind": "single",
    "id": "m569",
    "fixed": true,
    "topic": "DRY",
    "group": "Архитектура и дизайн"
  },
  {
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
    "id": "m570",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Как вызвать f при positional-only сигнатуре из кода?",
    "options": [
      "f(1)",
      "f(a=1)",
      "f()",
      "f(1,2,3)"
    ],
    "answer": 0,
    "explain": "После / аргумент нельзя передать по имени — только позиционно f(1).",
    "kind": "single",
    "code": "def f(a, /):\n    return a",
    "id": "m571",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что ускоряет индекс в БД?",
    "options": [
      "поиск/фильтр/join по ключу ценой замедления записей и места на диске",
      "только INSERT без SELECT",
      "удаление нормализации",
      "обязательный full scan"
    ],
    "answer": 0,
    "explain": "Индекс — структура для lookup. UPDATE/INSERT должны поддерживать индекс.",
    "kind": "single",
    "id": "m572",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что проверяет assert_called_once_with(...)?",
    "options": [
      "ровно один вызов мока с этими аргументами",
      "что мок не вызывался",
      "любое число вызовов",
      "только тип возвращаемого значения"
    ],
    "answer": 0,
    "explain": "Из unittest.mock: once + точные args/kwargs. Иначе AssertionError.",
    "kind": "single",
    "id": "m573",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m574",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "0",
      "3",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 6.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 2))))",
    "id": "m575",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем field(default_factory=list)?",
    "options": [
      "избежать общего мутабельного default на все экземпляры",
      "сделать поле ClassVar",
      "запретить list",
      "ускорить hash"
    ],
    "answer": 0,
    "explain": "Как и в обычных def: default=[] шарится. default_factory вызывает list() каждый раз.",
    "kind": "single",
    "id": "m576",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое миграция Alembic?",
    "options": [
      "версионирование схемы БД (upgrade/downgrade)",
      "бэкап данных только",
      "ORM без SQLAlchemy",
      "HTTP-роутер"
    ],
    "answer": 0,
    "explain": "Alembic поверх SQLAlchemy: скрипты миграций в репозитории, применение на окружениях.",
    "kind": "single",
    "id": "m577",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что ловит pytest.raises?",
    "options": [
      "ожидаемое исключение внутри блока",
      "любой print",
      "успешное завершение без исключений",
      "segfault"
    ],
    "answer": 0,
    "explain": "Если исключения не было или тип другой — тест падает. Можно проверить message через match=.",
    "kind": "single",
    "id": "m578",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Когда нужен copy.deepcopy?",
    "options": [
      "когда есть вложенные изменяемые структуры и нужна полная независимость",
      "всегда вместо присваивания a=b",
      "только для int",
      "никогда — shallow всегда достаточно"
    ],
    "answer": 0,
    "explain": "shallow копирует верхний контейнер; вложенный list останется общим. deepcopy — весь граф (с memo на циклы).",
    "kind": "single",
    "id": "m579",
    "fixed": true,
    "topic": "копирование",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m580",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что значит параметр до / (positional-only)?",
    "options": [
      "нельзя передать этот аргумент по имени",
      "можно только по имени",
      "это kwargs",
      "запрещён в 3.x"
    ],
    "answer": 0,
    "explain": "PEP 570: def f(a, /): f(1) ок, f(a=1) — TypeError.",
    "kind": "single",
    "id": "m581",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m582",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что патчат monkeypatch / mock в тестах?",
    "options": [
      "атрибуты, env, dict — на время теста с откатом",
      "байткод интерпретатора навсегда",
      "версию Python",
      "схему БД в проде"
    ],
    "answer": 0,
    "explain": "Изоляция теста: подменил зависимость, проверил, откатил.",
    "kind": "single",
    "id": "m583",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Для многих membership checks (x in …) что лучше?",
    "options": [
      "set (среднее O(1))",
      "list всегда O(1)",
      "только tuple",
      "строка из repr"
    ],
    "answer": 0,
    "explain": "x in list — O(n). x in set/dict — амортизированно O(1).",
    "kind": "single",
    "id": "m584",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "11",
      "5",
      "6",
      "TypeError"
    ],
    "answer": 0,
    "explain": "functools.partial фиксирует часть аргументов; полный вызов даёт 11.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 10)(1))",
    "id": "m585",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Чем Protocol отличается от ABC?",
    "options": [
      "Protocol — структурная (утиная) типизация; ABC — номинальная (явное наследование/регистрация)",
      "разницы нет",
      "Protocol только runtime, ABC только checker",
      "ABC запрещён в 3.11+"
    ],
    "answer": 0,
    "explain": "Protocol: «есть методы» без subclass. ABC: isinstance через иерархию/@abstractmethod.",
    "kind": "single",
    "id": "m586",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m587",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что даёт Mock(spec=True) / spec=obj?",
    "options": [
      "ограничивает атрибуты мока интерфейсом оригинала",
      "ускоряет мок",
      "запрещает assert",
      "делает мок реальным объектом"
    ],
    "answer": 0,
    "explain": "Обращение к несуществующему атрибуту падает — ловит опечатки в тестах.",
    "kind": "single",
    "id": "m588",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m589",
    "fixed": true,
    "topic": "f-string",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Какова сложность deque.popleft()?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "У deque оба конца O(1). list.pop(0) — O(n).",
    "kind": "single",
    "id": "m590",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m591",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m592",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Зачем pytest.mark.parametrize?",
    "options": [
      "один тест — много наборов вход/ожидание",
      "пропустить тест",
      "создать фикстуру session",
      "включить coverage"
    ],
    "answer": 0,
    "explain": "Параметризация даёт отдельные test cases в отчёте без копипасты тела теста.",
    "kind": "single",
    "id": "m593",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Для чего pbkdf2_hmac / scrypt?",
    "options": [
      "KDF для паролей (замедление перебора + соль)",
      "быстрый checksum файла",
      "шифрование AES само по себе",
      "подпись JWT без ключа"
    ],
    "answer": 0,
    "explain": "Не храни пароль как sha256(password). Используй KDF/argon2/bcrypt с солью и параметрами стоимости.",
    "kind": "single",
    "id": "m594",
    "fixed": true,
    "topic": "hashlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое functools.singledispatch?",
    "options": [
      "мультиметод по типу первого аргумента",
      "кэш LRU",
      "partial аргументов",
      "async lock"
    ],
    "answer": 0,
    "explain": "@singledispatch def f(x): ...; @f.register(int) def _(x): ...",
    "kind": "single",
    "id": "m595",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Как сравниваются члены Enum?",
    "options": [
      "по идентичности/члену Enum, не как «сырые» int (если не IntEnum)",
      "всегда как int даже у чистого Enum",
      "только по имени строки без value",
      "сравнение запрещено"
    ],
    "answer": 0,
    "explain": "Color.RED == Color.RED True; Color.RED == 1 обычно False у Enum (у IntEnum — иначе).",
    "kind": "single",
    "id": "m596",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что значит идемпотентный PUT?",
    "options": [
      "повтор того же запроса даёт тот же эффект на ресурсе",
      "каждый повтор создаёт новый ресурс",
      "запрещены повторы",
      "только для DELETE"
    ],
    "answer": 0,
    "explain": "Идемпотентность: N одинаковых PUT ≈ один. POST часто не идемпотентен.",
    "kind": "single",
    "id": "m597",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что делает Logger.propagate?",
    "options": [
      "передаёт записи родительским логгерам при True",
      "удаляет handlers",
      "меняет уровень на CRITICAL",
      "пишет только в файл"
    ],
    "answer": 0,
    "explain": "По умолчанию True: запись идёт вверх к root. Иногда ставят False, чтобы не дублировать.",
    "kind": "single",
    "id": "m598",
    "fixed": true,
    "topic": "logging",
    "group": "Тесты и качество"
  },
  {
    "q": "Верно ли, что (257 is 257) в одном выражении всегда контракт языка?",
    "options": [
      "часто True из‑за peephole/кэша, но is — не контракт равенства чисел",
      "да, для любых int is обязателен",
      "нет, всегда False",
      "только для float"
    ],
    "answer": 0,
    "explain": "Сравнивай int через ==. is — идентичность объектов. Интернирование маленьких int — деталь реализации.",
    "kind": "single",
    "id": "m599",
    "fixed": true,
    "topic": "is",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что хранит lru_cache(maxsize=2)?",
    "options": [
      "до 2 последних результатов вызовов (LRU)",
      "бесконечный кэш",
      "только ошибки",
      "байткод функции"
    ],
    "answer": 0,
    "explain": "При переполнении вытесняется least recently used. maxsize=None — без лимита (осторожно с памятью).",
    "kind": "single",
    "id": "m600",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем Generic[T]?",
    "options": [
      "описать параметризуемый класс для type checker",
      "ускорить runtime",
      "создать процесс",
      "заменить dataclass"
    ],
    "answer": 0,
    "explain": "class Box(Generic[T]): ... — Box[int] проверяется статически, в runtime T стирается.",
    "kind": "single",
    "id": "m601",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что характерно для READ UNCOMMITTED?",
    "options": [
      "возможен dirty read чужих незакоммиченных данных (где СУБД это допускает)",
      "строго serializable без аномалий",
      "то же, что SNAPSHOT всегда",
      "запрет SELECT"
    ],
    "answer": 0,
    "explain": "Самый слабый классический уровень. В PostgreSQL фактически не даёт dirty read как в теории — знай свою СУБД.",
    "kind": "single",
    "id": "m602",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что делает hypothesis.given?",
    "options": [
      "генерирует property-based входы для теста",
      "фиксирует один seed без генерации",
      "заменяет pytest",
      "мерит coverage"
    ],
    "answer": 0,
    "explain": "Hypothesis гоняет много случайных примеров по стратегиям; ищет минимальный failing case.",
    "kind": "single",
    "id": "m603",
    "fixed": true,
    "topic": "тесты",
    "group": "Тесты и качество"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "copy.copy — shallow: вложенный list общий, изменение видно в обоих → True.",
    "kind": "single",
    "code": "import copy\na = [[0, 0], [1]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m604",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 6.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(3), 3))))",
    "id": "m605",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 2.",
    "kind": "single",
    "code": "if (x := 2):\n    print(x)\nelse:\n    print('no')",
    "id": "m606",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m607",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что делает patch.dict(os.environ)?",
    "options": [
      "временно меняет переменные окружения с откатом",
      "навсегда пишет в /etc/environment",
      "только читает env",
      "патчит sys.path"
    ],
    "answer": 0,
    "explain": "Удобно в тестах: with patch.dict(os.environ, {'A':'1'}, clear=...): ...",
    "kind": "single",
    "id": "m608",
    "fixed": true,
    "topic": "mock",
    "group": "Тесты и качество"
  },
  {
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
    "id": "m609",
    "fixed": true,
    "topic": "регулярки",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что вернёт reduce(lambda a,b: a+b, [1,2,3])?",
    "options": [
      "6",
      "123",
      "[1,2,3]",
      "TypeError без initializer всегда"
    ],
    "answer": 0,
    "explain": "(((1+2)+3)=6). Для пустой последовательности нужен initializer.",
    "kind": "single",
    "id": "m610",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "one",
      "1",
      "default",
      "ошибка"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → one.",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m611",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m612",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что рекомендует пирамида тестирования?",
    "options": [
      "много unit, меньше integration, ещё меньше e2e",
      "только e2e",
      "только ручное тестирование",
      "равное число всех слоёв всегда"
    ],
    "answer": 0,
    "explain": "Дешёвые быстрые unit внизу; дорогие UI/e2e на вершине — точечно.",
    "kind": "single",
    "id": "m613",
    "fixed": true,
    "topic": "testing",
    "group": "Тесты и качество"
  },
  {
    "q": "Хороший паттерн для многих кусков строк?",
    "options": [
      "накапливать в list и ''.join(...)",
      "s += piece в огромном цикле как лучший вариант",
      "только bytes +",
      "обязательный StringIO без исключений"
    ],
    "answer": 0,
    "explain": "join один раз аллоцирует результат. Много += на огромных строках создаёт лишние копии (хотя CPython иногда оптимизирует).",
    "kind": "single",
    "id": "m614",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 2.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 4))",
    "id": "m615",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
    "q": "Чем Pydantic часто отличается от dataclass?",
    "options": [
      "валидирует и приводит данные на runtime",
      "только аннотации без runtime",
      "запрещает вложенные модели",
      "медленнее писать модели всегда бесполезно"
    ],
    "answer": 0,
    "explain": "dataclass — хранение полей. Pydantic/attrs с валидацией — проверка на входе (API, конфиг).",
    "kind": "single",
    "id": "m616",
    "fixed": true,
    "topic": "attrs/pydantic",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m617",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Чем PurePath отличается от Path?",
    "options": [
      "PurePath — чистая работа с путём без I/O; Path умеет читать/писать диск",
      "Path нельзя использовать на Windows",
      "разницы нет",
      "PurePath только для URL"
    ],
    "answer": 0,
    "explain": "PurePosixPath/PureWindowsPath — парсинг и join. Path.open/read_text — уже FS.",
    "kind": "single",
    "id": "m618",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('a', 2), ('b', 1)]",
      "{'a': 2, 'b': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('a', 2), ('b', 1)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aab').most_common(2))",
    "id": "m619",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m620",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m621",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
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
    "id": "m622",
    "fixed": true,
    "topic": "struct",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m623",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "empty",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → empty.",
    "kind": "single",
    "code": "x = []\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m624",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что обычно значит HTTP 502?",
    "options": [
      "Bad Gateway — прокси/шлюз получил плохой ответ апстрима",
      "успех",
      "клиентский Bad Request",
      "Not Found"
    ],
    "answer": 0,
    "explain": "502 — проблема между gateway и upstream (упал бэкенд, оборванный ответ).",
    "kind": "single",
    "id": "m625",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "a/b",
      "ab",
      "a\\b",
      "ошибка"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: a/b.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('a', 'b'))",
    "id": "m626",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое functools.lru_cache?",
    "options": [
      "мемоизация результатов функции с LRU-лимитом",
      "кэш HTTP",
      "пул потоков",
      "сериализатор"
    ],
    "answer": 0,
    "explain": "Кэширует по аргументам (должны быть hashable). Есть cache_info/cache_clear.",
    "kind": "single",
    "id": "m627",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m628",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что характерно для REPEATABLE READ?",
    "options": [
      "повторное чтение тех же строк в транзакции стабильнее; аномалии зависят от СУБД",
      "то же, что READ UNCOMMITTED",
      "запрет UPDATE",
      "полный serializable во всех СУБД одинаково"
    ],
    "answer": 0,
    "explain": "В PostgreSQL RR близко к snapshot; phantom/write skew — нюансы. Учи документацию своей БД.",
    "kind": "single",
    "id": "m629",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Когда WeakValueDictionary забывает значение?",
    "options": [
      "когда не осталось сильных ссылок на объект-значение",
      "никогда",
      "только при reboot",
      "при любом чтении ключа"
    ],
    "answer": 0,
    "explain": "Слабая ссылка не удерживает объект; после GC ключ пропадает из mapping.",
    "kind": "single",
    "id": "m630",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает deque.rotate(2) на 5 элементах?",
    "options": [
      "циклический сдвиг на 2 вправо (отрицательное — влево)",
      "сортировку",
      "удаление двух элементов",
      "реверс всего deque"
    ],
    "answer": 0,
    "explain": "rotate(n): элементы с правого конца переносятся влево на n (для положительного n).",
    "kind": "single",
    "id": "m631",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m632",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m633",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Для чего Timsort особенно хорош?",
    "options": [
      "частично упорядоченных данных (находит runs)",
      "только полностью случайных массивов хуже любого O(n log n)",
      "только строк",
      "сортировки на GPU"
    ],
    "answer": 0,
    "explain": "Timsort в CPython использует уже отсортированные куски — часто быстрее на реальных данных.",
    "kind": "single",
    "id": "m634",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m635",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m636",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m637",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'42'",
      "'4'",
      "42",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: '42'.",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42')\nprint(None if m is None else m.group())",
    "id": "m638",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что часто требуют перед itertools.groupby?",
    "options": [
      "предварительную сортировку (или группировку) по тому же ключу",
      "обязательный list() всего мира",
      "удаление дубликатов set()",
      "reverse=True всегда"
    ],
    "answer": 0,
    "explain": "groupby группирует только подряд идущие равные ключи — как uniq в Unix.",
    "kind": "single",
    "id": "m639",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m640",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое WSGI?",
    "options": [
      "стандартный интерфейс sync Python веб-приложений и серверов",
      "только async интерфейс (это ASGI)",
      "протокол БД",
      "формат JSON"
    ],
    "answer": 0,
    "explain": "PEP 3333: callable(environ, start_response). ASGI — наследник для async/websocket.",
    "kind": "single",
    "id": "m641",
    "fixed": true,
    "topic": "WSGI",
    "group": "Веб и API"
  },
  {
    "q": "Когда полезен re.compile?",
    "options": [
      "когда один паттерн переиспользуется много раз",
      "всегда обязателен для одной проверки",
      "только для bytes",
      "ускоряет str.find"
    ],
    "answer": 0,
    "explain": "Скомпилированный Pattern переиспользует автомат. Для одноразового поиска выигрыш мал.",
    "kind": "single",
    "id": "m642",
    "fixed": true,
    "topic": "регулярки",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m643",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "В def f(a, b=1, /, c=2, *, d=3) чем является b?",
    "options": [
      "positional-only параметр с default",
      "keyword-only",
      "**kwargs",
      "запрещённый синтаксис"
    ],
    "answer": 0,
    "explain": "До / — только позиционно, даже с default. После * — только по имени (d).",
    "kind": "single",
    "id": "m644",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Какие методы HTTP обычно идемпотентны?",
    "options": [
      "GET, PUT, DELETE (и др. по семантике)",
      "только POST",
      "только PATCH всегда",
      "никакие"
    ],
    "answer": 0,
    "explain": "Идемпотентность по RFC: повтор безопасен по эффекту. POST — обычно нет. PATCH — зависит.",
    "kind": "single",
    "id": "m645",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow copy: вложенный dict тот же объект → изменение видно с обеих сторон.",
    "kind": "single",
    "code": "import copy\na = [{'a': 1}]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m646",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает itertools.cycle([1,2])?",
    "options": [
      "бесконечно циклически отдаёт 1,2,1,2,…",
      "один проход и StopIteration",
      "сортирует",
      "случайную перестановку"
    ],
    "answer": 0,
    "explain": "cycle — бесконечный итератор; обычно режут islice или break.",
    "kind": "single",
    "id": "m647",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "@dataclass class Cell: x: int = -1 — делят ли экземпляры x?",
    "options": [
      "нет — immutable default int безопасен",
      "да — один int на всех как list",
      "ошибка dataclass",
      "x станет ClassVar"
    ],
    "answer": 0,
    "explain": "Проблема shared default — у мутабельных (list/dict). int/str/None ок.",
    "kind": "single",
    "id": "m648",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое BackgroundTasks в FastAPI?",
    "options": [
      "задачи, которые выполняются после отправки ответа клиенту",
      "замена Celery для тяжёлого CPU всегда",
      "websocket pool",
      "миграции БД"
    ],
    "answer": 0,
    "explain": "Лёгкая пост-обработка в том же процессе. Для надёжных очередей — RQ/Celery/Arq.",
    "kind": "single",
    "id": "m649",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
    "q": "Что делает Path.write_text?",
    "options": [
      "записывает строку в файл (кодировка/newline настраиваются)",
      "только читает",
      "создаёт symlink",
      "пишет bytes без encode"
    ],
    "answer": 0,
    "explain": "Удобный one-liner поверх open. Для bytes — write_bytes.",
    "kind": "single",
    "id": "m650",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "5",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "functools.partial фиксирует часть аргументов; полный вызов даёт 10.",
    "kind": "single",
    "code": "from functools import partial\nf = lambda x, y: x + y\nprint(partial(f, 5)(5))",
    "id": "m651",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Чем помогает typing.LiteralString?",
    "options": [
      "ловить смешивание «чистых» литералов и пользовательского ввода (SQL/shell) на уровне типов",
      "ускорять строки в runtime",
      "шифровать строки",
      "заменять f-strings"
    ],
    "answer": 0,
    "explain": "PEP 675: API, ждущий LiteralString, не примет произвольный str из запроса — защита от injection на checker.",
    "kind": "single",
    "id": "m652",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m653",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
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
    "id": "m654",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('a', 3), ('b', 2)]",
      "{'a': 3, 'b': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('a', 3), ('b', 2)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('aaabb').most_common(2))",
    "id": "m655",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "В def f(*args, a) чем является a?",
    "options": [
      "keyword-only параметр",
      "positional-only",
      "**kwargs",
      "запрещён"
    ],
    "answer": 0,
    "explain": "Всё после *args — только по имени: f(1, 2, a=3).",
    "kind": "single",
    "id": "m656",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что обычно значит HTTP 200?",
    "options": [
      "OK — успешный запрос",
      "Created",
      "No Content",
      "Bad Request"
    ],
    "answer": 0,
    "explain": "200 — общий успех с телом (часто). 201/204 — более специфичные успехи.",
    "kind": "single",
    "id": "m657",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что делает Path.glob('**/*.py')?",
    "options": [
      "рекурсивный поиск файлов по маске",
      "только в текущем каталоге без **",
      "удаление .py",
      "компиляцию"
    ],
    "answer": 0,
    "explain": "** — рекурсия. rglob('*.py') — удобный синоним.",
    "kind": "single",
    "id": "m658",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "8",
      "4",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "reduce последовательно сворачивает последовательность бинарной функцией → 8.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [2, 2, 2]))",
    "id": "m659",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Чем TypedDict отличается от dataclass?",
    "options": [
      "TypedDict описывает форму dict; dataclass — класс с атрибутами",
      "разницы нет",
      "TypedDict создаёт объекты с методами",
      "dataclass только для JSON"
    ],
    "answer": 0,
    "explain": "TypedDict — для JSON-подобных словарей и checker. В runtime обычный dict.",
    "kind": "single",
    "id": "m660",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое UploadFile в FastAPI?",
    "options": [
      "обёртка для асинхронной работы с загружаемым файлом",
      "только путь на диске без SpooledTemporaryFile",
      "Base64 в query",
      "S3 клиент"
    ],
    "answer": 0,
    "explain": "Можно await file.read(); крупное уходит в temp file. Не читай огромные файлы в память целиком без нужды.",
    "kind": "single",
    "id": "m661",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
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
    "id": "m662",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "3",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 6.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(4), 2))))",
    "id": "m663",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает dataclass(frozen=True)?",
    "options": [
      "делает экземпляры приблизительно неизменяемыми",
      "удаляет поля",
      "включает slots всегда без опции",
      "запрещает __init__"
    ],
    "answer": 0,
    "explain": "Присвоение полям → FrozenInstanceError. Для hashable value objects.",
    "kind": "single",
    "id": "m664",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Как выглядит Interface Segregation в typing?",
    "options": [
      "узкие Protocol вместо одного жирного интерфейса",
      "один ABC на 50 методов всегда",
      "запрет Protocol",
      "только Any"
    ],
    "answer": 0,
    "explain": "ISP: завись от маленьких контрактов Readable/Writable, а не от MegaService.",
    "kind": "single",
    "id": "m665",
    "fixed": true,
    "topic": "DI",
    "group": "Веб и API"
  },
  {
    "q": "Чем re.search отличается от re.match?",
    "options": [
      "search ищет в любом месте; match — только с начала строки",
      "разницы нет",
      "match ищет везде, search — с начала",
      "search только для bytes"
    ],
    "answer": 0,
    "explain": "Классическая ловушка. Для всей строки — fullmatch.",
    "kind": "single",
    "id": "m666",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m667",
    "fixed": true,
    "topic": "dict",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое параметр a в def f(a, /)?",
    "options": [
      "positional-only",
      "keyword-only",
      "varargs",
      "**kwargs"
    ],
    "answer": 0,
    "explain": "Слэш делает a только позиционным.",
    "kind": "single",
    "id": "m668",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m669",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Зачем hashlib.sha256?",
    "options": [
      "криптографический хеш (отпечаток данных)",
      "шифрование с ключом как AES",
      "сжатие gzip",
      "кодирование URL"
    ],
    "answer": 0,
    "explain": "Хеш ≠ encryption. Для паролей — KDF, не голый sha256(password).",
    "kind": "single",
    "id": "m670",
    "fixed": true,
    "topic": "hashlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое deque.rotate?",
    "options": [
      "циклический сдвиг элементов",
      "сортировка",
      "случайный shuffle",
      "преобразование в list"
    ],
    "answer": 0,
    "explain": "rotate(n) сдвигает кольцом; полезно для буферов/алгоритмов.",
    "kind": "single",
    "id": "m671",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m672",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что обычно значит HTTP 422?",
    "options": [
      "Unprocessable Entity — семантически невалидные данные",
      "успех",
      "Not Found",
      "Bad Gateway"
    ],
    "answer": 0,
    "explain": "Часто в API: JSON синтаксически ок, но валидация полей провалилась (FastAPI/Pydantic).",
    "kind": "single",
    "id": "m673",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
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
    "id": "m674",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m675",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Как верно вызвать def f(a, /, b, *, c)?",
    "options": [
      "f(1, 2, c=3) или f(1, b=2, c=3)",
      "f(a=1, b=2, c=3)",
      "f(1, 2, 3)",
      "f(1)"
    ],
    "answer": 0,
    "explain": "a только позиционно; c только по имени; b — так и так.",
    "kind": "single",
    "id": "m676",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Для чего ETag / If-None-Match?",
    "options": [
      "кэш-валидация: клиент спрашивает, изменился ли ресурс",
      "аутентификация Bearer",
      "сжатие тела",
      "CORS"
    ],
    "answer": 0,
    "explain": "Сервер может ответить 304 Not Modified — тело не гонять повторно.",
    "kind": "single",
    "id": "m677",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 2, 3]",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → [1, 2, 3].",
    "kind": "single",
    "code": "import json\nprint(json.dumps([1, 2, 3]))",
    "id": "m678",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Сколько примерно ключей в кэше у fib(4) с lru_cache?",
    "options": [
      "порядка 5 (значения 0..4)",
      "1",
      "2^4 без повторов",
      "0"
    ],
    "answer": 0,
    "explain": "Каждый n от 0 до 4 кэшируется один раз.",
    "kind": "single",
    "id": "m679",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "single",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → single.",
    "kind": "single",
    "code": "x = [1]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m680",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что дают prepared statements?",
    "options": [
      "переиспользование плана запроса и защиту от SQL-инъекций при биндинге",
      "обязательный full scan",
      "отключение индексов",
      "только ORM без SQL"
    ],
    "answer": 0,
    "explain": "Плейсхолдеры + параметры, не f-строка с user input.",
    "kind": "single",
    "id": "m681",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что делают sys.path_hooks?",
    "options": [
      "определяют, как найти импортёр для записи в sys.path",
      "список установленных пакетов pip",
      "кэш .pyc путей",
      "PYTHONPATH только для Windows"
    ],
    "answer": 0,
    "explain": "Импорт: path_hooks → path_importer_cache → finder/loader. Расширяемый механизм.",
    "kind": "single",
    "id": "m682",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('a', 5), ('b', 2)]",
      "{'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('a', 5), ('b', 2)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('abracadabra').most_common(2))",
    "id": "m683",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Допустим ли синтаксис a := b := 1?",
    "options": [
      "нет — SyntaxError (цепочка walrus так не пишется)",
      "да, как a = b = 1",
      "да только в 3.12+",
      "да внутри class body"
    ],
    "answer": 0,
    "explain": "Обычное a = b = 1 ок. Walrus не поддерживает такую цепочку.",
    "kind": "single",
    "id": "m684",
    "fixed": true,
    "topic": "операторы",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что значит Content-Encoding: gzip?",
    "options": [
      "тело ответа сжато gzip",
      "клиент обязан слать gzip",
      "тип документа HTML",
      "кодировка UTF-8"
    ],
    "answer": 0,
    "explain": "Транспортное сжатие. Не путать с Content-Type и с Transfer-Encoding: chunked.",
    "kind": "single",
    "id": "m685",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
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
    "id": "m686",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает heapq.merge(*iters)?",
    "options": [
      "сливает уже отсортированные итераторы в один sorted-поток",
      "сортирует произвольный unsorted list in-place",
      "строит max-heap",
      "удаляет дубликаты"
    ],
    "answer": 0,
    "explain": "Как sorted(chain(*iters)), но лениво и эффективно, если входы sorted.",
    "kind": "single",
    "id": "m687",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m688",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое Depends() в FastAPI?",
    "options": [
      "внедрение зависимостей в path-operation",
      "SQL JOIN",
      "фоновая очередь Celery",
      "CORS пресет"
    ],
    "answer": 0,
    "explain": "DI: сессия БД, текущий пользователь, настройки — через Depends.",
    "kind": "single",
    "id": "m689",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "JSONDecodeError",
      "True",
      "False",
      "ошибка SyntaxError"
    ],
    "answer": 0,
    "explain": "json.loads падает с JSONDecodeError на невалидном JSON.",
    "kind": "single",
    "code": "import json\nprint(json.loads('nullish'))",
    "id": "m690",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает itertools.tee(it, n)?",
    "options": [
      "разветвляет один итератор на n (с буферизацией)",
      "удаляет it",
      "сортирует",
      "делает list копию без буфера никогда"
    ],
    "answer": 0,
    "explain": "tee копирует поток; если ветки уходят далеко друг от друга — растёт буфер. Иногда проще list(it).",
    "kind": "single",
    "id": "m691",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое case 1 | 2 | 3 в match?",
    "options": [
      "or-паттерн — совпадение с любым из вариантов",
      "побитовое OR значений",
      "синтаксическая ошибка",
      "только для строк"
    ],
    "answer": 0,
    "explain": "PEP 634: альтернативы через |. Можно case 1 | 2 as x.",
    "kind": "single",
    "id": "m692",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое HTTPS termination?",
    "options": [
      "расшифровка TLS часто на proxy/load balancer перед бэкендом",
      "обязательный TLS на каждом Python-воркере всегда",
      "сжатие gzip",
      "HTTP/3 только"
    ],
    "answer": 0,
    "explain": "Клиент ↔ LB по HTTPS; дальше часто HTTP во внутренней сети. Нужна аккуратность с заголовками X-Forwarded-*.",
    "kind": "single",
    "id": "m693",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Как включить weakref при __slots__?",
    "options": [
      "явно добавить '__weakref__' в slots",
      "weakref работает без слотов всегда",
      "только через __dict__",
      "нельзя никак"
    ],
    "answer": 0,
    "explain": "Без __dict__ и без '__weakref__' в slots слабые ссылки недоступны.",
    "kind": "single",
    "id": "m694",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Сколько результатов хранит lru_cache(maxsize=8)?",
    "options": [
      "до 8 последних (LRU)",
      "ровно бесконечно",
      "только 1",
      "8 МБ памяти фиксированно"
    ],
    "answer": 0,
    "explain": "maxsize — число кэшированных вызовов, не байты.",
    "kind": "single",
    "id": "m695",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем positional-only параметры?",
    "options": [
      "стабильный API: можно переименовать параметр без ломания вызовов по имени",
      "запретить позиционные вызовы",
      "ускорить GIL",
      "только для async"
    ],
    "answer": 0,
    "explain": "Как у len(obj): нельзя len(obj=...). Имена внутренних параметров свободны.",
    "kind": "single",
    "id": "m696",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m697",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Чему эквивалентен capture_output=True в subprocess.run?",
    "options": [
      "stdout=PIPE и stderr=PIPE",
      "stdout=DEVNULL",
      "shell=True",
      "check=True"
    ],
    "answer": 0,
    "explain": "Удобный флаг 3.7+: результат в CompletedProcess.stdout/stderr.",
    "kind": "single",
    "id": "m698",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m699",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что генерирует @dataclass?",
    "options": [
      "__init__, __repr__, __eq__ и др. по флагам",
      "только __slots__ всегда",
      "ORM-таблицу",
      "async методы"
    ],
    "answer": 0,
    "explain": "Декоратор пишет шаблонные методы из аннотаций полей. frozen/order/slots — опции.",
    "kind": "single",
    "id": "m700",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое N+1 проблема?",
    "options": [
      "1 запрос списка + N запросов на каждую связанную сущность",
      "N индексов на одну таблицу",
      "N+1 потоков GIL",
      "ошибка HTTP 501"
    ],
    "answer": 0,
    "explain": "Классика ORM: for u in users: u.orders лениво бьёт БД. Лечится eager load / join.",
    "kind": "single",
    "id": "m701",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что такое sqlite3 в stdlib?",
    "options": [
      "драйвер встроенной SQLite БД (файл или :memory:)",
      "клиент PostgreSQL",
      "NoSQL документная БД",
      "ORM как SQLAlchemy"
    ],
    "answer": 0,
    "explain": "Лёгкая встроенная СУБД в процессе. Для продвинутого SQL/пулов часто берут другие стеки.",
    "kind": "single",
    "id": "m702",
    "fixed": true,
    "topic": "sqlite",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m703",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → other.",
    "kind": "single",
    "code": "x = 2\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m704",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое ASGI?",
    "options": [
      "асинхронный интерфейс Python веб-приложений (наследник идей WSGI)",
      "только sync CGI",
      "протокол БД",
      "формат логов"
    ],
    "answer": 0,
    "explain": "ASGI поддерживает async, websocket, lifespan. FastAPI/Starlette/Django ASGI.",
    "kind": "single",
    "id": "m705",
    "fixed": true,
    "topic": "ASGI",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "x/y/z/w",
      "x/y/z/w/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: x/y/z/w.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('x', 'y', 'z', 'w'))",
    "id": "m706",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m707",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m708",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Чем помогает Dependency Injection?",
    "options": [
      "тестируемости и слабой связанности (зависимости снаружи)",
      "ускорению CPU обязательно",
      "скрытию всех зависимостей в глобалах",
      "замене типов"
    ],
    "answer": 0,
    "explain": "Передаёшь db/client в конструктор — в тесте подменяешь моком. Против жёсткого new Inside.",
    "kind": "single",
    "id": "m709",
    "fixed": true,
    "topic": "DI",
    "group": "Веб и API"
  },
  {
    "q": "Что делает struct.pack?",
    "options": [
      "упаковывает значения в bytes по format-строке",
      "парсит JSON",
      "сжимает gzip",
      "кодирует URL"
    ],
    "answer": 0,
    "explain": "Бинарные протоколы/файлы: pack/unpack с endianness и типами C.",
    "kind": "single",
    "id": "m710",
    "fixed": true,
    "topic": "struct",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что копирует functools.wraps?",
    "options": [
      "__module__, __name__, __doc__, __annotations__, …",
      "только байткод",
      "только closure",
      "ничего — wraps пустой"
    ],
    "answer": 0,
    "explain": "@wraps(f) на обёртке декоратора сохраняет метаданные исходной функции.",
    "kind": "single",
    "id": "m711",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "@dataclass class Node: x: int = 1 — шарится ли default между экземплярами?",
    "options": [
      "нет — int immutable, default безопасен",
      "да как у list",
      "ошибка dataclass",
      "x станет shared dict"
    ],
    "answer": 0,
    "explain": "Опасны мутабельные defaults. int/str/None/tuple из иммутабельного — ок.",
    "kind": "single",
    "id": "m712",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Когда ambient context — антипаттерн?",
    "options": [
      "когда зависимости спрятаны в скрытых глобалах/thread-locals без явного контракта",
      "всегда при любом contextvars",
      "только в C",
      "никогда"
    ],
    "answer": 0,
    "explain": "Неявный «текущий пользователь» усложняет тесты и рассуждения. Contextvars уместны осознанно.",
    "kind": "single",
    "id": "m713",
    "fixed": true,
    "topic": "DI",
    "group": "Веб и API"
  },
  {
    "q": "Для чего subprocess.DEVNULL?",
    "options": [
      "подавить stdout/stderr (как /dev/null)",
      "обязательный pipe",
      "интерактивный TTY",
      "файл логов с ротацией"
    ],
    "answer": 0,
    "explain": "stdout=DEVNULL — не копим вывод, не видим его.",
    "kind": "single",
    "id": "m714",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает heapq.nsmallest?",
    "options": [
      "возвращает k наименьших элементов",
      "строит max-heap",
      "сортирует только уникальные",
      "удаляет минимум из list in-place всегда"
    ],
    "answer": 0,
    "explain": "Эффективнее полной сортировки при малом k. Есть nlargest.",
    "kind": "single",
    "id": "m715",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 10.",
    "kind": "single",
    "code": "if (x := 10):\n    print(x)\nelse:\n    print('no')",
    "id": "m716",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое constructor injection?",
    "options": [
      "зависимости передаются через __init__",
      "поиск сервиса в глобальном registry внутри метода",
      "только setter injection",
      "import внутри функции всегда"
    ],
    "answer": 0,
    "explain": "Явные аргументы конструктора — самый прямой и тестируемый вид DI.",
    "kind": "single",
    "id": "m717",
    "fixed": true,
    "topic": "DI",
    "group": "Веб и API"
  },
  {
    "q": "Что json не сериализует напрямую?",
    "options": [
      "set, bytes, произвольные объекты без default=",
      "dict и list",
      "str и int",
      "bool и None"
    ],
    "answer": 0,
    "explain": "Нужен default= callable или заранее привести к JSON-типам.",
    "kind": "single",
    "id": "m718",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m719",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает dataclasses.replace(obj, **changes)?",
    "options": [
      "возвращает новый объект с заменами полей",
      "меняет obj in-place",
      "удаляет dataclass",
      "только для frozen=False запрещён"
    ],
    "answer": 0,
    "explain": "Особенно полезно с frozen=True — «копия с правками».",
    "kind": "single",
    "id": "m720",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Вокруг чего строится FastAPI?",
    "options": [
      "type hints + ASGI (Pydantic/Starlette)",
      "только sync WSGI без типов",
      "GUI Tkinter",
      "multiprocessing Pool"
    ],
    "answer": 0,
    "explain": "Аннотации → валидация/OpenAPI. ASGI — async-сервер.",
    "kind": "single",
    "id": "m721",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
    "q": "Что делает re.IGNORECASE?",
    "options": [
      "делает поиск без учёта регистра (флаг i)",
      "включает DOTALL",
      "отключает Unicode",
      "только ASCII"
    ],
    "answer": 0,
    "explain": "re.I / re.IGNORECASE. Можно inline (?i).",
    "kind": "single",
    "id": "m722",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "16",
      "4",
      "8",
      "ошибка"
    ],
    "answer": 0,
    "explain": "itertools строит комбинаторный итератор; len(...) здесь 16.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=4))))",
    "id": "m723",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое KW_ONLY в dataclass?",
    "options": [
      "поля после маркера — только keyword-only в __init__",
      "запрет kwargs",
      "только ClassVar",
      "удаление полей"
    ],
    "answer": 0,
    "explain": "dataclasses.KW_ONLY (3.10+): удобно смешивать позиционные и kw-only поля.",
    "kind": "single",
    "id": "m724",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m725",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "\"hi\"",
      "hi",
      "dict",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.dumps строки даёт JSON-строку с кавычками \"hi\".",
    "kind": "single",
    "code": "import json\nprint(json.dumps('hi'))",
    "id": "m726",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что хранит lru_cache(maxsize=None)?",
    "options": [
      "неограниченный кэш (осторожно с RAM)",
      "ровно 128 элементов",
      "ничего",
      "только ошибки"
    ],
    "answer": 0,
    "explain": "Безлимит растёт с уникальными аргументами. Для чистой мемоизации иногда cache().",
    "kind": "single",
    "id": "m727",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Чем ограничен @runtime_checkable Protocol?",
    "options": [
      "isinstance проверяет наличие методов, не глубокие сигнатуры",
      "полной проверкой типов аргументов в runtime",
      "только статическим checker без runtime",
      "запретом isinstance"
    ],
    "answer": 0,
    "explain": "runtime_checkable — поверхностно. Для строгости — type checker.",
    "kind": "single",
    "id": "m728",
    "fixed": true,
    "topic": "protocols",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что обычно значит HTTP 403?",
    "options": [
      "Forbidden — доступ запрещён",
      "Unauthorized (это ближе к 401)",
      "Not Found",
      "OK"
    ],
    "answer": 0,
    "explain": "403: личность известна (или нет смысла аутентифицировать), но права нет. 401 — «представься».",
    "kind": "single",
    "id": "m729",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'a'",
      "'A'",
      "None",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: 'a'.",
    "kind": "single",
    "code": "import re\nm = re.search('[aeiou]', 'stack')\nprint(None if m is None else m.group())",
    "id": "m730",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает itertools.chain?",
    "options": [
      "лениво склеивает несколько итерируемых в один поток",
      "создаёт декартово произведение",
      "сортирует",
      "удаляет дубликаты"
    ],
    "answer": 0,
    "explain": "chain(a,b,c) — как последовательный for. chain.from_iterable для списка списков.",
    "kind": "single",
    "id": "m731",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое enum.auto()?",
    "options": [
      "автоматическая подстановка значений членов Enum",
      "случайное значение каждый раз",
      "только строки",
      "запрет Flag"
    ],
    "answer": 0,
    "explain": "auto() даёт 1,2,3… (или по правилам кастомного _generate_next_value_).",
    "kind": "single",
    "id": "m732",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Зачем Depends() в FastAPI?",
    "options": [
      "внедрение зависимостей в эндпоинты",
      "SQL migration",
      "gzip middleware",
      "генерация JWT ключа"
    ],
    "answer": 0,
    "explain": "Общие ресурсы (сессия, user) объявляешь один раз и переиспользуешь.",
    "kind": "single",
    "id": "m733",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
    "q": "Что делает struct.iter_unpack?",
    "options": [
      "лениво распаковывает буфер кусками по format",
      "только один unpack всего файла в tuple",
      "пакует в JSON",
      "сжимает"
    ],
    "answer": 0,
    "explain": "Удобно читать бинарный поток записей фиксированного размера.",
    "kind": "single",
    "id": "m734",
    "fixed": true,
    "topic": "struct",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое collections.UserList?",
    "options": [
      "обёртка-база для кастомного list-like API",
      "быстрее list всегда",
      "deque",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Наследование от list исторически кавернозно; UserList.data — данные.",
    "kind": "single",
    "id": "m735",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает dataclasses.asdict(obj)?",
    "options": [
      "рекурсивно превращает dataclass в dict",
      "меняет obj in-place в dict",
      "только JSON string",
      "удаляет вложенность"
    ],
    "answer": 0,
    "explain": "Вложенные dataclass/list/tuple тоже обходятся. Для JSON потом dumps.",
    "kind": "single",
    "id": "m736",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает session.rollback в SQLAlchemy?",
    "options": [
      "отменяет текущую транзакцию",
      "коммитит",
      "удаляет engine",
      "создаёт миграцию"
    ],
    "answer": 0,
    "explain": "После ошибки или отмены — rollback, иначе сессия в плохом состоянии.",
    "kind": "single",
    "id": "m737",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Shallow: внутренний list общий между a и b.",
    "kind": "single",
    "code": "import copy\na = [[1, 2, 3]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m738",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Чему эквивалентно partial(f, 1)(2)?",
    "options": [
      "f(1, 2)",
      "f(2, 1)",
      "f(1)",
      "f()"
    ],
    "answer": 0,
    "explain": "partial фиксирует ведущие позиционные аргументы.",
    "kind": "single",
    "id": "m739",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m740",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое APIRouter в FastAPI?",
    "options": [
      "модульные группы маршрутов, подключаемые к приложению",
      "ORM router",
      "Celery beat",
      "WSGI server"
    ],
    "answer": 0,
    "explain": "Дроби API по модулям: users.router, include_router с prefix/tags.",
    "kind": "single",
    "id": "m741",
    "fixed": true,
    "topic": "FastAPI",
    "group": "Веб и API"
  },
  {
    "q": "Что делает re.DOTALL?",
    "options": [
      "точка `.` совпадает и с переводом строки",
      "игнорирует регистр",
      "только ASCII",
      "отключает группы"
    ],
    "answer": 0,
    "explain": "По умолчанию `.` не ест `\\n`. DOTALL/S — ест.",
    "kind": "single",
    "id": "m742",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m743",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "many",
      "one",
      "none",
      "ошибка"
    ],
    "answer": 0,
    "explain": "match/case попадает в ветку many.",
    "kind": "single",
    "code": "x = [1, 2, 3]\nmatch x:\n    case []:\n        print('empty')\n    case [_]:\n        print('single')\n    case [_, _]:\n        print('pair')\n    case _:\n        print('many')",
    "id": "m744",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m745",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что получится?",
    "options": [
      "Path('a/b') или a\\b",
      "ошибка",
      "None",
      "list"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: Path('a/b') или a\\b.",
    "kind": "single",
    "code": "from pathlib import Path\nprint(Path('a') / 'b')",
    "id": "m746",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает deque.rotate(4) на 7 элементах?",
    "options": [
      "циклический сдвиг на 4 вправо (отриц. — влево)",
      "удаляет 4 элемента",
      "сортирует",
      "оставляет без изменений"
    ],
    "answer": 0,
    "explain": "rotate переносит элементы кольцом.",
    "kind": "single",
    "id": "m747",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "one",
      "two",
      "many",
      "ошибка"
    ],
    "answer": 0,
    "explain": "match выбирает ветку one.",
    "kind": "single",
    "code": "x = 1\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m748",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m749",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Что делает pkgutil.iter_modules?",
    "options": [
      "перечисляет модули/пакеты в пути пакета",
      "устанавливает pip-пакеты",
      "компилирует .pyc",
      "удаляет __init__.py"
    ],
    "answer": 0,
    "explain": "Удобно для плагинов: найти все подмодули пакета.",
    "kind": "single",
    "id": "m750",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Сколько результатов хранит lru_cache(maxsize=1)?",
    "options": [
      "до 1 результата (последний вызов)",
      "128",
      "безлимит",
      "0"
    ],
    "answer": 0,
    "explain": "Любой новый уникальный аргумент вытесняет предыдущий.",
    "kind": "single",
    "id": "m751",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое параметр a в def f(*, a)?",
    "options": [
      "keyword-only",
      "positional-only",
      "*args",
      "**kwargs"
    ],
    "answer": 0,
    "explain": "После голого * все параметры только по имени: f(a=1).",
    "kind": "single",
    "id": "m752",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m753",
    "fixed": true,
    "topic": "SQL",
    "group": "Веб и API"
  },
  {
    "q": "Что показывает weakref.getweakrefcount?",
    "options": [
      "число слабых ссылок на объект",
      "сильный refcount",
      "размер объекта",
      "поколение GC"
    ],
    "answer": 0,
    "explain": "Сколько WeakRef/прокси сейчас смотрят на объект.",
    "kind": "single",
    "id": "m754",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "7",
      "3",
      "4",
      "ошибка"
    ],
    "answer": 0,
    "explain": "reduce последовательно сворачивает последовательность бинарной функцией → 7.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [5, 1, 1]))",
    "id": "m755",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Куда не попадает InitVar как обычное поле?",
    "options": [
      "в хранимые поля экземпляра / обычный repr/eq набор полей",
      "в аргументы __init__",
      "в __post_init__",
      "никогда никуда не передаётся"
    ],
    "answer": 0,
    "explain": "InitVar только для инициализации; после конструктора как атрибут не живёт.",
    "kind": "single",
    "id": "m756",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m757",
    "fixed": true,
    "topic": "HTTP",
    "group": "Веб и API"
  },
  {
    "q": "Как задать endianness в struct format?",
    "options": [
      "< little-endian, > big-endian (есть и =, !)",
      "только через sys.byteorder без format",
      "endianness нельзя задать",
      "только UTF-8"
    ],
    "answer": 0,
    "explain": "Первый символ format задаёт порядок байт и выравнивание.",
    "kind": "single",
    "id": "m758",
    "fixed": true,
    "topic": "struct",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Чему равен functools.cache (3.9+)?",
    "options": [
      "lru_cache(maxsize=None) — безлимитный кэш",
      "lru_cache(maxsize=128)",
      "частичный partial",
      "weakref кэш"
    ],
    "answer": 0,
    "explain": "Синтаксический сахар для безлимитной мемоизации.",
    "kind": "single",
    "id": "m759",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает field(compare=False)?",
    "options": [
      "исключает поле из сравнений __eq__/order",
      "удаляет поле",
      "запрещает hash всего класса",
      "делает InitVar"
    ],
    "answer": 0,
    "explain": "Полезно для кэшей/служебных полей, которые не должны влиять на равенство.",
    "kind": "single",
    "id": "m760",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Чем injection лучше service locator?",
    "options": [
      "зависимости явнее и обычно тестируемее",
      "locator всегда быстрее",
      "разницы нет",
      "injection запрещён в Python"
    ],
    "answer": 0,
    "explain": "Service locator прячет зависимости внутри — сложнее видеть контракт. DI передаёт их снаружи.",
    "kind": "single",
    "id": "m761",
    "fixed": true,
    "topic": "DI",
    "group": "Веб и API"
  },
  {
    "q": "Чем json.loads отличается от json.load?",
    "options": [
      "loads — из str/bytes; load — из file-like",
      "разницы нет",
      "load только из URL",
      "loads только из Path"
    ],
    "answer": 0,
    "explain": "Аналогично dumps vs dump.",
    "kind": "single",
    "id": "m762",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m763",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Можно ли наследовать TypedDict?",
    "options": [
      "да — расширять/сужать ключи по правилам total/Required",
      "нет никогда",
      "только от dataclass",
      "только в runtime isinstance"
    ],
    "answer": 0,
    "explain": "Наследование TypedDict поддерживается; следи за total=False и переопределениями.",
    "kind": "single",
    "id": "m764",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает capture_output=True в run?",
    "options": [
      "собирает stdout и stderr в результат",
      "печатает на консоль принудительно",
      "включает shell",
      "игнорирует код возврата"
    ],
    "answer": 0,
    "explain": "См. CompletedProcess.stdout/stderr. Часто вместе с text=True.",
    "kind": "single",
    "id": "m765",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Опасность dict.fromkeys(['a','b'], [])?",
    "options": [
      "один и тот же list на все ключи",
      "ключи не создаются",
      "всегда deepcopy",
      "TypeError"
    ],
    "answer": 0,
    "explain": "Мутабельный value шарится. Нужны отдельные list на ключ.",
    "kind": "single",
    "id": "m766",
    "fixed": true,
    "topic": "dict",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "[1,1]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "default_factory=list даёт новый list на экземпляр; после append остаётся [1].",
    "kind": "single",
    "code": "from dataclasses import dataclass, field\n@dataclass\nclass A:\n    xs: list = field(default_factory=list)\na, b = A(), A()\na.xs.append(1)\nprint(b.xs)",
    "id": "m767",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m768",
    "fixed": true,
    "topic": "GC",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m769",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m770",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое (?=...) в regex?",
    "options": [
      "positive lookahead — проверка вперёд без захвата",
      "positive lookbehind",
      "именованная группа",
      "жадный квантификатор"
    ],
    "answer": 0,
    "explain": "(?=\\d) — дальше цифра, но в match она не входит. Есть (?!...), (?<=...), (?<!...).",
    "kind": "single",
    "id": "m771",
    "fixed": true,
    "topic": "регулярки",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое functools.cached_property?",
    "options": [
      "свойство, кэширующее результат на экземпляре после первого доступа",
      "LRU на функцию модуля",
      "classmethod кэш",
      "weakref property"
    ],
    "answer": 0,
    "explain": "Пишется в __dict__ экземпляра. Для async/мультипотока — нюансы.",
    "kind": "single",
    "id": "m772",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m773",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "None",
      "'a'",
      "''",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: None.",
    "kind": "single",
    "code": "import re\nm = re.search('^\\\\d+$', '42a')\nprint(None if m is None else m.group())",
    "id": "m774",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "24",
      "12",
      "6",
      "ошибка"
    ],
    "answer": 0,
    "explain": "reduce последовательно сворачивает последовательность бинарной функцией → 24.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a * b, [1, 2, 3, 4]))",
    "id": "m775",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делают Required/NotRequired в TypedDict?",
    "options": [
      "тонко задают обязательность отдельных ключей",
      "удаляют ключи в runtime",
      "валидируют JSON автоматически",
      "заменяют total="
    ],
    "answer": 0,
    "explain": "PEP 655: при total=False/True можно точечно пометить ключи.",
    "kind": "single",
    "id": "m776",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "copy.copy — поверхностная копия: контейнер новый, вложения общие. Здесь: True (shallow).",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m777",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое lru_cache(maxsize=None)?",
    "options": [
      "безлимитный кэш (смотри за памятью)",
      "кэш на 128",
      "отключённый кэш",
      "кэш только ошибок"
    ],
    "answer": 0,
    "explain": "Растёт неограниченно с уникальными вызовами.",
    "kind": "single",
    "id": "m778",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m779",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "42",
      "'42'",
      "None",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads числа даёт int 42.",
    "kind": "single",
    "code": "import json\nprint(json.dumps(42))",
    "id": "m780",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для чего lru_cache не подходит?",
    "options": [
      "для нехешируемых аргументов (list, dict)",
      "для int и str",
      "для tuple из hashable",
      "для frozenset"
    ],
    "answer": 0,
    "explain": "Ключ кэша строится из аргументов → нужны hashable. Иначе TypeError.",
    "kind": "single",
    "id": "m781",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает case [x, *rest] в match?",
    "options": [
      "матчит последовательность: первый элемент и хвост",
      "только словари",
      "синтаксическая ошибка",
      "только строки посимвольно без *"
    ],
    "answer": 0,
    "explain": "Sequence pattern с starred захватом остатка.",
    "kind": "single",
    "id": "m782",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
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
    "id": "m783",
    "fixed": true,
    "topic": "is",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "4",
      "3",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 4.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 8))",
    "id": "m784",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m785",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое object_hook в json.loads?",
    "options": [
      "постобработка каждого JSON-объекта (dict) при разборе",
      "сериализация в dumps",
      "сжатие",
      "сортировка ключей"
    ],
    "answer": 0,
    "explain": "Можно превращать dict в свои классы на лету.",
    "kind": "single",
    "id": "m786",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Сколько примерно ключей кэша у fib(5) с lru_cache?",
    "options": [
      "порядка 6 (0..5)",
      "1",
      "32 без повторов",
      "0"
    ],
    "answer": 0,
    "explain": "Каждое n от 0 до 5 один раз.",
    "kind": "single",
    "id": "m787",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Как вызвать f?",
    "options": [
      "f(a=1)",
      "f(1)",
      "ошибка",
      "никак"
    ],
    "answer": 0,
    "explain": "Выполнение кода даёт f(a=1). Разбери операции по строкам: присваивания, вызовы и то, что реально печатает print.",
    "kind": "single",
    "code": "def f(*, a):\n    return a",
    "id": "m788",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что собирает циклические ссылки в CPython?",
    "options": [
      "циклический GC модуля gc (поверх refcounting)",
      "только refcount без циклов",
      "только ОС swap",
      "pickle"
    ],
    "answer": 0,
    "explain": "refcount не разрывает циклы A↔B; за это отвечает generational GC.",
    "kind": "single",
    "id": "m789",
    "fixed": true,
    "topic": "GC",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('i', 4), ('s', 4)]",
      "{'m': 1, 'i': 4, 's': 4, 'p': 2}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('i', 4), ('s', 4)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('mississippi').most_common(2))",
    "id": "m790",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что значит case Point(x=0, y=0) при __match_args__?",
    "options": [
      "positional/keyword patterns по полям класса",
      "вызов конструктора Point",
      "только сравнение id",
      "ошибка без dataclass"
    ],
    "answer": 0,
    "explain": "Class pattern матчит тип и поля. __match_args__ задаёт позиционный порядок.",
    "kind": "single",
    "id": "m791",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает Path.home()?",
    "options": [
      "возвращает домашнюю директорию пользователя",
      "текущий cwd",
      "корень /",
      "temp dir"
    ],
    "answer": 0,
    "explain": "Кроссплатформенно через pathlib, не хардкодь /home/...",
    "kind": "single",
    "id": "m792",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает defaultdict(list)['k'].append(1)?",
    "options": [
      "создаёт list для 'k' фабрикой и делает append → [1]",
      "KeyError",
      "ничего",
      "создаёт dict"
    ],
    "answer": 0,
    "explain": "default_factory вызывается при отсутствии ключа.",
    "kind": "single",
    "id": "m793",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m794",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Зачем memoryview?",
    "options": [
      "срезы/переинтерпретация буфера без копирования байт",
      "ускорение str",
      "замена bytes полностью",
      "JSON парсер"
    ],
    "answer": 0,
    "explain": "Нулевое копирование кусков большого bytes/bytearray; cast меняет вид элементов.",
    "kind": "single",
    "id": "m795",
    "fixed": true,
    "topic": "memoryview",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает itertools.batched (3.12+)?",
    "options": [
      "режет итерируемое на чанки по n",
      "сортирует батчами",
      "параллелит CPU",
      "читает HTTP batch"
    ],
    "answer": 0,
    "explain": "batched('ABCDEF', 2) → AB CD EF. Раньше писали сами через islice.",
    "kind": "single",
    "id": "m796",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое case _:?",
    "options": [
      "wildcard / default ветка match",
      "захват имени _",
      "ошибка синтаксиса",
      "только для чисел"
    ],
    "answer": 0,
    "explain": "_ не связывает имя. Ставь последней веткой.",
    "kind": "single",
    "id": "m797",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Чем copy.copy отличается от deepcopy?",
    "options": [
      "shallow: новый верх, вложения общие; deep: полный граф",
      "разницы нет",
      "copy всегда глубже",
      "deepcopy только для int"
    ],
    "answer": 0,
    "explain": "Выбирай deep, когда вложенные mutable должны стать независимыми.",
    "kind": "single",
    "id": "m798",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "cached_property идеально thread-safe из коробки?",
    "options": [
      "нет — возможны гонки при первом вычислении в потоках",
      "да, полностью lock-free контракт",
      "да только на Windows",
      "кэш запрещён в потоках"
    ],
    "answer": 0,
    "explain": "Два потока могут оба начать считать. Для строгой безопасности — свои lock/разработка.",
    "kind": "single",
    "id": "m799",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "5",
      "0",
      "True",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → 5.",
    "kind": "single",
    "code": "if (x := 5):\n    print(x)\nelse:\n    print('no')",
    "id": "m800",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что значит @ в начале struct format?",
    "options": [
      "native size/alignment платформы",
      "всегда network big-endian",
      "UTF-16",
      "JSON"
    ],
    "answer": 0,
    "explain": "@ — native. = native order без alignment padding quirks; < > ! — явный endian.",
    "kind": "single",
    "id": "m801",
    "fixed": true,
    "topic": "struct",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "2",
      "1",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 2.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([2, 4, 6], 5))",
    "id": "m802",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m803",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что возвращает tempfile.gettempdir()?",
    "options": [
      "путь к каталогу временных файлов",
      "открытый файл",
      "UUID",
      "домашнюю папку"
    ],
    "answer": 0,
    "explain": "Учитывает TMPDIR/TEMP и платформу.",
    "kind": "single",
    "id": "m804",
    "fixed": true,
    "topic": "tempfile",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m805",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что даёт slots=True у dataclass (3.10+)?",
    "options": [
      "генерирует __slots__ для экземпляров",
      "запрещает методы",
      "включает ORM",
      "делает frozen"
    ],
    "answer": 0,
    "explain": "Экономия памяти/чуть быстрее attribute access; без __dict__ по умолчанию.",
    "kind": "single",
    "id": "m806",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает importlib.util.find_spec?",
    "options": [
      "ищет ModuleSpec модуля по имени",
      "устанавливает пакет",
      "удаляет из sys.modules",
      "компилирует C"
    ],
    "answer": 0,
    "explain": "Можно проверить существование модуля без полного import побочных эффектов (с оговорками).",
    "kind": "single",
    "id": "m807",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое functools.partialmethod?",
    "options": [
      "partial для методов (дескриптор на классе)",
      "замена partial для функций модуля",
      "async lock",
      "LRU кэш"
    ],
    "answer": 0,
    "explain": "Фиксирует аргументы метода так, чтобы дескриптор корректно работал на классе.",
    "kind": "single",
    "id": "m808",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m809",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает gc.get_referrers?",
    "options": [
      "возвращает объекты, которые ссылаются на данный",
      "считает refcount точно как getrefcount",
      "удаляет ссылки",
      "включает GC"
    ],
    "answer": 0,
    "explain": "Отладка утечек/циклов. Может быть медленно и «шумным».",
    "kind": "single",
    "id": "m810",
    "fixed": true,
    "topic": "GC",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m811",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Где := (walrus) ограничен?",
    "options": [
      "в ряде позиций синтаксиса (например, нюансы с лямбдами/выражениями без скобок)",
      "запрещён полностью в 3.11+",
      "только в async def",
      "только в class body всегда ок без ограничений"
    ],
    "answer": 0,
    "explain": "Не везде, где =. Часто нужны скобки. Цепочки := := запрещены.",
    "kind": "single",
    "id": "m812",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает Path.expanduser()?",
    "options": [
      "раскрывает ~ в домашний каталог",
      "раскрывает $VAR окружения (это expandvars)",
      "делает путь абсолютным всегда (это resolve)",
      "удаляет файл"
    ],
    "answer": 0,
    "explain": "~/docs → /Users/.../docs. Для env — os.path.expandvars.",
    "kind": "single",
    "id": "m813",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что будет у reduce без initializer на пустой последовательности?",
    "options": [
      "TypeError",
      "None",
      "0",
      "[]"
    ],
    "answer": 0,
    "explain": "Некуда взять начальное значение. Передай initializer или проверь пустоту.",
    "kind": "single",
    "id": "m814",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое list[int] в runtime (3.9+)?",
    "options": [
      "generic alias; isinstance(x, list[int]) ограничен/не то, что кажется",
      "runtime-валидатор элементов",
      "создаёт только int-списки",
      "синтаксическая ошибка"
    ],
    "answer": 0,
    "explain": "Аннотации для checker. В 3.9+ aliases есть как объекты, но не полноценная runtime-проверка элементов.",
    "kind": "single",
    "id": "m815",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает check=True в subprocess.run?",
    "options": [
      "бросит CalledProcessError при ненулевом коде возврата",
      "игнорирует код возврата",
      "включает shell",
      "таймаут"
    ],
    "answer": 0,
    "explain": "Без check=True нужно самому смотреть returncode.",
    "kind": "single",
    "id": "m816",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что хранит array.array('i')?",
    "options": [
      "signed int в компактном C-массиве",
      "произвольные Python-объекты",
      "только float",
      "строки Unicode"
    ],
    "answer": 0,
    "explain": "Типкод 'i' — signed int. Экономнее list[int] по памяти.",
    "kind": "single",
    "id": "m817",
    "fixed": true,
    "topic": "array",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "no",
      "yes",
      "5",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Морж := присваивает и сразу отдаёт значение в выражении → no.",
    "kind": "single",
    "code": "if (x := 0):\n    print(x)\nelse:\n    print('no')",
    "id": "m818",
    "fixed": true,
    "topic": "walrus",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Когда secrets лучше random?",
    "options": [
      "для токенов, паролей, криптографии",
      "для симуляций Монте-Карло всегда",
      "для shuffle колоды в тестах с seed",
      "random запрещён совсем"
    ],
    "answer": 0,
    "explain": "random — PRNG для игр/симуляций. secrets — OS entropy для безопасности.",
    "kind": "single",
    "id": "m819",
    "fixed": true,
    "topic": "secrets",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Зачем OrderedDict.move_to_end?",
    "options": [
      "явно двигать ключ в конец/начало (LRU-подобные структуры)",
      "сортировать значения",
      "удалять dict",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Обычный dict с 3.7 упорядочен, но move_to_end и equality-с-порядком — фичи OrderedDict.",
    "kind": "single",
    "id": "m820",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "other",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "match/case выбирает первую подходящую ветку. Здесь срабатывает случай → other.",
    "kind": "single",
    "code": "x = 99\nmatch x:\n    case 0:\n        print('zero')\n    case 1:\n        print('one')\n    case _:\n        print('other')",
    "id": "m821",
    "fixed": true,
    "topic": "match",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что делает memoryview.cast('I')?",
    "options": [
      "переинтерпретирует буфер как массив unsigned int",
      "копирует в list[int] всегда",
      "кодирует UTF-8",
      "сжимает"
    ],
    "answer": 0,
    "explain": "cast меняет формат элементов zero-copy (с требованиями выравнивания/размера).",
    "kind": "single",
    "id": "m822",
    "fixed": true,
    "topic": "memoryview",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что вернёт Counter('aab')['a']?",
    "options": [
      "2",
      "0",
      "3",
      "KeyError"
    ],
    "answer": 0,
    "explain": "Считает 'a' дважды. Отсутствующий ключ у Counter даёт 0, не KeyError.",
    "kind": "single",
    "id": "m823",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что даёт kw_only=True у dataclass (3.10+)?",
    "options": [
      "все поля только как keyword-only в __init__",
      "запрет полей",
      "только slots",
      "frozen"
    ],
    "answer": 0,
    "explain": "Вызов только Class(x=1, y=2), не Class(1,2) — если все поля kw-only.",
    "kind": "single",
    "id": "m824",
    "fixed": true,
    "topic": "dataclasses",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что такое (?P<name>…) в regex?",
    "options": [
      "именованная группа",
      "lookahead",
      "комментарий",
      "possessive quantifier"
    ],
    "answer": 0,
    "explain": "Доступ: match.group('name'). Также (?P=name) — backreference.",
    "kind": "single",
    "id": "m825",
    "fixed": true,
    "topic": "регулярки",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "4",
      "2",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "itertools строит комбинаторный итератор; len(...) здесь 4.",
    "kind": "single",
    "code": "from itertools import product\nprint(len(list(product([0, 1], repeat=2))))",
    "id": "m826",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m827",
    "fixed": true,
    "topic": "args",
    "group": "Typing и dataclasses"
  },
  {
    "q": "В чём риск shell=True в subprocess?",
    "options": [
      "инъекции команд через пользовательскую строку",
      "обязательное ускорение",
      "запрет PIPE",
      "только на Windows безопаснее"
    ],
    "answer": 0,
    "explain": "Передавай список аргументов без shell. shell=True — только для доверенных строк.",
    "kind": "single",
    "id": "m828",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[('x', 1), ('y', 1)]",
      "{'x': 1, 'y': 1, 'z': 1}",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Counter считает частоты; most_common даёт топ пар (элемент, счёт) → [('x', 1), ('y', 1)].",
    "kind": "single",
    "code": "from collections import Counter\nprint(Counter('xyz').most_common(2))",
    "id": "m829",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Как auto() выбирает значения?",
    "options": [
      "по правилам Enum/Flag (_generate_next_value_)",
      "случайно из os.urandom",
      "всегда 0",
      "только UUID"
    ],
    "answer": 0,
    "explain": "Можно переопределить генерацию в своём Enum.",
    "kind": "single",
    "id": "m830",
    "fixed": true,
    "topic": "enum",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "usr/bin/python",
      "usr\\bin\\python",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: usr/bin/python.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('usr', 'bin', 'python'))",
    "id": "m831",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "1",
      "9",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: 1.",
    "kind": "single",
    "code": "import heapq\nh = [5, 1, 3]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m832",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m833",
    "fixed": true,
    "topic": "typing",
    "group": "Typing и dataclasses"
  },
  {
    "q": "Что вернёт re.findall(r'\\d+', 'a12b3')?",
    "options": [
      "['12', '3']",
      "['1','2','3']",
      "['a12b3']",
      "[]"
    ],
    "answer": 0,
    "explain": "findall всех непересекающихся совпадений цифр.",
    "kind": "single",
    "id": "m834",
    "fixed": true,
    "topic": "регулярки",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что реализует heapq?",
    "options": [
      "бинарную min-кучу на list",
      "balanced BST",
      "hash table",
      "max-кучу по умолчанию без трюков"
    ],
    "answer": 0,
    "explain": "h[0] — минимум. Для max — инверсия ключей/отрицания.",
    "kind": "single",
    "id": "m835",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Зачем исторически __init__.py?",
    "options": [
      "делать каталог пакетом Python",
      "обязательный код main",
      "компиляция C",
      "только для namespace packages запрещён"
    ],
    "answer": 0,
    "explain": "С 3.3 есть namespace packages без файла, но __init__.py всё ещё обычен и полезен.",
    "kind": "single",
    "id": "m836",
    "fixed": true,
    "topic": "пакеты",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что возвращает itertools.pairwise (3.10+)?",
    "options": [
      "пары (a,b), (b,c), … подряд",
      "все комбинации C(n,2)",
      "zip длинного и короткого без overlap",
      "декартово произведение"
    ],
    "answer": 0,
    "explain": "Удобно для последовательных рёбер/разниц.",
    "kind": "single",
    "id": "m837",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает callback у weakref.ref?",
    "options": [
      "вызывается при смерти объекта",
      "при каждом чтении",
      "увеличивает refcount",
      "запрещает GC"
    ],
    "answer": 0,
    "explain": "Можно подчистить реестр. finalize — более удобный API для многих случаев.",
    "kind": "single",
    "id": "m838",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 3]",
      "[1, 3, 5]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [1, 3].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [5, 1, 3]))",
    "id": "m839",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "{\"x\": [1, 2]}",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "json.dumps сериализует Python-объект в JSON-строку → {\"x\": [1, 2]}.",
    "kind": "single",
    "code": "import json\nprint(json.dumps({'x': [1, 2]}))",
    "id": "m840",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для чего модуль bisect?",
    "options": [
      "бинарный поиск и вставка в отсортированный list",
      "построение heap",
      "хеш-таблицы",
      "парсинг CSV"
    ],
    "answer": 0,
    "explain": "O(log n) поиск позиции; сама вставка в list всё ещё O(n).",
    "kind": "single",
    "id": "m841",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
    "q": "Каким должен быть key= в sort?",
    "options": [
      "вызываемым; вызывается раз на элемент (decorate-sort-undecorate)",
      "строкой с именем поля всегда",
      "только lambda без исключений",
      "компаратором cmp как в Py2 обязательно"
    ],
    "answer": 0,
    "explain": "key(x) один раз → сортировка по ключам. cmp_to_key — мост из старого cmp.",
    "kind": "single",
    "id": "m842",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "из кэша, без print work",
      "снова work",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Выполнение кода даёт из кэша, без print work. Разбери операции по строкам: присваивания, вызовы и то, что реально печатает print.",
    "kind": "single",
    "code": "from functools import lru_cache\n@lru_cache\ndef heavy(x):\n    print('work')\n    return x*x\nheavy(2)\nheavy(2)",
    "id": "m843",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.JSON'",
      "'B.JSON'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.JSON'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('B.JSON').suffix)",
    "id": "m844",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "3",
      "0",
      "1",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 3.",
    "kind": "single",
    "code": "from itertools import combinations\nprint(len(list(combinations(range(3), 2))))",
    "id": "m845",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "tmp/x",
      "tmp\\x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: tmp/x.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('tmp', 'x'))",
    "id": "m846",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "6",
      "3",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "functools/выражение даёт 6.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [2, 2, 2]))",
    "id": "m847",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Когда circular import — проблема?",
    "options": [
      "когда модули импортируют друг друга на top-level и используют атрибуты при загрузке",
      "всегда при любом import внутри функции",
      "только в Jupyter",
      "никогда в 3.x"
    ],
    "answer": 0,
    "explain": "Частично инициализированный модуль → AttributeError. Лечи отложенным import/рефакторингом.",
    "kind": "single",
    "id": "m848",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Нужен ли OrderedDict после 3.7?",
    "options": [
      "иногда да — move_to_end, equality с учётом порядка, явный контракт",
      "нет, полностью мёртв",
      "да, иначе dict неупорядочен",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "dict сохраняет порядок вставки, но API OrderedDict шире.",
    "kind": "single",
    "id": "m849",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m850",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает partial(f, 1)?",
    "options": [
      "новую callable с зафиксированным первым аргументом",
      "вызывает f сразу",
      "кэширует f",
      "удаляет f"
    ],
    "answer": 0,
    "explain": "partial(f, 1)(2,3) → f(1,2,3).",
    "kind": "single",
    "id": "m851",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.txt'",
      "'a.txt'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.txt'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('a.txt').suffix)",
    "id": "m852",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код (минимум на [0])?",
    "options": [
      "5",
      "1",
      "9",
      "ошибка"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: 5.",
    "kind": "single",
    "code": "import heapq\nh = [10, 20, 5, 30]\nheapq.heapify(h)\nprint(h[0])",
    "id": "m853",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что позволяет zipimport?",
    "options": [
      "импортировать модули прямо из .zip архива",
      "ставить wheels через pip",
      "сжимать .pyc",
      "импорт только C-расширений"
    ],
    "answer": 0,
    "explain": "sys.path может содержать zip; zipimport загружает оттуда .py/.pyc.",
    "kind": "single",
    "id": "m854",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "0",
      "1",
      "2",
      "ошибка"
    ],
    "answer": 0,
    "explain": "bisect_left/right — индекс вставки в отсортированную последовательность → 0.",
    "kind": "single",
    "code": "import bisect\nprint(bisect.bisect_left([1, 3, 5, 7], 0))",
    "id": "m855",
    "fixed": true,
    "topic": "bisect",
    "group": "Collections и itertools"
  },
  {
    "q": "Для чего полезен pickle protocol=5?",
    "options": [
      "out-of-band буферы для больших bytes (меньше копий)",
      "только человекочитаемый формат",
      "JSON совместимость",
      "шифрование"
    ],
    "answer": 0,
    "explain": "PEP 574: крупные бинарные куски можно передавать отдельно от pickle-потока.",
    "kind": "single",
    "id": "m856",
    "fixed": true,
    "topic": "pickle",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1, 4]",
      "[1, 4, 4]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [1, 4].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [4, 4, 1]))",
    "id": "m857",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Для чего определяют __deepcopy__?",
    "options": [
      "кастомная логика глубокого копирования объекта",
      "запрет copy",
      "только shallow",
      "сериализация JSON"
    ],
    "answer": 0,
    "explain": "deepcopy вызывает __deepcopy__(memo), если он есть.",
    "kind": "single",
    "id": "m858",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "10",
      "5",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "functools/выражение даёт 10.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [1, 2, 3, 4]))",
    "id": "m859",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Как часто лечат circular import?",
    "options": [
      "локальным import внутри функции / разнесением общего кода",
      "удалением всех модулей",
      "увеличением sys.path",
      "shell=True"
    ],
    "answer": 0,
    "explain": "Вынеси общее в третий модуль или импортируй поздно, когда цикл не нужен на load.",
    "kind": "single",
    "id": "m860",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Чем удобен namedtuple?",
    "options": [
      "immutable + доступ по имени поля и индексу",
      "мутабельность как list",
      "наследование как dataclass без ограничений",
      "JSON автоматом"
    ],
    "answer": 0,
    "explain": "Лёгкие записи-кортежи. Для методов/defaults чаще NamedTuple typing или dataclass.",
    "kind": "single",
    "id": "m861",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m862",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что дают heappush / heappop?",
    "options": [
      "операции min-кучи",
      "max-кучу по умолчанию",
      "сортировку ключей dict",
      "бинарный поиск"
    ],
    "answer": 0,
    "explain": "push сохраняет инвариант кучи; pop забирает минимум.",
    "kind": "single",
    "id": "m863",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что такое TemporaryDirectory?",
    "options": [
      "контекстный менеджер: временный каталог с автоочисткой",
      "вечный каталог в /",
      "только файл без каталога",
      "RAM-диск ОС"
    ],
    "answer": 0,
    "explain": "with TemporaryDirectory() as d: ... — после выхода каталог удаляется.",
    "kind": "single",
    "id": "m864",
    "fixed": true,
    "topic": "tempfile",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[(5, 3)]",
      "[(5, 1), (5, 1), (5, 1)]",
      "[]",
      "TypeError"
    ],
    "answer": 0,
    "explain": "groupby склеивает только подряд идущие равные ключи. Три пятёрки подряд → одна группа длины 3.",
    "kind": "single",
    "code": "from itertools import groupby\nprint([(k, len(list(g))) for k, g in groupby([5, 5, 5])])",
    "id": "m865",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает Popen.communicate?",
    "options": [
      "отправляет input, читает stdout/stderr и ждёт завершения",
      "только kill",
      "меняет cwd",
      "включает shell"
    ],
    "answer": 0,
    "explain": "Избегает дедлоков PIPE. Возвращает (stdout, stderr).",
    "kind": "single",
    "id": "m866",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что делает heapq.heapify?",
    "options": [
      "in-place линейно строит кучу из list",
      "сортирует полностью O(n log n) всегда как единственный смысл",
      "создаёт новый list обязательно",
      "строит BST"
    ],
    "answer": 0,
    "explain": "heapify O(n) vs n раз heappush O(n log n).",
    "kind": "single",
    "id": "m867",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что хранит WeakValueDictionary?",
    "options": [
      "сильные ключи и слабые ссылки на значения",
      "слабые ключи и сильные значения (это WeakKeyDictionary)",
      "только int",
      "сильные всё"
    ],
    "answer": 0,
    "explain": "Когда значение уничтожено GC — запись пропадает.",
    "kind": "single",
    "id": "m868",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Для чего полезен ChainMap?",
    "options": [
      "слои переопределений нескольких mapping (lookup по цепочке)",
      "глубокое слияние dict в один новый всегда",
      "сортировка ключей",
      "JSON Schema"
    ],
    "answer": 0,
    "explain": "Поиск идёт от первого mapping к следующим. Запись по умолчанию — в первый.",
    "kind": "single",
    "id": "m869",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что даёт Path('a') / 'b'?",
    "options": [
      "Path('a/b') (с учётом OS-сепаратора)",
      "строку 'a/b' всегда без Path",
      "ошибку типов",
      "Path('ab')"
    ],
    "answer": 0,
    "explain": "Оператор / у Path склеивает части пути.",
    "kind": "single",
    "id": "m870",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m871",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "[1, 2]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "append добавляет элемент в конец (in-place, возвращает None). Список становится [1].",
    "kind": "single",
    "code": "import copy\na = [[]]\nb = copy.copy(a)\na[0].append(1)\nprint(b[0])",
    "id": "m872",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m873",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m874",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое namedtuple?",
    "options": [
      "легковесный immutable тип с именами полей",
      "мутабельный dict",
      "ORM модель",
      "async queue"
    ],
    "answer": 0,
    "explain": "collections.namedtuple / typing.NamedTuple — кортеж с .field доступом.",
    "kind": "single",
    "id": "m875",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что не делает weakref.proxy?",
    "options": [
      "не удерживает объект сильной ссылкой (как обычная переменная)",
      "не позволяет вызывать методы пока объект жив",
      "не существует в stdlib",
      "увеличивает refcount как сильная ссылка"
    ],
    "answer": 0,
    "explain": "proxy ведёт себя как объект, но слабо; после смерти — ReferenceError.",
    "kind": "single",
    "id": "m876",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m877",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "dict",
      "list",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads объекта → dict.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"a\": 1}')).__name__)",
    "id": "m878",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m879",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.gz'",
      "'archive.tar.gz'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.gz'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('archive.tar.gz').suffix)",
    "id": "m880",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "12",
      "6",
      "0",
      "ошибка"
    ],
    "answer": 0,
    "explain": "functools/выражение даёт 12.",
    "kind": "single",
    "code": "from functools import reduce\nprint(reduce(lambda a, b: a + b, [10, 2]))",
    "id": "m881",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "True (shallow)",
      "False (deep)",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "copy.copy — поверхностная копия: контейнер новый, вложения общие. Здесь: True (shallow).",
    "kind": "single",
    "code": "import copy\na = [[1], [2]]\nb = copy.copy(a)\nprint(a[0] is b[0])",
    "id": "m882",
    "fixed": true,
    "topic": "copy",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "12",
      "6",
      "3",
      "ошибка"
    ],
    "answer": 0,
    "explain": "range(start, stop[, step]) не включает stop. list(range(...)) → 12.",
    "kind": "single",
    "code": "from itertools import permutations\nprint(len(list(permutations(range(4), 2))))",
    "id": "m883",
    "fixed": true,
    "topic": "itertools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что делает ensure_ascii=False в dumps?",
    "options": [
      "оставляет Unicode-символы как есть, не \\uXXXX",
      "запрещает non-ASCII",
      "включает UTF-16",
      "сортирует ключи"
    ],
    "answer": 0,
    "explain": "Для читаемых русских текстов в JSON часто False + encoding utf-8 при записи.",
    "kind": "single",
    "id": "m884",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[5, 10]",
      "[5, 10, 20]",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "После heapify минимум в корне (h[0]). Здесь: [5, 10].",
    "kind": "single",
    "code": "import heapq\nprint(heapq.nsmallest(2, [10, 20, 5, 30]))",
    "id": "m885",
    "fixed": true,
    "topic": "heapq",
    "group": "Collections и itertools"
  },
  {
    "q": "Что даёт text=True в subprocess?",
    "options": [
      "stdout/stderr как str (декодирование), не bytes",
      "обязательный TTY",
      "shell=True",
      "UTF-32"
    ],
    "answer": 0,
    "explain": "Раньше universal_newlines=True. encoding= можно задать явно.",
    "kind": "single",
    "id": "m886",
    "fixed": true,
    "topic": "subprocess",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Куда ChainMap пишет по умолчанию?",
    "options": [
      "в первый mapping",
      "во все сразу",
      "только в последний",
      "создаёт новый dict всегда"
    ],
    "answer": 0,
    "explain": "cm['k']=v обновляет maps[0]. Lookup идёт по всем.",
    "kind": "single",
    "id": "m887",
    "fixed": true,
    "topic": "collections",
    "group": "Collections и itertools"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "etc/passwd",
      "etc\\passwd",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: etc/passwd.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('etc', 'passwd'))",
    "id": "m888",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое singledispatchmethod?",
    "options": [
      "диспетчеризация методов экземпляра по типу аргумента",
      "только для module-level функций",
      "LRU кэш метода",
      "partialmethod"
    ],
    "answer": 0,
    "explain": "Как singledispatch, но корректно работает как метод (self отдельно).",
    "kind": "single",
    "id": "m889",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
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
    "id": "m890",
    "fixed": true,
    "topic": "hashlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Сколько примерно ключей кэша у fib(2) с lru_cache?",
    "options": [
      "порядка 3 (0..2)",
      "1",
      "4 без повторов степеней 2",
      "0"
    ],
    "answer": 0,
    "explain": "Кэшируются fib(0), fib(1), fib(2).",
    "kind": "single",
    "id": "m891",
    "fixed": true,
    "topic": "functools",
    "group": "Collections и itertools"
  },
  {
    "q": "Что связывают encode/decode?",
    "options": [
      "str ↔ bytes через кодировку",
      "int ↔ float",
      "list ↔ tuple",
      "JSON ↔ pickle"
    ],
    "answer": 0,
    "explain": "s.encode('utf-8') → bytes; b.decode('utf-8') → str.",
    "kind": "single",
    "id": "m892",
    "fixed": true,
    "topic": "bytes",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что будет с set?",
    "options": [
      "TypeError без default",
      "станет list",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Множество хранит уникальные элементы. Результат: TypeError без default.",
    "kind": "single",
    "code": "import json\njson.dumps({1, 2})",
    "id": "m893",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m894",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "list",
      "dict",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "json.loads массива → list.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('[1, 2, 3]')).__name__)",
    "id": "m895",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "home/user/docs",
      "home/user/docs/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: home/user/docs.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('home', 'user', 'docs'))",
    "id": "m896",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Какие ключи у WeakKeyDictionary?",
    "options": [
      "слабые; объекты должны быть hashable и weakly referenceable",
      "только str",
      "сильные навсегда",
      "только int"
    ],
    "answer": 0,
    "explain": "Когда ключ собран GC — запись исчезает. Не все объекты поддерживают weakref.",
    "kind": "single",
    "id": "m897",
    "fixed": true,
    "topic": "weakref",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "var/log/app.log",
      "var/log/app.log/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: var/log/app.log.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'app.log'))",
    "id": "m898",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое \\b в regex?",
    "options": [
      "граница слова (word boundary)",
      "backspace символ всегда",
      "начало строки только",
      "любая буква"
    ],
    "answer": 0,
    "explain": "Граница между \\w и \\W. Не путать с \\B (не граница).",
    "kind": "single",
    "id": "m899",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.PNG'",
      "'photo.PNG'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.PNG'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('photo.PNG').suffix)",
    "id": "m900",
    "fixed": true,
    "topic": "pathlib",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Зачем default= в json.dumps?",
    "options": [
      "функция сериализации типов, которые JSON не знает",
      "значение по умолчанию для loads",
      "indent",
      "сортировка"
    ],
    "answer": 0,
    "explain": "default=str или свой encoder для datetime/set/…",
    "kind": "single",
    "id": "m901",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
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
    "id": "m902",
    "fixed": true,
    "topic": "performance",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что даёт sort(key=str.lower)?",
    "options": [
      "сортировку без учёта регистра",
      "удаление строк",
      "обязательный locale collation всегда",
      "reverse=True"
    ],
    "answer": 0,
    "explain": "Ключ — нижний регистр; исходные строки не меняются.",
    "kind": "single",
    "id": "m903",
    "fixed": true,
    "topic": "sort",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'12'",
      "'1'",
      "12",
      "None"
    ],
    "answer": 0,
    "explain": "Регулярка ищет совпадение по паттерну. Результат группы/поиска: '12'.",
    "kind": "single",
    "code": "import re\nm = re.search('\\\\d+', 'ab12cd')\nprint(None if m is None else m.group())",
    "id": "m904",
    "fixed": true,
    "topic": "regex",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое SpooledTemporaryFile?",
    "options": [
      "сначала держит данные в RAM, при росте — на диск",
      "только диск сразу",
      "только RAM без спула",
      "сетевой сокет"
    ],
    "answer": 0,
    "explain": "max_size порог переключения. Удобно для загрузок неизвестного размера.",
    "kind": "single",
    "id": "m905",
    "fixed": true,
    "topic": "tempfile",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что выведет код?",
    "options": [
      "dict",
      "list",
      "str",
      "ошибка"
    ],
    "answer": 0,
    "explain": "разбор JSON-объекта → dict.",
    "kind": "single",
    "code": "import json\nprint(type(json.loads('{\"ok\": true, \"n\": null}')).__name__)",
    "id": "m906",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Зачем subclass JSONEncoder?",
    "options": [
      "кастомный default для своих типов",
      "ускорение C парсера",
      "сжатие",
      "валидация schema"
    ],
    "answer": 0,
    "explain": "Переопредели default() и передай cls=MyEncoder в dumps.",
    "kind": "single",
    "id": "m907",
    "fixed": true,
    "topic": "JSON",
    "group": "Stdlib и производительность"
  },
  {
    "q": "Что такое MetaPathFinder?",
    "options": [
      "искатель модулей в sys.meta_path",
      "парсер HTML",
      "установщик pip",
      "тип Path"
    ],
    "answer": 0,
    "explain": "Импорт сначала спрашивает finders на meta_path (и path_hooks). Кастомный finder — плагины импорта.",
    "kind": "single",
    "id": "m908",
    "fixed": true,
    "topic": "import",
    "group": "Stdlib и производительность"
  }
];
