// @meta topic=C-API group=Нативные расширения
// senior · 15 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем нужен Py_INCREF / Py_DECREF?",
    "options": [
      "управлять владением ссылкой: не дать GC/dealloc уничтожить нужный объект и не утекать",
      "ускорить арифметику int",
      "отключить GC навсегда",
      "заменить GIL"
    ],
    "answer": 0,
    "explain": "Правила владения (stolen / new / borrowed reference) — главный источник багов в C-API. Borrowed (например из PyList_GetItem) нельзя DECREF «на всякий случай». Утечка INCREF, а затем рост RSS; лишний DECREF, а затем crash. Argument Clinic и pybind11/cffi снижают ручную боль. Argument Clinic — генератор в исходниках CPython: ты описываешь сигнатуру функции, а он создаёт C-код для разбора аргументов вместо ручного PyArg_ParseTuple и дублирования документации.",
    "kind": "single",
    "tags": [
      "c-api"
    ],
    "difficulty": "senior",
    "id": "s41",
    "fixed": true
  },
  {
    "q": "Зачем в CPython нужен Argument Clinic?",
    "options": [
      "генерировать разбор аргументов C-API функций и уменьшать бойлерплейт",
      "лечить типы в чистом Python без аннотаций",
      "заменять pip на встроенный установщик",
      "отключать GC на время вызова"
    ],
    "answer": 0,
    "explain": "Argument Clinic — DSL/генератор в CPython: описываешь сигнатуру, получаешь C-код парсинга аргументов для builtins и extension. Меньше ручных ошибок в ParseTuple и единообразнее API.",
    "kind": "single",
    "id": "s74",
    "fixed": true
  },
  {
    "q": "Что проверяет PyErr_Occurred() в C-API?",
    "options": [
      "установлено ли текущее исключение в интерпретаторе",
      "удерживается ли GIL",
      "закончился ли цикл event loop",
      "валиден ли указатель PyObject*"
    ],
    "answer": 0,
    "explain": "После вызова C-функции без явного return NULL проверяют PyErr_Occurred(). Если set — пробросить или очистить PyErr_Clear(). Базовый контракт error handling в extensions.",
    "kind": "single",
    "id": "s122",
    "fixed": true
  },
  {
    "q": "Что даёт vectorcall protocol в C-API CPython?",
    "options": [
      "быстрые вызовы без сборки tuple/kwargs — массив указателей на стеке",
      "векторизацию NumPy внутри интерпретатора",
      "параллельный вызов функций без GIL",
      "замену байткода на LLVM IR"
    ],
    "answer": 0,
    "explain": "PEP 590: PyVectorcall_NARGS и слот tp_vectorcall. CPython 3.8+ использует для вызовов built-in и C-функций быстрее классического PyObject_Call.",
    "kind": "single",
    "id": "s184",
    "fixed": true
  },
  {
    "q": "Зачем у capsule в C-API задают имя (name)?",
    "options": [
      "чтобы безопасно отличать тип указателя и не принять чужой void*",
      "чтобы ускорить malloc",
      "чтобы заменить sys.modules",
      "чтобы хранить docstring модуля"
    ],
    "answer": 0,
    "explain": "PyCapsule несёт void* плюс строковое имя. Импортёры проверяют имя, прежде чем разыменовать указатель — защита от передачи «не того» capsule между расширениями.",
    "kind": "single",
    "id": "s199",
    "fixed": true
  },
  {
    "q": "Зачем Py_LIMITED_API / stable ABI?",
    "options": [
      "бинарная совместимость C-расширения между версиями CPython",
      "ускорение list comprehension",
      "отключение GIL в extension module",
      "автоматическая публикация на PyPI"
    ],
    "answer": 0,
    "explain": "Ограниченный набор C-API в abi3.so: один артефакт на 3.x линейку. Компромисс — не все внутренние структуры CPython доступны.",
    "kind": "single",
    "id": "s228",
    "fixed": true
  },
  {
    "q": "Какова цель проекта HPy?",
    "options": [
      "более стабильный и портируемый C-API для расширений (в т.ч. альтернативные VM)",
      "замена ctypes на Rust",
      "встроенный JIT для чистого Python",
      "стандартизация wheel tags"
    ],
    "answer": 0,
    "explain": "HPy скрывает детали CPython object layout за handles — проще портировать PyPy/GraalPy и меньше ломать ABI при обновлениях CPython.",
    "kind": "single",
    "id": "s242",
    "fixed": true
  },
  {
    "q": "Чем borrowed reference отличается от new reference в C-API?",
    "options": [
      "new увеличивает refcount, borrowed — нет; нельзя хранить borrowed без INCREF",
      "разницы нет",
      "borrowed только для None",
      "new reference не требует Py_DECREF"
    ],
    "answer": 0,
    "explain": "PyList_GetItem возвращает borrowed. Сохранить в структуре — Py_INCREF. Утечка/use-after-free — типичные баги расширений.",
    "kind": "single",
    "id": "s270",
    "fixed": true
  },
  {
    "q": "Что вернёт Py_INCREF/DECREF?",
    "options": [
      "ручной refcount",
      "GIL tokens",
      "ошибка",
      "GC generation"
    ],
    "answer": 0,
    "explain": "Результат выражения — ручной refcount. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s284",
    "fixed": true
  },
  {
    "q": "Что вернёт PyUnstable_* APIs?",
    "options": [
      "могут меняться",
      "stable abi",
      "limited api same",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — могут меняться. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s298",
    "fixed": true
  },
  {
    "q": "Что означает versioning у limited API в C-API CPython?",
    "options": [
      "макрос PY_LIMITED_API фиксирует версию stable ABI для abi3-колеса",
      "у limited API нет версий вообще",
      "версии задаёт только semver в pip metadata",
      "это правило именования переменных в Python"
    ],
    "answer": 0,
    "explain": "Limited API / stable ABI: задаёшь PY_LIMITED_API, собираешь abi3-wheel и можешь ехать на нескольких версиях CPython. Это не «semver pip» и не «версий нет».",
    "kind": "single",
    "id": "s311",
    "fixed": true
  },
  {
    "q": "Зачем в C-API паттерн PyErr_SetString + return NULL?",
    "options": [
      "сообщить Python об исключении из C-функции",
      "отключить сборщик мусора в расширении",
      "освободить GIL навсегда",
      "залогировать предупреждение без исключения"
    ],
    "answer": 0,
    "explain": "PyErr_SetString(type, msg) ставит активное исключение; return NULL сигнализирует вызывающему C-API, что произошла ошибка. Классика для binding-функций.",
    "kind": "single",
    "id": "s350",
    "fixed": true
  },
  {
    "q": "В чём разница heap types и static types в C-API?",
    "options": [
      "heap types создаются динамически в runtime; static — фиксированы при компиляции",
      "heap types всегда медленнее и бесполезны",
      "static types нельзя использовать в расширениях",
      "разницы нет в CPython 3.11+"
    ],
    "answer": 0,
    "explain": "Heap type (PyType_FromSpec) гибче для модульных расширений и hot-reload. Static PyTypeObject в C-файле — классика stdlib modules.",
    "kind": "single",
    "id": "s374",
    "fixed": true
  },
  {
    "q": "Что делает PyErr_SetString в C-API?",
    "options": [
      "устанавливает активное исключение заданного типа с сообщением",
      "только пишет в stderr без исключения",
      "очищает traceback",
      "освобождает GIL"
    ],
    "answer": 0,
    "explain": "PyErr_SetString(PyExc_ValueError, \"msg\") — аналог raise ValueError(\"msg\") из C. Обычно в паре с return NULL из C-функции.",
    "kind": "single",
    "id": "s410",
    "fixed": true
  },
  {
    "q": "Что вернёт Capsule в C-API?",
    "options": [
      "безопасно передаёт C указатели",
      "ошибка",
      "async handle",
      "GIL token"
    ],
    "answer": 0,
    "explain": "Результат выражения — безопасно передаёт C указатели. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s422",
    "fixed": true
  }
);
