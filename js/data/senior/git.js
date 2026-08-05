// @meta topic=git group=Инструменты и стиль
// senior · 3 cards
(window.QUESTIONS_SENIOR = window.QUESTIONS_SENIOR || []).push(
  {
    "q": "Что делает git rebase и когда он опасен?",
    "options": [
      "переигрывает коммиты поверх другой базы; опасен на shared-истории без договорённости",
      "то же, что merge, всегда",
      "только удаляет remote",
      "создаёт тег автоматически"
    ],
    "answer": 0,
    "explain": "Rebase переписывает хеши — Interactive (-i): squash/fixup/reword/reorder/edit. Конфликты решаются на каждом коммите (не как один merge-коммит). На уже запушенной общей ветке нужен force-with-lease и согласование с командой; иначе у коллег «разъедется» история. Merge предпочтительнее, когда важен факт слияния и неизменность опубликованных коммитов.",
    "kind": "single",
    "tags": [
      "git",
      "rebase"
    ],
    "difficulty": "senior",
    "id": "s14",
    "fixed": true
  },
  {
    "q": "Чем `git push --force-with-lease` безопаснее обычного `--force`?",
    "options": [
      "откажется пушить, если remote ушёл вперёд с тех пор, как ты его видел",
      "никогда не переписывает историю коммитов",
      "сам делает rebase перед пушем",
      "удаляет все remote-ветки"
    ],
    "answer": 0,
    "explain": "Обычный `--force` затирает историю на remote без проверки: можно случайно уничтожить чужие коммиты. `--force-with-lease` пушит только если удалённая ветка всё ещё на том коммите, который ты ожидаешь — иначе отказ. Так после rebase меньше шансов затереть работу коллег.",
    "kind": "single",
    "tags": [
      "git"
    ],
    "difficulty": "senior",
    "id": "s31",
    "fixed": true
  },
  {
    "q": "Выбери все верные про git rebase?",
    "options": [
      "rebase переписывает историю (новые хеши коммитов)",
      "interactive rebase умеет squash/reword/reorder",
      "rebase безопасен на любой shared-ветке без договорённости",
      "после rebase уже запушенных коммитов часто нужен force-with-lease"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explain": "На общей ветках rebase без договорённости ломает коллег. Конфликты решаются покоммитно; --onto и -i — мощные, но опасные инструменты. Верными здесь будут пункты: «rebase переписывает историю (новые хеши коммитов)»; «interactive rebase умеет squash/reword/reorder»; «после rebase уже запушенных коммитов часто нужен force-with-lease».",
    "kind": "multi",
    "tags": [
      "git",
      "rebase"
    ],
    "difficulty": "senior",
    "id": "s48",
    "fixed": true
  }
);
