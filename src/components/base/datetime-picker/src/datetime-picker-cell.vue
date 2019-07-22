<template>
  <div class="sun-picker-cell">
    <sun-cell :title="title" :value="computeValue" :border="border" center clickable arrowDirection="right" @click="clickCell">
      <slot name="extra" v-if="placeholder && !computeValue"><span class="sun-picker-cell-placeholder">{{placeholder}}</span></slot>
    </sun-cell>
    <div class="sun-bottom-line" v-if="bottomLine"></div>

    <sun-popup v-model="showPicker" :zIndex="zIndex" position="bottom" :get-container="getContainer"
      :close-on-click-overlay="closeOnClickOverlay ">
      <sun-datetime-picker v-show="showPicker" :title="title" :value="computeDate" :border="border" :itemHeight="itemHeight"
        :visibleItemCount="visibleItemCount" :confirmButtonText="confirmButtonText" :cancelButtonText="cancelButtonText"
        :type="type" :showToolbar="showToolbar" :format="format" :minDate="minDate" :maxDate="maxDate" :minHour="minHour"
        :maxHour="maxHour" @cancel="onCancel" @confirm="onConfirm" />
    </sun-popup>
  </div>
</template>

<script>
import SunDatetimePicker from './datetime-picker'
import { SunCell } from '../../cell'
import SunPopup from '../../popup'

export default ({
  name: 's-datetime-picker-cell',

  components: { SunDatetimePicker, SunCell, SunPopup },

  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [Date, String],
      default: () => new Date()
    },
    border: Boolean,
    itemHeight: Number,
    visibleItemCount: Number,
    confirmButtonText: {
      type: String,
      default: ''
    },
    cancelButtonText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    minDate: {
      type: Date
    },
    maxDate: {
      type: Date
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    placeholder: {
      type: String,
      default: ''
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
      computeValue: '',
      computeDate: new Date()
    }
  },

  watch: {
    value() {
      this.computeValue = this.formatStr(this.value)
      this.computeDate = this.getComputeDate(this.value)
      this.$emit('change', this.value)
    }
  },

  created() {
    this.computeValue = this.formatStr(this.value)
    this.computeDate = this.getComputeDate(this.value)
  },

  methods: {
    getComputeDate(date) {
      if (typeof date === 'string') date = new Date(date.replace(/-/g, '/'))
      return date
    },
    /* 对Date的扩展，将 Date 转化为指定格式的String
    月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
    年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    例子：
    (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
    (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 */
    formatStr(date) {
      if (!date) return
      if (typeof date === 'string') date = new Date(date.replace(/-/g, '/'))
      let dateFormat = JSON.parse(JSON.stringify(this.format))
      var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(dateFormat)) {
        dateFormat = dateFormat.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (let k in o) {
        if (new RegExp('(' + k + ')').test(dateFormat)) {
          dateFormat = dateFormat.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return dateFormat
    },
    clickCell() {
      if (this.disabled) return false
      this.showPicker = true
      this.$emit('onCellClick')
      this.forbidBodyScroll()
    },
    onConfirm(value) {
      this.computeValue = this.formatStr(value)
      this.computeDate = this.getComputeDate(this.value)
      this.showPicker = false
      this.allowBodyScroll()
      if (typeof this.value === 'string') { // 将值传入父组件的v-model
        this.$emit('input', this.formatStr(value))
        this.$emit('confirm', this.formatStr(value))
      } else {
        this.$emit('input', value)
        this.$emit('confirm', value)
      }
    },
    onCancel() {
      this.showPicker = false
      this.$emit('cancel')
      this.allowBodyScroll()
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

<style lang="css">
@import "../../../../styles/theme.css";

@component-namespace sun {
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
