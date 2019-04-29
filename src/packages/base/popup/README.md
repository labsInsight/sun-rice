## Popup 弹出层

### 使用指南
``` javascript
import SunPopup from 'sun-rice';

Vue.use(SunPopup);
```

### 代码演示

#### 基础用法
`popup`默认从中间弹出

```html
<sun-popup v-model="show">内容</sun-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
};
```

#### 弹出位置
通过`position`属性设置 Popup 弹出位置

```html
<sun-popup v-model="show" position="top" :overlay="false">
  内容
</sun-popup>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前组件是否显示 | `Boolean` | `false` |
| overlay | 是否显示背景蒙层 | `Boolean` | `true` |
| lock-scroll | 是否锁定背景滚动 | `Boolean` | `true` |
| position | 可选值为 `top` `bottom` `right` `left` | `String` | - |
| overlay-class | 自定义蒙层 class | `String` | - |
| overlay-style | 自定义蒙层样式 | `Object` | - |
| close-on-click-overlay | 点击蒙层是否关闭 Popup | `Boolean` | `true` |
| transition | transition 名称，暂时只支持`popup-slide` | `String` | `popup-slide` |
| lazy-render | 是否在首次显示弹层时才渲染 DOM 节点 | `Boolean` | `true` |
| get-container | 指定弹出层挂载的 HTML 节点 | `() => HTMLElement` | - |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click-overlay | 点击蒙层时触发 | - |
