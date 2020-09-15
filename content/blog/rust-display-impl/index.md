---
title: 'Implementing the Display trait in Rust'
date: '2020-09-09'
description: 'How to implement the Display trait for custom structs in Rust'
status: fully-grown
logo: rust
---

When interpolating values into a string in a `println!` call, you use the `{}` symbols in a format string followed by the variables as arguments. What this is using to insert a user-facing output into the string is the [fmt::Display](https://doc.rust-lang.org/std/fmt/trait.Display.html) trait. This trait is implemented on all primitives and many other types in the standard library.

To implement it on your own structs, it requires a `fmt` function to be defined to show how to render the contents of a struct in a string format.

```rust
struct User {
    name: String,
    email: String,
}

impl fmt::Display for User {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
      write!(f, "{} <{}>", self.name, self.email)
    }
}
```

Now if we create an instance of our `User` struct, we can print it out directly as we would with other variables:

```rust
fn main() {
    let new_user = User {
        name: "Benjamin Lannon".to_string(),
        email: "email@example.com".to_string()
    }

    println!("{}", new_user); // Prints out "Benjamin Lannon <email@example.com>"
}
```
