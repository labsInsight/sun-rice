<template>
  <div class="sun-address-picker-cell">
    <sun-cell :title="title" :value="address" :border="border" center clickable arrowDirection="right" @click="clickCell">
      <slot name="extra" v-if="placeholder && !address"><span class="sun-address-picker-cell-placeholder">{{placeholder}}</span></slot>
    </sun-cell>
    <div class="sun-bottom-line" v-if="bottomLine"></div>

    <sun-popup v-model="showPicker" :zIndex="zIndex" position="bottom" :get-container="getContainer"
      :close-on-click-overlay="closeOnClickOverlay ">
      <sun-address-picker v-show="showPicker" :area-list="areaList" :title="title" :value="value" :loading="loading"
        :columnsNum="columnsNum" :itemHeight="itemHeight" :visible-item-count="visibleItemCount" @cancel="onCancel"
        @confirm="onConfirm" />
    </sun-popup>
  </div>
</template>

<script>
import SunAddressPicker from './address-picker'
import { SunCell } from '../../../base/cell'
import AreaListDefault from './area'
import SunPopup from '../../../base/popup'

export default ({
  name: 's-address-picker-cell',

  components: { SunAddressPicker, SunCell, SunPopup },

  props: {
    areaList: {
      type: Object,
      default: () => AreaListDefault
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    border: Boolean,
    loading: Boolean,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columnsNum: {
      type: [String, Number],
      default: 3
    },
    placeholder: {
      type: String,
      default: ''
    },
    provinceListKey: {
      type: String,
      default: 'province_list'
    },
    cityListkey: {
      type: String,
      default: 'city_list'
    },
    countyListkey: {
      type: String,
      default: 'county_list'
    },
    disabled: Boolean,
    zIndex: {
      type: [String, Number],
      default: '2000'
    },
    getContainer: {
      type: Function,
      default: () => {
        return document.getElementsByTagName('body')[0]
      }
    },
    closeOnClickOverlay: Boolean,
    bottomLine: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      showPicker: false,
      address: ''
    }
  },

  created() {
    this.getDefaultValue()
  },

  watch: {
    value() {
      this.getDefaultValue()
      this.$emit('change', this.value)
    }
  },

  methods: {
    clickCell() {
      if (this.disabled) return false
      this.showPicker = true
      this.$emit('onCellClick')
      this.forbidBodyScroll()
    },
    getDefaultValue() {
      if (this.value) {
        const data = this.value
        const reg = /^\+?[1-9][0-9]*$/ // 正整数
        if (reg.test(data)) {
          this.value = data
          this.address = this.queryCode(data)
        } else {
          this.address = this.formatStr(this.value)
        }
      }
    },
    queryCode(code) {
      const provinceCode = code.substr(0, 2)
      const cityCode = code.substr(2, 2)
      const countyCode = code.substr(4, 2)
      let provinceName = ''
      let cityName = ''
      let countyName = ''
      let address = ''
      const areaList = this.areaList

      provinceName = areaList.province_list[`${provinceCode}0000`] ? areaList.province_list[`${provinceCode}0000`] : ''
      cityName = cityCode === '00' ? ''
        : areaList.city_list[`${provinceCode}${cityCode}00`] ? areaList.city_list[`${provinceCode}${cityCode}00`] : ''
      countyName = countyCode === '00' ? ''
        : areaList.county_list[`${provinceCode}${cityCode}${countyCode}`] ? areaList.county_list[`${provinceCode}${cityCode}${countyCode}`] : ''
      address = [provinceName, cityName, countyName].slice(0, this.columnsNum)
      if (address.length > 1) {
        if (address[0] === address[1] || address[1] === '县') {
          address[1] = ''
        }
      }

      return address.join('')
    },
    onConfirm(value) {
      this.address = this.formatStr(value)
      this.showPicker = false
      this.allowBodyScroll()
      this.$emit('input', value[value.length - 1].code) // 将值传入父组件的v-model
      this.$emit('confirm', value)
    },
    onCancel() {
      this.showPicker = false
      this.$emit('cancel')
      this.allowBodyScroll()
    },
    formatStr(value) {
      let address = ''
      if (typeof value === 'string') {
        address = value
      } else {
        if (value.length > 1) {
          if (value[0].name === value[1].name || value[1].name === '县') {
            value[1].name = ''
          }
        }
        for (let i = 0; i < value.length; i++) {
          if (value[i]) address += value[i].name
        }
      }
      return address
    },
    bodyScroll(event) {
      event.preventDefault()
    },
    /**
     * 禁止页面滚动，解决弹框出现时 IOS 上滚动穿透的问题
     */
    forbidBodyScroll() {
      document.getElementsByTagName('body')[0].addEventListener('touchmove', this.bodyScroll, false)
    },

    /**
     * 解除禁止滚动，解决弹框出现时 IOS 上滚动穿透的问题
     */
    allowBodyScroll() {
      document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.bodyScroll, false)
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun-address {
  @component picker-cell {
    position: relative;
    width: 100%;
    &:last-child {
      .sun-cell {
        background-image: none;
      }
    }
    @descendent placeholder {
      color: $placeholder-color;
    }
  }
}
</style>
