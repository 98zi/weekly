export default [
  { text: '个人博客', link: '/blog/index' },
  { text: '周刊', link: '/weekly/index' },
  {
    text: '文档笔记',
    items: [
      {
        items: [
          { text: '学习笔记', link: '/note/index' },
          { text: '我的订阅', link: '/note/rss' },
        ]
      },
      { text: 'Leetcode 刷题', link: '/leetcode/index' },
    ]
  },
  { text: 'Wiki 知识库', link: '/wiki/index' },
  {
    text: '周边',
    items: [
      { text: '周刊投稿', link: 'https://github.com/98zi/blog/issues' },
      { text: '贡献', link: 'https://github.com/98zi/blog/blob/main/contributing.md' },
    ]
  },
]
