
## 锚链接平滑滚动

```js
$(function () {
  $('.send a').click(function () {
    $('html,body').animate({ scrollTop: $('#toinquiry').offset().top - 30 }, 500);
  })
})
```

## 设置锚链接距离顶部的高度

```js
$('.send a').click(function () {
  $('html,body').animate({
    scrollTop: $('#toinquiry').offset().top - 40
  }, 500);
})
```

## 点击除了指定元素外其他元素事件的方法

```js
$('body').on('click',function (e) {
  if (($(e.target).attr('class') != 'mochu')) {
    console.log('除了 class 为 mochu 以外的所有元素都可以输出此段文字！');
  }
});
```