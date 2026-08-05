// @meta topic=ABC group=ООП продвинутый
// middle · 9 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что вернёт abstractmethod + async def?",
    "options": [
      "поддерживается",
      "нельзя",
      "только sync",
      "только property"
    ],
    "answer": 0,
    "explain": "Результат выражения — поддерживается. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m9",
    "fixed": true
  },
  {
    "q": "Можно ли создать экземпляр ABC, если у него нет abstractmethod?",
    "options": [
      "да — без абстрактных методов ABC уже обычный конкретный класс",
      "нет — любой ABC всегда нельзя инстанцировать",
      "только через eval",
      "только в PyPy"
    ],
    "answer": 0,
    "explain": "ABCMeta запрещает инстанцирование, пока есть нереализованные @abstractmethod. Если абстрактных методов нет — экземпляр создать можно.",
    "kind": "single",
    "id": "m24",
    "fixed": true
  },
  {
    "q": "Зачем ABC нужен __subclasshook__?",
    "options": [
      "чтобы кастомизировать isinstance/issubclass без явного register",
      "чтобы переписать MRO всех классов",
      "чтобы ускорить import",
      "чтобы запретить наследование"
    ],
    "answer": 0,
    "explain": "__subclasshook__ позволяет ABC сказать: «считай класс виртуальным подклассом, если есть такие-то методы» — структурная проверка для isinstance.",
    "kind": "single",
    "id": "m69",
    "fixed": true
  },
  {
    "q": "Что делает ABC.register(cls)?",
    "options": [
      "объявляет cls виртуальным подклассом ABC без наследования",
      "создаёт файл на диске",
      "регистрирует класс в sys.modules",
      "добавляет класс в MRO всех потомков принудительно"
    ],
    "answer": 0,
    "explain": "После register isinstance(obj, ABC) может быть True, даже если cls не наследует ABC в MRO. Это виртуальное подклассство, не запись на диск.",
    "kind": "single",
    "id": "m84",
    "fixed": true
  },
  {
    "q": "Для чего abc.update_abstractmethods (3.10+)?",
    "options": [
      "пересчитать набор абстрактных методов после динамических правок класса",
      "всегда бросить TypeError",
      "вернуть None и ничего не делать полезного",
      "удалить все abstractmethod"
    ],
    "answer": 0,
    "explain": "Если вы на лету добавляете/убираете @abstractmethod, update_abstractmethods обновляет статус абстрактности класса.",
    "kind": "single",
    "id": "m126",
    "fixed": true
  },
  {
    "q": "Можно ли поставить @abstractmethod на property?",
    "options": [
      "да — абстрактный геттер/сеттер в ABC",
      "нет, только на обычные methods",
      "только вместе с classmethod",
      "только в Python 2"
    ],
    "answer": 0,
    "explain": "@abstractmethod может декорировать property: подкласс обязан реализовать свойство. Это штатный приём ABC.",
    "kind": "single",
    "id": "m167",
    "fixed": true
  },
  {
    "q": "Что вернёт abc.ABC / @abstractmethod?",
    "options": [
      "запрещает инстанс без реализации",
      "ускоряет",
      "добавляет slots",
      "заменяет Protocol"
    ],
    "answer": 0,
    "explain": "Результат выражения — запрещает инстанс без реализации. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m271",
    "fixed": true
  },
  {
    "q": "Как сейчас задают абстрактный classmethod?",
    "options": [
      "комбинацией @classmethod и @abstractmethod (порядок важен)",
      "только устаревшим abstractclassmethod без альтернатив",
      "нельзя никак",
      "только через __slots__"
    ],
    "answer": 0,
    "explain": "abstractclassmethod устарел; пиши @classmethod над/под @abstractmethod по документации ABC.",
    "kind": "single",
    "id": "m336",
    "fixed": true
  },
  {
    "q": "Что гарантирует @abstractmethod в ABC?",
    "options": [
      "нельзя создать экземпляр подкласса, пока абстрактные методы не реализованы",
      "метод нельзя переопределить",
      "метод станет staticmethod",
      "рантайм проверит типы аргументов"
    ],
    "answer": 0,
    "explain": "ABCMeta блокирует инстанцирование при незакрытых abstractmethod.",
    "kind": "single",
    "id": "m362",
    "fixed": true
  }
);
