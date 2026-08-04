"""Сборка банков вопросов и запись js/data/*.js."""
from __future__ import annotations

import argparse
import importlib.util
import random
from collections import defaultdict
from pathlib import Path

from bank.core import JUNIOR, MIDDLE, SENIOR
from bank.groups import assign_group
from bank.polish import polish_question
from bank.preserve import (
    load_js_bank,
    load_overrides,
    merge_preserve,
    write_js_bank,
)

ROOT = Path(__file__).resolve().parent.parent
PLUGINS_DIR = Path(__file__).resolve().parent / "plugins"
DEFAULT_OUT = ROOT / "js" / "data"


class BankBuilder:
    """Загружает ядро + плагины, полирует, диверсифицирует и пишет JS-банки.

    По умолчанию merge: существующие карточки в js/data не удаляются и не
    затираются генератором. Починенные (fixed / bank/overrides) всегда побеждают.
    """

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

    def write_js(
        self,
        name: str,
        var: str,
        items: list[dict],
        *,
        rebuild: bool = False,
        append_new: bool = False,
    ) -> list[dict]:
        polished = [polish_question(assign_group(it, name)) for it in items]
        previous = [] if rebuild else load_js_bank(self.out_dir / f"{name}.js")
        overrides = load_overrides(name)

        if rebuild or not previous:
            diversified = self.diversify_by_group(polished)
            merged = merge_preserve(
                [], diversified, overrides, level=name, append_new=True
            )
        else:
            merged = merge_preserve(
                previous,
                polished,
                overrides,
                level=name,
                append_new=append_new,
            )

        fixed_n = sum(1 for it in merged if it.get("fixed"))
        self.out_dir.mkdir(parents=True, exist_ok=True)
        write_js_bank(self.out_dir / f"{name}.js", var, merged)

        groups: dict[str, int] = {}
        for it in merged:
            groups[it.get("group") or "?"] = groups.get(it.get("group") or "?", 0) + 1
        if rebuild or not previous:
            mode = "rebuild"
        elif append_new:
            mode = "merge+append"
        else:
            mode = "merge-preserve"
        print(f"{name}: {len(merged)} → {self.out_dir / f'{name}.js'} [{mode}, fixed={fixed_n}]")
        for g, n in sorted(groups.items(), key=lambda x: (-x[1], x[0])):
            print(f"   · {g}: {n}")
        return merged

    def build(self, *, rebuild: bool = False, append_new: bool = False) -> dict[str, int]:
        extras = self.load_plugins()
        j = self.dedupe(list(JUNIOR) + extras["junior"])
        m = self.dedupe(list(MIDDLE) + extras["middle"])
        s = self.dedupe(list(SENIOR) + extras["senior"])
        self.write_js("junior", "QUESTIONS_JUNIOR", j, rebuild=rebuild, append_new=append_new)
        self.write_js("middle", "QUESTIONS_MIDDLE", m, rebuild=rebuild, append_new=append_new)
        self.write_js("senior", "QUESTIONS_SENIOR", s, rebuild=rebuild, append_new=append_new)
        total = len(j) + len(m) + len(s)
        print("TOTAL sources", total)
        if rebuild:
            print("NOTE: --rebuild пересобрал из источников; overrides сохранены.")
        elif append_new:
            print("NOTE: merge + append новых из источников (без удаления старых).")
        else:
            print("NOTE: merge-preserve — карточки не удалялись; новые из плагинов не дописывались.")
            print("      Добавить новые: python3 generate_questions.py --append-new")
        return {"junior": len(j), "middle": len(m), "senior": len(s), "total": total}


def main(argv: list[str] | None = None) -> None:
    """Критерии уровней — в шапке tools/generate_questions.py / README."""
    parser = argparse.ArgumentParser(description="Сборка банков PyСобес")
    parser.add_argument(
        "--rebuild",
        action="store_true",
        help="Полная пересборка из источников. Правки из bank/overrides/*.json сохраняются. "
        "Правки только в js/data без overrides будут потеряны.",
    )
    parser.add_argument(
        "--append-new",
        action="store_true",
        help="К существующему js/data дописать карточки из источников с новым текстом q "
        "(ничего не удаляет). По умолчанию генератор только накладывает overrides.",
    )
    args = parser.parse_args(argv)
    BankBuilder().build(rebuild=args.rebuild, append_new=args.append_new)


if __name__ == "__main__":
    main()
