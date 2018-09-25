# tru-image

> 基于vue的自适应图片组件，根据设定的图片宽高，将长边进行裁剪

## 直接引用

在html里引入tru-image.js，

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="node_modules/tru-image/dist/tru-image.js"></script>
</head>
<body>
    <div id="app">
        <div style="position: relative;width: 200px;height: 200px;">
            <tru-image src="http://img1.imgtn.bdimg.com/it/u=318364999,3403550580&fm=26&gp=0.jpg"></tru-image>
        </div>
    </div>
</body>
<script>
    var app=new Vue({
        el:'#app'
    })
</script>
</html>
```

## 安装
```$xslt
npm install --save tru-image
```
```javascript
import truImage from 'tru-image'
Vue.use(truImage);
```

## 使用

使用<tru-image></tru-image>标签，但是必须要在外部包裹一层有position属性的标签，该组件过根据该外部标签的宽高进行自动裁剪，显示图片中心的区域

```$html
<div style="position: relative;width: 200px;height: 200px;">
    <tru-image src="http://img1.imgtn.bdimg.com/it/u=318364999,3403550580&fm=26&gp=0.jpg"></tru-image>
</div>
```
