// @meta topic=api group=Веб и API
// senior · 29 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
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
    "id": "s34",
    "fixed": true
  },
  {
    "q": "Что должен делать клиент при HTTP 429 Too Many Requests?",
    "options": [
      "экспоненциальный backoff и учёт заголовка Retry-After",
      "немедленно повторять запрос без паузы",
      "переключиться с GET на POST",
      "игнорировать лимит — сервер сам подстроится"
    ],
    "answer": 0,
    "explain": "429 — rate limit. Retry-After говорит, сколько ждать. Без backoff клиенты создают retry storm и усугубляют перегрузку.",
    "kind": "single",
    "id": "s51",
    "fixed": true
  },
  {
    "q": "В чём проблема chatty API?",
    "options": [
      "слишком много мелких round-trips вместо пары агрегированных запросов",
      "один огромный payload всегда лучше при любом размере ответа",
      "это термин только из GraphQL и нигде больше не встречается",
      "это ограничение, которое накладывает только GIL"
    ],
    "answer": 0,
    "explain": "Chatty API «болтливый»: клиент делает десятки мелких запросов вместо batch/aggregate. Растёт латентность из-за сети и накладных расходов. Лечат укрупнением эндпоинтов, batch-API, GraphQL/BFF там, где это уместно.",
    "kind": "single",
    "id": "s67",
    "fixed": true
  },
  {
    "q": "Зачем версия API `2024-01-01` в URL или заголовке?",
    "options": [
      "эволюция контракта без поломки старых клиентов",
      "ускорение CPU на сервере",
      "замена аутентификации OAuth",
      "только красивый текст в документации"
    ],
    "answer": 0,
    "explain": "Клиент явно просит контракт даты. Новые поля/семантика — в новой версии, старые клиенты на /v1 или Accept-Version живут до миграции.",
    "kind": "single",
    "id": "s83",
    "fixed": true
  },
  {
    "q": "Почему cursor-пагинация стабильнее offset при вставках?",
    "options": [
      "курсор на последнем элементе не «прыгает» при новых строках в начале",
      "offset всегда быстрее на больших таблицах",
      "cursor требует SQL injection",
      "разницы нет при page_size=20"
    ],
    "answer": 0,
    "explain": "OFFSET 100 при вставке сверху сдвигает «страницу» — дубликаты/пропуски. Cursor WHERE id > last_id стабилен, пока сортировка согласована.",
    "kind": "single",
    "id": "s99",
    "fixed": true
  },
  {
    "q": "В чём минус offset-пагинации при page_size=20?",
    "options": [
      "«прыжки» страниц при вставках; глубокий OFFSET дорог в SQL",
      "невозможно реализовать в SQL",
      "cursor всегда хуже по производительности",
      "запрещена в REST API"
    ],
    "answer": 0,
    "explain": "OFFSET 10000 — БД всё равно проходит 10000 строк. При новых записях в начале пользователь видит дубли. Cursor WHERE id > :last стабильнее и часто быстрее.",
    "kind": "single",
    "id": "s115",
    "fixed": true
  },
  {
    "q": "Что вернёт partial response / sparse fieldsets?",
    "options": [
      "клиент просит поля",
      "всегда full entity",
      "GraphQL only possible",
      "gRPC ban"
    ],
    "answer": 0,
    "explain": "Результат выражения — клиент просит поля. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s131",
    "fixed": true
  },
  {
    "q": "Почему cursor-пагинация лучше offset при частых вставках?",
    "options": [
      "стабильный порядок без пропусков и дублей при новых строках",
      "offset всегда быстрее на любом объёме",
      "cursor требует GraphQL",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "Дублирует s99 тема — ключевой минус offset: сдвиг данных при INSERT в начало таблицы ломает «страницу 5».",
    "kind": "single",
    "id": "s147",
    "fixed": true
  },
  {
    "q": "Зачем идемпотентный ключ в платёжном API?",
    "options": [
      "безопасный retry: повтор запроса не списывает дважды",
      "ускорение CPU на сервере",
      "шифрование PAN карты",
      "пагинация результатов"
    ],
    "answer": 0,
    "explain": "Клиент шлёт Idempotency-Key: uuid. Сервер при повторе с тем же ключом возвращает тот же результат без второго charge. Основа надёжных платежей.",
    "kind": "single",
    "id": "s163",
    "fixed": true
  },
  {
    "q": "Почему HATEOAS в REST спорен на практике?",
    "options": [
      "полное гипермедиа с ссылками на каждый переход клиенты редко реализуют",
      "HTTP запрещает гиперссылки в JSON",
      "это эксклюзивная фича GraphQL",
      "OpenAPI полностью заменяет навигацию по ссылкам"
    ],
    "answer": 0,
    "explain": "Идея REST — клиент идёт по ссылкам из ответа. На деле чаще фиксированный OpenAPI/SDK; HATEOAS остаётся в нишевых API.",
    "kind": "single",
    "id": "s178",
    "fixed": true
  },
  {
    "q": "Клиент получил HTTP 429 — разумная стратегия?",
    "options": [
      "exponential backoff + jitter, учитывая Retry-After",
      "немедленно 100 параллельных повторов",
      "сменить метод на POST без тела",
      "игнорировать лимит и слать тот же запрос"
    ],
    "answer": 0,
    "explain": "429 — rate limit. Уважай Retry-After, увеличивай паузу экспоненциально с jitter, чтобы не синхронизировать шторм клиентов.",
    "kind": "single",
    "id": "s193",
    "fixed": true
  },
  {
    "q": "В чём проблема lost update при concurrent PUT?",
    "options": [
      "два клиента перезаписывают друг друга — нужны ETag/версия или if-match",
      "PUT всегда идемпотентен и конфликтов не бывает",
      "достаточно увеличить timeout",
      "проблема только у GET-запросов"
    ],
    "answer": 0,
    "explain": "Read-modify-write без версии: B пишет поверх A. Optimistic locking (If-Match: etag), версии в БД или merge-политика.",
    "kind": "single",
    "id": "s208",
    "fixed": true
  },
  {
    "q": "Клиент получил HTTP 503 — разумная стратегия?",
    "options": [
      "exponential backoff + jitter с учётом Retry-After",
      "сразу бесконечный tight loop без пауз",
      "переключиться на другой HTTP-метод",
      "считать ответ успешным и кэшировать"
    ],
    "answer": 0,
    "explain": "503 — временная недоступность/overload. Повтор с нарастающей паузой и jitter; уважай Retry-After от балансировщика.",
    "kind": "single",
    "id": "s236",
    "fixed": true
  },
  {
    "q": "Зачем версия API (`v1` в URL или заголовке)?",
    "options": [
      "эволюция контракта без поломки старых клиентов",
      "ускорение JSON-сериализации",
      "обязательное требование HTTP/2",
      "замена аутентификации OAuth"
    ],
    "answer": 0,
    "explain": "Новые поля/семантика в v2, v1 заморожен. Клиенты мигрируют по графику; sunset headers и deprecation policy.",
    "kind": "single",
    "id": "s250",
    "fixed": true
  },
  {
    "q": "Что такое idempotent create с client-supplied keys?",
    "options": [
      "повтор POST с тем же ключом не создаёт второй ресурс (UPSERT)",
      "каждый запрос генерирует новый UUID на сервере",
      "только для GET-запросов",
      "запрет любых повторов сети"
    ],
    "answer": 0,
    "explain": "Idempotency-Key / client request id: сеть повторила POST — сервер возвращает тот же 201, а не дубликат заказа.",
    "kind": "single",
    "id": "s264",
    "fixed": true
  },
  {
    "q": "Чем long polling отличается от WebSocket?",
    "options": [
      "long poll — HTTP удерживает ответ до события; WS — двусторонний persistent channel",
      "это одна и та же технология",
      "WebSocket работает только поверх UDP",
      "long polling запрещён браузерами"
    ],
    "answer": 0,
    "explain": "Long poll проще за прокси, но overhead на соединение. WS — фреймы, низкая latency push; нужны heartbeat и reconnect.",
    "kind": "single",
    "id": "s278",
    "fixed": true
  },
  {
    "q": "Минус offset-пагинации `?page_size=50&offset=10000`?",
    "options": [
      "дорогой OFFSET в БД и «прыжки» при вставках во время листания",
      "нельзя использовать с SQL",
      "запрещена REST спецификацией",
      "всегда быстрее keyset"
    ],
    "answer": 0,
    "explain": "Глубокий offset — полный scan. Keyset (cursor по id/time) стабильнее при live данных. Offset ок для малых страниц.",
    "kind": "single",
    "id": "s292",
    "fixed": true
  },
  {
    "q": "Что важно для webhook security?",
    "options": [
      "HMAC-подпись тела, секрет, replay protection и идемпотентность обработки",
      "открытый URL без аутентификации",
      "только HTTP (не HTTPS)",
      "логировать секрет в plaintext"
    ],
    "answer": 0,
    "explain": "Проверяй signature (Stripe-Signature), timestamp tolerance, constant-time compare, dedup по event id.",
    "kind": "single",
    "id": "s306",
    "fixed": true
  },
  {
    "q": "С чем связан HATEOAS в REST?",
    "options": [
      "гипермедиа: клиент переходит по ссылкам из ответа, а не по зашитым URL",
      "обязательный GraphQL",
      "только SOAP/WSDL",
      "шифрование JWT"
    ],
    "answer": 0,
    "explain": "Hypermedia As The Engine Of Application State — links rel=next, forms в ответе. На практике часто заменяют OpenAPI клиентами.",
    "kind": "single",
    "id": "s332",
    "fixed": true
  },
  {
    "q": "Клиент получил HTTP 408 Request Timeout — какая стратегия ретраев разумна?",
    "options": [
      "exponential backoff + jitter, учитывая Retry-After",
      "немедленно 100 повторов подряд без паузы",
      "сменить метод на POST и повторить",
      "бесконечный retry без верхней границы задержки"
    ],
    "answer": 0,
    "explain": "408 часто означает, что сервер не дождался клиента. Ретраи с нарастающей задержкой и jitter не создают шторм; Retry-After подсказывает минимальную паузу.",
    "kind": "single",
    "id": "s345",
    "fixed": true
  },
  {
    "q": "Почему batch endpoints лучше chatty API?",
    "options": [
      "меньше round-trip и накладных HTTP-запросов",
      "batch всегда хуже кэшируется",
      "REST запрещает объединение операций",
      "batch возможен только в GraphQL"
    ],
    "answer": 0,
    "explain": "100 мелких GET дают 100 RTT. Один batch-запрос с массивом id снижает latency и нагрузку на балансировщик — trade-off: сложнее частичные ошибки.",
    "kind": "single",
    "id": "s358",
    "fixed": true
  },
  {
    "q": "В чём суть проблемы GraphQL N+1?",
    "options": [
      "на каждое поле/узел уходит отдельный запрос — лечат DataLoader/батчингом",
      "проблемы не существует в GraphQL",
      "SQL JOIN всегда решает это автоматически",
      "это баг только ORM Hibernate"
    ],
    "answer": 0,
    "explain": "N+1: резолвер списка делает N запросов за связанными сущностями. В GraphQL это часто. Лечат батчингом/DataLoader, dataloader-паттерном и продуманным fetching.",
    "kind": "single",
    "id": "s370",
    "fixed": true
  },
  {
    "q": "Что такое versioning via media type (Accept)?",
    "options": [
      "версия API выбирается заголовком Accept с vendor media type",
      "только путь /v1 в URL без альтернатив",
      "обязательный query ?version= без заголовков",
      "версионирование только через cookie"
    ],
    "answer": 0,
    "explain": "Accept: application/vnd.myapi.v2+json — клиент явно просит контракт. URL-versioning проще дебажить; media type — чище для HATEOAS.",
    "kind": "single",
    "id": "s382",
    "fixed": true
  },
  {
    "q": "Как работает rate limit по алгоритму token bucket?",
    "options": [
      "токены копятся с заданной скоростью — запрос тратит токены, иначе отказ/ждёт",
      "есть только жёсткий max без пополнения токенов",
      "это то же самое, что circuit breaker",
      "это изоляция пулов по паттерну bulkhead"
    ],
    "answer": 0,
    "explain": "Token bucket: ведро пополняется с rate R до ёмкости B. Каждый запрос забирает токены; если не хватает — throttle. Сглаживает пики лучше «голого» hard max без refill.",
    "kind": "single",
    "id": "s394",
    "fixed": true
  },
  {
    "q": "Как ETag используют для optimistic concurrency?",
    "options": [
      "клиент шлёт If-Match с ETag при обновлении",
      "ETag только для кэширования GET",
      "ETag заменяет JWT",
      "If-Match запрещён в HTTP"
    ],
    "answer": 0,
    "explain": "Сервер отдаёт ETag; при PUT/PATCH клиент присылает If-Match. Несовпадение → 412 Precondition Failed — кто-то уже изменил ресурс.",
    "kind": "single",
    "id": "s418",
    "fixed": true
  },
  {
    "q": "Что такое problem+json в HTTP API?",
    "options": [
      "стандартный формат описания ошибок API (RFC 7807)",
      "тело успешного ответа 200",
      "только формат ошибок GraphQL",
      "конверт SOAP Fault"
    ],
    "answer": 0,
    "explain": "Application/problem+json (RFC 7807) — договорились, как отдавать машинно-читаемую ошибку: type, title, status, detail. Это не success-body и не GraphQL errors.",
    "kind": "single",
    "id": "s430",
    "fixed": true
  },
  {
    "q": "Клиент получил HTTP 502 Bad Gateway — как ретраить?",
    "options": [
      "exponential backoff + jitter, учитывая Retry-After",
      "сразу 100 идентичных запросов",
      "сменить GET на POST",
      "никогда не повторять 5xx"
    ],
    "answer": 0,
    "explain": "502 часто транзитный (upstream упал). Идемпотентные GET/PUT с backoff; для POST — idempotency key. Jitter размазывает пики после восстановления.",
    "kind": "single",
    "id": "s442",
    "fixed": true
  },
  {
    "q": "В чём минус offset-пагинации при page_size=100?",
    "options": [
      "«прыжки» при вставках; глубокий OFFSET дорог в БД",
      "невозможна в SQL",
      "cursor всегда хуже по всем метрикам",
      "запрещена REST"
    ],
    "answer": 0,
    "explain": "OFFSET 100000 заставляет СУБД пройти 100k строк. При новых записях страницы «едут». Keyset/cursor стабильнее для лент.",
    "kind": "single",
    "id": "s453",
    "fixed": true
  },
  {
    "q": "Зачем версия API v2 в URL или заголовке?",
    "options": [
      "эволюция контракта без ломания старых клиентов",
      "ускорение JSON-сериализации",
      "замена аутентификации",
      "только для красоты в Swagger"
    ],
    "answer": 0,
    "explain": "v1 и v2 параллельно: старые SDK на /v1/, новые фичи в /v2/. Deprecation window + метрики использования.",
    "kind": "single",
    "id": "s464",
    "fixed": true
  }
);
