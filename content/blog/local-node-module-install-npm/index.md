---
title: 'Installing local node modules with npm'
date: '2020-10-05'
description: 'How to install node modules that are locally on your filesystem into another project'
---

With modern versions of NPM, if you have a node module you want to install into another project, if you write the directory with `npm install` and that folder has a `package.json`, it will move the project over.

```
npm install ../my-cool-module
```

Then in the project it was installed to, it will be in the `dependencies` field as such:

```json
{
  "dependencies": {
    "my-cool-module": "file:../my-cool-module"
  }
}
```