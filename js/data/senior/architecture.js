// @meta topic=architecture group=Архитектура и дизайн
// senior · 43 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое паттерн Transactional Outbox?",
    "options": [
      "событие пишется в ту же БД-транзакцию, что и бизнес-данные, затем публикуется",
      "удаление всех тестов перед релизом",
      "запрет монолитной архитектуры",
      "способ обхода GIL в микросервисах"
    ],
    "answer": 0,
    "explain": "Запись в outbox-таблицу атомарна с изменением агрегата. Отдельный relay читает outbox и шлёт в Kafka/Rabbit. Нет «записали в БД, но не отправили событие».",
    "kind": "single",
    "id": "s28",
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
    "id": "s110",
    "fixed": true
  },
  {
    "q": "Что такое паттерн CQRS?",
    "options": [
      "разделение моделей/путей чтения и записи",
      "удаление тестов перед деплоем",
      "запрет микросервисов",
      "способ отключить GIL"
    ],
    "answer": 0,
    "explain": "Command изменяет состояние, Query читает оптимизированную проекцию. Масштабируют read и write отдельно. Цена — сложность, eventual consistency на read-модели.",
    "kind": "single",
    "id": "s142",
    "fixed": true
  },
  {
    "q": "Выбери все верные про распределённые системы?",
    "options": [
      "идемпотентность consumer помогает при at-least-once доставке",
      "outbox pattern снижает потерю событий между БД и брокером",
      "exactly-once «бесплатно» даёт любой брокер сообщений",
      "circuit breaker защищает от каскадных сбоев зависимости"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "Exactly-once end-to-end почти всегда иллюзия: нужна идемпотентность + дедуп + аккуратные транзакции/outbox. Верными здесь будут пункты: «идемпотентность consumer помогает при at-least-once доставке»; «outbox pattern снижает потерю событий между БД и брокером»; «circuit breaker защищает от каскадных сбоев зависимости».",
    "kind": "multi",
    "tags": [
      "distributed",
      "architecture"
    ],
    "difficulty": "senior",
    "id": "s217",
    "fixed": true
  },
  {
    "q": "Что такое thundering herd (cache stampede)?",
    "options": [
      "массовый одновременный промах кэша с ударом по origin",
      "один клиент, который долго держит соединение",
      "ошибка только на уровне DNS",
      "остановку GC в CPython"
    ],
    "answer": 0,
    "explain": "Thundering herd — «стадо» клиентов одновременно бьёт в один ресурс после просрочки кэша или пробуждения. Смягчают блокировкой на ключ, jitter и фоновым обновлением.",
    "kind": "single",
    "id": "s245",
    "fixed": true
  },
  {
    "q": "Что вернёт outbox + polling/CDC?",
    "options": [
      "надёжная доставка событий",
      "только RPC sync",
      "ошибка",
      "cron без БД"
    ],
    "answer": 0,
    "explain": "Результат выражения — надёжная доставка событий. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s259",
    "fixed": true
  },
  {
    "q": "Что удобно тестировать в ports & adapters (hexagonal)?",
    "options": [
      "доменную логику без реальной БД и HTTP",
      "только CSS фронтенда",
      "только конфиг nginx",
      "скорость сетевой карты"
    ],
    "answer": 0,
    "explain": "Ядро зависит от портов (интерфейсов); адаптеры Postgres/REST подменяются fake/in-memory в unit-тестах.",
    "kind": "single",
    "id": "s287",
    "fixed": true
  },
  {
    "q": "Зачем Anti-Corruption Layer (ACL)?",
    "options": [
      "изолировать внешнюю/легаси модель от своего домена",
      "ускорить SQL-запросы",
      "убрать необходимость тестов",
      "заменить транзакции"
    ],
    "answer": 0,
    "explain": "ACL переводит чужие DTO в свои сущности, чтобы термины и инварианты поставщика не протекали в домен.",
    "kind": "single",
    "code": "# external_dto -> domain_model",
    "id": "s327",
    "fixed": true
  },
  {
    "q": "Что такое backpressure в архитектуре систем?",
    "options": [
      "медленный потребитель сигнализирует производителю замедлиться",
      "автоматическое масштабирование без лимитов",
      "только TCP window size",
      "отказ от очередей"
    ],
    "answer": 0,
    "explain": "Без backpressure unbounded queue растёт до OOM. Reactive streams, bounded channels, 429/503 — явные сигналы давления.",
    "kind": "single",
    "id": "s340",
    "fixed": true
  },
  {
    "q": "Что такое strangler fig pattern?",
    "options": [
      "постепенная замена легаси новым кодом вокруг старого",
      "big-bang переписывание за один релиз",
      "запрет любых изменений в монолите",
      "удаление тестов при миграции"
    ],
    "answer": 0,
    "explain": "Новый сервис перехватывает трафик по маршрутам (proxy/BFF), пока старый «задушается». Риск ниже, чем полная замена за раз.",
    "kind": "single",
    "id": "s389",
    "fixed": true
  },
  {
    "q": "Какую задачу решает outbox pattern?",
    "options": [
      "атомарность записи в БД и публикации события в брокер",
      "только кэширование HTTP-ответов",
      "UI state в браузере",
      "замена Saga без компенсаций"
    ],
    "answer": 0,
    "explain": "В одной транзакции: business row + outbox row. Relay читает outbox и шлёт в Kafka. Нет dual-write race.",
    "kind": "single",
    "id": "s437",
    "fixed": true
  },
  {
    "q": "Что делает идемпотентный consumer в Kafka?",
    "options": [
      "повторное сообщение не дублирует побочный эффект",
      "обрабатывает каждое сообщение строго один раз без retry",
      "только синхронный poll без commit",
      "игнорирует offset"
    ],
    "answer": 0,
    "explain": "At-least-once delivery → дубликаты. Идемпотентность: upsert по id, dedup table, версионирование. Exactly-once end-to-end дорого.",
    "kind": "single",
    "id": "s448",
    "fixed": true
  },
  {
    "q": "CAP: при network partition между чем выбирают?",
    "options": [
      "consistency и availability",
      "speed и memory",
      "SQL и NoSQL",
      "sync и async"
    ],
    "answer": 0,
    "explain": "При partition нельзя одновременно и linearizable, и отвечать всем. CP (etcd) vs AP (Cassandra) — осознанный выбор.",
    "kind": "single",
    "id": "s480",
    "fixed": true
  },
  {
    "q": "Что такое Saga pattern?",
    "options": [
      "распределённая транзакция через локальные шаги и компенсации",
      "удаление всех микросервисов",
      "только синхронный 2PC",
      "паттерн GIL"
    ],
    "answer": 0,
    "explain": "Каждый шаг — локальная TX; при сбое — compensating action. Choreography или orchestrator. Нет глобального lock.",
    "kind": "single",
    "id": "s511",
    "fixed": true
  },
  {
    "q": "Что вернёт turbo monolith / modular?",
    "options": [
      "высокая модульность без сети",
      "microservices or death",
      "shared DB free for all",
      "BFF ban"
    ],
    "answer": 0,
    "explain": "Результат выражения — высокая модульность без сети. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s528",
    "fixed": true
  },
  {
    "q": "Что такое Паттерн Sidecar?",
    "options": [
      "вспомогательный процесс рядом с сервисом",
      "удалить тесты",
      "только monolith ban",
      "GIL pattern"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s533",
    "fixed": true
  },
  {
    "q": "Что такое CQRS идея?",
    "options": [
      "разделить модели и пути чтения (queries) и записи (commands)",
      "запретить SQL и перейти только на key-value хранилища",
      "обязательно разнести каждый endpoint в отдельный микросервис",
      "убрать базу данных и хранить всё в памяти процесса"
    ],
    "answer": 0,
    "explain": "Command side оптимизируют под запись и инварианты, Query side — под чтение и денормализованные проекции. Не требует микросервисов и может жить в одном монолите.",
    "kind": "single",
    "id": "s538",
    "fixed": true
  },
  {
    "q": "Что такое modular monolith?",
    "options": [
      "одно deployable-приложение с чёткими модулями и границами доменов",
      "обязательный набор микросервисов с общей БД без ограничений",
      "монолит без какой-либо модульной структуры (big ball of mud)",
      "архитектура, где каждая команда пишет в одну shared-таблицу"
    ],
    "answer": 0,
    "explain": "Модульный монолит даёт скорость разработки монолита и границы как у сервисов. Распределёнку добавляют позже (Strangler), когда реально нужна независимая масштабируемость.",
    "kind": "single",
    "id": "s543",
    "fixed": true
  },
  {
    "q": "Что вернёт hexagonal / ports & adapters?",
    "options": [
      "ядро не зависит от деталей UI/БД",
      "всё в одном контроллере",
      "только monolith ban",
      "GIL architecture"
    ],
    "answer": 0,
    "explain": "Результат выражения — ядро не зависит от деталей UI/БД. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s548",
    "fixed": true
  },
  {
    "q": "Что такое Паттерн Strangler?",
    "options": [
      "постепенная замена legacy-системы новыми модулями вокруг старого ядра",
      "полное удаление тестов перед миграцией",
      "запрет монолитов в пользу только микросервисов",
      "паттерн синхронизации потоков через GIL"
    ],
    "answer": 0,
    "explain": "Новый функционал идёт через фасад/proxy; старые части «душат» по одной. Снижает риск big-bang rewrite. Назван в честь strangler fig, обвивающего дерево.",
    "kind": "single",
    "id": "s553",
    "fixed": true
  },
  {
    "q": "Что такое BFF pattern?",
    "options": [
      "Backend For Frontend — отдельный API-слой под нужды конкретного клиента",
      "Best Friend Forever — shared library между всеми сервисами",
      "Binary File Format для статики в CDN",
      "Built-in Fast Framework в Django 5"
    ],
    "answer": 0,
    "explain": "Мобильному и web-клиенту нужны разные агрегации. BFF агрегирует микросервисы, не раздувая универсальный public API. Цена — ещё один сервис для поддержки.",
    "kind": "single",
    "id": "s573",
    "fixed": true
  },
  {
    "q": "В чём разница: control plane vs data plane?",
    "options": [
      "control — конфигурация/маршрутизация; data — пользовательский трафик и payload",
      "это синонимы в Kubernetes networking",
      "data plane только для batch ETL, не для online API",
      "control plane обрабатывает HTTP body, data — только TLS"
    ],
    "answer": 0,
    "explain": "В mesh/SDN control plane пушит правила, data plane форвардит пакеты. В k8s: kube-apiserver vs kube-proxy/data path. Разделение упрощает масштаб и blast radius.",
    "kind": "single",
    "id": "s588",
    "fixed": true
  },
  {
    "q": "Что вернёт event-carried state transfer?",
    "options": [
      "событие несёт полные данные — меньше follow-up read к другим сервисам",
      "событие только с id, consumer всегда делает REST round-trip",
      "гарантию exactly-once без идемпотентности",
      "отказ от схемы версионирования событий"
    ],
    "answer": 0,
    "explain": "ECST: OrderCreated содержит items и сумму — read-модель не дергает Catalog. Минус — крупные события и риск устаревших данных в payload.",
    "kind": "single",
    "id": "s598",
    "fixed": true
  },
  {
    "q": "Что верно про CQRS не обязан Event Sourcing?",
    "options": [
      "да — раздельные read/write модели возможны без журнала событий",
      "нет — CQRS всегда требует Kafka и event store",
      "Event Sourcing обязателен только в монолите",
      "без Event Sourcing CQRS называется CRUD"
    ],
    "answer": 0,
    "explain": "CQRS — разделение путей. Event Sourcing — хранение состояния как цепочки событий. Часто сочетают, но можно CQRS с обычными таблицами.",
    "kind": "single",
    "id": "s628",
    "fixed": true
  },
  {
    "q": "Что такое shared kernel?",
    "options": [
      "небольшое общее ядро моделей между bounded contexts (осторожно с coupling)",
      "одна БД без границ для всех микросервисов",
      "shared Python venv на всех разработчиков",
      "Kubernetes cluster singleton"
    ],
    "answer": 0,
    "explain": "DDD: два контекста делят Kernel — меняется редко и по согласованию. Слишком большой shared kernel — скрытый монолит и merge hell.",
    "kind": "single",
    "id": "s658",
    "fixed": true
  },
  {
    "q": "Что такое Canary release?",
    "options": [
      "небольшой процент трафика на новую версию для проверки метрик",
      "деплой только в канареечные дата-центры",
      "откат без мониторинга при первой ошибке",
      "blue-green без переключения трафика"
    ],
    "answer": 0,
    "explain": "1–5% на v2, смотрят error rate/latency. Авто rollback или ручное расширение. Меньше blast radius чем full deploy.",
    "kind": "single",
    "id": "s667",
    "fixed": true
  },
  {
    "q": "Что верно про API Gateway часто берёт на себя?",
    "options": [
      "auth, rate limit, routing, TLS termination, иногда aggregation",
      "только хранение бизнес-данных в PostgreSQL",
      "компиляцию Python в байткод",
      "замену unit-тестов e2e"
    ],
    "answer": 0,
    "explain": "Единая точка входа: JWT validate, quota, path-based route к микросервисам. Не должен содержать тяжёлую доменную логику — риск bottleneck.",
    "kind": "single",
    "id": "s673",
    "fixed": true
  },
  {
    "q": "Что такое CQRS разделяет?",
    "options": [
      "модели/пути команд (write) и запросов (read)",
      "frontend и backend репозитории в git",
      "TCP и UDP транспорты",
      "sync и async функции в одном модуле"
    ],
    "answer": 0,
    "explain": "Write model обеспечивает инварианты; read model денормализован под экраны. Масштабируются независимо. Eventual consistency на read side — tradeoff.",
    "kind": "single",
    "id": "s676",
    "fixed": true
  },
  {
    "q": "Что такое Гексагональная архитектура акцентирует?",
    "options": [
      "порты и адаптеры — домен в центре без зависимости от инфраструктуры",
      "шесть микросервисов обязательно",
      "только REST без событий",
      "UI как единственный adapter"
    ],
    "answer": 0,
    "explain": "Ports — интерфейсы домена; adapters — HTTP, SQL, message bus. Тестируем ядро без Docker. Также называют Ports and Adapters.",
    "kind": "single",
    "id": "s694",
    "fixed": true
  },
  {
    "q": "Что вернёт anti-corruption + published language?",
    "options": [
      "явный перевод + общий язык",
      "shared DB tables as API",
      "random JSON",
      "RPC god"
    ],
    "answer": 0,
    "explain": "Результат выражения — явный перевод + общий язык. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s697",
    "fixed": true
  },
  {
    "q": "Что такое strangler fig?",
    "options": [
      "постепенное оборачивание и замена legacy системы новыми частями",
      "паттерн удаления всех тестов перед rewrite",
      "монолит без модульных границ",
      "anti-pattern распределённого монолита"
    ],
    "answer": 0,
    "explain": "Синоним Strangler Fig / Strangler pattern. Новый код перехватывает трафик по маршрутам, старое «отсыхает». Меньше риска, чем полная переписка.",
    "kind": "single",
    "id": "s700",
    "fixed": true
  },
  {
    "q": "Что такое паттерн ACL (Anti-Corruption Layer)?",
    "options": [
      "слой-переводчик между легаси/внешней моделью и твоим доменом",
      "firewall на уровне TCP",
      "только auth middleware",
      "кэш CDN"
    ],
    "answer": 0,
    "explain": "ACL не даёт чужой модели «заразить» домен кривыми сущностями и терминами.",
    "kind": "single",
    "id": "s724",
    "fixed": true
  },
  {
    "q": "Что снижает blue-green deployment?",
    "options": [
      "даунтайм при выкатке: переключение трафика на уже прогретый стенд",
      "стоимость железа до нуля",
      "необходимость тестов",
      "нужду в балансировщике всегда без плюсов"
    ],
    "answer": 0,
    "explain": "Два окружения (blue/green); после проверки переключаешь router. Откат — обратно.",
    "kind": "single",
    "id": "s739",
    "fixed": true
  },
  {
    "q": "Что такое паттерн BFF?",
    "options": [
      "Backend for Frontend — API, заточенный под конкретный клиент (web/mobile)",
      "один общий API без адаптаций всегда лучше",
      "только GraphQL без REST",
      "файловый балансировщик"
    ],
    "answer": 0,
    "explain": "BFF собирает/режет данные под UI, не таща фронт в детали всех микросервисов.",
    "kind": "single",
    "id": "s742",
    "fixed": true
  },
  {
    "q": "Какую задачу решает Saga?",
    "options": [
      "длинные бизнес-транзакции через локальные шаги и компенсации вместо 2PC",
      "только кэширование",
      "замену TCP",
      "синхронный XA всегда"
    ],
    "answer": 0,
    "explain": "Каждый сервис коммитит локально; при сбое — compensating actions. Нет глобальной блокировки 2PC.",
    "kind": "single",
    "id": "s772",
    "fixed": true
  },
  {
    "q": "Horizontal vs vertical scaling?",
    "options": [
      "горизонтально — больше машин; вертикально — мощнее одна",
      "наоборот всегда",
      "это одно и то же",
      "только про диски RAID"
    ],
    "answer": 0,
    "explain": "Scale out vs scale up. У горизонтали нужна распределение состояния.",
    "kind": "single",
    "id": "s781",
    "fixed": true
  },
  {
    "q": "Что такое Event Sourcing?",
    "options": [
      "состояние восстанавливается как поток событий, а не только текущий snapshot",
      "только логирование log.info",
      "замена HTTP",
      "кэш Redis"
    ],
    "answer": 0,
    "explain": "Append-only события + проекции. Аудит и time-travel ценой сложности.",
    "kind": "single",
    "id": "s788",
    "fixed": true
  },
  {
    "q": "Published language vs ACL?",
    "options": [
      "общий язык интеграции vs слой-переводчик к чужой модели",
      "одно и то же",
      "только про i18n UI",
      "протоколы L7 vs L4"
    ],
    "answer": 0,
    "explain": "Published language — согласованный контракт. ACL — когда чужой мир нельзя пускать внутрь домена.",
    "kind": "single",
    "id": "s792",
    "fixed": true
  },
  {
    "q": "Чем saga отличается от 2PC?",
    "options": [
      "saga — локальные транзакции + компенсации; 2PC — распределённый commit с координатором",
      "saga всегда строго atomic как 2PC",
      "2PC не использует координатор",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "2PC блокирует и плохо масштабируется. Saga слабее атомарности, зато автономнее сервисы.",
    "kind": "single",
    "id": "s794",
    "fixed": true
  },
  {
    "q": "Что делает load balancer round-robin?",
    "options": [
      "поочерёдно раздаёт запросы инстансам",
      "всегда бьёт в самый загруженный",
      "только sticky по cookie",
      "кэширует ответы"
    ],
    "answer": 0,
    "explain": "Простейшая стратегия. Есть least-conn, hash, weighted.",
    "kind": "single",
    "id": "s796",
    "fixed": true
  },
  {
    "q": "Зачем sticky session (session affinity)?",
    "options": [
      "когда состояние сессии живёт локально на инстансе",
      "чтобы запретить горизонтальный scale",
      "только для статики",
      "ускорения DNS"
    ],
    "answer": 0,
    "explain": "Клиент «липнет» к ноде. Лучше вынести сессию в Redis и не требовать affinity.",
    "kind": "single",
    "id": "s802",
    "fixed": true
  },
  {
    "q": "Что такое eventual consistency?",
    "options": [
      "реплики сойдутся со временем без мгновенной строгой согласованности",
      "мгновенная linearizability всегда",
      "данные никогда не согласуются",
      "только ACID локально без реплик"
    ],
    "answer": 0,
    "explain": "Типично для AP-систем. Клиент может кратко видеть устаревшее.",
    "kind": "single",
    "id": "s806",
    "fixed": true
  },
  {
    "q": "Что такое принцип data mesh?",
    "options": [
      "доменные команды владеют своими данными как продуктом",
      "одно центральное озеро на всех без владельцев",
      "запрет аналитики",
      "только файлы CSV на ноутбуке"
    ],
    "answer": 0,
    "explain": "Децентрализация ownership + самообслуживание + федеративное управление.",
    "kind": "single",
    "id": "s810",
    "fixed": true
  }
);
