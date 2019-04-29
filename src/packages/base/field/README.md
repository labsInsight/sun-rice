## Field 输入框

`input`或`textarea`的输入框。

### 使用指南
``` javascript
import SunField from 'sun-rice';

Vue.use(SunField);
```

### 代码演示

#### 基础用法
通过 v-model 绑定输入框的值

```html
<sun-field v-model="value" inputAlign="left" placeholder="请输入用户名" />
```

#### 自定义类型
根据`type`属性定义不同类型的输入框

```html
<sun-field
  v-model="username"
  required
  label="用户名"
  :leftIcon="leftIcon"
  placeholder="请输入用户名"
/>
<sun-field
  v-model="password"
  type="password"
  label="密码"
  placeholder="请输入密码"
  required
/>
```

#### 删除和提示按钮
可删除和添加提示

```html
<sun-field
  v-model="username"
  required
  clearable
  label="用户名"
  :rightIcon="hintIcon"
  placeholder="请输入用户名"
  @click-icon="clickIcon"
/>
```

#### 高度自适应按钮
textfield

```html
<sun-field
  v-model="message"
  label="留言"
  type="textarea"
  placeholder="高度自适应，可输入多行"
  rows="1"
  autosize
/>
```

#### 错误提示
普通提示以及错误消息提示

```html
<sun-field
  v-model="username"
  required
  label="用户名"
  :leftIcon="leftIcon"
  placeholder="请输入用户名"
/>
<sun-field
  v-model="mobile"
  type="tel"
  label="手机号码"
  placeholder="请输入手机号码"
  required
/>
<sun-field
  v-model="number"
  type="number"
  label="数字"
  placeholder="请输入数字"
  required
/>
<sun-field
  v-model="password"
  type="password"
  label="密码"
  placeholder="请输入密码"
  required
/>
```

#### 禁用按钮
不可输入

```html
<sun-field
  value="输入框已禁用"
  label="不给输"
  disabled
/>
```

#### 插入按钮
通过 button slot 可以在输入框尾部插入按钮

```html
<sun-field
  v-model="sms"
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
  <sun-button slot="button" size="small" type="primary">发送验证码</sun-button>
</sun-field>
```

### API

Field 默认支持 Input 标签所有的原生属性，比如 `maxlength`、`placeholder`、`readonly`、`autofocus` 等

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|-------------|
| label | 输入框左侧文本 | `String` | - |
| value | 当前输入的值 | `String` | - |
| titleWidth | 左侧标题最大宽度 | `String` `Number` | `115` |
| type | 可设置为任意原生类型, 如 `number` `tel` `textarea` | `String` | `text` |
| disabled | 是否禁用输入框 | `Boolean` | `false` |
| clearable | 是否启用清除控件 | `Boolean` | `false` |
| required | 是否显示表单必填星号 | `Boolean` | `false` |
| error | 是否将输入内容标红 | `Boolean` | `false` |
| error-message | 底部错误提示文案，为空时不展示 | `String` | - |
| input-align | 输入框内容对齐方式，可选值为 `center` `left` `right` | `String` | `right` |
| autosize | 自适应内容高度，只对 textarea 有效，可传入对象,<br>如 { maxHeight: 100, minHeight: 50 }，单位为 px | `Boolean` `Object`| `false` |
| rightIcon | 输入框右侧图标   | `String` | - |
| left-icon | 输入框左侧图标  | `String` | - |

### Event

Field 默认支持 Input 标签所有的原生事件，如 `focus`、`blur`、`keypress` 等

| 事件 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| click-icon | 点击尾部图标时触发 | -

### 方法

通过 ref 可以获取到 field 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| blur | - | - | 取消输入框焦点 |

### Slot

| 名称 | 说明 |
|-----------|-----------|
| label | 自定义输入框标签 |
| icon | 自定义输入框尾部图标 |
| button | 自定义输入框尾部按钮 |
