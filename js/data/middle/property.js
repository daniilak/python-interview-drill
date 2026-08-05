// @meta topic=property group=Контекст и магические методы
// middle · 8 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Может ли @property.setter поменять тип хранимого значения?",
    "options": [
      "да — это твоя логика в setter",
      "нет, язык это запрещает",
      "можно хранить только int",
      "можно хранить только str"
    ],
    "answer": 0,
    "explain": "В setter ты волен нормализовать, конвертировать или хранить что угодно. Язык тип поля не фиксирует — только соглашения и type hints.",
    "kind": "single",
    "id": "m68",
    "fixed": true
  },
  {
    "q": "Что вернёт obj.__dict__ у slots-only?",
    "options": [
      "часто отсутствует",
      "всегда есть",
      "всегда list",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — часто отсутствует. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m111",
    "fixed": true
  },
  {
    "q": "Как сбросить functools.cached_property у экземпляра?",
    "options": [
      "del obj.attr (или убрать ключ из obj.__dict__)",
      "вызвать gc.collect() — этого достаточно всегда",
      "cached_property нельзя сбросить",
      "только перезапустить процесс"
    ],
    "answer": 0,
    "explain": "Значение кэшируется в __dict__ экземпляра. del obj.attr заставит пересчитать при следующем доступе.",
    "kind": "single",
    "id": "m231",
    "fixed": true
  },
  {
    "q": "Зачем нужен @property.setter?",
    "options": [
      "разрешить присваивание obj.x = ... через property",
      "запретить любые присваивания",
      "создать classmethod",
      "включить slots"
    ],
    "answer": 0,
    "explain": "Без setter property read-only. @x.setter задаёт логику записи.",
    "kind": "single",
    "id": "m361",
    "fixed": true
  },
  {
    "q": "Откуда берётся docstring у `property`?",
    "options": [
      "из docstring геттера (или аргумента doc= у property)",
      "только из docstring самого класса",
      "у property docstring задать нельзя",
      "только из комментария # рядом с полем по PEP 8"
    ],
    "answer": 0,
    "explain": "У `@property` в `__doc__` попадает docstring метода-геттера. Его же можно передать явно: `property(fget, doc=\"...\")`. `help(obj.prop)` и IDE показывают именно это — не docstring класса и не обычный `#` комментарий.",
    "kind": "single",
    "id": "m374",
    "fixed": true
  },
  {
    "q": "Что делает @property.deleter?",
    "options": [
      "обрабатывает del obj.x для property",
      "удаляет класс из модуля",
      "чистит весь __dict__",
      "вызывает gc.collect"
    ],
    "answer": 0,
    "explain": "@x.deleter задаёт логику удаления атрибута-property. Без него del obj.x может быть запрещён.",
    "kind": "single",
    "id": "m387",
    "fixed": true
  },
  {
    "q": "Во что превращает функция @property?",
    "options": [
      "атрибут с геттером (и опционально setter/deleter)",
      "staticmethod",
      "classmethod без self",
      "модульную функцию"
    ],
    "answer": 0,
    "explain": "@property делает вызов метода через доступ obj.x без скобок.",
    "kind": "single",
    "id": "m422",
    "fixed": true
  },
  {
    "q": "Что будет при obj.x = 1, если x — property без setter?",
    "options": [
      "AttributeError",
      "тихое игнорирование",
      "создание обычного атрибута в обход всегда",
      "TypeError от int"
    ],
    "answer": 0,
    "explain": "Read-only property запрещает присваивание → AttributeError: can't set attribute.",
    "kind": "single",
    "id": "m454",
    "fixed": true
  }
);
