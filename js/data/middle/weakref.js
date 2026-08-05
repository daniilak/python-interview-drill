// @meta topic=weakref group=Stdlib и производительность
// middle · 8 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем weakref?",
    "options": [
      "ссылаться на объект, не мешая сборщику его удалить",
      "увеличить refcount навсегда",
      "заменить все обычные ссылки",
      "ускорить dict"
    ],
    "answer": 0,
    "explain": "Кэши, наблюдатели, графы без циклов удержания. WeakValueDictionary и т.п.",
    "kind": "single",
    "id": "m493",
    "fixed": true
  },
  {
    "q": "Что делает weakref.finalize(obj, callback)?",
    "options": [
      "регистрирует вызов callback при уничтожении объекта GC",
      "увеличивает refcount навсегда",
      "немедленно удаляет obj",
      "заменяет __del__"
    ],
    "answer": 0,
    "explain": "Надёжнее __del__ для очистки: finalize живёт отдельно и не создаёт цикл так же легко.",
    "kind": "single",
    "id": "m550",
    "fixed": true
  },
  {
    "q": "Когда WeakValueDictionary забывает значение?",
    "options": [
      "когда не осталось сильных ссылок на объект-значение",
      "никогда",
      "только при reboot",
      "при любом чтении ключа"
    ],
    "answer": 0,
    "explain": "Слабая ссылка не удерживает объект; после GC ключ пропадает из mapping.",
    "kind": "single",
    "id": "m630",
    "fixed": true
  },
  {
    "q": "Что показывает weakref.getweakrefcount?",
    "options": [
      "число слабых ссылок на объект",
      "сильный refcount",
      "размер объекта",
      "поколение GC"
    ],
    "answer": 0,
    "explain": "Сколько WeakRef/прокси сейчас смотрят на объект.",
    "kind": "single",
    "id": "m754",
    "fixed": true
  },
  {
    "q": "Что делает callback у weakref.ref?",
    "options": [
      "вызывается при смерти объекта",
      "при каждом чтении",
      "увеличивает refcount",
      "запрещает GC"
    ],
    "answer": 0,
    "explain": "Можно подчистить реестр. finalize — более удобный API для многих случаев.",
    "kind": "single",
    "id": "m838",
    "fixed": true
  },
  {
    "q": "Что хранит WeakValueDictionary?",
    "options": [
      "сильные ключи и слабые ссылки на значения",
      "слабые ключи и сильные значения (это WeakKeyDictionary)",
      "только int",
      "сильные всё"
    ],
    "answer": 0,
    "explain": "Когда значение уничтожено GC — запись пропадает.",
    "kind": "single",
    "id": "m868",
    "fixed": true
  },
  {
    "q": "Что не делает weakref.proxy?",
    "options": [
      "не удерживает объект сильной ссылкой (как обычная переменная)",
      "не позволяет вызывать методы пока объект жив",
      "не существует в stdlib",
      "увеличивает refcount как сильная ссылка"
    ],
    "answer": 0,
    "explain": "proxy ведёт себя как объект, но слабо; после смерти — ReferenceError.",
    "kind": "single",
    "id": "m876",
    "fixed": true
  },
  {
    "q": "Какие ключи у WeakKeyDictionary?",
    "options": [
      "слабые; объекты должны быть hashable и weakly referenceable",
      "только str",
      "сильные навсегда",
      "только int"
    ],
    "answer": 0,
    "explain": "Когда ключ собран GC — запись исчезает. Не все объекты поддерживают weakref.",
    "kind": "single",
    "id": "m897",
    "fixed": true
  }
);
