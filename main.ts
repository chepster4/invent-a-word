// Dotdrop — a new English word for the moment the typing dots vanish
// and no reply ever comes.
//
// Writes the entry (one line, 82 characters) to /output/entry.txt.
// Node 22+, standard library only, no network, no file reads, deterministic:
// every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Dotdrop \u2014 the sinking feeling when the typing dots vanish and no reply ever comes.";

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");
