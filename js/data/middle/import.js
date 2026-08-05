// @meta topic=import group=Stdlib и производительность
// middle · 9 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
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
    "fixed": true
  }
);
