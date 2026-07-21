import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'RBatis-Plus',
  description: 'MyBatis-Plus 风格 Mapper/Service/Wrapper、固定六阶段拦截链、二级缓存 SPI 与 Java 时间兼容类型。',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'RBatis-Plus',
      description: 'MyBatis-Plus 风格 Mapper/Service/Wrapper、固定六阶段拦截链、二级缓存 SPI 与 Java 时间兼容类型。',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'RBatis-Plus',
      description: 'MyBatis-Plus-style mapper/service/wrapper APIs, a fixed six-stage interceptor chain, L2 cache SPI, and Java-time compatibility types.',
    },
  },
  mermaid: {
    theme: 'neutral',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/rbatis-plus' }],
    search: { provider: 'local' },
    locales: {
      root: {
        label: '简体中文',
        nav: [
          { text: '首页', link: '/' },
          { text: '项目目录', link: '/repositories' },
          { text: '指南', items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '生态架构', link: '/guide/ecosystem' },
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' },
          ] },
          { text: 'GitHub', link: 'https://github.com/rbatis-plus' },
        ],
        sidebar: {
          '/guide/': [{ text: '指南', items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '生态架构', link: '/guide/ecosystem' },
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' },
          ] }],
        },
        outlineTitle: '本页目录',
        lastUpdatedText: '最后更新',
        docFooter: { prev: '上一页', next: '下一页' },
        footer: {
          message: '内容来自当前仓库与本地源码核验',
          copyright: 'Copyright © 2026 RBatis-Plus',
        },
      },
      en: {
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Repositories', link: '/en/repositories' },
          { text: 'Guide', items: [
            { text: 'Getting started', link: '/en/guide/getting-started' },
            { text: 'Ecosystem', link: '/en/guide/ecosystem' },
            { text: 'Contributing', link: '/en/guide/contributing' },
            { text: 'License', link: '/en/guide/license' },
          ] },
          { text: 'GitHub', link: 'https://github.com/rbatis-plus' },
        ],
        sidebar: {
          '/en/guide/': [{ text: 'Guide', items: [
            { text: 'Getting started', link: '/en/guide/getting-started' },
            { text: 'Ecosystem', link: '/en/guide/ecosystem' },
            { text: 'Contributing', link: '/en/guide/contributing' },
            { text: 'License', link: '/en/guide/license' },
          ] }],
        },
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last updated',
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: 'Content verified against current repositories and local source',
          copyright: 'Copyright © 2026 RBatis-Plus',
        },
      },
    },
  },
})
