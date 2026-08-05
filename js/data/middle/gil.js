// @meta topic=GIL group=Потоки, процессы, GIL
// middle · 12 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
  }
);
