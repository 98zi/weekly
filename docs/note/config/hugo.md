# hugo 配置

永久链接配置值

```yml
[permalinks]
  posts = "/:year/:month/:title/"
```
 
以下是可在站点配置文件中的permalink定义中使用的值列表。所有对时间的引用都取决于内容的日期。

- :year 4位年
- :month 2位月
- :monthname 英文月
- :day 2位天
- :weekday 1位周 (Sunday = 0)
- :weekdayname 英文周
- :yearday 1到3位，今年中的第几天
- :section 所在目录
- :sections content到文件所有层次的目录
- :title 内容标题
- :slug 内容的slug
- :filename 文件名不带扩展名
