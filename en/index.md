---
layout: home
title: RBatis-Plus
hero:
  name: "RBatis-Plus"
  text: "Typed enhancements and caching for RBatis"
  tagline: "MyBatis-Plus-style mapper/service/wrapper APIs, a fixed six-stage interceptor chain, L2 cache SPI, and Java-time compatibility types."
  actions:
    - theme: brand
      text: Get started
      link: /en/guide/getting-started
    - theme: alt
      text: Repository catalog
      link: /en/repositories
    - theme: alt
      text: Ecosystem architecture
      link: /en/guide/ecosystem
features:
  - icon: 🧩
    title: Typed CRUD
    details: BaseMapper, IService, ServiceImpl, typed query/update wrappers, and deterministic code generation.
  - icon: 🔐
    title: Security pipeline
    details: Field encryption, blind indexes, row signatures, key rotation, and verification before decryption.
  - icon: ⚡
    title: Pluggable L2 cache
    details: One SPI for local Moka, Redis, and Memcached, with generation-based invalidation.
---

## What exists today

- **8** public projects
- Catalog refreshed **2026-07-22**

- `rbatis-plus` is currently 0.1.0-alpha.1: an executable vertical slice, not full MyBatis-Plus parity.
- Interceptor order is fixed: SQL_REWRITE, PARAMETER_TRANSFORM, EXECUTE, RESULT_VERIFY, RESULT_TRANSFORM, OBSERVE.
- Caching applies only to parsed SELECT statements outside transactions; backend errors fail open to the database path and remain observable.

> This site cross-checks the repositories currently visible on GitHub with local source workspaces. Availability is governed by each repository README, releases, and license.

## Choose an entry point

| Goal | Next step |
|---|---|
| Understand the ecosystem | [Read architecture and boundaries](/en/guide/ecosystem) |
| Choose a concrete project | [Browse the repository catalog](/en/repositories) |
| Install or run something | [Open the getting-started guide](/en/guide/getting-started) |
| Submit a fix or capability | [Read the contributing guide](/en/guide/contributing) |

## Organization links

- [GitHub](https://github.com/rbatis-plus)
- [All repositories](https://github.com/orgs/rbatis-plus/repositories)
- [This site source](https://github.com/rbatis-plus/rbatis-plus.github.io)
