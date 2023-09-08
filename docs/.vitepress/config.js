export default {
  title: 'weekly',
  dist: '/dist',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: 'weekly',
    nav: [
      { text: '周刊', link: '/guide/index' },
      {
        text: '周边',
        items: [
          { text: '投稿', link: 'https://github.com/zishume/weekly/issues' },
          { text: '博客', link: 'https://zishu.me' },
        ]
      },
      { text: 'Github', link: 'https://github.com/zishume/weekly' },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '项目介绍', link: '/guide/index' },
        ]
      },
      {
        text: '发布历史',
        items: [
          { text: '#17 音频播客新闻日志等推荐', link: '/posts/17' },
          { text: '#16 好用的图床管理工具', link: '/posts/16' },
          { text: '#15 提高生产力的脚本工具', link: '/posts/15' },
          { text: '#14 Github工具', link: '/posts/14' },
          { text: '#13 热爱生活和未来', link: '/posts/13' },
          { text: '#12 提升chatGPT使用体验', link: '/posts/12' },
          { text: '#11 追求技术实用主义', link: '/posts/11' },
          { text: '#10 一款极简开源的输入法', link: '/posts/10' },
          { text: '#9 openai封禁了一批账号', link: '/posts/9' },
          { text: '#8 一个ChatGPT应用平台', link: '/posts/8' },
          { text: '#7 一个Notion风格的编辑器', link: '/posts/7' },
          { text: '#6 使用Notion搭建网站的方案', link: '/posts/6' },
          { text: '#5 使用css写出精致的UI小组件', link: '/posts/5' },
          { text: '#4 chatGPT3.5API发布', link: '/posts/4' },
          { text: '#3 建站能用到的免费工具', link: '/posts/3' },
          { text: '#2 如何使用本项目搭建网站？', link: '/posts/2' },
          { text: '#1 hello,world！这是一个新的开始', link: '/posts/1' },
        ]
      },
    ],
    editLink: {
      pattern: 'https://github.com/zishume/weekly/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdatedText: '最后更新',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 子舒'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
}
