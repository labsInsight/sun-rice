<template>
  <div :class="['sun-tabbar sun-tabbar-top-bottom', { 'sun-tabbar-fixed': fixed }]" :style="style">
    <slot />
  </div>
</template>

<script>

export default ({
  name: 's-tabbar',

  data() {
    return {
      items: []
    }
  },

  props: {
    value: Number,
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex
      }
    }
  },

  watch: {
    items() {
      this.setActiveItem()
    },
    value() {
      this.setActiveItem()
    }
  },

  methods: {
    setActiveItem() {
      this.items.forEach((item, index) => {
        item.active = index === this.value
      })
    },
    onChange(active) {
      this.$emit('input', active)
      this.$emit('change', active)
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component tabbar {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: $white;

    @descendent top-bottom {
      border-top: 1px solid $gray-light;
      border-bottom: 1px solid $gray-light;
    }

    @descendent fixed {
      left: 0;
      bottom: 0;
      position: fixed;
    }
  }
}
</style>
