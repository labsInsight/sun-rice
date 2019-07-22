// 基础组件
import SunActionsheet from './components/base/actionsheet'
import SunBadge from './components/base/badge'
import SunButton from './components/base/button'
import { SunCell, SunCellGroup } from './components/base/cell'
import { SunCheckbox, SunCheckboxGroup } from './components/base/checkbox'
import { SunCollapseItem, SunCollapse } from './components/base/collapse'
import {
  SunDatetimePicker,
  SunDatetimePickerCell
} from './components/base/datetime-picker'
import SunDialog from './components/base/dialog'
import SunField from './components/base/field'
import SunImagePreview from './components/base/image-preview'
import SunIndicator from './components/base/indicator'
import SunList from './components/base/list'
import SunNoticeBar from './components/base/notice-bar'
import SunNumberKeyboard from './components/base/number-keyboard'
import { SunPicker, SunPickerCell } from './components/base/picker'
import SunPopup from './components/base/popup'
import SunPullRefresh from './components/base/pull-refresh'
import { SunRadio, SunRadioGroup } from './components/base/radio'
import SunSpinner from './components/base/spinner'
import SunStpper from './components/base/stepper'
import { SunStep, SunSteps } from './components/base/steps'
import { SunSwipeItem, SunSwipe } from './components/base/swipe'
import { SunSwitch, SunSwitchCell } from './components/base/switch'
import { SunTab, SunTabs, SunTabScroll } from './components/base/tab'
import { SunTabbarItem, SunTabbar } from './components/base/tabbar'
import SunToast from './components/base/toast'
import SunUploader from './components/base/uploader'

// 业务组件
import { SunAddressPicker, SunAddressPickerCell } from './components/bus/address-picker'
import SunIdcardPicker from './components/bus/idcard-picker'
import SunSubmitBar from './components/bus/submit-bar'
import SuncareerPicker from './components/bus/career-picker'

// 高级组件
import SunLazyload from './components/advance/lazyload'

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
  console.log('window.vue', window.Vue)
  install(window.Vue)
}

export default {
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
