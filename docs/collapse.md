## Collapse 折叠面板

### 使用指南
``` javascript
import { SunCollapseItem, SunCollapse } from 'sun-rice';

Vue.use(SunCollapseItem).use(SunCollapse);
```

### 代码演示

#### 基础用法
通过`v-model`控制展开的面板列表，`activeNames`为数组格式

```html
<sun-collapse v-model="activeNames">
  <sun-collapse-item title="标题标题" name="1">
    内容内容内容
  </sun-collapse-item>
  <sun-collapse-item title="标题标题" name="2">
    内容内容内容
  </sun-collapse-item>
  <sun-collapse-item title="标题标题" name="3">
    内容内容内容
  </sun-collapse-item>
</sun-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeNames: ['1']
    };
  }
};
```

#### 手风琴
通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式

```html
<sun-collapse v-model="activeName" accordion>
  <sun-collapse-item title="标题标题" name="1">
    内容内容内容
  </sun-collapse-item>
  <sun-collapse-item title="标题标题" name="2">
    内容内容内容
  </sun-collapse-item>
  <sun-collapse-item title="标题标题" name="3">
    内容内容内容
  </sun-collapse-item>
</sun-collapse>
```

``` javascript
export default {
  data() {
    return {
      activeName: '1'
    };
  }
};
```

#### 自定义标题内容

```html
<sun-collapse v-model="activeNames">
  <sun-collapse-item name="1">
    <div slot="title">标题标题<van-icon name="question" /></div>
    内容内容内容
  </sun-collapse-item>
  <sun-collapse-item title="标题标题" name="2">
    内容内容内容
  </sun-collapse-item>
</sun-collapse>
```



### Collapse API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 当前展开面板的 name | `Array` `String` `Number` | - |
| accordion | 是否开启手风琴模式 | `Boolean` | `false` |

### Collapse Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 切换面板时触发 | activeNames: `string` `array` |

### CollapseItem API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| name | 面板唯一标识符，默认为索引值 | `String` `Number` | `index` |
| title | 标题 | `String` | - |


### CollapseItem Slot

| 名称 | 说明 |
|-----------|-----------|
| default | 面板内容 |
| title | 自定义标题内容 |
