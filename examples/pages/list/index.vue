<template>
  <div class="page-infinite">
    <p class="page-infinite-desc"><span class="text">滚动至底部, 自动加载更多数据，最多80条</span></p>
    <s-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <s-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <div class="item" v-for="item in list" :key="item" :title="item + ''" >{{item}}</div>
      </s-list>
    </s-pull-refresh>
  </div>
</template>

<script >
// import SunList from '../'
// import SunPullRefresh from '../../pull-refresh'

export default {
  name: 'sun-list-demo',

  // components: { SunList, SunPullRefresh },

  data () {
    return {
      list: [],
      refreshing: false,
      loading: false,
      finished: false
    }
  },

  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          const text = this.list.length + 1
          this.list.push(text < 10 ? '0' + text : text)
        }
        this.loading = false

        if (this.list.length >= 80) {
          this.finished = true
        }
      }, 500)
    },

    onRefresh () {
      setTimeout(() => {
        this.list = []
        for (let i = 0; i < 20; i++) {
          const text = this.list.length + 1
          this.list.push(text < 10 ? '0' + text : text)
        }
        this.finished = false
        this.refreshing = false
        window.scrollTo(0, 10)
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss" >

.page-infinite {
  .text {
    margin-left: 20px;
  }
  .item {
    text-align: center;
    color: #666;
    line-height: 40px;
    border-bottom: solid 1px #eee;
  }
}
</style>
