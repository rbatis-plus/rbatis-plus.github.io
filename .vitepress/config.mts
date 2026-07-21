import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rbatis-Plus',
  description: '为 RBatis 提供 MyBatis-Plus 风格的 Mapper / Service / Wrapper / 二级缓存 / 类型处理器',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  locales: {
    'root': {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Rbatis-Plus',
      description: '为 RBatis 提供 MyBatis-Plus 风格的 Mapper / Service / Wrapper / 二级缓存 / 类型处理器',
    },
    'en': {
      label: 'English',
      lang: 'en-US',
      title: 'Rbatis-Plus',
      description: 'MyBatis-Plus-style mapper / service / wrapper / cache / type handlers for RBatis',
    },
  },
  themeConfig: {
    nav: [
      { text: '首页 / Home', link: '/', items: [
        { text: '快速开始 / Getting Started', link: '/guide/getting-started' },
        { text: '贡献指南 / Contributing', link: '/guide/contributing' },
        { text: '许可证 / License', link: '/guide/license' },
      ] },
      { text: '仓库 / Repositories', link: '/repositories' },
      { text: 'GitHub', link: 'https://github.com/rbatis-plus' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门 / Getting Started',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' },
          ],
        },
      ],
      '/en/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Quick Start', link: '/en/guide/getting-started' },
            { text: 'Contributing', link: '/en/guide/contributing' },
            { text: 'License', link: '/en/guide/license' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbatis-plus' },
    ],
    footer: {
      message: '由 Rbatis-Plus 用 ❤️ 制作 / Made with ❤️ by Rbatis-Plus',
      copyright: `Apache 2.0 Licensed | Copyright © ${new Date().getFullYear()} Rbatis-Plus`,
    },
    search: {
      provider: 'local',
    },
  },
})