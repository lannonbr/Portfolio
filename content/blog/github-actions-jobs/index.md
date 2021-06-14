---
title: 'Running GitHub Actions work in parallel with Jobs'
date: '2021-06-14'
description: 'How to use Jobs in GitHub Actions workflows'
logo: github-actions
status: fully-grown
---

In a CI workflow on GitHub Actions, you may wish to do work that is not directly tied to each other. This may include tasks like building separate portions of a site, running tests on multiple versions, etc. To do all of this, GitHub Actions has the concept of jobs to run a series of actions and commands within a self-contained environment.

## Directly separate jobs

To start, Let's run a linter & tests for a hypothetical node library at the same time.

```yaml
on: push
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: |
        npm install
        npm run lint
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: |
        npm install
        npm test
```

Here, both start running immediately and if either fails, the workflow at large will fail, but since the linting and tests aren't dependent on one another we can have them run in parallel like such.

## Dependent jobs with the `needs` config setting

Now take our last example, if either the `lint` or `test` job failed and we had a 3rd job to say deploy our code to NPM, we would only want to deploy if both were successful. The `jobs.<job-id>.needs` config allows you to define what jobs to wait to complete before running.

```yaml highlight={19}
on: push
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: |
        npm install
        npm run lint
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: |
        npm install
        npm test
  publish:
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v2
      - run: |
        npm install
        npm publish
```

In this workflow, the `lint` and `test` jobs will trigger when the workflow starts, but the `publish` workflow only will happen if both `lint` and `test` pass.

As well, if you wish to send data from one job to another, you can use [Job Outputs](/blog/2020-04-16-gh-actions-job-outputs) for strings or [Artifacts](https://docs.github.com/en/actions/guides/storing-workflow-data-as-artifacts) for files.

## Jobs w/ `matrix`

Expanding further, the GitHub Actions environment allows for matrix capabilities to run the same code with small environment modifications.

For example, let's run tests for our node library on all three available operating systems.

```yaml highlight={4-7}
on: push
jobs:
  test:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v2
      - run: |
        npm install
        npm test
```

With the use of the `strategy.matrix` field, this job will be created 3 times and run through the defined steps for each operating system at the same time. This could be further extended to include architectures (x86, arm, etc) or application runtime versions (node 12, node 14, etc).
