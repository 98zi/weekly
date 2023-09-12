

## ios手机端禁止网页缩放

给 head 加一个 meta 属性，适用于安卓和低版本的ios。

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```


## 监听js事件，很好用。

```js
document.addEventListener('gesturestart', function (event) {
  event.preventDefault()
})
```

## 底部安全距离问题

新版ios底部有一个黑条，正常会被遮挡，需要加一个安全距离设置，加给吸附在底部的标签。

```css
padding-bottom:constant(safe-area-inset-bottom);
padding-bottom:env(safe-area-inset-bottom);
```

## iOS和安卓下相同font-size显示字体大小不一致的解决办法

原因：因为 webkit 内核的浏览器会根据容器的宽来做“适应”的字体大小的计算。

移动端我们建议使用自适应rem字体单位。
使用全局css样式禁用Webkit内核浏览器的文字大小调整功能，以实际大小显示。

```css
html{ -webkit-text-size-adjust: none;}
```

## 取消自动识别手机号

```html
  <meta name="format-detection" content="telephone=no" />
```


