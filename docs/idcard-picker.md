## SunIdcardPicker 时间选择

时间选择组件通常与 [弹出层](#/zh-CN/popup) 组件配合使用

### 使用指南

```javascript
import SunIdcardPicker from 'sun-rice'

Vue.use(SunIdcardPicker)
```

### 代码演示

#### cell 用法

通过`v-model`绑定日期，格式为数组，单个日期的格式可以为`date`或者`string`

```html
<sun-idcard-picker
  title="身份证有效期"
  v-model="value"
  @confirm="onConfirm"
  @select="selected"
/>
```

```javascript
export default {
  data() {
    return {
      value: [new Date(), '2020-10-10']
    }
  }
}
```

### API

| 参数     | 说明           | 类型      | 默认值               |
| -------- | -------------- | --------- | -------------------- |
| v-model  | 组件的值       | `Array`   | -                    |
| min-date | 可选的最小日期 | `Date`    | 百年前的 1 月 1 日   |
| max-date | 可选的最大日期 | `Date`    | 百年后的 12 月 31 日 |
| disabled | 是否禁用       | `Boolean` | `false`              |
| title    | 顶部栏标题     | `String`  | -                    |

### Event

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当值变化时触发的事件     | 当前 value |
| confirm  | 点击完成按钮时触发的事件 | 当前 value |
| cancel   | 点击取消按钮时触发的事件 | -          |
