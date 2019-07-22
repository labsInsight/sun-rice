'use strict'

const Cell = resolve => require(['../pages/cell'], resolve)
const Button = resolve => require(['../pages/button'], resolve)
const Field = resolve => require(['../pages/field'], resolve)
const Badge = resolve => require(['../pages/badge'], resolve)
const NoticeBar = resolve => require(['../pages/notice-bar'], resolve)
const Toast = resolve => require(['../pages/toast'], resolve)
const Spinner = resolve => require(['../pages/spinner'], resolve)
const Indicator = resolve => require(['../pages/indicator'], resolve)
const PullRefresh = resolve => require(['../pages/pull-refresh'], resolve)
const List = resolve => require(['../pages/list'], resolve)
const Popup = resolve => require(['../pages/popup'], resolve)
const Steps = resolve => require(['../pages/steps'], resolve)
const Stepper = resolve => require(['../pages/stepper'], resolve)
const Swipe = resolve => require(['../pages/swipe'], resolve)
const Tab = resolve => require(['../pages/tab'], resolve)
const Tabbar = resolve => require(['../pages/tabbar'], resolve)
const Checkbox = resolve => require(['../pages/checkbox'], resolve)
const Radio = resolve => require(['../pages/radio'], resolve)
const Switch = resolve => require(['../pages/switch'], resolve)
const Uploader = resolve => require(['../pages/uploader'], resolve)
const NumberKeyboard = resolve => require(['../pages/number-keyboard'], resolve)
const Dialog = resolve => require(['../pages/dialog'], resolve)
const Actionsheet = resolve => require(['../pages/actionsheet'], resolve)
const Picker = resolve => require(['../pages/picker'], resolve)
const DatetimePicker = resolve => require(['../pages/datetime-picker'], resolve)
const ImagePreview = resolve => require(['../pages/image-preview'], resolve)
const Collapse = resolve => require(['../pages/collapse'], resolve)

const routes = [
  {path: '/base/cell', component: Cell, name: 'Cell', meta: {title: 'cell'}},
  {path: '/base/button', component: Button, name: 'Button', meta: {title: 'button'}},
  {path: '/base/field', component: Field, name: 'Field', meta: {title: 'field'}},
  {path: '/base/badge', component: Badge, name: 'Badge', meta: {title: 'badge'}},
  {path: '/base/notice-bar', component: NoticeBar, name: 'NoticeBar', meta: {title: 'noticeBar'}},
  {path: '/base/spinner', component: Spinner, name: 'Spinner', meta: {title: 'spinner'}},
  {path: '/base/toast', component: Toast, name: 'Toast', meta: {title: 'toast'}},
  {path: '/base/indicator', component: Indicator, name: 'Indicator', meta: {title: 'indicator'}},
  {path: '/base/pull-refresh', component: PullRefresh, name: 'PullRefresh', meta: {title: 'pull-refresh'}},
  {path: '/base/list', component: List, name: 'List', meta: {title: 'list'}},
  {path: '/base/popup', component: Popup, name: 'Popup', meta: {title: 'popup'}},
  {path: '/base/steps', component: Steps, name: 'Steps', meta: {title: 'steps'}},
  {path: '/base/stepper', component: Stepper, name: 'Stepper', meta: {title: 'stepper'}},
  {path: '/base/swipe', component: Swipe, name: 'Swipe', meta: {title: 'swipe'}},
  {path: '/base/tab', component: Tab, name: 'Tab', meta: {title: 'tab'}},
  {path: '/base/tabbar', component: Tabbar, name: 'Tabbar', meta: {title: 'tabbar'}},
  {path: '/base/checkbox', component: Checkbox, name: 'Checkbox', meta: {title: 'checkbox'}},
  {path: '/base/radio', component: Radio, name: 'Radio', meta: {title: 'radio'}},
  {path: '/base/switch', component: Switch, name: 'Switch', meta: {title: 'switch'}},
  {path: '/base/uploader', component: Uploader, name: 'Uploader', meta: {title: 'uploader'}},
  {path: '/base/number-keyboard', component: NumberKeyboard, name: 'NumberKeyboard', meta: {title: 'number-keyboard'}},
  {path: '/base/dialog', component: Dialog, name: 'Dialog', meta: {title: 'dialog'}},
  {path: '/base/actionsheet', component: Actionsheet, name: 'Actionsheet', meta: {title: 'actionsheet'}},
  {path: '/base/picker', component: Picker, name: 'Picker', meta: {title: 'picker'}},
  {path: '/base/datetime-picker', component: DatetimePicker, name: 'DatetimePicker', meta: {title: 'datetime-picker'}},
  {path: '/base/image-preview', component: ImagePreview, name: 'ImagePreview', meta: {title: 'image-preview'}},
  {path: '/base/collapse', component: Collapse, name: 'Collapse', meta: {title: 'collapse'}}
]

export default routes
