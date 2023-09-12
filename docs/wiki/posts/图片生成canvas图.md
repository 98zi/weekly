
```html
<canvas id="canvas" height="800" width="800"></canvas>

<script>
  const img = new Image();
  img.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0)
  }
  img.src ='https://img.zburu.com/favicon.png';
</script>
```
