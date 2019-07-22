<template>
  <div :class="['sun-tabbar-item', {'sun-tabbar-item-active': active}]" @click="onClick">
    <div :class="['sun-tabbar-item-icon', {'sun-tabbar-item-icon-dot': dot}]">
      <slot name="icon" :active="active">
      </slot>
      <div v-if="info" class="sun-tabbar-item-icon-info">{{ info }}</div>
    </div>
    <div class="sun-tabbar-item-text">
      <slot :active="active" />
    </div>
  </div>
</template>

<script>

export default ({
  name: 's-tabbar-item',

  props: {
    icon: String,
    dot: Boolean,
    info: [String, Number]
  },

  data() {
    return {
      active: false
    }
  },

  beforeCreate() {
    this.$parent.items.push(this)
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1)
  },

  methods: {
    onClick(event) {
      this.$parent.onChange(this.$parent.items.indexOf(this))
      this.$emit('click', event)
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component tabbar-item {
    flex: 1;
    color: $gray-darker;
    display: flex;
    line-height: 1;
    font-size: 12px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @descendent icon {
      font-size: 18px;
      margin-bottom: 5px;
      position: relative;
      @descendent dot {
        &::after {
          top: 0;
          right: -8px;
          width: 8px;
          height: 8px;
          content: " ";
          position: absolute;
          border-radius: 100%;
          background-color: $red;
        }
      }
      img {
        width: 18px;
        height: 18px;
      }

      @descendent info {
        color: $white;
        left: 100%;
        top: -0.5em;
        font-size: 0.5em;
        padding: 0 0.3em;
        text-align: center;
        min-width: 1.2em;
        line-height: 1.2;
        position: absolute;
        border-radius: 0.6em;
        box-sizing: border-box;
        background-color: $red;
        transform: translateX(-50%);
      }
    }

    @descendent active {
      color: $blue;
    }
  }
}

</style>
