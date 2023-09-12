

## 手机端点击链接出现背景
```css
html { -webkit-tap-highlight-color: rgba(0, 0, 0, 0);  }
```

## background 渐变
```css
background-image: linear-gradient(#7ca9ff, #f3f7fb);
background-image: linear-gradient(to right, #e66465 , #9198e5); 
```

## 单行溢出隐藏/多行溢出隐藏
```css
div{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

div {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

## 禁止div中的文字选中效果
```css
div{
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
```

## html滚动条自定义样式
```css
::-webkit-scrollbar {
  width: 10px;
  height: 16px;
  background: #fff;
}

::-webkit-scrollbar-track {
  padding: 0 4px;
  border-radius: 10px;
  margin-right: 10px;
  background: #e8eaed;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  margin-right: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background: #969696;
}
```
