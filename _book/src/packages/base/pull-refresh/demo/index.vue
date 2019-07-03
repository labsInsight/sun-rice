<template>
  <div >
    <sun-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p class="pull-refresh" ><span class="text">下拉刷新次数: {{ count }}</span></p>
    </sun-pull-refresh>
  </div>
</template>

<script>
// import SunPullRefresh from '../src'

export default {
  name: 'sun-pull-refresh-demo',

  // components: { SunPullRefresh },

  data () {
    return {
      count: 0,
      isLoading: false
    }
  },

  methods: {
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss" >

.pull-refresh {
  width: 100%;
  height: 100vh;
  .text {
    margin: 20px;
  }
}
</style>
