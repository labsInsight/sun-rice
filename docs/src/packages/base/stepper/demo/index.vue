<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <sun-stepper v-model="stepper1" />
      </div>
    </div>

    <div class="block">
      <div class="text">禁用</div>
      <div class="items">
        <sun-stepper v-model="stepper1" disabled />
      </div>
    </div>

    <div class="block">
      <div class="text">高级用用法：最低5，最高40，步进2</div>
      <div class="items">
        <sun-stepper v-model="stepper2" integerOnly :min="5" :max="40" :step="2" :default-value="9" />
      </div>
    </div>
  </div>
</template>

<script>
// import SunStepper from '../'

export default {
  name: 'sun-notice-bar-demo',

  // components: { SunStepper },

  data() {
    return {
      stepper1: 1,
      stepper2: null
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
      margin: 10px;
    }
  }
}
</style>
