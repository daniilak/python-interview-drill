// @meta topic=patterns group=Архитектура и дизайн
// senior · 17 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Как часто реализуют Registry pattern в Python?",
    "options": [
      "dict имя → класс + декоратор @register при импорте",
      "обязательно только через метакласс type",
      "глобальный GIL registry в CPython",
      "только через pickle на диске"
    ],
    "answer": 0,
    "explain": "PLUGINS = {}; def register(cls): PLUGINS[cls.name]=cls; return cls. Импорт модулей регистрирует обработчики. Простая альтернатива тяжёлому DI для плагинов.",
    "kind": "single",
    "id": "s94",
    "fixed": true
  },
  {
    "q": "Чем Domain Event отличается от Integration Event?",
    "options": [
      "domain — внутри bounded context; integration — для внешних сервисов",
      "это одно и то же событие",
      "domain только в Kafka",
      "integration только через REST без очередей"
    ],
    "answer": 0,
    "explain": "Domain Event: OrderPlaced внутри сервиса заказов. Integration Event: OrderPlacedV1 в шину для биллинга. Разные границы и контракты — anti-corruption на границе.",
    "kind": "single",
    "id": "s126",
    "fixed": true
  },
  {
    "q": "Зачем нужен circuit breaker при вызове внешнего сервиса?",
    "options": [
      "временно перестаёт звать падающую зависимость и даёт ей «остыть»",
      "всегда повторяет запрос без паузы до успеха",
      "шифрует трафик между сервисами",
      "балансирует CPU между потоками Python"
    ],
    "answer": 0,
    "explain": "Circuit breaker после серии ошибок открывается и быстро отказывает без реальных вызовов. Через паузу пробует снова (half-open). Так не устраивают retry storm и не тратят бюджет на заведомо мёртвый сервис.",
    "kind": "single",
    "id": "s203",
    "fixed": true
  },
  {
    "q": "Как CQRS сочетается с Event Sourcing?",
    "options": [
      "разные модели чтения/записи; состояние восстанавливается из потока событий",
      "одна SQL-таблица на всё приложение",
      "только in-memory кэш без персистентности",
      "запрет любых запросов на чтение"
    ],
    "answer": 0,
    "explain": "Команды пишут события в event store; проекции строят read-модели. CQRS разделяет оптимизированные схемы для write и read; ES даёт аудит и replay.",
    "kind": "single",
    "id": "s353",
    "fixed": true
  },
  {
    "q": "Что вернёт retry with jitter full/equal?",
    "options": [
      "стратегии AWS-like backoff",
      "linear only",
      "no jitter better under load",
      "fixed 1s ideal stampede"
    ],
    "answer": 0,
    "explain": "Результат выражения — стратегии AWS-like backoff. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s401",
    "fixed": true
  },
  {
    "q": "Что такое Specification pattern?",
    "options": [
      "композиция бизнес-правил как предикатов (and/or/not)",
      "только regex валидация",
      "только JSON Schema",
      "запрет ABC в домене"
    ],
    "answer": 0,
    "explain": "Spec.is_satisfied_by(entity) — переиспользуемые правила для фильтров, скидок, допуска. DDD-паттерн.",
    "kind": "single",
    "id": "s504",
    "fixed": true
  },
  {
    "q": "Как Strategy pattern естественно выражается в Python?",
    "options": [
      "функциями и callable первого класса",
      "только глубоким наследованием",
      "только enum switch без функций",
      "запрет лямбд"
    ],
    "answer": 0,
    "explain": "strategy = pricing_fn; result = strategy(cart) — проще, чем иерархия классов. Protocol для типизации.",
    "kind": "single",
    "id": "s518",
    "fixed": true
  },
  {
    "q": "Что такое Hexagonal Architecture порты?",
    "options": [
      "абстрактные интерфейсы (ports), через которые домен вызывает внешний мир",
      "номера TCP-портов в docker-compose",
      "директива EXPOSE в Dockerfile",
      "колонки ORM-модели для связи с БД"
    ],
    "answer": 0,
    "explain": "Port — Protocol/ABC в домене (UserRepository, PaymentGateway). Adapter — конкретная SQL/HTTP реализация. Ядро не импортирует Flask или psycopg.",
    "kind": "single",
    "id": "s563",
    "fixed": true
  },
  {
    "q": "Что верно про Outbox + inbox pattern вместе дают?",
    "options": [
      "at-least-once доставку между БД и брокером без потери сообщений",
      "exactly-once без дедупликации на consumer",
      "отказ от транзакций в PostgreSQL",
      "синхронный RPC вместо очередей"
    ],
    "answer": 0,
    "explain": "Outbox: событие в той же TX что и бизнес-данные; relay в broker. Inbox: идемпотентная обработка на приёме. Вместе — надёжная интеграция без dual-write.",
    "kind": "single",
    "id": "s633",
    "fixed": true
  },
  {
    "q": "Что такое Unit of Work?",
    "options": [
      "отслеживает изменения entity и коммитит одну транзакцию",
      "единица деплоя в Kubernetes",
      "один pytest test case",
      "паттерн только для frontend state"
    ],
    "answer": 0,
    "explain": "UoW регистрирует dirty/new/deleted ORM objects и flush в одной DB transaction. Согласует aggregate changes и domain events перед commit.",
    "kind": "single",
    "id": "s670",
    "fixed": true
  },
  {
    "q": "Что верно про Saga pattern в микросервисах решает?",
    "options": [
      "распределённую транзакцию через локальные TX и компенсирующие шаги",
      "единый ACID join across 10 PostgreSQL",
      "замену message broker на REST",
      "синхронный two-phase commit всегда"
    ],
    "answer": 0,
    "explain": "Каждый шаг — локальная транзакция; при сбое — compensate (отменить бронь, вернуть деньги). Согласованность eventual, не мгновенный ACID global.",
    "kind": "single",
    "id": "s679",
    "fixed": true
  },
  {
    "q": "Что верно про В Python Singleton часто заменяют?",
    "options": [
      "модулем — импорт даёт один экземпляр namespace",
      "обязательным metaclass __new__ в каждом классе",
      "глобальной переменной в builtins",
      "декоратором @singleton из stdlib"
    ],
    "answer": 0,
    "explain": "Модуль в Python — natural singleton: import config один раз. Проще и thread-safe при инициализации модуля, чем классический GoF Singleton.",
    "kind": "single",
    "id": "s691",
    "fixed": true
  },
  {
    "q": "Что делает Strangler Fig при миграции монолита?",
    "options": [
      "постепенно оборачивает и заменяет части системы новым кодом",
      "переписывает всё big-bang за ночь",
      "удаляет тесты",
      "только меняет БД без API"
    ],
    "answer": 0,
    "explain": "Новый код «обвивает» старый: трафик переключается кусками, риск меньше, чем rewrite all.",
    "kind": "single",
    "id": "s727",
    "fixed": true
  },
  {
    "q": "Что такое Sidecar в Kubernetes?",
    "options": [
      "вспомогательный контейнер рядом с основным в одном Pod",
      "отдельный кластер etcd",
      "только Ingress",
      "initContainer без сети"
    ],
    "answer": 0,
    "explain": "Логи, proxy, агенты — sidecar шарит сеть/volume с app-контейнером.",
    "kind": "single",
    "id": "s763",
    "fixed": true
  },
  {
    "q": "Что такое Backend for Frontend?",
    "options": [
      "отдельный backend-слой под нужды конкретного клиента",
      "общая БД без API",
      "только мобильный SDK",
      "CDN конфиг"
    ],
    "answer": 0,
    "explain": "BFF агрегирует микросервисы под web/iOS/… чтобы UI не оркестрировал десятки вызовов.",
    "kind": "single",
    "id": "s784",
    "fixed": true
  },
  {
    "q": "Что делает паттерн bulkhead (перегородка) в отказоустойчивости?",
    "options": [
      "изолирует пулы ресурсов по частям системы, чтобы сбой одной не убил всё",
      "объединяет все соединения в один общий пул для экономии",
      "отключает таймауты, чтобы запросы дольше ждали",
      "меняет протокол с HTTP на UDP для скорости"
    ],
    "answer": 0,
    "explain": "Bulkhead делит систему на отсеки: отдельные пулы потоков, соединений, очередей. Падение одного отсека не исчерпывает ресурсы остальных — как перегородки на корабле.",
    "kind": "single",
    "id": "s800",
    "fixed": true
  },
  {
    "q": "Что такое Null Object pattern?",
    "options": [
      "объект с no-op поведением вместо None/вечных проверок",
      "обязательный None везде",
      "null в БД как FK",
      "удаление объекта"
    ],
    "answer": 0,
    "explain": "Вместо if x is None: — подставляешь NullLogger, который молча discard'ит.",
    "kind": "single",
    "id": "s808",
    "fixed": true
  }
);
