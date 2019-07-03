<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <sun-button class="item" @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</sun-button>
        <sun-button class="item" @click.native="popupVisible2 = true" size="large">底部弹出 popup</sun-button>
        <sun-button class="item" @click.native="popupVisible3 = true" size="large">顶部弹出 popup</sun-button>
        <sun-button class="item" @click.native="popupVisible4 = true" size="large">右侧弹出 popup</sun-button>
        <sun-popup v-model="popupVisible1">
          <sun-button @click="popupVisible4 = false" size="large">我是从中部弹出</sun-button>
        </sun-popup>
        <sun-popup v-model="popupVisible2" position="bottom">
          <sun-button @click="popupVisible4 = false" size="large">我是从底部弹出</sun-button>
        </sun-popup>
        <sun-popup v-model="popupVisible3" position="top" :overlay="false">
          <sun-button @click="popupVisible4 = false" size="large">我是从顶部弹出</sun-button>
        </sun-popup>
        <sun-popup v-model="popupVisible4" position="right">
          <sun-button @click="popupVisible4 = false" size="large">关闭</sun-button>
        </sun-popup>
      </div>
    </div>

  </div>
</template>

<script>
// import SunPopup from '../src'
// import SunButton from '../../button'

export default {
  name: 'sun-popup-demo',

  // components: { SunPopup, SunButton },

  data() {
    return {
      popupVisible1: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      buttonBottom: 0
    }
  },

  watch: {
    popupVisible3(val) {
      if (val) {
        setTimeout(() => {
          this.popupVisible3 = false
        }, 2000)
      }
    }
  },

  methods: {
    onDateChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.dateStart = values[0]
      this.dateEnd = values[1]
    }
  },

  mounted() {
    this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom
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
      margin-bottom: 20px;

      .item {
        margin-bottom: 5px;
      }
    }

    .sun-popup {
      width: 60%;
      padding: 20px;
      box-sizing: border-box;

      &.bottom {
        width: 100%;
        padding: 60;
        border-radius: 0;
      }
      &.top {
        color: #fff;
        width: 100%;
        border-radius: 0;
        line-height: 20px;
        background-color: rgba(0, 0, 0, 0.8);
      }
      &.right {
        width: 50%;
        line-height: 20px;
      }
    }
  }
}
</style>
