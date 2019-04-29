## Switch 开关

### 使用指南

```javascript
import SunSwitch from 'sun-rice'

Vue.use(SunSwitch)
```

### 代码演示

#### 基础用法

```html
<sun-switch v-model="checked" />
```

#### 禁用状态

```html
<sun-switch v-model="checked" disabled />
```

#### 加载状态

```html
<sun-switch v-model="checked" loading />
```

#### 调节大小

```html
<sun-switch v-model="checked" :size="30" />
```

#### 内嵌文字

```html
<sun-switch v-model="checked" :text="['男', '女']" />
```

#### 自定义颜色

通过绑定`class`改变`backgroundColor`和`color`

```html
<sun-switch v-model="checked" :text="['男', '女']" class="changeColor" />
```

#### sun-switch-cell 用法

```html
<sun-switch-cell :title="'基础用法" v-model="checked" />
<sun-switch-cell v-model="checked" loading />
<sun-switch-cell v-model="checked" disabled />
<sun-switch-cell v-model="checked" :text="['男', '女']" />
<sun-switch-cell v-model="checked" :des="['男人', '女人']" />
```

#### sun-switch-cell 是否有 border

```html
<sun-switch-cell border v-model="checked" />
```

### sun-switch API

| 参数     | 说明           | 类型      | 默认值  |
| -------- | -------------- | --------- | ------- |
| v-model  | 开关选中状态   | `Boolean` | `false` |
| loading  | 是否为加载状态 | `Boolean` | `false` |
| disabled | 是否为禁用状态 | `Boolean` | `false` |
| size     | 开关尺寸       | `Number`  | `30`    |
| text     | 内嵌文字       | `Array`   | []      |

### sun-switch-cell API

| 参数   | 说明     | 类型      | 默认值  |
| ------ | -------- | --------- | ------- |
| title  | 标题     | `string`  | -       |
| border | 边框     | `Boolean` | `false` |
| des    | 外部文字 | `Array`   | []      |

### Event

| 事件名 | 说明             | 参数                  |
| ------ | ---------------- | --------------------- |
| change | 开关状态切换回调 | checked: 是否选中开关 |
