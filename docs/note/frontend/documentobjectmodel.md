# DOM－－文档对象模型

---

DOM中文名文档对象模型，英文名Document Object Model，我们简称为DOM，是针对html和xml文档的一种API，将html以一种树状结构呈现出来，可以更直观去研究文档结构，我们将这种树状文档结构称为－－DOM树，或者节点树，一样的概念



## 一、什么是DOM？

DOM中文名文档对象模型，英文名Document Object Model，我们简称为DOM，是针对html和xml文档的一种API，将html以一种树状结构呈现出来，可以更直观去研究文档结构，我们将这种树状文档结构称为－－DOM树，或者节点树，一样的概念

js通过dom节点，可以对文档的html标签，属性，css样式，以及具体的内容做出修改，并对页面中的所有事件进行响应


## 二、节点树

## 1.节点类型

1. 文档节点－－Document
2. 标签节点－－Element
3. 文本节点－－Text
4. 注释节点－－Comment
5. 属性节点－－Attr

## 2. 属性

1. 节点类型－－nodeType
2. 节点名称－－nodeName
3. 节点值－－nodeValue
4. 子节点－－childNodes
5. 父节点－－parentNodes
6. 上一个节点－－previousSibling
7. 下一个节点－－nextSibling
8. 第一个子节点－－firstChild
9. 最后一个子节点－－lastChild

## 3.文档节点－－document

### (1) 获取

1. getElementById()－－通过id获取元素

```html
<div id="demo">通过id获取元素</div>

<script>
    var demo = document.getElementById('demo');
    demo.onclick = function() {
        console.log('通过id获取元素')
    }
</script>

<!-- 点击id为demo的元素，控制台输出'通过id获取元素' -->
```

2. getElementsByName()－－通过name获取元素

```html
<input type="text" name="int" value="通过name获取元素1">
<input type="text" name="int" value="通过name获取元素2">

<script>
    var int = document.getElementsByName('int');
    for(var i = 0;i < int.length; i++) {
        console.log(int[i].value);
    }
</script>

<!-- 控制台输出name为int的元素的value值 -->
```

3. getElementsByTagName()－－通过标签名获取元素

```html
<div>通过标签名获取元素1</div>
<div>通过标签名获取元素2</div>

<script>
    var div = document.getElementsByTagName('div');
    for(var i = 0;i < div.length; i++) {
        console.log(div[i].innerHTML)
    }
</script>

<!-- 控制台输出标签名为div的元素的文本内容 -->
```

4. getElementsByClassName()－－通过class获取元素

```html
<div class="demo">通过class获取元素1</div>
<div class="demo">通过class获取元素2</div>

<script>
    var demo = document.getElementsByClassName('demo');
    for(var i = 0;i < demo.length; i++) {
        console.log(demo[i].innerHTML)
    }
</script>

<!-- 控制台输出class为demo的元素的文本内容 -->
```

5. querySelector()－－通过选择器获取元素

querySelector()括号里面要跟上符号，`class就写.`，`id就写#`，`标签直接写标签名TagName`

```html
<div>通过选择器获取标签名</div>
<div class="div">通过选择器获取class</div>
<div id="div">通过选择器获取id</div>

<script>
    var divtag = document.querySelector('div');
    var divclass = document.querySelector('.div');
    var divid = document.querySelector('#div');

    divtag.onclick = function() {
        console.log('通过选择器获取标签名')
    };
    // 点击标签div，控制台输出"通过选择器获取标签名"

    divclass.onclick = function() {
        console.log('通过选择器获取class')
    };
    // 点击class为div，控制台输出"通过选择器获取class"

    divid.onclick = function() {
        console.log('通过选择器获取id')
    };
    // 点击id为div，控制台输出"通过选择器获取id"
</script>
```

6. querySelectorAll()－－通过选择器获取元素集合

获取的是一个数组集合


