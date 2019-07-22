<template>
  <span class="sun-badge" :style="{ backgroundColor: color }" :class="['sun-badge-type-' + type, 'sun-badge-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 's-badge',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component badge {
    color: $white;
    text-align: center;
    display: inline-block;

    @descendent type-success {
      background-color: $green;
    }

    @descendent type-primary {
      background-color: $blue;
    }

    @descendent type-error {
      background-color: $red;
    }

    @descendent type-warning {
      background-color: $orange;
    }

    @descendent size-normal {
      border-radius: 15px;
      font-size: 15px;
      padding: 2px 8px;
    }

    @descendent size-small {
      border-radius: 12px;
      font-size: 12px;
      padding: 2px 6px;
    }

    @descendent size-large {
      border-radius: 18px;
      font-size: 18px;
      padding: 2px 10px;
    }
  }
}

</style>
