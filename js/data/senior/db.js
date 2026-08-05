// @meta topic=db group=Данные и распределёнка
// senior · 61 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Всегда ли SERIALIZABLE запрещает write skew?",
    "options": [
      "нет — зависит от реализации: Postgres SSI ловит write skew, классический S2PL — иначе",
      "да, во всех СУБД одинаково по имени уровня",
      "write skew бывает только на READ UNCOMMITTED",
      "SERIALIZABLE разрешает dirty read"
    ],
    "answer": 0,
    "explain": "Write skew — два TX читают снимок, оба пишут «безопасно» по отдельности, вместе ломают инвариант. В PostgreSQL SERIALIZABLE (SSI) такие конфликты абортятся (serialization_failure). Не путай имя уровня с одинаковой семантикой везде.",
    "kind": "single",
    "id": "s72",
    "fixed": true
  },
  {
    "q": "В чём риск logical replication slots?",
    "options": [
      "удержание WAL, а затем диск",
      "только CPU",
      "без рисков",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Мониторинг слотов — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s88",
    "fixed": true
  },
  {
    "q": "Возможен ли write skew при READ COMMITTED?",
    "options": [
      "да, типично возможен: RC не даёт snapshot на всю транзакцию как SI/SSI",
      "нет, RC всегда = SERIALIZABLE",
      "только если включён dirty read",
      "write skew — это про сети, не про БД"
    ],
    "answer": 0,
    "explain": "При RC каждый statement видит свежий committed-снимок. Два TX могут прочитать одно состояние, оба пройти проверку и записать — инвариант «ровно один» ломается. В Postgres от write skew спасают SELECT FOR UPDATE / SERIALIZABLE + retry.",
    "kind": "single",
    "id": "s104",
    "fixed": true
  },
  {
    "q": "Всегда ли REPEATABLE READ запрещает phantom read?",
    "options": [
      "нет: в MySQL InnoDB RR режет phantoms сильнее; в Postgres RR ≈ snapshot и phantom иной",
      "да, ANSI-имя гарантирует одно поведение во всех СУБД",
      "RR всегда разрешает dirty read",
      "phantoms бывают только на SERIALIZABLE"
    ],
    "answer": 0,
    "explain": "Имена уровней обманчивы. PostgreSQL REPEATABLE READ — по сути snapshot isolation: повторное чтение тех же строк стабильно, но семантика phantom/write skew отличается от учебника MySQL. Смотри доки движка, не только название.",
    "kind": "single",
    "id": "s120",
    "fixed": true
  },
  {
    "q": "Что означает: Повторять транзакцию до 5 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки.",
    "kind": "single",
    "id": "s213",
    "fixed": true
  },
  {
    "q": "Что такое advisory locks?",
    "options": [
      "лок приложения в PG",
      "row lock always same",
      "file lock OS only",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Координация без row — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s297",
    "fixed": true
  },
  {
    "q": "READ UNCOMMITTED и dirty read — что учесть на практике?",
    "options": [
      "в PostgreSQL READ UNCOMMITTED фактически ведёт себя как READ COMMITTED (dirty read нет)",
      "во всех СУБД RU всегда показывает чужие незакоммиченные строки",
      "RU = SERIALIZABLE",
      "dirty read обязателен на любом уровне"
    ],
    "answer": 0,
    "explain": "ANSI допускает dirty read на RU, но PostgreSQL не реализует «настоящий» RU: незакоммиченное чужое не читается. В MySQL/др. поведение может отличаться — проверяй конкретную СУБД.",
    "kind": "single",
    "id": "s310",
    "fixed": true
  },
  {
    "q": "Разрешает ли READ UNCOMMITTED non-repeatable read?",
    "options": [
      "по стандарту да слабее RC/RR; в Postgres RU≈RC — non-repeatable между statements возможен",
      "нет никогда ни в одной СУБД",
      "только на SERIALIZABLE",
      "non-repeatable = dirty read"
    ],
    "answer": 0,
    "explain": "Non-repeatable: повторный SELECT той же строки видит уже закоммиченное чужое изменение. На RC/RU в Postgres это нормально между statements. RR/SI стабилизирует снимок транзакции.",
    "kind": "single",
    "id": "s373",
    "fixed": true
  },
  {
    "q": "Для чего BRIN index в PostgreSQL?",
    "options": [
      "большие естественно упорядоченные таблицы (время, id)",
      "универсальная замена B-tree",
      "только hash equality",
      "индекс для JSONB без условий"
    ],
    "answer": 0,
    "explain": "BRIN хранит min/max по блокам страниц — компактно для time-series, если физический порядок коррелирует с ключом.",
    "kind": "single",
    "id": "s487",
    "fixed": true
  },
  {
    "q": "Что означает: Повторять транзакцию до 10 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки.",
    "kind": "single",
    "id": "s495",
    "fixed": true
  },
  {
    "q": "Что такое pessimistic locking в БД?",
    "options": [
      "блокировка строки на время транзакции (SELECT FOR UPDATE)",
      "только optimistic retry без lock",
      "полный scan без индекса",
      "отключение транзакций"
    ],
    "answer": 0,
    "explain": "FOR UPDATE держит row lock до commit — другие ждут. Для борьбы за тот же ресурс; риск deadlocks.",
    "kind": "single",
    "id": "s502",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом pool_size=5 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s516",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом N+1: 1 запрос списка + 1000 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s536",
    "fixed": true
  },
  {
    "q": "READ UNCOMMITTED и write skew — что верно?",
    "options": [
      "write skew не «фича RU»: это аномалия snapshot/конкурентных read-modify; лечится блокировками или SSI",
      "только RU даёт write skew, RC никогда",
      "write skew = dirty read",
      "на RU write skew невозможен по определению"
    ],
    "answer": 0,
    "explain": "Write skew про параллельные проверки инварианта, не про чтение грязного. На слабых уровнях (и на SI) легко воспроизводится. Postgres: SERIALIZABLE или явные блокировки строк.",
    "kind": "single",
    "id": "s546",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "N+1: отдельный SQL-запрос заказов на каждого пользователя в цикле",
      "один JOIN-запрос загрузит всех users и orders сразу",
      "ошибка: lazy relations запрещены в ORM",
      "index-only scan без обращения к таблице orders"
    ],
    "answer": 0,
    "explain": "Классическая N+1: SELECT users, затем для каждого u — SELECT orders WHERE user_id=?. Лечат selectinload/joinedload или явный JOIN. Код в карточке сохранён.",
    "kind": "single",
    "code": "for u in users:\n    print(u.orders)  # lazy?",
    "id": "s551",
    "fixed": true
  },
  {
    "q": "От чего READ COMMITTED обычно не защищает?",
    "options": [
      "от non-repeatable read и phantom (и write skew) — между statements снимок обновляется",
      "от dirty read во всех СУБД одинаково «разрешает»",
      "ни от чего — RC = serializable",
      "только от UNIQUE violation"
    ],
    "answer": 0,
    "explain": "RC: каждый statement видит последний committed мир → повторный SELECT может отличаться, phantoms возможны. Dirty read при этом не допускается. Для стабильного снимка — RR/SI или SERIALIZABLE.",
    "kind": "single",
    "id": "s576",
    "fixed": true
  },
  {
    "q": "Зачем нужен Connection pool?",
    "options": [
      "переиспользовать соединения",
      "ускорить JSON",
      "убрать индексы",
      "заменить ORM"
    ],
    "answer": 0,
    "explain": "Дорогой handshake — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s591",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом N+1: 1 запрос списка + 1 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s596",
    "fixed": true
  },
  {
    "q": "Что вернёт hot partition / hotspot key?",
    "options": [
      "перекос нагрузки шарда",
      "идеальное равномерное всегда",
      "только CPU",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Дизайн ключей — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s631",
    "fixed": true
  },
  {
    "q": "READ COMMITTED и write skew в Postgres — что верно?",
    "options": [
      "write skew на RC возможна; для критичных инвариантов нужен FOR UPDATE или SERIALIZABLE",
      "RC в Postgres автоматически serializable",
      "write skew бывает только на диске HDD",
      "RC запрещает любые UPDATE"
    ],
    "answer": 0,
    "explain": "Классика: два слота, оба TX видят «свободно», оба бронируют. На RC без блокировок инвариант «≤1» ломается. SELECT … FOR UPDATE или SERIALIZABLE + retry.",
    "kind": "single",
    "id": "s636",
    "fixed": true
  },
  {
    "q": "Что такое write skew example?",
    "options": [
      "аномалия при snapshot isolation",
      "dirty read",
      "phantom only term",
      "lost update only term"
    ],
    "answer": 0,
    "explain": "Классика теории — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s640",
    "fixed": true
  },
  {
    "q": "Что верно про optimistic locking через version?",
    "options": [
      "конфликт при параллельной записи",
      "SELECT FOR UPDATE always",
      "без версии",
      "только serializable"
    ],
    "answer": 0,
    "explain": "Version column — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s656",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом pool_size=20 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s660",
    "fixed": true
  },
  {
    "q": "SERIALIZABLE и phantom read — что верно?",
    "options": [
      "цель SERIALIZABLE — не допустить аномалий вроде phantom; в Postgres это SSI (возможны serialization_failure)",
      "SERIALIZABLE всегда разрешает phantom",
      "phantom бывает только на RU",
      "в Postgres SERIALIZABLE = READ UNCOMMITTED"
    ],
    "answer": 0,
    "explain": "Phantom — новые строки, попавшие под предикат при повторе. Serializable обязан давать эффект последовательного выполнения. Postgres SSI может абортить конфликт — клиент ретраит транзакцию.",
    "kind": "single",
    "id": "s663",
    "fixed": true
  },
  {
    "q": "Что такое TOCTOU в файлах/БД?",
    "options": [
      "гонка проверка, а затем использование",
      "только CPU",
      "только DNS",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Атомарные операции — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s675",
    "fixed": true
  },
  {
    "q": "Что вернёт fillfactor / page split?",
    "options": [
      "физдизайн хранения/индексов",
      "ошибка",
      "None",
      "False"
    ],
    "answer": 0,
    "explain": "Тюнинг PG/InnoDB — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s678",
    "fixed": true
  },
  {
    "q": "READ COMMITTED и dirty read — что верно?",
    "options": [
      "RC не показывает чужие незакоммиченные данные (нет dirty read)",
      "RC обязан читать dirty данные",
      "dirty read = phantom",
      "только SERIALIZABLE запрещает dirty read"
    ],
    "answer": 0,
    "explain": "Уже с READ COMMITTED стандарт запрещает dirty read. Более слабый теоретически — READ UNCOMMITTED (и то не везде реализован «по учебнику»).",
    "kind": "single",
    "id": "s690",
    "fixed": true
  },
  {
    "q": "В чём разница: partitioning vs sharding?",
    "options": [
      "часто внутри БД vs across nodes",
      "синонимы строго",
      "только index",
      "только view"
    ],
    "answer": 0,
    "explain": "Масштаб данных — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s699",
    "fixed": true
  },
  {
    "q": "SERIALIZABLE и dirty read — что верно?",
    "options": [
      "SERIALIZABLE (как и RC/RR) не допускает dirty read",
      "SERIALIZABLE специально включает dirty read",
      "dirty read появляется только на SERIALIZABLE",
      "это про файловые БД без MVCC"
    ],
    "answer": 0,
    "explain": "Dirty read закрыт начиная с RC. SERIALIZABLE — самый строгий уровень, грязные чтения там точно не «фича».",
    "kind": "single",
    "id": "s702",
    "fixed": true
  },
  {
    "q": "Возможен ли write skew при SERIALIZABLE?",
    "options": [
      "в идеале нет: СУБД должна детектить конфликт; в Postgres SSI — abort + retry",
      "да, SERIALIZABLE всегда пропускает write skew",
      "write skew только на READ COMMITTED запрещён везде",
      "SERIALIZABLE = отключение транзакций"
    ],
    "answer": 0,
    "explain": "Идея serializable — эффект как у последовательного выполнения, write skew не должен «проходить». Реализация: S2PL или SSI. В Postgres при конфликте — serialization_failure, не тихий баг.",
    "kind": "single",
    "id": "s711",
    "fixed": true
  },
  {
    "q": "Что такое connection leak?",
    "options": [
      "невозврат в пул",
      "slow query only",
      "missing index only",
      "ORM lazy"
    ],
    "answer": 0,
    "explain": "Finally/context — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s717",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом pool_size=50 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s720",
    "fixed": true
  },
  {
    "q": "READ COMMITTED и non-repeatable read — что верно?",
    "options": [
      "на RC non-repeatable типичен: между SELECT снимок может обновиться чужим COMMIT",
      "RC навсегда замораживает все строки транзакции как SERIALIZABLE",
      "non-repeatable = dirty read",
      "в Postgres RC запрещён"
    ],
    "answer": 0,
    "explain": "Non-repeatable: второй SELECT той же строки видит уже другое committed-значение. RC это допускает. RR/SI держит снимок транзакции стабильнее.",
    "kind": "single",
    "id": "s723",
    "fixed": true
  },
  {
    "q": "Что даёт MVCC в PostgreSQL?",
    "options": [
      "версионность строк для читателей",
      "только locks table",
      "GIL-like lock",
      "columnar only"
    ],
    "answer": 0,
    "explain": "Мультиверсионность — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s735",
    "fixed": true
  },
  {
    "q": "REPEATABLE READ и write skew — что верно?",
    "options": [
      "в Postgres RR≈SI: write skew всё ещё возможна; нужен SERIALIZABLE или блокировки",
      "RR во всех СУБД полностью = serializable",
      "write skew бывает только при dirty read",
      "RR запрещает SELECT"
    ],
    "answer": 0,
    "explain": "Snapshot isolation стабилизирует прочитанное, но классический write skew на SI остаётся. PostgreSQL для настоящей serializability — уровень SERIALIZABLE (SSI).",
    "kind": "single",
    "id": "s741",
    "fixed": true
  },
  {
    "q": "Что такое vacuum в PostgreSQL?",
    "options": [
      "очистка/видимость версий строк",
      "только backup",
      "только index rebuild always synonym",
      "replication slot"
    ],
    "answer": 0,
    "explain": "MVCC hygiene — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s744",
    "fixed": true
  },
  {
    "q": "Что такое read replica lag?",
    "options": [
      "устаревшие чтения",
      "strong always",
      "нет лагов у async",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Eventual consistency — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s762",
    "fixed": true
  },
  {
    "q": "Что означает: Повторять транзакцию до 3 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки.",
    "kind": "single",
    "id": "s785",
    "fixed": true
  },
  {
    "q": "READ UNCOMMITTED и phantom read — что верно?",
    "options": [
      "слабый уровень не закрывает phantoms; плюс в Postgres RU≈RC — смотри реальные аномалии движка",
      "RU всегда запрещает phantom как SERIALIZABLE",
      "phantom = обязательный dirty read",
      "phantoms только в MongoDB"
    ],
    "answer": 0,
    "explain": "Phantom — новые строки под предикат. На слабых уровнях они обычны. Не зубри ANSI-таблицу без привязки к Postgres/MySQL/InnoDB.",
    "kind": "single",
    "id": "s795",
    "fixed": true
  },
  {
    "q": "Что такое synchronous_commit off tradeoff?",
    "options": [
      "скорость vs риск потери при crash",
      "всегда safe faster",
      "только replica",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "PG настройки — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s803",
    "fixed": true
  },
  {
    "q": "REPEATABLE READ и dirty read — что верно?",
    "options": [
      "RR не допускает dirty read (как и RC); это про более слабый RU в теории",
      "RR специально читает незакоммиченное",
      "dirty read обязателен на RR",
      "только CSV-файлы без MVCC"
    ],
    "answer": 0,
    "explain": "Dirty read закрыт уже на READ COMMITTED. RR/SI/SERIALIZABLE тем более не показывают чужой uncommitted.",
    "kind": "single",
    "id": "s805",
    "fixed": true
  },
  {
    "q": "Что такое snapshot isolation anomaly?",
    "options": [
      "write skew и др.",
      "не бывает аномалий",
      "только dirty read",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Уровни изоляции — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s812",
    "fixed": true
  },
  {
    "q": "Как делают serializable critical section в БД?",
    "options": [
      "правильный isolation level + ретраи serialization failure",
      "только READ UNCOMMITTED",
      "без транзакций",
      "только файловый flock на клиенте"
    ],
    "answer": 0,
    "explain": "SERIALIZABLE/SSI может абортить конфликты — клиент обязан retry.",
    "kind": "single",
    "id": "s813",
    "fixed": true
  },
  {
    "q": "В чём риск online DDL?",
    "options": [
      "блокировки/нагрузка при миграциях",
      "всегда free",
      "только SQLite",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Планируй окна/алгоритмы — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s817",
    "fixed": true
  },
  {
    "q": "Типичный симптом connection pool exhaustion?",
    "options": [
      "запросы висят в ожидании свободного коннекта / таймауты пула",
      "мгновенный 200 OK всегда",
      "рост только CPU без ожидания",
      "ошибка DNS"
    ],
    "answer": 0,
    "explain": "Все коннекты заняты (утечка, долгие транзакции). Смотри размер пула и кто не возвращает.",
    "kind": "single",
    "id": "s819",
    "fixed": true
  },
  {
    "q": "Что вернёт connection pooler (PgBouncer) transaction pooling нюанс?",
    "options": [
      "session state/prepared осторожно",
      "прозрачно всегда",
      "заменяет replicas",
      "ORM off"
    ],
    "answer": 0,
    "explain": "Режим пулера — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s824",
    "fixed": true
  },
  {
    "q": "Что такое covering index?",
    "options": [
      "индекс, из которого можно ответить без обращения к таблице",
      "полный table scan",
      "только PK",
      "foreign key"
    ],
    "answer": 0,
    "explain": "Index-only scan — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s827",
    "fixed": true
  },
  {
    "q": "В чём разница: Repeatable read vs read committed?",
    "options": [
      "разный уровень видимости аномалий",
      "одно и то же",
      "только MySQL term",
      "GIL isolation"
    ],
    "answer": 0,
    "explain": "Изоляция транзакций — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s828",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом N+1: 1 запрос списка + 100 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s830",
    "fixed": true
  },
  {
    "q": "SERIALIZABLE и non-repeatable read — что верно?",
    "options": [
      "serializable целится убрать такие аномалии; в Postgres конфликт → serialization_failure и retry",
      "SERIALIZABLE всегда показывает non-repeatable",
      "non-repeatable бывает только на SERIALIZABLE",
      "в Postgres нет уровня SERIALIZABLE"
    ],
    "answer": 0,
    "explain": "При SSI транзакция может быть абортнута, если параллель сделала бы результат несериализуемым. Это ожидаемо — повтори TX.",
    "kind": "single",
    "id": "s834",
    "fixed": true
  },
  {
    "q": "REPEATABLE READ и non-repeatable read — что верно?",
    "options": [
      "по имени RR должен стабилизировать повторное чтение строк; в Postgres снимок транзакции это обеспечивает",
      "RR всегда = READ UNCOMMITTED",
      "на RR non-repeatable обязателен",
      "только про Cassandra"
    ],
    "answer": 0,
    "explain": "В PostgreSQL REPEATABLE READ даёт стабильный snapshot: повторный SELECT тех же строк не видит чужие COMMIT середины TX. Имя уровня в других СУБД может значить иное.",
    "kind": "single",
    "id": "s836",
    "fixed": true
  },
  {
    "q": "Что такое idle_in_transaction_session_timeout?",
    "options": [
      "убивает зависшие транзакции",
      "pool size",
      "полный table scan вместо индекса всегда",
      "игнорирование транзакций при записи"
    ],
    "answer": 0,
    "explain": "Гигиена соединений — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s837",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом N+1: 1 запрос списка + 10 связанных —?",
    "options": [
      "лишние round-trip в БД (ORM lazy)",
      "слишком большой JOIN всегда",
      "только отсутствие индекса PK",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Лечится eager/join/IN — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s839",
    "fixed": true
  },
  {
    "q": "Что такое LISTEN/NOTIFY?",
    "options": [
      "лёгкие события PostgreSQL",
      "Kafka replacement always",
      "CDC full",
      "это одинаково во всех СУБД без исключений"
    ],
    "answer": 0,
    "explain": "Сигналы внутри БД — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s840",
    "fixed": true
  },
  {
    "q": "Какой типичный симптом pool_size=10 исчерпан —?",
    "options": [
      "запросы ждут коннект / таймауты",
      "CPU 100% всегда",
      "только disk full",
      "GIL deadlock only"
    ],
    "answer": 0,
    "explain": "Утечки, длинные транзакции, мало пула. В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s845",
    "fixed": true
  },
  {
    "q": "Что такое N+1 проблема?",
    "options": [
      "много запросов вместо join/prefetch",
      "один огромный SQL",
      "GIL waits",
      "index miss only"
    ],
    "answer": 0,
    "explain": "ORM классика — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s847",
    "fixed": true
  },
  {
    "q": "READ COMMITTED и phantom read — что верно?",
    "options": [
      "phantoms на RC обычны: новый COMMIT может добавить строки под тот же предикат",
      "RC везде запрещает phantoms как serializable",
      "phantom = dirty read",
      "только файловые БД"
    ],
    "answer": 0,
    "explain": "Phantom — «появились новые строки». На RC следующий SELECT WHERE … может увидеть больше строк после чужого COMMIT. Закрывается сильнее на SI/serializable (с нюансами вендора).",
    "kind": "single",
    "id": "s848",
    "fixed": true
  },
  {
    "q": "Возможен ли write skew при REPEATABLE READ?",
    "options": [
      "в Postgres на RR (SI) — да; нужен SERIALIZABLE или явные блокировки",
      "нет ни в одной СУБД никогда",
      "только если включён dirty read",
      "RR запрещает любые параллельные TX"
    ],
    "answer": 0,
    "explain": "SI/RR стабилизирует прочитанное, но не все конфликты записи ловит. Write skew — классический пробел SI; Postgres чинит уровнем SERIALIZABLE.",
    "kind": "single",
    "id": "s849",
    "fixed": true
  },
  {
    "q": "Что такое materialized view?",
    "options": [
      "кэш запроса на диске/сервере",
      "обычный VIEW always same cost",
      "index only",
      "temp table session"
    ],
    "answer": 0,
    "explain": "Обновление/refresh — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s853",
    "fixed": true
  },
  {
    "q": "Что означает: Повторять транзакцию до 2 раз при serialization failure?",
    "options": [
      "да, типичный паттерн retry",
      "никогда",
      "только DROP TABLE",
      "переключить на MyISAM"
    ],
    "answer": 0,
    "explain": "Код 40001 (serialization_failure) обычно обрабатывают повтором попытки.",
    "kind": "single",
    "id": "s856",
    "fixed": true
  },
  {
    "q": "Что верно про SELECT FOR UPDATE связан с?",
    "options": [
      "блокировкой строк транзакции",
      "readonly replica hint always",
      "кэшем Redis",
      "полный table scan вместо индекса всегда"
    ],
    "answer": 0,
    "explain": "Пессимистичные блокировки — В базах данных важны транзакции, индексы, уровни изоляции и аккуратная работа с пулом соединений.",
    "kind": "single",
    "id": "s857",
    "fixed": true
  }
);
