// @meta topic=ci group=Упаковка и CI
// senior · 5 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что такое reproducible builds?",
    "options": [
      "одинаковый артефакт из одного исходника при фиксированных пинах и окружении",
      "всегда ставить latest зависимостей",
      "сборка только на машине разработчика",
      "отключение всех lockfile ради гибкости"
    ],
    "answer": 0,
    "explain": "Пины версий, хеши, lockfiles, фиксированный toolchain. Один и тот же коммит → тот же wheel/бинарь. Нужно для аудита, security и отладки «у меня работает».",
    "kind": "single",
    "id": "s15",
    "fixed": true
  },
  {
    "q": "Что ловят pip-audit и safety в CI?",
    "options": [
      "известные CVE в зависимостях по базам уязвимостей",
      "ошибки форматирования black",
      "баги GIL в CPython",
      "flaky-тесты без фикстур"
    ],
    "answer": 0,
    "explain": "Сканируют lock/requirements против OSV, PyPI advisory и т.д. Находят «у вас requests 2.20 с CVE-20XX». Не заменяют code review, но ловят известные дыры.",
    "kind": "single",
    "id": "s49",
    "fixed": true
  },
  {
    "q": "Зачем матрица версий Python в CI?",
    "options": [
      "ловить несовместимости между 3.x до релиза",
      "заменить code review",
      "ускорить pip install",
      "тестировать только на EOL версиях"
    ],
    "answer": 0,
    "explain": "matrix: [3.10, 3.11, 3.12] × os. Ловит deprecated API, различия stdlib, баги только на одной версии.",
    "kind": "single",
    "id": "s262",
    "fixed": true
  },
  {
    "q": "Что такое SBOM?",
    "options": [
      "перечень компонентов и зависимостей поставки ПО",
      "план ручного тестирования релизов",
      "график CPU flamegraph",
      "схема OpenAPI для HTTP-ручек"
    ],
    "answer": 0,
    "explain": "SBOM (Software Bill of Materials) — список того, из чего собран продукт: библиотеки, версии, лицензии. Нужен для security/compliance и реагирования на CVE.",
    "kind": "single",
    "id": "s404",
    "fixed": true
  },
  {
    "q": "Что проверяют matrix builds в CI?",
    "options": [
      "сборку/тесты на нескольких версиях Python и ОС",
      "только последний Python без альтернатив",
      "только форматирование black",
      "только mypy без тестов"
    ],
    "answer": 0,
    "explain": "GitHub Actions matrix: 3.10–3.13 × ubuntu/macos/windows. Ловят platform-specific и deprecation до релиза.",
    "kind": "single",
    "id": "s440",
    "fixed": true
  }
);
