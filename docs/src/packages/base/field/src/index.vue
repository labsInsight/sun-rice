<template>
  <div class="sun-field">
    <sun-cell :icon="leftIcon" :title="label" :center="center" :required="required" :titleWidth="titleWidth" :class="[
        'sun-field-cell',
        { error,
          disabled: $attrs.disabled,
          'min-height': type === 'textarea' && !autosize
        }
      ]">
      <slot name="label" slot="title" />
      <div class="sun-field-cell-body">
        <textarea v-if="type === 'textarea'" v-bind="$attrs" v-on="listeners" ref="input" :class="['sun-field-cell-body-control', inputAlign]"
          :value="computeValue" />
        <input
          v-else
          v-bind="$attrs"
          v-on="listeners"
          ref="input"
          :class="['sun-field-cell-body-control', inputAlign]"
          :type="type"
          :value="computeValue"
        >
        <img
          v-if="showClear"
          src="../../../assets/del.png"
          class="sun-field-cell-body-clear"
          @touchstart.prevent="$emit('input', '')"
        />
        <slot name="right-icon" >
          <img v-if="rightIcon" class="sun-field-cell-body-icon" :src="rightIcon" @click="onClickIcon" />
        </slot>
        <div v-if="$slots.button" class="sun-field-cell-body-button">
          <slot name="button" />
        </div>
      </div>
      <div
        v-if="errorMessage"
        v-text="errorMessage"
        :class="['sun-field-cell-error-message', inputAlign]"
      />
    </sun-cell>
    <sun-number-keyboard
      v-show="extraKey && keyboardShow"
      theme="custom"
      close-button-text="完成"
      :extra-key="extraKey"
      @blur="onKeyBlur"
      @input="onKeyInput"
      @delete="onKeyDelete"
    />
  </div>
</template>

<script>
import { SunCell, SunCellGroup } from '../../cell'
import SunNumberKeyboard from '../../number-keyboard'

export default ({
  name: 'sun-field',

  components: { SunCell, SunCellGroup, SunNumberKeyboard },

  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    titleWidth: {
      type: [String, Number],
      default: '115'
    },
    rightIcon: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    inputAlign: {
      type: String,
      default: 'right'
    },
    error: Boolean,
    center: Boolean,
    required: Boolean,
    clearable: Boolean,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    extraKey: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      focused: false,
      computeValue: '',
      keyboardShow: false
    }
  },

  watch: {
    value() {
      this.computeValue = this.value

      this.$nextTick(this.adjustSize)
    }
  },

  mounted() {
    this.computeValue = this.value

    this.$nextTick(this.adjustSize)
  },

  computed: {
    showClear() {
      return this.clearable && this.focused && this.value !== ''
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      }
    }
  },

  methods: {
    // 自定义键盘输入事件
    onKeyInput(value) {
      this.computeValue += value
      this.$emit('input', this.computeValue)
    },
    onKeyDelete() {
      this.computeValue = this.computeValue.slice(0, -1)
      this.$emit('input', this.computeValue)
    },
    onKeyBlur() {
      this.keyboardShow = false
    },

    blur() {
      this.$refs.input && this.$refs.input.blur()
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onFocus(event) {
      if (this.extraKey !== '') {
        this.blur()
      }
      this.keyboardShow = true

      this.focused = true
      this.$emit('focus', event)
    },
    onBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },

    onClickIcon() {
      this.$emit('click-icon')
      this.onIconClick && this.onIconClick()
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event
        const allowPoint = String(this.computeValue).indexOf('.') === -1
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45
        if (!isValidKey) {
          event.preventDefault()
        }
      }
      this.$emit('keypress', event)
    },

    adjustSize() {
      const { input } = this.$refs
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return
      }

      input.style.height = 'auto'

      let height = input.scrollHeight
      if (Object.keys(this.autosize).length !== 0) {
        const { maxHeight, minHeight } = this.autosize
        if (maxHeight) {
          height = Math.min(height, maxHeight)
        }
        if (minHeight) {
          height = Math.max(height, minHeight)
        }
      }

      if (height) {
        input.style.height = height + 'px'
      }
    }
  }
})
</script>

<style lang="css">
@import "../../../styles/theme.css";

@component-namespace sun {
  @component field {
    width: 100%;
    &:last-child {
      .sun-cell {
        background-image: none;
      }
    }

    @descendent cell {
      .sun-cell-title{
        /* flex: auto; */
        /* max-width: 115px; */
      }
      .sun-cell-value{
        flex: 1;
      }

      @descendent title {
        max-width: 100px;
        min-width: 60px;
      }

      &.error {
        .sun-field-cell-body-control {
          &,
          &::placeholder {
            color: $red;
          }
        }
      }

      &.disabled {
        .sun-field-cell-body-control {
          color: $gray-dark;
        }
      }

      &.min-height {
        .sun-field-cell-body-control {
          min-height: 60px;
        }
      }

      @descendent body {
        display: flex;
        align-items: center;

        @descendent control {
          outline: none;
          border: none;
          margin: 0;
          padding: 0;
          line-height: 24px;
          width: 100%;
          resize: none;
          display: block;
          box-sizing: border-box;
          background-color: transparent;
          font-size: 14px;

          &:disabled {
            opacity: 1;
            color: $gray-darker;
            background-color: transparent;
          }

          &.center {
            text-align: center;
          }

          &.right {
            text-align: right;
          }

          &::-webkit-input-placeholder{
            color: $placeholder-color;
          }
        }

        @descendent clear,icon,button {
          flex-shrink: 0;
        }

        @descendent clear,icon {
          width: 16px;
          height: 16px;
          padding: 0 10px;
          color: $gray-dark;
          line-height: inherit;
          margin-right: -10px;
        }

        @descendent icon {
          display: block;
          font-size: 16px;
          line-height: inherit;
        }

        @descendent button {
          padding-left: 10px;
          display: flex;
          .sun-button-text {
            padding: 0;
          }
        }
      }

      @descendent error-message {
        color: $red;
        font-size: 12px;
        text-align: left;
        &.center {
          text-align: center;
        }

        &.right {
          text-align: right;
        }
      }
    }
  }
}
</style>
