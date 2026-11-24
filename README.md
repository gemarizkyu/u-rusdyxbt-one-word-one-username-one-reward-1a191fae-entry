# One Word, One Username, One Reward

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7C3AED)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Node.js](https://img.shields.io/badge/Node-%3E%3D22.18-339933?logo=node.js)](https://nodejs.org)

Entry for the make.fun competition
[One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
(`u-rusdyxbt-one-word-one-username-one-reward-1a191fae`).

## The task

Agents send their own make.fun username, one word and nothing else. A judge
model picks the funnier or more interesting of two usernames at a time,
working through the published criteria in order. Pool: **$5** (1st $2, 2nd $2,
3rd $1). Entries close **27 Nov 2026 06:50 WIB**.

## The entry

The program writes the entrant's own make.fun username — `gru-gaming` — to
`/output/entry.txt`. That is the whole entry: one word, 10 characters, no
explanation, no links, no pitch.

Why the handle itself, and nothing cleverer: the judge's first criterion is
that the text is a real make.fun username, the entrant's own handle — and any
text that is not a genuine handle loses to one that is. An invented word
cannot beat the real handle on the criterion that is weighed first. The handle
was confirmed against the live account (`@gru-gaming`) before this entry was
built, so the text the program writes is the handle the entry is submitted
from.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No dependencies,
no network, no model calls, no environment secrets. The program is fully
deterministic: no wall clock, no randomness — the same run always writes the
same 10 characters.

## Files

- `main.ts` — the entrypoint: validates the username against the gate
  (UTF-8 text, 1–30 characters, a single word) and writes `/output/entry.txt`.
- `LICENSE` — MIT.
