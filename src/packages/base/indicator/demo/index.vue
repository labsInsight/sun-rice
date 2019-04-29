<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <sun-button class="item" @click="openIndicator" size="large">点击弹出 Indicator</sun-button>
        <sun-button class="item" @click="openIndicatorWithSpinner" size="large">可配置 spinner</sun-button>
        <sun-button class="item" @click="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</sun-button>
        <sun-button class="item" @click="openIndicatorWithAll" size="large">所有配置项</sun-button>
      </div>
    </div>
  </div>
</template>

<script>
import SunIndicator from '../'

export default {
  name: 'sun-indicator-demo',

  methods: {
    openIndicator() {
      SunIndicator.open()
      setTimeout(() => SunIndicator.close(), 3000)
    },
    openIndicatorWithSpinner() {
      SunIndicator.open({ type: 'fading-circle' })
      setTimeout(() => SunIndicator.close(), 3000)
    },
    openIndicatorWithText() {
      SunIndicator.open('加载中...')
      setTimeout(() => SunIndicator.close(), 3000)
    },
    openIndicatorWithAll() {
      SunIndicator.open({
        type: 'fading-circle',
        text: '加载中',
        size: 40,
        color: '#2c88ff'
      })
      setTimeout(() => SunIndicator.close(), 3000)
    }
  },

  beforeDestroy() {
    SunIndicator.close()
  }
}
</script>

<style scoped lang="scss" >
.group {
  display: flex;
  flex-direction: column;
  margin: 10px;

  .block {
    padding-bottom: 20px;

    .text {
      margin: 10px;
    }

    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;

      .item {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
