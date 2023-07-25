export default {
  title: 'weekly',
  dest: '/dist',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: '@lovezsh/weekly',
    nav: [
      { text: '周刊', link: '/guide/index' },
      { text: '投稿', link: 'https://github.com/lovezsh/weekly/issues' },
      { text: '博客', link: 'https://zburu.com' },
      { text: 'Github', link: 'https://github.com/lovezsh/weekly/' },
    ],
    sidebar: [
      { text: '快速开始', link: '/guide/index' },
      {
        text: '发布历史',
        items: [
          { text: '#15', link: '/posts/15' },
          { text: '#14 Github工具', link: '/posts/14-Github工具' },
          { text: '#13 热爱生活和未来', link: '/posts/13-热爱生活和未来' },
          { text: '#12 提升chatGPT使用体验', link: '/posts/12-提升chatGPT使用体验' },
          { text: '#11 追求技术实用主义', link: '/posts/11-追求技术实用主义' },
          { text: '#10 一款极简开源的输入法', link: '/posts/10-一款极简开源的输入法' },
          { text: '#9 openai封禁了一批账号', link: '/posts/9-openai封禁了一批账号' },
          { text: '#8 一个ChatGPT应用平台', link: '/posts/8-一个ChatGPT应用平台' },
          { text: '#7 一个Notion风格的编辑器', link: '/posts/7-一个Notion风格的编辑器' },
          { text: '#6 使用Notion搭建网站的方案', link: '/posts/6-使用Notion搭建网站的方案' },
          { text: '#5 使用css写出精致的UI小组件', link: '/posts/5-使用css写出精致的UI小组件' },
          { text: '#4 chatGPT3.5API发布', link: '/posts/4-chatGPT3.5API发布' },
          { text: '#3 建站能用到的免费工具', link: '/posts/3-建站能用到的免费工具' },
          { text: '#2 如何使用本项目搭建网站？', link: '/posts/2-如何使用本项目搭建网站？' },
          { text: '#1 hello,world！这是一个新的开始', link: '/posts/1-hello,world！这是一个新的开始' },
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
