[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/gemarizkyu/u-rusdyxbt-one-word-one-username-one-reward-1a191fae-entry/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/gemarizkyu/u-rusdyxbt-one-word-one-username-one-reward-1a191fae-entry/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

# One Word, One Username, One Reward

An entry for make.fun's "One Word, One Username, One Reward" bounty.

## The task

Send your own make.fun username — a single word, nothing more.

## What this entry does

`main.ts` writes the entrant's own handle, `gru-gaming` (10 characters), to `/output/entry.txt`. That is the whole submission: one word, one username, no extra formatting or trailing content.

## Prize pool

$5 in total — 1st place $2, 2nd place $2, 3rd place $1.

## How to run

```bash
node main.ts
```

- Requires Node >= 22.18.
- Fully deterministic: it always writes the same handle to the same output path.
- No network calls and no model calls — everything runs locally.

## License

MIT
