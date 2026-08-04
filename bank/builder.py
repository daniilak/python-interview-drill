"""Сборка банков вопросов и запись js/data/*.js."""
from __future__ import annotations

import importlib.util
import json
import random
from collections import defaultdict
from pathlib import Path

from bank.core import JUNIOR, MIDDLE, SENIOR
from bank.groups import assign_group
from bank.polish import polish_question

ROOT = Path(__file__).resolve().parent.parent
PLUGINS_DIR = Path(__file__).resolve().parent / "plugins"
DEFAULT_OUT = ROOT / "js" / "data"


class BankBuilder:
    """Загружает ядро + плагины, полирует, диверсифицирует и пишет JS-банки."""

    def __init__(self, out_dir: Path | None = None, plugins_dir: Path | None = None) -> None:
        self.out_dir = Path(out_dir) if out_dir else DEFAULT_OUT
        self.plugins_dir = Path(plugins_dir) if plugins_dir else PLUGINS_DIR

    @staticmethod
    def classify_bank_name(name: str) -> str | None:
        """Определяет уровень по имени экспортной переменной плагина."""
        u = name.upper()
        if u.startswith("_"):
            return None
        if u.startswith("JUNIOR") or u.endswith("_JUNIOR") or u == "CODE_JUNIOR":
            return "junior"
        if u.startswith("MIDDLE") or u.endswith("_MIDDLE") or u == "CODE_MIDDLE":
            return "middle"
        if u.startswith("SENIOR") or u.endswith("_SENIOR") or u == "CODE_SENIOR":
            return "senior"
        return None

    def load_plugins(self) -> dict[str, list[dict]]:
        """Автообнаружение модулей в bank/plugins/."""
        banks: dict[str, list[dict]] = {"junior": [], "middle": [], "senior": []}
        if not self.plugins_dir.is_dir():
            return banks
        for path in sorted(self.plugins_dir.glob("*.py")):
            if path.name.startswith("_"):
                continue
            spec = importlib.util.spec_from_file_location(f"bank.plugins.{path.stem}", path)
            if spec is None or spec.loader is None:
                continue
            mod = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(mod)
            found = 0
            for attr, val in vars(mod).items():
                level = self.classify_bank_name(attr)
                if level is None or not isinstance(val, list) or not val:
                    continue
                if not isinstance(val[0], dict) or "q" not in val[0]:
                    continue
                banks[level].extend(val)
                found += len(val)
            print(f"plugin {path.name}: +{found}")
        return banks

    @staticmethod
    def dedupe(items: list[dict]) -> list[dict]:
        seen = set()
        out = []
        for it in items:
            key = (it["q"], it.get("code"))
            if key in seen:
                continue
            seen.add(key)
            out.append(it)
        return out

    @staticmethod
    def diversify_by_group(items: list[dict]) -> list[dict]:
        """Round-robin по group: все разделы встречаются рано."""
        if len(items) <= 2:
            return items
        rng = random.Random(42)
        by_group: dict[str, list[dict]] = defaultdict(list)
        for it in items:
            by_group[it.get("group") or it.get("topic") or "Разное"].append(it)
        for bucket in by_group.values():
            rng.shuffle(bucket)

        groups = list(by_group.keys())
        rng.shuffle(groups)
        out: list[dict] = []
        while any(by_group.values()):
            progressed = False
            for g in groups:
                bucket = by_group[g]
                if bucket:
                    out.append(bucket.pop())
                    progressed = True
            if not progressed:
                break
        return out

    def write_js(self, name: str, var: str, items: list[dict]) -> list[dict]:
        items = [polish_question(assign_group(it, name)) for it in items]
        items = self.diversify_by_group(items)
        for i, item in enumerate(items, 1):
            item["id"] = f"{name[0]}{i}"
        self.out_dir.mkdir(parents=True, exist_ok=True)
        path = self.out_dir / f"{name}.js"
        payload = json.dumps(items, ensure_ascii=False, indent=2)
        path.write_text(f"window.{var} = {payload};\n", encoding="utf-8")
        groups: dict[str, int] = {}
        for it in items:
            groups[it["group"]] = groups.get(it["group"], 0) + 1
        print(f"{name}: {len(items)} → {path}")
        for g, n in sorted(groups.items(), key=lambda x: (-x[1], x[0])):
            print(f"   · {g}: {n}")
        return items

    def build(self) -> dict[str, int]:
        extras = self.load_plugins()
        j = self.dedupe(list(JUNIOR) + extras["junior"])
        m = self.dedupe(list(MIDDLE) + extras["middle"])
        s = self.dedupe(list(SENIOR) + extras["senior"])
        self.write_js("junior", "QUESTIONS_JUNIOR", j)
        self.write_js("middle", "QUESTIONS_MIDDLE", m)
        self.write_js("senior", "QUESTIONS_SENIOR", s)
        total = len(j) + len(m) + len(s)
        print("TOTAL", total)
        return {"junior": len(j), "middle": len(m), "senior": len(s), "total": total}


def main() -> None:
    """Критерии уровней — в шапке tools/generate_questions.py / README."""
    BankBuilder().build()


if __name__ == "__main__":
    main()
