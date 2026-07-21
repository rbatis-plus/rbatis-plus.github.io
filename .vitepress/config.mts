import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rbatis-Plus',
  description: '为 RBatis 提供 MyBatis-Plus 风格的 Mapper / Service / Wrapper / 二级缓存 / 类型处理器',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组织仓库', link: '/repositories' },
      { text: 'GitHub', link: 'https://github.com/rbatis-plus' }
    ],
    sidebar: {
      '/': [
        {
          text: '入门',
          items: [
            { text: '简介', link: '/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '项目',
          items: [
            { text: '仓库列表', link: '/repositories' }
          ]
        },
        {
          text: '关于',
          items: [
            { text: '贡献指南', link: '/guide/contributing' },
            { text: '许可证', link: '/guide/license' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbatis-plus' }
    ],
    footer: {
      message: '由 Rbatis-Plus 用 ❤️ 制作',
      copyright: `Apache 2.0 Licensed | Copyright © ${new Date().getFullYear()} Rbatis-Plus`
    },
    search: {
      provider: 'local'
    }
  }
})