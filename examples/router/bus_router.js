'use strict'

const AddressPicker = resolve =>
  require(['../pages/address-picker'], resolve)
const SubmitBar = resolve =>
  require(['../pages/submit-bar'], resolve)
const IDcardPicker = resolve =>
  require(['../pages/idcard-picker'], resolve)
const SunCareerPicker = resolve =>
  require(['../pages/career-picker'], resolve)

const routes = [
  {
    path: '/bus/address-picker',
    component: AddressPicker,
    name: 'AddressPicker',
    meta: { title: 'address-picker' }
  },
  {
    path: '/bus/submit-bar',
    component: SubmitBar,
    name: 'SubmitBar',
    meta: { title: 'submit-bar' }
  },
  {
    path: '/bus/idcard-picker',
    component: IDcardPicker,
    name: 'IdcardPicker',
    meta: { title: 'idcard-picker' }
  },
  {
    path: '/bus/career-picker',
    component: SunCareerPicker,
    name: 'SunCareerPicker',
    meta: { title: 'career-picker' }
  }
]

export default routes
