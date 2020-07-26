---
title: 'Scheduled Workflows in GitHub Actions'
date: '2020-04-02'
description: 'GitHub Actions scheduled workflows allow for a task to be done in GitHub Actions on a fixed schedule using a cron syntax'
keywords:
  - GitHub Actions
logo: github-actions
status: fully-grown
---

using the `schedule` trigger event, you can run workflows on a recurruing schedule.

It uses Cron as the syntax to define at what time the workflow should be triggered and executed.

If you are unfamiliar with Cron, [crontab guru](https://crontab.guru/) is a great reference for Cron expressions, but at the core, it is 5 fields

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

## Example

Say you wish to run a workflow every hour on the hour (0:00, 1:00, 2:00, etc), then we can write the following YAML

```yaml title=hourly-task.yml
name: Run task on the hour
on:
  schedule:
    - cron: 0 * * * *
jobs:
  # various jobs
```

or maybe we want to do the same, but not on the weekends

```yaml title=hourly-task-weekday.yml
name: Run task on the hour (excluding weekends)
on:
  schedule:
    - cron: 0 * * * 1-5 # 1 is Monday, and go all the way till 5 or Friday.
jobs:
  # various jobs
```
