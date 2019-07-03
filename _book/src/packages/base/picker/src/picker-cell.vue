<template>
  <div class="sun-picker-cell">
    <sun-cell :title="title" :value="computeValue" :border="border" center clickable arrowDirection="right" @click="clickCell">
      <slot name="extra" v-if="placeholder && !(computeValue === 0|| computeValue === '0' || computeValue)"><span class="sun-picker-cell-placeholder">{{placeholder}}</span></slot>
    </sun-cell>
    <div class="sun-bottom-line" v-if="bottomLine"></div>

    <sun-popup v-model="showPicker" :zIndex="zIndex" position="bottom" :get-container="getContainer" :close-on-click-overlay="closeOnClickOverlay " >
      <sun-picker :title="title" :loading="loading" :showToolbar="showToolbar" :confirmButtonText="confirmButtonText"
        :cancelButtonText="cancelButtonText" :visibleItemCount="visibleItemCount" :valueKey="valueKey" :itemHeight="itemHeight"
        :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </sun-popup>
  </div>
</template>

<script>
import SunPicker from './picker'
import { SunCell } from '../../cell'
import SunPopup from '../../popup'

export default ({
  name: 'sun-picker-cell',

  components: { SunPicker, SunCell, SunPopup },

  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Array, Object, Number],
      default: ''
    },
    border: Boolean,
    loading: Boolean,
    showToolbar: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: ''
    },
    cancelButtonText: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: () => []
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
      computeValue: ''
    }
  },

  watch: {
    value() {
      this.getDefaultValue()
      this.$emit('change', this.value)
    }
  },

  created() {
    this.getDefaultValue()
  },

  methods: {
    clickCell() {
      if (this.disabled) return false
      this.showPicker = true
      this.$emit('onCellClick')
      this.forbidBodyScroll()
    },
    onConfirm(value, index) {
      this.computeValue = this.formatStr(value)
      this.showPicker = false
      this.allowBodyScroll()
      this.$emit('input', value) // 将值传入父组件的v-model
      this.$emit('confirm', value, index)
    },
    onCancel() {
      this.showPicker = false
      this.$emit('cancel')
      this.allowBodyScroll()
    },
    getDefaultValue() {
      if (this.value === 0 || this.value === '0' || this.value) {
        const data = this.value
        const reg = /^([1-9]\d*|[0]{1,1})$/ // 0加正整数
        if (reg.test(data)) {
          this.value = data
          this.computeValue = this.queryCode(data)
        } else {
          this.computeValue = this.formatStr(this.value)
        }
      }
    },
    queryCode(code) {
      const columns = this.columns
      for (let i = 0; i < columns.length; i++) {
        if (typeof columns[i] === 'object') {
          if (columns[i].value === code) return columns[i][this.valueKey]
        } else {
          if (parseInt(columns[i], 0) === parseInt(code, 0)) return columns[i]
        }
      }
    },
    formatStr(value) {
      let label = ''
      if (value.length) {
        for (let i = 0; i < value.length; i++) {
          if (typeof value[i] === 'object') {
            label += value[i][this.valueKey]
          } else {
            label += value[i]
          }
        }
      } else if (typeof value === 'object') {
        label = value[this.valueKey]
      } else {
        label = value
      }
      return label
    },
    getBody() {
      return document.getElementsByTagName('body')[0]
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
@import "../../../styles/theme.css";

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
