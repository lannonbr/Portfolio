---
title: 'GitHub Actions Workflow Step Types'
date: '2020-05-04'
description: 'Various things that can be run as building blocks of GitHub Actions'
keywords:
  - GitHub Actions
logo: github-actions
status: budding
---

## Bare commands

You can run commands on the VM which the runner is working on itself. This can be useful to run quick commands or other things like git, aws or azure CLIs, etc

## Actions

As with the older beta, Actions can be your main way to run chunks of code or tasks from either personal repos or third party actions. you point it to a folder, repo, or registry and it will search for a `Dockerfile` or `action.yml` file to find the source code that needs to be run for that specific action

## Services

As you may have integration tests in your CI, you may wish to spin up multiple services that can communicate with each other on the same network. Using Docker Compose, you can easily spin up databases, event queue systems, or any other service that could be run locally as part of your system.