```html
<input type="text" value="int1">
<input type="text" value="int2">
<input type="text" value="int3">

<script>
    var int = document.querySelectorAll('input')
    for(i = 0; i < int.length; i++) {
        console.log(int[i].value)
    }
</script>

<!-- 浏览器依次打印出`int1`,`int2`,`int3` -->
```

### (2) 创建

1. createElement()－－创建元素（标签）节点

```html
<ul id="ul"></ul>

<script>
    var ul = document.getElementById('ul');
    ul.appendChild(document.createElement('li'))
</script>
```

可以看到，ul下面已经生成了一个li标签

1. createTextNode()－－创建文本节点

```html
<ul id="ul"></ul>

<script>
    var ul = document.getElementById('ul');
    var li = ul.appendChild(document.createElement('li'));
    var node = document.createTextNode('我是li');
    li.appendChild(node);
</script>
```

li标签中生成了一段文本

1. createAttribute()－－创建属性节点

```html
<input type="text">

<script>
    var int = document.getElementsByTagName('input')[0];
    var value = document.createAttribute('value');
    value.nodeValue = '通过创建属性节点生成';
    int.setAttributeNode(value);
</script>
```

可以看到value属性值被成功创建

1. createComment()－－创建注释节点

```html
<div id="div">创建一个注释节点</div>

<script>
    var div = document.getElementById('div');
    var comment = document.createComment('添加一个注释节点');
    div.appendChild(comment);
</script>
```

f12查看源码，可以看到div生成一行注释

1. createDocumentFragment()－－创建文档片段

文档片段的作用，就相当于是添加的所有的节点的父元素

>1.假如没有createDocumentFragment，添加了很多节点，也可以在dom上呈现，但是每次添加的时候都会调用一次appendChild()方法，产生很多次页面渲染，显得比较臃肿
>2.把多次添加的节点放在一个createDocumentFragment节点里面，页面只会调用一次就可以把所有的节点都渲染了

6. createEvent()－－创建事件对象

7. addEventListener()－－添加事件监听函数
8. removeEventListener()－－移除事件监听函数


<a href="../20201117-eventlistener" target="_blank">事件监听函数详解</a>

9. dispatchEvent()－－触发事件

### 操作css

```html
<div id="demo">dom</div>
<script>
    // 直接通过'.'来操作style
    var demo= document.getElementById('demo');
    demo.style.color = 'red';

    // 通过setAttribute()来创建属性节点
    demo.setAttribute('style','background-color: green');

    // 通过style的cssText属性
    demo.style.cssText = "border: 10px solid black";
</script>
```

## 4.元素节点(element对象)

**有关innerHTML, innerText, outerHTML, outerText的区别**

一个是元素内容，一个是文本内容

```html
<div id="div1">第一个div</div>
<div id="div2">第二个div</div>
<div id="div3">第三个div</div>
<div id="div4">第四个div</div>
<div id="div5"></div>
<div id="div6"></div>
<div id="div7"></div>
<div id="div8"></div>
<script>
    var div1 = document.getElementById('div1').innerHTML
    console.log(div1)   // 第一个div

    var div1 = document.getElementById('div1').outerHTML
    console.log(div1)   // <div id="div1">第一个div</div>

    var div2 = document.getElementById('div2').innerText
    console.log(div2)   // 第二个div

    var div2 = document.getElementById('div2').outerText
    console.log(div2)   // 第二个div

    document.getElementById('div5').innerHTML = '<a>《第5个div》</a>'
    // 在原有的标签内增加内容，如果有标签会被识别

    document.getElementById('div6').outerHTML = '<a>《第6个div》</a>'
    // 原来的标签会被覆盖，新的文本中如果含有标签会自动生成，如果没有标签则直接以文本形式展示

    document.getElementById('div7').innerText = '<a>《第7个div》</a>'
    // 在原有的标签内增加内容，新标签不会被识别为标签元素，而是被当作文本内容直接写入原标签内

    document.getElementById('div8').outerText = '<a>《第8个div》</a>'
    // 原来的标签会被覆盖，新标签不会被识别为标签元素，而是直接被当作文本形式展示
</script>
```

