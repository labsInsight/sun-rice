// 基础组件
import SunActionsheet from './base/actionsheet'
import SunBadge from './base/badge'
import SunButton from './base/button'
import { SunCell, SunCellGroup } from './base/cell'
import { SunCheckbox, SunCheckboxGroup } from './base/checkbox'
import { SunCollapseItem, SunCollapse } from './base/collapse'
import {
  SunDatetimePicker,
  SunDatetimePickerCell
} from './base/datetime-picker'
import SunDialog from './base/dialog'
import SunField from './base/field'
import SunImagePreview from './base/image-preview'
import SunIndicator from './base/indicator'
import SunList from './base/list'
import SunNoticeBar from './base/notice-bar'
import SunNumberKeyboard from './base/number-keyboard'
import { SunPicker, SunPickerCell } from './base/picker'
import SunPopup from './base/popup'
import SunPullRefresh from './base/pull-refresh'
import { SunRadio, SunRadioGroup } from './base/radio'
import SunSpinner from './base/spinner'
import SunStpper from './base/stepper'
import { SunStep, SunSteps } from './base/steps'
import { SunSwipeItem, SunSwipe } from './base/swipe'
import { SunSwitch, SunSwitchCell } from './base/switch'
import { SunTab, SunTabs, SunTabScroll } from './base/tab'
import { SunTabbarItem, SunTabbar } from './base/tabbar'
import SunToast from './base/toast'
import SunUploader from './base/uploader'

// 业务组件
import { SunAddressPicker, SunAddressPickerCell } from './bus/address-picker'
import SunIdcardPicker from './bus/idcard-picker'
import SunSubmitBar from './bus/submit-bar'
import SuncareerPicker from './bus/career-picker'

// 高级组件
import SunLazyload from './advance/lazyload'

const version = '0.0.1'
const install = function(Vue, config = {}) {
  // if (install.installed) return
  // 基础组件
  Vue.component(SunActionsheet.name, SunActionsheet)
  Vue.component(SunBadge.name, SunBadge)
  Vue.component(SunButton.name, SunButton)
  Vue.component(SunCell.name, SunCell)
  Vue.component(SunCellGroup.name, SunCellGroup)
  Vue.component(SunCheckbox.name, SunCheckbox)
  Vue.component(SunCheckboxGroup.name, SunCheckboxGroup)
  Vue.component(SunCollapseItem.name, SunCollapseItem)
  Vue.component(SunCollapse.name, SunCollapse)
  Vue.component(SunDatetimePicker.name, SunDatetimePicker)
  Vue.component(SunDatetimePickerCell.name, SunDatetimePickerCell)
  Vue.component(SunField.name, SunField)
  Vue.component(SunList.name, SunList)
  Vue.component(SunNoticeBar.name, SunNoticeBar)
  Vue.component(SunNumberKeyboard.name, SunNumberKeyboard)
  Vue.component(SunPicker.name, SunPicker)
  Vue.component(SunPickerCell.name, SunPickerCell)
  Vue.component(SunPopup.name, SunPopup)
  Vue.component(SunPullRefresh.name, SunPullRefresh)
  Vue.component(SunRadio.name, SunRadio)
  Vue.component(SunRadioGroup.name, SunRadioGroup)
  Vue.component(SunSpinner.name, SunSpinner)
  Vue.component(SunStpper.name, SunStpper)
  Vue.component(SunStep.name, SunStep)
  Vue.component(SunSteps.name, SunSteps)
  Vue.component(SunSwipeItem.name, SunSwipeItem)
  Vue.component(SunSwipe.name, SunSwipe)
  Vue.component(SunSwitch.name, SunSwitch)
  Vue.component(SunSwitchCell.name, SunSwitchCell)
  Vue.component(SunTab.name, SunTab)
  Vue.component(SunTabs.name, SunTabs)
  Vue.component(SunTabScroll.name, SunTabScroll)
  Vue.component(SunTabbarItem.name, SunTabbarItem)
  Vue.component(SunTabbar.name, SunTabbar)
  Vue.component(SunUploader.name, SunUploader)
  // 业务组件
  Vue.component(SunAddressPicker.name, SunAddressPicker)
  Vue.component(SunAddressPickerCell.name, SunAddressPickerCell)
  Vue.component(SunIdcardPicker.name, SunIdcardPicker)
  Vue.component(SunSubmitBar.name, SunSubmitBar)
  Vue.component(SuncareerPicker.name, SuncareerPicker)
  // 高级组件
  Vue.use(SunLazyload)
  // 全局组件
  Vue.$toast = Vue.prototype.$toast = SunToast
  Vue.$dialog = Vue.prototype.$dialog = SunDialog
  Vue.$indicator = Vue.prototype.$indicator = SunIndicator
  Vue.$imagePreview = Vue.prototype.$imagePreview = SunImagePreview
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  console.log('window.vue', window.vue)
  install(window.Vue)
}

export {
  install,
  version,
  // 基础组件
  SunActionsheet,
  SunBadge,
  SunButton,
  SunCell,
  SunCellGroup,
  SunCheckbox,
  SunCheckboxGroup,
  SunCollapseItem,
  SunCollapse,
  SunDatetimePicker,
  SunDatetimePickerCell,
  SunDialog,
  SunField,
  SunImagePreview,
  SunIndicator,
  SunList,
  SunNoticeBar,
  SunNumberKeyboard,
  SunPicker,
  SunPickerCell,
  SunPopup,
  SunPullRefresh,
  SunRadio,
  SunRadioGroup,
  SunSpinner,
  SunStpper,
  SunStep,
  SunSteps,
  SunSwipeItem,
  SunSwipe,
  SunSwitch,
  SunSwitchCell,
  SunTab,
  SunTabs,
  SunTabScroll,
  SunTabbarItem,
  SunTabbar,
  SunToast,
  SunUploader,
  // 业务组件
  SunAddressPicker,
  SunAddressPickerCell,
  SunIdcardPicker,
  SunSubmitBar,
  SuncareerPicker,
  // 高级组件
  SunLazyload
}
