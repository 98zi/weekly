export default {
  '/blog/': [
    { text: '归档', link: '/blog/index' },
  ],
  '/weekly/': Weekly(),
  '/wiki/': Wiki(),
  '/note/': Note(),
  '/leetcode': Leetcode(),
}

// 周刊
function Weekly() {
  return [
    {
      text: '快速开始',
      items: [
        { text: '项目介绍', link: '/weekly/index' },
      ]
    },
    {
      text: '发布历史',
      collapsed: false,
      items: [
        { text: '#20 亚运灯光', link: '/weekly/posts/20-亚运灯光' },
        { text: '#19 九堡大桥', link: '/weekly/posts/19-九堡大桥' },
        { text: '#18 钱塘夜色', link: '/weekly/posts/18-钱塘夜色' },
        { text: '#17 音频播客新闻日志等推荐', link: '/weekly/posts/17-音频播客新闻日志等推荐' },
        { text: '#16 好用的图床管理工具', link: '/weekly/posts/16-好用的图床管理工具' },
        { text: '#15 提高生产力的脚本工具', link: '/weekly/posts/15-提高生产力的脚本工具' },
        { text: '#14 Github工具', link: '/weekly/posts/14-Github工具' },
        { text: '#13 热爱生活和未来', link: '/weekly/posts/13-热爱生活和未来' },
        { text: '#12 提升chatGPT使用体验', link: '/weekly/posts/12-提升chatGPT使用体验' },
        { text: '#11 追求技术实用主义', link: '/weekly/posts/11-追求技术实用主义' },
        { text: '#10 一款极简开源的输入法', link: '/weekly/posts/10-一款极简开源的输入法' },
        { text: '#9 openai封禁了一批账号', link: '/weekly/posts/9-openai封禁了一批账号' },
        { text: '#8 一个ChatGPT应用平台', link: '/weekly/posts/8-一个ChatGPT应用平台' },
        { text: '#7 一个Notion风格的编辑器', link: '/weekly/posts/7-一个Notion风格的编辑器' },
        { text: '#6 使用Notion搭建网站的方案', link: '/weekly/posts/6-使用Notion搭建网站的方案' },
        { text: '#5 使用css写出精致的UI小组件', link: '/weekly/posts/5-使用css写出精致的UI小组件' },
        { text: '#4 chatGPT3.5API发布', link: '/weekly/posts/4-chatGPT3.5API发布' },
        { text: '#3 建站能用到的免费工具', link: '/weekly/posts/3-建站能用到的免费工具' },
        { text: '#2 如何使用本项目搭建网站？', link: '/weekly/posts/2-如何使用本项目搭建网站？' },
        { text: '#1 hello,world！这是一个新的开始', link: '/weekly/posts/1-hello,world！这是一个新的开始' },
      ]
    },
  ]
}

// Wiki
function Wiki() { 
  return [
    {
      text: '快速开始',
      items: [
        { text: '介绍', link: '/wiki/index' },
      ]
    },
    {
      text: '目录',
      collapsed: true,
      items: [
        { text: 'dist-zip压缩程序', link: '/wiki/posts/dist-zip' },
        { text: 'chrome117版本隐藏所有标签按钮', link: '/wiki/posts/chrome117版本隐藏所有标签按钮' },
        { text: 'class类', link: '/wiki/posts/class类' },
        { text: '网址收藏', link: '/wiki/posts/网址收藏' },
        { text: '正则', link: '/wiki/posts/正则' },
        { text: 'scss', link: '/wiki/posts/scss' },
        { text: '点击复制功能', link: '/wiki/posts/点击复制功能' },
        { text: '二级导航手风琴', link: '/wiki/posts/二级导航手风琴' },
        { text: '计算时间差', link: '/wiki/posts/计算时间差' },
        { text: '浏览器', link: '/wiki/posts/浏览器' },
        { text: '生成随机颜色', link: '/wiki/posts/生成随机颜色' },
        { text: '使用正则检测邮箱格式', link: '/wiki/posts/使用正则检测邮箱格式' },
        { text: '图片高度与宽度保持一致', link: '/wiki/posts/图片高度与宽度保持一致' },
        { text: '图片滚动放大缩小拖拽', link: '/wiki/posts/图片滚动放大缩小拖拽' },
        { text: '图片生成canvas图', link: '/wiki/posts/图片生成canvas图' },
        { text: '原生事件', link: '/wiki/posts/原生事件' },
        { text: '自定义鼠标右键', link: '/wiki/posts/自定义鼠标右键' },
        { text: 'css常用代码', link: '/wiki/posts/css常用代码' },
        { text: 'console', link: '/wiki/posts/console' },
        { text: 'el-table', link: '/wiki/posts/el-table' },
        { text: 'ios', link: '/wiki/posts/ios' },
        { text: 'isMob-isIos', link: '/wiki/posts/isMob-isIos' },
        { text: 'jq相关方法', link: '/wiki/posts/jq相关方法' },
        { text: 'js添加类名', link: '/wiki/posts/js添加类名' },
        { text: 'swiper问题', link: '/wiki/posts/swiper问题' },
        { text: 'toast弹窗配置', link: '/wiki/posts/toast弹窗配置' },
        { text: 'vanilla-lazyload使用方法', link: '/wiki/posts/vanilla-lazyload使用方法' },
        { text: 'vue常用代码', link: '/wiki/posts/vue常用代码' },
      ]
    },
  ]
}

