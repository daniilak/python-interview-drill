// @meta topic=rpc group=Веб и API
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Когда gRPC retry безопасен с точки зрения идемпотентности?",
    "options": [
      "когда операция идемпотентна или есть idempotency key в политике",
      "всегда: gRPC ретраит любой RPC автоматически",
      "никогда: retry в gRPC запрещён",
      "только для server-streaming, не для unary"
    ],
    "answer": 0,
    "explain": "Повтор unary-вызова может дважды списать деньги или создать дубликат. Retry допустим для идемпотентных методов (GET-подобных) или с ключом идемпотентности на сервере.",
    "kind": "single",
    "id": "s17",
    "fixed": true
  },
  {
    "q": "Чем gRPC status codes отличаются от HTTP?",
    "options": [
      "свой enum (OK, UNAVAILABLE, …); в gateway маппят на HTTP коды",
      "полностью совпадают с HTTP 1:1",
      "gRPC не передаёт коды ошибок",
      "HTTP коды встроены в protobuf wire format"
    ],
    "answer": 0,
    "explain": "grpc.StatusCode — отдельная семантика (например DEADLINE_EXCEEDED). REST gateway переводит в 504/503; клиенту важен retry policy по gRPC коду.",
    "kind": "single",
    "id": "s222",
    "fixed": true
  },
  {
    "q": "Через что чаще всего используют gRPC в Python?",
    "options": [
      "grpcio + protobuf (сгенерированные stubs)",
      "только json.dumps по HTTP/1.0",
      "встроенный модуль xmlrpc без зависимостей",
      "pickle over UDP"
    ],
    "answer": 0,
    "explain": "protoc генерирует *_pb2.py и *_pb2_grpc.py; канал grpc.insecure_channel, stub вызывает RPC. Альтернатива — grpclib (async).",
    "kind": "single",
    "id": "s406",
    "fixed": true
  }
);
