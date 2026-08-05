// @meta topic=ASGI group=Веб и API
// middle · 4 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что такое Starlette и FastAPI?",
    "options": [
      "ASGI-фреймворки (FastAPI построен поверх Starlette)",
      "только классические WSGI-приложения как Flask 1.x",
      "замена PostgreSQL",
      "линтеры для аннотаций типов"
    ],
    "answer": 0,
    "explain": "Starlette — лёгкий ASGI-фреймворк; FastAPI использует его для HTTP/WebSocket и добавляет валидацию через type hints. Это не WSGI и не СУБД.",
    "kind": "single",
    "id": "m4",
    "fixed": true
  },
  {
    "q": "Что такое lifespan protocol в ASGI?",
    "options": [
      "хуки startup/shutdown приложения вокруг обработки запросов",
      "протокол только для WebSocket-кадров",
      "то же самое, что WSGI sync callable",
      "замена OpenAPI-схемы"
    ],
    "answer": 0,
    "explain": "Lifespan — события запуска и остановки приложения (инициализация пулов, закрытие соединений) до/после обслуживания запросов. Это не про кадры WebSocket и не WSGI.",
    "kind": "single",
    "id": "m79",
    "fixed": true
  },
  {
    "q": "Что такое websocket в ASGI?",
    "options": [
      "отдельный тип соединения (не обычный HTTP request/response)",
      "то же, что HTTP/1.0 без отличий",
      "только UDP",
      "синхронный WSGI-сокет"
    ],
    "answer": 0,
    "explain": "ASGI различает http, websocket, lifespan. Websocket — долгоживущий двунаправленный канал.",
    "kind": "single",
    "id": "m491",
    "fixed": true
  },
  {
    "q": "Что такое ASGI?",
    "options": [
      "асинхронный интерфейс Python веб-приложений (наследник идей WSGI)",
      "только sync CGI",
      "протокол БД",
      "формат логов"
    ],
    "answer": 0,
    "explain": "ASGI поддерживает async, websocket, lifespan. FastAPI/Starlette/Django ASGI.",
    "kind": "single",
    "id": "m705",
    "fixed": true
  }
);
