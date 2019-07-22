<template>
  <div class="sun-submit-bar">
    <div class="sun-submit-bar-tip" v-if="tip || $slots.tip">
      {{ tip }}
      <slot name="tip" />
    </div>
    <div class="sun-submit-bar-bar">
      <slot />
      <div class="sun-submit-bar-price">
        <template v-if="hasPrice">
          <span>{{ label }}</span>
          <span class="sun-submit-bar-price-decimal">{{ currency }}</span>
          <span class="sun-submit-bar-price-integer">{{ priceInterger }}.{{ priceDecimal }}</span>

        </template>
      </div>
      <sun-button :type="buttonType" :disabled="disabled" :loading="loading" @click="$emit('submit')">
        {{ loading ? '' : buttonText }}
      </sun-button>
    </div>
  </div>
</template>

<script>
import SunButton from '../../../base/button'

export default ({
  name: 's-submit-bar',

  components: { SunButton },

  props: {
    tip: {
      type: String,
      default: ''
    },
    type: Number,
    price: Number,
    label: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    buttonText: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    hasPrice() {
      return typeof this.price === 'number'
    },
    priceInterger() {
      return Math.floor(this.price / 100)
    },
    priceDecimal() {
      const decimal = Math.floor(this.price % 100)
      return (decimal < 10 ? '0' : '') + decimal
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component submit-bar {
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    position: fixed;
    user-select: none;

    @descendent tip {
      color: $orange;
      padding: 10px;
      font-size: 12px;
      line-height: 18px;
      background-color: #fff7cc;
    }

    @descendent bar {
      height: 45px;
      display: flex;
      font-size: 16px;
      align-items: center;
      background-color: $white;
    }

    @descendent price {
      flex: 1;
      text-align: right;
      color: $gray-darker;
      padding-right: 12px;

      span {
        display: inline-block;
      }
    }

    @descendent price-integer {
      color: $red;
    }

    @descendent price-decimal {
      color: $red;
      font-size: 12px;
    }

    .sun-button {
      width: 110px;
      height: 100%;
      border-radius: 0;
      font-size: 16px;

      &.sun-button-disabled {
        border: none;
      }
    }
  }
}
</style>
