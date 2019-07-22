<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <s-collapse v-model="active1">
          <s-collapse-item title="标题1"><div class="items-page">内容</div></s-collapse-item>
          <s-collapse-item title="标题2"><div class="items-page">内容</div></s-collapse-item>
          <s-collapse-item title="标题3"><div class="items-page">内容</div></s-collapse-item>
        </s-collapse>
      </div>
    </div>

    <div class="block">
      <div class="text">手风琴</div>
      <div class="items">
        <s-collapse v-model="active2" accordion>
          <s-collapse-item title="标题1"><div class="items-page">内容</div></s-collapse-item>
          <s-collapse-item title="标题2"><div class="items-page">内容</div></s-collapse-item>
          <s-collapse-item title="标题3"><div class="items-page">内容</div></s-collapse-item>
        </s-collapse>
      </div>
    </div>

    <div class="block">
      <div class="text">组合用法</div>
      <div class="items">
        <s-collapse v-model="active3">
          <s-collapse-item>
            <div slot="title">
              我是自定义标题
              <img class="head-img" :src="src" />
            </div>
            <div class="items-page">内容</div>
          </s-collapse-item>
          <s-collapse-item title="标题"><div class="items-page">内容</div></s-collapse-item>
        </s-collapse>
      </div>
    </div>
  </div>
</template>

<script>
// import { SunCollapseItem, SunCollapse } from '../'
import img from '@/assets/success.png'

export default {
  name: 'sun-collapse-demo',

  // components: { SunCollapseItem, SunCollapse },

  data() {
    return {
      src: img,
      active1: [0],
      active2: 0,
      active3: []
    }
  }
}
</script>

<style scoped lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  position: relative;

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

      .items-page{
        padding: 15px;
      }

      .sun-collapse-item {
        .content {
          font-size: 13px;
          line-height: 1.5;
          color: #666;
        }

        .head-img {
          vertical-align: -3px;
          margin-left: 5px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
}
</style>
