<template>
  <transition name="sun-toast-pop">
    <div class="sun-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconType === '' ? '10px' : '20px' }">
      <img v-if="ICON_LIST[iconType]" class="sun-toast-icon" :src="ICON_LIST[iconType]" />
      <sun-spinner v-if="iconType=='loading'" class="sun-toast-loading" :size="28" color="white" type="fading-circle" />
      <span class="sun-toast-text" :style="{ 'padding-top': iconType === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import SuccessIcon from '@/assets/toast_success.png'
import WarningIcon from '@/assets/toast_warning.png'
import ErrorIcon from '@/assets/toast_error.png'
import SunSpinner from '../../spinner'

const ICON_LIST = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon
}

export default {
  name: 's-toast',

  components: { SunSpinner },

  props: {
    message: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle',
      validator(value) {
        return [
          'top',
          'middle',
          'bottom'
        ].indexOf(value) > -1
      }
    },
    iconType: {
      type: String,
      default: '',
      validator(value) {
        return [
          'success',
          'warning',
          'error',
          'loading'
        ].indexOf(value) > -1 || value === ''
      }
    }
  },

  data() {
    return {
      ICON_LIST,
      visible: false
    }
  },

  computed: {
    customClass() {
      var classes = []
      switch (this.position) {
        case 'top':
          classes.push('sun-toast-placetop')
          break
        case 'bottom':
          classes.push('sun-toast-placebottom')
          break
        default:
          classes.push('sun-toast-placemiddle')
      }
      return classes.join(' ')
    }
  }
}
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transition: opacity 0.3s linear;

    @descendent icon {
      width: 56px;
      height: 56px;
      display: block;
      text-align: center;
    }

    @descendent loading {
      display: inline-block;
      text-align: center;
    }

    @descendent text {
      color: $white;
      font-size: 14px;
      display: block;
      text-align: center;
    }

    @descendent pop-enter, pop-leave-active {
      opacity: 0;
    }

    @descendent placetop {
      top: 50px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    @descendent placemiddle {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @descendent placebottom {
      bottom: 50px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>
