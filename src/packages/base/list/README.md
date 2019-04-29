## List 列表
瀑布流滚动加载，用于控制长列表的展示

### 使用指南
``` javascript
import SunList from 'sun-rice';

Vue.use(SunList);
```

### 代码演示

#### 基础用法

```html
<sun-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
>
  <sun-cell v-for="item in list" :key="item" :title="item + ''" />
</sun-list>
```

```js
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| loading | 是否显示加载中提示，加载过程中不触发`load`事件 | `Boolean` | `false` |
| finished | 是否已加载完成，加载完成后不再触发`load`事件 | `Boolean` | `false` |
| offset | 滚动条与底部距离小于 offset 时触发`load`事件 | `Number` | `300` |
| loading-text | 加载中提示文案 | `String` | `加载中...` |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | `Boolean` | `true` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| load | 滚动条与底部距离小于 offset 时触发 | - |
