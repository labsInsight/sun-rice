# sun-rice

> Mobile UI elements for **Vue 2.0**

## Demo

- [demo 地址](https://stg1-wechat.jinbaochuang.com/sun-rice/#/)

![image](https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/logo.png)

## Tutorial
> 点击查看[使用教程](./SUMMARY.md)

## Usage

### CDN 方式：
```shell
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>iview example</title>
  <!-- import Vue.js -->
  <script src="//vuejs.org/js/vue.min.js"></script>
  <!-- import stylesheet -->
  <link rel="stylesheet" href="//unpkg.com/sun-rice/dist/sun-rice.css">
  <!-- import sun-rice -->
  <script src="//unpkg.com/sun-rice/dist/sun-rice.umd.min.js"></script></head>
<body>
<div id="app">
    <s-button type="default" @click="onClick">Click me!</s-button>
</div>
<script>
  new Vue({
    el: '#app',
    methods: {
      onClick() {
        this.$dialog.alert({
          message: '欢迎使用sun-rice ^_^'
        })
      }
    }
  })
</script>
</body>
</html>
```

### npm 方式：
```shell
npm i sun-rice -S
```

Import all components.

```javascript
import Vue from 'vue'
import SunRice from 'sun-rice'
import 'sun-rice/dist/sun-rice.css'

Vue.use(SunRice)
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { SunCell } from 'sun-rice'

Vue.component(SunCell.name, SunCell)
```

## babel-plugin-component

- Auto import css file
- Modular import component

Installation

```shell
npm i babel-plugin-component -D
```

Usage

.babelrc

```json
{
  "plugins": [
    "other-plugin",
    ["component", [{ "libraryName": "sun-rice", "style": true }]]
  ]
}
```

## Development

```shell
npm run dev
```

## Contribution

Please make sure to read the [Contributing Guide](http://git.jbc.com/h5-template/sun-rice/blob/dev/.doctype/CONTRIBUTING_zh-cn.md) before making a pull request.
