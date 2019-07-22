## Uploader 图片上传

### 使用指南
``` javascript
import SunUploader from 'sun-rice';

Vue.use(SunUploader);
```

### 代码演示

#### 基础用法

```html
<s-uploader :after-read="onRead">
  <img v-if="dataImg" :src="dataImg" />
</s-uploader>
```

```javascript
export default {
  data () {
    return {
      dataImg: ''
    }
  },

  methods: {
    onRead (file) {
      this.dataImg = file.content
    }
  }
};
```

#### 设置 Input 属性
可以直接在 Uploader 上设置 accpet、multiple 等原生属性，input 会自动继承该属性

```html
<s-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <img v-if="dataImg" :src="dataImg" />
</s-uploader>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| result-type | 文件读取结果类型，可选值为 `dataUrl` `test` | `String` | `dataUrl` |
| accept | 接受的文件类型 | `String` | `image/*` |
| disabled | 是否禁用图片上传 | `Boolean` | `false` |
| before-read | 读取前的回调函数，返回 false 可终止文件读取 | `Function` | - |
| after-read | 读取完成后的回调函数 | `Function` | - |
| max-size | 文件大小限制，单位为 byte | `Number` | - |
| useCapture | 是否调用手机拍照功能 | `Boolean` | `true` |
| compressImg | 是否需要进行图片压缩，超过`max-size`的图片将会根据`max-size`的值与实际文件大小的比例进行压缩 | `Boolean` | `true` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| oversize | 文件大小超过限制时触发 | 同 after-read |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| - | 自定义 uploader 内容 |

### afterRead 回调参数
| key | 说明 | 类型 |
|-----------|-----------|-----------|
| file | 文件解析后的 file 对象 | `Object` |
| content | 文件内容 | `String` |
