// @meta topic=ctypes group=Нативные расширения
// senior · 8 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Для чего в ctypes используют ERRCHECK?",
    "options": [
      "постпроверка результата C-вызова и перевод ошибок в исключения Python",
      "предвыделение памяти под буфер",
      "отключение GIL на время вызова",
      "проверка аннотаций typing в рантайме"
    ],
    "answer": 0,
    "explain": "ERRCHECK — колбэк после вызова C-функции через ctypes: можно проверить код возврата/errno и поднять нормальное исключение Python, а не молча получить мусорный результат.",
    "kind": "single",
    "id": "s7",
    "fixed": true
  },
  {
    "q": "Для чего удобен модуль ctypes?",
    "options": [
      "вызвать C ABI из Python без написания extension на C",
      "заменить asyncio и писать всю конкурентность через ctypes",
      "ускорить Python за счёт встроенного JIT",
      "проверять аннотации typing в рантайме"
    ],
    "answer": 0,
    "explain": "Ctypes позволяет звать функции из динамических библиотек по C ABI, не собирая свой extension. Цена — unsafe-указатели, ручные типы аргументов и слабая интеграция с pythonic-ошибками. Для серьёзных обёрток чаще берут cffi/pybind11/Cython.",
    "kind": "single",
    "id": "s24",
    "fixed": true
  },
  {
    "q": "Что означает ctypes restype=None?",
    "options": [
      "C-функция возвращает void — Python получит None",
      "автоматически обернуть любой указатель в PyObject",
      "ошибка конфигурации — restype обязателен",
      "функция возвращает строку UTF-8"
    ],
    "answer": 0,
    "explain": "restype задаёт конвертацию return value. None → void. Забыть restype для int* → мусор или segfault. argtypes/restype — контракт с native.",
    "kind": "single",
    "id": "s106",
    "fixed": true
  },
  {
    "q": "Главный риск ctypes?",
    "options": [
      "segfault и undefined behavior при неверных типах и lifetime указателей",
      "только медленнее, чем cffi",
      "безопасен как pure Python",
      "ломает pip при import"
    ],
    "answer": 0,
    "explain": "Неверный argtypes/restype → мусор в памяти или crash. Указатель на stack после return — UB. cffi и Cython дают больше проверок, ctypes — максимальная острота.",
    "kind": "single",
    "id": "s154",
    "fixed": true
  },
  {
    "q": "Чем CDLL отличается от WinDLL в ctypes?",
    "options": [
      "разные calling conventions: cdecl vs stdcall на Windows",
      "CDLL только для macOS",
      "WinDLL не загружает .so файлы",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "Windows API часто stdcall (WinDLL), Unix cdecl (CDLL). Неверная convention — corruption стека.",
    "kind": "single",
    "id": "s256",
    "fixed": true
  },
  {
    "q": "Для чего ctypes в Python?",
    "options": [
      "вызов функций из shared library через C ABI без написания C-extension",
      "замена ctypes только на Windows",
      "компиляция Python в LLVM",
      "встроенный ORM"
    ],
    "answer": 0,
    "explain": "cdll.LoadLibrary + argtypes/restype. Медленнее и хрупче cffi/Cython, но быстрый прототип к .so/.dll.",
    "kind": "single",
    "id": "s337",
    "fixed": true
  },
  {
    "q": "В чём разница ctypes.byref и ctypes.pointer?",
    "options": [
      "byref — лёгкая ссылка на существующий объект; pointer — отдельный объект-указатель",
      "byref работает только с массивами",
      "pointer запрещён в ctypes",
      "разницы нет — оба возвращают Python int"
    ],
    "answer": 0,
    "explain": "byref(x) передаёт адрес без создания pointer-объекта (быстрее для in/out). pointer(x) — полноценный POINTER типа, можно переназначать .contents.",
    "kind": "single",
    "id": "s362",
    "fixed": true
  },
  {
    "q": "Зачем в ctypes задавать restype и argtypes?",
    "options": [
      "правильно маршалить C-типы и аргументы Python↔C",
      "ускорить чистый Python цикл в 100×",
      "отключить GC на время вызова",
      "заменить необходимость в CDLL"
    ],
    "answer": 0,
    "explain": "Без argtypes ctypes передаёт int как c_int по умолчанию, но указатели и struct легко перепутать. restype=None для void, иначе — конвертация возврата.",
    "kind": "single",
    "id": "s386",
    "fixed": true
  }
);
