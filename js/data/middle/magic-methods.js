// @meta topic=магические group=Контекст и магические методы
// middle · 20 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что даёт объекту метод __call__?",
    "options": [
      "возможность вызывать объект как функцию: obj(...)",
      "возможность писать for x in obj",
      "использование в with obj",
      "поведение дескриптора при доступе к атрибуту"
    ],
    "answer": 0,
    "explain": "__call__ делает экземпляр callable. Итерация — __iter__/__getitem__, контекст — __enter__/__exit__, дескриптор — __get__/__set__.",
    "kind": "single",
    "id": "m8",
    "fixed": true
  },
  {
    "q": "Что определяет метод __eq__?",
    "options": [
      "сравнение на равенство через ==",
      "порядок сортировки через <",
      "хеш объекта для dict/set",
      "строковое представление для print"
    ],
    "answer": 0,
    "explain": "__eq__ задаёт поведение == (и косвенно !=). Для сортировки нужен __lt__ и компания; для dict/set — согласованный __hash__.",
    "kind": "single",
    "id": "m23",
    "fixed": true
  },
  {
    "q": "В чём разница между __str__ и __repr__?",
    "options": [
      "__str__ — для пользователя, __repr__ — однозначное представление для отладки",
      "разницы нет, методы полные синонимы",
      "__str__ можно только у чисел",
      "__repr__ в языке запрещён"
    ],
    "answer": 0,
    "explain": "print и str() зовут __str__; в интерактивке и для отладки предпочтителен __repr__ (желательно eval-able). Если __str__ нет — падают на __repr__.",
    "kind": "single",
    "id": "m83",
    "fixed": true
  },
  {
    "q": "Что обслуживает метод __contains__?",
    "options": [
      "оператор in / not in для объекта",
      "только хеширование для dict",
      "сравнение на равенство ==",
      "создание итератора for"
    ],
    "answer": 0,
    "explain": "__contains__ реализует проверку `x in obj`. Если метода нет, Python может перебрать объект через итерацию. Это не __eq__ и не __hash__.",
    "kind": "single",
    "id": "m97",
    "fixed": true
  },
  {
    "q": "Что должен возвращать __len__?",
    "options": [
      "целое int ≥ 0",
      "любой float",
      "строку с длиной",
      "None"
    ],
    "answer": 0,
    "explain": "Протокол длины требует неотрицательный int. Иначе TypeError при len(obj).",
    "kind": "single",
    "id": "m125",
    "fixed": true
  },
  {
    "q": "Для чего нужен __length_hint__?",
    "options": [
      "дать оценку длины итератора (например для list(it)), не обязан быть точным len",
      "обязан вернуть точный len, иначе TypeError",
      "заменить __len__ у всех контейнеров",
      "нужен только для str"
    ],
    "answer": 0,
    "explain": "length_hint — подсказка для предаллокации. Это не строгий протокол len(); hint может врать.",
    "kind": "single",
    "id": "m139",
    "fixed": true
  },
  {
    "q": "Что значит, если класс реализует и __iter__, и __next__?",
    "options": [
      "экземпляр одновременно iterable и iterator",
      "так делать запрещено языком",
      "нужен только generator",
      "так можно только в async"
    ],
    "answer": 0,
    "explain": "Iterable даёт iterator через __iter__; iterator ещё имеет __next__. Совместить можно (одноразовый объект), но чаще разделяют.",
    "kind": "single",
    "id": "m153",
    "fixed": true
  },
  {
    "q": "Что вызывается при выражении a + b?",
    "options": [
      "сначала a.__add__(b), иначе b.__radd__(a)",
      "только a.__iadd__(b)",
      "обязательно hash(a)",
      "только b.__add__(a)"
    ],
    "answer": 0,
    "explain": "Бинарный +: левый __add__, при NotImplemented — отражённый __radd__. __iadd__ — для +=.",
    "kind": "single",
    "id": "m179",
    "fixed": true
  },
  {
    "q": "Что обслуживает метод __getitem__?",
    "options": [
      "доступ obj[key] / срезы",
      "доступ obj.key через точку",
      "вход в with obj",
      "вызов obj()"
    ],
    "answer": 0,
    "explain": "Квадратные скобки → __getitem__/__setitem__. Точка — __getattribute__, with — __enter__, вызов — __call__.",
    "kind": "single",
    "id": "m205",
    "fixed": true
  },
  {
    "q": "Зачем объекту метод __bytes__?",
    "options": [
      "чтобы bytes(obj) вернул байтовое представление",
      "чтобы заменить str(obj)",
      "это обязательный метод любого класса",
      "только для pathlib"
    ],
    "answer": 0,
    "explain": "Протокол bytes(obj) → __bytes__. Не путать со __str__/__repr__.",
    "kind": "single",
    "id": "m218",
    "fixed": true
  },
  {
    "q": "С чем должен быть согласован __hash__?",
    "options": [
      "с __eq__: равные объекты → одинаковый hash",
      "только с __repr__",
      "только с id()",
      "hash может быть любым даже при =="
    ],
    "answer": 0,
    "explain": "Инвариант: если a == b, то hash(a) == hash(b). Иначе dict/set ломаются.",
    "kind": "single",
    "id": "m257",
    "fixed": true
  },
  {
    "q": "Если нет __bool__, откуда берётся истинность объекта?",
    "options": [
      "из __len__ != 0 (если есть), иначе объект обычно truthy",
      "всегда False",
      "всегда из hash",
      "из __repr__"
    ],
    "answer": 0,
    "explain": "Правило: __bool__, иначе __len__, иначе True. Пустой контейнер с __len__==0 ложен.",
    "kind": "single",
    "id": "m270",
    "fixed": true
  },
  {
    "q": "Что обслуживает метод __format__?",
    "options": [
      "format(obj, spec) и f-строки с форматом {obj:spec}",
      "только str(obj)",
      "только repr(obj)",
      "hash(obj)"
    ],
    "answer": 0,
    "explain": "Спецификация формата после двоеточия идёт в __format__. str/repr — отдельные протоколы.",
    "kind": "single",
    "id": "m296",
    "fixed": true
  },
  {
    "q": "Если определили __eq__, что часто делают с __hash__ у мутабельных объектов?",
    "options": [
      "ставят __hash__ = None, чтобы объект был unhashable",
      "оставляют hash от id и ломают инвариант",
      "обязательно хешируют все поля всегда",
      "удаляют __eq__"
    ],
    "answer": 0,
    "explain": "После своего __eq__ наследуемый __hash__ отключается (None). Для ключей dict нужен согласованный неизменяемый hash.",
    "kind": "single",
    "id": "m322",
    "fixed": true
  },
  {
    "q": "Что напечатает print(obj)?",
    "options": [
      "hi",
      "Obj",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "print зовёт str → __str__, который в коде возвращает 'hi'.",
    "kind": "single",
    "code": "class Obj:\n    def __str__(self):\n        return 'hi'\nprint(Obj())",
    "id": "m335",
    "fixed": true
  },
  {
    "q": "Зачем нужен __matmul__?",
    "options": [
      "оператор @ (матричное умножение / другие семантики)",
      "только декораторы",
      "только async with",
      "форматирование строк"
    ],
    "answer": 0,
    "explain": "PEP 465 ввёл @. NumPy использует для matmul; можно определить свою семантику.",
    "kind": "single",
    "id": "m399",
    "fixed": true
  },
  {
    "q": "Зачем дескриптору __set_name__?",
    "options": [
      "узнать имя атрибута и класс-владельца при создании класса",
      "вызывать при каждом get",
      "заменить __get__",
      "только для slots"
    ],
    "answer": 0,
    "explain": "PEP 487: при определении класса дескриптор получает owner и name — удобно для Field/validators.",
    "kind": "single",
    "id": "m411",
    "fixed": true
  },
  {
    "q": "Зачем нужен __reversed__?",
    "options": [
      "чтобы объект поддерживал reversed(obj) со своей логикой",
      "чтобы сортировать элементы",
      "это синоним __iter__",
      "только для числовых типов"
    ],
    "answer": 0,
    "explain": "__reversed__ — протокол для reversed(). Если его нет, reversed может идти через последовательность (__len__/__getitem__). Это не sort и не замена __iter__.",
    "kind": "single",
    "id": "m433",
    "fixed": true
  },
  {
    "q": "Зачем нужен __index__?",
    "options": [
      "преобразование к int для индексов/срезов/bin/hex/oct",
      "только для float",
      "хеширование строк",
      "async await"
    ],
    "answer": 0,
    "explain": "Объекты вроде numpy.int64 реализуют __index__, чтобы работать как индексы без потери точности __int__.",
    "kind": "single",
    "id": "m444",
    "fixed": true
  },
  {
    "q": "Что возвращает __enter__?",
    "options": [
      "значение, которое попадёт в переменную после as",
      "всегда None обязательно",
      "только True/False успеха",
      "исключение"
    ],
    "answer": 0,
    "explain": "with CM() as x: — x = результат __enter__. Часто возвращают self.",
    "kind": "single",
    "id": "m463",
    "fixed": true
  }
);
