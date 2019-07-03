<template>
  <div class="sun-steps" :class="direction ? `sun-steps-${direction}` : ''">
    <div v-if="title || description" class="sun-steps-status">
      <div v-if="icon || $slots.icon" class="sun-steps-icon">
        <slot name="icon">
          <img :src="icon" class="sun-steps-icon" :class="iconClass" />
        </slot>
      </div>
      <div class="sun-steps-message">
        <div class="sun-steps-title" v-text="title" />
        <div class="sun-steps-desc sun-ellipsis" v-text="description" />
      </div>
      <slot name="message-extra" />
    </div>
    <div :class="['sun-steps-items', { 'sun-steps-alone': !title && !description }]">
      <slot />
    </div>
  </div>
</template>

<script>

export default ({
  name: 'sun-steps',

  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    active: Number,
    iconClass: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#2c88ff'
    }
  },

  data() {
    return {
      steps: []
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component steps {
    overflow: hidden;
    background-color: $white;
    width: 100%;

    @descendent horizontal {
      padding: 0 10px;

      .sun-steps-items {
        width: 100%;
        display: flex;
        margin: 0 0 10px 0;
        overflow: hidden;
        position: relative;
        padding-bottom: 22px;

        &.sun-steps-alone {
          padding-top: 10px;
        }
      }
    }

    @descendent vertical {
      padding: 0 0 0 35px;
      .sun-steps-items {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
      }
    }

    @descendent status {
      display: flex;
      align-items: center;
    }

    &.sun-steps-icon {
      float: left;
      margin-right: 10px;
    }

    @descendent icon {
      width: 40px;
      height: 40px;
    }

    @descendent message {
      height: 40px;
      margin: 15px 10px;
    }

    @descendent title {
      font-size: 14px;
      color: $text-color;
      padding-top: 4px;
    }

    @descendent desc {
      font-size: 12px;
      line-height: 1.5;
      color: $gray-dark;
    }
  }
}
</style>
