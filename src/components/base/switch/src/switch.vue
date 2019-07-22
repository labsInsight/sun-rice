<template>
  <div :class="[
      'sun-switch',
      {'on': value,
      'disabled': disabled}
    ]" :style="style" @click="onClick">
    <div class="sun-switch-node">
      <sun-spinner v-if="loading" class="sun-switch-loading" :size="size/2" color="#000" type="fading-circle" />
      <div class="sun-switch-text" v-if="text">
        <span>{{value ? text[0] : text[1]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SunSpinner from '../../spinner'

export default ({
  name: 's-switch',

  components: { SunSpinner },

  props: {
    value: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 30
    },
    text: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    style() {
      return {
        fontSize: this.size + 'px'
      }
    }
  },

  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit('input', !this.value)
        this.$emit('change', !this.value)
      }
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component switch {
    height: 1em;
    width: 1.6em;
    position: relative;
    background: $white;
    box-sizing: content-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1em;

    @descendent node {
      top: 0;
      left: 0;
      z-index: 1;
      width: 1em;
      height: 1em;
      transition: 0.3s;
      position: absolute;
      border-radius: 100%;
      background-color: $white;
      box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05),
        0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
    }

    @descendent loading {
      position: absolute;
      top: 25%;
      left: 25%;
      width: 50%;
      height: 50%;
    }

    @descendent text {
      display: table;
      width: 100%;
      height: 100%;
      font-size: 0.5em;
      text-align: center;

      span {
        display: table-cell;
        vertical-align: middle;
      }
    }

    &.on {
      background-color: $blue;

      .sun-switch-node {
        transform: translateX(0.6em);
      }
    }

    &.disabled {
      opacity: 0.4;
    }
  }
}
</style>
