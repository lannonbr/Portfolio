---
title: 'GitHub Actions Job Outputs'
date: '2020-04-16'
description: 'A new feature of GitHub Actions where you can transfer data between jobs using outputs'
keywords:
  - GitHub Actions
logo: github-actions
status: fully-grown
---

GitHub Actions now allows you to take step outputs and output them into other jobs. Now if you have a job that is dependent on some data from another job, instead of needing to save it in a file and upload an [Artifact](https://help.github.com/en/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts), you can just use [Job Outputs](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjobs_idoutputs) and save just the data itself with minimal encoding:

```yaml
name: Do things
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      url: ${{ steps.step1.outputs.url }} # map step output to job output
    steps:
      - id: step1
        name: send url to other job
        run: echo "::set-output name=url::https://google.com"

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: user/some-action@v1
        with:
          url: ${{ needs.job1.outputs.url }} # grab job output here
```
