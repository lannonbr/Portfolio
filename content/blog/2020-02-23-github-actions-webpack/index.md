---
title: 'Bundling NPM modules for use in GitHub Actions'
date: '2020-02-23'
description: 'How to bundle NodeJS with node modules to be used in a GitHub Action'
keywords:
  - GitHub Actions
logo: github-actions
---

When working with GitHub Actions if you want to expose some code as an action where you can just use it without needing to dive into the internals, there is two scenarios of either running it inside a docker container or bundling the code down. I'll be looking at the latter here.

## Example

Say we have an action that uses Moment.js and prints out the current date. In a normal environment we would install the module

```
npm i moment
```

and write our code

```js title=index.js
const moment = require('moment')

const currentDate = moment()

console.log(currentDate.format('MMM Do YYYY'))
```

If we ran this on our local machine it would work, but in the case of on GitHub Actions, we should add an `action.yml` to describe the action:

```yml title=action.yml
name: 'Print Current Date action'
description: 'Prints the current date with Moment.js'
author: 'Benjamin Lannon <>'
runs:
  using: node12
  main: index.js
```

So now if we use this action in a workflow:

```yml title=.github/workflows/main.yml
on: push
name: 'Print current time'
jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: lannonbr/print-current-date@master
```

It would fail as we haven't installed any node modules, and more importantly, having it in an action abstracts the code and you shouldn't need to understand all of the internals. The action gives a contract either through the name or a readme of the project that it does a certain task. One can dive in and see how it does such, but it's not a requirement if the code was properly coded and tested to do what it says it does.

To be able to fix this, you can bundle the JS with something like Webpack.

## Webpack Config

First install webpack:

```
npm i -D webpack webpack-cli
```

and then create a webpack config file:

```js title=webpack.config.js
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
  node: false,
}
```

Then if you run `webpack`, the file will be created at `dist/index.js`. It's a much larger file as it contains any of the 3rd party node modules it imports in, but now it is all self contained.

Modifying the `action.yml` file so the `runs.main` field points to `dist/index.js` will now make the action function as expected.
