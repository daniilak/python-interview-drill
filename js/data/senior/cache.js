// @meta topic=cache group=Данные и распределёнка
// senior · 47 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Зачем шардировать hot key в кэше на 8 частей?",
    "options": [
      "размазать нагрузку чтения одного популярного ключа по нескольким узлам",
      "обнулить TTL, чтобы ключ никогда не протухал",
      "усилить один сервер вместо кластера",
      "полностью отключить кэширование"
    ],
    "answer": 0,
    "explain": "Один ключ → один shard → bottleneck. Логический ключ user:123 дробят на user:123:0…7 с разными физическими ключами. При чтении выбирают shard — нагрузка распределяется.",
    "kind": "single",
    "id": "s22",
    "fixed": true
  },
  {
    "q": "Что делает паттерн read-through cache?",
    "options": [
      "при miss кэш сам загружает данные из store и кладёт в кэш",
      "клиент всегда пишет в два хранилища синхронно",
      "только invalidation без чтения",
      "запрещает TTL"
    ],
    "answer": 0,
    "explain": "Приложение читает cache → miss → loader из БД → populate. Write-through/write-behind — другие стратегии согласованности.",
    "kind": "single",
    "id": "s323",
    "fixed": true
  },
  {
    "q": "В чём разница write-through и write-back кэша?",
    "options": [
      "write-through пишет в кэш и хранилище сразу; write-back откладывает запись в стор",
      "write-through отключает кэш полностью",
      "write-back — это только термин Redis без смысла",
      "разницы нет — синонимы"
    ],
    "answer": 0,
    "explain": "Write-through проще по консистентности, но дороже по latency. Write-back быстрее, но риск потери данных при сбое до сброса dirty-строк.",
    "kind": "single",
    "id": "s349",
    "fixed": true
  },
  {
    "q": "Зачем в кэше используют versioned keys?",
    "options": [
      "инвалидировать данные, меняя версию в имени ключа",
      "отключать LRU навсегда",
      "генерировать случайные ключи на каждый hit",
      "хранить все версии в одном ключе через pickle"
    ],
    "answer": 0,
    "explain": "Versioned keys: `user:42:v7`. Сменили схему/данные — подняли версию, старые ключи сами «умирают» по TTL. Проще массовой точечной инвалидации по шаблону.",
    "kind": "single",
    "id": "s361",
    "fixed": true
  },
  {
    "q": "В чём риск: tTL=30s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "это полное отключение кэша"
    ],
    "answer": 0,
    "explain": "Синхронный stampede при массовом истечении. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s385",
    "fixed": true
  },
  {
    "q": "Что вернёт refresh-ahead?",
    "options": [
      "продление до истечения",
      "только lazy load",
      "write-only",
      "negative only"
    ],
    "answer": 0,
    "explain": "Результат выражения — продление до истечения. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s409",
    "fixed": true
  },
  {
    "q": "Что вернёт two-phase load (lock+double check)?",
    "options": [
      "классика против stampede",
      "только TTL",
      "random sleep only always enough",
      "no lock needed under GIL for IO? всё равно"
    ],
    "answer": 0,
    "explain": "Результат выражения — классика против stampede. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s433",
    "fixed": true
  },
  {
    "q": "Что такое stampede lock per key?",
    "options": [
      "один пересчёт",
      "все считают",
      "отключение кэша целиком",
      "no cache"
    ],
    "answer": 0,
    "explain": "Один пересчёт. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s521",
    "fixed": true
  },
  {
    "q": "Зачем hot key split на 16 шардов?",
    "options": [
      "размазать нагрузку одного популярного ключа по узлам",
      "обнулить TTL",
      "усилить один Redis-узел",
      "запретить кэш"
    ],
    "answer": 0,
    "explain": "user:42 hot → user:42:0..15 с random read/write. Компромисс: сложнее инвалидация, но выше throughput.",
    "kind": "single",
    "id": "s526",
    "fixed": true
  },
  {
    "q": "Что вернёт soft TTL ≈15s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Результат выражения — отдавать stale и обновлять асинхронно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s531",
    "fixed": true
  },
  {
    "q": "Зачем нужен negative cache TTL=6s?",
    "options": [
      "кратко кэшировать отсутствие ключа/404, чтобы не долбить origin",
      "хранить пароли неуспешных логинов в Redis",
      "увеличить hit rate до 100% навсегда",
      "полностью отключить кэш-слой при miss"
    ],
    "answer": 0,
    "explain": "Negative cache помнит «такого ресурса нет» на короткий TTL. Защищает БД от шторма одинаковых miss. Слишком долгий TTL — пользователь долго не видит появившийся ресурс.",
    "kind": "single",
    "id": "s556",
    "fixed": true
  },
  {
    "q": "Что верно про hot key split на 4 шардов идея?",
    "options": [
      "логический ключ разбивают на key:0..key:3 чтобы размазать нагрузку по нодам",
      "уменьшить TTL популярного ключа до нуля",
      "хранить все запросы на одной самой мощной ноде",
      "полностью отказаться от кэширования hot key"
    ],
    "answer": 0,
    "explain": "Один ключ бьёт в один shard Redis/Memcached. Split + random/read-repair распределяет QPS. Клиент или proxy агрегирует при чтении.",
    "kind": "single",
    "id": "s571",
    "fixed": true
  },
  {
    "q": "Что вернёт soft TTL ≈3600s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Результат выражения — отдавать stale и обновлять асинхронно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s581",
    "fixed": true
  },
  {
    "q": "Что такое TTL jitter?",
    "options": [
      "случайный разброс к TTL, чтобы ключи не истекали одновременно",
      "удвоение TTL при каждом cache hit",
      "отключение expiration для hot keys",
      "синхронизация TTL с cron на полночь UTC"
    ],
    "answer": 0,
    "explain": "Без jitter тысячи ключей с TTL=300s истекают в одну секунду — spike на origin. Jitter ±10% размазывает нагрузку.",
    "kind": "single",
    "id": "s611",
    "fixed": true
  },
  {
    "q": "Что вернёт soft TTL ≈60s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Результат выражения — отдавать stale и обновлять асинхронно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s616",
    "fixed": true
  },
  {
    "q": "В чём риск: tTL=120s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "это полное отключение кэша"
    ],
    "answer": 0,
    "explain": "Синхронный stampede при массовом истечении. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s621",
    "fixed": true
  },
  {
    "q": "Что такое asymmetric TTLs tiers?",
    "options": [
      "разное время жизни на edge CDN, regional и origin cache",
      "одинаковый TTL на всех уровнях обязателен",
      "TTL только для error responses",
      "синхронное истечение всех слоёв в одну миллисекунду"
    ],
    "answer": 0,
    "explain": "CDN 60s, app cache 300s, DB — source of truth. Короткий edge TTL свежее для пользователя; длинный app снижает нагрузку на origin.",
    "kind": "single",
    "id": "s626",
    "fixed": true
  },
  {
    "q": "Что вернёт soft TTL ≈300s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Результат выражения — отдавать stale и обновлять асинхронно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s644",
    "fixed": true
  },
  {
    "q": "Что вернёт in-process + Redis tiers?",
    "options": [
      "локальность + общая консистентность сложнее",
      "достаточно одного always",
      "no invalidation needed",
      "GIL cache enough"
    ],
    "answer": 0,
    "explain": "Результат выражения — локальность + общая консистентность сложнее. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s681",
    "fixed": true
  },
  {
    "q": "Зачем нужен negative cache TTL=30s?",
    "options": [
      "коротко помнить 404/miss и не перегружать backend повторными запросами",
      "хранить негативные отзывы пользователей",
      "уменьшить RAM cache до нуля",
      "заменить positive cache полностью"
    ],
    "answer": 0,
    "explain": "Тот же принцип, что TTL=6s, но дольше для редко меняющихся «не найдено». Баланс между защитой origin и задержкой появления ресурса.",
    "kind": "single",
    "id": "s684",
    "fixed": true
  },
  {
    "q": "Зачем нужен TTL + jitter?",
    "options": [
      "размазать моменты истечения ключей и избежать thundering herd",
      "удвоить TTL при каждом access",
      "отключить LRU eviction",
      "синхронизировать все ноды Redis в одну секунду"
    ],
    "answer": 0,
    "explain": "Комбинация: TTL ограничивает staleness, jitter — не даёт тысячам ключей протухнуть одновременно и ударить по БД.",
    "kind": "single",
    "id": "s696",
    "fixed": true
  },
  {
    "q": "Что вернёт write-around?",
    "options": [
      "запись в store минуя кэш",
      "write-through",
      "write-back",
      "no write"
    ],
    "answer": 0,
    "explain": "Результат выражения — запись в store минуя кэш. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s714",
    "fixed": true
  },
  {
    "q": "Идея hot key split на 2 шарда?",
    "options": [
      "размазать нагрузку одного популярного ключа по нескольким ключам/шардам",
      "удалить ключ из кэша навсегда",
      "увеличить TTL до infinity",
      "запретить чтение"
    ],
    "answer": 0,
    "explain": "Один ключ на одном шарде — bottleneck. Реплики/суффиксы + агрегация снимают hot spot.",
    "kind": "single",
    "id": "s732",
    "fixed": true
  },
  {
    "q": "Что такое near cache?",
    "options": [
      "локальный (процесс/нода) слой поверх распределённого кэша",
      "только CDN edge без app cache",
      "замена primary DB",
      "swap файл ОС"
    ],
    "answer": 0,
    "explain": "L1 локально + L2 Redis и т.п. Быстрее, но сложнее invalidation.",
    "kind": "single",
    "id": "s738",
    "fixed": true
  },
  {
    "q": "Что такое cache-aside?",
    "options": [
      "приложение само читает/пишет кэш рядом с хранилищем",
      "БД сама пишет в кэш прозрачно всегда",
      "только write-through",
      "CDN без app"
    ],
    "answer": 0,
    "explain": "Miss → read DB → put cache. Инвалидация — ответственность приложения.",
    "kind": "single",
    "id": "s750",
    "fixed": true
  },
  {
    "q": "Что такое probabilistic early expiration?",
    "options": [
      "с вероятностью обновить кэш до жёсткого TTL — против thundering herd",
      "никогда не истекать",
      "удалять все ключи разом",
      "только LRU без TTL"
    ],
    "answer": 0,
    "explain": "XFetch/early refresh: не все клиенты ждут одного expire. Сглаживает stampede.",
    "kind": "single",
    "id": "s753",
    "fixed": true
  },
  {
    "q": "Что такое cache stampede (thundering herd)?",
    "options": [
      "много клиентов одновременно промахиваются по кэшу и бьют в origin",
      "переполнение диска логами кэш-сервера",
      "коллизия хешей в одном бакете dict",
      "утечка памяти из-за циклических ссылок"
    ],
    "answer": 0,
    "explain": "Stampede / thundering herd: ключ истёк, и толпа запросов разом идёт в БД или тяжёлый сервис. Лечат singleflight/lock на ключ, soft TTL, probabilistic early expiration и stale-while-revalidate.",
    "kind": "single",
    "id": "s756",
    "fixed": true
  },
  {
    "q": "Что такое write-around?",
    "options": [
      "запись идёт в store, минуя кэш (кэш наполняется чтением)",
      "запись только в кэш",
      "синхронная запись в кэш и store (write-through)",
      "отложенная запись store (write-back)"
    ],
    "answer": 0,
    "explain": "Write-around избегает загрязнения кэша данными, которые не читают. Минус — cache miss после записи.",
    "kind": "single",
    "id": "s789",
    "fixed": true
  },
  {
    "q": "В чём риск: tTL=60s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "это полное отключение кэша"
    ],
    "answer": 0,
    "explain": "Синхронный stampede при массовом истечении. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s791",
    "fixed": true
  },
  {
    "q": "Что такое cache stampede (thundering herd)?",
    "options": [
      "много клиентов одновременно промахиваются по кэшу и бьют в origin",
      "переполнение диска логами кэш-сервера",
      "коллизия хешей в одном бакете dict",
      "утечка памяти из-за циклических ссылок"
    ],
    "answer": 0,
    "explain": "Stampede / thundering herd: ключ истёк, и толпа запросов разом идёт в БД или тяжёлый сервис. Лечат singleflight/lock на ключ, soft TTL, probabilistic early expiration и stale-while-revalidate.",
    "kind": "single",
    "id": "s797",
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
    "id": "s807",
    "fixed": true
  },
  {
    "q": "Что такое hot key split?",
    "options": [
      "шардинг/репликация сверхпопулярного ключа, чтобы снять hotspot",
      "удаление ключа",
      "увеличение TTL",
      "запрет кэша"
    ],
    "answer": 0,
    "explain": "Один ключ на одном шарде перегревается. Дробим на N ключей или реплицируем.",
    "kind": "single",
    "id": "s811",
    "fixed": true
  },
  {
    "q": "Что такое write-through cache?",
    "options": [
      "запись синхронно идёт в кэш и в store",
      "запись только в кэш с отложенным store",
      "запись минуя кэш",
      "только чтение"
    ],
    "answer": 0,
    "explain": "Write-through: консистентность проще, латентность записи выше. Write-back — наоборот.",
    "kind": "single",
    "id": "s814",
    "fixed": true
  },
  {
    "q": "В чём риск: tTL=600s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "это полное отключение кэша"
    ],
    "answer": 0,
    "explain": "Синхронный stampede при массовом истечении. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s816",
    "fixed": true
  },
  {
    "q": "Что вернёт multi-layer cache invalidation?",
    "options": [
      "сложная согласованность",
      "отключение кэша целиком",
      "не нужна never",
      "TTL only solves all"
    ],
    "answer": 0,
    "explain": "Результат выражения — сложная согласованность. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s818",
    "fixed": true
  },
  {
    "q": "Что верно про Singleflight / request coalescing против?",
    "options": [
      "cache stampede",
      "это полное отключение кэша",
      "это увеличение RAM без смены TTL",
      "CDN only"
    ],
    "answer": 0,
    "explain": "Cache stampede. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s821",
    "fixed": true
  },
  {
    "q": "Что такое cache stampede (thundering herd)?",
    "options": [
      "лавина запросов к origin после массового промаха/истечения кэша",
      "переполнение только LRU без нагрузки на origin",
      "коллизия хеш-функции dict",
      "переключение GIL между потоками"
    ],
    "answer": 0,
    "explain": "Много клиентов одновременно miss'ят один ключ и бьют БД/API. Лечат locking/singleflight, early refresh, коротким negative cache.",
    "kind": "single",
    "code": "# cache miss storm",
    "id": "s822",
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
    "id": "s823",
    "fixed": true
  },
  {
    "q": "Side-cache vs inline cache (в смысле app vs CPU)?",
    "options": [
      "разные уровни: в приложении кэш обычно отдельный store; в CPU — микроархитектура",
      "это всегда одно и то же Redis",
      "inline cache только для DNS",
      "side-cache запрещён"
    ],
    "answer": 0,
    "explain": "Не путай CPU inline cache и application cache-aside. В интервью уточняй контекст.",
    "kind": "single",
    "id": "s825",
    "fixed": true
  },
  {
    "q": "Зачем negative cache с TTL=60s?",
    "options": [
      "не долбить origin на повторных miss/404 короткое время",
      "кэшировать успех навсегда",
      "отключить кэш",
      "увеличить нагрузку на origin"
    ],
    "answer": 0,
    "explain": "Кэшируешь «нет такого» — иначе шторм одинаковых miss. TTL короткий, чтобы не держать устаревшее отсутствие.",
    "kind": "single",
    "id": "s826",
    "fixed": true
  },
  {
    "q": "Зачем negative cache с TTL=12s?",
    "options": [
      "не долбить origin на повторных miss/404",
      "хранить 404 вечно",
      "заменить primary storage",
      "отключить DNS"
    ],
    "answer": 0,
    "explain": "Короткий TTL на negative entry — защита origin при всплесках несуществующих ключей.",
    "kind": "single",
    "id": "s829",
    "fixed": true
  },
  {
    "q": "Зачем negative cache с TTL=3s?",
    "options": [
      "кратко кэшировать отсутствие, чтобы не молотить origin",
      "кэшировать только hits",
      "запретить 404",
      "увеличить TTL до суток"
    ],
    "answer": 0,
    "explain": "Очень короткий negative TTL — компромисс свежести и защиты от stampede miss.",
    "kind": "single",
    "id": "s833",
    "fixed": true
  },
  {
    "q": "Что такое negative caching?",
    "options": [
      "кэш промахов/404",
      "только hit",
      "write-only",
      "отключение кэша целиком"
    ],
    "answer": 0,
    "explain": "Кэш промахов/404. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s838",
    "fixed": true
  },
  {
    "q": "Что вернёт soft TTL ≈5s + background refresh идея?",
    "options": [
      "отдавать stale и обновлять асинхронно",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Результат выражения — отдавать stale и обновлять асинхронно. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s842",
    "fixed": true
  },
  {
    "q": "Что такое write-back cache?",
    "options": [
      "пишем в кэш сразу, в store — отложенно (dirty)",
      "пишем синхронно в кэш и store",
      "пишем только в store",
      "запрет записи"
    ],
    "answer": 0,
    "explain": "Write-back быстр, но риск потери при падении и сложнее consistency.",
    "kind": "single",
    "id": "s850",
    "fixed": true
  },
  {
    "q": "Что кэширует negative caching?",
    "options": [
      "факт отсутствия (404/miss) на короткое время",
      "только успешные payload",
      "пароли",
      "полные таблицы БД"
    ],
    "answer": 0,
    "explain": "Negative entry защищает от повторных дорогих miss. TTL держи коротким.",
    "kind": "single",
    "id": "s852",
    "fixed": true
  },
  {
    "q": "В чём риск: tTL=300s без jitter —?",
    "options": [
      "синхронный stampede при массовом истечении",
      "только больше RAM",
      "невозможность hit",
      "это полное отключение кэша"
    ],
    "answer": 0,
    "explain": "Синхронный stampede при массовом истечении. Кэш ускоряет чтение, но ставит вопросы об инвалидации.",
    "kind": "single",
    "id": "s855",
    "fixed": true
  }
);
