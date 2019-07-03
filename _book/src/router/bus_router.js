'use strict'

const AddressPicker = resolve =>
  require(['@/packages/bus/address-picker/demo'], resolve)
const SubmitBar = resolve =>
  require(['@/packages/bus/submit-bar/demo'], resolve)
const IDcardPicker = resolve =>
  require(['@/packages/bus/idcard-picker/demo'], resolve)
const SunCareerPicker = resolve =>
  require(['@/packages/bus/career-picker/demo'], resolve)

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
