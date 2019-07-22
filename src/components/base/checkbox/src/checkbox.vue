<template>
  <div class="sun-checkbox">
    <span class="sun-checkbox-check" :class="[{ 'sun-checkbox-disabled': isDisabled, 'sun-checkbox-checked' : checked}]"
      @click="onClick"></span>
    <span v-if="$slots.default" class="sun-checkbox-label" @click="onClick('label')">
      <slot />
    </span>
  </div>
</template>

<script>
import findParent from '@/mixins/find-parent'

export default ({
  name: 's-checkbox',

  mixins: [findParent],

  props: {
    name: {
      type: String,
      default: ''
    },
    value: null,
    disabled: Boolean,
    labelDisabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    checked: {
      get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value
      },

      set(val) {
        const { parent } = this
        if (parent) {
          const parentValue = this.parent.value.slice()
          if (val) {
            if (parent.max && parentValue.length >= parent.max) {
              return
            }
            /* istanbul ignore else */
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name)
              parent.$emit('input', parentValue)
            }
          } else {
            const index = parentValue.indexOf(this.name)
            /* istanbul ignore else */
            if (index !== -1) {
              parentValue.splice(index, 1)
              parent.$emit('input', parentValue)
            }
          }
        } else {
          this.$emit('input', val)
        }
      }
    },

    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled
    }
  },

  watch: {
    value(val) {
      this.$emit('change', val)
    }
  },

  created() {
    this.findParent('s-checkbox-group')
  },

  methods: {
    onClick(target) {
      if (!this.isDisabled && !(target === 'label' && this.labelDisabled)) {
        this.checked = !this.checked
      }
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component checkbox {
    overflow: hidden;
    user-select: none;

    @descendent label {
      display: inline-block;
      vertical-align: middle;
      line-height: 20px;
      margin-left: 10px;
    }

    @descendent check {
      box-sizing: border-box;
      display: inline-block;
      background-color: $white;
      border-radius: 100%;
      border: 1px solid $gray;
      position: relative;
      width: 20px;
      height: 20px;
      vertical-align: middle;

      &::after {
        border: 2px solid transparent;
        border-left: 0;
        border-top: 0;
        content: " ";
        top: 3px;
        left: 6px;
        position: absolute;
        width: 4px;
        height: 8px;
        transform: rotate(45deg) scale(0);
      }
    }

    @descendent checked {
      background-color: $blue;
      border-color: $blue;

      &::after {
        border-color: $white;
        transform: rotate(45deg) scale(1);
      }
    }

    @descendent disabled {
      color: $background-color;
      border-color: $gray-light;
      background-color: $gray-light;
    }
  }
}
</style>
