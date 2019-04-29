## Button 按钮

### 使用指南
``` javascript
import SunButton from 'sun-rice';

Vue.use(SunButton);
```

### 代码演示

#### 按钮类型
支持`default`、`primary`、`danger`、`text`几种类型，默认为`default`

```html
<sun-button type="default" @click="onClick">默认按钮</sun-button>
<sun-button type="primary" @click="onClick">主要按钮</sun-button>
<sun-button type="danger" @click="onClick">危险按钮</sun-button>
<sun-button class="item" type="text" @click="onClick">文字按钮</sun-button>
```

#### 朴素按钮
通过`plain`控制是否空心，支持`default`、`primary`、`danger`三种类型，默认为`false`

```html
<sun-button type="default" plain @click="onClick">朴素按钮</sun-button>
<sun-button type="primary" plain @click="onClick">朴素按钮</sun-button>
<sun-button type="danger" plain @click="onClick">朴素按钮</sun-button>
```

#### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<sun-button size="large">大号按钮</sun-button>
<sun-button size="normal">普通按钮</sun-button>
<sun-button size="small">小型按钮</sun-button>
<sun-button size="mini">迷你按钮</sun-button>
```

#### 选中按钮
`checked=true`

```html
<sun-button checked>选中状态</sun-button>
```

#### 禁用状态
通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<sun-button disabled>禁用状态</sun-button>
```

#### 加载状态
`loading=true`

```html
<sun-button loading />
<sun-button loading type="primary" />
```

#### 块级元素
`block=true`

```html
<sun-button class="item" block>块级按钮</sun-button>
```

#### 自定义
通过`slot`为左右添加图标、图片等自定义内容，支持`extra-left`、`extra-right`两种方式


```html
<sun-button class="item">
    <template slot="extra-left"><img :src="iconUrl" /></template>按钮
</sun-button>
<sun-button class="item">
    <template slot="extra-right"><img :src="iconUrl" /></template>按钮
</sun-button>
```

#### 页面底部操作按钮

```html
<sun-button type="primary" bottom-action>按钮</sun-button>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `default` `primary` `danger` `text` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` `full` | `String` | `normal` |
| plain | 朴素按钮 | `Boolean` | `false` |
| checked | 是否选中 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| bottom-action | 是否为底部行动按钮 | `Boolean` | `false` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | - |

### 自定义slot

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| slot | 按钮类型，可选值为 `extra-left` `extra-right` | `String` | - |
