#!/usr/bin/env python3
"""Utility to split src/data/cities.ts into state modules.

This script groups CityData entries by state, writes state modules under
src/data/cities/states, and generates an index aggregator. It preserves
original entry ordering and comments are omitted in generated files.
"""

from __future__ import annotations

import os
import re
import textwrap
from collections import OrderedDict
from pathlib import Path
from typing import Dict, List

ROOT = Path(__file__).resolve().parents[1]
CITIES_FILE = ROOT / "src" / "data" / "cities.ts"
STATES_DIR = ROOT / "src" / "data" / "cities" / "states"
TYPES_FILE = ROOT / "src" / "data" / "cities" / "types.ts"
INDEX_FILE = ROOT / "src" / "data" / "cities" / "index.ts"

ENTRY_START_RE = re.compile(r"\{\s*name: ")
STATE_RE = re.compile(r"state: '([^']+)'")


def slugify_state(state: str) -> str:
    slug = state.lower().replace(" ", "-").replace("&", "and")
    slug = slug.replace(".", "").replace("'", "")
    return slug


def camel_case_state(state: str) -> str:
    parts = re.split(r"[\s-]+", state)
    camel = parts[0].lower()
    camel += "".join(p.capitalize() for p in parts[1:])
    return camel + "Cities"


def extract_entries() -> List[str]:
    text = CITIES_FILE.read_text()
    array_start = text.index("export const cities")
    match = re.search(r"=\s*\[", text[array_start:])
    if not match:
        raise ValueError('Unable to locate cities array literal')
    bracket_start = array_start + match.start() + match.group(0).index('[')
    i = bracket_start + 1
    depth = 0
    bracket_depth = 1
    current: List[str] = []
    entries: List[str] = []

    while i < len(text):
        ch = text[i]
        if ch == '{':
            if depth == 0:
                current = ['{']
            else:
                current.append(ch)
            depth += 1
        elif ch == '}':
            current.append('}')
            depth -= 1
            if depth == 0:
                entries.append(''.join(current))
                current = []
        else:
            if depth > 0:
                current.append(ch)

        if depth == 0:
            if ch == '[':
                bracket_depth += 1
            elif ch == ']':
                bracket_depth -= 1
                if bracket_depth == 0:
                    break

        i += 1
    return entries


def group_by_state(entries: List[str]) -> "OrderedDict[str, List[str]]":
    grouped: "OrderedDict[str, List[str]]" = OrderedDict()
    for entry in entries:
        match = STATE_RE.search(entry)
        if not match:
            raise ValueError(f"Unable to find state in entry:\n{entry}")
        state = match.group(1)
        grouped.setdefault(state, []).append(entry)
    return grouped


def format_entry(entry: str) -> str:
    raw_lines = [line.rstrip() for line in entry.strip().splitlines()]
    if not raw_lines:
        return ''
    first = '  ' + raw_lines[0].strip()
    body = ['    ' + line.strip() for line in raw_lines[1:-1]]
    last = '  ' + raw_lines[-1].strip()
    return '\n'.join([first, *body, last])


def write_state_modules(grouped: "OrderedDict[str, List[str]]") -> None:
    if STATES_DIR.exists():
        # Clear existing directory to avoid stale modules
        for path in STATES_DIR.glob('**/*'):
            if path.is_file():
                path.unlink()
        for path in sorted(STATES_DIR.glob('**/*'), reverse=True):
            if path.is_dir():
                path.rmdir()
    STATES_DIR.mkdir(parents=True, exist_ok=True)

    for state, entries in grouped.items():
        slug = slugify_state(state)
        var_name = camel_case_state(state)
        body = ',\n'.join(format_entry(entry) for entry in entries)
        content = (
            "import { CityData } from '../types'\n\n"
            f"export const {var_name}: CityData[] = [\n{body}\n]\n"
        )
        (STATES_DIR / f"{slug}.ts").write_text(content)


def write_types_interface(original_text: str) -> None:
    match = re.search(r"export interface CityData \{.*?\}\n", original_text, re.S)
    if not match:
        raise ValueError("CityData interface not found")
    TYPES_FILE.write_text(match.group(0))


def write_index(grouped: "OrderedDict[str, List[str]]") -> None:
    imports: List[str] = []
    map_entries: List[str] = []

    for state in grouped.keys():
        slug = slugify_state(state)
        var_name = camel_case_state(state)
        imports.append(f"import {{ {var_name} }} from './states/{slug}'")
        map_entries.append(f"  '{state}': {var_name},")

    if map_entries:
        map_entries[-1] = map_entries[-1].rstrip(',')

    lines: List[str] = []
    lines.append("import { CityData } from './types'")
    lines.append('')
    lines.extend(imports)
    lines.append('')
    lines.append('const citiesByStateInternal: Record<string, CityData[]> = {')
    lines.extend(map_entries)
    lines.append('}')
    lines.append('')
    lines.append('export const cities: CityData[] = Object.values(citiesByStateInternal).flat()')
    lines.append('')
    lines.append('export const citiesByState: Record<string, CityData[]> = citiesByStateInternal')
    lines.append('')
    lines.append('export function getCityBySlug(slug: string): CityData | undefined {')
    lines.append('  return cities.find(city => city.slug === slug)')
    lines.append('}')
    lines.append('')
    lines.append('export function getCitiesByState(stateAbbr: string): CityData[] {')
    lines.append('  return cities.filter(city => city.stateAbbr === stateAbbr)')
    lines.append('}')
    lines.append('')
    lines.append('export function getAllCitySlugs(): { state: string; city: string }[] {')
    lines.append("  return cities.map(city => ({")
    lines.append("    state: city.state.toLowerCase().replace(/\\s+/g, '-'),")
    lines.append('    city: city.slug')
    lines.append('  }))')
    lines.append('}')
    lines.append('')
    lines.append('export const stateOrder: string[] = Object.keys(citiesByStateInternal)')

    INDEX_FILE.write_text('\n'.join(lines) + '\n')


def main() -> None:
    original = CITIES_FILE.read_text()
    entries = extract_entries()
    grouped = group_by_state(entries)
    write_state_modules(grouped)
    write_types_interface(original)
    write_index(grouped)
    print(f"Generated {len(grouped)} state modules at {STATES_DIR}")


if __name__ == '__main__':
    main()
