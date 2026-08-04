#!/usr/bin/env python3
"""Точка входа: аудит банков после сборки (см. tools/audit_bank.py)."""
from __future__ import annotations

import runpy
from pathlib import Path

if __name__ == "__main__":
    runpy.run_path(str(Path(__file__).resolve().parent / "tools" / "audit_bank.py"), run_name="__main__")
