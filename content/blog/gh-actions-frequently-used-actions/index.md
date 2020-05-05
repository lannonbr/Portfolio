---
title: 'Frequently Used GitHub Actions'
date: '2020-05-04'
description: 'Some frequently used GitHub Actions that may appear in many workflows'
keywords:
  - GitHub Actions
logo: github-actions
---

## actions/checkout

The checkout action will clone your repo into the `GITHUB_WORKSPACE` directory so if you need to grab the source code of something in the current project or wish to work with git directly, this action will need to be used.

```yaml
steps:
  - uses: actions/checkout@v1
```

## Setup Actions

In software projects, you may wish to test your codebase on multiple versions of a particular language. These set of actions install a specified version of the language and have it setup into the PATH so it is immediately available on the system. Currently, NodeJS, Java, .NET, Elixir, Python, Ruby, and Go are all supported which should give ample support for most software projects

Here's an example of the setup-node action:

```yaml
steps:
  - name: Install NodeJS 10.x
    uses: actions/setup-node@v1
    with:
      node-version: '10.x'
```
