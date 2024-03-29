# 事件监听函数，以及事件的捕获和冒泡机制

---

事件一般是用于浏览器和用户操作之间的交互，当用户执行某些特殊的操作时，浏览器给予反应，触发绑定的事件，`事件流`，事件发生时会在元素节点和根节点之间按照约定的顺序传播，事件经过的所有节点都会受到事件的影响，这个传播过程被称为DOM事件流


## 函数事件

事件一般是用于浏览器和用户操作之间的交互，当用户执行某些特殊的操作时，浏览器给予反应，触发绑定的事件

`事件流`，事件发生时会在元素节点和根节点之间按照约定的顺序传播，事件经过的所有节点都会受到事件的影响，这个传播过程被称为DOM事件流

true是捕获，false是冒泡，默认为冒泡事件


## 1.addEventListener()－－添加事件监听函数

给元素添加一个事件，假如有多个事件，不会覆盖，会依次执行

```html
<div id="demo">dom</div>
<script>
    document.getElementById('demo').addEventListener("click", myfun)
    document.getElementById('demo').addEventListener("click", myfun1)

    function myfun() {
        console.log('事件监听函数')
    }

    function myfun1() {
        console.log('addEventListener')
    }
</script>
```

>注意：
>1.这里有一个细节，addEventListener()里面有两个参数，第一个表示触发的条件，第二个表示触发的事件
>正常情况下，第二个参数直接写函数名并且不加参数`()`，如果加了参数`()`则表示立即执行，不需要触发第一个参数要求的条件

>2.在这里绑定事件的时候，事件名不能和定义的变量名一样，否则无效

## 2.removeEventListener()－－移除事件监听函数

下面这个demo，当鼠标在div中移动的时候，出现随机数，点击按钮后，移除事件监听函数

```html
<!-- css -->
<style>
    #demo {
        width: 100px;
        height: 100px;
        border: 1px solid #000;
    }
</style>

<!-- html -->
<div id="demo"></div>
<input type="button" value="点击移除" onclick="remove()">
<div id="show"></div>

<!-- js -->
<script>
    document.getElementById('demo').addEventListener("mousemove", myfun)
    function myfun() {
        document.getElementById('show').innerHTML = Math.random()
    }

    function remove() {
        document.getElementById('demo').removeEventListener("mousemove", myfun)
    }
</script>
```


## 3.利用事件的捕获和冒泡做点事情

addEventListener()和removeEventListener()其实拥有三个参数，刚才说过了，第一个表示触发条件，第二个表示触发事件，第三个参数正常情况下可以省略，但是要知道它代表的意思

用布尔值来表示，true或者false，默认是false


* true表示在捕获阶段调用事件处理程序
* false表示在冒泡阶段调用事件处理程序

根据图片可以看出，捕获阶段要先于冒泡阶段，因此，true事件要先于flase事件触发，多个true事件按顺序触发，多个false事件，写在后面的先触发

>结论：写在前面的true事件 > 写在后面的true事件 > 写在后面的false事件 > 写在前面的false事件

因此，利用这个参数，可以控制同一个元素的不同事件触发的顺序

```html
<div id="out">
    <p>最外面</p>
    <div id="middle">
        <div id="inner">最里面</div>
    </div>
</div>

<!-- 第一种情况 -->
<script>
    var out = document.getElementById('out'); 
    var middle = document.getElementById('middle'); 
    var inner = document.getElementById('inner'); 
    //点击inner时，触发顺序为：inner-------middle------out
    out.addEventListener('click',function(){alert("我是最外面的");},false);   
    middle.addEventListener('click',function(){alert("我是中间的");},false);    
    inner.addEventListener('click',function(){alert("我是最里面的");},false); 
</script>

<!-- 第二种情况 -->
<script>
    var out = document.getElementById('out'); 
    var middle = document.getElementById('middle'); 
    var inner = document.getElementById('inner'); 
    //点击inner时，触发顺序为：out------middle-------inner
    out.addEventListener('click',function(){alert("我是最外面的");},true);   
    middle.addEventListener('click',function(){alert("我是中间的");},true);  
    inner.addEventListener('click',function(){alert("我是最里面的");},true); 
</script>

<!-- 第三种情况 -->
<script>
    var out = document.getElementById('out'); 
    var middle = document.getElementById('middle'); 
    var inner = document.getElementById('inner'); 
    //点击inner时，触发顺序为：out------inner-------middle
    out.addEventListener('click',function(){alert("我是最外面的");},true);   
    middle.addEventListener('click',function(){alert("我是中间的");},false);    
    inner.addEventListener('click',function(){alert("我是最里面的");},false);
</script>

<!-- 第四种情况 -->
<script>
    var out = document.getElementById('out'); 
    var middle = document.getElementById('middle'); 
    var inner = document.getElementById('inner'); 
    //点击inner时，触发顺序为：out-------middle------inner
    out.addEventListener('click',function(){alert("我是最外面的");},true);   
    middle.addEventListener('click',function(){alert("我是中间的");},true);  
    inner.addEventListener('click',function(){alert("我是最里面的");},false);
</script>

<!-- 第五种情况 -->
<script>
    var out = document.getElementById('out'); 
    var middle = document.getElementById('middle'); 
    var inner = document.getElementById('inner'); 
    //点击inner时，触发顺序为：middle-------inner------out
    out.addEventListener('click',function(){alert("我是最外面的");},false);   
    middle.addEventListener('click',function(){alert("我是中间的");},true);  
    inner.addEventListener('click',function(){alert("我是最里面的");},false);
</script>

<!-- 第六种情况 -->
<script>
    var out = document.getElementById('out'); 
    var middle = document.getElementById('middle'); 
    var inner = document.getElementById('inner'); 
    //点击inner时，触发顺序为：out-------inner------middle
    out.addEventListener('click',function(){alert("我是最外面的");},true);   
    middle.addEventListener('click',function(){alert("我是中间的");},false);    
    inner.addEventListener('click',function(){alert("我是最里面的");},true);
</script>
```

## 4.事件处理程序

1. HTML事件处理程序

```html
<button onclick="test()">测试</button>
<script>
    function test() {
        alert("HTML事件处理程序");
    }
</script>
```

>1.优点：事件处理程序中的代码，能够访问全局作用域中的任何变量
>2.缺点：时差问题、扩展的作用域链在不同浏览器中会导致不同结果、html代码与js代码高度耦合

2. DOM0级事件处理程序

```html
<button id="btn">测试</button>
<script>
    var btn = document.getElementById("btn");
    btn.onclick = function test() {
        alert("DOM0级事件处理程序");
    }
</script>
```

>1.优点：代码简单，浏览器兼容性好，解决了html代码和js代码的高度耦合问题
>2.缺点：一个元素只能绑定一个事件处理函数，只会在事件冒泡中运行

3. DOM2级事件处理程序

该级别的事件处理程序，运用的就是事件捕获和冒泡机制

```html
<button id="btn">测试</button>
<script>
    var btn = document.getElementById("btn");

    // 事件监听
    btn.addEventListener("click", function() {
        alert("DOM2级事件处理程序，我在捕获阶段执行");
    }, true);

    btn.addEventListener("click", function() {
        alert("DOM2级事件处理程序，我在冒泡阶段执行");
    }, false);

    // 移除事件监听
    var fun = function() {
        alert("我要被移除了");
    }
    btn.addEventListener("click", fun, false);
    btn.removeEventListener("click", fun, false);
</script>
```

>1.优点：同时支持事件处理的捕获和冒泡阶段，并且一个元素可以绑定多个处理函数
>2.缺点：IE不支持

