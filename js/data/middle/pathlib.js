// @meta topic=pathlib group=Stdlib и производительность
// middle · 23 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что делает Path.resolve()?",
    "options": [
      "возвращает абсолютный путь и разрешает symlink'и",
      "только превращает Path в str",
      "удаляет файл по этому пути",
      "создаёт недостающие каталоги"
    ],
    "answer": 0,
    "explain": "resolve() нормализует путь до абсолютного и следует по символическим ссылкам (есть нюансы strict=). Это не unlink и не mkdir.",
    "kind": "single",
    "id": "m85",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "var/log/syslog",
      "var\\log\\syslog",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: var/log/syslog.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'syslog'))",
    "id": "m337",
    "fixed": true
  },
  {
    "q": "Чем Path.match отличается от Path.glob?",
    "options": [
      "match проверяет паттерн на сам путь; glob ищет файлы в дереве",
      "glob только для одного файла, match — рекурсия",
      "разницы нет",
      "match удаляет файлы"
    ],
    "answer": 0,
    "explain": "p.match('*.py') vs list(Path('.').glob('**/*.py')).",
    "kind": "single",
    "id": "m526",
    "fixed": true
  },
  {
    "q": "Что вернёт Path('a') / 'b' / 'c' даст?",
    "options": [
      "Path с платформенными разделителями",
      "строку 'a/b/c' всегда",
      "ошибку",
      "bytes"
    ],
    "answer": 0,
    "explain": "Результат выражения — Path с платформенными разделителями. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m568",
    "fixed": true
  },
  {
    "q": "Чем PurePath отличается от Path?",
    "options": [
      "PurePath — чистая работа с путём без I/O; Path умеет читать/писать диск",
      "Path нельзя использовать на Windows",
      "разницы нет",
      "PurePath только для URL"
    ],
    "answer": 0,
    "explain": "PurePosixPath/PureWindowsPath — парсинг и join. Path.open/read_text — уже FS.",
    "kind": "single",
    "id": "m618",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "a/b",
      "ab",
      "a\\b",
      "ошибка"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: a/b.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('a', 'b'))",
    "id": "m626",
    "fixed": true
  },
  {
    "q": "Что делает Path.write_text?",
    "options": [
      "записывает строку в файл (кодировка/newline настраиваются)",
      "только читает",
      "создаёт symlink",
      "пишет bytes без encode"
    ],
    "answer": 0,
    "explain": "Удобный one-liner поверх open. Для bytes — write_bytes.",
    "kind": "single",
    "id": "m650",
    "fixed": true
  },
  {
    "q": "Что делает Path.glob('**/*.py')?",
    "options": [
      "рекурсивный поиск файлов по маске",
      "только в текущем каталоге без **",
      "удаление .py",
      "компиляцию"
    ],
    "answer": 0,
    "explain": "** — рекурсия. rglob('*.py') — удобный синоним.",
    "kind": "single",
    "id": "m658",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "x/y/z/w",
      "x/y/z/w/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: x/y/z/w.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('x', 'y', 'z', 'w'))",
    "id": "m706",
    "fixed": true
  },
  {
    "q": "Что получится?",
    "options": [
      "Path('a/b') или a\\b",
      "ошибка",
      "None",
      "list"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: Path('a/b') или a\\b.",
    "kind": "single",
    "code": "from pathlib import Path\nprint(Path('a') / 'b')",
    "id": "m746",
    "fixed": true
  },
  {
    "q": "Что делает Path.home()?",
    "options": [
      "возвращает домашнюю директорию пользователя",
      "текущий cwd",
      "корень /",
      "temp dir"
    ],
    "answer": 0,
    "explain": "Кроссплатформенно через pathlib, не хардкодь /home/...",
    "kind": "single",
    "id": "m792",
    "fixed": true
  },
  {
    "q": "Что делает Path.expanduser()?",
    "options": [
      "раскрывает ~ в домашний каталог",
      "раскрывает $VAR окружения (это expandvars)",
      "делает путь абсолютным всегда (это resolve)",
      "удаляет файл"
    ],
    "answer": 0,
    "explain": "~/docs → /Users/.../docs. Для env — os.path.expandvars.",
    "kind": "single",
    "id": "m813",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "usr/bin/python",
      "usr\\bin\\python",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: usr/bin/python.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('usr', 'bin', 'python'))",
    "id": "m831",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.JSON'",
      "'B.JSON'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.JSON'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('B.JSON').suffix)",
    "id": "m844",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "tmp/x",
      "tmp\\x",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: tmp/x.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('tmp', 'x'))",
    "id": "m846",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.txt'",
      "'a.txt'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.txt'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('a.txt').suffix)",
    "id": "m852",
    "fixed": true
  },
  {
    "q": "Что вернёт Path.read_text()?",
    "options": [
      "читает файл как str",
      "bytes only",
      "ошибка",
      "lines iterator always"
    ],
    "answer": 0,
    "explain": "Результат выражения — читает файл как str. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m862",
    "fixed": true
  },
  {
    "q": "Что даёт Path('a') / 'b'?",
    "options": [
      "Path('a/b') (с учётом OS-сепаратора)",
      "строку 'a/b' всегда без Path",
      "ошибку типов",
      "Path('ab')"
    ],
    "answer": 0,
    "explain": "Оператор / у Path склеивает части пути.",
    "kind": "single",
    "id": "m870",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.gz'",
      "'archive.tar.gz'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.gz'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('archive.tar.gz').suffix)",
    "id": "m880",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "etc/passwd",
      "etc\\passwd",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: etc/passwd.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('etc', 'passwd'))",
    "id": "m888",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "home/user/docs",
      "home/user/docs/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: home/user/docs.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('home', 'user', 'docs'))",
    "id": "m896",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "var/log/app.log",
      "var/log/app.log/",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: var/log/app.log.",
    "kind": "single",
    "code": "from pathlib import PurePosixPath\nprint(PurePosixPath('var', 'log', 'app.log'))",
    "id": "m898",
    "fixed": true
  },
  {
    "q": "Что выведет код?",
    "options": [
      "'.PNG'",
      "'photo.PNG'",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "pathlib склеивает части пути через /. Результат: '.PNG'.",
    "kind": "single",
    "code": "from pathlib import PurePath\nprint(PurePath('photo.PNG').suffix)",
    "id": "m900",
    "fixed": true
  }
);
