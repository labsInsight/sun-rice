## Steps 步骤条

### 使用指南
``` javascript
import { SunStep, SunSteps } from 'sun-rice';

Vue.use(SunStep).use(SunSteps);
```

### 代码演示

#### 基础用法

```html
<sun-steps :active="active">
  <sun-step>买家下单</sun-step>
  <sun-step>商家接单</sun-step>
  <sun-step>买家提货</sun-step>
  <sun-step>交易完成</sun-step>
</sun-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

#### 描述信息

通过`title`和`description`属性来定义描述信息信息

```html
<sun-steps
  :active="active"
  title="标题"
  description="描述信息"
>
  <sun-step>买家下单</sun-step>
  <sun-step>商家接单</sun-step>
  <sun-step>买家提货</sun-step>
  <sun-step>交易完成</sun-step>
</sun-steps>
```

#### 竖向步骤条
可以通过设置`direction`属性来改变步骤条的显示方式

```html
<sun-steps direction="vertical" :active="0" active-color="#f60">
  <sun-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </sun-step>
  <sun-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </sun-step>
  <sun-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </sun-step>
</sun-steps>
```

### Steps API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| active | 当前步骤 | `Number` | 0 |
| title | 描述栏标题 | `String` | - |
| description | 描述栏文字 | `String` | - |
| icon | 描述栏图标 | `String` | - |
| icon-class | 图标额外类名 | `String` | - |
| direction | 显示方向，可选值为 `horizontal` `vertical` | `String` | `horizontal` |
| active-color | 激活状态颜色 | `String` | `#2c88ff` |

### Steps Slot

| Name | 说明 |
|-----------|-----------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |
