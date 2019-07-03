<template>
  <div class="sun-tab-scroll">
    <sun-tabs v-if="showMainTab" @click="changeMainTab" v-model="mainTabIndex" sticky swipeable :line-width="lineWidth" :type="type" :duration="duration" :swipeThreshold="swipeThreshold" class="sun-tab-scroll-tabs"
      style="z-index: 999;">
      <sun-tab v-for="(title, index) in titles" :title="title" :key="index">
      </sun-tab>
    </sun-tabs>
    <div class="sun-tab-scroll-items">
      <div class="sun-tab-scroll-item" v-for="(title, index) in titles" :key="index" :ref="`page${index}`">
        <slot :name="`page${index}`"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SunTab from './tab'
import SunTabs from './tabs'

export default {
  name: 'sun-tab-scroll',

  components: { SunTab, SunTabs },

  props: {
    titles: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Number, String],
      default: 0
    },
    swipeable: Boolean,
    lineWidth: {
      type: Number,
      default: 20
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
    }
  },
  data() {
    return {
      showMainTab: false,
      mainTabIndex: 0
    }
  },
  watch: {
    mainTabIndex(val) {
      if (val > -1) {
        this.$emit('change', val)
        this.$emit('input', val) // 将值传入父组件的v-model
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollTrigger, true)

    this.init(this.value)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollTrigger, true)
  },
  methods: {
    init(val) {
      if (val || parseInt(val, 0) === 0) {
        this.showMainTab = true
        this.mainTabIndex = val
        this.$nextTick(() => {
          this.changeMainTab(val)
        })
      }
    },
    // 改变主tab
    changeMainTab(index) {
      this.$refs[`page${index}`][0].scrollIntoView()
      this.$nextTick(() => {
        window.scrollBy(0, -50)
      })
      this.$emit('input', index) // 将值传入父组件的v-model
    },
    // 滑动页面
    scrollTrigger() {
      let topHeight = 50
      const pageArr = []
      for (let i = 0; i < this.titles.length; i++) {
        let page = `page${i}`
        if (this.$refs[page] && this.$refs[page][0].getClientRects()[0] && this.$refs[page][0].getClientRects()[0].top < topHeight) {
          pageArr.push(page)
        } else {
          pageArr.splice(i, 1)
        }
      }
      this.mainTabIndex = pageArr.length - 1
      this.$emit('input', pageArr.length - 1) // 将值传入父组件的v-model
      if (pageArr.length) {
        if (this.$refs[`page${pageArr.length - 1}`][0].getClientRects()[0].bottom < topHeight - 22) {
          this.showMainTab = false
        } else {
          this.showMainTab = true
        }
      } else {
        this.showMainTab = false
      }
    }
  }
}
</script>

<style lang="css">
@component-namespace sun {
  @component tab-scroll {
    @descendent tabs {
      &.sun-tabs {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
