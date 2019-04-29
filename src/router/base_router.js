'use strict'

const Cell = resolve => require(['@/packages/base/cell/demo'], resolve)
const Button = resolve => require(['@/packages/base/button/demo'], resolve)
const Field = resolve => require(['@/packages/base/field/demo'], resolve)
const Badge = resolve => require(['@/packages/base/badge/demo'], resolve)
const NoticeBar = resolve => require(['@/packages/base/notice-bar/demo'], resolve)
const Toast = resolve => require(['@/packages/base/toast/demo'], resolve)
const Spinner = resolve => require(['@/packages/base/spinner/demo'], resolve)
const Indicator = resolve => require(['@/packages/base/indicator/demo'], resolve)
const PullRefresh = resolve => require(['@/packages/base/pull-refresh/demo'], resolve)
const List = resolve => require(['@/packages/base/list/demo'], resolve)
const Popup = resolve => require(['@/packages/base/popup/demo'], resolve)
const Steps = resolve => require(['@/packages/base/steps/demo'], resolve)
const Stepper = resolve => require(['@/packages/base/stepper/demo'], resolve)
const Swipe = resolve => require(['@/packages/base/swipe/demo'], resolve)
const Tab = resolve => require(['@/packages/base/tab/demo'], resolve)
const Tabbar = resolve => require(['@/packages/base/tabbar/demo'], resolve)
const Checkbox = resolve => require(['@/packages/base/checkbox/demo'], resolve)
const Radio = resolve => require(['@/packages/base/radio/demo'], resolve)
const Switch = resolve => require(['@/packages/base/switch/demo'], resolve)
const Uploader = resolve => require(['@/packages/base/uploader/demo'], resolve)
const NumberKeyboard = resolve => require(['@/packages/base/number-keyboard/demo'], resolve)
const Dialog = resolve => require(['@/packages/base/dialog/demo'], resolve)
const Actionsheet = resolve => require(['@/packages/base/actionsheet/demo'], resolve)
const Picker = resolve => require(['@/packages/base/picker/demo'], resolve)
const DatetimePicker = resolve => require(['@/packages/base/datetime-picker/demo'], resolve)
const ImagePreview = resolve => require(['@/packages/base/image-preview/demo'], resolve)
const Collapse = resolve => require(['@/packages/base/collapse/demo'], resolve)

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
