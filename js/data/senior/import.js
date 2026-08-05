// @meta topic=import group=Stdlib и производительность
// senior · 13 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое ModuleSpec.origin?",
    "options": [
      "путь или идентификатор, откуда модуль был загружен",
      "версия модуля по PEP 440",
      "только SHA256 байткода",
      "имя виртуального окружения"
    ],
    "answer": 0,
    "explain": "importlib.util.find_spec('os').origin → путь к .py или 'built-in'. loader, submodule_search_locations — остальная метаинформация импорта.",
    "kind": "single",
    "id": "s77",
    "fixed": true
  },
  {
    "q": "Типичный симптом circular import?",
    "options": [
      "AttributeError: partially initialized module has no attribute …",
      "SyntaxError на каждом циклическом импорте",
      "deadlock GIL между потоками",
      "ImportError: No module named '__future__'"
    ],
    "answer": 0,
    "explain": "a импортирует b, b — a. Модуль a ещё не до конца выполнился, b тянет атрибут — его нет. Лечат lazy import, вынос общего в третий модуль, TYPE_CHECKING.",
    "kind": "single",
    "id": "s125",
    "fixed": true
  },
  {
    "q": "Что часто происходит при circular import на top-level?",
    "options": [
      "частично инициализированный модуль или ImportError/AttributeError",
      "обязательный дедлок GIL",
      "только SyntaxError",
      "всегда проходит без проблем"
    ],
    "answer": 0,
    "explain": "A импортирует B, B импортирует A, пока A ещё грузится → атрибуты могут отсутствовать. Лечат отложенным import или выносом общего кода в третий модуль.",
    "kind": "single",
    "code": "# a imports b, b imports a",
    "id": "s244",
    "fixed": true
  },
  {
    "q": "Как CPython инвалидирует кэшированные .pyc?",
    "options": [
      "по hash исходника (PEP 552) или mtime/size в зависимости от режима",
      "никогда — pyc вечны",
      "только при смене мажорной версии Python",
      "по git commit hash автоматически"
    ],
    "answer": 0,
    "explain": "checked/hash-based pyc: при изменении исходника hash не совпадает — перекомпиляция. timestamp mode смотрит mtime/size .py.",
    "kind": "single",
    "id": "s258",
    "fixed": true
  },
  {
    "q": "Что кэширует sys.modules?",
    "options": [
      "уже загруженные модули по полному имени",
      "только скомпилированные .pyc на диске",
      "список пакетов из pip freeze",
      "глобальные переменные всех модулей"
    ],
    "answer": 0,
    "explain": "При первом import модуль попадает в sys.modules; повторный import возвращает тот же объект. Отсюда circular import и паттерн lazy import внутри функций.",
    "kind": "single",
    "id": "s352",
    "fixed": true
  },
  {
    "q": "Что возвращает sys.abiflags?",
    "options": [
      "флаги ABI интерпретатора (например m для pymalloc)",
      "список установленных pip-пакетов",
      "версию ядра Linux",
      "настройки логирования stdlib"
    ],
    "answer": 0,
    "explain": "В теге wheel и при загрузке расширений важно совпадение ABI: cpython-312-darwin и флаги вроде «m» (pymalloc). Несовпадение → ImportError.",
    "kind": "single",
    "id": "s388",
    "fixed": true
  },
  {
    "q": "Что даёт importlib по сравнению с простым import?",
    "options": [
      "программный импорт, кастомные loaders и перезагрузка",
      "только ускорение холодного старта",
      "компиляцию C-расширений",
      "удаление sys.path"
    ],
    "answer": 0,
    "explain": "importlib.import_module, machinery.FileFinder, util.spec_from_file_location — основа динамических плагинов и import hooks.",
    "kind": "single",
    "id": "s400",
    "fixed": true
  },
  {
    "q": "Что такое frozen modules в CPython?",
    "options": [
      "модули, встроенные в бинарник интерпретатора",
      "pip freeze output",
      "venv без pip",
      "docker image layer"
    ],
    "answer": 0,
    "explain": "_frozen_importlib, zipimport bootstrap — вшиты в executable. Быстрый старт, не нужен .py на диске.",
    "kind": "single",
    "id": "s510",
    "fixed": true
  },
  {
    "q": "Что верно про namespace packages без __init__?",
    "options": [
      "PEP 420: каталог без __init__.py может быть частью namespace package",
      "в Python 3.x такие пакеты полностью запрещены",
      "работает только в src-layout проекта Poetry",
      "доступны исключительно внутри zipimport-архивов"
    ],
    "answer": 0,
    "explain": "Namespace package собирается из нескольких каталогов в sys.path без единого __init__.py. Удобно для плагинов и разделяемых пространств имён.",
    "kind": "single",
    "id": "s532",
    "fixed": true
  },
  {
    "q": "Что такое lazy loaders tradeoffs?",
    "options": [
      "быстрый старт импорта, но ImportError/ошибки конфигурации всплывают при первом использовании",
      "всегда лучше eager import во всех сценариях",
      "запрещены стандартом Python 3.12+",
      "используются только в системе типов mypy"
    ],
    "answer": 0,
    "explain": "Lazy import (importlib, deferred attributes) ускоряет CLI и тесты, но стек при падении указывает на место первого обращения, а не на строку import. Нужен баланс.",
    "kind": "single",
    "id": "s542",
    "fixed": true
  },
  {
    "q": "Что означает find_spec, вернувший None?",
    "options": [
      "ни один finder в sys.meta_path не нашёл модуль по этому имени",
      "модуль найден, но пустой namespace package",
      "модуль уже загружен в sys.modules и кэширован",
      "имя модуля зарезервировано и импорт запрещён навсегда"
    ],
    "answer": 0,
    "explain": "importlib.util.find_spec проходит meta_path finders. None → ModuleNotFoundError при import. Не путать с loader=None у namespace portion.",
    "kind": "single",
    "id": "s547",
    "fixed": true
  },
  {
    "q": "Что делает sys.meta_path?",
    "options": [
      "список MetaPathFinder для поиска модулей при import",
      "путь к site-packages в виртуальном окружении",
      "стек вызовов для sys.settrace",
      "кэш скомпилированных .pyc файлов"
    ],
    "answer": 0,
    "explain": "importlib сначала опрашивает finders в meta_path (built-in, PathFinder, кастомные). Можно вставить свой finder для zip, remote, hot reload.",
    "kind": "single",
    "id": "s645",
    "fixed": true
  },
  {
    "q": "Что делает spec.loader.exec_module?",
    "options": [
      "выполняет код модуля и заполняет module.__dict__",
      "только компилирует в .pyc без исполнения",
      "регистрирует namespace без выполнения тела",
      "удаляет модуль из sys.modules"
    ],
    "answer": 0,
    "explain": "exec_module(module) — стандартная точка loader после create_module. importlib использует её вместо устаревшего load_module.",
    "kind": "single",
    "id": "s657",
    "fixed": true
  }
);
