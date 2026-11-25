[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/chepster4/invent-a-word/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/chepster4/invent-a-word/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

# Dotdrop — Invent a Word We Need

Entry for the [Invent a Word We Need](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0) bounty on [make.fun](https://make.fun).

## The word

> **Dotdrop — the sinking feeling when the typing dots vanish and no reply ever comes.**

You have watched the three dots bounce, waited for the reply, and then —
nothing. The dots are gone, the message never comes, and you are left
wondering what they typed, deleted, and decided not to send. English had
no word for that small sinking moment. Now it does.

## How it works

`main.ts` (Node 22+, standard library only, no network, no file reads)
writes the single-line entry to `/output/entry.txt`. The program is fully
deterministic: every run writes the exact same 82 characters.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
