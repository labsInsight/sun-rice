## Swipe 轮播

### 使用指南
``` javascript
import { SunSwipeItem, SunSwipe } from 'sun-rice';

Vue.use(SunSwipeItem).use(SunSwipe);
```

### 代码演示

#### 基础用法
通过`autoplay`属性设置自动轮播间隔

```html
<s-swipe :autoplay="3000">
  <s-swipe-item>1</s-swipe-item>
  <s-swipe-item>2</s-swipe-item>
  <s-swipe-item>3</s-swipe-item>
  <s-swipe-item>4</s-swipe-item>
</s-swipe>
```

#### 图片懒加载
配合 [Lazyload](#/zh-CN/lazyload) 组件实现图片懒加载

```html
<s-swipe :autoplay="3000">
  <s-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </s-swipe-item>
</s-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

#### 监听 change 事件

```html
<s-swipe @change="onChange">
  <s-swipe-item>1</s-swipe-item>
  <s-swipe-item>2</s-swipe-item>
  <s-swipe-item>3</s-swipe-item>
  <s-swipe-item>4</s-swipe-item>
</s-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    }
  }
}
```

#### 纵向滚动

```html
<s-swipe :autoplay="3000" vertical>
  <s-swipe-item>1</s-swipe-item>
  <s-swipe-item>2</s-swipe-item>
  <s-swipe-item>3</s-swipe-item>
  <s-swipe-item>4</s-swipe-item>
</s-swipe>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| autoplay | 自动轮播间隔，单位为 ms | `Number` | `3000` |
| duration | 动画时长，单位为 ms | `Number` | `500` |
| loop | 是否开启循环播放 | `Boolean` | `true` |
| vertical | 是否为纵向滚动 | `Boolean` | `false` |
| touchable | 是否可以通过手势滑动 | `Boolean` | `true` |
| show-indicators | 是否显示指示器 | `Boolean` | `true` |
| initial-swipe | 初始位置，从 0 开始算 | `Number` | `0` |

### 事件

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### 方法

通过 ref 可以获取到 swipe 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| swipeTo | index: 目标位置的索引 | void | 滚动到目标位置 |
