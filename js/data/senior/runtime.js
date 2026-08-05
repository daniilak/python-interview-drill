// @meta topic=runtime group=Метаклассы и типы
// senior · 4 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем модуль faulthandler?",
    "options": [
      "дампить Python traceback при SIGSEGV, зависании, fatal error",
      "ускорить горячие циклы",
      "статическая проверка типов",
      "отключить сборщик мусора"
    ],
    "answer": 0,
    "explain": "faulthandler.enable() печатает стеки всех потоков при краше native-кода или по SIGUSR1. Спасает, когда процесс умер без Python traceback.",
    "kind": "single",
    "id": "s82",
    "fixed": true
  },
  {
    "q": "Что вернёт sys.settrace / tracing?",
    "options": [
      "отладка/coverage на уровне событий",
      "ускорение hot path",
      "GIL off",
      "async only"
    ],
    "answer": 0,
    "explain": "Результат выражения — отладка/coverage на уровне событий. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s177",
    "fixed": true
  },
  {
    "q": "Что делают sitecustomize и usercustomize?",
    "options": [
      "автоматически импортируются при старте интерпретатора (site / user)",
      "настраивают pip и venv activate",
      "заменяют PYTHONPATH",
      "включаются только в pytest"
    ],
    "answer": 0,
    "explain": "sitecustomize.py в site-packages и usercustomize в user site — хуки для патчей окружения, профайлеров, policy до user-кода.",
    "kind": "single",
    "id": "s192",
    "fixed": true
  },
  {
    "q": "Зачем нужен module-level __getattr__ (PEP 562)?",
    "options": [
      "чтобы лениво отдавать атрибуты модуля при первом обращении",
      "чтобы запретить import модуля целиком",
      "чтобы ускорить GIL на время импорта",
      "чтобы заменить __init__.py на бинарный формат"
    ],
    "answer": 0,
    "explain": "PEP 562 позволяет определить `__getattr__` на уровне модуля: атрибут вычисляется при первом доступе (ленивые API, предупреждения о deprecation, тяжёлые зависимости). Это не замена пакета и не про потоки.",
    "kind": "single",
    "id": "s452",
    "fixed": true
  }
);
