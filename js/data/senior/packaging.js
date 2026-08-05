// @meta topic=packaging group=Упаковка и CI
// senior · 30 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что вернёт wheel tags cp311-abi3?",
    "options": [
      "интерпретатор/ABI/платформа",
      "только version lib",
      "pep8 tag",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — интерпретатор/ABI/платформа. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s32",
    "fixed": true
  },
  {
    "q": "Что такое wheel в мире упаковки Python?",
    "options": [
      "готовый дистрибутив пакета (часто с бинарниками) по PEP 427",
      "только исходный tar.gz без сборки",
      "то же самое, что каталог venv",
      "формат, доступный исключительно в conda"
    ],
    "answer": 0,
    "explain": "Wheel (`.whl`) — zip-дистрибутив, который pip ставит без сборки из исходников (PEP 427). Для нативных пакетов внутри уже скомпилированные артефакты под платформу/ABI. Исходники — sdist; venv — окружение, не формат пакета.",
    "kind": "single",
    "id": "s65",
    "fixed": true
  },
  {
    "q": "Зачем Trove classifier `Programming Language :: Python :: 3.13`?",
    "options": [
      "заявить поддерживаемые версии Python на PyPI для пользователей и инструментов",
      "ускорить интерпретатор при установке",
      "включить GIL в wheel",
      "заменить конфигурацию mypy"
    ],
    "answer": 0,
    "explain": "Классификаторы — метаданные пакета. pip/поиск PyPI/политики компаний смотрят «поддерживает ли 3.13». Не проверяет автоматически — честность maintainers.",
    "kind": "single",
    "id": "s81",
    "fixed": true
  },
  {
    "q": "Чем manylinux2014 отличается от manylinux_2_28?",
    "options": [
      "разная минимальная версия glibc для совместимости wheel",
      "2014 — macOS, 2_28 — Windows",
      "одинаковые теги, разное имя",
      "2_28 только для musl, не glibc"
    ],
    "answer": 0,
    "explain": "manylinux определяет oldest glibc в CI-образе. Wheel с _2_28 требует более новый Linux, чем 2014. pip выбирает подходящий tag под хост.",
    "kind": "single",
    "id": "s97",
    "fixed": true
  },
  {
    "q": "Зачем стандартизируют pylock.toml / lock-форматы?",
    "options": [
      "воспроизводимые установки зависимостей между инструментами экосистемы",
      "навсегда оставить только requirements.txt",
      "запретить pip freeze",
      "чтобы poetry был единственным менеджером"
    ],
    "answer": 0,
    "explain": "PEP 751 и движение к единому lock: uv/pip/poetry читают один файл. Меньше «у меня другой poetry.lock». Эволюция, не мгновенная замена всех форматов.",
    "kind": "single",
    "id": "s113",
    "fixed": true
  },
  {
    "q": "Зачем CI matrix с несколькими версиями Python?",
    "options": [
      "ловить несовместимости и регрессии на 3.10, 3.11, 3.12…",
      "только ради зелёного бейджа в README",
      "заменить все unit-тесты",
      "достаточно тестировать только latest"
    ],
    "answer": 0,
    "explain": "Syntax, deprecated API, wheels без cp310 — matrix в GitHub Actions находит до релиза. Особенно важно для библиотек с C-расширениями.",
    "kind": "single",
    "id": "s129",
    "fixed": true
  },
  {
    "q": "Что такое таблица [project] в PEP 621?",
    "options": [
      "стандартные метаданные пакета в pyproject.toml",
      "runtime-настройки приложения",
      "конфиг mypy strict",
      "замена tox.ini полностью"
    ],
    "answer": 0,
    "explain": "name, version, dependencies, readme — единое место для setuptools/hatch/poetry. [tool.*] — настройки конкретных инструментов отдельно.",
    "kind": "single",
    "id": "s145",
    "fixed": true
  },
  {
    "q": "Зачем classifier `Programming Language :: Python :: 3.10` на PyPI?",
    "options": [
      "декларировать поддержку версии для пользователей и resolver'ов",
      "ускорить CPython 3.10 при pip install",
      "включить строгий mypy в пакете",
      "заменить requires-python в pyproject"
    ],
    "answer": 0,
    "explain": "Дублирует идею s81 для конкретной версии. requires-python в metadata жёстче; classifier — фильтр поиска и сигнал maintainers.",
    "kind": "single",
    "id": "s161",
    "fixed": true
  },
  {
    "q": "Зачем в CI matrix тестировать на Python 3.11?",
    "options": [
      "ловить несовместимости синтаксиса, stdlib и C-API между версиями",
      "только для красивого бейджа в README",
      "чтобы заменить unit-тесты матрицей",
      "достаточно тестировать только latest"
    ],
    "answer": 0,
    "explain": "3.11+ меняет ExceptionGroup, tomllib, ускорения. Matrix на нескольких 3.x ловит deprecation и различия до релиза.",
    "kind": "single",
    "id": "s176",
    "fixed": true
  },
  {
    "q": "В чём разница: wheel vs sdist?",
    "options": [
      "wheel — собранный дистрибутив; sdist — исходники для сборки",
      "синонимы",
      "wheel только win",
      "sdist быстрее install always"
    ],
    "answer": 0,
    "explain": "Wheel — собранный дистрибутив; sdist — исходники для сборки. Отличай sdist, wheel, venv и lock-файлы.",
    "kind": "single",
    "id": "s191",
    "fixed": true
  },
  {
    "q": "Зачем abi3 / stable ABI для расширений?",
    "options": [
      "одно wheel работает на нескольких версиях CPython без пересборки",
      "ускорить интерпретацию чистого Python",
      "заменить pip на conda",
      "включить JIT для всех модулей"
    ],
    "answer": 0,
    "explain": "Py_LIMITED_API фиксирует подмножество C-API. Колесо cp311-abi3 совместимо с 3.11+ при соблюдении ограничений ABI.",
    "kind": "single",
    "id": "s206",
    "fixed": true
  },
  {
    "q": "Зачем Trove-классификатор `Programming Language :: Python :: 3.12`?",
    "options": [
      "заявить поддерживаемые версии Python на PyPI для пользователей и инструментов",
      "принудительно установить Python 3.12 у клиента",
      "заменить поле requires-python в pyproject",
      "включить синтаксис 3.12 в wheel без проверки"
    ],
    "answer": 0,
    "explain": "Классификаторы — метаданные для поиска и фильтрации. Реальное ограничение задаёт requires-python; matrix в CI подтверждает совместимость.",
    "kind": "single",
    "id": "s220",
    "fixed": true
  },
  {
    "q": "Что вернёт reproducible sdist + wheel attestations?",
    "options": [
      "цепочка доверия артефактов",
      "MD5 enough",
      "trust PyPI without pins always",
      "git tag enough"
    ],
    "answer": 0,
    "explain": "Результат выражения — цепочка доверия артефактов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s234",
    "fixed": true
  },
  {
    "q": "Что изменил editable install по PEP 660?",
    "options": [
      "стандартизировал editable-установку через build backend / pyproject",
      "оставил только устаревшие egg-link навсегда",
      "сделал editable доступным только в conda",
      "запретил editable вне Poetry"
    ],
    "answer": 0,
    "explain": "PEP 660 описывает editable installs через тот же pyproject/build-backend, что и обычная сборка. Вместо хрупких egg-link появляется предсказуемый механизм `pip install -e` для современных упаковщиков.",
    "kind": "single",
    "id": "s248",
    "fixed": true
  },
  {
    "q": "Зачем классификатор `Python :: 3.14` на PyPI?",
    "options": [
      "декларировать поддержку версии для поиска и политики проекта",
      "форсировать установку 3.14 у всех пользователей",
      "включить экспериментальный синтаксис без guard",
      "заменить requires-python"
    ],
    "answer": 0,
    "explain": "Метаданные для пользователей; реальная граница — requires-python и CI. Классификатор без тестов — только обещание.",
    "kind": "single",
    "id": "s276",
    "fixed": true
  },
  {
    "q": "Зачем Trove-классификатор `Python :: 3.11`?",
    "options": [
      "указать поддержку версии в метаданных пакета на PyPI",
      "установить 3.11 через pip автоматически",
      "отключить features 3.12+",
      "заменить unit-тесты"
    ],
    "answer": 0,
    "explain": "Информирует пользователей и индекс; совместно с requires-python>=3.11 и CI matrix.",
    "kind": "single",
    "id": "s290",
    "fixed": true
  },
  {
    "q": "Что вернёт pyproject.toml [project] — стандарт?",
    "options": [
      "метаданных/сборки (PEP 621 и др.)",
      "только poetry proprietary",
      "замена requirements forever without lock",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — метаданных/сборки (PEP 621 и др.). Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s304",
    "fixed": true
  },
  {
    "q": "Что гарантирует manylinux wheel?",
    "options": [
      "бинарная совместимость с широким набором Linux дистрибутивов (glibc, ABI)",
      "работу на Windows без пересборки",
      "отсутствие зависимостей от libc",
      "только source distribution"
    ],
    "answer": 0,
    "explain": "manylinux2014/manylinux_2_28 — auditwheel проверяет linked libs. Снижает «works on my laptop» для cp*-linux_x86_64 wheels.",
    "kind": "single",
    "id": "s317",
    "fixed": true
  },
  {
    "q": "Что такое abi3 wheel?",
    "options": [
      "колесо C-расширения на limited API для нескольких версий CPython",
      "wheel только с pure Python",
      "sdist в формате zip",
      "контейнер Docker"
    ],
    "answer": 0,
    "explain": "Тег cp311-cp311-abi3-manylinux: один .so против конкретного cp311-cp311. Требует сборки с Py_LIMITED_API.",
    "kind": "single",
    "id": "s330",
    "fixed": true
  },
  {
    "q": "Зачем CI matrix с Python 3.12?",
    "options": [
      "поймать breaking changes и deprecation до продакшена",
      "заменить линтер",
      "ускорить git clone",
      "тестировать EOL 2.7"
    ],
    "answer": 0,
    "explain": "3.12 — новый syntax (PEP 701), perf, removals. Matrix на 3.12 рано ловит несовместимости зависимостей и вашего кода.",
    "kind": "single",
    "id": "s343",
    "fixed": true
  },
  {
    "q": "Зачем нужны abi3 / stable ABI wheels?",
    "options": [
      "один бинарный wheel на несколько версий CPython 3.x",
      "ускорение pure Python кода в 10×",
      "замена mypy статической проверкой",
      "сборка только в Docker без wheel"
    ],
    "answer": 0,
    "explain": "Расширение линкуется с limited API (Py_LIMITED_API): один cp39-abi3 wheel ставится на 3.9–3.12 без пересборки под каждый релиз.",
    "kind": "single",
    "id": "s356",
    "fixed": true
  },
  {
    "q": "В чём риск venv --system-site-packages?",
    "options": [
      "системные пакеты «протекают» в виртуальное окружение",
      "venv перестаёт изолировать Python-бинарник",
      "нельзя установить pip в такой venv",
      "автоматически ставится latest без пинов"
    ],
    "answer": 0,
    "explain": "Видны глобально установленные пакеты: воспроизводимость падает, версии конфликтуют с project deps. Для прод-сборок обычно чистый venv.",
    "kind": "single",
    "id": "s368",
    "fixed": true
  },
  {
    "q": "Зачем нужны bytecode suppression и SOURCE_DATE_EPOCH?",
    "options": [
      "чтобы сборки и .pyc были воспроизводимыми (reproducible builds)",
      "чтобы ускорить import магическим кэшем без контроля",
      "чтобы отключить аннотации типов",
      "чтобы запретить wheel"
    ],
    "answer": 0,
    "explain": "SOURCE_DATE_EPOCH и подавление нестабильного bytecode помогают получить одинаковые артефакты между сборками. Это про reproducible builds, а не про «ускорить import как получится».",
    "kind": "single",
    "id": "s380",
    "fixed": true
  },
  {
    "q": "Что такое PEP 517 isolated build?",
    "options": [
      "сбор в чистом env",
      "reuse site-packages dirty always",
      "ручной копипаст site-packages между машинами",
      "no build backend"
    ],
    "answer": 0,
    "explain": "Сбор в чистом env. Отличай sdist, wheel, venv и lock-файлы.",
    "kind": "single",
    "id": "s392",
    "fixed": true
  },
  {
    "q": "Зачем pyproject.toml (PEP 518/621)?",
    "options": [
      "единый манифест сборки, метаданных и инструментов",
      "только конфиг Poetry без альтернатив",
      "замена requirements.txt без lockfile",
      "runtime-конфиг приложения в проде"
    ],
    "answer": 0,
    "explain": "[build-system], [project] name/version/deps, [tool.mypy] — один файл для pip, hatch, uv. setup.py уходит в legacy.",
    "kind": "single",
    "id": "s416",
    "fixed": true
  },
  {
    "q": "Что вернёт cross-building wheels?",
    "options": [
      "cibuildwheel / матрица платформ",
      "один manylinux на macOS app",
      "pure py always",
      "conda only"
    ],
    "answer": 0,
    "explain": "Результат выражения — cibuildwheel / матрица платформ. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s428",
    "fixed": true
  },
  {
    "q": "Зачем Trove-классификатор Programming Language :: Python :: 3.9?",
    "options": [
      "заявить поддерживаемые версии Python на PyPI",
      "ускорить код на 3.9",
      "включить GIL-off",
      "заменить pyproject.toml"
    ],
    "answer": 0,
    "explain": "Метаданные для пользователей и resolver: пакет заявляет совместимость. Не заменяет python_requires= в metadata.",
    "kind": "single",
    "id": "s451",
    "fixed": true
  },
  {
    "q": "Что вернёт abi flags / pymalloc tag?",
    "options": [
      "сборка интерпретатора влияет на расширения",
      "pure py wheels care",
      "ручной копипаст site-packages",
      "зависимости без версий"
    ],
    "answer": 0,
    "explain": "Результат выражения — сборка интерпретатора влияет на расширения. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s462",
    "fixed": true
  },
  {
    "q": "Зачем CI matrix с Python 3.13?",
    "options": [
      "ловить несовместимости и deprecation до релиза пользователям",
      "только для бейджа в README",
      "заменяет unit-тесты",
      "нужен только latest без матрицы"
    ],
    "answer": 0,
    "explain": "Новый синтаксис, удалённый модуль, изменение C-API — матрица ловит на PR. Особенно важно для библиотек.",
    "kind": "single",
    "id": "s473",
    "fixed": true
  },
  {
    "q": "Что задаёт PEP 517 build backend?",
    "options": [
      "изолированную сборку пакета через хуки в pyproject.toml",
      "обязательный запуск setup.py напрямую как единственный способ",
      "команду pip uninstall",
      "создание venv вместо сборки"
    ],
    "answer": 0,
    "explain": "PEP 517: pip вызывает заявленный build-backend (setuptools, hatchling, …) в изолированном окружении по интерфейсу хуков. Не нужно вручную `setup.py install` как единственный путь.",
    "kind": "single",
    "id": "s483",
    "fixed": true
  }
);