### (1) 节点属性

1. childElementCount－－返回当前元素的子节点的个数

```html
<div id="demo">
    <a></a>
    <span></span>
    <p></p>
    <div></div>
</div>

<script>
    var demo = document.getElementById('demo')
    console.log(demo.childElementCount) // 4
</script>
```

2. firstElementChild－－返回当前元素的第一个子元素节点
lastElementChild－－返回当前元素的最后一个子元素节点

```html
<div id="demo">
    <a></a>
    <span></span>
    <p></p>
    <div></div>
</div>

<script>
    var demo = document.getElementById('demo')
    console.log(demo.firstElementChild) // <a></a>
    console.log(demo.lastElementChild)  // <div></div>
</script>
```

3. nextElementSibling－－返回当前元素的下一个兄弟元素节点
previousElementSibling－－返回当前元素的上一个兄弟元素节点

```html
<span></span>
<div id="demo"></div>
<p></p>

<script>
    var demo = document.getElementById('demo')
    console.log(demo.nextElementSibling)        // <p></p>
    console.log(demo.previousElementSibling)    // <span></span>
</script>
```

4. 返回当前元素所有的子节点

```html
<div id="demo">
    <span></span>
    <p></p>
    <a></a>
</div>


<script>
    var demo = document.getElementById('demo').children
    for(var i in demo) {
        console.log(demo[i])
    }
</script>
```

控制台查看返回结果


1. 返回所有子节点集合

```html
<div id="demo">
    <span></span>
    <p></p>
    <a id="demo1"></a>
</div>


<script>
    var demo = document.getElementById('demo').children
    for(var i in demo1.childNodes) {
        console.log(demo[i])
    }
</script>
```

### (2) 节点方法

1. appendChild－－插入子节点

```html
<div id="demo"></div>
<script>
    var demo = document.getElementById('demo')
    var node = document.createTextNode('插入一个子节点')
    demo.appendChild(node)
</script>  
```

f12可以看到，div被插入了一个节点

1. insertBefore(a, b)－－在指定位置插入节点

参数a表示要插入的内容，b表示定位，在b节点之前插入a节点

```html
<div id="demo"></div>
<script>
    var demo = document.getElementById('demo')
    var node = document.createTextNode('插入一个子节点')
    demo.appendChild(node)

    var hr = document.createElement('hr')
    demo.insertBefore(hr, node)
</script>  
```

可以看到，原来的文本节点之前，被添加了一个新的元素节点

1. replaceChild(a, b)－－替换节点

用参数a替换参数b，a表示新节点，b表示旧节点

```html
<div id="demo"></div>
<script>
    var demo = document.getElementById('demo')
    var node = document.createTextNode('插入一个子节点')
    demo.appendChild(node)

    var h3 = document.createElement('h3')
    var h3node = document.createTextNode('title标题')
    h3.appendChild(h3node)
    demo.replaceChild(h3, node)
</script>  
```
`h3`是新节点，`node`是旧节点，根据图片可以看到，b替换掉了a，成功上位

1. removeChild－－父节点删除子节点

```html
<div id="demo">
    <div id="son"></div>
</div>

<script>
    var demo = document.getElementById('demo')
    var son = document.getElementById('son')
    demo.removeChild(son)
</script>  
```

f12可以看到，id为son的元素节点，通过`demo.removeChild()`已经被删除了

1. removeAttribute－－删除属性节点

```html
<div id="demo" class="div"></div>

<script>
    var demo = document.getElementById('demo')
    demo.removeAttribute('class')
</script>  
```

class属性已经被删除了

1. 删除文本节点

```html
<div id="demo">文本</div>

<script>
    var demo = document.getElementById('demo')
    demo.removeChild(demo.childNodes[0])
</script>  
```

