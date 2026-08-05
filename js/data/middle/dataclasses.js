// @meta topic=dataclasses group=Typing и dataclasses
// middle · 24 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что возвращает dataclasses.fields()?",
    "options": [
      "кортеж объектов Field с описанием полей",
      "только словарь текущих значений экземпляра",
      "JSON-строку со схемой",
      "сырые __annotations__ без метаданных Field"
    ],
    "answer": 0,
    "explain": "`fields(class_or_instance)` даёт кортеж `Field`: имя, тип, default, metadata и т.д. Это интроспекция схемы dataclass, а не `asdict` со значениями.",
    "kind": "single",
    "id": "m46",
    "fixed": true
  },
  {
    "q": "Делят ли экземпляры @dataclass Point поле `x: int = 0`?",
    "options": [
      "нет — immutable default для int безопасен, у каждого экземпляра своё значение",
      "да — как с default [] у list",
      "это SyntaxError",
      "работает только с frozen=True"
    ],
    "answer": 0,
    "explain": "Проблемный shared default — мутабельный (`list`, `dict`). У `int = 0` каждый экземпляр получает своё значение поля; это не общий список на класс.",
    "kind": "single",
    "id": "m90",
    "fixed": true
  },
  {
    "q": "Зачем field(default_factory=set) в dataclass?",
    "options": [
      "чтобы у каждого экземпляра был свой новый set()",
      "чтобы все экземпляры делили один общий set",
      "чтобы запретить поле",
      "только для сериализации в JSON"
    ],
    "answer": 0,
    "explain": "Мутабельный default нельзя писать как x: set = set(). default_factory вызывает фабрику на каждый экземпляр — иначе shared state.",
    "kind": "single",
    "id": "m146",
    "fixed": true
  },
  {
    "q": "Для чего нужен dataclasses.make_dataclass?",
    "options": [
      "динамически создать класс-dataclass во время выполнения",
      "только как замена NamedTuple",
      "только как замена TypedDict",
      "это синтаксический сахар для JSON Schema"
    ],
    "answer": 0,
    "explain": "Make_dataclass собирает dataclass из имени и списка полей в runtime — удобно для кодогенерации/динамических схем. NamedTuple/TypedDict — другие инструменты.",
    "kind": "single",
    "id": "m224",
    "fixed": true
  },
  {
    "q": "Зачем field(default_factory=dict) в dataclass?",
    "options": [
      "новый dict() на каждый экземпляр",
      "один общий dict на все экземпляры",
      "запрет поля",
      "только для JSON"
    ],
    "answer": 0,
    "explain": "Мутабельный default нельзя шарить. default_factory вызывает dict() при создании каждого instance.",
    "kind": "single",
    "id": "m341",
    "fixed": true
  },
  {
    "q": "Что делает field(repr=False) в dataclass?",
    "options": [
      "скрывает поле из автогенерируемого __repr__",
      "удаляет поле из экземпляра",
      "запрещает сравнение",
      "делает поле ClassVar"
    ],
    "answer": 0,
    "explain": "Удобно не светить секреты/тяжёлые поля в repr. На хранение значения не влияет.",
    "kind": "single",
    "id": "m405",
    "fixed": true
  },
  {
    "q": "Что dataclasses.asdict делает неидеально?",
    "options": [
      "не волшебно сериализует произвольные вложенные объекты «как надо всегда»",
      "всегда падает на любом dataclass",
      "удаляет поля",
      "меняет исходный объект in-place"
    ],
    "answer": 0,
    "explain": "asdict рекурсивно обходит dataclasses/dict/list, но кастомные типы могут потребовать своего encoder.",
    "kind": "single",
    "id": "m458",
    "fixed": true
  },
  {
    "q": "Что делает field(hash=False) в dataclass?",
    "options": [
      "исключает поле из автогенерируемого __hash__",
      "запрещает хранить поле",
      "делает поле ClassVar",
      "включает slots"
    ],
    "answer": 0,
    "explain": "При hash=True у dataclass можно выкинуть мутабельные/шумные поля из хеша.",
    "kind": "single",
    "id": "m467",
    "fixed": true
  },
  {
    "q": "Что добавляет dataclass(order=True)?",
    "options": [
      "методы сравнения < <= > >= по полям",
      "только __hash__",
      "сортировку полей в памяти",
      "запрет eq"
    ],
    "answer": 0,
    "explain": "order=True требует eq=True и генерирует ordering из порядка полей.",
    "kind": "single",
    "id": "m496",
    "fixed": true
  },
  {
    "q": "Что даёт dataclass(frozen=True)?",
    "options": [
      "неизменяемые экземпляры (присваивание полей → ошибка)",
      "ускорение в 100 раз",
      "запрет __init__",
      "mutable по умолчанию сильнее"
    ],
    "answer": 0,
    "explain": "frozen генерирует __setattr__, запрещающий изменения; удобно для hashable value-objects.",
    "kind": "single",
    "id": "m503",
    "fixed": true
  },
  {
    "q": "Что такое InitVar в dataclass?",
    "options": [
      "поле только для __init__/__post_init__, в экземпляре не хранится",
      "обычное поле в __dict__",
      "ClassVar",
      "property"
    ],
    "answer": 0,
    "explain": "InitVar передаётся в конструктор и __post_init__, но не становится атрибутом instance.",
    "kind": "single",
    "id": "m535",
    "fixed": true
  },
  {
    "q": "Зачем field(default_factory=list)?",
    "options": [
      "избежать общего мутабельного default на все экземпляры",
      "сделать поле ClassVar",
      "запретить list",
      "ускорить hash"
    ],
    "answer": 0,
    "explain": "Как и в обычных def: default=[] шарится. default_factory вызывает list() каждый раз.",
    "kind": "single",
    "id": "m576",
    "fixed": true
  },
  {
    "q": "@dataclass class Cell: x: int = -1 — делят ли экземпляры x?",
    "options": [
      "нет — immutable default int безопасен",
      "да — один int на всех как list",
      "ошибка dataclass",
      "x станет ClassVar"
    ],
    "answer": 0,
    "explain": "Проблема shared default — у мутабельных (list/dict). int/str/None ок.",
    "kind": "single",
    "id": "m648",
    "fixed": true
  },
  {
    "q": "Что делает dataclass(frozen=True)?",
    "options": [
      "делает экземпляры приблизительно неизменяемыми",
      "удаляет поля",
      "включает slots всегда без опции",
      "запрещает __init__"
    ],
    "answer": 0,
    "explain": "Присвоение полям → FrozenInstanceError. Для hashable value objects.",
    "kind": "single",
    "id": "m664",
    "fixed": true
  },
  {
    "q": "Что генерирует @dataclass?",
    "options": [
      "__init__, __repr__, __eq__ и др. по флагам",
      "только __slots__ всегда",
      "ORM-таблицу",
      "async методы"
    ],
    "answer": 0,
    "explain": "Декоратор пишет шаблонные методы из аннотаций полей. frozen/order/slots — опции.",
    "kind": "single",
    "id": "m700",
    "fixed": true
  },
  {
    "q": "@dataclass class Node: x: int = 1 — шарится ли default между экземплярами?",
    "options": [
      "нет — int immutable, default безопасен",
      "да как у list",
      "ошибка dataclass",
      "x станет shared dict"
    ],
    "answer": 0,
    "explain": "Опасны мутабельные defaults. int/str/None/tuple из иммутабельного — ок.",
    "kind": "single",
    "id": "m712",
    "fixed": true
  },
  {
    "q": "Что делает dataclasses.replace(obj, **changes)?",
    "options": [
      "возвращает новый объект с заменами полей",
      "меняет obj in-place",
      "удаляет dataclass",
      "только для frozen=False запрещён"
    ],
    "answer": 0,
    "explain": "Особенно полезно с frozen=True — «копия с правками».",
    "kind": "single",
    "id": "m720",
    "fixed": true
  },
  {
    "q": "Что такое KW_ONLY в dataclass?",
    "options": [
      "поля после маркера — только keyword-only в __init__",
      "запрет kwargs",
      "только ClassVar",
      "удаление полей"
    ],
    "answer": 0,
    "explain": "dataclasses.KW_ONLY (3.10+): удобно смешивать позиционные и kw-only поля.",
    "kind": "single",
    "id": "m724",
    "fixed": true
  },
  {
    "q": "Что делает dataclasses.asdict(obj)?",
    "options": [
      "рекурсивно превращает dataclass в dict",
      "меняет obj in-place в dict",
      "только JSON string",
      "удаляет вложенность"
    ],
    "answer": 0,
    "explain": "Вложенные dataclass/list/tuple тоже обходятся. Для JSON потом dumps.",
    "kind": "single",
    "id": "m736",
    "fixed": true
  },
  {
    "q": "Куда не попадает InitVar как обычное поле?",
    "options": [
      "в хранимые поля экземпляра / обычный repr/eq набор полей",
      "в аргументы __init__",
      "в __post_init__",
      "никогда никуда не передаётся"
    ],
    "answer": 0,
    "explain": "InitVar только для инициализации; после конструктора как атрибут не живёт.",
    "kind": "single",
    "id": "m756",
    "fixed": true
  },
  {
    "q": "Что делает field(compare=False)?",
    "options": [
      "исключает поле из сравнений __eq__/order",
      "удаляет поле",
      "запрещает hash всего класса",
      "делает InitVar"
    ],
    "answer": 0,
    "explain": "Полезно для кэшей/служебных полей, которые не должны влиять на равенство.",
    "kind": "single",
    "id": "m760",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "[1]",
      "[]",
      "[1,1]",
      "ошибка"
    ],
    "answer": 0,
    "explain": "default_factory=list даёт новый list на экземпляр; после append остаётся [1].",
    "kind": "single",
    "code": "from dataclasses import dataclass, field\n@dataclass\nclass A:\n    xs: list = field(default_factory=list)\na, b = A(), A()\na.xs.append(1)\nprint(b.xs)",
    "id": "m767",
    "fixed": true
  },
  {
    "q": "Что даёт slots=True у dataclass (3.10+)?",
    "options": [
      "генерирует __slots__ для экземпляров",
      "запрещает методы",
      "включает ORM",
      "делает frozen"
    ],
    "answer": 0,
    "explain": "Экономия памяти/чуть быстрее attribute access; без __dict__ по умолчанию.",
    "kind": "single",
    "id": "m806",
    "fixed": true
  },
  {
    "q": "Что даёт kw_only=True у dataclass (3.10+)?",
    "options": [
      "все поля только как keyword-only в __init__",
      "запрет полей",
      "только slots",
      "frozen"
    ],
    "answer": 0,
    "explain": "Вызов только Class(x=1, y=2), не Class(1,2) — если все поля kw-only.",
    "kind": "single",
    "id": "m824",
    "fixed": true
  }
);
