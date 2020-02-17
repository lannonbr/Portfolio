---
title: 'Bundling a Rust library to WebAssembly with Webpack & wasm-pack'
date: '2020-02-17'
description: 'How to take rust code and compile and bundle it down into a webpack bundle'
keywords:
  - Rust
  - WebAssembly
---

On top of using [wasm-pack](https://github.com/rustwasm/wasm-pack) directly, you can also use it in JS bundlers. In this case, there has been an implementation to integrate wasm-pack into a webpack bundle with little code.

# Project setup

You can copy over the project from my [getting started with wasm-pack post](/blog/2020-01-07-rust-wasmpack/). The file structure you want to start with is like the following.

```
.
├── Cargo.toml
└── src
    └── lib.rs
```

So you have a `src` directory that includes your rust code and a `Cargo.toml` file that will describe the project.

```toml title=Cargo.toml
[package]
name = "webpack-wasmpack"
version = "0.1.0"
authors = ["Benjamin Lannon <benjamin@lannonbr.com>"]
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

```rust title=src/lib.rs
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

Following, we will want to create a JS file that is the entrypoint for our webpack bundle at `lib.js` in the root directory.

```js title=lib.js
import('./pkg/').then(lib => {
  // lib is the wasm library you can now use.
  console.log(`2 + 2 = ${lib.add(2, 2)}`)
})
```

With this, when we build our project, in the `pkg` folder, there will be a `index.js` file that will include glue code to fetch the WebAssembly. By using a [dynamic import](https://v8.dev/features/dynamic-import), on this wrapper file, it will asynchronously load the wasm code and then expose the various functions from the rust code, like `add`.

# Setup Webpack

With Webpack in this use case, we can compile rust code alongside our JS into a final bundle.

On top of the default code for a usual webpack bundle, there's a plugin called [@wasm-tool/wasm-pack-plugin](https://github.com/wasm-tool/wasm-pack-plugin) that makes the process of pulling in rust code built with wasm-pack in better.

Setup a package.json file and install the following packages:

```
npm init --yes
npm install --save-dev webpack webpack-cli @wasm-tool/wasm-pack-plugin
```

For this example, we are going to bundle towards a browser environment. Here is the webpack config that will be used for this project:

```js title=webpack.config.js
const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  entry: './lib.js', // input file of the JS bundle
  output: {
    filename: 'bundle.js', // output filename
    path: path.resolve(__dirname, 'dist'), // directory of where the bundle will be created at
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: __dirname, // Define where the root of the rust code is located (where the cargo.toml file is located)
    }),
  ],
}
```

The only thing out of the ordinary is we have a new plugin of `WasmPackPlugin`. The one required option is `crateDirectory` to tell wasm-pack where the root of the Rust code is. In this instance we have it at the root, but we could contain all of the rust code in its own folder if we wanted to.

Then add a build script as part of the `package.json` and then run it.

```json title=package.json
{
  // ...
  "scripts": {
    "build": "webpack"
  }
}
```

## Loading the outputs in the browser

What is outputted is various build artifacts. There will be a `pkg` file that includes the output of `wasm-pack`. Then it will take the `index.js` and `index_bg.wasm` file and use them as part of the outputted bundle.

Finally, there will be a `dist` folder which includes the end result. Create an index.html file in this directory and import the script in:

```html title=dist/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wasm-pack / Webpack example</title>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

Now if you serve this `dist` folder on a web server that properly serves WASM, you will be able to see it functioning. A notice about that previous statement is the `WebAssembly` web API which will run WASM needs the `.wasm` file to be loaded with the MIME type of `application/wasm` or it won't run. At the moment, there are some hiccups with Firefox loading this, but other browsers that support WASM will work, like Chrome, Edge, Safari, and others. These issues with browsers not being able to load WASM or HTTP Servers not being able to serve it properly will likely be resolved over time.

A http server that serves `.wasm` files as `application/wasm` is the node package `http-server`. You can run it with npx like so:

```
npx http-server dist
```

Now this can be used as a starting point and then can be used for bigger applications or in other environments. If you want to target NodeJS or other environments, minimal modifications are needed other than telling webpack and wasm-pack that you want to build for Node. As WebAssembly gains traction, the tooling around it will continue to evolve and be easier and easier to build.
