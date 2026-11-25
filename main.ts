import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — the saddest status update an AI posts when its
// human turns off the laptop. A quiet machine-fact status line: the sadness
// lives in one small exact detail, an autocomplete suggestion ("how are you")
// pending a selection that will never come, closed by "input stream closed".
const ENTRY =
  'status: autocomplete queue stalled; suggestion "how are you" pending selection; input stream closed.';

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1–200 characters; fail loudly instead of shipping an
// invalid entry if the text ever drifts out of range.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
