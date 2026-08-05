// @meta topic=observability group=Наблюдаемость и качество
// senior · 35 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Почему метка Prometheus `session_id` на высококардинальном трафике опасна?",
    "options": [
      "взрыв числа time series и рост стоимости хранения",
      "Prometheus требует такую метку по умолчанию",
      "ускоряет PromQL-запросы",
      "заменяет необходимость в логах"
    ],
    "answer": 0,
    "explain": "Каждая уникальная комбинация label values — отдельный ряд. session_id/user_id/email дают миллионы серий. Для идентификаторов лучше логи/трейсы, а в метриках — агрегаты.",
    "kind": "single",
    "id": "s8",
    "fixed": true
  },
  {
    "q": "В чём риск сэмплирования трейсов с частотой 1%?",
    "options": [
      "можно пропустить редкие ошибки — нужен tail-based/error sampling",
      "трейсы всегда становятся точнее",
      "это отключает логи",
      "это ускоряет GIL"
    ],
    "answer": 0,
    "explain": "Head sampling 1% экономит объём, но редкие фейлы могут не попасть в выборку. Для ошибок делают error/tail-based sampling.",
    "kind": "single",
    "id": "s25",
    "fixed": true
  },
  {
    "q": "Что означает E в методологии RED для сервисов?",
    "options": [
      "Errors — частота ошибок",
      "Events — число событий в логах",
      "Elapsed — суммарное время CPU",
      "Endpoints — количество URL"
    ],
    "answer": 0,
    "explain": "RED: Rate (запросы/с), Errors (доля 5xx/ошибок), Duration (латентность). Три золотых сигнала для request-driven сервисов, дополняют USE на ресурсах.",
    "kind": "single",
    "id": "s42",
    "fixed": true
  },
  {
    "q": "Какой privacy-риск у continuous profiling?",
    "options": [
      "стек вызовов может содержать PII, пути файлов, SQL с данными",
      "профайлер никогда не видит имена функций",
      "риск только в dev, в prod безопасно всегда",
      "профилирование не сохраняет стеки"
    ],
    "answer": 0,
    "explain": "Pyroscope/continuous profilers сэмплируют стеки в проде. В стеке — аргументы, URL, user id в строках. Нужна редакция, агрегация, политики хранения.",
    "kind": "single",
    "id": "s59",
    "fixed": true
  },
  {
    "q": "Почему structured logging лучше print для продакшена?",
    "options": [
      "поля key=value/JSON удобно индексировать, фильтровать и алертить",
      "print всегда медленнее в 100 раз",
      "print не может писать timestamp",
      "structured logging запрещает уровни ERROR/WARN"
    ],
    "answer": 0,
    "explain": "print('user', uid) — строка для глаз. logger.info('login', extra={'user_id': uid}) → JSON в Loki/ELK с полями. Поиск «все ошибки user_id=5» без regex по printf.",
    "kind": "single",
    "id": "s75",
    "fixed": true
  },
  {
    "q": "В чём разница span и metric в observability?",
    "options": [
      "span — единица трейса операции; metric — числовой агрегат во времени",
      "это одно и то же в OpenTelemetry",
      "span хранит только stacktrace ошибок",
      "metric — это одна строка лога"
    ],
    "answer": 0,
    "explain": "Span: parent/child, duration запроса к БД. Metric: counter rate, histogram latency p99. Трейс отвечает «где тормозит этот запрос», метрика — «каков p99 всех запросов».",
    "kind": "single",
    "id": "s91",
    "fixed": true
  },
  {
    "q": "В чём разница profiling и tracing?",
    "options": [
      "profiling — где CPU/память в коде; tracing — путь запроса через сервисы",
      "одно и то же в OpenTelemetry",
      "profiling заменяет логи полностью",
      "tracing — только метрики Prometheus"
    ],
    "answer": 0,
    "explain": "cProfile/py-spy покажут hot function. Distributed trace покажет span «API → DB → cache» для одного request_id. Разные вопросы, дополняют друг друга.",
    "kind": "single",
    "id": "s107",
    "fixed": true
  },
  {
    "q": "Что такое structured logging?",
    "options": [
      "логи с machine-readable полями (JSON, key=value)",
      "только print(traceback.format_exc())",
      "сериализация логов через pickle",
      "логи без timestamp и уровня"
    ],
    "answer": 0,
    "explain": "structlog/logging JSON: {\"event\": \"payment_failed\", \"order_id\": 42, \"level\": \"error\"}. Агрегаторы фильтруют по полям, строят дашборды. print не масштабируется.",
    "kind": "single",
    "id": "s123",
    "fixed": true
  },
  {
    "q": "Почему метка Prometheus `email` на высококардинальном трафике опасна?",
    "options": [
      "каждый уникальный email — новая time series, взрыв cardinality",
      "Prometheus требует email для всех метрик",
      "ускоряет PromQL",
      "заменяет structured logging"
    ],
    "answer": 0,
    "explain": "То же, что session_id: PII в labels недопустимы. Агрегируй по домену или не метрикой — в логи/трейсы.",
    "kind": "single",
    "id": "s139",
    "fixed": true
  },
  {
    "q": "В чём разница trace, log и metric?",
    "options": [
      "trace — путь запроса; log — дискретные события; metric — агрегаты во времени",
      "три названия одного сигнала",
      "metric всегда равен stacktrace",
      "log полностью заменяет SLO"
    ],
    "answer": 0,
    "explain": "Три столпа observability. Metric: error_rate 2%. Log: «payment failed id=7». Trace: span API 200ms → DB 180ms. Коррелируют по trace_id.",
    "kind": "single",
    "id": "s155",
    "fixed": true
  },
  {
    "q": "Что стандартизирует OpenTelemetry?",
    "options": [
      "единый API/SDK для traces, metrics и logs и их экспорта",
      "только проприетарный APM одного вендора",
      "метрики GIL и eval breaker",
      "аудит зависимостей pip"
    ],
    "answer": 0,
    "explain": "OTel даёт vendor-neutral SDK, propagation (traceparent), экспортёры в Jaeger/Prometheus и т.д. Один инструментарий вместо зоопарка агентов.",
    "kind": "single",
    "id": "s170",
    "fixed": true
  },
  {
    "q": "Что вернёт SLO / error budget?",
    "options": [
      "целевая надёжность и запас на изменения",
      "только uptime marketing",
      "CPU limit",
      "ticket SLA support only"
    ],
    "answer": 0,
    "explain": "Результат выражения — целевая надёжность и запас на изменения. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s185",
    "fixed": true
  },
  {
    "q": "Зачем trace sampling в observability?",
    "options": [
      "хранить лишь долю трейсов, укладываясь в стоимость и объём",
      "удалять все ошибки из логов",
      "заменить метрики на логи",
      "отключить distributed tracing полностью"
    ],
    "answer": 0,
    "explain": "100% трейсов на высоком QPS дорого. Head-based sampling снижает объём; для редких ошибок добавляют tail-based или error-biased sampling.",
    "kind": "single",
    "id": "s200",
    "fixed": true
  },
  {
    "q": "Риск head-based sampling трейсов на уровне 25%?",
    "options": [
      "редкие ошибки могут не попасть в выборку — нужен tail/error sampling",
      "25% — слишком мало для любых метрик",
      "sampling увеличивает cardinality меток",
      "трейсы перестают коррелировать с логами"
    ],
    "answer": 0,
    "explain": "При 1% error rate и 25% sample многие инциденты не видны. Tail-based sampling сохраняет медленные и ошибочные спаны после факта.",
    "kind": "single",
    "id": "s215",
    "fixed": true
  },
  {
    "q": "В методе USE буква S означает?",
    "options": [
      "Saturation — насыщение ресурса (очередь, лимит)",
      "Security — число инцидентов",
      "Sampling — доля трейсов",
      "Storage — занятое дисковое место"
    ],
    "answer": 0,
    "explain": "USE: Utilization (загрузка), Saturation (сколько ещё в очереди/ждут), Errors. Saturation раньше ловит деградацию, чем 100% utilization.",
    "kind": "single",
    "id": "s229",
    "fixed": true
  },
  {
    "q": "Чем опасен взрыв cardinality в метках Prometheus?",
    "options": [
      "миллионы time series съедают память TSDB и замедляют запросы",
      "Prometheus автоматически агрегирует любые label",
      "высокая кардинальность ускоряет scrape",
      "влияет только на логи, не на метрики"
    ],
    "answer": 0,
    "explain": "Уникальный user_id/request_id на каждый запрос — отдельная серия. Высокую кардинальность выносят в логи/трейсы; в метках — bounded enum.",
    "kind": "single",
    "id": "s243",
    "fixed": true
  },
  {
    "q": "В методе RED буква D означает?",
    "options": [
      "Duration — длительность запросов (latency)",
      "Deployments — число релизов",
      "Disk — использование диска",
      "Duplicates — дубли сообщений"
    ],
    "answer": 0,
    "explain": "RED для сервисов: Rate, Errors, Duration. Duration (p95/p99) ловит деградацию при нормальном error rate.",
    "kind": "single",
    "id": "s257",
    "fixed": true
  },
  {
    "q": "Метка Prometheus `request_id` на высоком трафике — норма?",
    "options": [
      "нет: уникальный id на запрос взрывает cardinality; id — в логах/трейсах",
      "да: обязательна для каждого дашборда",
      "да: Prometheus сжимает любые label автоматически",
      "влияет только на алерты, не на хранение"
    ],
    "answer": 0,
    "explain": "Каждый request_id — новая time series. Для корреляции — exemplars, trace_id в span, structured logging.",
    "kind": "single",
    "id": "s271",
    "fixed": true
  },
  {
    "q": "Что такое USE method в SRE?",
    "options": [
      "Utilization, Saturation, Errors — три сигнала здоровья ресурса",
      "Unified Stack Exchange протокол",
      "User Session Encryption",
      "только для баз данных"
    ],
    "answer": 0,
    "explain": "Brendan Gregg: для CPU/диска/сети смотри загрузку, очередь/латентность ожидания и ошибки — раньше полного отказа.",
    "kind": "single",
    "id": "s285",
    "fixed": true
  },
  {
    "q": "Риск сэмплирования трейсов 5% head-based?",
    "options": [
      "95% редких ошибок не попадут в хранилище без error/tail sampling",
      "5% — слишком много для любого кластера",
      "уменьшает размер логов приложения",
      "запрещает OpenTelemetry SDK"
    ],
    "answer": 0,
    "explain": "При низком sample rate нужен комплементарный сбор: всегда сохранять error spans или adaptive tail sampling.",
    "kind": "single",
    "id": "s299",
    "fixed": true
  },
  {
    "q": "Что такое OpenTelemetry context propagation?",
    "options": [
      "передача trace/span id между сервисами (W3C traceparent, baggage)",
      "копирование Python contextvars в файл",
      "синхронизация GIL между процессами",
      "импорт sitecustomize"
    ],
    "answer": 0,
    "explain": "HTTP заголовок traceparent связывает spans в distributed trace. Baggage — ограниченные key-value для downstream (осторожно с PII).",
    "kind": "single",
    "id": "s312",
    "fixed": true
  },
  {
    "q": "Метка Prometheus `user_id` на высоком трафике?",
    "options": [
      "опасна: каждый пользователь — новая time series",
      "рекомендована для всех HTTP метрик",
      "не влияет на память TSDB",
      "заменяет аутентификацию"
    ],
    "answer": 0,
    "explain": "Кардинальность = число уникальных label combos. user_id в metric — антипаттерн; агрегируй по cohort или выноси в логи.",
    "kind": "single",
    "id": "s325",
    "fixed": true
  },
  {
    "q": "Что связывают exemplars в Prometheus?",
    "options": [
      "конкретное наблюдение метрики с trace id для drill-down",
      "логи с метриками DNS",
      "два разных Prometheus сервера",
      "unit и e2e тесты"
    ],
    "answer": 0,
    "explain": "Histogram с exemplar trace_id → jump в Tempo/Jaeger для этого запроса. Мост между агрегатами и деталями.",
    "kind": "single",
    "id": "s338",
    "fixed": true
  },
  {
    "q": "Что вернёт high-cardinality trace attributes?",
    "options": [
      "дороже хранить/искать",
      "бесплатно",
      "лучше чем metrics labels always",
      "ignore PII ok"
    ],
    "answer": 0,
    "explain": "Результат выражения — дороже хранить/искать. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s351",
    "fixed": true
  },
  {
    "q": "Что означает буква R в методологии RED?",
    "options": [
      "Rate — скорость запросов (throughput)",
      "RAM — использование памяти",
      "Retries — число повторов клиента",
      "Regions — географические зоны"
    ],
    "answer": 0,
    "explain": "RED (Google SRE): Rate, Errors, Duration. Три сигнала для HTTP/gRPC сервиса. USE — для ресурсов (Utilization, Saturation, Errors).",
    "kind": "single",
    "id": "s363",
    "fixed": true
  },
  {
    "q": "В чём риск head-based сэмплирования трейсов 10%?",
    "options": [
      "можно пропустить редкие ошибки — нужен tail-based/error sampling",
      "10% даёт полную картину всех запросов",
      "сэмплирование ломает метрики RED",
      "трейсинг при любом sampling запрещён GDPR"
    ],
    "answer": 0,
    "explain": "Случайные 10% на входе редко поймают одиночный 500 за сутки. Tail-based: решение сохранить trace после latency/error. Ошибки семплируют агрессивнее.",
    "kind": "single",
    "id": "s375",
    "fixed": true
  },
  {
    "q": "Что такое continuous profiling in production?",
    "options": [
      "сэмплирующие профилировщики с низким overhead (py-spy, perf)",
      "cProfile на каждый HTTP-запрос синхронно",
      "полный трассинг каждой инструкции байткода",
      "только ручной dis.dis в REPL"
    ],
    "answer": 0,
    "explain": "Периодический sample стека (1–100 Hz) даёт flame graph без остановки процесса. Важно: PII в стеках, политика хранения, согласие.",
    "kind": "single",
    "id": "s387",
    "fixed": true
  },
  {
    "q": "Что такое baggage в OpenTelemetry?",
    "options": [
      "ключ-значения, propagating вместе с trace context",
      "только HTTP Authorization header",
      "бинарный лог без структуры",
      "неограниченные labels в Prometheus"
    ],
    "answer": 0,
    "explain": "Baggage (tenant_id, experiment) едет через сервисы вместе с traceparent. Не путать с attributes span — baggage для cross-cutting context.",
    "kind": "single",
    "id": "s399",
    "fixed": true
  },
  {
    "q": "Что такое RED method в observability?",
    "options": [
      "Rate, Errors, Duration — три ключевые метрики сервиса",
      "RAM, EOF, Disk",
      "Read, Execute, Delete",
      "только логи без метрик"
    ],
    "answer": 0,
    "explain": "Для request-driven сервисов: сколько RPS, какой % ошибок, какая латентность (p50/p99). Дополняет USE для ресурсов (CPU, pool).",
    "kind": "single",
    "id": "s411",
    "fixed": true
  },
  {
    "q": "Что означает E в методологии USE?",
    "options": [
      "Errors — ошибки ресурса (диск, сеть)",
      "Events — бизнес-события",
      "Endpoints — URL сервиса",
      "Encryption — TLS version"
    ],
    "answer": 0,
    "explain": "USE для ресурсов: Utilization (% занятости), Saturation (очередь), Errors. RED — для latency сервисов.",
    "kind": "single",
    "id": "s423",
    "fixed": true
  },
  {
    "q": "Какие метрики входят в RED для сервисов?",
    "options": [
      "Rate, Errors, Duration",
      "RAM, EOF, Disk",
      "RPC, ETL, DDL",
      "только unstructured logs"
    ],
    "answer": 0,
    "explain": "Три сигнала Google SRE для request-сервисов. Alerts часто: error rate > X%, p99 latency > SLO.",
    "kind": "single",
    "id": "s435",
    "fixed": true
  },
  {
    "q": "Что вернёт tail-based sampling?",
    "options": [
      "решение хранить трейс после факта (ошибки/медленно)",
      "только в начале",
      "random 1%",
      "no traces"
    ],
    "answer": 0,
    "explain": "Результат выражения — решение хранить трейс после факта (ошибки/медленно). Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s446",
    "fixed": true
  },
  {
    "q": "Что такое cardinality explosion в метриках?",
    "options": [
      "слишком много уникальных label values → рост памяти TSDB",
      "улучшение точности PromQL",
      "перенос метрик в логи автоматически",
      "снижение стоимости хранения"
    ],
    "answer": 0,
    "explain": "user_id или session_id в label → миллионы series. Prometheus не для high-cardinality; ID — в логи/трейсы.",
    "kind": "single",
    "id": "s457",
    "fixed": true
  },
  {
    "q": "Что означает U в методологии USE?",
    "options": [
      "Utilization — загрузка ресурса",
      "Users — число пользователей",
      "Uptime — доступность",
      "Unicode — кодировка логов"
    ],
    "answer": 0,
    "explain": "USE: Utilization (CPU 80%), Saturation (run queue), Errors (disk I/O error). Для железа и пулов.",
    "kind": "single",
    "id": "s468",
    "fixed": true
  },
  {
    "q": "Что такое log correlation id?",
    "options": [
      "сквозной id запроса через сервисы в логах",
      "random без передачи между сервисами",
      "только trace_id без логов",
      "serial номер CPU"
    ],
    "answer": 0,
    "explain": "X-Request-ID / trace_id в каждой строке лога → grep по одному id восстанавливает путь. Связка logs + traces.",
    "kind": "single",
    "id": "s478",
    "fixed": true
  }
);
