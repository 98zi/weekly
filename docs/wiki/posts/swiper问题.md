


## 跳转
​`swiper.slideTo`​ 可以直接跳转到对应序号的轮播。

```js
var url = window.location.href;

// 点击对应锚点的首页logo
if (url == 'http://www.ljydseo.com/fwpp#1') {
  var index = 0
};
if (url == 'http://www.ljydseo.com/fwpp#2') {
  var index = 1
};
if (url == 'http://www.ljydseo.com/fwpp#3') {
  var index = 2
};

swiper.slideTo(index, 100, false);

```

## 在tab选项卡模式下，swiper不能生效

```js
observer: true,//修改swiper自己或子元素时，自动初始化swiper
observeParents: true  //修改swiper的父元素时，自动初始化swiper
```

## swiper跑马灯效果
```js
  var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
```

```css
.swiper  .swiper-wrapper {
	-webkit-transition-timing-function: linear !important;
	-moz-transition-timing-function: linear !important;
	-ms-transition-timing-function: linear !important;
	-o-transition-timing-function: linear !important;
	transition-timing-function: linear !important;
}
```

## typeof 判断swiper是否存在
```js
  if (typeof Swiper !== 'undefined') {
    var pagevideo = new Swiper("#pagevideo", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".video-button-next",
        prevEl: ".video-button-prev",
      },
    });
  }
```