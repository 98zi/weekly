import sidebar from './configs/sidebar';
import nav from './configs/nav';

const taskLists = require('markdown-it-task-checkbox')

export default {
  title: '不如吃茶去',
  dist: '/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    config: (md) => {
      md.use(taskLists, { 
        disabled: true,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      })
    }
  },
  themeConfig: {
    siteTitle: '不如吃茶去💡',
    sidebar,
    nav,
    editLink: {
      pattern: 'https://github.com/98zi/blog/blob/main/docs/:path',
      text: '在 GitHub 上评论本文'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/98zi/blog' },
      { icon: 'twitter', link: 'https://twitter.com/Anghunk520' },
      { icon: 'discord', link: 'https://discord.gg/7u7kGgJhXF' },
    ],
    lastUpdated: false,
    lastUpdatedText: '最后更新',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 - 2023 子舒'
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
