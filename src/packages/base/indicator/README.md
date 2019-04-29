## Indicator 加载

### 使用指南

```javascript
import SunIndicator from 'sun-rice'

Vue.use(SunIndicator)
```

### 代码演示

#### 基础方法

```js
// 打开方式
SunIndicator.open()
SunIndicator.open({ type: 'fading-circle' })
SunIndicator.open('加载中...')
SunIndicator.open({
  type: 'fading-circle',
  text: '加载中',
  size: 40,
  color: '#2c88ff'
})
// 关闭方式
SunIndicator.close()
```

#### 全局方法

引入 Indicator 组件后，会自动在 Vue 的 prototype 上挂载 $Indicator 方法，在所有组件内部都可以直接调用此方法

```js
export default {
  mounted() {
    this.$Indicator.open()
    this.$Indicator.close()
  }
}
```

### API

| 参数  | 说明                                                                   | 类型     | 默认值  |
| ----- | ---------------------------------------------------------------------- | -------- | ------- |
| text  | 文本                                                                   | `String` | `''`    |
| color | 颜色，`色值`                                                           | `String` | `#fff`  |
| type  | 类型，可选值为 `snake` `double-bounce` `triple-bounce` `fading-circle` | `String` | `snake` |
| size  | 大小，单位为 px                                                        | `Number` | `32`    |
