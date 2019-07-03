<template>
  <div class="group">
    <div class="block">
      <div class="text">普通toast</div>
      <div class="items">
        <sun-button class="item" @click="openToast" size="large">点击弹出 Toast</sun-button>
      </div>
    </div>

    <div class="block">
      <div class="text">不同位置</div>
      <div class="items">
        <sun-button class="item" @click="openTopToast" size="large">顶部 Toast 位置</sun-button>
        <sun-button class="item" @click="openBottomToast" size="large">底部 Toast 位置</sun-button>
      </div>
    </div>

    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <sun-button class="item" @click="openToastWithSuccess" size="large">点击弹出成功的 Toast</sun-button>
        <sun-button class="item" @click="openToastWithWarning" size="large">点击弹出警告的 Toast</sun-button>
        <sun-button class="item" @click="openToastWithError" size="large">点击弹出失败的 Toast</sun-button>
        <sun-button class="item" @click="openToastWithLoading" size="large">点击弹出Loading的 Toast</sun-button>
      </div>
    </div>

    <div class="block">
      <div class="text">高级用法</div>
      <div class="items">
        <sun-button class="item" @click="openCustomizedToast" size="large">倒计时 Toast</sun-button>
      </div>
    </div>

  </div>
</template>

<script>
// import this.$toast from '../'
// import SunButton from '../../button'

export default {
  name: 'sun-toast-demo',

  // components: { SunButton },

  methods: {
    openToast() {
      this.$toast('提示信息')
    },
    openBottomToast() {
      this.$toast({
        message: '提示信息',
        position: 'bottom'
      })
    },
    openTopToast() {
      this.$toast({
        message: '提示信息',
        position: 'top'
      })
    },
    openToastWithSuccess() {
      this.$toast({
        message: '操作成功',
        iconType: 'success'
      })
    },
    openToastWithWarning() {
      this.$toast({
        message: '操作警告',
        iconType: 'warning'
      })
    },
    openToastWithError() {
      this.$toast({
        message: '操作失败',
        iconType: 'error'
      })
    },
    openToastWithLoading() {
      this.$toast({
        message: '加载loading',
        iconType: 'loading'
      })
    },
    openCustomizedToast() {
      let second = 5
      const toast = this.$toast({
        duration: second * 1000,
        message: `倒计时 ${second} 秒`,
        iconType: 'loading'
      })

      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
        }
      }, 1000)
    }
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
  }
}
</style>
