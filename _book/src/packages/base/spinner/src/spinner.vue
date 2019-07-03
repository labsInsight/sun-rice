<template>
  <span><component :is="spinner"></component></span>
</template>

<script>
import SunSnake from './spinner/snake.vue'
import SunDoubleBounce from './spinner/double-bounce.vue'
import SunTripleBounce from './spinner/triple-bounce.vue'
import SunFadingCircle from './spinner/fading-circle.vue'

const SPINNERS = [
  'snake',
  'double-bounce',
  'triple-bounce',
  'fading-circle'
]
const parseSpinner = function (index) {
  if ({}.toString.call(index) === '[object Number]') {
    if (SPINNERS.length <= index) {
      console.warn(`'${index}' spinner not found, use the default spinner.`)
      index = 0
    }
    return SPINNERS[index]
  }

  if (SPINNERS.indexOf(index) === -1) {
    console.warn(`'${index}' spinner not found, use the default spinner.`)
    index = SPINNERS[0]
  }
  return index
}

export default {
  name: 'sun-spinner',

  computed: {
    spinner () {
      return `sun-${parseSpinner(this.type)}`
    }
  },

  components: { SunSnake, SunDoubleBounce, SunTripleBounce, SunFadingCircle },

  props: {
    type: {
      type: String,
      default: 'fading-circle',
      validator (value) {
        return [
          'snake',
          'double-bounce',
          'triple-bounce',
          'fading-circle'
        ].indexOf(value) > -1 || value === ''
      }
    },
    size: {
      type: Number,
      default: 15
    },
    color: {
      type: String,
      default: '#ccc'
    }
  }
}
</script>
