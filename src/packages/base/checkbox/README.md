## Checkbox 复选框

### 使用指南
``` javascript
import { SunCheckbox, SunCheckboxGroup } from 'sun-rice';

Vue.use(SunCheckbox).use(SunCheckboxGroup);
```

### 代码演示

#### 基础用法
通过`v-model`绑定 checkbox 的勾选状态

```html
<sun-checkbox v-model="checked">复选框</sun-checkbox>
```

#### 禁用状态

```html
<sun-checkbox v-model="checked" disabled>复选框</sun-checkbox>
```

#### 禁用状态+选中
```html
<sun-checkbox disabled v-model="checkbox3">选中+禁用</sun-checkbox>
```
```js
export default {
  data() {
    return {
      checkbox3: true
    };
  }
};
```

#### 禁用内容部分点击事件

```html
<sun-checkbox v-model="checked" label-disabled>复选框</sun-checkbox>
```

#### Checkbox 组

需要与`sun-checkbox-group`一起使用，选中值是一个数组，通过`v-model`绑定在`sun-checkbox-group`上，数组中的项即为选中的`Checkbox`的`name`属性设置的值

```html
<sun-checkbox-group v-model="result">
  <sun-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </sun-checkbox>
</sun-checkbox-group>
```

```javascript
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
};
```

#### 设置最大可选数

通过`max`属性控制最大可选数

```html
<sun-checkbox-group v-model="result" :max="2">
  <sun-checkbox
    v-for="(item, index) in list"
    :key="item"
    :name="item"
  >
    复选框 {{ item }}
  </sun-checkbox>
</sun-checkbox-group>
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件

```html
<sun-checkbox-group v-model="result">
  <sun-cell-group>
    <sun-cell v-for="item in list" :title="`复选框 ${item}`" :key="item">
      <sun-checkbox :name="item" />
    </sun-cell>
  </sun-cell-group>
</sun-checkbox-group>
```

#### 自定义图标

图标由css编写，可以被新的样式覆盖，注意不能在vue文件中的style上加`scoped`属性，否则无效。如有需要，可以新加一个`style`标签，把需要修改的样式单独写入

```html
<style lang="scss">
.myicon {
  .sun-checkbox-checked {
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
  }
}
</style>
```

### Checkbox API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 是否为选中状态 | `Boolean` | `false` |
| name | 标识 Checkbox 名称 | `any` | - |
| disabled | 是否禁用单选框 | `Boolean` | `false` |
| label-disabled | 是否禁用单选框内容点击 | `Boolean` | `false` |

### CheckboxGroup API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 所有选中项的 name | `Array` | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` |
| max | 设置最大可选数 | `Number` | `0`（无限制） |

### Checkbox Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |

### CheckboxGroup Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 当绑定值变化时触发的事件 | 当前组件的值 |
