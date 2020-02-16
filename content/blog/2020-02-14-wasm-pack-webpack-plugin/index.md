---
title: 'Bundling a Rust library to WebAssembly with Webpack & wasm-pack'
date: '2020-02-14'
description: 'How to take rust code and compile and bundle it down into a webpack bundle'
keywords:
  - Rust
  - WebAssembly
---

How do?

# Start with some code.

Starting out, we can begin with a simple rust file that will export a function that adds two integers.

```rust title=lib.rs
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

# Setup Webpack

With Webpack, we can compile it down as a node module that either can be used in a node envirornment or in the browser.

On top of the default code for a usual webpack bundle, there's a plugin called [@wasm-tool/wasm-pack-plugin](https://github.com/wasm-tool/wasm-pack-plugin) that makes the process of pulling in rust code built with wasm-pack in better.

```js title=webpack.config.js
const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
  entry: './lib.js', // input file of the JS bundle
  output: {
    filename: 'bundle.js', // output filename
    path: path.resolve(__dirname, 'dist'), // directory of where the bundle will be created at
    libraryTarget: 'global' // target to be a global variable in the window. Name is defined in the 'library' field
    library: 'myLib', // the name of module when being used in the browser
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, 'crate') // Define where the root of the rust code is located (where the cargo.toml file is located)
    })
  ]
}
```

Then pull it into an html file and go.