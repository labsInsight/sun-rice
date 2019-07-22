<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法：{{value1}}</div>
      <div class="items">
        <s-radio v-model="value1" :options="options1" @change="changeValue" />
      </div>
    </div>

    <div class="block">
      <div class="text">第二个单选框列表：{{value2}}</div>
      <div class="items">
        <s-radio v-model="value2" :options="options2" />
      </div>
    </div>

    <div class="block">
      <div class="text">右对齐：{{value3}}</div>
      <div class="items">
        <s-radio align="right" v-model="value3" :options="options3" />
      </div>
    </div>

  </div>
</template>

<script>
// import { SunRadio } from '../'
// import { SunCell } from '../../cell'

export default {
  name: 'sun-radio-demo',

  // components: { SunRadio, SunCell },

  data() {
    return {
      value1: '',
      value2: '值A',
      value3: ''
    }
  },

  created() {
    this.options1 = ['选项A', '选项B', '选项C']
    this.options3 = ['选项A', '选项B', '选项C']
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ]
  },
  methods: {
    changeValue(val) {
      console.log('value', val)
    }
  }
}
</script>

<style lang="scss">

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
      width: 100%;
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
}
</style>
