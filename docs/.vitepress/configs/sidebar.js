export default {
  // '/weekly/': Weekly(),
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
        { text: '第31 期 - 子舒周刊 23/12/14', link: '/weekly/31' },
        { text: '第30 期 - 子舒周刊 23/12/07', link: '/weekly/30' },
        { text: '第29 期 - 子舒周刊 23/11/30', link: '/weekly/29' },
        { text: '第28 期 - 子舒周刊 23/11/23', link: '/weekly/28' },
        { text: '第27 期 - 子舒周刊 23/11/16', link: '/weekly/27' },
        { text: '第26 期 - 子舒周刊 23/11/09', link: '/weekly/26' },
        { text: '第25 期 - 子舒周刊 23/11/02', link: '/weekly/25' },
        { text: '第24 期 - 子舒周刊 23/10/26', link: '/weekly/24' },
        { text: '第23 期 - 子舒周刊 23/10/19', link: '/weekly/23' },
        { text: '第22 期 - 子舒周刊 23/10/12', link: '/weekly/22' },
        { text: '第21 期 - 子舒周刊 23/10/03', link: '/weekly/21' },
        { text: '第20 期 - 子舒周刊 23/09/22', link: '/weekly/20' },
        { text: '第19 期 - 子舒周刊 23/06/26', link: '/weekly/19' },
        { text: '第18 期 - 子舒周刊 23/06/19', link: '/weekly/18' },
        { text: '第17 期 - 子舒周刊 23/06/12', link: '/weekly/17' },
        { text: '第16 期 - 子舒周刊 23/06/03', link: '/weekly/16' },
        { text: '第15 期 - 子舒周刊 23/05/26', link: '/weekly/15' },
        { text: '第14 期 - 子舒周刊 23/05/19', link: '/weekly/14' },
        { text: '第13 期 - 子舒周刊 23/05/12', link: '/weekly/13' },
        { text: '第12 期 - 子舒周刊 23/05/05', link: '/weekly/12' },
        { text: '第11 期 - 子舒周刊 23/04/29', link: '/weekly/12' },
        { text: '第10 期 - 子舒周刊 23/04/22', link: '/weekly/10' },
        { text: '第9 期 - 子舒周刊 23/04/15', link: '/weekly/9' },
        { text: '第8 期 - 子舒周刊 23/04/08', link: '/weekly/8' },
        { text: '第7 期 - 子舒周刊 23/04/02', link: '/weekly/7' },
        { text: '第6 期 - 子舒周刊 23/03/26', link: '/weekly/6' },
        { text: '第5 期 - 子舒周刊 23/03/19', link: '/weekly/5' },
        { text: '第4 期 - 子舒周刊 23/03/12', link: '/weekly/4' },
        { text: '第3 期 - 子舒周刊 23/03/05', link: '/weekly/3' },
        { text: '第2 期 - 子舒周刊 23/02/28', link: '/weekly/2' },
        { text: '第1 期 - 子舒周刊 23/02/21', link: '/weekly/1' },
      ]
    },
  ]
}

// 笔记
function Note() {
  return [
    { text: '学习笔记', link: '/note/index' },
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
      text: '插件配置',
      collapsed: false,
      items: [
        { text: 'hugo 配置', link: '/note/config/hugo' },
        { text: 'vitepress-giscus', link: '/note/config/vitepress-giscus' },
        { text: 'vitepress-折叠代码段', link: '/note/config/vitepress-codeblocks-fold' },
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
        { text: '6.删除有序数组中的重复项2', link: '/leetcode/6' },
        { text: '7.买卖股票的最佳时机2', link: '/leetcode/7' },
        { text: '8.罗马数字转整数', link: '/leetcode/8' },
        { text: '9.转轮数组', link: '/leetcode/9' },
      ]
    },
  ]
}
