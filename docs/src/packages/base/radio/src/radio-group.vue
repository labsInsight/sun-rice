<template>
  <div class="sun-radio-group">
    <slot />
  </div>
</template>

<script>
export default({
  name: 'sun-radio-group',

  props: {
    value: null,
    disabled: Boolean
  },

  watch: {
    value (value) {
      this.$emit('change', value)
    }
  }
})
</script>
