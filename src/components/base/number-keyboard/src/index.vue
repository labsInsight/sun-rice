<template>
  <transition name="sun-slide-bottom">
    <div v-show="show" :style="style" :class="['sun-number-keyboard', theme]" @touchstart.stop @animationend="onAnimationEnd"
      @webkitAnimationEnd="onAnimationEnd">
      <div class="sun-number-keyboard-title sun-line-top" v-if="title || showTitleClose">
        <span v-text="title" />
        <span class="sun-number-keyboard-title-close" v-if="showTitleClose" v-text="closeButtonText" @click="onClose" />
      </div>
      <div class="sun-number-keyboard-body">
        <sun-key v-for="key in keys" :key="key.text" :text="key.text" :type="key.type" @press="onPressKey" />
      </div>
      <div v-if="theme === 'custom'" class="sun-number-keyboard-sidebar">
        <sun-key :text="'delete'" :type="['delete', 'big']" @press="onPressKey" />
        <sun-key :text="closeButtonText" :type="['blue', 'big']" @press="onPressKey" />
      </div>
    </div>
  </transition>
</template>

<script>
import SunKey from './key'

export default ({
  name: 's-number-keyboard',

  components: { SunKey },

  props: {
    show: Boolean,
    title: {
      type: String,
      default: ''
    },
    closeButtonText: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 101
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    this.handler(true)
  },

  destroyed() {
    this.handler(false)
  },

  activated() {
    this.handler(true)
  },

  deactivated() {
    this.handler(false)
  },

  watch: {
    show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide')
      }
    }
  },

  computed: {
    keys() {
      const keys = []
      for (let i = 1; i <= 9; i++) {
        keys.push({ text: i })
      }

      switch (this.theme) {
        case 'default':
          keys.push(
            { text: this.extraKey, type: ['gray'] },
            { text: 0 },
            { text: 'delete', type: ['gray', 'delete'] }
          )
          break
        case 'custom':
          keys.push(
            { text: 0, type: ['middle'] },
            { text: this.extraKey }
          )
          break
      }

      return keys
    },

    style() {
      return {
        zIndex: this.zIndex
      }
    },

    showTitleClose() {
      return this.closeButtonText && this.theme === 'default'
    }
  },

  methods: {
    handler(action) {
      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur)
      }
    },

    onBlur() {
      this.$emit('blur')
    },

    onClose() {
      this.$emit('close')
      this.onBlur()
    },

    onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide')
    },

    onPressKey(text) {
      if (text === '') {
        return
      }

      if (text === 'delete') {
        this.$emit('delete')
      } else if (text === this.closeButtonText) {
        this.onClose()
      } else {
        this.$emit('input', text)
      }
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component number-keyboard {
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    user-select: none;
    background-color: $white;
    animation-timing-function: ease-out;

    @descendent title {
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      position: relative;
      color: $gray-darker;

      @descendent close {
        right: 0;
        color: $blue;
        font-size: 14px;
        padding: 0 15px;
        position: absolute;

        &:active {
          background-color: $active-color;
        }
      }
    }

    @descendent body {
      box-sizing: border-box;
      width: 100%;
    }

    @descendent sidebar {
      right: 0;
      bottom: 0;
      width: 25%;
      position: absolute;
      height: calc($sun-number-keyboard-key-height * 4);
    }

    &.custom {
      .sun-number-keyboard-body {
        padding-right: 25%;
      }
    }
  }
}

</style>
