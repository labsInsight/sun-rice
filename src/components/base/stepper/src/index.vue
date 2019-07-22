<template>
  <div class="sun-stepper">
    <sun-button :class="['sun-stepper-minus', { disabled: minusDisabled }]" @click="onChange('minus')">-</sun-button>
    <input type="number" class="sun-stepper-input" :value="currentValue" :disabled="disabled || disableInput" @input="onInput"
      @blur="onBlur">
    <sun-button :class="['sun-stepper-plus', { disabled: plusDisabled }]" @click="onChange('plus')">+</sun-button>
  </div>
</template>

<script>
import SunButton from '../../button'

export default ({
  name: 's-stepper',

  components: { SunButton },

  props: {
    value: null,
    integerOnly: Boolean,
    disabled: Boolean,
    disableInput: Boolean,
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: Infinity
    },
    step: {
      type: [String, Number],
      default: 1
    },
    defaultValue: {
      type: [String, Number],
      default: 1
    }
  },

  data() {
    const value = this.range(this.value || this.defaultValue)
    if (value !== +this.value) {
      this.$emit('input', value)
    }

    return {
      currentValue: value
    }
  },

  computed: {
    minusDisabled() {
      return this.disabled || this.currentValue <= this.min
    },

    plusDisabled() {
      return this.disabled || this.currentValue >= this.max
    }
  },

  watch: {
    value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val)
      }
    },

    currentValue(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },

  methods: {
    // filter illegal characters
    format(value) {
      value = String(value).replace(/[^0-9.-]/g, '')
      return value === '' ? 0 : this.integerOnly ? Math.floor(value) : +value
    },

    // limit value range
    range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min)
    },

    onInput(event) {
      const { value } = event.target
      const formatted = this.format(value)

      if (+value !== formatted) {
        event.target.value = formatted
      }

      this.currentValue = formatted
    },

    onChange(type) {
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type)
        return
      }

      const diff = type === 'minus' ? -this.step : +this.step
      const value = Math.round((this.currentValue + diff) * 100) / 100
      this.currentValue = this.range(value)
      this.$emit(type)
    },

    onBlur(event) {
      this.currentValue = this.range(this.currentValue)
      this.$emit('blur', event)
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component stepper {
    font-size: 0;

    @descendent minus, plus {
      width: 40px;
      height: 30px;
      line-height: 28px;
      box-sizing: border-box;
      background-color: $white;
      border: 1px solid $border-color;
      position: relative;
      padding: 0 5px;
      vertical-align: middle;
      &.sun-button {
        width: 40px;
        height: 30px;
        line-height: 28px;
        border-radius: 0;
      }

      &:active {
        background-color: $active-color;
      }

      &.disabled {
        background-color: $background-color;

        &::before,
        &::after {
          background-color: $gray;
        }
      }

      &.disabled:active {
        background-color: $background-color;
      }
    }

    @descendent minus {
      border-radius: 2px 0 0 2px;

      &::after {
        display: none;
      }
    }

    @descendent plus {
      border-radius: 0 2px 2px 0;
    }

    @descendent input {
      width: 33px;
      height: 26px;
      padding: 1px;
      border: 1px solid $border-color;
      border-width: 1px 0;
      border-radius: 0;
      box-sizing: content-box;
      color: $gray-darker;
      font-size: 14px;
      vertical-align: middle;
      text-align: center;
      -webkit-appearance: none;

      &[disabled] {
        color: $gray;
        background-color: $background-color;
      }
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}

/* .sun-stepper {
  font-size: 0;

  .minus,
  .plus {
    width: 40px;
    height: 30px;
    line-height: 28px;
    box-sizing: border-box;
    background-color: $white;
    border: 1px solid $border-color;
    position: relative;
    padding: 0 5px;
    vertical-align: middle;

    &:active {
      background-color: $active-color;
    }

    &.disabled {
      background-color: $background-color;

      &::before,
      &::after {
        background-color: $gray;
      }
    }

    &.disabled:active {
      background-color: $background-color;
    }
  }

  .minus {
    border-radius: 2px 0 0 2px;

    &::after {
      display: none;
    }
  }

  .plus {
    border-radius: 0 2px 2px 0;
  }

  .input {
    width: 33px;
    height: 26px;
    padding: 1px;
    border: 1px solid $border-color;
    border-width: 1px 0;
    border-radius: 0;
    box-sizing: content-box;
    color: $gray-darker;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    -webkit-appearance: none;

    &[disabled] {
      color: $gray;
      background-color: $background-color;
    }
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
} */
</style>
