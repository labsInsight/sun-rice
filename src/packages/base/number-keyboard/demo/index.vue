<template>
  <div class="demo-number-keyboard">
    <div class="text">文本：{{text}}</div>
    <div>
      <sun-button @touchstart.native.stop="keyboard = 'default'">
        默认样式
      </sun-button>

      <sun-number-keyboard
        :show="keyboard === 'default'"
        close-button-text="完成"
        extra-key="."
        @blur="onBlur"
        @input="onInput"
        @delete="onDelete"
        transition
      />
    </div>

    <div>
      <sun-button @touchstart.native.stop="keyboard = 'custom'">
        自定义样式
      </sun-button>

      <sun-number-keyboard
        :show="keyboard === 'custom'"
        close-button-text="关闭"
        theme="custom"
        extra-key="X"
        @blur="onBlur"
        @input="onInput"
        @delete="onDelete"
        transition
      />
    </div>
  </div>
</template>

<script>
// import SunNumberKeyboard from '../'
// import SunButton from '../../button'

export default {
  name: 'sun-number-keyboard-demo',

  // components: { SunNumberKeyboard, SunButton },

  data () {
    return {
      keyboard: 'default',
      text: ''
    }
  },

  methods: {
    onInput (value) {
      this.text += value
    },
    onDelete () {
      this.text = this.text.slice(0, this.text.length - 1)
    },
    onBlur () {
      this.keyboard = ''
    }
  }
}
</script>

<style scoped lang="scss" >

.demo-number-keyboard {
  .text {
    margin: 15px;
  }
  .sun-button {
    margin: 15px;
  }
}
</style>
