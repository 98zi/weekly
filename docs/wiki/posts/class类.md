# class 类

---

constructor 是一种用于创建和初始化class创建的对象的特殊方法。

```js
class Demo {
  constructor(a, b, c) {
    console.log(a, c);
  }
}

new Demo(1, 2, 3);  // 1 3
```