<template>
  <div class="sun-checkbox-group">
    <slot />
  </div>
</template>

<script>

export default({
  name: 's-checkbox-group',

  props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },

  watch: {
    value (val) {
      this.$emit('change', val)
    }
  }
})
</script>
