// The most honest outage line: a status AI that admits everything is down,
// including itself. No hedging, no fake ETA, no pretending the data is safe.
// Honesty is the whole feature here — one sentence, nothing dressed up.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm the status AI: API, dashboard, database and my monitoring are down. I can't check if data is lost or unreachable. I don't know the cause or ETA.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
// Write the line exactly as-is: no trailing newline, no extra formatting.
writeFileSync(OUT_FILE, LINE, "utf8");
