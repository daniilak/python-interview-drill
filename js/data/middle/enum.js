// @meta topic=enum group=Typing и dataclasses
// middle · 9 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем нужен enum.Enum?",
    "options": [
      "чтобы задать набор именованных констант с фиксированными значениями",
      "чтобы ускорить циклы за счёт GIL",
      "чтобы заменить все int на строки в рантайме",
      "чтобы отключить проверку типов в mypy"
    ],
    "answer": 0,
    "explain": "Enum — перечисление: именованные члены вместо «магических» чисел/строк. Сравнение идёт по идентичности членов, набор значений фиксирован. Это не про GIL и не про ускорение.",
    "kind": "single",
    "id": "m1",
    "fixed": true
  },
  {
    "q": "Что такое functional API у Enum?",
    "options": [
      "динамическое создание: Enum('Color', 'RED GREEN BLUE')",
      "единственный способ — только class Color(Enum): ...",
      "API только для IntFlag",
      "замена dataclass"
    ],
    "answer": 0,
    "explain": "Кроме class-синтаксиса Enum можно собрать вызовом-фабрикой со строкой имён или списком. Удобно для кодогенерации.",
    "kind": "single",
    "id": "m104",
    "fixed": true
  },
  {
    "q": "Когда члены Enum сравнимы с int?",
    "options": [
      "если это IntEnum или IntFlag",
      "всегда у любого Enum",
      "никогда",
      "только у StrEnum"
    ],
    "answer": 0,
    "explain": "Обычный Enum с int не равен числу. IntEnum/IntFlag ведут себя как int. StrEnum — про строки.",
    "kind": "single",
    "id": "m159",
    "fixed": true
  },
  {
    "q": "Что даёт StrEnum в Python 3.11+?",
    "options": [
      "перечисление, члены которого являются str и сравнимы со строками",
      "только числовые коды без строкового значения",
      "замену dataclass",
      "асинхронный enum для asyncio"
    ],
    "answer": 0,
    "explain": "Enum.StrEnum (3.11+): члены — и Enum, и str. Удобно для статусов/кодов API: можно сравнивать с обычными строками и сериализовать без .value вручную.",
    "kind": "single",
    "id": "m302",
    "fixed": true
  },
  {
    "q": "Что делает @enum.unique?",
    "options": [
      "запрещает дублирующиеся значения членов Enum",
      "делает Enum быстрее",
      "разрешает любые дубли",
      "конвертирует в IntFlag"
    ],
    "answer": 0,
    "explain": "При дубле значения unique поднимает ValueError на этапе определения класса.",
    "kind": "single",
    "id": "m448",
    "fixed": true
  },
  {
    "q": "Как сравниваются члены Enum?",
    "options": [
      "по идентичности/члену Enum, не как «сырые» int (если не IntEnum)",
      "всегда как int даже у чистого Enum",
      "только по имени строки без value",
      "сравнение запрещено"
    ],
    "answer": 0,
    "explain": "Color.RED == Color.RED True; Color.RED == 1 обычно False у Enum (у IntEnum — иначе).",
    "kind": "single",
    "id": "m596",
    "fixed": true
  },
  {
    "q": "Для чего нужны Flag / IntFlag?",
    "options": [
      "для битовых флагов, которые можно комбинировать через |",
      "для перечисления обычных строк",
      "для JSON Schema",
      "для аннотаций pathlib"
    ],
    "answer": 0,
    "explain": "Flag/IntFlag — enum с битовыми масками: |, & и проверки членства. Обычный Enum/StrEnum — про другие сценарии.",
    "kind": "single",
    "id": "m628",
    "fixed": true
  },
  {
    "q": "Что такое enum.auto()?",
    "options": [
      "автоматическая подстановка значений членов Enum",
      "случайное значение каждый раз",
      "только строки",
      "запрет Flag"
    ],
    "answer": 0,
    "explain": "auto() даёт 1,2,3… (или по правилам кастомного _generate_next_value_).",
    "kind": "single",
    "id": "m732",
    "fixed": true
  },
  {
    "q": "Как auto() выбирает значения?",
    "options": [
      "по правилам Enum/Flag (_generate_next_value_)",
      "случайно из os.urandom",
      "всегда 0",
      "только UUID"
    ],
    "answer": 0,
    "explain": "Можно переопределить генерацию в своём Enum.",
    "kind": "single",
    "id": "m830",
    "fixed": true
  }
);
