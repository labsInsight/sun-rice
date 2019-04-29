## Radio 单选框

### 使用指南

```javascript
import { SunRadio, SunRadioGroup } from 'sun-rice'

Vue.use(SunRadio).use(SunRadioGroup)
```

### 代码演示

#### 基础用法

通过`v-model`绑定值当前选中项的 name，通过`options`绑定选项,通过`@change`绑定事件

```html
<sun-radio v-model="value1" :options="options1" @change="changeValue" />
```

```js
data() {
  return {
    value1: '',
    options1: ['选项A', '选项B', '选项C']
  }
},
methods: {
  changeValue(val) {
    console.log('value', val)
  }
}
```

#### 禁用状态

通过`disabled`控制禁用状态

```html
<sun-radio v-model="value2" :options="options2" />
```

```js
data() {
    return {
      value2: '',
      options2: [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ]
    }
  },
```

#### 右对齐

通过`align`设置右对齐

```html
<sun-radio align="right" v-model="value3" :options="options3" />
```

```js
data() {
    return {
      value3: '',
      options3: ['选项A', '选项B', '选项C']
    }
  },
```

### Radio API

| 参数     | 说明           | 类型      | 默认值  |
| -------- | -------------- | --------- | ------- |
| value     | 选中值     |  -  | - |
| options     | 选项数组     | `object` `array`  | - |
| align       | 对齐位置     | `string` | `left`, `right` | - |

### RadioGroup Event

| 事件名称 | 说明                     | 回调参数          |
| -------- | ------------------------ | ----------------- |
| change   | 当绑定值变化时触发的事件 | 当前选中项的 name |
