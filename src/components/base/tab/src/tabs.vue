<template>
  <div :class="['sun-tabs', type]">
    <div
      ref="wrap"
      :style="wrapStyle"
      :class="[
        'sun-tabs-wrap',
        { scrollable, 'top-bottom': type === 'line' }
      ]"
    >
      <div :class="['sun-tabs-nav', type]" ref="nav">
        <div v-if="type === 'line'" class="sun-tabs-nav-line" :style="lineStyle" />
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          ref="sun-tabs"
          :class="[
            'sun-tab',
            {
              'active': index === curActive,
              'disabled': tab.disabled
            }
          ]"
          @click="onClick(index)"
        >
          <span class="sun-ellipsis" ref="title">{{ tab.title }}</span>
        </div>
      </div>
    </div>
    <div class="content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
import { raf } from '@/utils/raf'
import { on, off } from '@/utils/event'
import scrollUtils from '@/utils/scroll'
import Touch from '@/mixins/touch'

export default ({
  name: 's-tabs',

  mixins: [Touch],

  model: {
    prop: 'active'
  },

  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      tabs: [],
      position: '',
      curActive: null,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    }
  },

  computed: {
    // whether the nav is scrollable
    scrollable () {
      return this.tabs.length > this.swipeThreshold
    },
    wrapStyle () {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          }
        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          }
        default:
          return null
      }
    }
  },

  watch: {
    active (val) {
      if (val !== this.curActive) {
        this.correctActive(val)
      }
    },

    tabs (tabs) {
      this.correctActive(this.curActive || this.active)
      this.scrollIntoView()
      this.setLine()
    },

    curActive () {
      this.scrollIntoView()
      this.setLine()

      // scroll to correct position
      if (this.position === 'page-top' || this.position === 'content-bottom') {
        scrollUtils.setScrollTop(window, scrollUtils.getElementTop(this.$el))
      }
    },

    sticky () {
      this.handlers(true)
    },

    swipeable () {
      this.handlers(true)
    }
  },

  mounted () {
    this.correctActive(this.active)
    this.setLine()

    this.$nextTick(() => {
      this.handlers(true)
      this.scrollIntoView()
    })
  },

  activated () {
    this.$nextTick(() => {
      this.handlers(true)
      this.scrollIntoView(true)
    })
  },

  deactivated () {
    this.handlers(false)
  },

  beforeDestroy () {
    this.handlers(false)
  },

  methods: {
    // whether to bind sticky listener
    handlers (bind) {
      const { events } = this
      const sticky = this.sticky && bind
      const swipeable = this.swipeable && bind

      // listen to window resize event
      if (events.resize !== bind) {
        events.resize = bind
        if (bind) {
          on(window, 'resize', this.setLine, true)
        } else {
          off(window, 'resize', this.setLine, true)
        }
      }

      // listen to scroll event
      if (events.sticky !== sticky) {
        events.sticky = sticky
        this.scrollEl = this.scrollEl || scrollUtils.getScrollEventTarget(this.$el)
        if (sticky) {
          on(this.scrollEl, 'scroll', this.onScroll, true)
        } else {
          off(this.scrollEl, 'scroll', this.onScroll, true)
        }
        this.onScroll()
      }

      // listen to touch event
      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable
        const { content } = this.$refs
        const action = swipeable ? on : off

        action(content, 'touchstart', this.touchStart)
        action(content, 'touchmove', this.touchMove)
        action(content, 'touchend', this.onTouchEnd)
        action(content, 'touchcancel', this.onTouchEnd)
      }
    },

    // watch swipe touch end
    onTouchEnd () {
      const { direction, deltaX, curActive } = this
      const minSwipeDistance = 50

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && curActive !== 0) {
          this.setCurActive(curActive - 1)
        } else if (deltaX < 0 && curActive !== this.tabs.length - 1) {
          this.setCurActive(curActive + 1)
        }
      }
    },

    // adjust tab position
    onScroll () {
      const scrollTop = scrollUtils.getScrollTop(window) + this.offsetTop
      const elTopToPageTop = scrollUtils.getElementTop(this.$el)
      const elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight
      if (scrollTop > elBottomToPageTop) {
        this.position = 'cbottom'
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top'
      } else {
        this.position = ''
      }
    },

    // update nav bar style
    setLine () {
      this.$nextTick(() => {
        if (!this.$refs['sun-tabs'] || this.type !== 'line') {
          return
        }
        const tab = this.$refs['sun-tabs'][this.curActive]
        const width = this.lineWidth || tab.offsetWidth
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2

        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        }
      })
    },

    // correct the value of active
    correctActive (active) {
      active = +active
      const exist = this.tabs.some(tab => tab.index === active)
      const defaultActive = (this.tabs[0] || {}).index || 0
      this.setCurActive(exist ? active : defaultActive)
    },

    setCurActive (active) {
      if (active !== this.curActive) {
        this.$emit('input', active)

        if (this.curActive !== null) {
          this.$emit('change', active, this.tabs[active].title)
        }
        this.curActive = active
      }
    },

    // emit event when clicked
    onClick (index) {
      const { title, disabled } = this.tabs[index]
      if (disabled) {
        this.$emit('disabled', index, title)
      } else {
        this.setCurActive(index)
        this.$emit('click', index, title)
      }
    },

    // scroll active tab into view
    scrollIntoView (immediate) {
      if (!this.scrollable || !this.$refs['sun-tabs']) {
        return
      }

      const tab = this.$refs['sun-tabs'][this.curActive]
      const { nav } = this.$refs
      const { scrollLeft, offsetWidth: navWidth } = nav
      const { offsetLeft, offsetWidth: tabWidth } = tab

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate)
    },

    // animate the scrollLeft of nav
    scrollTo (el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from
        return
      }

      let count = 0
      const frames = Math.round(this.duration * 1000 / 16)
      const animate = () => {
        el.scrollLeft += (to - from) / frames
        /* istanbul ignore next */
        if (++count < frames) {
          raf(animate)
        }
      }
      animate()
    },

    // render title slot of child tab
    renderTitle (el, index) {
      this.$nextTick(() => {
        const title = this.$refs.title[index]
        title.parentNode.replaceChild(el, title)
      })
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

$sun-tabs-line-height: 44px;
$sun-tabs-card-height: 36px;

@component-namespace sun {
  @component tabs {
    position: relative;

    @descendent wrap {
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      overflow: hidden;
      position: absolute;

      &.page-top {
        position: fixed;
      }

      &.content-bottom {
        top: auto;
        bottom: 0;
      }

      &.top-bottom {
        border-top: 1px solid $gray-light;
        border-bottom: 1px solid $gray-light;
      }

      &.scrollable {
        .sun-tab {
          flex: 0 0 22%;
        }

        .sun-tabs-nav {
          overflow: hidden;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
    @descendent nav {
    display: flex;
    user-select: none;
    position: relative;
    background-color: $white;

    &.line {
      height: 100%;
      padding-bottom: 15px; /* 15px padding to hide scrollbar in mobile safari */
      box-sizing: content-box;
    }

    @descendent line {
      z-index: 1;
      left: 0;
      bottom: 15px;
      height: 2px;
      position: absolute;
      background-color: $blue;
    }

    &.card {
      margin: 0 15px;
      border: 1px solid $blue;
      border-radius: 5px;

      .sun-tab {
        color: $blue;
        border-right: 1px solid $blue;
        line-height: calc($sun-tabs-card-height - 4px);

        .sun-ellipsis {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child {
          border-right: none;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        &.active {
          color: $white;
          background-color: $blue;
        }
      }
    }
  }

  &.line {
    padding-top: $sun-tabs-line-height;

    .sun-tabs-wrap {
      height: $sun-tabs-line-height;
    }
  }

  &.card {
    padding-top: $sun-tabs-card-height;

    .sun-tabs-wrap {
      height: $sun-tabs-card-height;
    }
  }

  }
}

</style>
