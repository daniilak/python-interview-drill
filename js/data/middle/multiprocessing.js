// @meta topic=multiprocessing group=Потоки, процессы, GIL
// middle · 10 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Как multiprocessing.Queue передаёт объекты между процессами?",
    "options": [
      "сериализует (обычно pickle) и копирует данные",
      "всегда разделяет ту же память Python-объекта без копирования",
      "умеет передавать только str",
      "обходит GIL, шаря байткод"
    ],
    "answer": 0,
    "explain": "Между процессами нет общего адресного пространства объектов Python: Queue пиклит/депиклит. Не всё пиклится; мутабельный шаринг «как в потоках» тут не работает.",
    "kind": "single",
    "id": "m56",
    "fixed": true
  },
  {
    "q": "Что вернёт if __name__ == '__main__' критичен на?",
    "options": [
      "Windows/macOS spawn",
      "только Linux fork always ok без",
      "Jython only",
      "IDLE only"
    ],
    "answer": 0,
    "explain": "Результат выражения — Windows/macOS spawn. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m114",
    "fixed": true
  },
  {
    "q": "Чем multiprocessing.Pipe отличается от Queue?",
    "options": [
      "Pipe — пара концов на двоих; Queue — очередь для многих участников",
      "это одно и то же API",
      "Pipe работает только с asyncio",
      "Queue передаёт объекты без сериализации"
    ],
    "answer": 0,
    "explain": "Pipe удобен для двух процессов. Queue — многопроизводителей/потребителей, с пиклом. Оба не шарят сырые py-объекты.",
    "kind": "single",
    "id": "m169",
    "fixed": true
  },
  {
    "q": "Что такое multiprocessing.Array('i', n)?",
    "options": [
      "разделяемый между процессами типизированный буфер из n int",
      "обычный list Python в общей куче без ограничений",
      "массив только для asyncio",
      "NumPy ndarray"
    ],
    "answer": 0,
    "explain": "Array из multiprocessing — shared memory с ctypes-типом. Это не прозрачный list со ссылками на py-объекты.",
    "kind": "single",
    "id": "m234",
    "fixed": true
  },
  {
    "q": "Что вернёт Pool.map chunksize?",
    "options": [
      "влияет на нарезку задач",
      "отключает pickle",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — влияет на нарезку задач. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m273",
    "fixed": true
  },
  {
    "q": "Что даёт Manager().dict() в multiprocessing?",
    "options": [
      "прокси-словарь, которым могут пользоваться разные процессы",
      "обычный dict в общей куче без прокси",
      "только локальный dict текущего процесса",
      "Redis-клиент"
    ],
    "answer": 0,
    "explain": "Manager поднимает серверный процесс и отдаёт прокси. Доступ идёт через IPC/pickle, это не прозрачный shared dict.",
    "kind": "single",
    "id": "m299",
    "fixed": true
  },
  {
    "q": "Как multiprocessing обходит ограничение GIL для CPU?",
    "options": [
      "отдельными процессами со своими интерпретаторами",
      "отключением GIL флагом в threading",
      "только через asyncio",
      "увеличением числа зелёных потоков"
    ],
    "answer": 0,
    "explain": "У каждого процесса свой GIL. Цена — IPC и pickle. threading GIL не снимает.",
    "kind": "single",
    "id": "m364",
    "fixed": true
  },
  {
    "q": "Зачем initializer у multiprocessing.Pool?",
    "options": [
      "выполнить setup в каждом worker-процессе при старте",
      "инициализировать только главный процесс",
      "заменить map",
      "отключить pickle"
    ],
    "answer": 0,
    "explain": "initializer(initargs) зовётся в воркерах один раз — удобно открыть соединения/загрузить модель.",
    "kind": "single",
    "id": "m377",
    "fixed": true
  },
  {
    "q": "Что такое multiprocessing.sharedctypes?",
    "options": [
      "общие ctypes-значения/массивы между процессами",
      "обычный list без IPC",
      "только TCP-сокеты",
      "замена pickle"
    ],
    "answer": 0,
    "explain": "Value/Array из sharedctypes живут в shared memory; удобно для чисел, не для произвольных объектов.",
    "kind": "single",
    "id": "m424",
    "fixed": true
  },
  {
    "q": "Что такое start method forkserver?",
    "options": [
      "отдельный сервер-процесс, от которого форкают воркеры",
      "то же, что spawn без отличий",
      "только Windows default",
      "отключение multiprocessing"
    ],
    "answer": 0,
    "explain": "forkserver безопаснее/предсказуемее голого fork после многопоточности; spawn — чистый старт интерпретатора.",
    "kind": "single",
    "id": "m435",
    "fixed": true
  }
);
