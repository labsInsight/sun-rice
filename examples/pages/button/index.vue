<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <s-button class="item" type="default" @click="onClick">默认按钮</s-button>
        <s-button class="item" type="primary" @click="onClick">主要按钮</s-button>
        <s-button class="item" type="danger" @click="onClick">危险按钮</s-button>
        <s-button class="item" type="text" @click="onClick">文字按钮</s-button>
        <s-button class="item" type="light" @click="onClick">light按钮</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">禁用状态</div>
      <div class="items">
        <s-button class="item" disabled>禁用状态</s-button>
        <s-button class="item" type="primary" disabled>禁用状态</s-button>
        <s-button class="item" type="danger" disabled>禁用状态</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">朴素按钮</div>
      <div class="items">
        <s-button class="item" type="default" plain @click="onClick">朴素按钮</s-button>
        <s-button class="item" type="primary" plain @click="onClick">主要按钮</s-button>
        <s-button class="item" type="danger" plain @click="onClick">危险按钮</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">选中状态</div>
      <div class="items">
        <s-button class="item" type="default" :checked="isChecked" @click="checkMe">点我试试</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">加载状态</div>
      <div class="items">
        <s-button class="item" type="primary" :loading="loading" @click="clickLoading">{{loadingText}}</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">自定义</div>
      <div class="items">
        <s-button class="item" @click="onClick">
          <template slot="extra-left"><img class="extra-icon" :src="iconUrl" /></template>
          自定义图标
          <template slot="extra-right"><img class="extra-icon" :src="iconUrl" /></template>
        </s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">块级元素</div>
      <div class="items">
        <s-button class="item" block>块级按钮</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">底部操作</div>
      <div class="items">
        <s-button type="primary" bottom-action @click="onClick">按钮</s-button>
      </div>
    </div>

    <div class="block">
      <div class="text">不同大小</div>
      <div class="items">
        <s-button size="large" @click="onClick">大号按钮</s-button>
        <s-button class="item" size="normal" @click="onClick">普通按钮</s-button>
        <s-button class="item" size="small" @click="onClick">小型按钮</s-button>
        <s-button class="item" size="mini" @click="onClick">迷你按钮</s-button>
      </div>
    </div>

  </div>
</template>

<script>
// import SunButton from '../src'

export default {
  name: 'sun-button-demo',

  // components: { SunButton },

  data() {
    return {
      loadingText: '点我试试',
      iconUrl: 'https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/favorfill.png',
      isChecked: false,
      loading: false
    }
  },
  methods: {
    onClick(event) {
      console.log('button click', event)
    },
    checkMe() {
      this.isChecked = !this.isChecked
    },
    clickLoading() {
      const _this = this
      this.loading = true
      this.loadingText = '加载中'
      setTimeout(function() {
        _this.$nextTick(() => {
          _this.loading = false
          _this.loadingText = '点我试试'
        })
      }, 2000)
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
      margin-bottom: 10px;
    }

    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      margin-bottom: 20px;
      .item {
        margin: 5px 10px 0 0;
        .extra-icon {
          width: 16px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
