<template>
  <div :class="[
      'sun-collapse-item',
      { 'sun-line-top': index }
    ]">
    <sun-cell class="sun-collapse-item-title" :class="{'no-bottom-border': !show}" is-link :arrowDirection="expanded ? 'up' : 'down'" @click="onClick">
      <slot name="title">{{ title }}</slot>
    </sun-cell>
    <div v-if="inited" v-show="show" ref="wrapper" class="sun-collapse-item-wrapper" @transitionend="onTransitionEnd">
      <div ref="content" class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { raf } from '../../../utils/raf'
import findParent from '../../../mixins/find-parent'
import { SunCell, SunCellGroup } from '../../cell'

export default ({
  name: 'sun-collapse-item',

  components: { SunCell, SunCellGroup },

  mixins: [findParent],

  props: {
    name: [String, Number],
    title: String
  },

  data() {
    return {
      show: null,
      inited: null
    }
  },

  computed: {
    items() {
      return this.parent.items
    },

    index() {
      return this.items.indexOf(this)
    },

    currentName() {
      return this.name ? this.name : this.index
    },

    expanded() {
      if (!this.parent) {
        return null
      }

      const { value } = this.parent
      return this.parent.accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName)
    }
  },

  created() {
    this.findParent('sun-collapse')
    this.items.push(this)
    this.show = this.expanded
    this.inited = this.expanded
  },

  destroyed() {
    this.items.splice(this.index, 1)
  },

  watch: {
    expanded(expanded, prev) {
      if (prev === null) {
        return
      }

      if (expanded) {
        this.show = true
        this.inited = true
      }

      this.$nextTick(() => {
        const { content, wrapper } = this.$refs
        if (!content || !wrapper) {
          return
        }

        const contentHeight = content.clientHeight + 'px'
        wrapper.style.height = expanded ? 0 : contentHeight
        raf(() => {
          wrapper.style.height = expanded ? contentHeight : 0
        })
      })
    }
  },

  methods: {
    onClick() {
      const { parent } = this
      const name = parent.accordion && this.currentName === parent.value ? '' : this.currentName
      const expanded = !this.expanded
      this.parent.switch(name, expanded)
    },

    onTransitionEnd() {
      if (!this.expanded) {
        this.show = false
      } else {
        this.$refs.wrapper.style.height = null
      }
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun-collapse {
  @component item {
    .sun-cell {
      background-position: 0 100% !important;
      &.no-bottom-border {
        background-image: none;
      }
    }
    @descendent title {
      &.right-icon::before {
        transition: 0.3s;
        transform: rotate(90deg);
      }
      &::after {
        visibility: hidden;
      }
    }

    @descendent wrapper {
      overflow: hidden;
      will-change: height;
      transition: height 0.3s ease-in-out;
    }
  }
}
</style>
