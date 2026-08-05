// @meta topic=serialization group=Данные и распределёнка
// senior · 7 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Почему protobuf/schema evolution важны?",
    "options": [
      "клиенты разных версий должны читать сообщения при добавлении полей",
      "чтобы JSON был красиво отформатирован",
      "чтобы убрать необходимость в backward compatibility",
      "только ради сжатия без схемы"
    ],
    "answer": 0,
    "explain": "В protobuf новые поля игнорируются старыми клиентами, удалённые — не ломают парсинг при правилах (field numbers, optional/required). Без эволюции схемы каждый деплой ломает контракт.",
    "kind": "single",
    "id": "s5",
    "fixed": true
  },
  {
    "q": "Что такое canonical JSON?",
    "options": [
      "детерминированное байтовое представление для подписей и сравнения хешей",
      "pretty-print с отступами для человека",
      "бинарный формат messagepack",
      "JSON без кавычек у ключей"
    ],
    "answer": 0,
    "explain": "Для подписи нужен один байтовый вид: порядок ключей, пробелы, Unicode-эскейпы фиксированы (RFC 8785 и аналоги). Обычный json.dumps может дать разные bytes при тех же данных.",
    "kind": "single",
    "id": "s39",
    "fixed": true
  },
  {
    "q": "Когда MessagePack/Protobuf лучше JSON?",
    "options": [
      "нужна компактность, схема и скорость (de)serialization",
      "всегда хуже JSON по всем метрикам",
      "только для логов человеку",
      "когда нужны комментарии в файле"
    ],
    "answer": 0,
    "explain": "JSON — отладка и браузеры. Protobuf — жёсткая схема, меньший размер, быстрее parse. Trade-off: читаемость без protoc.",
    "kind": "single",
    "id": "s467",
    "fixed": true
  },
  {
    "q": "В чём разница: msgpack/protobuf vs json?",
    "options": [
      "бинарные форматы компактнее; protobuf требует схему; json человекочитаем",
      "json всегда быстрее и меньше по размеру любого protobuf",
      "protobuf — текстовый формат как JSON с фигурными скобками",
      "msgpack безопасен для десериализации из сети как pickle"
    ],
    "answer": 0,
    "explain": "JSON — универсальный текст для API и отладки. Protobuf/msgpack экономят трафик и CPU, но нужна согласованная схема/типы. Ни один не заменяет валидацию на границе.",
    "kind": "single",
    "id": "s561",
    "fixed": true
  },
  {
    "q": "Что такое schema evolution backward/forward?",
    "options": [
      "совместимость: старые клиенты читают новые данные и/или новые — старые",
      "удаление всех полей сразу",
      "только JSON без схемы",
      "запрет версий"
    ],
    "answer": 0,
    "explain": "Backward/forward/full compatibility — правила добавления/удаления полей (protobuf/Avro).",
    "kind": "single",
    "id": "s780",
    "fixed": true
  },
  {
    "q": "Зачем protobuf unknown fields?",
    "options": [
      "сохраняют неизвестные поля для forward compatibility",
      "удаляют схему",
      "сжимают JSON",
      "ломают старых клиентов намеренно"
    ],
    "answer": 0,
    "explain": "Старый бинарник, встретив новые поля, может пронести их дальше не понимая — совместимость.",
    "kind": "single",
    "id": "s831",
    "fixed": true
  },
  {
    "q": "Почему protobuf часто schema-first?",
    "options": [
      "явный контракт и правила совместимости полей при эволюции",
      "без схемы нельзя сериализовать bytes",
      "только человекочитаемый текст",
      "запрет версий API"
    ],
    "answer": 0,
    "explain": "Схема (.proto) — источник правды для codegen и совместимости. Не «JSON как получится».",
    "kind": "single",
    "id": "s854",
    "fixed": true
  }
);
