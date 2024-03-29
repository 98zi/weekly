# webpack 的核心概念和构建流程

## 1.webpack 的核心概念

1. **entry（入口）**：一个可执行模块或者库的入口。定义了打包后的入口文件。
2. **output（出口）**：指示 webpack 如何去输出，以及在哪里输出。
  path: 打包文件存放的绝对路径
  publicPath: 网站运行时的访问路径
  filename: 打包后的文件名
3. **module（模块）**：在 webpack 里，一切皆模块，一个模块对应一个文件。webpack 会从配置的 entry 中开始递归找出所有依赖的模块。
4. **chunk（代码块）**：一个 `chunk` 由多个 `模块` 组合而成。可以将可执行的模块和他所依赖的模块组合成一个 chunk ，这就是打包。
5. **loader（模块转换器）**：用于把一个模块原内容按照需求转换成新的内容。例如：es6 转换为 es5，scss 转换为 css 等。
6. **plugin（扩展）**：扩展webpack功能的插件。在webpack构建的生命周期节点上加入扩展hook，添加功能。

## 2.webpack 构建流程

1. **初始化参数**：解析 webpack 的配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数，形成最后的配置结果。
2. **开始编译**：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译。
3. **确定入口**：其配置的 entry 入口，开始解析文件构建的 AST 语法树，找出依赖，递归下去。
4. **编译模块**：根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤知道所有入口依赖的文件都经过了本步骤的处理。
5. **完成模块编译并输出**：递归完后，得到每个文件结果，包含了每个模块及她们之间的依赖关系，根据 entry 配置生成代码块 chunk 。
6. **输出完成**：输出所有的 chunk 到文件系统。

## 3.有哪些常见的 loader ？

1. babel-loader：把es6转成es5；
2. css-loader：加载css，支持模块化，压缩，文件导入等特性；
3. style-loader：把css代码注入到js中，通过dom操作去加载css；
4. eslint-loader：通过Eslint检查js代码；
5. image-loader：加载并且压缩图片晚间；
6. file-loader：文件输出到一个文件夹中，在代码中通过相对url去引用输出的文件；
7. url-loader：和file-loader类似，文件很小的时候可以base64方式吧文件内容注入到代码中。
8. source-map-loader：加载额外的source map文件，方便调试。

## 4.业务场景和对应解决方案

### 1.单页应用

一个单页应用需要配置一个entry指明执行入口，web-webpack-plugin里的WebPlugin可以自动的完成这些工作：webpack会为entry生成一个包含这个入口的所有依赖文件的chunk，但是还需要一个html来加载chunk生成的js，如果还提取出css需要HTML文件中引入提取的css。

一个简单的webpack配置文件例子：

```js
const { WebPlugin } = require('web-webpack-plugin');
module.exports = {
  entry: {
    app: './src/doc/index.js',
    home: './src/doc/home.js'
  },
  plugins: [
    // 一个WebPlugin对应生成一个html文件
    new WebPlugin({
      //输出的html文件名称
      filename: 'index.html',
      //这个html依赖的`entry`
      requires: ['app','home'],
    }),
  ],
};
```

>说明：require: ['app', 'home']指明这个html依赖哪些entry，entry生成的js和css会自动注入到html中。

还支持配置这些资源注入方式，支持如下属性：

1. _dist只有在生产环境中才引入的资源；
2. _dev只有在开发环境中才引入的资源；
3. _inline把资源的内容潜入到html中；
4. _ie只有IE浏览器才需要引入的资源。

这些属性可以通过在js里配置，看个简单例子：

```js
new WebPlugin({
    filename: 'index.html',
    requires: {
         app:{
              _dist:true,
              _inline:false,
         }
    },
}),
```

这些属性还可以在模板中设置，使用模板好处就是可以灵活的控制资源的注入点

```js
new WebPlugin({
      filename: 'index.html',
      template: './template.html',
}),
```

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <link rel="stylesheet" href="app?_inline">
    <script src="ie-polyfill?_ie"></script>
