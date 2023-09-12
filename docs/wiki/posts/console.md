
控制台输出好看的 console.log

```js
console.log(
`%c Anghunk %c 2.0 `,
'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
);
```

console.clear(); 清除控制中所有的报错。

---

先定义一个变量，使用 `console.table(data)` 方法打印。
```js
const data = [
  { "Name": "Alice", "Age": 23, "City": "New York" },
  { "Name": "Bob", "Age": 35, "City": "San Francisco" },
  { "Name": "Charlie", "Age": 18, "City": "London" },
  { "Name": "David", "Age": 29, "City": "Paris" },
];

console.table(data);
```

![](https://article.biliimg.com/bfs/article/0be25d25b13d6e59b5384a1aadb8227f26ffd28a.png)