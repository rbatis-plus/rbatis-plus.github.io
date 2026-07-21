# Getting started

This guide includes only entry points supported by the current repository state. When versions, access, or release status are uncertain, examples explicitly use Git revisions, source builds, or status checks.

## 1. Pin the alpha dependency

The Rust baseline and API can still change, so use an explicit revision.

```toml
[dependencies]
rbatis-plus = { git = "https://github.com/rbatis-plus/rbatis-plus", rev = "<commit>" }
```

## 2. Run workspace gates

The main repository contains core, macros, extension, codegen, and facade crates.

```bash
git clone https://github.com/rbatis-plus/rbatis-plus.git
cd rbatis-plus
cargo test --workspace
```

## Next steps

- [Understand how projects relate](/en/guide/ecosystem)
- [Browse the full repository catalog](/en/repositories)
- [Prepare a contribution](/en/guide/contributing)