// 笔记
function Note() {
  return [
    { text: '学习笔记', link: '/note/index' },
    { text: '资源收藏', link: '/note/collection' },
    { text: '我的订阅', link: '/note/rss' },
    {
      text: '前端基础知识',
      collapsed: false,
      items: [
        { text: 'HTML事件属性--DOM', link: '/note/frontend/dom' },
        { text: 'js基本语法', link: '/note/frontend/jsbasicsyntax' },
        { text: '函数、变量和方法', link: '/note/frontend/jsfunction' },
        { text: '文档对象模型', link: '/note/frontend/documentobjectmodel' },
        { text: 'getElementBy和querySelector', link: '/note/frontend/getElementBy' },
        { text: '有关js函数，方法的一些补充总结', link: '/note/frontend/typeofdata' },
        { text: '事件监听函数，以及事件的捕获和冒泡机制', link: '/note/frontend/eventlistening' },
        { text: '在js中运算不能随便把value属性定义成变量', link: '/note/frontend/value' },
        { text: 'webpack 安装配置指令', link: '/note/frontend/webpack' },
        { text: 'webpack 的核心概念和构建流程', link: '/note/frontend/webpack_build' },
      ]
    },
    {
      text: 'Vue',
      collapsed: false,
      items: [
        { text: 'vue 相关资源', link: '/note/vue/index' },
        { text: 'VitePress 文档', link: '/note/vue/vitepress' },
        { text: 'vue使用cli脚手架构建项目工程', link: '/note/vue/vuecli' },
        { text: 'vue实例和模板语法', link: '/note/vue/vuelearn2' },
        { text: '生命周期', link: '/note/vue/vuelearn3' },
      ]
    },
    {
      text: 'Docker',
      collapsed: false,
      items: [
        { text: 'Docker 指令', link: '/note/docker/index' },
        { text: 'Memos 托管', link: '/note/docker/memos' },
      ]
    },
    {
      text: 'Node',
      collapsed: false,
      items: [
        { text: 'nvm', link: '/note/node/nvm' },
        { text: 'pm2', link: '/note/node/pm2' },
        { text: 'rimraf', link: '/note/node/rimraf' },
      ]
    },
    {
      text: '配置',
      collapsed: false,
      items: [
        { text: 'hugo 配置', link: '/note/config/hugo' },
      ]
    },
    {
      text: 'Python',
      collapsed: false,
      items: [
        { text: '批量替换文件名称', link: '/note/python/批量替换文件名称' },
      ]
    },
  ]
}

// Leetcode
function Leetcode() {
  return [
    { text: 'Leetcode', link: '/leetcode/index' },
    {
      text: '每日一题',
      collapsed: false,
      items: [
        { text: '1.合并两个有序数组', link: '/leetcode/1' },
        { text: '2.移除元素', link: '/leetcode/2' },
        { text: '3.删除有序数组中的重复项', link: '/leetcode/3' },
        { text: '4.多数元素', link: '/leetcode/4' },
        { text: '5.买卖股票的最佳时机', link: '/leetcode/5' },
      ]
    },
  ]
}