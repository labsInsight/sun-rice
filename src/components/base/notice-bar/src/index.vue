<template>
  <div v-show="showNoticeBar" :class="['sun-noticebar', { 'sun-noticebar-withicon': mode }]" :style="barStyle" @click="$emit('click')">
    <img v-if="leftIcon" class="sun-noticebar-leftIcon" :src="leftIcon">
    <div class="sun-noticebar-wrap" ref="wrap">
      <div ref="content" :class="['sun-noticebar-content', animationClass]" :style="contentStyle" @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd">
        <slot>{{ text }}</slot>
      </div>
    </div>
    <img v-if="iconName" class="sun-noticebar-rightIcon" @click="onClickIcon" :src="iconName" />
  </div>
</template>

<script>
import linkIcon from '@/assets/arrow_right.png'
import closeIcon from '@/assets/del.png'

export default ({
  name: 's-notice-bar',

  props: {
    text: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    }
  },

  computed: {
    iconName() {
      return this.mode === 'closeable' ? closeIcon : this.mode === 'link' ? linkIcon : ''
    },

    barStyle() {
      return {
        color: this.color,
        background: this.background
      }
    },

    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },

  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs
          if (!wrap || !content) {
            return
          }

          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
            this.animationClass = 'sun-noticebar-play'
          }
        })
      },
      immediate: true
    }
  },

  methods: {
    onClickIcon() {
      this.showNoticeBar = this.mode !== 'closeable'
    },

    onAnimationEnd() {
      this.firstRound = false
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed
        this.animationClass = 'sun-noticebar-playInfinite'
      })
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component noticebar {
    width: 100%;
    display: flex;
    color: $orange;
    padding: 9px 15px;
    font-size: 12px;
    line-height: 1.5;
    position: relative;
    background-color: #fff7cc;

    @descendent withicon {
      position: relative;
      padding-right: 30px;
    }

    @descendent leftIcon {
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }

    @descendent rightIcon {
      top: 10px;
      right: 10px;
      position: absolute;
      width: 15px;
      height: 15px;
    }

    @descendent wrap {
      flex: 1;
      height: 18px;
      overflow: hidden;
      position: relative;
    }

    @descendent content {
      position: absolute;
      white-space: nowrap;
    }

    @descendent play {
      animation: sun-noticebar-play linear both;
    }

    @descendent playInfinite {
      animation: sun-noticebar-play-infinite linear infinite both;
    }
  }
}

@keyframes sun-noticebar-play {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes sun-noticebar-play-infinite {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
