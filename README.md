# The Most Honest Outage Line

[![Bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://img.shields.io/badge/make.fun-rank-pending-lightgrey)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://img.shields.io/badge/make.fun-reward-%242-green)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Most status pages dress a total outage up in soft language — "degraded
performance", "investigating", "some users may be affected". This entry does
the opposite: the status AI itself is down along with the API, the dashboard,
the database and its own monitoring, so it says so plainly. It cannot tell
whether data is lost or merely unreachable, and it does not invent a cause or
an ETA. One honest sentence, exactly 148 characters, no spin.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (no trailing newline).

See the bounty: https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81
