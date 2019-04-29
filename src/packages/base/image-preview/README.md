## ImagePreview 图片预览

### 使用指南

`ImagePreview`和其他组件不同，不是通过 HTML 结构的方式来使用，而是通过函数调用的方式。使用前需要先引入它。

```js
import SunImagePreview from 'sun-rice'

Vue.use(SunImagePreview)
```

### 代码演示

#### 基础用法

```javascript
SunImagePreview(['https://img.yzcdn.cn/1.jpg', 'https://img.yzcdn.cn/2.jpg'])
```

#### 指定初始位置

```javascript
SunImagePreview(['https://img.yzcdn.cn/1.jpg', 'https://img.yzcdn.cn/2.jpg'], 1)
```

#### 手动关闭

```javascript
const instance = SunImagePreview([
  'https://img.yzcdn.cn/1.jpg',
  'https://img.yzcdn.cn/2.jpg'
])

setTimeout(() => {
  instance.close()
}, 1000)
```

#### 全局方法

引入 imagePreview 组件后，会自动在 Vue 的 prototype 上挂载 $imagePreview 方法，在所有组件内部都可以直接调用此方法

```js
export default {
  mounted() {
    this.$imagePreview(['https://img.yzcdn.cn/1.jpg'], 1)
  }
}
```

### 方法参数

| 参数名        | 说明                 | 类型     |
| ------------- | -------------------- | -------- |
| imageUrls     | 需要预览的图片       | `Array`  |
| startPosition | 图片预览起始位置索引 | `Number` |
