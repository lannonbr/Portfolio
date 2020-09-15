---
title: 'Debugging serde_json error paths'
date: '2020-09-14'
description: 'How to use serde_path_to_error to get more context into why a deserialization is failing'
status: budding
logo: rust
---

`serde_json` provides an API to convert JSON strings into structured data with Rust structs. This although can get tricky when errors appear. it provides back an error of what broke, but nothing about where except for a line and column number. In the case that the JSON being returned is from an API endpoint, it is all going to be a single string without any lines, so an error like

```
thread 'main' panicked at 'invalid type: null, expected a string at line 1 column 2618'
```

isn't that helpful and can get tedious of needing to crawl the JSON to a specific column of the single line.

Enter [serde_path_to_error](https://github.com/dtolnay/path-to-error), a wrapper around `serde_json` that adds the path as additional context.

Below we have an example where we use serde_path_to_error to deserialize some JSON that is invalid according to the structs defined:

```rust
use serde::Deserialize;

#[derive(Debug, Deserialize)]
struct Item {
    contents: Vec<Content>,
}

#[derive(Debug, Deserialize)]
struct Content {
    ident: String,
}

fn main() {
    // This is invalid JSON according to the above structs and will cause an error.
    let json = r#"{
        "contents": [
            { "ident": "f2ea2c" },
            { "ident": null }
        ]
    }"#;

    let deserializer = &mut serde_json::Deserializer::from_str(json);

    let result: Result<Item, _> = serde_path_to_error::deserialize(deserializer);

    match result {
        Ok(_) => println!("Expected an error"),
        Err(err) => {
            panic!("{}", err);
        }
    }
}
```

This instead will print out the following:

```
thread 'main' panicked at 'contents[1].ident: invalid type: null, expected a string at line 4 column 27'
```

That `contents[1].ident` path now immediately provides a route to where in the JSON it is failing to parse and allows for a smoother workflow of figuring out where to debug.
