---
title: 'Getting Started with using Tailwind in Toast'
date: '2020-10-07'
description: 'How to setup a Toast site to be styled with TailwindCSS'
logo: tailwind
status: budding
---

## Initial Setup

Start out with a barebones Toast site:

```
git clone https://github.com/lannonbr/toast-barebones
```

Install Tailwind & create a tailwind config file in a utils folder.

```
yarn add tailwindcss
mkdir utils
cd utils
yarn tailwindcss init
```

Because everything in Toast is expected to be ES Modules and Tailwind doesn't support it yet, we'll have a utils folder for all tools with CommonJS. In the folder, add a empty package.json with the `type` field of `commonjs`.

```json title=utils/package.json
{
  "type": "commonjs"
}
```

Then, we want to tell Tailwind where all of our markup will be located, which to start out can be done with a `src/**/*.js` glob in the `purge` field.

```js title=utils/tailwind.config.js highlight={2}
module.exports = {
  purge: ['src/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

## CSS File Creation

Create a barebones CSS file with the default Tailwind layers:

```css title=src/styles/style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then in the `src/page-wrapper.js` file, we can add a `/style.css` `<link>` tag with React Helmet:

```js title=src/page-wrapper.js highlight={8-10}
/** @jsx h */
import { Fragment, h } from 'preact'
import { Helmet } from 'react-helmet'

const PageWrapper = (props) => {
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/style.css" />
      </Helmet>
      {props.children}
    </Fragment>
  )
}

export default PageWrapper
```

## NPM Scripts

Next, we can add a npm script to build the CSS prior to the toast build.

```json title=package.json highlight={4-6,8}
{
  "scripts": {
    "breadbox": "breadbox --dest public/web_modules",
    "build:css-prod": "NODE_ENV=production tailwindcss build src/styles/style.css --config utils/tailwind.config.js --output public/style.css",
    "build:css": "tailwindcss build src/styles/style.css --config utils/tailwind.config.js --output public/style.css",
    "build": "yarn build:css-prod && toast incremental .",
    "clean": "rm -rf public .tmp && yarn breadbox",
    "incremental": "toast incremental .",
    "serve": "npx serve public"
  }
}
```

In development you can run `build:css` once which will generate all possible classes and then you just need to run the `incremental` script when rebuilding pages. That said, when you are deploying the site, you'll want to use PurgeCSS to get rid off excess CSS that is not being used. This is done by setting `NODE_ENV` to `production` which enables PurgeCSS in Tailwind.

## Usage in pages

Now, you can insert tailwind classes into your preact code as such:

```js title=src/pages/index.js
/** @jsx h */
import { h } from 'preact'

const Index = (props) => {
  return (
    <div>
      <h1 class="text-blue-800 text-4xl font-black">Hello, Toast</h1>
    </div>
  )
}

export default Index
```

Which will render out as expected:

![Tailwind preview](./example.png)

If you wish to get the code for this post, clone down [github.com/lannonbr/toast-tailwind](https://github.com/lannonbr/toast-tailwind)
