<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <sun-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大淘汰富力" :left-icon="icon" />
      </div>
    </div>
    <div class="block">
      <div class="text">禁用滚动</div>
      <div class="items">
        <sun-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大淘汰富力" :scrollable="false" />
      </div>
    </div>
    <div class="block">
      <div class="text">可关闭</div>
      <div class="items">
        <sun-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大淘汰富力" mode="closeable" />
      </div>
    </div>
    <div class="block">
      <div class="text">link模式</div>
      <div class="items">
        <sun-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大淘汰富力" mode="link" />
      </div>
    </div>
    <div class="block">
      <div class="text">自定义颜色</div>
      <div class="items">
        <sun-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大淘汰富力" color="#fff" background="#606266" />
      </div>
    </div>
  </div>
</template>

<script>
// import SunNoticeBar from '../'
import LeftIcon from '../../..//assets/success.png'

export default {
  name: 'sun-notice-bar-demo',

  // components: { SunNoticeBar },

  data() {
    return {
      icon: LeftIcon
    }
  },

  methods: {
    onClick(event) {
      console.log('cell click', event)
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
    }
  }
}
</style>
