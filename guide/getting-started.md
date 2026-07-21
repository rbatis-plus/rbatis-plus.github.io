# 快速开始

这里仅提供已经能从当前仓库状态证明的入口。版本、权限或发布状态不确定时，示例会明确使用 Git revision、源码构建或状态检查。

## 1. 锁定 alpha 依赖

当前 Rust 基线与 API 都可能变化，建议使用明确 revision。

```toml
[dependencies]
rbatis-plus = { git = "https://github.com/rbatis-plus/rbatis-plus", rev = "<commit>" }
```

## 2. 运行工作区门禁

主仓库包含 core、macros、extension、codegen 与 facade。

```bash
git clone https://github.com/rbatis-plus/rbatis-plus.git
cd rbatis-plus
cargo test --workspace
```

## 下一步

- [理解项目之间的关系](/guide/ecosystem)
- [查看完整仓库目录](/repositories)
- [准备贡献](/guide/contributing)
