<template>
  <div v-show="value" class="sun-image-preview" @touchstart="onTouchStart" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
    <sun-swipe :initial-swipe="startPosition" ref="swipe">
      <sun-swipe-item v-for="(item, index) in images" :key="index">
        <img class="sun-image-preview-img" :src="item">
      </sun-swipe-item>
    </sun-swipe>
  </div>
</template>

<script>
import { SunSwipeItem, SunSwipe } from '../../../base/swipe'
import SunPopup from '../../../base/popup'

export default ({
  name: 's-image-preview',

  components: { SunSwipeItem, SunSwipe },

  mixins: [SunPopup],

  props: {
    images: {
      type: Array,
      default: () => []
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onTouchStart() {
      this.touchStartTime = new Date()
    },

    onTouchEnd(event) {
      event.preventDefault()

      const deltaTime = new Date() - this.touchStartTime
      const { offsetX, offsetY } = this.$refs.swipe

      // prevent long tap to close component
      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false)
      }
    }
  }
})
</script>

<style scoped lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component image-preview {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    @descendent img {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
    }
    .sun-swipe {
      height: 100%;
    }
  }
}
</style>
