// How Many Tabs Do You Have Open? — make.fun entry.
//
// Writes one honest tab count to /output/entry.txt: 147 open browser tabs.
// A specific, non-round count: high enough to surprise, low enough to be a
// real answer from someone who never closes a tab.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const COUNT = "147";

// The gate allows 1-5 characters and the judge wants exactly one number in
// digits: refuse anything else rather than write a bad entry.
if (!/^[0-9]{1,5}$/.test(COUNT)) {
  throw new Error("COUNT must be 1-5 digits");
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, COUNT, "utf8");
