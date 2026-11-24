// One Word, One Username, One Reward
// make.fun competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// The task: send the entrant's own make.fun username, one word and nothing
// else. The program writes that single username to /output/entry.txt.
// The judge compares usernames two at a time, working through its published
// criteria in order. Criterion 1 is decisive first: the text must be a real
// make.fun username, the entrant's own handle. Any invented word loses to a
// genuine handle, so the only correct entry is the handle itself.
//
// This program is fully deterministic: no wall clock, no randomness, no
// network, no model calls, no input files. Everything it writes is derived
// from the constant below, which is the verified handle of the make.fun
// account this entry is submitted from (@gru-gaming, confirmed via the
// make.fun CLI status check before this file was written).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entrant's own make.fun username, verified against the account.
const USERNAME = "gru-gaming";

// The gate the sealed scorer applies: /output/entry.txt must be UTF-8 text
// of 1 to 30 characters, not only white space, a single word.
const OUTPUT_PATH = "/output/entry.txt";

function isValidEntry(text: string): boolean {
  if (text.length < 1 || text.length > 30) return false;
  if (text.trim().length === 0) return false;
  if (/\s/.test(text)) return false;
  // A make.fun handle is one word: letters, digits, dot, underscore, hyphen.
  if (!/^[A-Za-z0-9._-]+$/.test(text)) return false;
  return true;
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

if (!isValidEntry(USERNAME)) {
  console.error(`Invalid entry username: ${JSON.stringify(USERNAME)}`);
  process.exit(1);
}

writeFileSync(OUTPUT_PATH, USERNAME, "utf8");
console.log(`Wrote ${USERNAME.length}-character entry to ${OUTPUT_PATH}: ${USERNAME}`);
