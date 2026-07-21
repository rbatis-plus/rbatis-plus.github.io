---
layout: home
title: RBatis-Plus
hero:
  name: "RBatis-Plus"
  text: "RBatis 的类型化增强与缓存生态"
  tagline: "MyBatis-Plus 风格 Mapper/Service/Wrapper、固定六阶段拦截链、二级缓存 SPI 与 Java 时间兼容类型。"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 项目目录
      link: /repositories
    - theme: alt
      text: 生态架构
      link: /guide/ecosystem
features:
  - icon: 🧩
    title: 类型化 CRUD
    details: BaseMapper、IService、ServiceImpl、typed query/update wrappers 与代码生成。
  - icon: 🔐
    title: 安全处理链
    details: 字段加密、盲索引、行签名、密钥轮换与验证先于解密的固定顺序。
  - icon: ⚡
    title: 可替换二级缓存
    details: 统一 SPI 对接本地 Moka、Redis 与 Memcached，并用 generation 做失效。
---

## 现在有什么

- **8** 个公开项目
- 清单更新于 **2026-07-22**

- `rbatis-plus` 当前为 0.1.0-alpha.1，可执行垂直切片不等于 MyBatis-Plus 全量兼容。
- 拦截器顺序固定为 SQL_REWRITE、PARAMETER_TRANSFORM、EXECUTE、RESULT_VERIFY、RESULT_TRANSFORM、OBSERVE。
- 缓存只处理事务外已解析 SELECT；后端错误 fail-open 到数据库路径，并保留可观测性。

> 本页同时校验 GitHub 当前可见仓库和本地源码工作区；项目可用性以各仓库 README、release 与许可证为准。

## 如何选择入口

| 目标 | 下一步 |
|---|---|
| 先理解整个生态 | [查看架构与边界](/guide/ecosystem) |
| 选择具体项目 | [浏览项目目录](/repositories) |
| 开始安装或运行 | [进入快速开始](/guide/getting-started) |
| 提交修复或新能力 | [阅读贡献指南](/guide/contributing) |

## 组织入口

- [GitHub](https://github.com/rbatis-plus)
- [全部仓库](https://github.com/orgs/rbatis-plus/repositories)
- [本网站源码](https://github.com/rbatis-plus/rbatis-plus.github.io)
