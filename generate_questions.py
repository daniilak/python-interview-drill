#!/usr/bin/env python3
"""Точка входа: пересборка js/data/*.js (см. bank/ и tools/).

По умолчанию merge-preserve: карточки в js/data не удаляются.
Полная пересборка: python3 generate_questions.py --rebuild
Починенные: bank/overrides/*.json + флаг fixed в карточке.
"""
from __future__ import annotations

import sys

from bank.builder import main

if __name__ == "__main__":
    main(sys.argv[1:])
