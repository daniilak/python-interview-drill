// @meta topic=lazy group=Метаклассы и типы
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "В чём риск module-level PEP 562 __getattr__?",
    "options": [
      "скрытые ImportError, стоимость при каждом доступе к «ленивому» имени",
      "всегда быстрее eager import",
      "обязателен для всех пакетов по PEP",
      "гарантированно ломает circular imports"
    ],
    "answer": 0,
    "explain": "def __getattr__(name): import heavy_sub; ... — первый доступ дорогой, traceback запутанный. Хорош для lazy API, плох при злоупотреблении публичным API.",
    "kind": "single",
    "id": "s162",
    "fixed": true
  },
  {
    "q": "Плюс import внутри функции?",
    "options": [
      "ленивый старт и меньше циклических импортов при загрузке модуля",
      "всегда быстрее import на уровне модуля",
      "обязателен для typed dict",
      "отключает GIL на время импорта"
    ],
    "answer": 0,
    "explain": "Тяжёлый/опциональный deps — по требованию. Разрывает цикл A→B→A: отложенный import в функции после определения классов.",
    "kind": "single",
    "id": "s263",
    "fixed": true
  },
  {
    "q": "Когда в module-level __getattr__ стоит кэшировать?",
    "options": [
      "если импорт или вычисление атрибута дорогие (PEP 562 lazy)",
      "всегда кэшировать без ограничений",
      "никогда — ломает import",
      "только для dunder методов"
    ],
    "answer": 0,
    "explain": "lazy import тяжёлого subpackage: первый доступ — import, setattr в module.__dict__ — дальше обычный getattr без накладных.",
    "kind": "single",
    "id": "s277",
    "fixed": true
  }
);
