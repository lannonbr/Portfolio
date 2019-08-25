---
title: 'GitHub Actions v2: Working with Git inside Actions'
date: '2019-08-27'
description: 'Details on using Git inside a GitHub Actions workflow'
keywords:
  - GitHub Actions
  - Automation
---

GitHub Actions can empower CI/CD Workflows, but on top of that, it provides triggers for approximately 30 other hooks into GitHub's platform. Behind it, all of these workflows are a layer around GitHub's main toolchain, Git and source control. In GitHub Actions, these workflows can allow you to manage a workflow and automate git flows as if you were running Git locally.
