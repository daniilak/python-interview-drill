// @meta topic=testing group=Тесты и качество
// senior · 24 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что проверяет mutation testing?",
    "options": [
      "ловят ли тесты намеренно испорченный код (мутантов)",
      "только процент покрытия строк",
      "скорость выполнения тестов в CI",
      "наличие docstring у каждой функции"
    ],
    "answer": 0,
    "explain": "Mutation testing вносит мелкие дефекты в код и смотрит, упадут ли тесты. Высокий coverage без «убийства мутантов» часто значит слабые ассерты.",
    "kind": "single",
    "id": "s1",
    "fixed": true
  },
  {
    "q": "Что вернёт Property-based testing (Hypothesis)?",
    "options": [
      "генерирует входы по свойствам",
      "заменяет unit тесты всегда",
      "только UI",
      "load test"
    ],
    "answer": 0,
    "explain": "Результат выражения — генерирует входы по свойствам. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s18",
    "fixed": true
  },
  {
    "q": "Что вернёт property-based (Hypothesis) ловит?",
    "options": [
      "краевые случаи генерацией входов",
      "только UI",
      "только perf",
      "flake network always"
    ],
    "answer": 0,
    "explain": "Результат выражения — краевые случаи генерацией входов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s35",
    "fixed": true
  },
  {
    "q": "Что такое chaos engineering?",
    "options": [
      "контролируемые сбои в проде/стейдже для проверки устойчивости",
      "только unit-тесты с моками",
      "ручная проверка без автотестов",
      "запуск тестов только против реального prod API"
    ],
    "answer": 0,
    "explain": "Намеренно роняют инстансы, режут сеть, задерживают ответы (Chaos Monkey и аналоги). Цель — найти слабые места до реальной аварии, не «ломать ради ломания».",
    "kind": "single",
    "id": "s52",
    "fixed": true
  },
  {
    "q": "Что проверяют contract tests между сервисами?",
    "options": [
      "совместимость API-контракта (схема, поля, коды ответов)",
      "только вёрстку UI в браузере",
      "что один ручной клик заменяет все тесты",
      "только покрытие строк без схемы"
    ],
    "answer": 0,
    "explain": "Consumer задаёт ожидания (Pact и др.), provider их проверяет в CI. Ловят «мы удалили поле, а три микросервиса ещё ждут» до интеграционного стенда.",
    "kind": "single",
    "id": "s68",
    "fixed": true
  },
  {
    "q": "Что такое differential fuzzing?",
    "options": [
      "сравнение двух реализаций на случайных входах — ищут расхождения",
      "только замер coverage без генерации входов",
      "один ручной тест вместо suite",
      "фаззинг только production API"
    ],
    "answer": 0,
    "explain": "Один генератор кормит и «эталон», и тестируемую функцию (например, decimal vs float lib). Расхождение → баг или undefined behavior.",
    "kind": "single",
    "id": "s84",
    "fixed": true
  },
  {
    "q": "Что такое approval tests (golden files)?",
    "options": [
      "сравнение вывода с эталонным файлом, diff смотрит человек",
      "только ручная проверка без автоматизации",
      "sleep вместо детерминированных фикстур",
      "замена всех unit-тестов одним e2e"
    ],
    "answer": 0,
    "explain": "pytest --approvaltests; первый run создаёт .received.approved. Изменение формата отчёта — осознанное обновление эталона. Удобно для snapshot больших текстов/JSON.",
    "kind": "single",
    "id": "s100",
    "fixed": true
  },
  {
    "q": "Что такое ephemeral environment per PR?",
    "options": [
      "изоляция интеграций",
      "shared staging fight",
      "only local",
      "only prod"
    ],
    "answer": 0,
    "explain": "Изоляция интеграций. Смотри, что именно проверяет инструмент и чего он не делает.",
    "kind": "single",
    "id": "s116",
    "fixed": true
  },
  {
    "q": "Когда consumer-driven contract tests особенно полезны?",
    "options": [
      "много сервисов с независимыми релизами",
      "один монолит без внешнего API",
      "только UI в браузере",
      "когда один ручной клик заменяет CI"
    ],
    "answer": 0,
    "explain": "Consumer публикует контракт «жду поле amount». Provider в CI проверяет. Без этого интеграция ломается в пятницу вечером на staging.",
    "kind": "single",
    "id": "s132",
    "fixed": true
  },
  {
    "q": "Что такое testcontainers?",
    "options": [
      "Docker-контейнеры с реальным Postgres/Redis и т.д. в интеграционных тестах",
      "только unittest.mock без сети",
      "in-memory fake всегда лучше реальной БД",
      "ручная проверка без автоматизации"
    ],
    "answer": 0,
    "explain": "pytest + testcontainers-python поднимает Postgres на время теста. Ближе к prod, чем sqlite mock, дороже по времени CI. Баланс с test pyramid.",
    "kind": "single",
    "id": "s148",
    "fixed": true
  },
  {
    "q": "Когда нарушена test pyramid?",
    "options": [
      "тысячи медленных e2e и почти нет быстрых unit",
      "много unit и разумное число integration",
      "используются pytest fixtures",
      "есть контрактные тесты API"
    ],
    "answer": 0,
    "explain": "Пирамида: много unit (дешёвые), меньше integration, мало e2e. Перевёрнутая — час CI, flaky UI, сложно локализовать баг.",
    "kind": "single",
    "id": "s164",
    "fixed": true
  },
  {
    "q": "Чем load test отличается от stress test?",
    "options": [
      "load — ожидаемая нагрузка; stress — за пределами нормы до отказа",
      "это полные синонимы",
      "load test — только unit, stress — только e2e",
      "stress test не измеряет latency"
    ],
    "answer": 0,
    "explain": "Load проверяет SLA при штатном трафике. Stress ищет точку деградации, утечки и поведение при перегрузе/каскадных сбоях.",
    "kind": "single",
    "id": "s179",
    "fixed": true
  },
  {
    "q": "Что такое synthetic canaries в проде?",
    "options": [
      "периодические синтетические запросы, проверяющие критический путь до пользователей",
      "ручная проверка только в staging",
      "chaos monkey без метрик",
      "нагрузочный тест только локально"
    ],
    "answer": 0,
    "explain": "Canary-сценарий (логин, checkout) гоняется по расписанию извне; алерт при деградации SLA раньше, чем пожалуются пользователи.",
    "kind": "single",
    "id": "s194",
    "fixed": true
  },
  {
    "q": "Что верно про Property-based testing (Hypothesis) хорош для?",
    "options": [
      "поиска краевых случаев автоматически",
      "только happy path",
      "UI screenshot",
      "проверку только вручную без автотестов"
    ],
    "answer": 0,
    "explain": "Поиска краевых случаев автоматически. Смотри, что именно проверяет инструмент и чего он не делает.",
    "kind": "single",
    "id": "s209",
    "fixed": true
  },
  {
    "q": "Что вернёт property based + examples?",
    "options": [
      "регрессии на найденных кейсах",
      "только random forever without save",
      "только ручная проверка без автотестов",
      "snapshots only"
    ],
    "answer": 0,
    "explain": "Результат выражения — регрессии на найденных кейсах. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s223",
    "fixed": true
  },
  {
    "q": "Flaky test чаще всего из-за чего?",
    "options": [
      "гонок, зависимости от времени и внешних сервисов",
      "слишком большого покрытия кода",
      "использования pytest fixtures",
      "строгой типизации mypy"
    ],
    "answer": 0,
    "explain": "Недетерминизм: sleep без моков, порядок asyncio, shared state, сеть. Лечение — изоляция, fake clock, фикстуры, не «@pytest.mark.flaky» как костыль.",
    "kind": "single",
    "id": "s237",
    "fixed": true
  },
  {
    "q": "Что проверяет mutation testing?",
    "options": [
      "насколько тесты убивают намеренно испорченный код (mutants)",
      "только процент покрытых строк",
      "корректность типов в mypy",
      "скорость CI-пайплайна"
    ],
    "answer": 0,
    "explain": "Мутатор меняет условия/операторы; survived mutant — дыра в тестах. Дополняет coverage, не заменяет.",
    "kind": "single",
    "id": "s251",
    "fixed": true
  },
  {
    "q": "Что фиксирует contract testing (Pact)?",
    "options": [
      "ожидания consumer/provider API без полного e2e",
      "покрытие строк unit-тестами",
      "производительность GPU",
      "схему БД на проде"
    ],
    "answer": 0,
    "explain": "Consumer пишет контракт «ожидаю 200 и JSON»; provider верифицирует. Ловит breaking API до интеграционного стенда.",
    "kind": "single",
    "id": "s265",
    "fixed": true
  },
  {
    "q": "Что такое characterization tests?",
    "options": [
      "фиксируют текущее поведение легаси перед рефакторингом",
      "тесты только happy path без assert",
      "замена mutation testing",
      "e2e только в проде"
    ],
    "answer": 0,
    "explain": "Golden master: зафиксировал вывод/сайд-эффекты — меняешь код — diff показывает непреднамеренные изменения. Не замена осмысленным unit.",
    "kind": "single",
    "id": "s279",
    "fixed": true
  },
  {
    "q": "Flaky test чаще как лечат правильно?",
    "options": [
      "убрать зависимость от времени, порядка и shared state",
      "добавить sleep(5) в каждый тест",
      "отключить assert при CI",
      "запускать только локально"
    ],
    "answer": 0,
    "explain": "Фикстуры fake clock, изоляция БД, deterministic seed, await готовности вместо sleep. @flaky — последняя мера.",
    "kind": "single",
    "id": "s293",
    "fixed": true
  },
  {
    "q": "Что вернёт contract test consumer-driven?",
    "options": [
      "потребитель задаёт ожидания API",
      "провайдер только OpenAPI без тестов",
      "UI screenshots",
      "ошибка"
    ],
    "answer": 0,
    "explain": "Результат выражения — потребитель задаёт ожидания API. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "s307",
    "fixed": true
  },
  {
    "q": "Что описывает test pyramid?",
    "options": [
      "много быстрых unit внизу, меньше integration, мало дорогих e2e наверху",
      "только ручное тестирование",
      "равное число всех уровней",
      "e2e должны быть 90% suite"
    ],
    "answer": 0,
    "explain": "Фидбек и стоимость: unit дешёвые, e2e ловят интеграцию но медленные/flaky. Середина — контракты и БД in docker.",
    "kind": "single",
    "id": "s320",
    "fixed": true
  },
  {
    "q": "Какова цель Chaos engineering в тестах прод-like среды —?",
    "options": [
      "проверить устойчивость к сбоям до реального инцидента",
      "100% coverage",
      "удалить staging",
      "только load"
    ],
    "answer": 0,
    "explain": "Проверить устойчивость к сбоям до реального инцидента. Смотри, что именно проверяет инструмент и чего он не делает.",
    "kind": "single",
    "id": "s333",
    "fixed": true
  },
  {
    "q": "Что такое flaky quarantine в CI?",
    "options": [
      "временная изоляция нестабильных тестов от основного пайплайна",
      "удаление всех assert из тестов",
      "добавление sleep(30) в каждый тест",
      "полное отключение CI при первом падении"
    ],
    "answer": 0,
    "explain": "Flaky-тесты выносят в отдельный job/quarantine: основной merge не блокируется, но тест не забывают — ищут причину и чинят или удаляют.",
    "kind": "single",
    "id": "s346",
    "fixed": true
  }
);
