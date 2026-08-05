// @meta topic=память group=CPython и память
// senior · 24 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "За счёт чего __slots__ экономит память?",
    "options": [
      "отказ от per-instance __dict__ — фиксированные слоты вместо хеш-таблицы",
      "сжатие байткода класса",
      "полное отключение сборщика мусора",
      "хранение атрибутов только в class __dict__"
    ],
    "answer": 0,
    "explain": "Без __dict__ у каждого экземпляра нет отдельной хеш-таблицы атрибутов — только массив указателей на слоты. Выигрыш на миллионах мелких объектов, цена — нельзя добавить произвольный атрибут.",
    "kind": "single",
    "id": "s37",
    "fixed": true
  },
  {
    "q": "Что возвращает gc.get_stats()?",
    "options": [
      "статистику сборок мусора по поколениям",
      "снимок tracemalloc по файлам",
      "дизассемблированный байткод",
      "список всех живых объектов"
    ],
    "answer": 0,
    "explain": "Для каждого generation — collections, collected, uncollectable. Полезно диагностировать «слишком частый GC» или рост uncollectable (утечки с __del__).",
    "kind": "single",
    "id": "s86",
    "fixed": true
  },
  {
    "q": "Что минимум содержит заголовок PyObject в CPython?",
    "options": [
      "счётчик ссылок и указатель на PyTypeObject",
      "только полезную нагрузку без метаданных",
      "билет на GIL",
      "JSON-схему атрибутов"
    ],
    "answer": 0,
    "explain": "Каждый объект: ob_refcnt + ob_type. Далее — поля конкретного типа (PyListObject, PyDictObject). Понимание layout нужно для C-API и отладки памяти.",
    "kind": "single",
    "id": "s118",
    "fixed": true
  },
  {
    "q": "Кто собирает цикл ссылок `a.x = b; b.x = a`?",
    "options": [
      "generational GC циклического сборщика, не только refcount",
      "только refcount — сразу при обнулении внешних ссылок",
      "циклы в CPython никогда не освобождаются",
      "только weakref.finalize"
    ],
    "answer": 0,
    "explain": "Refcount не видит циклы. gc.collect() обходит граф и помечает недостижимые циклы; поколения уменьшают частоту полного сканирования.",
    "kind": "single",
    "id": "s181",
    "fixed": true
  },
  {
    "q": "Что дают allocator hooks через PYTHONMALLOC?",
    "options": [
      "отладку и профилирование аллокаций pymalloc/system malloc",
      "автоматическое исправление утечек памяти",
      "замену GC на reference counting only",
      "шифрование heap в runtime"
    ],
    "answer": 0,
    "explain": "PYTHONMALLOC=debug, tracemalloc и кастомные хуки помогают ловить buffer overrun, double free и горячие места аллокаций.",
    "kind": "single",
    "id": "s239",
    "fixed": true
  },
  {
    "q": "Цикл ссылок A→B→A кто собирает?",
    "options": [
      "generational cyclic GC после того как внешние ссылки обнулены",
      "refcount немедленно при создании цикла",
      "циклы не собираются никогда",
      "только weakref.proxy"
    ],
    "answer": 0,
    "explain": "Пока на A/B есть внешние ссылки — живы. Когда граф изолирован, gc находит unreachable cycle.",
    "kind": "single",
    "id": "s267",
    "fixed": true
  },
  {
    "q": "Порог obmalloc vs system malloc в CPython?",
    "options": [
      "мелкие объекты через pymalloc arenas; крупные — system malloc",
      "всё только через mmap",
      "только system malloc без пулов",
      "зависит от GIL, не от размера"
    ],
    "answer": 0,
    "explain": "pymalloc оптимизирует мелкие alloc Python-объектов. Большие блоки — напрямую malloc. Влияет на фрагментацию и профилирование.",
    "kind": "single",
    "id": "s309",
    "fixed": true
  },
  {
    "q": "Выбери все верные про память в CPython?",
    "options": [
      "циклические ссылки собирает cyclic GC, не только refcount",
      "__slots__ убирает __dict__ у экземпляров (экономия)",
      "weakref не увеличивает refcount целевого объекта",
      "del x всегда немедленно вызывает __del__ и освобождает память ОС"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Del уменьшает refcount; __del__ и возврат памяти ОС — не гарантия «сразу». Циклы — дело gc модуля. Верными здесь будут пункты: «циклические ссылки собирает cyclic GC, не только refcount»; «__slots__ убирает __dict__ у экземпляров (экономия)»; «weakref не увеличивает refcount целевого объекта».",
    "kind": "multi",
    "tags": [
      "memory",
      "gc"
    ],
    "difficulty": "senior",
    "id": "s322",
    "fixed": true
  },
  {
    "q": "Что вернёт gc.get_threshold()[3] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Результат выражения — частоту/пороги сбора поколений GC. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s348",
    "fixed": true
  },
  {
    "q": "Чем debug-сборки с assertions отличаются от release?",
    "options": [
      "другая производительность и иногда другое поведение из-за assert/проверок",
      "полностью идентичны release во всём",
      "всегда быстрее release",
      "в них отключён GC"
    ],
    "answer": 0,
    "explain": "Debug-сборки с assertions включают дополнительные проверки: перф ниже, а редкие ветки могут вести себя иначе. Сравнивай apples-to-apples — не мешай debug и release бенчмарки.",
    "kind": "single",
    "id": "s432",
    "fixed": true
  },
  {
    "q": "Что вернёт gc.get_threshold()[1] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Результат выражения — частоту/пороги сбора поколений GC. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s515",
    "fixed": true
  },
  {
    "q": "Что вернёт gc.get_threshold()[2] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Результат выражения — частоту/пороги сбора поколений GC. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s530",
    "fixed": true
  },
  {
    "q": "Когда объект переходит в следующее поколение GC?",
    "options": [
      "когда переживает цикл сборки мусора в текущем поколении",
      "сразу при создании попадает в поколение 2 (old)",
      "только если объявлен со slots=True",
      "никогда — поколения касаются только int"
    ],
    "answer": 0,
    "explain": "CPython GC имеет 3 поколения. Объект с живыми ссылками после collection в gen0 переходит в gen1, затем в gen2. Старые долгоживущие объекты собирают реже.",
    "kind": "single",
    "id": "s535",
    "fixed": true
  },
  {
    "q": "В чём разница: resident vs virtual memory?",
    "options": [
      "RSS — реально в RAM сейчас; VSIZE — зарезервированное адресное пространство",
      "это синонимы одной метрики в /proc и ps",
      "virtual memory учитывает только swap на диске",
      "resident memory не включает код интерпретатора CPython"
    ],
    "answer": 0,
    "explain": "VSIZE может быть большим из-за mmap и неиспользованных страниц. RSS — что реально занято физически. Для утечек смотрят рост RSS; VSIZE alone вводит в заблуждение.",
    "kind": "single",
    "id": "s545",
    "fixed": true
  },
  {
    "q": "Что происходит с shared pages после fork до первой записи?",
    "options": [
      "страницы разделяются (COW) и копируются только при записи",
      "весь адресный простор копируется сразу целиком",
      "память становится read-only навсегда",
      "GIL копирует объекты Python явно"
    ],
    "answer": 0,
    "explain": "После fork работает copy-on-write: страницы общие, пока кто-то не пишет. Первая запись — копия страницы. gc.freeze помогает уменьшить лишние записи в parent.",
    "kind": "single",
    "id": "s560",
    "fixed": true
  },
  {
    "q": "Что такое pymalloc в CPython?",
    "options": [
      "специализированный аллокатор мелких объектов интерпретатора",
      "единственный способ — всегда сырой OS malloc",
      "куча видеопамяти GPU",
      "файл подкачки ОС"
    ],
    "answer": 0,
    "explain": "Pymalloc обслуживает мелкие блоки (до ~512 байт) пулами/аренами — меньше накладных расходов, чем звать OS malloc на каждый объект. Крупные объекты идут в системный аллокатор.",
    "kind": "single",
    "id": "s565",
    "fixed": true
  },
  {
    "q": "Что вернёт gc.get_threshold()[0] влияет на?",
    "options": [
      "частоту/пороги сбора поколений GC",
      "GIL timeout",
      "TCP window",
      "pip cache"
    ],
    "answer": 0,
    "explain": "Результат выражения — частоту/пороги сбора поколений GC. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s575",
    "fixed": true
  },
  {
    "q": "Почему cyclic GC нужен, если есть refcount?",
    "options": [
      "циклы ссылок (A, а затем B, и далее A) держат refcount > 0 навсегда без сборщика циклов",
      "refcount не работает для int",
      "GC заменяет refcount полностью",
      "только для multiprocessing"
    ],
    "answer": 0,
    "explain": "CPython: refcount для большинства объектов + periodic cyclic GC для контейнеров с циклом. __del__ на объектах в цикле усложняет сборку (и может откладывать утилизацию). Gc.disable() не «ускоряет прод» магически — измеряй; иногда паузы GC важны latency-sensitive сервисам.",
    "kind": "single",
    "tags": [
      "memory",
      "gc"
    ],
    "difficulty": "senior",
    "id": "s630",
    "fixed": true
  },
  {
    "q": "Зачем нужен weakref.ref(obj)?",
    "options": [
      "ссылаться на объект без увеличения refcount — не мешает GC",
      "ускорить доступ к атрибутам в 2 раза",
      "заменить copy.deepcopy",
      "сделать объект thread-safe"
    ],
    "answer": 0,
    "explain": "Callback cache, observer без циклов. ref() возвращает None после сборки. weakref.WeakValueDictionary — кэш без утечки памяти.",
    "kind": "single",
    "id": "s671",
    "fixed": true
  },
  {
    "q": "Что такое cyclic GC поколения?",
    "options": [
      "gen0/1/2 — чем старше объект, тем реже полный scan циклов",
      "только одно поколение для всех объектов",
      "поколения относятся к asyncio Task",
      "gen2 собирается каждый alloc"
    ],
    "answer": 0,
    "explain": "Refcount не ловит циклы. cyclic GC порогами (get_threshold) решает, когда сканировать gen0→gen1→gen2. Долгоживущие циклы могут задержаться до gen2.",
    "kind": "single",
    "id": "s701",
    "fixed": true
  },
  {
    "q": "Что такое эксперименты с mimalloc и др. аллокаторами в CPython?",
    "options": [
      "альтернативные аллокаторы кучи ради скорости/фрагментации",
      "замена GC циклов",
      "только Windows heap API без выбора",
      "удаление pymalloc"
    ],
    "answer": 0,
    "explain": "Сборки/форки пробуют mimalloc и др. вместо/рядом с pymalloc — перф и фрагментация.",
    "kind": "single",
    "id": "s716",
    "fixed": true
  },
  {
    "q": "Что даёт memoryview / buffer protocol на практике?",
    "options": [
      "нулевое/дешёвое представление чужого буфера без лишнего копирования bytes",
      "всегда быстрее list для любых данных",
      "замену multiprocessing",
      "автоматическую сериализацию в JSON"
    ],
    "answer": 0,
    "explain": "Bytes/bytearray/array/numpy/socket — через buffer protocol. Memoryview позволяет срезать и читать без copy. Осторожно: underlying buffer не должен уехать (lifetime); для записи смотри readonly. Типичный win: парсинг бинарных протоколов, zero-copy пути в сетевых стеках.",
    "kind": "single",
    "tags": [
      "memory",
      "buffer"
    ],
    "difficulty": "senior",
    "id": "s731",
    "fixed": true
  },
  {
    "q": "На что влияет tracemalloc.start()?",
    "options": [
      "включает трекинг аллокаций (overhead) и позволяет снимки/диффы",
      "отключает GC",
      "ускоряет программу",
      "чистит все утечки автоматически"
    ],
    "answer": 0,
    "explain": "Инструмент поиска утечек. Цена — замедление и память на следы.",
    "kind": "single",
    "id": "s776",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "нет __dict__ у экземпляра",
      "полный __dict__",
      "ошибка синтаксиса",
      "None"
    ],
    "answer": 0,
    "explain": "При __slots__ без явного '__dict__' у экземпляра нет __dict__ — AttributeError при доступе.",
    "kind": "single",
    "code": "class A:\n    __slots__ = ('x',)",
    "id": "s779",
    "fixed": true
  }
);
