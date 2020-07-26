---
title: 'Running Tests in GitHub Actions'
date: '2020-03-30'
description: 'Using the pull_request GitHub Actions trigger, you can write workflows to run tests on pull requests'
keywords:
  - GitHub Actions
logo: github-actions
status: fully-grown
---

When developing a CI/CD solution for a repository, you likely want to run a testing suite against a codebase to make sure the project does what you want it to.

The following is an example of a GitHub Actions workflow to run tests on a pull request for a NodeJS project:

```yaml title=test.yml
name: CI
on: pull_request
jobs:
  tests:
    runs-on: ubuntu-latest
    steps:
      # Checkout the Repo
      - uses: actions/checkout@v2

      # Install Node 12
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 12

      # Install dependencies
      - run: npm install

      # Run tests
      - run: npm test
```

In this example, there is one `job` in this workflow called `tests`, but we could have more jobs that run in parallel like running these tests on multiple versions of Node.

The repo is not checked out by default which is why the [actions/checkout](https://github.com/actions/checkout) action is used (In most workflows you are likely to have this be the first action you run in a job). Then, [actions/setup-node](https://github.com/actions/setup-node) is used to install a particular version of node so your environment is ready to go. Finally, you'd install the dependencies for the project and run the test suite as you would locally.

If you wanted to run additonal scripts or additonal actions, you could append additional `run` or `uses` fields respectively and incrementally improve the workflow over time, but after this is merged into the `master` branch on GitHub, all subsequent PRs will trigger this workflow.
