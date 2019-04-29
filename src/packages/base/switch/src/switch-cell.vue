<template>
  <sun-cell center :title="title" :border="border" class="sun-switch-cell">
    <slot name="extra">
      <span class="sun-switch-des" v-if="des">{{value ? des[0] : des[1]}}</span>
      <sun-switch v-bind="$props" @input="$emit('input', $event)" />
    </slot>
  </sun-cell>
</template>

<script>
import SunSwitch from './switch'
import { SunCell, SunCellGroup } from '../../cell'

export default ({
  name: 'sun-switch-cell',

  components: { SunSwitch, SunCell, SunCellGroup },

  props: {
    title: {
      type: String,
      default: ''
    },
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      default: 26
    },
    text: {
      type: Array,
      default: () => []
    },
    des: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    value() {
      this.$emit('change', this.value)
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component switch {
    @descendent cell {
      .sun-switch {
        position: absolute;
        right: 15px;
        top: 11px;
      }
    }

    @descendent des {
      position: absolute;
      right: 70px;
    }
  }
}
</style>
