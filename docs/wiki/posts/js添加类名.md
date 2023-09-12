
原生js给标签增加类名class

设置为新的

```js
document.getElementsByTagName('body')[0].className = 'snow-container';
```

在原来的后面加这个

```js
document.getElementsByTagName('body')[0].className += 'snow-container';
```

与第一个等价

```js
document.getElementsByTagName('body')[0].classList.add
```
