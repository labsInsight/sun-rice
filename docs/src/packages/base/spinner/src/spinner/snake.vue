<template>
  <div class="sun-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': (this.size || this.$parent.size) - 6 + 'px',
    'width': (this.size || this.$parent.size) - 6 + 'px'
    }">
  </div>
</template>

<script>
import common from './common.vue'

export default {
  name: 'sun-snake',

  mixins: [common]
}
</script>

<style lang="css">

@component-namespace sun-spinner {
  @component snake {
    animation: sun-spinner-rotate 0.8s infinite linear;
    border: 3px solid transparent;
    border-radius: 50%;
  }
}
</style>
