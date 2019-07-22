<template>
  <i v-text="text" @touchstart.stop.prevent="onFocus" @touchmove="onBlur" @touchend="onBlur" @touchcancel="onBlur"
    :class="['sun-key', 'sun-line-top-right', className]" />
</template>

<script>

export default ({
  name: 's-key',

  props: {
    text: [String, Number],
    type: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      active: false
    }
  },

  computed: {
    className() {
      let types = this.type.slice(0)
      this.active && types.push('active')

      return types
    }
  },

  methods: {
    onFocus() {
      this.active = true
      this.$emit('press', this.text)
    },

    onBlur() {
      this.active = false
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component key {
    width: calc(100% / 3);
    font-size: 24px;
    font-style: normal;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    height: $sun-number-keyboard-key-height;
    line-height: $sun-number-keyboard-key-height;

    &.middle {
      width: calc(200% / 3);
    }

    &.big {
      width: 100%;
      height: calc($sun-number-keyboard-key-height * 2);
      line-height: calc($sun-number-keyboard-key-height * 2);
    }

    &.blue {
      font-size: 20px;
      color: $white;
      background-color: $blue;

      &.sun-key--active {
        background-color: #308305;
      }

      &::after {
        border-color: $blue;
      }
    }

    &.delete {
      font-size: 0;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAeCAMAAABg6AyVAAAAbFBMVEUAAAAfHiIdHB4eHR8dHR4eHB4dHB4dHR8gICIdHB4dHB4dHB4dHB8eHh8hISEeHR8fHB8fHR8fHR8fHx8eHiArKyszMzMeHB8eHB8fHR8eHiAeHh4dHB4vLjDY2Nn////b29zKysq9vb28vLzkfBRpAAAAHHRSTlMAK/PW+I/llBv77N1kSCPwWlFAOTMGBb28hHlu08g5sgAAAMlJREFUOMuV1MsWgiAQgGHQyOx+s+sgYO//jnnMGIdDDfwbN99CYEDQFiVEKkolPUG7gl9VTWC31NKuDbVz+Fc1tRJtPDmxS2BS3p5ZC+XXnnbAVoz2WEBCH7uZAalzGoa06whGiznT6sG2xgX4QO2Aej1+KN7XBKL2FvGaMtTWBhbQhtoaYzVQrHKwuGf8hhAPSF5g3xPSt45sCHcouNWx436FGA+RHyQcD35EcUj54U8ff4WYvVi1zLjelUh/OG6XjOeLWv5hfAOI+HLwwOAqhAAAAABJRU5ErkJggg==")
        no-repeat center center;
      background-size: auto 15px;
    }

    &.gray {
      background-color: #f3f3f6;
    }

    &.active {
      background-color: $active-color;
    }
  }
}

</style>
