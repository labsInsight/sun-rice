## Badge 徽章

### 使用指南
``` javascript
import SunBadge from 'sun-rice';

Vue.use(SunBadge);
```

### 代码演示

#### 基础用法

```html
<s-badge type="primary" size="small">10</s-badge>
<s-badge type="error" size="small">10</s-badge>
<s-badge type="success" size="small">10</s-badge>
<s-badge type="warning" size="small">10</s-badge>
```

#### 不同大小

```html
<s-badge type="primary" size="small">100</s-badge>
<s-badge type="primary" size="normal">100</s-badge>
<s-badge type="primary" size="large">100</s-badge>
```

#### 不同颜色

自定义颜色

```html
<s-badge size="small" color="#888">自定义颜色</s-badge>
```


### Badge API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色，十六进制值 | `String` | - |
| type | 类别，可选值为 `primary` `error` `success` `warning` | `String` | `primary` |
| size | 大小，可选值为 `small` `normal` `large` | `String` | `normal` |
