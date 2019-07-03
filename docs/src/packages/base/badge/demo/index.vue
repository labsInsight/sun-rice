<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <sun-badge class="item" type="primary" size="small">10</sun-badge>
        <sun-badge class="item" type="error" size="small">10</sun-badge>
        <sun-badge class="item" type="success" size="small">10</sun-badge>
        <sun-badge class="item" type="warning" size="small">10</sun-badge>
      </div>
    </div>
    <div class="block">
      <div class="text">不同大小</div>
      <div class="items">
        <sun-badge class="item" type="primary" size="large">100</sun-badge>
        <sun-badge class="item" type="primary" size="normal">100</sun-badge>
        <sun-badge class="item" type="primary" size="small">100</sun-badge>
      </div>
    </div>
    <div class="block">
      <div class="text">不同颜色</div>
      <div class="items">
        <sun-badge class="item" size="small" color="#888">自定义颜色</sun-badge>
      </div>
    </div>
  </div>
</template>

<script>
// import SunBadge from '../src'

export default {
  name: 'sun-badge-demo'

  // components: { SunBadge }
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
        margin: 5px 10px 0 0;
        align-self: center;
      }
    }
  }
}
</style>
