
Github: https://github.com/lovezsh/vanilla-lazyload2

基于 https://github.com/verlok/vanilla-lazyload 重新构建，修改了几个适合自己的特性。

示例: https://lovezsh.github.io/vanilla-lazyload2/

**cdn**
```html
https://cdn.staticaly.com/gh/lovezsh/vanilla-lazyload2@main/vanilla-lazyload.js
```

**调用实例**
```js
// 懒加载动画
function callback_loaded(el) {
  if (el.getAttribute('data-src')) {
    el.parentNode.classList.add('lazy-loaded');
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.lazy');
  if (typeof LazyLoad === 'function') {
    var lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazy',
      callback_loaded: callback_loaded
    });
    window.ll = lazyLoadInstance;
  }
});
```

**简单的loading效果**
```css
img.lazy{display:inline-block;opacity:0}
img.lazy,img.tst{transition:opacity .6s,transform .3s ease}
img.loaded{opacity:1}
img:not([src]){visibility:hidden}
.lazy-load{display:block;position:absolute;width:18px;height:18px;top:50%;left:50%;margin-top:-9px;margin-left:-9px;background-color:#ccc;animation:loading 1s linear infinite;border-radius:100%}
.lazy-wrap{display:block;position:relative;overflow:hidden}
.lazy-wrap::after{content:"";display:block;padding-bottom:100%}
.lazy-wrap.lazy-loaded .lazy-load{-webkit-animation:none;animation:none;display:none}
.lazy-wrap.lazy-loaded::after{padding-bottom:0}
@keyframes loading{0%{transform:scale(.2);opacity:1}
to{transform:scale(2);opacity:0}}
```