// @meta topic=design group=Архитектура и дизайн
// senior · 20 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что означает принцип Tell, Don't Ask?",
    "options": [
      "объект сам выполняет действие, а не отдаёт данные для логики снаружи",
      "больше геттеров для каждого поля",
      "анемичная модель — идеал ООП",
      "все методы должны быть static"
    ],
    "answer": 0,
    "explain": "Плохо: if user.get_balance() > price: user.set_balance(...). Лучше: user.purchase(item). Инкапсуляция поведения, меньше утечки внутреннего состояния.",
    "kind": "single",
    "id": "s158",
    "fixed": true
  },
  {
    "q": "Что означает принцип fail fast?",
    "options": [
      "обнаруживать и сигнализировать об ошибке как можно раньше, не маскируя",
      "глотать исключения ради uptime",
      "бесконечно ретраить без лимита",
      "откладывать валидацию до продакшена"
    ],
    "answer": 0,
    "explain": "Невалидный ввод/состояние — сразу исключение или assert на границе. Дешевле упасть при старте, чем чинить тихую порчу данных.",
    "kind": "single",
    "id": "s188",
    "fixed": true
  },
  {
    "q": "Зачем идемпотентность в API?",
    "options": [
      "безопасные повторы запросов при сетевых таймаутах без двойного эффекта",
      "ускорение JSON parse",
      "обязательный GET вместо POST",
      "шифрование тела запроса"
    ],
    "answer": 0,
    "explain": "Клиент не знает, дошёл ли POST. Idempotent ключ или PUT по URI — повтор не создаст второй платёж.",
    "kind": "single",
    "id": "s301",
    "fixed": true
  },
  {
    "q": "Что вернёт dependency rule (clean arch)?",
    "options": [
      "зависимости к центру/домену",
      "к фреймворку inward ok",
      "DB в центре",
      "UI owns domain"
    ],
    "answer": 0,
    "explain": "Результат выражения — зависимости к центру/домену. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s314",
    "fixed": true
  },
  {
    "q": "Что вернёт policy + mechanism separation?",
    "options": [
      "решения отдельно от исполнения",
      "hardcode ifs everywhere",
      "god object",
      "anemic + services chaos"
    ],
    "answer": 0,
    "explain": "Результат выражения — решения отдельно от исполнения. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s365",
    "fixed": true
  },
  {
    "q": "Что вернёт parse, don't validate (часто)?",
    "options": [
      "парсить в богатые типы на границе",
      "валидировать везде сырые dict",
      "ошибка",
      "JSON forever"
    ],
    "answer": 0,
    "explain": "Результат выражения — парсить в богатые типы на границе. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s489",
    "fixed": true
  },
  {
    "q": "В чём риск долгоживущих feature toggles?",
    "options": [
      "мёртвый код и комбинаторный взрыв путей",
      "нет рисков при хорошем CI",
      "toggles заменяют code review",
      "ускоряют деплой без минусов"
    ],
    "answer": 0,
    "explain": "Вечные флаги → if forest, не тестируемые комбинации. Удаляй флаг после rollout, держи мало веток.",
    "kind": "single",
    "id": "s497",
    "fixed": true
  },
  {
    "q": "В чём риск feature flag?",
    "options": [
      "комбинаторный взрыв состояний и мёртвые ветки кода",
      "flags всегда удаляются автоматически после релиза",
      "невозможно тестировать код с feature flags",
      "запрещены в twelve-factor приложениях"
    ],
    "answer": 0,
    "explain": "Долгоживущие flags без cleanup дают 2^n путей. Нужны TTL, владелец flag, тесты на on/off и удаление после rollout.",
    "kind": "single",
    "id": "s593",
    "fixed": true
  },
  {
    "q": "Что вернёт ACL anti-corruption?",
    "options": [
      "перевод внешней модели",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Результат выражения — перевод внешней модели. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s613",
    "fixed": true
  },
  {
    "q": "Что верно про ACL + facade на легаси?",
    "options": [
      "фасад даёт узкий API, ACL изолирует старые типы от нового домена",
      "фасад дублирует весь legacy без фильтрации",
      "ACL запрещает любые адаптеры",
      "паттерн только для frontend React"
    ],
    "answer": 0,
    "explain": "Anti-Corruption Layer переводит legacy-модель в доменные типы. Facade скрывает 50 legacy-методов за 3 нужными. Постепенная миграция без big bang.",
    "kind": "single",
    "id": "s654",
    "fixed": true
  },
  {
    "q": "В чём разница: domain events vs integration events?",
    "options": [
      "domain — внутри bounded context; integration — контракт между сервисами",
      "это одни и те же классы всегда",
      "integration events только синхронные",
      "domain events публикуются только в Kafka"
    ],
    "answer": 0,
    "explain": "OrderPlaced в домене может стать OrderPlacedV1 integration event с другой схемой и версионированием. Не протаскивать внутренние entity наружу.",
    "kind": "single",
    "id": "s664",
    "fixed": true
  },
  {
    "q": "Что такое Law of Demeter в Python?",
    "options": [
      "не цепочить obj.a.b.c — говорить с непосредственным соседом",
      "запрет import *",
      "только один уровень наследования",
      "обязательный dataclass для всех API"
    ],
    "answer": 0,
    "explain": "«Talk to friends, not strangers». order.total() вместо order.items[0].price. Снижает coupling при рефакторинге внутренних структур.",
    "kind": "single",
    "id": "s682",
    "fixed": true
  },
  {
    "q": "Что такое hexagonal testing: domain pure?",
    "options": [
      "unit-тесты домена без БД, HTTP и файлов — только логика и ports mocks",
      "тесты только через Selenium E2E",
      "запрет mock в пользу integration only",
      "тестирование шести граней Docker container"
    ],
    "answer": 0,
    "explain": "Ядро тестируется с fake repositories за миллисекунды. Адаптеры — отдельные integration tests. Пирамида: много чистого домена внизу.",
    "kind": "single",
    "id": "s685",
    "fixed": true
  },
  {
    "q": "В hexagonal architecture от чего зависят adapters?",
    "options": [
      "от портов (интерфейсов) ядра, а не наоборот",
      "ядро зависит от деталей HTTP/SQL адаптеров",
      "адаптеры импортируют друг друга обязательно",
      "портов нет — только God object"
    ],
    "answer": 0,
    "explain": "Зависимости направлены к центру: domain ← ports ← adapters. Инверсия защищает домен.",
    "kind": "single",
    "id": "s721",
    "fixed": true
  },
  {
    "q": "Где лучше держать инвариант домена?",
    "options": [
      "в конструкторе/фабрике типа — объект не создаётся «невалидным»",
      "только в UI валидации",
      "только в SQL trigger без домена",
      "в глобальном флаге"
    ],
    "answer": 0,
    "explain": "Если инвариант в одном месте создания — меньше «дырявых» объектов по системе.",
    "kind": "single",
    "id": "s736",
    "fixed": true
  },
  {
    "q": "Почему Postel's law («будь толерантен к входу») опасен?",
    "options": [
      "толерантный парсер копит хаос и несовместимости протоколов",
      "строгий парсер всегда хуже",
      "закон запрещён в API",
      "только про SMTP"
    ],
    "answer": 0,
    "explain": "Postel: be conservative in what you send, liberal in what you accept. На практике «liberal accept» размывает контракт — лучше явная версия/схема.",
    "kind": "single",
    "id": "s748",
    "fixed": true
  },
  {
    "q": "Что такое policy object?",
    "options": [
      "вынесенные правила решения в отдельный объект/стратегию",
      "файл systemd",
      "HTTP 451",
      "только IAM JSON AWS"
    ],
    "answer": 0,
    "explain": "Вместо if-лапши в домене — Policy.can(user, action). Легче тестировать и менять.",
    "kind": "single",
    "id": "s754",
    "fixed": true
  },
  {
    "q": "Что грубо говорит Law of Demeter?",
    "options": [
      "не цепочй obj.a.b.c — говори с ближайшими соседями",
      "чем длиннее цепочка, тем лучше",
      "запрет методов",
      "только про единицы измерения"
    ],
    "answer": 0,
    "explain": "«Don't talk to strangers»: меньше знания о глубокой структуре — слабее связанность.",
    "kind": "single",
    "id": "s757",
    "fixed": true
  },
  {
    "q": "Зачем нужен anti-corruption layer (антикоррупционный слой)?",
    "options": [
      "адаптер, который изолирует ваш домен от чужой модели или legacy API",
      "файрвол на уровне ОС для блокировки портов",
      "обязательный Redis перед каждой таблицей БД",
      "генератор OpenAPI-схемы из docstring"
    ],
    "answer": 0,
    "explain": "В DDD anti-corruption layer — переводчик на границе: внешняя модель (легаси, чужой сервис) не протекает во внутренний домен. Снаружи — их термины и DTO, внутри — ваши сущности и инварианты.",
    "kind": "single",
    "id": "s769",
    "fixed": true
  },
  {
    "q": "Что такое антикоррупционный слой?",
    "options": [
      "изоляция внешней/легаси модели от чистого домена",
      "WAF правило",
      "шифрование диска",
      "rate limit"
    ],
    "answer": 0,
    "explain": "ACL переводит чужие DTO в свои entity — домен не протекает терминами поставщика.",
    "kind": "single",
    "id": "s786",
    "fixed": true
  }
);
