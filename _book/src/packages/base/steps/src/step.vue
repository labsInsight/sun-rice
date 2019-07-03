<template>
  <div class="sun-step" :class="[$parent.direction ? `sun-step-${$parent.direction}`: '', status]">
    <div class="sun-step-title" :style="titleStyle">
      <slot />
    </div>
    <div class="sun-step-circle-container">
      <i class="sun-step-circle" v-if="status !== 'sun-step-process'">
        <div class="sun-step-cirlce-text">{{indexText}}</div>
      </i>
      <img v-else src="../../../assets/success.png" class="sun-step-icon" :style="{ color: $parent.activeColor }" />
    </div>
    <div class="sun-step-line" />
  </div>
</template>

<script>

export default ({
  name: 'sun-step',

  props: {
    indexText: {
      type: String,
      default: ''
    }
  },

  beforeCreate() {
    this.$parent.steps.push(this)
  },

  computed: {
    status() {
      const index = this.$parent.steps.indexOf(this)
      const active = this.$parent.active

      if (index < active) {
        return 'sun-step-finish'
      } else if (index === active) {
        return 'sun-step-process'
      }
    },

    titleStyle() {
      return this.status === 'sun-step-process' ? {
        color: this.$parent.activeColor
      } : {}
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component step {
    flex: 1;
    font-size: 14px;
    position: relative;

    @descendent horizontal {
      float: left;

      &:first-child {
        .sun-step-title {
          transform: none;
          margin-left: 0;
        }
      }

      &:last-child {
        position: absolute;
        right: 1px;
        width: auto;

        .sun-step-title {
          transform: none;
          margin-left: 0;
        }

        .sun-step-circle-container {
          left: auto;
          right: -4px;
        }

        .sun-step-line {
          width: 0;
        }
      }
      &:first-child {
        .sun-step-circle-container {
          left: -8px;
        }
      }

      .sun-step-circle-container {
        position: absolute;
        top: 23px;
        left: -12px;
        padding: 0 8px;
        background-color: $white;
        z-index: 1;
      }

      .sun-step-title {
        color: $gray-dark;
        font-size: 12px;
        transform: translate3d(-50%, 0, 0);
        display: inline-block;
        margin-left: 3px;
      }

      .sun-step-line {
        position: absolute;
        left: 0;
        top: 30px;
        width: 100%;
        height: 1px;
        background-color: $blue;
      }

      &.sun-step-finish {
        .sun-step-circle,
        .sun-step-line {
          background-color: $blue;
        }
        .sun-step-title {
          color: $text-color;
        }
      }

      &.sun-step-process {
        .sun-step-circle-container {
          top: 24px;
        }
        .sun-step-icon {
          width: 13px;
          height: 13px;
          display: block;
        }
      }
    }

    @descendent circle {
      display: block;
      width: 14px;
      height: 14px;
      background-color: $blue-light;
      border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
      transform: rotate(45deg);
      color: $white;
      .sun-step-cirlce-text {
        font-style:normal;
        text-indent: 3px;
        font-size: 11px;
        line-height: 14px;
        transform: rotate(-45deg);
      }
    }

    @descendent vertical {
      float: none;
      display: block;
      font-size: 14px;
      line-height: 18px;
      padding: 10px 10px 10px 0;

      &:not(:last-child) {
        @include borderHalfPx(#e5e5e5, 0, 0, 0, 1px, 0);
        &:before {
          height: 0;
          top: initial;
        }
        /* border-bottom: 1px solid $gray-light; */
        .sun-step-line {
          position: absolute;
          top: 32px;
          left: -15px;
          width: 1px;
          height: calc(100% - 20px);
          background-color: $blue-light;
        }
      }

      &:first-child {
        &::before {
          content: "";
          position: absolute;
          width: 1px;
          height: 20px;
          background-color: $white;
          top: 0;
          left: -15px;
          z-index: 1;
        }
      }

      .sun-step-title {
        color: #080808;
        font-size: 14px;
        text-indent: 5px;
        p {
          color: #484848;
          font-size: 12px;
          margin-top: 4px;
        }
      }

      &.sun-step-finish {
        .sun-step-title {
          color: $text-color;
        }
      }

      .sun-step-circle-container > i {
        position: absolute;
        z-index: 2;
      }

      .sun-step-icon {
        width: 13px;
        height: 13px;
        position: absolute;
        top: 17px;
        left: -20px;
        line-height: 1;
        z-index: 2;
      }

      .sun-step-circle {
        top: 15px;
        left: -21px;
      }
    }
  }
}
</style>
