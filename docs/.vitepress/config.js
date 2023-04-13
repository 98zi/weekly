export default {
  title: 'weekly',
  dest: '/dist',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '@lovezsh/weekly',
    nav: [
      { text: '周刊', link: '/guide/index' },
    ],
    sidebar: [
      { text: '作者说', link: '/guide/index' },
      {
        text: '历史周刊',
        items: [
          { text: '#10 一款极简开源的输入法', link: '/posts/10' },
          { text: '#9 openai 封禁了一批账号', link: '/posts/9' },
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
      pattern: 'https://github.com/lovezsh/weekly/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdatedText: '最后更新',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present lovezsh'
    }
  }
}
