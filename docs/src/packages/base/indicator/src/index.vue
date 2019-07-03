<template>
  <transition name="sun-indicator">
    <div class="sun-indicator" v-show="visible">
      <div class="sun-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <sun-spinner class="sun-indicator-spin" :type="convertedSpinnerType" :size="size" :color="color" />
        <span class="sun-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="sun-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script >
import SunSpinner from '../../spinner'

export default {
  name: 'sun-indicator',

  components: { SunSpinner },

  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'snake'
    },
    size: {
      type: Number,
      default: 32
    },
    color: {
      type: String,
      default: '#fff'
    }
  },

  computed: {
    convertedSpinnerType() {
      return this.type ? this.type : ''
    }
  },

  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component indicator {
    transition: opacity 0.2s linear;

    @descendent wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
      z-index: 3000;
    }

    @descendent text {
      display: block;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
    }

    @descendent spin {
      display: inline-block;
      text-align: center;
    }

    @descendent mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: transparent;
      z-index: 3000;
    }
  }
}

.sun-indicator-enter,
.sun-indicator-leave-active {
  opacity: 0;
}
</style>
