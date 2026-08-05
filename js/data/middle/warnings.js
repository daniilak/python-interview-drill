// @meta topic=warnings group=Тесты и качество
// middle · 4 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Зачем нужен warnings.catch_warnings?",
    "options": [
      "временно перехватить/настроить warnings в блоке with",
      "это синоним except Exception",
      "это фикстура только pytest",
      "отключает SyntaxWarning навсегда в процессе"
    ],
    "answer": 0,
    "explain": "catch_warnings — контекст для тестов и локальной политики предупреждений. Не замена except и не глобальный kill switch навсегда.",
    "kind": "single",
    "id": "m138",
    "fixed": true
  },
  {
    "q": "Что делает warnings.simplefilter('error')?",
    "options": [
      "превращает подходящие warnings в исключения",
      "глушит все предупреждения",
      "только пишет в log",
      "отключает SyntaxError"
    ],
    "answer": 0,
    "explain": "filter 'error' полезен в тестах: предупреждение не проскользнёт молча. 'ignore' — наоборот глушит.",
    "kind": "single",
    "id": "m204",
    "fixed": true
  },
  {
    "q": "Что делает filterwarnings('ignore', category=DeprecationWarning)?",
    "options": [
      "глушит предупреждения указанной категории",
      "превращает их в ошибки",
      "удаляет deprecated API из stdlib",
      "включает -Werror глобально"
    ],
    "answer": 0,
    "explain": "Это политика warnings: ignore скрывает, error повышает до исключения. На код stdlib не влияет.",
    "kind": "single",
    "id": "m282",
    "fixed": true
  },
  {
    "q": "Что делает warnings.filterwarnings?",
    "options": [
      "настраивает показ/игнор/ошибку для категорий предупреждений",
      "удаляет модуль warnings",
      "включает только logging",
      "чинит байткод"
    ],
    "answer": 0,
    "explain": "Можно превратить Warning в exception, скрыть DeprecationWarning и т.д.",
    "kind": "single",
    "id": "m410",
    "fixed": true
  }
);
