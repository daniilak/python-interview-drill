// @meta topic=mock group=Тесты и качество
// middle · 7 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что умеет side_effect у unittest.mock?",
    "options": [
      "кидать исключения, отдавать значения из итерируемого или звать callable",
      "только фиксированный return_value",
      "патчить файлы на диске",
      "заменять sys.modules"
    ],
    "answer": 0,
    "explain": "side_effect гибче return_value: последовательность ответов, исключение или своя функция. Диск сам по себе не трогает.",
    "kind": "single",
    "id": "m124",
    "fixed": true
  },
  {
    "q": "Что проверяет mock.assert_called_once_with(...)",
    "options": [
      "что мок вызвали ровно один раз с такими аргументами",
      "что мок никогда не вызывали",
      "что файл на диске изменился",
      "что покрыты все ветки"
    ],
    "answer": 0,
    "explain": "Это assert на историю вызовов мока. Не про файлы и не про coverage.",
    "kind": "single",
    "id": "m230",
    "fixed": true
  },
  {
    "q": "Что подменяет unittest.mock.patch?",
    "options": [
      "объект по имени в указанном пространстве имён на время патча",
      "файл на диске с исходником",
      "байткод интерпретатора навсегда",
      "версию Python"
    ],
    "answer": 0,
    "explain": "patch('pkg.mod.attr') подменяет имя там, куда смотрит код. Важно патчить место использования.",
    "kind": "single",
    "id": "m360",
    "fixed": true
  },
  {
    "q": "Чем MagicMock отличается от Mock?",
    "options": [
      "MagicMock заранее имеет заглушки магических методов",
      "Mock быстрее в 100 раз всегда",
      "MagicMock нельзя использовать в assert",
      "разницы нет"
    ],
    "answer": 0,
    "explain": "У MagicMock из коробки __iter__, __int__ и т.д. Обычный Mock их не создаёт автоматически.",
    "kind": "single",
    "id": "m398",
    "fixed": true
  },
  {
    "q": "Что проверяет assert_called_once_with(...)?",
    "options": [
      "ровно один вызов мока с этими аргументами",
      "что мок не вызывался",
      "любое число вызовов",
      "только тип возвращаемого значения"
    ],
    "answer": 0,
    "explain": "Из unittest.mock: once + точные args/kwargs. Иначе AssertionError.",
    "kind": "single",
    "id": "m573",
    "fixed": true
  },
  {
    "q": "Что даёт Mock(spec=True) / spec=obj?",
    "options": [
      "ограничивает атрибуты мока интерфейсом оригинала",
      "ускоряет мок",
      "запрещает assert",
      "делает мок реальным объектом"
    ],
    "answer": 0,
    "explain": "Обращение к несуществующему атрибуту падает — ловит опечатки в тестах.",
    "kind": "single",
    "id": "m588",
    "fixed": true
  },
  {
    "q": "Что делает patch.dict(os.environ)?",
    "options": [
      "временно меняет переменные окружения с откатом",
      "навсегда пишет в /etc/environment",
      "только читает env",
      "патчит sys.path"
    ],
    "answer": 0,
    "explain": "Удобно в тестах: with patch.dict(os.environ, {'A':'1'}, clear=...): ...",
    "kind": "single",
    "id": "m608",
    "fixed": true
  }
);
