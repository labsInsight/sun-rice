### 使用指南

```javascript
import SuncareerPicker from 'sun-rice'

Vue.use(SuncareerPicker)
```

### 代码演示

#### 基础用法

```html
<sun-career-picker
  v-model="value"
  title="职业"
  :keyConfig="keyConfig"
  :options="josn"
  @finish="finishPicker"
></sun-career-picker>
```

```js
data() {
    return {
      value: '',
      keyConfig: [
        {
          key: 'bigClass',
          name: '大类'
        },
        {
          key: 'centerClass',
          name: '中类'
        },
        {
          key: 'smallClass',
          name: '小类'
        },
        {
          key: 'careerClass',
          name: '职业描述'
        }
      ],
      josn: {},
    }
  },
```

### API

| 参数      | 说明                                                | 类型      | 默认值  |
| --------- | --------------------------------------------------- | --------- | ------- |
| v-model   | 当前选中的职业`code`                                | `String`  | -       |
| title     | 标题                                                | `String`  | -       |
| keyConfig | 传入的 json 数据的配置项，指定类别与其绑定的 key 名 | `Array`   | -       |
| options   | 需要传入的职业数据 json                             | `Json`    | -       |
| disabled  | 是否禁用                                            | `Boolean` | `false` |

### Event

| 事件        | 说明             | 回调参数             |
| ----------- | ---------------- | -------------------- |
| finish      | 选择完成时的回调 | 返回选择职业的`code` |
| onCellClick | 点击 cell 时触发 |                      |
