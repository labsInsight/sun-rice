## NoticeBar 通告栏

### 使用指南

```javascript
import SunNoticeBar from 'sun-rice'

Vue.use(SunNoticeBar)
```

### 代码演示

#### 基础用法

```html
<sun-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
  left-icon="https://img.yzcdn.cn/1.png"
/>
```

#### 禁用滚动

文字内容多于一行时，可通过`scrollable`参数控制是否开启滚动

```html
<sun-notice-bar :scrollable="false">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</sun-notice-bar>
```

#### 通告栏模式

默认模式为空，支持`closeable`和`link`。

```html
<!-- closeable 模式，在右侧显示关闭按钮 -->
<sun-notice-bar mode="closeable">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</sun-notice-bar>

<!-- link 模式，在右侧显示链接箭头 -->
<sun-notice-bar mode="link">
  足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
</sun-notice-bar>

<!-- 自定义颜色 -->
<sun-notice-bar
  text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大淘汰富力"
  color="#fff"
  background="#606266"
/>
```

### API

| 参数       | 说明                                    | 类型      | 默认值    |
| ---------- | --------------------------------------- | --------- | --------- |
| text       | 文字内容                                | `String`  | -         |
| mode       | 通告栏模式，可选值为 `closeable` `link` | `String`  | -         |
| delay      | 动画延迟时间 (s)                        | `Number`  | `1`       |
| speed      | 滚动速率 (px/s)                         | `Number`  | `50`      |
| scrollable | 是否在长度溢出时滚动播放                | `Boolean` | `true`    |
| left-icon  | 左侧图标图片 URL                        | `String`  | -         |
| color      | 文本颜色                                | `String`  | `#f60`    |
| background | 滚动条背景                              | `String`  | `#fff7cc` |

### Event

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 点击事件回调 | -    |
