// @meta topic=multiprocessing group=Потоки, процессы, GIL
// senior · 7 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что вернёт fork + threads =?",
    "options": [
      "опасно (locks)",
      "рекомендуемый default everywhere",
      "быстрее spawn всегда без минусов",
      "async required"
    ],
    "answer": 0,
    "explain": "Результат выражения — опасно (locks). Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s159",
    "fixed": true
  },
  {
    "q": "Чем spawn отличается от fork как start method?",
    "options": [
      "spawn заново импортирует main; fork копирует память родителя — разная безопасность и скорость",
      "spawn быстрее fork на Linux всегда",
      "fork доступен только на Windows",
      "spawn не поддерживает pickle"
    ],
    "answer": 0,
    "explain": "fork наследует открытые дескрипторы и locks; spawn чистый процесс, но дороже старт. macOS/Windows default — spawn.",
    "kind": "single",
    "id": "s218",
    "fixed": true
  },
  {
    "q": "Почему spawn «заново импортирует» main?",
    "options": [
      "чистый процесс выполняет import __main__ / pickle target — side effects при import опасны",
      "fork не копирует код",
      "spawn не поддерживает pickle",
      "только для Windows"
    ],
    "answer": 0,
    "explain": "if __name__ == '__main__' guard обязателен: иначе рекурсивный spawn дочерних. fork копирует уже загруженную память.",
    "kind": "single",
    "id": "s341",
    "fixed": true
  },
  {
    "q": "В чём риск fork без exec на macOS при spawn-контексте?",
    "options": [
      "небезопасное состояние locks/threads после fork в многопоточном родителе",
      "fork всегда быстрее spawn без минусов",
      "риска нет на Unix",
      "проблема только на Windows"
    ],
    "answer": 0,
    "explain": "macOS/Python 3.8+ default spawn, но если форкнуть многопоточный процесс — классика deadlock. Предпочтительны spawn/fork+exec.",
    "kind": "single",
    "id": "s460",
    "fixed": true
  },
  {
    "q": "Что даёт multiprocessing.shared_memory (3.8+)?",
    "options": [
      "общий буфер байтов между процессами по имени",
      "общий GIL между процессами",
      "прозрачный shared Python-объект любого типа",
      "замену pickle для всех структур автоматически"
    ],
    "answer": 0,
    "explain": "SharedMemory создаёт mmap-блок; процессы синхронизируют доступ сами (Lock). Не заменяет Manager для dict/list.",
    "kind": "single",
    "id": "s471",
    "fixed": true
  },
  {
    "q": "Зачем в multiprocessing заменять Reducer?",
    "options": [
      "кастомная сериализация при передаче объектов между процессами",
      "ускорение GIL",
      "замена pickle на JSON всегда",
      "отключение Queue"
    ],
    "answer": 0,
    "explain": "register() подменяет reduce для своих типов: эффективнее pickle, поддержка shared memory handles.",
    "kind": "single",
    "id": "s481",
    "fixed": true
  },
  {
    "q": "Что делает multiprocessing.resource_tracker?",
    "options": [
      "отслеживает и очищает shared ресурсы при spawn",
      "заменяет GIL",
      "профилирует CPU",
      "только для threading"
    ],
    "answer": 0,
    "explain": "При spawn дочерние семафоры/shared_memory должны не утекать. resource_tracker регистрирует и unlink при выходе.",
    "kind": "single",
    "id": "s498",
    "fixed": true
  }
);
