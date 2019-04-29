## Spinner 加载

### 使用指南
``` javascript
import SunLoading from 'sun-rice';

Vue.use(SunLoading);
```

### 代码演示

#### 基础方法

```html
<sun-spinner type="snake" />
<sun-spinner type="double-bounce" />
<sun-spinner type="triple-bounce" />
<sun-spinner type="fading-circle" />
```

#### 不同大小

```html
<sun-spinner :size="40" type="snake" />
<sun-spinner :size="40" type="double-bounce" />
<sun-spinner :size="40" type="triple-bounce" />
<sun-spinner :size="40" />
```

#### 不同颜色

```html
<sun-spinner color="#ccc" type="snake" />
<sun-spinner color="#f44" type="double-bounce" />
<sun-spinner color="#38f" type="triple-bounce" />
<sun-spinner color="#f60" />
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| color | 颜色，`色值` | `String` | `#ccc` |
| type | 类型，可选值为 `snake` `double-bounce` `triple-bounce` `fading-circle` | `String` | `fading-circle` |
| size | 大小，单位为px | `Number` | `15` |
