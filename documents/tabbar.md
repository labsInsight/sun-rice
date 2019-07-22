## Tabbar 标签栏

### 使用指南
``` javascript
import { SunTabbarItem, SunTabbar } from 'sun-rice';

Vue.use(SunTabbarItem).use(SunTabbar);
```

### 代码演示

#### 基础用法


```html
<s-tabbar v-model="active">
  <s-tabbar-item>
    <span>标记1</span>
    <template slot="icon" slot-scope="props">
      <img :src="props.active ? icon.active : icon.normal" />
    </template>
  </s-tabbar-item>
  <s-tabbar-item dot>
    <span>标记2</span>
    <template slot="icon" slot-scope="props">
      <img :src="props.active ? icon.active : icon.normal" />
    </template>
  </s-tabbar-item>
  <s-tabbar-item info='22'>
    <span>标记3</span>
    <template slot="icon" slot-scope="props">
      <img :src="props.active ? icon.active : icon.normal" />
    </template>
  </s-tabbar-item>
</s-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```


### Tabbar API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| v-model | 当前选中标签的索引 | `Number` | - |
| fixed | 是否固定在底部 | `Boolean` | `true` |
| z-index | 元素 z-index | `Number` | `1` |

### Tabbar Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| change | 切换标签时触发 | active: 当前选中标签 |

### TabbarItem API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-----------|
| dot | 是否显示小红点 | `Boolean` | - |
| info | 图标右上角提示信息 | `String | Number` | - |

### TabbarItem Slot

| Name | 描述 | Scope |
|-----------|-----------|-----------|
| icon | 自定义icon | active |
