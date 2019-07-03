<template>
  <transition :name="currentTransition">
    <div class="sun-popup" v-if="inited || !lazyRender" v-show="value" :class="position ? `sun-popup-${position}` : ''">
      <slot />
    </div>
  </transition>
</template>

<script>
import Popup from '../../../mixins/popup'

export default ({
  name: 'sun-popup',

  mixins: [Popup],

  props: {
    transition: String,
    lazyRender: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      inited: this.value
    }
  },

  computed: {
    currentTransition() {
      return this.transition || (this.position === '' ? 'sun-fade' : `popup-slide-${this.position}`)
    }
  },

  watch: {
    value() {
      this.inited = this.inited || this.value
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

.sun-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.sun-overflow-hidden {
  overflow: hidden !important;
}

@component-namespace sun {
  @component popup {
    position: fixed;
    top: 50%;
    left: 50%;
    max-height: 100%;
    overflow-y: auto;
    background-color: $white;
    transition: 0.2s ease-out;
    -webkit-overflow-scrolling: touch;
    transform: translate3d(-50%, -50%, 0);

    @descendent top {
      width: 100%;
      top: 0;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }

    @descendent right {
      top: 50%;
      right: 0;
      bottom: auto;
      left: auto;
      transform: translate3d(0, -50%, 0);
    }

    @descendent bottom {
      width: 100%;
      top: auto;
      bottom: 0;
      right: auto;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }

    @descendent left {
      top: 50%;
      right: auto;
      bottom: auto;
      left: 0;
      transform: translate3d(0, -50%, 0);
    }
  }
}

.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate3d(-50%, -100%, 0);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate3d(100%, -50%, 0);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate3d(-50%, 100%, 0);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate3d(-100%, -50%, 0);
}
</style>
