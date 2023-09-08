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
      { text: 'Wiki', link: '/wiki/index' },
      {
        text: '周边',
        items: [
          { text: '投稿', link: 'https://github.com/zishume/weekly/issues' },
          { text: '博客', link: 'https://zishu.me' },
        ]
      },
      { text: 'Github', link: 'https://github.com/zishume/weekly' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '项目介绍', link: '/guide/index' },
          ]
        },
        {
          text: '发布历史',
          items: [
            { text: '#17 音频播客新闻日志等推荐', link: '/guide/posts/17-音频播客新闻日志等推荐' },
            { text: '#16 好用的图床管理工具', link: '/guide/posts/16-好用的图床管理工具' },
            { text: '#15 提高生产力的脚本工具', link: '/guide/posts/15-提高生产力的脚本工具' },
            { text: '#14 Github工具', link: '/guide/posts/14-Github工具' },
            { text: '#13 热爱生活和未来', link: '/guide/posts/13-热爱生活和未来' },
            { text: '#12 提升chatGPT使用体验', link: '/guide/posts/12-提升chatGPT使用体验' },
            { text: '#11 追求技术实用主义', link: '/guide/posts/11-追求技术实用主义' },
            { text: '#10 一款极简开源的输入法', link: '/guide/posts/10-一款极简开源的输入法' },
            { text: '#9 openai封禁了一批账号', link: '/guide/posts/9-openai封禁了一批账号' },
            { text: '#8 一个ChatGPT应用平台', link: '/guide/posts/8-一个ChatGPT应用平台' },
            { text: '#7 一个Notion风格的编辑器', link: '/guide/posts/7-一个Notion风格的编辑器' },
            { text: '#6 使用Notion搭建网站的方案', link: '/guide/posts/6-使用Notion搭建网站的方案' },
            { text: '#5 使用css写出精致的UI小组件', link: '/guide/posts/5-使用css写出精致的UI小组件' },
            { text: '#4 chatGPT3.5API发布', link: '/guide/posts/4-chatGPT3.5API发布' },
            { text: '#3 建站能用到的免费工具', link: '/guide/posts/3-建站能用到的免费工具' },
            { text: '#2 如何使用本项目搭建网站？', link: '/guide/posts/2-如何使用本项目搭建网站？' },
            { text: '#1 hello,world！这是一个新的开始', link: '/guide/posts/1-hello,world！这是一个新的开始' },
          ]
        },
      ],
      '/wiki/': [
        {
          text: '快速开始',
          items: [
            { text: '开始wiki', link: '/wiki/index' },
          ]
        },
        {
          text: '目录',
          items: [
            { text: 'docker', link: '/wiki/posts/docker' },
            { text: 'scss', link: '/wiki/posts/scss' },
          ]
        },
      ]
    },
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
