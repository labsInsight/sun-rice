<template>
  <div class="sun-collapse sun-line-top-bottom">
    <slot />
  </div>
</template>

<script>
export default({
  name: 's-collapse',

  props: {
    accordion: Boolean,
    value: [String, Number, Array]
  },

  data () {
    return {
      items: []
    }
  },

  methods: {
    switch (name, expanded) {
      if (!this.accordion) {
        name = expanded
          ? this.value.concat(name)
          : this.value.filter(activeName => activeName !== name)
      }
      this.$emit('change', name)
      this.$emit('input', name)
    }
  }
})
</script>

<style lang="css" >
@import "../../../../styles/theme.css";

.sun-collapse {
  width: 100%;
}

</style>
