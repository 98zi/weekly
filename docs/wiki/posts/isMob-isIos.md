
判断是否是手机端
```js
function isMob() {
  if ($(window).width() <= 1024) {
    return true;
  } else {
    return false;
  }
}
```

判断是否是 ios 系统
```js
function isIos() {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}
```