通过`demo.childNodesp[0]`获取demo的第一个节点，即文本节点，然后`removeChild`它，就删除了

1. isEqualNode－－判断两个元素是否`相等`
isSameNode－－判断两个元素是否`相同`

>两者分别代表`相等`和`相同`

(1) `isEqualNode`相等，指的是两个节点是否是同一类型，具有相等的属性（包括：nodeName, nodeValue...等等），还有相等的attributes,childNodes（相等的位置包含相同的值）
(2) `isSameNode`相同，指的是两个节点引用的是同一个对象

```html
<form action="#">
    <input type="button" />
</form>

<form action="#">
    <input type="button" />
</form>

<form action="#" id="o">
    <input type="button" />
</form>

<form action="#" id="o">
    <input type="text" />
</form>

<script>
    var forms = document.forms;

    var form1 = forms[0];
    var form2 = forms[1];
    var form3 = forms[2];
    var form4 = forms[3];
    var _form1 = document.querySelectorAll('form')[0];


    console.log(form1.isSameNode(form1))  //true  两个节点引用的对象都是第一个form
    console.log(form1.isSameNode(_form1)) //true  两个节点引用的对象都是第一个form
    console.log(form1.isSameNode(form2))  //false 两个节点引用的不是一个对象

    console.log(form1.isEqualNode(form2)) //true  两个节点具有完全等同属性
    console.log(form1.isEqualNode(form3)) //false form1中无等同的id属性
    console.log(form3.isEqualNode(form4))  //fasle form4的childNodes中的input为text类别，与form3不同
</script>
```

根据例子代码可以看出区别：

(1) `isSameNode`只有引用同一个对象时才相同，比如用两中方法调用同一个对象，再比较这两种方法，比来比去还是那个对象，所以相同
(2) 而`isEqualNode`比较两个对象的元素节点是否相等，只要两者一致就可以相等true


8. hasChildNodes()－－判断一个元素是否拥有子节点

判断`demo`是否拥有子节点，然后输出他的子节点

```html
<div id="demo">
    <!-- <a></a> -->
</div>

<script>
    var demo = document.getElementById('demo')
    console.log(demo.hasChildNodes())
    console.log(demo.childNodes)
</script>
```


1. contains(a)－－判断一个节点是否包含指定子节点（参数a表示要判断的子节点）

存在`id="a"`的元素，因此contains判断成功输出`true`，

不存在`id="b"`的元素，因此输出`false`

```html
<div id="demo">
    <a id="a"></a>
    <a></a>
</div>

<script>
    var demo = document.getElementById('demo')
    var a = document.getElementById('a')
    console.log(demo.contains(a))   // true

    var b = document.getElementById('b')
    console.log(demo.contains(b))   // false
</script>
```

## 5.属性节点(Attr对象)

```html
<input type="text" id="int">

<script>
    var int = document.getElementById('int')

    // 1.获取属性值
    console.log(int.getAttribute("type"))   
    // text
    
    // 2.获取属性节点
    console.log(int.getAttributeNode("type"))
    // type="text"
    
    // 3.设置属性值
    int.setAttribute("value", "input框")
    // <input type="text" id="int" value="input框">

    // 4.设置属性节点
    let name = document.createAttribute("name");
    name.nodeValue = "uname";
    int.setAttributeNode(name);
    console.log(int.getAttributeNode('name').value) 
    // <input type="text" id="int" value="input框" name="uname">

    // 5.删除属性节点
    console.log(int.removeAttribute('name'))
    // <input type="text" id="int" value="input框">

    // 6.判断是否存在属性
    console.log(int.hasAttributes())
    // true

    // 7.判断是否存在指定属性
    console.log(int.hasAttribute('value'))
    // true
</script>
```

>注意：`hasAttribute`和`hasAttributes`的区别
>`hasAttributes`判断是否存在属性，
>`hasAttribute`判断是否存在指定属性