<template>
  <div class="sun-button" :class="[
      'sun-button-' + type,
      'sun-button-' + size,
      {
        'sun-button-block':block,
        'sun-button-checked':checked,
        'sun-button-loading':loading,
        'sun-button-disabled':disabled,
        'sun-button-unclickable': disabled || loading,
        'sun-button-bottom-action': bottomAction,
        'plain': plain
      }
    ]"
    @click="onClick">
    <sun-spinner class="sun-button-loading-loading" v-if="loading" :size="20" type="fading-circle" />
    <slot name="extra-left" />
    <span class="sun-button-des">
      <slot></slot>
    </span>
    <slot name="extra-right" />
  </div>
</template>

<script>
import SunSpinner from '../../spinner'

export default {
  name: 'sun-button',

  components: { SunSpinner },

  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    bottomAction: Boolean,
    plain: Boolean,
    checked: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'text',
          'primary',
          'light',
          'danger'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'mini',
          'small',
          'normal',
          'large',
          'full'
        ].indexOf(value) > -1
      }
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component button {
    position: relative;
    padding: 0;
    display: inline-block;
    height: 44px;
    line-height: 42px;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    text-align: center;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;

    &::before {
      content: " ";
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      width: 100%;
      height: 100%;
      border: inherit;
      border-color: $black;
      background-color: $black;
      border-radius: inherit; /* inherit parent's border radius */
      transform: translate(-50%, -50%);
    }

    &:active::before {
      opacity: 0.3;
    }

    @descendent des {
      /* display: inline-block;
      vertical-align: middle; */
    }

    @descendent unclickable {
      &::before {
        display: none;
      }
    }

    @descendent default {
      color: $button-default-color;
      background-color: $button-default-background-color;
      border: 1px solid $button-default-border-color;
      &.plain {
        color: $button-default-color;
        background-color: transparent;
        border: 1px solid $button-default-color;
      }
    }

    @descendent primary {
      color: $button-primary-color;
      background-color: $button-primary-background-color;
      border: 1px solid $button-primary-border-color;
      &.plain {
        color: $button-primary-border-color;
        background-color: transparent;
        border: 1px solid $button-primary-border-color;
      }
    }

    @descendent danger {
      color: $button-danger-color;
      background-color: $button-danger-background-color;
      border: 1px solid $button-danger-border-color;
      &.plain {
        color: $button-danger-border-color;
        background-color: transparent;
        border: 1px solid $button-danger-border-color;
      }
    }

    @descendent light {
      color: $button-primary-background-color;
      background-color: $button-primary-background-light-color;
      border: 1px solid $button-primary-border-light-color;
    }

    @descendent text {
      border-color: transparent;
      color: $button-primary-background-color;
      background: transparent;
      padding-left: 0;
      padding-right: 0;
      &.disabled {
        opacity: 1;
        colol: $button-default-color;
      }
    }

    @descendent checked {
      background-image: url("../../../assets/btn_sel.png");
      background-repeat: no-repeat;
      background-position: top right;
      background-size: 14px, 14px;
      border: 1px solid $button-primary-border-color;
      color: $button-primary-border-color;
    }

    @descendent large {
      width: 100%;
      height: 50px;
      line-height: 48px;
    }

    @descendent normal {
      padding: 0 16px;
      font-size: 14px;
    }

    @descendent small {
      height: 28px;
      padding: 0 12px;
      font-size: 14px;
      line-height: 28px;
    }

    @descendent full {
      width: 100%;
      font-size: 15px;
      height: 32px;
      line-height: 32px;
    }

    @descendent loading {
      @descendent loading {
        display: inline-block;
        margin-right: 8px;
        vertical-align: middle;
      }
      /* .text { */
      /* display: none;
      } */
    }

    /* mini图标默认宽度50px，文字不能超过4个 */
    @descendent mini {
      display: inline-block;
      width: 50px;
      height: 22px;
      line-height: 20px;
      font-size: 10px;

      /* & + .mini {
        margin-left: 5px;
      } */
    }

    @descendent block {
      width: 100%;
      display: block;
    }

    @descendent bottom-action {
      width: 100%;
      height: 50px;
      line-height: 50px;
      border: 0;
      border-radius: 0;
      font-size: 16px;
      color: $button-bottom-action-default-color;
      background-color: $button-bottom-action-default-background-color;

      @descendent primary {
        background-color: $button-bottom-action-primary-background-color;
      }
    }

    @descendent disabled {
      opacity: 0.6;
    }
  }
}
</style>
