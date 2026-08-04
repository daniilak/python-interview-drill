#!/usr/bin/env python3
"""Generate Python interview question banks for the drill app.

Критерии уровней (ориентир для авторов карточек):
  Junior — синтаксис и builtins: типы, операторы, строки/списки/dict/set,
           базовые функции, исключения, простой OOP. Ответ за <30 с.
  Middle — идиомы и stdlib: декораторы, генераторы, asyncio, typing, GIL
           на уровне понимания, тесты, типичные грабли продакшена.
  Senior — CPython/память/метаклассы, архитектура, безопасность, распределённые
           системы, нюансы trade-offs; объяснение должно содержать «когда нельзя».

Плагины: любой `bank/plugins/*.py` подхватывается автоматически.
Списки вопросов классифицируются по имени переменной (JUNIOR_*, CODE_JUNIOR, …).

Запуск из корня репозитория:
  python3 generate_questions.py
  python3 -m tools.generate_questions
"""
from __future__ import annotations

import sys
from pathlib import Path

_ROOT = Path(__file__).resolve().parent.parent if Path(__file__).parent.name == "tools" else Path(__file__).resolve().parent
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from bank.builder import main

if __name__ == "__main__":
    main(sys.argv[1:])
