<template>
  <div class="group">
    <div class="block">
      <div class="text">cell用法</div>
      <div class="items">
        <sun-address-picker-cell title="省市区" v-model="value1" @confirm="onConfirm1" placeholder="请选择城市" @onCellClick="onclick"/>
        <sun-address-picker-cell title="省市" :columns-num="2" v-model="value2" @confirm="onConfirm2" />
      </div>
    </div>

    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <sun-address-picker :value="value3" @confirm="onConfirm3" />
      </div>
    </div>

    <div class="block">
      <div class="text">配置显示列</div>
      <div class="items">
        <sun-address-picker :columns-num="2" title="选择器" :area-list="areaList" @confirm="onConfirm3" />
      </div>
    </div>
  </div>
</template>

<script>
// import { SunAddressPicker, SunAddressPickerCell } from '../'
import AreaList from './area'
// import { setTimeout } from 'timers';

export default {
  name: 'sun-address-picker-demo',

  // components: { SunAddressPicker, SunAddressPickerCell },

  data() {
    return {
      areaList: AreaList,
      value1: '110101',
      value2: '321000',
      value3: ''
    }
  },
  created() {
  },

  methods: {
    onConfirm1(value) {
      console.log('value1', value)
      console.log('this.value', this.value1)
    },
    onConfirm2(value) {
      console.log('value2', value)
    },
    onConfirm3(value) {
      console.log('value3', value)
    },
    onclick() {
      console.log('click')
    }
  }
}
</script>

<style scoped lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 20px auto;

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
