// @meta topic=LoD group=Архитектура и дизайн
// senior · 2 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что верно про Law of Demeter («не разговаривай с чужими»)?",
    "options": [
      "обращаться только к своим объектам и ближайшим соседям",
      "запрет всех методов",
      "только global",
      "только staticmethod"
    ],
    "answer": 0,
    "explain": "Обращаться только к своим объектам и ближайшим соседям. )».",
    "kind": "single",
    "id": "s231",
    "fixed": true
  },
  {
    "q": "order.customer.address.zip_code вместо order.shipping_zip() — в чём проблема?",
    "options": [
      "нарушение Law of Demeter — train wreck и хрупкость к цепочке моделей",
      "это единственный способ доступа к zip в Python",
      "нарушение GIL при глубокой цепочке атрибутов",
      "требование SQLAlchemy 2.0"
    ],
    "answer": 0,
    "explain": "Клиент знает внутреннюю структуру Customer и Address. Смена модели ломает всех. Метод order.shipping_zip() инкапсулирует путь.",
    "kind": "single",
    "id": "s638",
    "fixed": true
  }
);
