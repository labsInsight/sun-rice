<template>
  <div :class="['sun-cell', { required, clickable, 'sun-line-top-bottom': border}]" @click="onClick">
    <slot name="left-icon">
      <img v-if="icon" class="sun-cell-left-icon" :src="icon" />
    </slot>
    <div v-if="title || $slots.title" class="sun-cell-title" :style="`max-width: ${titleWidth}px`">
      <slot name="title">
        <span v-text="title" />
        <div v-if="label" v-text="label" class="sun-cell-name-label" />
      </slot>
    </div>
      <div v-if="value === 0 || value === '0' || value || $slots.default" :class="['sun-cell-value', { alone: !$slots.title && !title }]" :style="`max-width: ${labelWidth}px`">

      <slot>
        <span v-text="value" />
      </slot>
    </div>
    <slot name="right-icon">
      <img v-if="arrowDirection" :class="['sun-cell-right-icon', arrowDirection]" src="../../../assets/arrow_right.png" />
    </slot>
    <slot name="extra" />
  </div>
</template>

<script>
export default ({
  name: 'sun-cell',

  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    titleWidth: {
      type: [String, Number],
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    required: Boolean,
    clickable: Boolean,
    border: Boolean,
    arrowDirection: {
      type: String,
      default: '',
      validator(value) {
        return [
          'up',
          'down',
          'right',
          'left'
        ].indexOf(value) > -1 || value === ''
      }
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component cell {
    width: 100%;
    display: flex;
    padding: 13px 15px;
    box-sizing: border-box;
    line-height: 24px;
    position: relative;
    background-color: $white;
    color: $text-color;
    font-size: 14px;
    overflow: hidden;

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
    &.clickable {
      &:active {
        background-color: $active-color;
      }
    }
    &.required {
      &::before {
        content: "*";
        position: absolute;
        left: 7px;
        font-size: 14px;
        color: $red;
      }
    }
    @descendent left-icon {
      width: 16px;
      height: 16px;
      margin: auto 5px auto 0;
    }
    @descendent title {
      flex: 1;
      align-self: center;
      text-align: left;
      @descendent label {
        font-size: 12px;
        line-height: 1.2;
        color: $gray-darker;
      }
    }
    @descendent value {
      flex: 1;
      align-self: center;
      overflow: hidden;
      text-align: right;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &.alone {
        text-align: left;
      }
    }
    @descendent right-icon {
      align-self: center;
      width: 12px;
      height: 12px;
      margin-left: 5px;
      &.left {
        transform: rotate(180deg);
        width: 12px;
        height: 12px;
      }
      &.up {
        transform: rotate(-90deg);
        width: 12px;
        height: 12px;
      }
      &.down {
        transform: rotate(90deg);
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
