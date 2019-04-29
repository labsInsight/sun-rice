<template>
  <div class="sun-radiolist" @change="$emit('change', currentValue)">
    <sun-cell v-for="(option, index) in options" :key="index">
      <label class="sun-radiolist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="sun-radio">
          <input class="sun-radio-input" type="radio" v-model="currentValue" :disabled="option.disabled" :value="option.value || option">
          <span class="sun-radio-core"></span>
        </span>
        <span class="sun-radio-label" v-text="option.label || option"></span>
      </label>
    </sun-cell>
  </div>
</template>

<script>
import { SunCell } from '../../cell'
export default {
  name: 'sun-radio',

  components: {
    SunCell
  },
  props: {
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="css">
@import "../../../styles/theme.css";

@component-namespace sun {
  @component radiolist {
    @descendent label {
      display: block;
      padding: 0 10px;
    }
  }

  @component radio {
    @when right {
      float: right;
    }

    @descendent label {
      margin-left: 6px;
    }

    @descendent input {
      display: none;

      &:checked {
        + .sun-radio-core {
          background-color: $blue;
          border-color: $blue;

          &::after {
            background-color: $white;
            transform: scale(1);
          }
        }
      }

      &[disabled] + .sun-radio-core {
        background-color: $gray;
        border-color: #ccc;
      }
    }

    @descendent core {
      box-sizing: border-box;
      display: inline-block;
      background-color: $white;
      border-radius: 100%;
      border: 1px solid #ccc;
      position: relative;
      size: 20px;
      vertical-align: middle;

      &::after {
        content: " ";
        border-radius: 100%;
        position: absolute 5px * * 5px;
        size: 8px;
        transition: transform 0.2s;
        transform: scale(0);
      }
    }
  }
}
</style>
