<template>
  <transition name="sun-slide-bottom">
    <div v-show="value" :class="['sun-actionsheet', { 'withtitle': title }]">
      <div v-if="title" class="sun-actionsheet-header sun-line-top-bottom">
        <div v-text="title" />
        <img class="sun-actionsheet-header-close" src="../../../assets/del.png" @click="onCancel" v-if="isCancel">
      </div>
      <div v-else>
        <div v-for="item in actions" :key="item.name"
        :class="['sun-actionsheet-item', 'sun-line-top', { 'sun-actionsheet-disabled': item.disabled }, item.className]"
        @click.stop="onClickItem(item)">
          <template v-if="!item.loading">
            <span class="name">{{ item.name }}</span>
            <span class="sun-actionsheet-subname" v-if="item.subname">{{ item.subname }}</span>
          </template>
          <sun-spinner v-else class="sun-actionsheet-loading" :size="20" color="#000" type="fading-circle" />
        </div>
      </div>
      <div v-if="cancelText" v-text="cancelText" class="sun-actionsheet-cancel top" @click="onCancel" />
      <div v-else class="sun-actionsheet-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import SunPopup from '../../popup'
import SunSpinner from '../../spinner'

export default ({
  name: 'sun-actionsheet',

  components: { SunSpinner },

  mixins: [SunPopup],

  props: {
    value: Boolean,
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: () => []
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    isCancel: Boolean
  },

  methods: {
    onClickItem(item) {
      if (item.callback && !item.disabled) {
        item.callback(item)
      }
    },

    onCancel() {
      this.$emit('input', false)
      this.$emit('cancel')
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component actionsheet {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    color: $text-color;
    max-height: 90%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: $background-color;

    &.withtitle {
      background-color: $white;
    }

    @descendent item, cancel {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      background-color: $white;
      display: flex;
      justify-content: center;

      &:active {
        background-color: $active-color;
      }
    }

    @descendent disabled {
      color: $gray;

      &:active {
        background-color: $white;
      }
    }

    @descendent subname {
      font-size: 12px;
      color: $gray-darker;
      margin-left: 5px;
    }

    @descendent loading {
      display: inline-block;
      align-self: center;
    }

    @descendent cancel {
      margin-top: 10px;
    }

    @descendent header {
      font-size: 16px;
      line-height: 44px;
      text-align: center;
      @descendent close {
        position: absolute;
        top: 13px;
        right: 0;
        padding: 0 15px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
