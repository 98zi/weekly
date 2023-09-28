import sidebar from './configs/sidebar';
import nav from './configs/nav';

export default {
  title: '不如吃茶去',
  dist: '/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: '不如吃茶去💡',
    sidebar,
    nav,
    editLink: {
      pattern: 'https://github.com/98zi/weekly/blob/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: false,
    lastUpdatedText: '最后更新',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 - 2023'
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
