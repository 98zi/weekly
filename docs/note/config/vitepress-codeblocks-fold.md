# 给 vitepress 代码块添加折叠功能

---

Github 仓库: https://github.com/T-miracle/vitepress-plugin-codeblocks-fold

## 1.安装

```shell
# npm 
npm i vitepress-plugin-codeblocks-fold
# yarn
yarn add vitepress-plugin-codeblocks-fold
```

## 2.使用

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // 导入方法
import 'vitepress-plugin-codeblocks-fold/style/index.scss'; // 导入样式

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = useData();
        const route = useRoute();
        // 基础使用
        codeblocksFold({ route, frontmatter }, true, 400);
    }
};
```

`codeblocksFold()` 接收三个参数：

1. vitepressObj

这是一个对象，对象里面必须有两个值：路由和前言。

2. defaultAllFold

是否默认所有页面的代码块都设置成折叠状态，默认为 true；设置成 false 则默认不折叠。可以忽略不填。

3. height

代码块被折叠后的高度，默认为 400（单位px）。可以忽略不填。

## 3.扩展使用

单个.md文件可以设置前言

```markdown
---
cbf: [1,2,3]
---
```

该数组含义为：

当 `defaultAllFold` 设置为 `true` （即默认全部页面开启折叠）时，当前页面第 `1、2、3` 个代码块强制不开启折叠
当 `defaultAllFold` 设置为 `false` （即默认全部页面不开启折叠）时，当前页面第 `1、2、3` 个代码块强制开启折叠
`cbf` 还有两个参数：`true` 和 `false`

true 表示当前页面所有代码块开启折叠
false 表示当前页面所有代码块不开启折叠