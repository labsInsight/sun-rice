<template>
  <div class="group">

    <div class="block">
      <div class="text">普通标签</div>
      <sun-tabs v-model="active1" swipeable>
        <sun-tab :title="'标签' + index" v-for="index in tabs" :key="index">
          <div class="page">页面内容：{{ index }}</div>
        </sun-tab>
      </sun-tabs>
    </div>

    <div class="block">
      <div class="text">滚动标签</div>
      <sun-tab-scroll :titles="['保障计划', '投保方案', '产品介绍']" v-model="active0" @change="tabChange">
        <template slot="page0">
          <div class="page"><div class="scroll-page">1111</div></div>
        </template>
        <template slot="page1">
          <div class="page"><div class="scroll-page">2222</div></div>
        </template>
        <template slot="page2">
          <div class="page"><div class="scroll-page">3333</div></div>
        </template>
      </sun-tab-scroll>
    </div>

    <div class="block">
      <div class="text">粘性标签</div>
      <sun-tabs v-model="active2" sticky>
        <sun-tab :title="'标签' + index" v-for="index in tabs" :key="index">
          <div class="page">页面内容：{{ index }}</div>
        </sun-tab>
      </sun-tabs>
    </div>

    <div class="block">
      <div class="text">多个标签</div>
      <sun-tabs>
        <sun-tab v-for="index in 8" :title="'标签' + index" :key="index">
          <div class="page">页面内容：{{ index }}</div>
        </sun-tab>
      </sun-tabs>
    </div>

    <div class="block">
      <div class="text">卡片标签</div>
      <sun-tabs type="card">
        <sun-tab v-for="index in 4" :title="'标签' + index" :key="index">
          <div class="page">页面内容：{{ index }}</div>
        </sun-tab>
      </sun-tabs>
    </div>

    <div class="block">
      <div class="text">定制标签</div>
      <sun-tabs :active="active" @click="onClick">
        <sun-tab v-for="index in 2" :key="index">
          <div slot="title">
            <div class="custom"><img :src=" index === active + 1 ? selIcon : icon" />标签{{ index }}</div>
          </div>
          <div class="page">页面内容：{{ index }}</div>
        </sun-tab>
      </sun-tabs>
    </div>
  </div>
</template>

<script>
// import { SunTab, SunTabs, SunTabScroll } from '../'
import selIcon from '../../../assets/checked.png'
import icon from '../../../assets/uncheck.png'

export default {
  name: 'sun-tabs-demo',

  // components: { SunTab, SunTabs, SunTabScroll },

  data() {
    return {
      selIcon,
      icon,
      active0: '',
      active: 1,
      active1: 0,
      active2: 1,
      tabs: [1, 2, 3, 4]
    }
  },

  methods: {
    onClick(index, title) {
      this.active = index
    },
    tabChange(val) {
      console.log('val', val, this.active0)
    }
  }
}
</script>

<style lang="scss" >
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

    .custom {
      display: flex;
      justify-content: center;
      img {
        align-self: center;
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }

    .page {
      background: #fff;
      width: 100%;
      height: 400px;
      line-height: 400px;
      .scroll-page{
        width: 100%;
        height: 100%;
        text-align: center;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>
