---
title: 'Getting started building WASM modules with Rust & wasm-pack'
date: '2020-01-07'
description: 'A retrospective for what I did in 2019'
keywords:
  - Rust
  - WebAssembly
---

![Rust/WASM crustacean logo](./wasm-ferris.png)

WebAssembly intro

## Project setup

Install Rust & Cargo

```sh
cargo init --lib hello-wasm
```

Setup cargo.toml for usage

```toml title=cargo.toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Benjamin Lannon <benjamin@lannonbr.com>"]
edition = "2018"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Write a simple module with an exported function

```rust title=src/lib.rs
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

install wasm-pack

```
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

compile with wasm-pack. Start with web.

```
wasm-pack build --target web
```

In the newly created `pkg` folder, the outputted WASM file now exists. On top of such, `hello_wasm.js` is glue code to spin up the wasm environment.

If you load it in as an ES module, it provides an init default function and the function you declared in rust:

```html
<script type="module">
  import init, { add } from 'pkg/hello_wasm.js'
  ;(async () => {
    await init()
    console.log(add(2, 2)) // Outputs 4 after running Rust code!
  })()
</script>
```

You just wrote your first library with WASM.
