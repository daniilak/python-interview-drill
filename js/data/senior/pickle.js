// @meta topic=pickle group=Stdlib и производительность
// senior · 6 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем в pickle out-of-band buffers?",
    "options": [
      "передать крупные bytes/buffer без лишнего копирования в поток pickle",
      "сериализовать объекты напрямую в JSON",
      "запретить сериализацию bytes",
      "всегда вызывать ошибку при pickle bytes"
    ],
    "answer": 0,
    "explain": "Pickle 5+ позволяет вынести большие буферы «сбоку»: в потоке — ссылка, сами данные передаются отдельно. Меньше копий при IPC и multiprocessing.",
    "kind": "single",
    "id": "s27",
    "fixed": true
  },
  {
    "q": "Почему pickle из недоверенного источника опасен?",
    "options": [
      "десериализация может выполнить произвольный код",
      "только большой размер файла",
      "ломает кодировку UTF-8",
      "медленнее JSON всегда — единственный риск"
    ],
    "answer": 0,
    "explain": "Pickle вызывает __reduce__ и произвольные callables. RCE при loads(attacker_bytes). Только доверенные данные.",
    "kind": "single",
    "id": "s458",
    "fixed": true
  },
  {
    "q": "В чём риск pickle.loads на недоверенных данных?",
    "options": [
      "можно выполнить произвольный код при десериализации",
      "только потеря точности float",
      "только SyntaxError",
      "pickle всегда безопасен read-only"
    ],
    "answer": 0,
    "explain": "Pickle может сконструировать произвольные объекты и вызвать код. На недоверенном вводе — это RCE. Для обмена данными используй JSON/msgpack и свои схемы.",
    "kind": "single",
    "code": "# pickle.loads(user_bytes)",
    "id": "s469",
    "fixed": true
  },
  {
    "q": "Что позволяет reduce протокол?",
    "options": [
      "классу вернуть инструкцию __reduce__/__reduce_ex__ для кастомной pickle-сериализации",
      "ускорить json.dumps в 10 раз без схемы",
      "сделать pickle безопасным для недоверенных данных",
      "заменить __init__ при создании экземпляра из pickle"
    ],
    "answer": 0,
    "explain": "__reduce__ возвращает (callable, args) для восстановления объекта. Нужен для несериализуемых по умолчанию типов. Опасен в руках атакующего — произвольный callable.",
    "kind": "single",
    "id": "s557",
    "fixed": true
  },
  {
    "q": "Что такое reduce_ex protocol?",
    "options": [
      "версия протокола pickle, которую __reduce_ex__ должен поддерживать",
      "метод сжатия gzip внутри pickle stream",
      "замена __init__ при unpickle для dataclass",
      "флаг безопасной десериализации в pickle 5"
    ],
    "answer": 0,
    "explain": "__reduce_ex(protocol) получает целевую версию протокола pickle (0-5). Позволяет сериализовать по-разному для совместимости со старыми читателями.",
    "kind": "single",
    "id": "s572",
    "fixed": true
  },
  {
    "q": "Что такое persistent_id?",
    "options": [
      "хук Pickler для внешних ссылок вместо вложенной сериализации объекта",
      "id процесса в multiprocessing",
      "первичный ключ ORM в pickle",
      "имя файла .pkl на диске"
    ],
    "answer": 0,
    "explain": "persistent_id(obj) возвращает id; persistent_load восстанавливает. Для БД/BLOB ссылок. Не путать с __reduce__.",
    "kind": "single",
    "id": "s637",
    "fixed": true
  }
);
