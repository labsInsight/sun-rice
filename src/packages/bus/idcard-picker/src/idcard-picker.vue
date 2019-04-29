 <template>
  <div class="sun-idcard-picker">
    <sun-cell :title="title" center :class="termType === 'short' ? 'no-border' : ''">
      <slot name="extra">
        <div>
          <sun-button :type="termType === 'long' ? 'light' : 'default'" size="small" class="sun-idcard-picker-btn"
            @click="chooseType('long')">长期</sun-button>
          <sun-button :type="termType === 'short' ? 'light' : 'default'" size="small" class="sun-idcard-picker-btn"
            @click="chooseType('short')">非长期</sun-button>
        </div>
      </slot>
    </sun-cell>
    <div class="sun-idcard-picker-pickers" v-if="termType === 'short'">
      <div class="sun-idcard-picker-pickers-lable">起始日期：</div>
      <div class="sun-idcard-picker-pickers-inputs">
        <div class="sun-idcard-picker-pickers-inputs-item" @click="clickCell('start')">
          <i class="sun-idcard-picker-pickers-inputs-icon"></i>
          <span type="text" class="sun-idcard-picker-pickers-inputs-input" :class="startDate ? '' : 'sun-idcard-picker-pickers-inputs-placeholder'"
            >{{startDate ?
            startDate :'请选择日期'}}</span>
        </div>
        <div class="sun-idcard-picker-pickers-inputs-item" @click="clickCell('end')" >
          <i class="sun-idcard-picker-pickers-inputs-icon"></i>
          <span type="text" class="sun-idcard-picker-pickers-inputs-input" :class="endDate ? '' : 'sun-idcard-picker-pickers-inputs-placeholder'"
            style="margin-left: 10px">{{endDate
            ? endDate: '请选择日期'}}</span>
        </div>
      </div>
    </div>

    <div class="sun-idcard-picker-modal" v-if="showPicker"></div>

    <transition name="sun-slide-bottom">
      <sun-datetime-picker v-show="showPicker" type="date" :value="computeDate" showToolbar :minDate="minDate" :maxDate="maxDate"
        @cancel="onCancel" @confirm="onConfirm" />
    </transition>
  </div>
</template>

<script>
import { SunDatetimePicker } from '../../../base/datetime-picker'
import SunButton from '../../../base/button'
import { SunCell } from '../../../base/cell'

export default ({
  name: 'sun-idcard-picker',

  components: { SunDatetimePicker, SunCell, SunButton },

  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: () => { }
    },
    minDate: {
      type: Date
    },
    maxDate: {
      type: Date
    },
    disabled: Boolean
  },

  data() {
    return {
      termType: 'short',
      format: 'yyyy-MM-dd',
      showPicker: false,
      dateObj: {
        startDate: null,
        endDate: null
      },
      startDate: '',
      endDate: '',
      activeInput: '',
      computeDate: ''
    }
  },

  watch: {
    value() {
      this.$emit('change', this.value)
      this.initDate(this.value)
    }
  },

  created() {
    this.initDate(this.value)
  },

  methods: {
    initDate(value) {
      if (value.startDate) {
        this.startDate = this.formatStr(value.startDate)
        this.dateObj.startDate = value.startDate
      }
      if (value.endDate) {
        this.endDate = this.formatStr(value.endDate)
        this.dateObj.endDate = value.endDate
      }
    },
    chooseType(type) {
      if (this.disabled) return false
      this.termType = type
      const newDate = this.formatStr(new Date())
      const dateObj = {
        startDate: newDate,
        endDate: type === 'long' ? '9999-12-31' : newDate
      }
      this.$emit('input', dateObj)
      this.$emit('select', type)
      this.initDate(this.value)
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
    getComputeDate(date) {
      if (typeof date === 'string') date = new Date(date.replace(/-/g, '/'))
      return date
    },
    clickCell(name) {
      if (this.disabled) return false
      this.computeDate = this.getComputeDate(name === 'start' ? this.value.startDate : this.value.endDate)
      this.activeInput = name
      this.showPicker = true
      this.forbidBodyScroll()
    },
    onConfirm(value) {
      this.showPicker = false
      this.allowBodyScroll()
      if (this.activeInput === 'start') {
        if (typeof this.value.startDate === 'string') {
          this.dateObj.startDate = this.formatStr(value)
        } else {
          this.dateObj.startDate = value
        }
        this.startDate = this.formatStr(value)
      } else {
        if (typeof this.value.endDate === 'string') {
          this.dateObj.endDate = this.formatStr(value)
        } else {
          this.dateObj.endDate = value
        }
        this.endDate = this.formatStr(value)
      }
      this.$emit('input', this.dateObj) // 将值传入父组件的v-model
      this.$emit('confirm', this.dateObj)
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

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component idcard-picker {
    position: relative;
    width: 100%;
    .sun-cell {
      line-height: 28px;
    }
    .no-border {
      background-image: none !important;
    }

    @descendent btn {
      width: 70px;
      border-radius: 14px !important;
      margin-left: 10px;
    }

    @descendent pickers {
      overflow: hidden;
      box-sizing: border-box;
      color: $gray;
      height: 45px;
      line-height: 30px;
      padding: 0 15px 15px;
      font-size: 14px;
      background-color: $white;
      display: flex;
      &:not(:last-child) {
        background-image: linear-gradient(
          0deg,
          $gray-light,
          $gray-light 50%,
          transparent 50%
        );
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: 15px 100%;
      }
      @descendent lable {
        display: inline-block;
        width: 100px;
        color: $button-default-color;
      }
      @descendent inputs {
        display: inline-block;
        flex: 1;
        display: flex;

        @descendent item {
          position: relative;
          display: inline-block;
        }

        @descendent icon {
          position: absolute;
          display: inline-block;
          width: 20px;
          height: 20px;
          right: 7px;
          top: 6px;
          background: url("../../../assets/date.png") no-repeat center center;
          background-size: 100%;
        }

        @descendent input {
          display: inline-block;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 3px;
          padding: 0 5px;
          width: 120px;
          height: 30px;
          font-size: 1em;
          color: $text-color;
        }
        @descendent placeholder {
          color: $placeholder-color;
        }
      }
    }

    @descendent modal {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 888;
    }
    .sun-picker {
      z-index: 999;
      position: fixed;
      bottom: 0;
    }
  }
}
</style>
