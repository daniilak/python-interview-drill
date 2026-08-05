// @meta topic=тесты group=Тесты и качество
// middle · 20 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что делает pytest.mark.parametrize?",
    "options": [
      "запускает один тест много раз на наборе входных данных",
      "создаёт отдельные процессы ОС на каждый кейс",
      "сам включает coverage.py",
      "заменяет все assert на print"
    ],
    "answer": 0,
    "explain": "parametrize разворачивает тест в несколько кейсов с разными аргументами. Это про данные, не про multiprocessing и не про coverage.",
    "kind": "single",
    "id": "m22",
    "fixed": true
  },
  {
    "q": "Для чего нужен pytest-asyncio?",
    "options": [
      "чтобы запускать и корректно завершать async-тесты на event loop",
      "чтобы заменить unittest на Twisted",
      "чтобы ускорить sync-тесты без async def",
      "чтобы отключить assert в async-коде"
    ],
    "answer": 0,
    "explain": "Плагин поднимает loop и позволяет писать `async def test_...`. Без него pytest не умеет await'ить корутины-тесты из коробки.",
    "kind": "single",
    "id": "m37",
    "fixed": true
  },
  {
    "q": "Зачем в тестах используют parametrize?",
    "options": [
      "чтобы описать набор входов и ожидаемых результатов без копипасты теста",
      "только чтобы создавать фикстуры",
      "чтобы мокать сеть",
      "чтобы отключить discovery"
    ],
    "answer": 0,
    "explain": "Один тест + таблица данных вместо десятка почти одинаковых функций. Фикстуры и моки — отдельные механизмы pytest.",
    "kind": "single",
    "id": "m52",
    "fixed": true
  },
  {
    "q": "Для чего в pytest фикстуры capsys/capfd?",
    "options": [
      "перехватить stdout/stderr внутри теста",
      "создать временные файлы",
      "поднять HTTP-сервер",
      "заморозить системное время"
    ],
    "answer": 0,
    "explain": "`capsys` / `capfd` ловят то, что тест (и тестируемый код) пишет в stdout/stderr. Удобно проверять CLI-вывод. Для файлов — `tmp_path`, для времени — freeze/mock.",
    "kind": "single",
    "id": "m96",
    "fixed": true
  },
  {
    "q": "Что такое fixture в pytest?",
    "options": [
      "переиспользуемая подготовка данных/ресурсов с автоматическим teardown",
      "только синоним unittest.mock",
      "обязательный sleep в начале теста",
      "файл coverage.xml"
    ],
    "answer": 0,
    "explain": "Фикстуры через @pytest.fixture дают setup/teardown и dependency injection в аргументы теста. Mock — отдельный инструмент.",
    "kind": "single",
    "id": "m110",
    "fixed": true
  },
  {
    "q": "Чем pytest.mark.skip отличается от skipif?",
    "options": [
      "skip — всегда; skipif — по условию",
      "это полные синонимы",
      "skipif удаляет файл теста с диска",
      "skip то же, что xfail"
    ],
    "answer": 0,
    "explain": "skip безусловен, skipif(expr) пропускает при истинном условии. xfail — ожидаемый провал, другая семантика.",
    "kind": "single",
    "id": "m165",
    "fixed": true
  },
  {
    "q": "Что измеряет coverage.py?",
    "options": [
      "покрытие строк/веток кода тестами",
      "скорость HTTP",
      "число уязвимостей",
      "размер wheel"
    ],
    "answer": 0,
    "explain": "Coverage показывает, какие строки исполнялись. Это не нагрузка и не security scanner.",
    "kind": "single",
    "id": "m334",
    "fixed": true
  },
  {
    "q": "Что такое pytest.mark.xfail?",
    "options": [
      "ожидаемый провал теста (известная проблема)",
      "безусловный skip",
      "успешный тест",
      "удаление теста"
    ],
    "answer": 0,
    "explain": "xfail помечает, что тест сейчас красный осознанно. Отличается от skip (не запускаем).",
    "kind": "single",
    "id": "m347",
    "fixed": true
  },
  {
    "q": "Как pytest находит тесты по умолчанию?",
    "options": [
      "по именам test_*.py / *_test.py и функциям test_*",
      "по любому файлу .py в репозитории",
      "только по if __name__ == '__main__'",
      "только через doctest"
    ],
    "answer": 0,
    "explain": "Discovery pytest смотрит на конвенции имён файлов и тест-функций. Не каждый .py подхватится, и main/doctest — другие механизмы.",
    "kind": "single",
    "id": "m373",
    "fixed": true
  },
  {
    "q": "Для чего хук pytest_configure?",
    "options": [
      "плагинная настройка на старте pytest-сессии",
      "обязательный sleep",
      "удаление тестов",
      "замена assert"
    ],
    "answer": 0,
    "explain": "В conftest/плагине pytest_configure вызывается при инициализации — регистрация маркеров и т.п.",
    "kind": "single",
    "id": "m386",
    "fixed": true
  },
  {
    "q": "Что вернёт pytest fixture с scope='module'?",
    "options": [
      "один раз на модуль тестов",
      "на каждый assert",
      "на весь CI",
      "только class"
    ],
    "answer": 0,
    "explain": "Результат выражения — один раз на модуль тестов. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m421",
    "fixed": true
  },
  {
    "q": "Что такое monkeypatch в pytest?",
    "options": [
      "временная подмена атрибутов/env/dict с автооткатом",
      "постоянный патч продакшена",
      "замена интерпретатора",
      "только mock из unittest без отката"
    ],
    "answer": 0,
    "explain": "Фикстура monkeypatch.setenv/setattr безопасна: после теста всё восстанавливается.",
    "kind": "single",
    "id": "m462",
    "fixed": true
  },
  {
    "q": "Что вернёт freezegun / time-machine?",
    "options": [
      "заморозка времени в тестах",
      "mock HTTP",
      "ошибка",
      "None"
    ],
    "answer": 0,
    "explain": "Результат выражения — заморозка времени в тестах. Сверь литералы, методы и то, что они реально возвращают.",
    "kind": "single",
    "id": "m478",
    "fixed": true
  },
  {
    "q": "Что такое mutation testing?",
    "options": [
      "намеренно ломает код и смотрит, падают ли тесты",
      "фаззинг сети случайными пакетами",
      "нагрузочный тест RPS",
      "сравнение snapshot UI"
    ],
    "answer": 0,
    "explain": "Mutation testing «убивает» мутантов: если после мелкой порчи кода тесты зелёные — suite слаб. Это не load/fuzz/snapshot, а оценка силы проверок.",
    "kind": "single",
    "id": "m492",
    "fixed": true
  },
  {
    "q": "Что проверяет doctest?",
    "options": [
      "интерактивные примеры из docstring на совпадение вывода",
      "покрытие ветвлений как coverage",
      "нагрузочное тестирование",
      "типы аргументов в runtime"
    ],
    "answer": 0,
    "explain": "doctest гоняет >>> примеры. Хорош для документации; для сложной логики обычно pytest.",
    "kind": "single",
    "id": "m513",
    "fixed": true
  },
  {
    "q": "Что даёт фикстура tmp_path?",
    "options": [
      "временную директорию pathlib.Path на тест",
      "временный TCP-порт",
      "мок БД",
      "кэш pytest"
    ],
    "answer": 0,
    "explain": "pytest создаёт уникальный каталог и чистит по политике. Удобно писать файлы в тестах.",
    "kind": "single",
    "id": "m555",
    "fixed": true
  },
  {
    "q": "Что такое snapshot testing?",
    "options": [
      "сравнение текущего вывода с сохранённым эталоном",
      "нагрузочный тест RPS",
      "проверка только типов",
      "fuzzing без эталона"
    ],
    "answer": 0,
    "explain": "Удобно для UI/сериализации. Минус — эталоны надо осознанно обновлять при намеренных изменениях.",
    "kind": "single",
    "id": "m567",
    "fixed": true
  },
  {
    "q": "Что ловит pytest.raises?",
    "options": [
      "ожидаемое исключение внутри блока",
      "любой print",
      "успешное завершение без исключений",
      "segfault"
    ],
    "answer": 0,
    "explain": "Если исключения не было или тип другой — тест падает. Можно проверить message через match=.",
    "kind": "single",
    "id": "m578",
    "fixed": true
  },
  {
    "q": "Что патчат monkeypatch / mock в тестах?",
    "options": [
      "атрибуты, env, dict — на время теста с откатом",
      "байткод интерпретатора навсегда",
      "версию Python",
      "схему БД в проде"
    ],
    "answer": 0,
    "explain": "Изоляция теста: подменил зависимость, проверил, откатил.",
    "kind": "single",
    "id": "m583",
    "fixed": true
  },
  {
    "q": "Что делает hypothesis.given?",
    "options": [
      "генерирует property-based входы для теста",
      "фиксирует один seed без генерации",
      "заменяет pytest",
      "мерит coverage"
    ],
    "answer": 0,
    "explain": "Hypothesis гоняет много случайных примеров по стратегиям; ищет минимальный failing case.",
    "kind": "single",
    "id": "m603",
    "fixed": true
  }
);
