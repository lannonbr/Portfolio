---
title: 'GitHub Actions v2: JS Actions'
date: '2019-08-13'
description: 'Intro to building GitHub Actions with Javascript'
keywords:
  - Javascript
  - GitHub Actions
  - Automation
---

![GitHub Actions branding](./GitHubActions.png)

GitHub announced this past Thursday, August 8, a new beta of GitHub Actions including CI & CD support. I want to look into a variety of new features added into the new beta and capabilites they can do.

This post will look into the new "JavaScript Actions", which allows you to build new actions by spinning up a JS file.

## Repo setup & action.yml

Starting out creating a JS Action is the same as you would any node project. create a new directory and spin up a package.json with `npm` or `yarn`.

```shell
mkdir my-cool-action
npm init -y
```

Next, a file needs to be generated to describe some metadata for the particular action. Create a file named `action.yml` and fill it in with the following:

```yml
name: My Cool Action
author: Benjamin Lannon
description: 'Action that does some cool stuff!'
inputs:
  name:
    description: 'Name'
    required: false
    default: 'Benjamin'
runs:
  using: 'nodejs12'
  main: 'main.js'
branding:
  color: 'green'
  icon: 'send'
```

The details for the YAML syntax can be found on GitHub's docs here: [action.yml syntax docs](https://help.github.com/en/articles/metadata-syntax-for-github-actions). It is the file that will allow GitHub to know what file to look for when developing. The main things required are:

- `name`: Gives your action a name.
- `description`: Gives an explaination of what
- `runs.using`: tells you what kind of action it is. It currently supports either `docker` for container based actions, or `nodejs12` which is what we are using for JS based actions.
- `runs.main`: When using `nodejs` in `runs.using`, this param defines where your entrypoint is going to be located in the current diretory.
