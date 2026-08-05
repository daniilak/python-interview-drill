// @meta topic=git group=Инструменты и стиль
// middle · 5 cards
(window.QUESTIONS_MIDDLE = window.QUESTIONS_MIDDLE || []).push(
  {
    "q": "Что верно про git merge --squash делает?",
    "options": [
      "один коммит из всех изменений ветки без merge-коммита в истории feature",
      "удаляет ветку",
      "rebase автоматом",
      "force push"
    ],
    "answer": 0,
    "explain": "Один коммит из всех изменений ветки без merge-коммита в истории feature. Подумай, что произойдёт с remote и историей у коллег.",
    "kind": "single",
    "id": "m14",
    "fixed": true
  },
  {
    "q": "Что верно про git reflog полезен чтобы?",
    "options": [
      "найти «потерянные» коммиты после reset",
      "удалить remote",
      "форматировать JSON",
      "запустить pytest"
    ],
    "answer": 0,
    "explain": "Журнал перемещений HEAD — Коммиты после reset». Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на общей ветки.",
    "kind": "single",
    "id": "m29",
    "fixed": true
  },
  {
    "q": "Что верно про Merge conflict возникает когда?",
    "options": [
      "Git не может автоматически слить изменения одних строк",
      "два remote",
      "нет .gitignore",
      "большой файл"
    ],
    "answer": 0,
    "explain": "Git не может автоматически слить изменения одних строк. Подумай, что произойдёт с remote и историей у коллег.",
    "kind": "single",
    "id": "m44",
    "fixed": true
  },
  {
    "q": "Что верно про git bisect применяют для?",
    "options": [
      "поиска коммита, внесшего баг",
      "удаления веток",
      "форматирования",
      "CI config"
    ],
    "answer": 0,
    "explain": "Бинарный поиск по истории — Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на общей ветки.",
    "kind": "single",
    "id": "m59",
    "fixed": true
  },
  {
    "q": "Что позволяет Interactive rebase (-i)?",
    "options": [
      "переупорядочить/squash/edit коммиты",
      "только merge",
      "только clone",
      "только blame"
    ],
    "answer": 0,
    "explain": "Чистка истории перед PR — Git хранит историю коммитов; merge и rebase по-разному влияют на историю и на общей ветки.",
    "kind": "single",
    "id": "m74",
    "fixed": true
  }
);
