<template>
  <div :class="['sun-cell-group', { 'sun-line-top-bottom': border }]">
    <slot />
  </div>
</template>

<script>
export default ({
  name: 's-cell-group',

  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

@component-namespace sun {
  @component sell {
    @descendent group {
      width: 100%;
    }
  }
}
</style>
