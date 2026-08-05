// @meta topic=GIL group=Потоки, процессы, GIL
// senior · 9 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Почему numpy.dot больших массивов масштабируется лучше чистого Python цикла в threads?",
    "options": [
      "много работы в C без GIL",
      "GIL отключён в numpy глобально навсегда",
      "threads = processes",
      "float быстрее int"
    ],
    "answer": 0,
    "explain": "Native sections — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "id": "s204",
    "fixed": true
  },
  {
    "q": "Что даёт Py_BEGIN_ALLOW_THREADS / Py_END_ALLOW_THREADS в C-расширении?",
    "options": [
      "временно отпускает GIL на участке без обращения к Python API",
      "включает JIT",
      "удаляет refcount",
      "делает dict atomic навсегда"
    ],
    "answer": 0,
    "explain": "Пока GIL отпущен, нельзя трогать Python-объекты: гонка с другими потоками/GC. Паттерн: подготовка аргументов под GIL, а затем ALLOW_THREADS, и далее чистый C/Fortran/IO, а затем END, и далее снова Python API. Ошибка здесь — use-after-free и порча интерпретатора.",
    "kind": "single",
    "tags": [
      "gil",
      "c-api"
    ],
    "difficulty": "senior",
    "id": "s232",
    "fixed": true
  },
  {
    "q": "Что такое GIL в CPython?",
    "options": [
      "mutex, позволяющий одному потоку выполнять байткод Python в процессе",
      "блокировка файловой системы на запись",
      "garbage collector для циклов",
      "механизм asyncio event loop"
    ],
    "answer": 0,
    "explain": "Global Interpreter Lock: CPU-bound потоки Python не параллелятся на ядрах. I/O освобождает GIL; для CPU — multiprocessing или native code.",
    "kind": "single",
    "id": "s246",
    "fixed": true
  },
  {
    "q": "Какова цель free-threading (PEP 703)?",
    "options": [
      "опционально убрать GIL",
      "ускорить single-thread 10x всегда",
      "заменить asyncio",
      "удалить refcount"
    ],
    "answer": 0,
    "explain": "Эксперименты в 3.13+ — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "id": "s274",
    "fixed": true
  },
  {
    "q": "Что проверяет eval breaker в CPython?",
    "options": [
      "периодически: сигналы, pending calls, переключение потоков, GC",
      "только синтаксис байткода",
      "версию pip",
      "целостность wheel"
    ],
    "answer": 0,
    "explain": "В fast path интерпретатора счётчик до eval_breaker(): обработка сигналов, GIL drop request, async exception injection.",
    "kind": "single",
    "id": "s328",
    "fixed": true
  },
  {
    "q": "Два потока крутят чистый Python CPU-цикл. Что с утилизацией CPU?",
    "options": [
      "часто ≈ одно ядро из‑за GIL",
      "линейное ускорение ×2 на двух ядрах",
      "SyntaxError при запуске второго потока",
      "автоматическое отключение GIL в threading"
    ],
    "answer": 0,
    "explain": "GIL не даёт двум потокам одновременно исполнять байткод Python. CPU-bound чистый Python почти не масштабируется потоками — нужен multiprocessing или нативный код с отпусканием GIL.",
    "kind": "single",
    "code": "# threading + pure python loop",
    "id": "s354",
    "fixed": true
  },
  {
    "q": "Почему CPU-bound чистый Python плохо масштабируется потоками в CPython?",
    "options": [
      "GIL допускает исполнение байткода только одним потоком за раз",
      "потоки запрещены языком",
      "OS не умеет scheduling",
      "list не thread-safe никогда даже под GIL"
    ],
    "answer": 0,
    "explain": "GIL сериализует исполнение Python-байткода. I/O и многие C-вызовы отпускают GIL, а затем потоки полезны для ожидания. Для CPU: multiprocessing, нативные расширения с Py_BEGIN_ALLOW_THREADS, или free-threaded сборка (PEP 703) — но тогда нужна собственная потокобезопасность структур данных.",
    "kind": "single",
    "tags": [
      "gil",
      "concurrency"
    ],
    "difficulty": "senior",
    "id": "s426",
    "fixed": true
  },
  {
    "q": "Как C-расширение отпускает GIL на время блокирующей работы?",
    "options": [
      "макросы Py_BEGIN_ALLOW_THREADS / Py_END_ALLOW_THREADS",
      "вызов gil.disable() из Python",
      "threading.ungil()",
      "автоматически для любого C-кода"
    ],
    "answer": 0,
    "explain": "Вокруг долгого syscalls/CPU в C без Python API — отпускаем GIL, другие потоки могут исполнять байткод. Обязательно вернуть до трогания PyObject*.",
    "kind": "single",
    "id": "s438",
    "fixed": true
  },
  {
    "q": "Что верно про Отпускание GIL в blocking I/O?",
    "options": [
      "позволяет другим потокам идти",
      "убивает refcount",
      "отключает GC forever",
      "free-threads only"
    ],
    "answer": 0,
    "explain": "I/O bound — GIL (Global Interpreter Lock) в CPython не даёт нескольким потокам одновременно исполнять байткод Python.",
    "kind": "single",
    "id": "s490",
    "fixed": true
  }
);
