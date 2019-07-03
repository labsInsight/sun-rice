<template>
  <div class="sun-list">
    <slot />
    <div class="sun-list-loading" v-if="loading">
      <slot name="loading">
        <sun-spinner type="fading-circle" color="#999" class="sun-list-loading-spinner"/>
        <span class="sun-list-loading-text">{{ loadingText }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
import utils from '../../../utils/scroll'
import { on, off } from '../../../utils/event'
import SunSpinner from '../../spinner'

export default({
  name: 'sun-list',

  components: { SunSpinner },

  model: {
    prop: 'loading'
  },

  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: {
      type: String,
      default: ''
    }
  },

  mounted () {
    this.scroller = utils.getScrollEventTarget(this.$el)
    this.handler(true)

    if (this.immediateCheck) {
      this.$nextTick(this.onScroll)
    }
  },

  destroyed () {
    this.handler(false)
  },

  activated () {
    this.handler(true)
  },

  deactivated () {
    this.handler(false)
  },

  watch: {
    loading () {
      this.$nextTick(this.onScroll)
    },

    finished () {
      this.$nextTick(this.onScroll)
    }
  },

  methods: {
    onScroll () {
      if (this.loading || this.finished) {
        return
      }

      const el = this.$el
      const { scroller } = this
      const scrollerHeight = utils.getVisibleHeight(scroller)

      /* istanbul ignore next */
      if (!scrollerHeight || utils.getComputedStyle(el).display === 'none') {
        return
      }

      const scrollTop = utils.getScrollTop(scroller)
      const targetBottom = scrollTop + scrollerHeight

      let reachBottom = false

      /* istanbul ignore next */
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset
      } else {
        const elBottom =
          utils.getElementTop(el) -
          utils.getElementTop(scroller) +
          utils.getVisibleHeight(el)
        reachBottom = elBottom - scrollerHeight < this.offset
      }

      /* istanbul ignore else */
      if (reachBottom) {
        this.$emit('input', true)
        this.$emit('load')
      }
    },

    handler (bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind
        if (bind) {
          on(this.scroller, 'scroll', this.onScroll)
        } else {
          off(this.scroller, 'scroll', this.onScroll)
        }
      }
    }
  }
})
</script>

<style scoped lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component list {
    @descendent loading {
      text-align: center;

      @descendent spinner, text {
        display: inline-block;
        vertical-align: middle;
      }

      @descendent spinner {
        width: 16px;
        height: 16px;
      }

      @descendent text {
        font-size: 13px;
        color: $gray-dark;
        line-height: 50px;
      }
    }
  }
}
</style>
