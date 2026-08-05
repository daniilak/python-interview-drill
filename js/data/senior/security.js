// @meta topic=security group=Безопасность
// senior · 64 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "В чём риск timing attack при сравнении паролей через ==?",
    "options": [
      "время ответа может выдать позицию совпадения байтов",
      "== всегда сравнивает хеши, а не строки",
      "hash() даёт криптостойкое сравнение",
      "HTTPS полностью устраняет утечку по времени"
    ],
    "answer": 0,
    "explain": "Обычное == останавливается на первом несовпавшем символе — злоумышленник меряет задержку. hmac.compare_digest / secrets.compare_digest сравнивают за константное время.",
    "kind": "single",
    "id": "s2",
    "fixed": true
  },
  {
    "q": "Как обычно защищаются от SQL injection?",
    "options": [
      "параметризованными запросами или bind-переменными ORM",
      "ручным экранированием через str.replace",
      "переводом SQL в верхний регистр",
      "отключением GIL на время запроса"
    ],
    "answer": 0,
    "explain": "Никогда не склеивайте SQL со строками из пользовательского ввода. Плейсхолдеры и ORM-bind отделяют код запроса от данных — драйвер экранирует значения сам.",
    "kind": "single",
    "id": "s19",
    "fixed": true
  },
  {
    "q": "Почему shelve из недоверенного источника опасен?",
    "options": [
      "внутри pickle — возможен RCE при десериализации",
      "безопасен как json.loads при HTTPS",
      "риск только DoS по размеру файла",
      "HTTPS делает shelve безопасным автоматически"
    ],
    "answer": 0,
    "explain": "shelve = pickle на диске. Злоумышленный файл выполнит произвольный код при load. Как и pickle/yaml.unsafe — только доверенные данные.",
    "kind": "single",
    "id": "s36",
    "fixed": true
  },
  {
    "q": "Что верно про eval на пользовательском вводе?",
    "options": [
      "RCE риск",
      "безопасен с ast",
      "только SyntaxError",
      "sandbox stdlib guaranteed"
    ],
    "answer": 0,
    "explain": "RCE риск. На границе системы не доверяй вводу и сериализации.",
    "kind": "single",
    "id": "s53",
    "fixed": true
  },
  {
    "q": "Что верно про IDOR (API) кратко?",
    "options": [
      "доступ к чужим объектам по угадываемому id",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s69",
    "fixed": true
  },
  {
    "q": "Что делает jinja2.SandboxedEnvironment?",
    "options": [
      "ограничивает опасные атрибуты и вызовы в шаблонах",
      "гарантирует абсолютную защиту от любого RCE",
      "заменяет Content-Security-Policy в браузере",
      "отключает проверку TLS-сертификатов"
    ],
    "answer": 0,
    "explain": "Без sandbox шаблон может дойти до __class__.__mro__ и RCE. SandboxedEnvironment режет доступ к опасным цепочкам. Не серебряная пуля — недоверенные шаблоны всё равно опасны.",
    "kind": "single",
    "id": "s85",
    "fixed": true
  },
  {
    "q": "В чём риск template injection в Jinja без sandbox?",
    "options": [
      "RCE через {{ }}",
      "только XSS HTML",
      "только DoS CPU always",
      "нет риска"
    ],
    "answer": 0,
    "explain": "RCE через {{ }}. На границе системы не доверяй вводу и сериализации.",
    "kind": "single",
    "id": "s101",
    "fixed": true
  },
  {
    "q": "Что вернёт shell=True + user input?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Результат выражения — инъекции / path traversal / open redirect — валидируй и параметризуй. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s117",
    "fixed": true
  },
  {
    "q": "Что такое open redirect уязвимость?",
    "options": [
      "сайт перенаправляет на произвольный вредоносный URL из параметра",
      "ускорение цикла интерпретатора CPython",
      "аннотация typing без runtime-эффекта",
      "параметр только для CI pipeline"
    ],
    "answer": 0,
    "explain": "?next=https://evil.com после логина — фишинг с доверенным доменом. Фикс: whitelist redirect URI, относительные пути, проверка host.",
    "kind": "single",
    "id": "s133",
    "fixed": true
  },
  {
    "q": "Что такое XSS (cross-site scripting)?",
    "options": [
      "внедрение исполняемого скрипта в страницу, выполняемого в браузере жертвы",
      "ускорение bytecode CPython",
      "typing-аннотация без runtime",
      "параметр CI pipeline"
    ],
    "answer": 0,
    "explain": "Reflected/stored XSS: <script> в комментарии, куки без HttpOnly. Защита: escape на выводе, CSP, sanitize HTML, HttpOnly cookies.",
    "kind": "single",
    "id": "s149",
    "fixed": true
  },
  {
    "q": "Какие флаги делают cookie безопаснее?",
    "options": [
      "HttpOnly + Secure + SameSite",
      "только Secure без HttpOnly",
      "только Path=/",
      "Domain=* для всех поддоменов"
    ],
    "answer": 0,
    "explain": "HttpOnly — JS не читает (меньше XSS theft). Secure — только HTTPS. SameSite — CSRF mitigation. Комбинация — baseline для session cookies.",
    "kind": "single",
    "id": "s165",
    "fixed": true
  },
  {
    "q": "Что вернёт // or metadata IP?",
    "options": [
      "облачные метаданные под угрозой",
      "не бывает",
      "только XSS",
      "только CSRF"
    ],
    "answer": 0,
    "explain": "Результат выражения — облачные метаданные под угрозой. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s180",
    "fixed": true
  },
  {
    "q": "Что такое SSRF?",
    "options": [
      "сервер ходит по URL от пользователя во внутреннюю сеть",
      "XSS в браузере",
      "SQL inject",
      "CSRF form"
    ],
    "answer": 0,
    "explain": "Сервер ходит по URL от пользователя во внутреннюю сеть. На границе системы не доверяй вводу и сериализации.",
    "kind": "single",
    "id": "s195",
    "fixed": true
  },
  {
    "q": "Почему осторожно логировать сырой X-Forwarded-For?",
    "options": [
      "заголовок подделывается клиентом; возможны PII и секреты в цепочке",
      "заголовок всегда криптографически подписан",
      "логирование IP запрещено GDPR без исключений",
      "X-Forwarded-For содержит только UUID запроса"
    ],
    "answer": 0,
    "explain": "Первый IP в списке — от клиента, не доверяй для ACL. Редактируй/хешируй PII; для rate limit бери доверенный IP от reverse proxy.",
    "kind": "single",
    "id": "s210",
    "fixed": true
  },
  {
    "q": "Что такое RCE в контексте веб-безопасности?",
    "options": [
      "удалённое исполнение произвольного кода на сервере или клиенте",
      "только чтение файлов без записи",
      "отказ в обслуживании без выполнения кода",
      "подмена DNS без доступа к приложению"
    ],
    "answer": 0,
    "explain": "Remote Code Execution — критичнейший класс: pickle/yaml unsafe load, template injection, eval user input. Defense: sandbox, allowlist, no eval.",
    "kind": "single",
    "id": "s224",
    "fixed": true
  },
  {
    "q": "Что вернёт SQL f-string?",
    "options": [
      "инъекции / path traversal / open redirect — валидируй и параметризуй",
      "ускоряет код",
      "требуется PEP 8",
      "безопасно в FastAPI всегда"
    ],
    "answer": 0,
    "explain": "Результат выражения — инъекции / path traversal / open redirect — валидируй и параметризуй. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s238",
    "fixed": true
  },
  {
    "q": "Что такое open redirect в API?",
    "options": [
      "сервер редиректит на произвольный URL из параметра без валидации",
      "редирект только на HTTPS",
      "кэширование 301 ответа",
      "CORS preflight"
    ],
    "answer": 0,
    "explain": "?next=https://evil.com — фишинг с доверенным доменом. Allowlist хостов, относительные пути или подписанный token redirect.",
    "kind": "single",
    "id": "s252",
    "fixed": true
  },
  {
    "q": "Риск subprocess с shell=True?",
    "options": [
      "command injection через неэкранированный user input в строке",
      "shell=True всегда безопаснее list argv",
      "запрещён только на Windows",
      "включает автоматический sandbox"
    ],
    "answer": 0,
    "explain": "subprocess.run(f'convert {user}', shell=True) — RCE. Передавай список argv, shell=False, shlex для редких shell-конструкций.",
    "kind": "single",
    "id": "s266",
    "fixed": true
  },
  {
    "q": "Почему `open(user_path)` — антипаттерн?",
    "options": [
      "path traversal: user_path может выйти за разрешённую директорию",
      "open всегда безопасен с абсолютным путём",
      "медленнее pathlib",
      "запрещён только на Windows"
    ],
    "answer": 0,
    "explain": "../../../etc/passwd. Нормализуй, resolve, проверь commonpath с базой, используй sendfile с allowlist, не сырой ввод.",
    "kind": "single",
    "id": "s280",
    "fixed": true
  },
  {
    "q": "В чём риск pickle.loads из недоверенного источника?",
    "options": [
      "RCE-риск — нельзя",
      "безопасно как json",
      "только DoS",
      "ok с HTTPS"
    ],
    "answer": 0,
    "explain": "RCE-риск — нельзя. На границе системы не доверяй вводу и сериализации.",
    "kind": "single",
    "id": "s294",
    "fixed": true
  },
  {
    "q": "В чём риск subprocess с shell=True?",
    "options": [
      "инъекция команд, если в строку попадает пользовательский ввод",
      "только замедление без угроз",
      "shell=True безопаснее списка аргументов",
      "синтаксическая ошибка Python"
    ],
    "answer": 0,
    "explain": "shell=True отдаёт строку оболочке. Передавай список аргументов без shell. Если shell нужен — только доверенные строки.",
    "kind": "single",
    "code": "import subprocess\n# subprocess.run(user_str, shell=True)",
    "id": "s308",
    "fixed": true
  },
  {
    "q": "XSS в контексте API — что имеют в виду?",
    "options": [
      "неэкранированные данные API попадают в HTML/JS браузера и выполняются",
      "SQL injection в Postgres",
      "только атака на DNS",
      "шифрование TLS"
    ],
    "answer": 0,
    "explain": "API отдаёт user content → фронт вставляет в DOM без escape — script execution. API: Content-Type, CSP; фронт: encode, sanitize.",
    "kind": "single",
    "id": "s321",
    "fixed": true
  },
  {
    "q": "Что верно про SQLi (API) кратко?",
    "options": [
      "инъекция в SQL",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "Инъекция в SQL. На границе системы не доверяй вводу и сериализации.",
    "kind": "single",
    "id": "s334",
    "fixed": true
  },
  {
    "q": "Что такое path traversal в API?",
    "options": [
      "доступ к файлам вне разрешённой директории через ../ в пути",
      "ускорение цикла интерпретатора CPython",
      "аннотация typing без runtime-эффекта",
      "параметр конфигурации CI-пайплайна"
    ],
    "answer": 0,
    "explain": "Атакующий подставляет ../ в имя файла и читает /etc/passwd. Лечение: нормализация пути, whitelist директорий, запрет абсолютных путей из ввода.",
    "kind": "single",
    "id": "s347",
    "fixed": true
  },
  {
    "q": "Почему опасно логировать сырой заголовок Authorization?",
    "options": [
      "в логах окажутся секреты/токены — нужна редакция",
      "заголовок Authorization никогда не содержит секретов",
      "логирование заголовков запрещено RFC всегда",
      "это безопасно только в production"
    ],
    "answer": 0,
    "explain": "Bearer-токены и API-ключи попадают в ELK/Loki. Маскируй значение, логируй только hash/prefix или вовсе не логируй чувствительные заголовки.",
    "kind": "single",
    "id": "s359",
    "fixed": true
  },
  {
    "q": "Что такое open redirect?",
    "options": [
      "редирект пользователя на злонамеренный URL через параметр next=",
      "редирект HTTP→HTTPS на том же хосте",
      "внутренний forward в WSGI без смены URL",
      "кэширование 301 навсегда"
    ],
    "answer": 0,
    "explain": "?url=https://evil.com после логина — фишинг. Белый список хостов, относительные пути только, проверка схемы http(s).",
    "kind": "single",
    "id": "s371",
    "fixed": true
  },
  {
    "q": "Что вернёт supply chain signing (Sigstore)?",
    "options": [
      "проверка происхождения артефактов",
      "pep8 sign",
      "GPG only ancient mandatory",
      "JWT API"
    ],
    "answer": 0,
    "explain": "Результат выражения — проверка происхождения артефактов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s383",
    "fixed": true
  },
  {
    "q": "Чем опасна HTTP header injection (CRLF)?",
    "options": [
      "можно внедрить лишние заголовки или разбить ответ через \\r\\n",
      "это то же самое, что XSS в браузере, только на сервере",
      "это всегда SQL injection в заголовке Authorization",
      "это атака только на DNS-резолвер"
    ],
    "answer": 0,
    "explain": "Если в заголовок попадает необработанный ввод с CRLF (`\\r\\n`), атакующий может добавить свои заголовки или начать тело ответа (response splitting). Валидируй и режь перевод строки в именах/значениях заголовков.",
    "kind": "single",
    "id": "s395",
    "fixed": true
  },
  {
    "q": "Что верно про SSRF (web) кратко?",
    "options": [
      "сервер ходит на внутренние URL по указке",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s407",
    "fixed": true
  },
  {
    "q": "Что верно про SQLi (web) кратко?",
    "options": [
      "инъекция в SQL",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "Инъекция в SQL. На границе системы не доверяй вводу и сериализации.",
    "kind": "single",
    "id": "s419",
    "fixed": true
  },
  {
    "q": "Что вернёт content-type confusion / desync?",
    "options": [
      "разное толкование запроса proxy vs app",
      "только XSS",
      "только SQLi",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — разное толкование запроса proxy vs app. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s431",
    "fixed": true
  },
  {
    "q": "Что такое RCE в контексте API-безопасности?",
    "options": [
      "удалённое исполнение произвольного кода на сервере",
      "ускорение рендеринга шаблонов",
      "аннотация typing.Protocol",
      "режим read-only CI"
    ],
    "answer": 0,
    "explain": "RCE через pickle, template injection, eval пользовательского кода. Минимизируй attack surface, sandbox, никакого pickle из ввода.",
    "kind": "single",
    "id": "s443",
    "fixed": true
  },
  {
    "q": "Что такое dependency confusion?",
    "options": [
      "подмена внутреннего пакета одноимённым из публичного PyPI",
      "конфликт версий в requirements.txt",
      "ошибка resolver pip при offline",
      "только typo-squatting доменов"
    ],
    "answer": 0,
    "explain": "Компания публикует private foo; атакующий кладёт foo с большей версией на PyPI — pip ставит злой пакет. Лечение: private index, scope names.",
    "kind": "single",
    "id": "s454",
    "fixed": true
  },
  {
    "q": "В чём суть атаки JWT none alg?",
    "options": [
      "подмена алгоритма на `none` и принятие токена без подписи",
      "ускорение проверки подписи через кэш CPU",
      "это CSRF через cookie SameSite",
      "это классический SQL injection в payload"
    ],
    "answer": 0,
    "explain": "Атака `alg=none`: злоумышленник шлёт JWT без подписи, а дырявая библиотека принимает алгоритм `none`. Всегда явно белый список алгоритмов и проверяй подпись секретом/ключом сам.",
    "kind": "single",
    "id": "s465",
    "fixed": true
  },
  {
    "q": "Почему нельзя логировать сырой X-API-Key?",
    "options": [
      "секрет попадёт в логи — нужна редакция или маскирование",
      "API-ключи публичны по определению",
      "заголовки не попадают в centralized logging",
      "безопасно в debug, опасно только в info"
    ],
    "answer": 0,
    "explain": "Как Authorization: ключ в логе = компрометация. Логируй hash, последние 4 символа или «present».",
    "kind": "single",
    "id": "s475",
    "fixed": true
  },
  {
    "q": "Что такое SSRF?",
    "options": [
      "сервер выполняет запрос на URL по указке клиента (часто внутренние)",
      "XSS в браузере жертвы",
      "SQL injection в API",
      "хранение паролей в git"
    ],
    "answer": 0,
    "explain": "?url=http://169.254.169.254/ — metadata cloud. Блокируй private IP, allowlist схем/хостов, не доверяй DNS rebinding.",
    "kind": "single",
    "id": "s485",
    "fixed": true
  },
  {
    "q": "Почему pickle нельзя считать форматом данных для недоверенного ввода?",
    "options": [
      "десериализация может привести к выполнению кода",
      "pickle не умеет сериализовать dict",
      "pickle работает только на Windows",
      "это просто более медленный JSON"
    ],
    "answer": 0,
    "explain": "Pickle — протокол объектов Python, не безопасный data format. Недоверенный payload = риск RCE. Для внешних данных — безопасные форматы и явная схема.",
    "kind": "single",
    "id": "s493",
    "fixed": true
  },
  {
    "q": "Что такое path traversal?",
    "options": [
      "../ выход из директории",
      "отключение проверки подписи «для удобства»",
      "склеивание SQL со строками из запроса",
      "хранение секретов в репозитории в открытом виде"
    ],
    "answer": 0,
    "explain": "/ выход из директории. ../ выход из директории.",
    "kind": "single",
    "id": "s500",
    "fixed": true
  },
  {
    "q": "Что такое unsafe deserialization gadgets?",
    "options": [
      "цепочки классов для RCE при pickle/yaml.load",
      "только buffer overflow в C",
      "медленный JSON parser",
      "ошибки валидации pydantic"
    ],
    "answer": 0,
    "explain": "Гаджеты: __reduce__ цепочки через builtins. PyYAML unsafe, pickle — классика. SafeLoader / не pickle из сети.",
    "kind": "single",
    "id": "s507",
    "fixed": true
  },
  {
    "q": "Что верно про SSRF (API) кратко?",
    "options": [
      "сервер ходит на внутренние URL по указке",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s514",
    "fixed": true
  },
  {
    "q": "Что важно для секретов в логах?",
    "options": [
      "редактирование или полный отказ от логирования",
      "логировать всё в debug",
      "pickle секретов для компактности",
      "передавать в query string"
    ],
    "answer": 0,
    "explain": "Structured logging с redaction filter: password, token, Authorization. Compliance и incident response.",
    "kind": "single",
    "id": "s519",
    "fixed": true
  },
  {
    "q": "Выбери все опасные практики?",
    "options": [
      "pickle.loads из недоверенного источника",
      "yaml.load без SafeLoader на пользовательском вводе",
      "subprocess с shell=True и неэкранированным вводом",
      "использование secrets.compare_digest для сравнения токенов"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explain": "Compare_digest как раз безопаснее обычного == для секретов (timing-safe). Остальное — классические RCE/injection векторы. Верными здесь будут пункты: «pickle.loads из недоверенного источника»; «yaml.load без SafeLoader на пользовательском вводе»; «subprocess с shell=True и неэкранированным вводом».",
    "kind": "multi",
    "tags": [
      "security"
    ],
    "difficulty": "senior",
    "id": "s524",
    "fixed": true
  },
  {
    "q": "Что верно про CSP nonce для скриптов?",
    "options": [
      "разрешает конкретный inline-скрипт с совпадающим nonce в заголовке CSP",
      "полностью отключает выполнение JavaScript в браузере",
      "заменяет серверную валидацию и XSS-фильтры",
      "обходит проверку подписи TLS-сертификата"
    ],
    "answer": 0,
    "explain": "CSP `script-src 'nonce-abc'` разрешает только теги <script nonce=\"abc\">. Nonce генерируют на каждый ответ — так можно оставить нужный inline без `unsafe-inline`.",
    "kind": "single",
    "id": "s529",
    "fixed": true
  },
  {
    "q": "В чём разница: HTML escape vs URL encode?",
    "options": [
      "разные контексты: HTML-текст/атрибуты vs query/path сегменты URL",
      "это взаимозаменяемые функции для любого вывода",
      "достаточно одного HTML-escape для защиты от XSS везде",
      "экранирование SQL идентично URL-кодированию"
    ],
    "answer": 0,
    "explain": "html.escape защищает разметку (&, <, >). urllib.parse.quote кодирует байты для URL. Подставлять quote в HTML или escape в query — типичная ошибка.",
    "kind": "single",
    "id": "s534",
    "fixed": true
  },
  {
    "q": "Что верно про ast.literal_eval безопаснее eval потому что?",
    "options": [
      "разбирает только литералы Python, без вызовов функций и импортов",
      "работает быстрее eval за счёт JIT-компиляции",
      "опасен так же, как eval, если строка длинная",
      "выполняет произвольный байткод через exec под капотом"
    ],
    "answer": 0,
    "explain": "literal_eval принимает строки вида '[1, {\"a\": 2}]', но не `os.system(...)`. Для недоверенных данных — да; для произвольного кода всё равно нельзя.",
    "kind": "single",
    "id": "s539",
    "fixed": true
  },
  {
    "q": "В чём риск timing attack при сравнении паролей через ==?",
    "options": [
      "время ответа может выдать, на каком байте строки сравнение прервалось",
      "== в CPython всегда сравнивает за константное время",
      "достаточно сравнивать len() двух строк перед ==",
      "hash(a) == hash(b) безопаснее для секретов"
    ],
    "answer": 0,
    "explain": "Обычное == останавливается на первом отличии. Атакующий меряет задержку. Для секретов — hmac.compare_digest или secrets.compare_digest.",
    "kind": "single",
    "id": "s544",
    "fixed": true
  },
  {
    "q": "Что такое marshmallow/pydantic на границе?",
    "options": [
      "парсинг и валидация недоверенного ввода до попадания в домен",
      "замена сетевого firewall и WAF",
      "механизм аутентификации вместо OAuth/JWT",
      "безопасная альтернатива pickle для произвольных объектов"
    ],
    "answer": 0,
    "explain": "На HTTP/gRPC/message boundary схема описывает типы, обязательность, диапазоны. Отсекает мусор до бизнес-логики. Не заменяет authz и не делает pickle безопасным.",
    "kind": "single",
    "id": "s549",
    "fixed": true
  },
  {
    "q": "Что верно про xml.etree без безопасных настроек?",
    "options": [
      "на некоторых парсерах/версиях возможны XXE и entity expansion атаки",
      "xml.etree.ElementTree всегда безопасен из коробки",
      "риск есть только при парсинге JSON, не XML",
      "HTTPS полностью устраняет XXE при любом парсере"
    ],
    "answer": 0,
    "explain": "Старые дефолты XML-парсеров разрешали external entities. defusedxml, отключение entities, лимиты — обязательны для недоверенного XML. etree в stdlib консервативен, но контекст важен.",
    "kind": "single",
    "id": "s554",
    "fixed": true
  },
  {
    "q": "Что означает: Десериализация через marshal из недоверенного источника?",
    "options": [
      "риск RCE — marshal не предназначен для внешних данных",
      "безопасно как json.loads при валидном UTF-8",
      "риск только DoS по памяти, выполнения кода нет",
      "допустимо, если канал защищён HTTPS"
    ],
    "answer": 0,
    "explain": "marshal — внутренний формат CPython для .pyc, не для API. В отличие от JSON, может восстанавливать объекты с исполняемым кодом. Только доверенные локальные данные.",
    "kind": "single",
    "id": "s559",
    "fixed": true
  },
  {
    "q": "В чём риск pickle.loads из недоверенного источника?",
    "options": [
      "произвольное выполнение кода через __reduce__ и глобалы",
      "только риск неверного типа после loads, как у json",
      "DoS исключён — pickle лимитирует размер автоматически",
      "безопасно при передаче по HTTPS/TLS"
    ],
    "answer": 0,
    "explain": "Pickle — не формат данных, а протокол создания объектов. Злоумышленник подставляет callable. Только доверенные каналы или замена на JSON/msgpack/protobuf.",
    "kind": "single",
    "id": "s564",
    "fixed": true
  },
  {
    "q": "Что верно про CSRF (API) кратко?",
    "options": [
      "запрос от имени пользователя без его намерения",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s569",
    "fixed": true
  },
  {
    "q": "Что такое yaml.load без SafeLoader?",
    "options": [
      "может создавать произвольные Python-объекты — риск RCE на старых PyYAML",
      "эквивалент json.loads по безопасности",
      "парсит только строки и числа, объекты запрещены",
      "безопасен, если YAML пришёл по HTTPS"
    ],
    "answer": 0,
    "explain": "yaml.load по умолчанию (до hardening) позволял !!python/object. Для недоверенного ввода — yaml.safe_load или Loader=SafeLoader. load ≠ safe_load.",
    "kind": "single",
    "id": "s574",
    "fixed": true
  },
  {
    "q": "Что означает: Десериализация через yaml.load (unsafe) из недоверенного источника?",
    "options": [
      "риск выполнения кода через теги Python-объектов в YAML",
      "безопасно при валидной кодировке UTF-8",
      "максимум — неверный тип поля в dataclass",
      "допустимо в internal API за VPN"
    ],
    "answer": 0,
    "explain": "Недоверенный YAML с !!python/object/new может вызвать произвольный код при load(). CI/CD конфиги, пользовательский upload — только safe_load и схема.",
    "kind": "single",
    "id": "s579",
    "fixed": true
  },
  {
    "q": "Что такое Антипаттерн: redirect=user_url?",
    "options": [
      "open redirect — злоумышленник подставляет внешний URL после логина",
      "ускорение навигации за счёт кэша redirect",
      "стандарт OAuth2 для всех провайдеров",
      "безопасный паттерн при использовании HTTPS"
    ],
    "answer": 0,
    "explain": "?next=https://evil.com после auth уводит жертву на фишинг. Whitelist разрешённых path, относительные URL без scheme, или signed redirect token.",
    "kind": "single",
    "id": "s584",
    "fixed": true
  },
  {
    "q": "Что верно про IDOR (web) кратко?",
    "options": [
      "доступ к чужим объектам по угадываемому id",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s589",
    "fixed": true
  },
  {
    "q": "Что такое mass assignment?",
    "options": [
      "клиент подставляет лишние поля (is_admin) в JSON, модель их принимает",
      "массовая вставка строк в БД одним INSERT",
      "присвоение list comprehension всем переменным модуля",
      "bulk import через pickle.loads"
    ],
    "answer": 0,
    "explain": "ORM/dataclass принимает **kwargs от пользователя — role, balance обновляются без намерения. Лечение: explicit allowlist полей, отдельные DTO для write.",
    "kind": "single",
    "id": "s594",
    "fixed": true
  },
  {
    "q": "Что верно про path traversal (web) кратко?",
    "options": [
      "доступ к файлам вне разрешённой директории через ../ в пути",
      "атака только на SQL, не на файловую систему",
      "эквивалент XSS в HTML-контексте",
      "устраняется только WAF без валидации path"
    ],
    "answer": 0,
    "explain": "download?file=../../etc/passwd — если join без нормализации. os.path.basename, resolve() внутри chroot/base dir, whitelist имён.",
    "kind": "single",
    "id": "s599",
    "fixed": true
  },
  {
    "q": "Что верно про CSRF (web) кратко?",
    "options": [
      "запрос от имени пользователя без его намерения",
      "это способ ускорить цикл интерпретатора CPython",
      "это аннотация из модуля typing без runtime-эффекта",
      "это параметр только для CI-пайплайна"
    ],
    "answer": 0,
    "explain": "На собеседовании ждут именно это определение, а не соседние похожие термины.",
    "kind": "single",
    "id": "s604",
    "fixed": true
  },
  {
    "q": "Почему pickle/yaml.load/unsafe deserialize опасны на недоверенном вводе?",
    "options": [
      "могут сконструировать объекты и выполнить код при десериализации (RCE gadgets)",
      "только занимают много памяти",
      "запрещены PEP 8",
      "работают только на Windows"
    ],
    "answer": 0,
    "explain": "Не десериализуй недоверенное бинарное/YAML/JSON-pickle. Для данных — json + явная схема (pydantic). Для YAML — safe_load. Секреты не логируй; сравнивай токены через secrets.compare_digest. SSRF: не давай пользователю выбирать URL к metadata IP (169.254.169.254) без allowlist.",
    "kind": "single",
    "tags": [
      "security"
    ],
    "difficulty": "senior",
    "id": "s609",
    "fixed": true
  },
  {
    "q": "Что такое Логировать сырой заголовок Cookie?",
    "options": [
      "риск утечки session token и PII в логи — нужна редакция",
      "best practice для отладки auth в production",
      "безопасно, если логи в Elasticsearch",
      "требование PCI DSS для всех API"
    ],
    "answer": 0,
    "explain": "Cookie часто содержит session id, JWT, tracking. Логируют имя cookie или hash, не значение. Structured logging + scrubbers.",
    "kind": "single",
    "id": "s614",
    "fixed": true
  },
  {
    "q": "В чём риск prototype pollution больше про JS; в Python аналог?",
    "options": [
      "глубокий merge dict без фильтра ключей __proto__/классовых атрибутов",
      "только в Node.js, Python иммунен к любому merge",
      "использование dataclass вместо dict",
      "pickle.loads с SafeLoader"
    ],
    "answer": 0,
    "explain": "В JS merge({...user}) загрязняет Object.prototype. В Python опасен произвольный setattr/update на объектах/request JSON без схемы — не классический __proto__, но mass assignment и ORM.",
    "kind": "single",
    "id": "s619",
    "fixed": true
  },
  {
    "q": "Что верно про secrets модуль лучше random для?",
    "options": [
      "токены, пароли, CSRF — криптостойкий CSPRNG",
      "перемешивание playlist в медиаплеере",
      "выбор случайного элемента для A/B без security",
      "seed для воспроизводимых unit-тестов"
    ],
    "answer": 0,
    "explain": "random.Mersenne Twister предсказуем. secrets.token_urlsafe, compare_digest — для security-sensitive. random — для симуляций и игр.",
    "kind": "single",
    "id": "s624",
    "fixed": true
  },
  {
    "q": "Что вернёт Content-Security-Policy?",
    "options": [
      "ограничение ресурсов в браузере",
      "Python GIL policy",
      "pip audit",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — ограничение ресурсов в браузере. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s629",
    "fixed": true
  },
  {
    "q": "В чём риск pickle.load из сети —?",
    "options": [
      "RCE — поток байтов может выполнить произвольный код при loads",
      "только риск несовместимости версии протокола",
      "безопасно после gzip.decompress",
      "pickle по умолчанию sandbox в CPython 3.12"
    ],
    "answer": 0,
    "explain": "Никогда не pickle.loads из socket/HTTP. Формат доверяет байтам. Альтернатива — JSON, protobuf с валидацией схемы.",
    "kind": "single",
    "id": "s634",
    "fixed": true
  }
);
