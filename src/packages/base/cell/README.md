## Cell 单元格

### 使用指南
``` javascript
import { SunCell, SunCellGroup } from 'sun-rice';

Vue.use(SunCell).use(SunCellGroup);
```

### 代码演示

#### 基础用法

```html

<sun-cell-group :border="false">
  <sun-cell value="有内容，无边框" />
</sun-cell-group>
<sun-cell value="有内容，有边框" border />
<sun-cell title="标题" value="有标题也有内容" />
<sun-cell title="必选" value="内容：单元格必选" required />
<sun-cell title="标题" value="内容：标题和描述信息" label="描述信息" />
<sun-cell title="标题" value="设定内容最大宽度为120px" label="描述信息" />
```

#### 组
```html
<sun-cell-group>
  <sun-cell value="内容1" />
  <sun-cell value="内容2" />
</sun-cell-group>
```

#### 点击事件
```html
<sun-cell-group>
  <sun-cell :title="`点击次数 ${numbar}`" value="内容" clickable @click="onClick($event, 'value')" />
</sun-cell-group>
```

#### 左图标右箭头

```html
<sun-cell title="收藏夹" value="箭头向上" :icon="iconUrl" arrowDirection="up" />
<sun-cell title="联系人" value="箭头向下" :icon="iconUrl" arrowDirection="down" />
<sun-cell title="照片集" value="箭头向左" :icon="iconUrl" arrowDirection="left" />
<sun-cell title="我的钱包" value="箭头向右" :icon="iconUrl" arrowDirection="right" />
```

#### 自定义插槽
```html
<sun-cell title="左右插入图片/图标" value="内容1">
  <template slot="left-icon"><img class="left-icon" :src="favorfill" /></template>
  <template slot="right-icon"><img class="right-icon" :src="peoplefill" /></template>
</sun-cell>
<sun-cell>
  <slot name="title"><span class="head-title">加粗显示</span></slot>
  <slot name="value"><span class="head-value">变小显示</span></slot>
  <slot name="extra"><span class="head-label">变颜色显示</span></slot>
</sun-cell>
```

### Cell API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| icon | 左侧图标，可选值见 Icon 组件 | `String` | - |
| title | 左侧标题 | `String` | - |
| titleWidth | 左侧标题最大宽度 | `String` `Number` | - |
| labelWidth | 右侧内容最大宽度 | `String` `Number` | - |
| value | 右侧内容 | `String` | - |
| label | 标题下方的描述信息 | `String` | - |
| clickable | 是否开启点击反馈 | `Boolean` | `false` |
| required | 是否显示表单必填星号 | `Boolean` | `false` |
| border | 是否带边框 | `Boolean` | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` `right` | `String` | - |

### Cell Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击 cell 时触发 | - |
