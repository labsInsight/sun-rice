<template>
  <div class="sun-spinner-triple-bounce" :style="{ 'width': (this.size || this.$parent.size) * 3.5 + 'px' }">
    <div class="sun-spinner-triple-bounce-bounce1" :style="bounceStyle"></div>
    <div class="sun-spinner-triple-bounce-bounce2" :style="bounceStyle"></div>
    <div class="sun-spinner-triple-bounce-bounce3" :style="bounceStyle"></div>
  </div>
</template>

<script>
import common from './common.vue'

export default {
  name: 's-triple-bounce',

  mixins: [common],

  computed: {
    bounceStyle() {
      return {
        width: this.spinnerSize,
        height: this.spinnerSize,
        backgroundColor: this.spinnerColor
      }
    }
  }
}
</script>

<style lang="css" >

@component-namespace sun-spinner {
  @component triple-bounce {
    display: flex;
    justify-content: space-between;
    @descendent bounce1, bounce2, bounce3 {
      border-radius: 100%;
      animation: sun-spinner-triple-bounce 1.4s infinite ease-in-out both;
    }

    @descendent bounce1 {
      animation-delay: -0.32s;
    }

    @descendent bounce2 {
      animation-delay: -0.16s;
    }
  }
}

@keyframes sun-spinner-triple-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>
