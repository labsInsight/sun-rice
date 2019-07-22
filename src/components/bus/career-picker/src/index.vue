<template>
  <div class="sun-career-picker">
    <sun-cell :title="title" :value="career" :border="border" center clickable arrowDirection="right" @click="clickCell">
      <slot name="extra" v-if="placeholder && !career"><span class="sun-career-picker-placeholder">{{placeholder}}</span></slot>
    </sun-cell>
    <div class="sun-bottom-line" v-if="bottomLine"></div>

    <sun-popup v-model="show" :zIndex="zIndex" position="bottom" :get-container="getContainer"
      :close-on-click-overlay="closeOnClickOverlay ">
      <div class="sun-career-picker-toolbar sun-line-top-bottom">
        <div class="sun-career-picker-cancel" @click="cancelPicker">{{ activeIndex === 0 ? '取消' : '返回' }}</div>
        <div class="sun-career-picker-title sun-ellipsis" v-if="keyConfig[activeIndex]" v-text="keyConfig[activeIndex].name" />
        <div class="sun-career-picker-confirm" :class="{'sun-career-picker-disabled': cacheValues.length !== keyConfig.length}" @click="confirmPicker">确定</div>
      </div>
      <div class="sun-career-picker-steps sun-line-top-bottom">
        <div class="sun-career-picker-step" v-if="index <= activeIndex" v-for="(item, index) in keyConfig" :key="item.name">
          <span class="sun-career-picker-step-text" :class="{'sun-career-picker-step-active': index === activeIndex}">
            {{cacheValues.length && cacheValues[index] && cacheValues[index].text ? cacheValues[index].text :
            `请选择${item.name}`}}
          </span>
          <div class="sun-career-picker-step-circle" :class="{'sun-career-picker-step-finish': index < activeIndex}"></div>
          <div class="sun-career-picker-step-line" v-if="index < activeIndex"></div>
        </div>
      </div>
      <div class="sun-career-picker-list">
        <div class="sun-career-picker-list-item" v-for="item in pickerData" :key="item.code" :class="{'sun-career-picker-list-active': item.code === pickerValue.code}"
          @click="changePicker(item)">
          <span class="sun-ellipsis">{{item.text}}</span>
          <img class="sun-career-picker-list-icon" v-if="item.code === pickerValue.code" src="../../../../assets/selected.png" />
        </div>
      </div>
    </sun-popup>

  </div>
</template>

<script>
import SunActionsheet from '../../../base/actionsheet'
import { SunCell } from '../../../base/cell'
import SunPopup from '../../../base/popup'

export default ({
  name: 's-career-picker',

  components: { SunActionsheet, SunCell, SunPopup },

  props: {
    value: {
      type: String,
      default: ''
    },
    border: Boolean,
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择职业'
    },
    keyConfig: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => { }
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
  computed: {
    currentList() {
      const obj = this.options
      const key = this.keyConfig[this.activeIndex].key
      return obj[key]
    }
  },
  data() {
    return {
      show: false,
      career: '',
      activeIndex: 0,
      historyPickerData: [],
      cacheValues: [],
      pickerData: [],
      pickerValue: ''
    }
  },
  created() {
    this.getDefaultCareer()
  },
  watch: {
    value() {
      this.getDefaultCareer()
    }
  },
  methods: {
    getDefaultCareer() {
      if (this.value) {
        for (let i = this.keyConfig.length - 1; i >= 0; i--) {
          const options = this.options[this.keyConfig[i].key]
          for (let j = 0; j < options.length; j++) {
            if (options[j][this.value]) {
              this.career = options[j][this.value]
              return false
            }
          }
        }
      }
    },
    getOptions() {
      this.pickerData = this.getList(this.currentList)
    },
    getList(data) {
      return data.map(item => ({
        code: Object.keys(item)[0],
        text: item[Object.keys(item)]
      }))
    },
    getPickerData(list, value) {
      const len = value.code.length
      let newList = []
      for (let i = 0; i < list.length; i++) {
        const key = Object.keys(list[i])[0]
        if (key.substr(0, len) === value.code) {
          newList.push(list[i])
        }
      }
      this.historyPickerData.push(this.pickerData)
      this.pickerData = this.getList(newList)
      if (!this.pickerData.length) {
        this.finishPick(value)
      }
    },
    clickCell() {
      if (this.disabled) return false
      this.show = true
      this.$emit('onCellClick')
      this.getOptions()
    },
    cancelPicker() {
      if (this.activeIndex === 0) {
        this.show = false
        this.$emit('cancel')
        this.cacheValues = []
      } else {
        this.pickerData = this.historyPickerData.pop()
        this.cacheValues.length = this.cacheValues.length - 1
        this.activeIndex -= 1
      }
    },
    confirmPicker() {
      if (this.cacheValues.length !== this.keyConfig.length) return false
      this.pickerValue = this.pickerValue || this.pickerData[0]
      this.finishPick(this.pickerValue)
      this.pickerValue = ''
      this.cacheValues = []
    },
    changePicker(value) {
      this.pickerValue = value
      if (this.activeIndex < this.keyConfig.length - 1) {
        this.activeIndex += 1
        this.cacheValues.push(value)
        this.getPickerData(this.currentList, this.pickerValue)
      } else {
        this.cacheValues[this.activeIndex] = value
        return false
      }
    },
    finishPick(vlaue) {
      this.$emit('input', vlaue.code)
      this.$emit('finish', vlaue.code)
      this.career = vlaue.text
      this.activeIndex = 0
      this.show = false
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component career-picker {
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

    .sun-actionsheet-content {
      background: $white;
    }

    @descendent toolbar {
      display: flex;
      height: 50px;
      line-height: 50px;
      justify-content: space-between;
    }

    @descendent cancel, confirm {
      color: $blue;
      padding: 0 15px;
      font-size: 14px;

      &:active {
        background-color: $active-color;
      }
    }

    @descendent disabled {
      opacity: 0.5;
    }

    @descendent title {
      max-width: 50%;
      text-align: center;
      font-size: 18px;
    }

    @descendent list {
      height: 290px;
      padding: 5px 0;
      overflow-y: scroll;
      @descendent item {
        height: 35px;
        line-height: 35px;
        font-size: 15px;
        padding: 0 35px 0 12px;
        position: relative;
        .sun-ellipsis {
          display: inline-block;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      @descendent active {
        color: $blue;
        .sun-career-picker-list-icon {
          width: 15px;
          height: 11px;
          position: absolute;
          right: 12px;
          top: 12px;
        }
      }
    }
    @descendent steps {
      padding: 12px;
      background-color: $background-color;
      overflow: hidden;
      font-size: 13px;
    }

    @descendent step {
      line-height: 28px;
      position: relative;
      @descendent text {
        margin-left: 15px;
      }
      @descendent active {
        color: $blue;
      }
      @descendent circle {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid $blue;
        position: absolute;
        left: 0;
        top: 8px;
      }
      @descendent finish {
        background-color: $blue;
      }
      @descendent line {
        position: absolute;
        left: 4px;
        top: 12px;
        width: 1px;
        height: calc(100% - 4px);
        background-color: $blue;
      }
    }
  }
}
</style>
