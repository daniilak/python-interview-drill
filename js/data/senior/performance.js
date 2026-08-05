// @meta topic=performance group=Stdlib и производительность
// senior · 48 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Какова амортизированная сложность set.remove(x)?",
    "options": [
      "O(1) в среднем",
      "O(log n) как у отсортированного списка",
      "O(n) всегда из‑за rehash на каждом удалении",
      "O(n²) при любом размере"
    ],
    "answer": 0,
    "explain": "Хеш-таблица: поиск и удаление по хешу — O(1) в среднем. Худший случай при атаке на хеши теоретически хуже, но в обычном коде считают O(1) амортизированно.",
    "kind": "single",
    "id": "s10",
    "fixed": true
  },
  {
    "q": "Почему bisect.insort — O(n), а не O(log n)?",
    "options": [
      "бинарный поиск O(log n), но вставка сдвигает элементы списка",
      "bisect всегда сортирует весь список заново",
      "insort запрещён для списков больше 1000",
      "сложность O(n log n) из‑за timsort"
    ],
    "answer": 0,
    "explain": "bisect находит позицию за O(log n), но list — массив: insert сдвигает хвост. Для частых вставок лучше heap или bisect + другая структура.",
    "kind": "single",
    "id": "s44",
    "fixed": true
  },
  {
    "q": "Что означает тег soabi / cp311-cp311 в wheel?",
    "options": [
      "идентификатор интерпретатора и ABI (CPython 3.11 и т.д.)",
      "git tag релиза на GitHub",
      "semver версии вашего пакета",
      "имя Docker-образа"
    ],
    "answer": 0,
    "explain": "pip выбирает wheel совместимый с платформой: cp311, manylinux, abi3. Неправильный tag → wheel не установится или упадёт при import extension.",
    "kind": "single",
    "id": "s93",
    "fixed": true
  },
  {
    "q": "Что такое devirtualization в JIT?",
    "options": [
      "подстановка конкретного типа вместо виртуального вызова при мономорфности",
      "удаление всех типов из Python-кода",
      "runtime cast из typing",
      "отключение специализации байткода"
    ],
    "answer": 0,
    "explain": "Если call site всегда видит один класс, JIT может inline метод вместо vtable. В CPython 3.11+ похожая идея в adaptive opcode, не полноценный JVM JIT.",
    "kind": "single",
    "id": "s109",
    "fixed": true
  },
  {
    "q": "Чем помогает tracemalloc?",
    "options": [
      "искать утечки аллокаций",
      "ускорить network",
      "убрать GIL",
      "форматировать JSON"
    ],
    "answer": 0,
    "explain": "Трассировка аллокаций — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s141",
    "fixed": true
  },
  {
    "q": "За счёт чего vectorization в NumPy быстрее цикла Python?",
    "options": [
      "C-циклы по contiguous массиву без per-element bytecode и GIL на элемент",
      "больше потоков интерпретатора Python на каждый элемент",
      "f-string вместо print",
      "автоматический JIT CPython 3.11"
    ],
    "answer": 0,
    "explain": "a + b в NumPy — один вызов ufunc на весь массив. for i: c[i]=a[i]+b[i] — N итераций bytecode. BLAS/LAPACK ещё глубже.",
    "kind": "single",
    "id": "s157",
    "fixed": true
  },
  {
    "q": "Какова амортизированная сложность list.append?",
    "options": [
      "O(1) амортизированно",
      "O(log n) как у бинарного поиска",
      "O(n) на каждый вызов",
      "O(n²) из-за копирования всего списка"
    ],
    "answer": 0,
    "explain": "append в конец динамического массива: обычно O(1), иногда resize с копированием — амортизированно константа. Вставка в середину — O(n).",
    "kind": "single",
    "id": "s172",
    "fixed": true
  },
  {
    "q": "Что такое specializing adaptive interpreter в CPython?",
    "options": [
      "байткод адаптируется под типы в горячих местах и ускоряет типичные пути",
      "отдельный JVM-подобный JIT, который всегда компилирует весь модуль",
      "замена CPython на PyPy без смены кода",
      "только режим отладки с лишними проверками"
    ],
    "answer": 0,
    "explain": "С 3.11+ specializing adaptive interpreter переписывает инструкции под наблюдаемые типы (например LOAD_ATTR → специализированная форма). Это не полный JIT всего модуля, а точечная специализация горячего байткода.",
    "kind": "single",
    "id": "s187",
    "fixed": true
  },
  {
    "q": "Какова амортизированная сложность dict.popitem()?",
    "options": [
      "O(1) амортизированно — снимает последний элемент в порядке вставки",
      "O(n) всегда из-за перестройки всей таблицы",
      "O(log n) как у дерева",
      "O(n²) на больших словарях"
    ],
    "answer": 0,
    "explain": "Popitem() убирает последний pair в insertion order за амортизированное O(1). Это не полный rebuild таблицы и не древовидный поиск.",
    "kind": "single",
    "id": "s202",
    "fixed": true
  },
  {
    "q": "Что верно про n=1000: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s216",
    "fixed": true
  },
  {
    "q": "Что верно про n=10000: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s230",
    "fixed": true
  },
  {
    "q": "Насколько эффективен инлайнинг мелких функций в чистом Python?",
    "options": [
      "ограничен интерпретатором; горячие места — профилировать, не «инлайнить руками» везде",
      "CPython всегда инлайнит как JIT JVM",
      "инлайнинг запрещён PEP 8",
      "ускорение в 100x гарантировано"
    ],
    "answer": 0,
    "explain": "Нет гарантии inlining как в C++. @lru_cache, builtins, numpy/C или вынос в Cython — если профайлер показал узкое место.",
    "kind": "single",
    "id": "s272",
    "fixed": true
  },
  {
    "q": "Что даёт PGO / BOLT для бинарника CPython?",
    "options": [
      "профильно-ориентированная оптимизация машинного кода интерпретатора",
      "автоматический JIT для user Python кода",
      "замену pymalloc",
      "удаление GIL"
    ],
    "answer": 0,
    "explain": "Profile-guided optimization: сбор профиля на реальных workload, пересборка с раскладкой hot path. BOLT — post-link оптимизация бинарника.",
    "kind": "single",
    "id": "s286",
    "fixed": true
  },
  {
    "q": "Сложность `s = ''; s += chunk` в цикле n раз?",
    "options": [
      "O(n²) типично из-за копирования growing string",
      "O(1) всегда",
      "O(log n)",
      "O(n) гарантировано в CPython 3.12+"
    ],
    "answer": 0,
    "explain": "str неизменяем: каждый += новый объект. Используй list.append + join или io.StringIO для линейного времени.",
    "kind": "single",
    "id": "s300",
    "fixed": true
  },
  {
    "q": "Когда __slots__ почти не помогает?",
    "options": [
      "мало экземпляров / мало атрибутов",
      "миллионы объектов с 1 полем",
      "всегда помогает 100x",
      "только на str"
    ],
    "answer": 0,
    "explain": "Смотри профиль памяти — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s313",
    "fixed": true
  },
  {
    "q": "Что вернёт tracepoints / USDT?",
    "options": [
      "низкоуровневая инструментизация",
      "только logging",
      "only py-spy",
      "GIL probes std"
    ],
    "answer": 0,
    "explain": "Prod profiling — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s326",
    "fixed": true
  },
  {
    "q": "Зачем интернирование строк и constant folding?",
    "options": [
      "компилятор/рантайм переиспользуют одинаковые объекты — меньше памяти",
      "ускорить сеть HTTP/2",
      "заменить unicode normalization",
      "отключить hash randomization"
    ],
    "answer": 0,
    "explain": "Литералы 'ab' могут быть один объект; fold констант на compile time. Не полагайся на is для строк произвольного происхождения.",
    "kind": "single",
    "id": "s339",
    "fixed": true
  },
  {
    "q": "Какова сложность str.join для n фрагментов?",
    "options": [
      "O(суммарная длина результата)",
      "O(n²) всегда независимо от длин",
      "O(n!) из-за рекурсии",
      "O(1) — join не копирует данные"
    ],
    "answer": 0,
    "explain": "CPython один проход: считает длину, аллоцирует буфер, копирует куски. Поэтому ''.join(parts) предпочтительнее += в цикле.",
    "kind": "single",
    "id": "s364",
    "fixed": true
  },
  {
    "q": "когда профилировать преждевременно — плохо; но первый инструмент?",
    "options": [
      "cProfile / py-spy / scalene — по задаче",
      "сразу переписать на C",
      "отключить GC навсегда",
      "больше print"
    ],
    "answer": 0,
    "explain": "Измеряй, потом оптимизируй — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s376",
    "fixed": true
  },
  {
    "q": "В чём польза zero-copy и buffer protocol?",
    "options": [
      "меньше копий памяти между слоями (memoryview, sendfile)",
      "полное отключение GC",
      "запрет типа bytes в Python 3",
      "автоматическое шифрование буферов"
    ],
    "answer": 0,
    "explain": "PEP 3118: объекты экспортируют буфер без копии. memoryview, numpy, socket.send — работают с одной памятью. Важно для I/O и ML.",
    "kind": "single",
    "id": "s424",
    "fixed": true
  },
  {
    "q": "Какова сложность bytearray.extend(k байт)?",
    "options": [
      "O(k) амортизированно",
      "O(1) всегда без реаллокаций",
      "O(n²) для любого k",
      "O(log n) как у heap"
    ],
    "answer": 0,
    "explain": "Как у list append: иногда реаллокация буфера, но амортизированно линейно по добавленным байтам.",
    "kind": "single",
    "id": "s436",
    "fixed": true
  },
  {
    "q": "Для чего используют perf и flamegraph?",
    "options": [
      "визуализация CPU-профилей native и Python кода",
      "проверка PEP8",
      "измерение test coverage",
      "планирование SQL-запросов"
    ],
    "answer": 0,
    "explain": "perf record + flamegraph.pl показывает, какие функции съели CPU. py-spy — без перекомпиляции, sampling извне.",
    "kind": "single",
    "id": "s447",
    "fixed": true
  },
  {
    "q": "Что такое Профилирование CPU: стандартно?",
    "options": [
      "cProfile / pyinstrument",
      "print time только в проде без меры",
      "gc.collect loop",
      "dis всегда"
    ],
    "answer": 0,
    "explain": "Измеряй до оптимизации — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s479",
    "fixed": true
  },
  {
    "q": "Какова сложность collections.deque.popleft?",
    "options": [
      "O(1)",
      "O(n) из-за сдвига",
      "O(log n)",
      "O(n²)"
    ],
    "answer": 0,
    "explain": "Deque — блоки двусвязного списка; pop с обоих концов O(1). list.pop(0) — O(n).",
    "kind": "single",
    "id": "s488",
    "fixed": true
  },
  {
    "q": "Что вернёт Сложность dict[key]?",
    "options": [
      "O(1) амортизированно",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Большая O для dict[key] — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s496",
    "fixed": true
  },
  {
    "q": "Когда имеет смысл Cython/PyO3?",
    "options": [
      "горячие CPU участки",
      "каждый CRUD",
      "логирование",
      "конфиг YAML"
    ],
    "answer": 0,
    "explain": "Нативный код для hotspots — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s503",
    "fixed": true
  },
  {
    "q": "Как борются с false sharing?",
    "options": [
      "выравнивание и padding данных по cache line",
      "отключение GIL",
      "больше потоков без изменения данных",
      "только уменьшение TTL кэша Redis"
    ],
    "answer": 0,
    "explain": "Два счётчика в одной 64-byte line — invalidate при каждом write. Разнести hot counters padding'ом.",
    "kind": "single",
    "id": "s517",
    "fixed": true
  },
  {
    "q": "Почему polymorphic call sites мешают specialization в 3.11+?",
    "options": [
      "разные типы на одном опкоде → deopt и сброс inline cache",
      "ускоряют adaptive interpreter",
      "влияют только на PyPy",
      "отключают только GIL"
    ],
    "answer": 0,
    "explain": "Специализация LOAD_ATTR предполагает стабильный тип. Мономорфный hot path быстрее; мегаморфный — generic fallback.",
    "kind": "single",
    "id": "s522",
    "fixed": true
  },
  {
    "q": "Какова сложность heapq.heappop?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(n log n) на каждый pop"
    ],
    "answer": 0,
    "explain": "Пирамидальная куча: pop корня + sift down. heappush тоже O(log n).",
    "kind": "single",
    "id": "s527",
    "fixed": true
  },
  {
    "q": "Что такое branch misprediction в C hot loops?",
    "options": [
      "CPU ошибочно предсказал ветвление — pipeline сбрасывается, цикл замедляется",
      "GIL предсказывает, какой поток возьмёт управление",
      "байткод-интерпретатор Python делает то же на уровне asm",
      "это ошибка компилятора при оптимизации list comprehension"
    ],
    "answer": 0,
    "explain": "В нативных расширениях и Cython ветвления с непредсказуемым паттерном бьют по IPC. В чистом Python это менее критично, но для hot path на C — профилируют.",
    "kind": "single",
    "id": "s537",
    "fixed": true
  },
  {
    "q": "Какова сложность bisect.bisect_left?",
    "options": [
      "O(log n) — бинарный поиск по отсортированной последовательности",
      "O(1) — доступ по индексу как у list",
      "O(n) — линейный перебор с начала",
      "O(n log n) — сортировка перед каждым вызовом"
    ],
    "answer": 0,
    "explain": "bisect_left делит интервал пополам на каждом шаге. Требует, чтобы последовательность уже была отсортирована. bisect.insort — O(n) из-за сдвига элементов.",
    "kind": "single",
    "id": "s552",
    "fixed": true
  },
  {
    "q": "Что такое allocation sampling?",
    "options": [
      "периодический сэмпл стека при аллокациях — профиль памяти без полного tracing",
      "измерение только CPU time без учёта heap",
      "мониторинг SMART-атрибутов диска",
      "подсчёт строк кода в hot path"
    ],
    "answer": 0,
    "explain": "memray, tracemalloc snapshot, allocation sampling в профайлерах показывают, кто аллоцирует. Дешевле полного trace каждой malloc. Полезно при росте RSS.",
    "kind": "single",
    "id": "s562",
    "fixed": true
  },
  {
    "q": "Какова сложность sorted(list)?",
    "options": [
      "O(n log n) — Timsort в CPython",
      "O(n) — list уже почти отсортирован всегда",
      "O(1) — сортировка in-place без копирования",
      "O(n²) гарантированно для любого входа"
    ],
    "answer": 0,
    "explain": "sorted() создаёт новый список; list.sort() сортирует на месте — оба O(n log n) в среднем и худшем для Timsort. Лучший случай O(n) при уже упорядоченных данных.",
    "kind": "single",
    "id": "s567",
    "fixed": true
  },
  {
    "q": "Что верно про n=100: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s577",
    "fixed": true
  },
  {
    "q": "Почему «переписать на async / убрать GIL» — плохой первый шаг оптимизации?",
    "options": [
      "сначала профилируй: узкое место часто I/O, алгоритм O(n²) или лишние копии, а не «мало потоков»",
      "профилирование запрещено в проде",
      "GIL всегда главный bottleneck",
      "async всегда быстрее sync"
    ],
    "answer": 0,
    "explain": "Инструменты: cProfile/py-spy/scalene, tracemalloc, логи latency-гистограмм. Частые wins: алгоритмы, кэш, batching, меньше сериализации, connection pool, правильные индексы БД. Async и free-threading — после того, как понятна модель нагрузки.",
    "kind": "single",
    "tags": [
      "performance"
    ],
    "difficulty": "senior",
    "id": "s582",
    "fixed": true
  },
  {
    "q": "Какова сложность list.pop()?",
    "options": [
      "O(1) с конца — без сдвига элементов",
      "O(log n) — бинарный поиск индекса",
      "O(n) всегда — сдвиг всего массива",
      "O(n log n) из-за пересортировки"
    ],
    "answer": 0,
    "explain": "pop() без аргумента снимает последний элемент. pop(0) — O(n) из-за сдвига. Для очереди с частым pop с начала — collections.deque.",
    "kind": "single",
    "id": "s587",
    "fixed": true
  },
  {
    "q": "Какова сложность set.add?",
    "options": [
      "O(1) амортизированно в среднем",
      "O(log n) как в отсортированном list",
      "O(n) из-за полного перебора при каждом add",
      "O(n²) при росте set"
    ],
    "answer": 0,
    "explain": "Как dict: hash + probe, иногда resize таблицы. Худший теоретический случай при коллизиях редок с randomized hash seed.",
    "kind": "single",
    "id": "s592",
    "fixed": true
  },
  {
    "q": "Какова сложность ''.join(parts)?",
    "options": [
      "O(n) по общей длине строк — одна аллокация результата",
      "O(n²) — конкатенация каждого фрагмента в цикле",
      "O(1) — join не копирует данные",
      "O(n log n) — сортировка частей перед склейкой"
    ],
    "answer": 0,
    "explain": "join сначала считает итоговый размер, потом копирует один раз. `s += chunk` в цикле — O(n²) из-за неизменяемости str.",
    "kind": "single",
    "id": "s597",
    "fixed": true
  },
  {
    "q": "Что такое COW после fork?",
    "options": [
      "страницы копируются при записи",
      "полное копирование сразу always",
      "shared forever writable without cost",
      "GIL pages"
    ],
    "answer": 0,
    "explain": "Gc.freeze помогает — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s602",
    "fixed": true
  },
  {
    "q": "когда __slots__ реально помогает?",
    "options": [
      "много мелких объектов с фиксированными полями",
      "на одном singleton",
      "всегда на любом классе",
      "только dataclasses without fields"
    ],
    "answer": 0,
    "explain": "Меньше памяти на __dict__ — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s607",
    "fixed": true
  },
  {
    "q": "Что верно про n=10: что важнее микрооптимизаций f-string?",
    "options": [
      "алгоритм/I/O/аллокации — профилируй",
      "всегда переписать на C",
      "отключить GC",
      "больше print"
    ],
    "answer": 0,
    "explain": "Сначала измерь bottleneck — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s612",
    "fixed": true
  },
  {
    "q": "Что такое Py_TPFLAGS_HAVE_VECTORCALL?",
    "options": [
      "тип поддерживает vectorcall",
      "async flag",
      "GC flag",
      "heaptype ban"
    ],
    "answer": 0,
    "explain": "C-API perf — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s617",
    "fixed": true
  },
  {
    "q": "Какова сложность list.pop(0)?",
    "options": [
      "O(n) — сдвиг всех элементов влево",
      "O(1) — как pop() с конца",
      "O(log n) — бинарный поиск",
      "O(1) амортизированно благодаря over-allocation"
    ],
    "answer": 0,
    "explain": "Массив в C: удаление с индекса 0 сдвигает n-1 элементов. deque.popleft() — O(1) с обеих сторон.",
    "kind": "single",
    "id": "s622",
    "fixed": true
  },
  {
    "q": "Какова сложность list.insert(0, x)?",
    "options": [
      "O(n) — сдвиг элементов вправо",
      "O(1) — вставка в начало динамического массива",
      "O(log n) — бинарный поиск позиции",
      "O(1) амортизированно только для append"
    ],
    "answer": 0,
    "explain": "insert(0) и pop(0) симметрично дороги. Для очереди — collections.deque с appendleft.",
    "kind": "single",
    "id": "s627",
    "fixed": true
  },
  {
    "q": "Что вернёт computed goto / computed interpreters?",
    "options": [
      "ускорение VM dispatch",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "История CPython perf — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s632",
    "fixed": true
  },
  {
    "q": "Какова сложность heapq.heappush?",
    "options": [
      "O(log n) — просеивание вверх по бинарной куче",
      "O(1) — вставка в конец без просеивания",
      "O(n) — полная пересортировка heap",
      "O(n log n) — как sorted insert"
    ],
    "answer": 0,
    "explain": "heappush добавляет в конец и sift-up. heappop — sift-down. Минимум всегда в heap[0]. Не путать с sorted list O(n) insert.",
    "kind": "single",
    "id": "s641",
    "fixed": true
  },
  {
    "q": "В чём разница: JIT в PyPy vs CPython specializing?",
    "options": [
      "разные стратегии ускорения",
      "идентичны",
      "CPython JIT default forever historically",
      "PyPy без GC"
    ],
    "answer": 0,
    "explain": "Сравнивай workload — Производительность измеряют профайлером и оптимизируют горячие участки, а не «на глаз».",
    "kind": "single",
    "id": "s649",
    "fixed": true
  },
  {
    "q": "Ускоряет ли static typing сам по себе исполнение в CPython?",
    "options": [
      "нет — аннотации для людей, чекеров и иногда codegen, не для скорости VM",
      "да, mypy ускоряет runtime автоматически",
      "аннотации всегда включают JIT",
      "typing отключает GIL"
    ],
    "answer": 0,
    "explain": "Аннотации в CPython почти не влияют на скорость байткода. mypy/pyright — статический анализ. Ускорение — профайлер, алгоритмы, native-код, не «навесил types».",
    "kind": "single",
    "id": "s653",
    "fixed": true
  }
);
