<template>
  <div class="sun-tab pane" v-show="isSelected">
    <slot v-if="inited" />
    <div v-if="$slots.title" ref="title">
      <slot name="title" />
    </div>
  </div>
</template>

<script>
import findParent from '../../../mixins/find-parent'

export default ({
  name: 'sun-tab',

  mixins: [findParent],

  props: {
    title: String,
    disabled: Boolean
  },

  data() {
    return {
      inited: false
    }
  },

  computed: {
    index() {
      return this.parent.tabs.indexOf(this)
    },

    isSelected() {
      return this.index === this.parent.curActive
    }
  },

  watch: {
    'parent.curActive'() {
      this.inited = this.inited || this.isSelected
    },

    title() {
      this.parent.setLine()
    }
  },

  created() {
    this.findParent('sun-tabs')
  },

  mounted() {
    const { tabs } = this.parent
    const index = this.parent.$slots.default.indexOf(this.$vnode)
    tabs.splice(index === -1 ? tabs.length : index, 0, this)
    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index)
    }
  },

  destroyed() {
    this.parent.tabs.splice(this.index, 1)
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

$sun-tabs-line-height: 44px;
$sun-tabs-card-height: 36px;

@component-namespace sun {
  @component tab {
    flex: 1;
    font-size: 14px;
    position: relative;
    color: $text-color;
    line-height: $sun-tabs-line-height;
    text-align: center;
    box-sizing: border-box;
    background-color: $white;
    min-width: 0; /* hack for flex ellipsis */

    &.active {
      color: $blue;
    }

    &.disabled {
      color: $gray;

      &:active {
        background-color: $white;
      }
    }
  }
}

</style>
