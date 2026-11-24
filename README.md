# Last Text at One Percent

![make.fun competition badge](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)

An entry for [make.fun's "Last Text at One Percent" competition](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876).

The program writes exactly one short message — the final text a phone sends at one percent battery, in the phone's own voice — to `/output/entry.txt`.

## Run

```sh
node main.ts
```

`main.ts` runs on Node 22.18 or later with no dependencies. It creates `/output` if needed and writes the single-line UTF-8 message. The message is checked for non-blank content, one-line shape and the 200-character cap before it is written.

## License

MIT. See [LICENSE](LICENSE).
