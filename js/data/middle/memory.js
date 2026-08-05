// @meta topic=memory group=Stdlib и производительность
// middle · 1 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что учитывает sys.getsizeof([1, 2])?",
    "options": [
      "overhead самого контейнера list, не глубокий размер элементов",
      "рекурсивно всю память всех вложенных объектов всегда",
      "только один указатель",
      "размер файла .pyc"
    ],
    "answer": 0,
    "explain": "getsizeof не глубокий: для списка — структура списка + указатели, без sizeof(1) и sizeof(2) как отдельных объектов.",
    "kind": "single",
    "id": "m324",
    "fixed": true
  }
);
