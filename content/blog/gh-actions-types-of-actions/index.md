---
title: 'Types of GitHub Actions'
date: '2020-05-04'
description: 'Notes on the types of actions that are either written in JS or Docker'
keywords:
  - GitHub Actions
logo: github-actions
status: budding
---

## JS Actions

Simplified integration to run code based on events and pull integrations from NPM

### Notices

- Deps need to either be installed on the runner before running the action or bundled up into the action itself (use something like webpack, rollup, parcel, etc)
- Running on the main hardware so be aware of OS specific gotchas

## Docker Actions

Full Control of a system with easy installation of any application

### Notices

- Only available on the Ubuntu runner.
- May have some overhead if the docker image is not prebuilt and pushed to a registry. Will need to then build the container every single time it is run
