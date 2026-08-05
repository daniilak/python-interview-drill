// @meta topic=functools group=Collections и itertools
// middle · 40 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
  }
);
