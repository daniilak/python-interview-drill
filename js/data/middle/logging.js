// @meta topic=logging group=Тесты и качество
// middle · 12 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что такое QueueHandler?",
    "options": [
      "логи из потоков в очередь",
      "HTTP handler",
      "file rotate only",
      "syslog ban"
    ],
    "answer": 0,
    "explain": "Централизация — Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "id": "m82",
    "fixed": true
  },
  {
    "q": "Для чего filters у logging.Handler?",
    "options": [
      "отсекать записи, которые handler не должен обрабатывать",
      "менять уровень корневого logger глобально",
      "удалять сам Logger из менеджера",
      "ротировать файлы логов"
    ],
    "answer": 0,
    "explain": "Filter решает, пропустить LogRecord дальше. Уровень — отдельно; ротация — у RotatingFileHandler и т.п.",
    "kind": "single",
    "id": "m152",
    "fixed": true
  },
  {
    "q": "Зачем нужен logging.LoggerAdapter?",
    "options": [
      "добавлять контекстные поля (user_id и т.п.) к каждой записи",
      "менять уровень root logger",
      "ротировать файлы",
      "заменять print"
    ],
    "answer": 0,
    "explain": "Adapter оборачивает logger и подмешивает extra-контекст. Уровни/хендлеры настраиваются отдельно.",
    "kind": "single",
    "id": "m243",
    "fixed": true
  },
  {
    "q": "Что такое structured logging?",
    "options": [
      "логи с полями/JSON, а не только свободный текст",
      "обязательный print в stdout",
      "логирование только ошибок без info",
      "запись логов в pickle"
    ],
    "answer": 0,
    "explain": "Структурированные логи удобно фильтровать и парсить (level, request_id, …). Текст «как получится» хуже для продакшена.",
    "kind": "single",
    "id": "m308",
    "fixed": true
  },
  {
    "q": "Что определяют handlers у логгера?",
    "options": [
      "куда писать записи: файл, stderr, syslog, …",
      "только формат времени без назначения",
      "уровень root навсегда фиксированно без handler",
      "имя логгера"
    ],
    "answer": 0,
    "explain": "Logger → Filter → Handler → Formatter. Handler — «куда».",
    "kind": "single",
    "id": "m443",
    "fixed": true
  },
  {
    "q": "Что должен вернуть logging.Filter.filter, чтобы запись прошла?",
    "options": [
      "True (или truthy)",
      "False чтобы пропустить дальше",
      "всегда None",
      "уровень CRITICAL"
    ],
    "answer": 0,
    "explain": "filter возвращает True — запись идёт дальше; False — отбрасывается.",
    "kind": "single",
    "id": "m453",
    "fixed": true
  },
  {
    "q": "Зачем logging.getLogger(__name__)?",
    "options": [
      "логгер с иерархическим именем модуля (pkg.mod)",
      "всегда один глобальный root без имени",
      "отключение логов",
      "создание файла .log автоматически без handler"
    ],
    "answer": 0,
    "explain": "Иерархия: настройка pkg влияет на pkg.mod. Привычный паттерн в библиотеках.",
    "kind": "single",
    "id": "m499",
    "fixed": true
  },
  {
    "q": "Что часто бывает при повторном logging.basicConfig?",
    "options": [
      "no-op, если у root уже есть handlers",
      "всегда полностью перезаписывает конфиг",
      "удаляет все логгеры",
      "поднимает SystemExit"
    ],
    "answer": 0,
    "explain": "basicConfig срабатывает один раз «из коробки». Для перенастройки — dictConfig/handlers вручную force=True (3.8+).",
    "kind": "single",
    "id": "m506",
    "fixed": true
  },
  {
    "q": "Что делает logger.exception внутри except?",
    "options": [
      "пишет лог уровня ERROR с traceback",
      "только print без traceback",
      "глотает исключение молча",
      "меняет тип исключения"
    ],
    "answer": 0,
    "explain": "exception() = error(..., exc_info=True). Вне except traceback может быть пустым.",
    "kind": "single",
    "id": "m537",
    "fixed": true
  },
  {
    "q": "Почему logger = logging.getLogger(__name__)?",
    "options": [
      "иерархия логгеров по модулю",
      "обязательный синтаксис",
      "быстрее print",
      "отключает root"
    ],
    "answer": 0,
    "explain": "Удобно фильтровать по имени пакета. Модуль logging пишет структурированные сообщения с уровнями важности; print для продакшена обычно недостаточен.",
    "kind": "single",
    "id": "m549",
    "fixed": true
  },
  {
    "q": "Что делает RotatingFileHandler?",
    "options": [
      "ротирует лог-файл по размеру (backupCount)",
      "ротирует только по времени (это TimedRotating)",
      "пишет только в syslog",
      "сжимает HTTP"
    ],
    "answer": 0,
    "explain": "При maxBytes файл переименовывается, открывается новый. TimedRotatingFileHandler — по времени.",
    "kind": "single",
    "id": "m561",
    "fixed": true
  },
  {
    "q": "Что делает Logger.propagate?",
    "options": [
      "передаёт записи родительским логгерам при True",
      "удаляет handlers",
      "меняет уровень на CRITICAL",
      "пишет только в файл"
    ],
    "answer": 0,
    "explain": "По умолчанию True: запись идёт вверх к root. Иногда ставят False, чтобы не дублировать.",
    "kind": "single",
    "id": "m598",
    "fixed": true
  }
);
