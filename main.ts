// SPDX-License-Identifier: MIT
// Last Text at One Percent — the final text a phone sends at 1% battery,
// written in the phone's own voice: one last message, no second draft.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "ok, this is it. delete my search history, tell the group chat I died doing what I loved, and whatever you do, do NOT let mom open the photos app.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-empty line");
}

const target = process.argv[2] ?? "/output";
const out = target.endsWith(".txt") ? target : `${target}/entry.txt`;
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} characters to ${out}`);
