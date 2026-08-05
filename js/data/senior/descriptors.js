// @meta topic=дескрипторы group=Метаклассы и типы
// senior · 10 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Чем data descriptor отличается от non-data?",
    "options": [
      "имеет __set__ и/или __delete__ (обычно плюс __get__)",
      "определяет только __get__ без записи",
      "это любой объект с __call__",
      "работает только внутри метакласса type"
    ],
    "answer": 0,
    "explain": "Data descriptor (property, data-дескриптор) перебивает instance.__dict__ при lookup. Non-data (методы) уступает атрибуту экземпляра в __dict__.",
    "kind": "single",
    "id": "s33",
    "fixed": true
  },
  {
    "q": "Что такое non-data descriptor?",
    "options": [
      "дескриптор только с __get__, слабее instance.__dict__",
      "дескриптор с __set__ и __delete__",
      "любой callable без __get__",
      "атрибут только в метаклассе"
    ],
    "answer": 0,
    "explain": "Функции в классе — non-data descriptors (только __get__ → bound method). Если в instance.__dict__ есть одноимённый ключ — он побеждает non-data, но не data descriptor.",
    "kind": "single",
    "id": "s130",
    "fixed": true
  },
  {
    "q": "Чем data descriptor отличается от non-data в lookup?",
    "options": [
      "наличие __set__/__delete__ даёт приоритет над instance.__dict__",
      "разницы нет",
      "только при __slots__ без dict",
      "только влияет на GC, не на lookup"
    ],
    "answer": 0,
    "explain": "Порядок: data descriptor на классе → instance dict → non-data descriptor → class dict. Property с setter — data, метод — non-data.",
    "kind": "single",
    "id": "s146",
    "fixed": true
  },
  {
    "q": "Как функция в теле класса становится bound method?",
    "options": [
      "дескриптор function.__get__ возвращает связанный метод при доступе через instance",
      "компилятор автоматически вставляет self в байткод при import",
      "метакласс type копирует функцию в __dict__ экземпляра",
      "только через декоратор @classmethod"
    ],
    "answer": 0,
    "explain": "function — non-data descriptor: obj.f → f.__get__(obj, cls) даёт bound method с привязанным self. На классе — function object.",
    "kind": "single",
    "id": "s207",
    "fixed": true
  },
  {
    "q": "Зачем дескриптору метод `__delete__`?",
    "options": [
      "перехватить `del obj.attr` для валидации или очистки ресурса",
      "удалить класс из MRO",
      "запретить garbage collection",
      "только для property setter"
    ],
    "answer": 0,
    "explain": "Data descriptor с __delete__ участвует в del instance.attr. Пример — освобождение handle при удалении атрибута.",
    "kind": "single",
    "id": "s305",
    "fixed": true
  },
  {
    "q": "Почему instance attr может затенить метод класса?",
    "options": [
      "функции — non-data дескрипторы: instance.__dict__ имеет приоритет над __get__ без __set__",
      "методы всегда в MRO выше instance dict",
      "только при __slots__",
      "из-за GIL"
    ],
    "answer": 0,
    "explain": "obj.x = 1 создаёт entry в instance dict; obj.f ищет f в dict раньше, чем descriptor на классе. Data descriptor с __set__ — иначе.",
    "kind": "single",
    "id": "s331",
    "fixed": true
  },
  {
    "q": "Кто побеждает: data descriptor или instance __dict__?",
    "options": [
      "data descriptor (с __set__ или __delete__)",
      "всегда instance __dict__",
      "всегда class __dict__ без lookup",
      "slots отключают дескрипторы"
    ],
    "answer": 0,
    "explain": "Порядок: data descriptor → instance dict → non-data descriptor → class dict. property с setter — data descriptor.",
    "kind": "single",
    "id": "s417",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "2",
      "1",
      "AttributeError",
      "None"
    ],
    "answer": 0,
    "explain": "Обычный метод — non-data descriptor: экземпляр может перекрыть его своим атрибутом a.f = 2. print(a.f) → 2. Data descriptor (__set__) так просто не перебить.",
    "kind": "single",
    "code": "class A:\n    def f(self): return 1\na = A()\na.f = 2\nprint(a.f)",
    "id": "s429",
    "fixed": true
  },
  {
    "q": "Что такое __get__/__set__/__delete__ — протокол?",
    "options": [
      "дескрипторов (property — частный случай)",
      "только metaclasses",
      "async context",
      "import hooks"
    ],
    "answer": 0,
    "explain": "Управляют доступом к атрибутам. Дескрипторы управляют доступом к атрибутам через __get__, __set__ и __delete__.",
    "kind": "single",
    "id": "s441",
    "fixed": true
  },
  {
    "q": "Data descriptor с __set__ побеждает кого при lookup?",
    "options": [
      "instance __dict__",
      "только class __dict__",
      "метакласс всегда",
      "slots запрещают дескрипторы"
    ],
    "answer": 0,
    "explain": "Data descriptor имеет приоритет над instance dict. Non-data (только __get__) проигрывает dict экземпляра.",
    "kind": "single",
    "id": "s484",
    "fixed": true
  }
);
