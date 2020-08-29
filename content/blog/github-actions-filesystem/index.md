---
title: "Accessing your repo's contents within GitHub Actions"
date: '2020-08-29'
description: 'How to navigate into the repo within GitHub Actions using the GITHUB_WORKSPACE environment variable'
keywords:
  - GitHub Actions
logo: github-actions
status: budding
---

When wanting to access the Filesystem through GitHub Actions, the main location that is focused is the root of the repository when a workflow is being run. To get to that location, GitHub Provides a `GITHUB_WORKSPACE` environment variable that is automatically setup as long as you've run the `actions/checkout` action.

For instance, if we're in a repo and want to grab all the files in a `content/posts/` directory, here's a node snippet to access such:

```js
const fs = require('fs')
const path = require('path')

const posts = fs.readdir(
  path.join(process.env.GITHUB_WORKSPACE, 'content', 'posts')
)
```

With this, whether an action is local within the repo or a 3rd party action, either will be able to navigate to your repo within a workflow run and access its contents.
