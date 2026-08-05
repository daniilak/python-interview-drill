// @meta topic=FastAPI group=Веб и API
// middle · 8 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Для чего в FastAPI параметр response_model?",
    "options": [
      "валидирует и фильтрует поля ответа по схеме",
      "меняет HTTP-метод запроса",
      "отключает OpenAPI",
      "выключает async"
    ],
    "answer": 0,
    "explain": "response_model (обычно Pydantic) обрезает лишние поля и проверяет типы на выходе. На method/OpenAPI «выключить» он не влияет так.",
    "kind": "single",
    "id": "m149",
    "fixed": true
  },
  {
    "q": "Что такое OAuth2PasswordBearer в FastAPI?",
    "options": [
      "схема извлечения Bearer-токена из заголовка Authorization",
      "хеширование паролей",
      "ORM-модель пользователя",
      "CORS middleware"
    ],
    "answer": 0,
    "explain": "Depends(oauth2_scheme) достаёт token string; проверка/JWT — уже твоя логика.",
    "kind": "single",
    "id": "m560",
    "fixed": true
  },
  {
    "q": "Что такое BackgroundTasks в FastAPI?",
    "options": [
      "задачи, которые выполняются после отправки ответа клиенту",
      "замена Celery для тяжёлого CPU всегда",
      "websocket pool",
      "миграции БД"
    ],
    "answer": 0,
    "explain": "Лёгкая пост-обработка в том же процессе. Для надёжных очередей — RQ/Celery/Arq.",
    "kind": "single",
    "id": "m649",
    "fixed": true
  },
  {
    "q": "Что такое UploadFile в FastAPI?",
    "options": [
      "обёртка для асинхронной работы с загружаемым файлом",
      "только путь на диске без SpooledTemporaryFile",
      "Base64 в query",
      "S3 клиент"
    ],
    "answer": 0,
    "explain": "Можно await file.read(); крупное уходит в temp file. Не читай огромные файлы в память целиком без нужды.",
    "kind": "single",
    "id": "m661",
    "fixed": true
  },
  {
    "q": "Что такое Depends() в FastAPI?",
    "options": [
      "внедрение зависимостей в path-operation",
      "SQL JOIN",
      "фоновая очередь Celery",
      "CORS пресет"
    ],
    "answer": 0,
    "explain": "DI: сессия БД, текущий пользователь, настройки — через Depends.",
    "kind": "single",
    "id": "m689",
    "fixed": true
  },
  {
    "q": "Вокруг чего строится FastAPI?",
    "options": [
      "type hints + ASGI (Pydantic/Starlette)",
      "только sync WSGI без типов",
      "GUI Tkinter",
      "multiprocessing Pool"
    ],
    "answer": 0,
    "explain": "Аннотации → валидация/OpenAPI. ASGI — async-сервер.",
    "kind": "single",
    "id": "m721",
    "fixed": true
  },
  {
    "q": "Зачем Depends() в FastAPI?",
    "options": [
      "внедрение зависимостей в эндпоинты",
      "SQL migration",
      "gzip middleware",
      "генерация JWT ключа"
    ],
    "answer": 0,
    "explain": "Общие ресурсы (сессия, user) объявляешь один раз и переиспользуешь.",
    "kind": "single",
    "id": "m733",
    "fixed": true
  },
  {
    "q": "Что такое APIRouter в FastAPI?",
    "options": [
      "модульные группы маршрутов, подключаемые к приложению",
      "ORM router",
      "Celery beat",
      "WSGI server"
    ],
    "answer": 0,
    "explain": "Дроби API по модулям: users.router, include_router с prefix/tags.",
    "kind": "single",
    "id": "m741",
    "fixed": true
  }
);