</head>
<body>
<div id="react-body"></div>
<script src="app"></script>
</body>
</html>
```

WebPlugin插件借鉴了fis3的思想，补足了webpack缺失的以HTML为入口的功能。想了解WebPlugin的更多功能，见文档。

### 2.一个项目管理多个单页面

一个项目中会包含多个单页应用，虽然多个单页面应用可以合成一个，但是这样做会导致用户没有访问的部分也加载了，如果项目中有很多的单页应用。为每一个单页应用配置一个entry和WebPlugin？如果又新增，又要新增webpack配置，这样做麻烦，这时候有一个插件web-webpack-plugin里的AutoWebPlugin方法可以解决这些问题。

```js
module.exports = {
    plugins: [
        // 所有页面的入口目录
        new AutoWebPlugin('./src/'),
    ]
};
```

**分析：**
1. `AutoWebPlugin`会把./src/目录下所有每个文件夹作为一个单页页面的入口，自动为所有的页面入口配置一个 `WebPlugin` 输出对应的html。
2. 要新增一个页面就在 `./src/` 下新建一个文件夹包含这个单页应用所依赖的代码，`AutoWebPlugin` 自动生成一个名叫文件夹名称的html文件。


### 3.代码分隔优化

一个好的代码分割对浏览器首屏效果提升很大。

**最常见的react体系：**

1. 先抽出基础库react react-dom redux react-redux到一个单独的文件而不是和其它文件放在一起打包为一个文件，这样做的好处是只要你不升级他们的版本这个文件永远不会被刷新。如果你把这些基础库和业务代码打包在一个文件里每次改动业务代码都会导致文件hash值变化从而导致缓存失效浏览器重复下载这些包含基础库的代码。所以把基础库打包成一个文件。

```js
// vender.js 文件抽离基础库到单独的一个文件里防止跟随业务代码被刷新
// 所有页面都依赖的第三方库
// react基础
import 'react';
import 'react-dom';
import 'react-redux';
// redux基础
import 'redux';
import 'redux-thunk';
// webpack配置
{
  entry: {
    vendor: './path/to/vendor.js',
  },
}
```

2. 通过CommonsChunkPlugin可以提取出多个代码块都依赖的代码形成一个单独的chunk。在应用有多个页面的场景下提取出所有页面公共的代码减少单个页面的代码，在不同页面之间切换时所有页面公共的代码之前被加载过而不必重新加载。所以通过CommonsChunkPlugin可以提取出多个代码块都依赖的代码形成一个单独的chunk。

### 4.构建服务端渲染

服务端渲染的代码要运行在nodejs环境，和浏览器不同的是，服务端渲染代码需要采用commonjs规范同时不应该包含除js之外的文件比如css。

webpack配置如下：

```js
module.exports = {
  target: 'node',
  entry: {
    'server_render': './src/server_render',
  },
  output: {
    filename: './dist/server/[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css|pdf)$/,
        loader: 'ignore-loader',
      },
    ]
  },
};
```

**分析一下：**
1. `target: 'node'` 指明构建出代码要运行在node环境中。
2. `libraryTarget: 'commonjs2'` 指明输出的代码要是 commonjs 规范。
3. `{test: /\.(scss|css|pdf)$/,loader: 'ignore-loader'}` 是为了防止不能在node里执行服务端渲染也用不上的文件被打包进去。

 
### 5.fis3迁移到webpack

fis3和webpack有很多相似地方也有不同的地方，相似地方：都采用commonjs规范，不同地方：导入css这些非js资源的方式。

fis3通过@require './index.scss'，而webpack是通过require('./index.scss')。

如果想把fis3平滑迁移到webpack，可以使用comment-require-loader。

比如：你想在webpack构建是使用采用了fis3方式的imui模块

```js
loaders:[{
     test: /\.js$/,
     loaders: ['comment-require-loader'],
     include: [path.resolve(__dirname, 'node_modules/imui'),]
}]
```

## 5.自定义webpack扩展

如果你在社区找不到你的应用场景的解决方案，那就需要自己动手了写loader或者plugin了。

在你编写自定义webpack扩展前你需要想明白到底是要做一个loader还是plugin呢？可以这样判断：

如果你的扩展是想对一个个单独的文件进行转换那么就编写loader剩下的都是plugin。

其中对文件进行转换可以是像：

1. babel-loader把es6转为es5；
2. file-loader把文件替换成对应的url；
3. raw-loader注入文本文件内容到代码中。

### 1.编写webpack loader

编写loader非常简单，以comment-require-loader为例：

```js
module.exports = function (content) {
    return replace(content);
};
```

loader的入口需要导出一个函数，这个函数要干的事情就是转换一个文件的内容。

函数接收的参数content是一个文件在转换前的字符串形式内容，需要返回一个新的字符串形式内容作为转换后的结果，所有通过模块化倒入的文件都会经过loader。从这里可以看出loader只能处理一个个单独的文件而不能处理代码块。可以参考官方文档。

### 2. 编写webpack plugin

plugin应用场景广泛，所以稍微复杂点。以end-webpack-plugin为例：

```js
class EndWebpackPlugin {

    constructor(doneCallback, failCallback) {
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }

    apply(compiler) {
        // 监听webpack生命周期里的事件，做相应的处理
        compiler.plugin('done', (stats) => {
            this.doneCallback(stats);
        });
        compiler.plugin('failed', (err) => {
            this.failCallback(err);
        });
    }
}

module.exports = EndWebpackPlugin;
```

loader的入口需要导出一个class，在new EndWebpackPlugin()的时候通过构造函数传入这个插件需要的参数，在webpack启动的时候会先实例化plugin，再调用plugin的apply方法，插件在apply函数里监听webpack生命周期里的事件，做相应的处理。

**webpack plugin的两个核心概念：**

1. compiler：从webpack启动到退出只存在一个Compiler，compiler存放着webpack的配置。
2. compilation：由于webpack的监听文件变化自动编译机制，compilation代表一次编译。

Compiler 和 Compilation 都会广播一系列事件。webpack生命周期里有非常多的事件。

以上只是一个最简单的demo，更复杂的可以查看 how to write a plugin或参考web-webpack-plugin。

>参考文章：https://www.cnblogs.com/chengxs/p/11022842.html