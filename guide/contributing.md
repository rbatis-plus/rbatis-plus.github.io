# 贡献指南

## 先选对仓库

Bug、功能和文档修改应提交到实际拥有该能力的仓库。只有跨项目目录、导航或组织级说明才修改本 Pages 站点。

## 建议流程

1. 阅读目标仓库 README、CONTRIBUTING、AGENTS.md 与许可证。
2. 为行为变化先补测试或可复现用例。
3. 创建聚焦分支，保持提交只解决一个问题。
4. 运行仓库自己的格式、静态检查、测试和构建门禁。
5. PR 中说明动机、边界、验证结果与兼容性影响。

```bash
git clone https://github.com/rbatis-plus/<repository>.git
cd <repository>
git switch -c feat/<short-topic>
```

## 常见门禁

```bash
cargo fmt --all -- --check
cargo clippy --workspace --all-targets -- -D warnings
cargo test --workspace
```

## 更新本网站

```bash
cd rbatis-plus.github.io
npm install
npm run docs:build
```

不要在网站中复制无法从源码、manifest、release 或当前仓库状态证明的版本和数量。
