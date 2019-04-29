# sun-rice

> Mobile UI elements for **Vue 2.0**

# Demo

- [demo 地址](https://stg1-wechat.jinbaochuang.com/sun-rice/#/)
- [document 地址](http://public.jinbaochuang.com/sun-rice-doc/)

![image](https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/logo.png)

## Installation

```shell
npm i sun-rice -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue'
import { install as SunRice } from 'sun-rice'
import 'sun-rice/dist/static/css/sun-rice.css'

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
