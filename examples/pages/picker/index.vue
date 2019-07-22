<template>
  <div class="group">
    <div class="block">
      <div class="text">cell用法</div>
      <div class="items">
        <s-picker-cell title="数字" v-model="value4" :columns="column6" @confirm="onConfirm" placeholder="请选一个数字" />
        <s-picker-cell title="地区" v-model="value1" :columns="column0" @confirm="onConfirm" placeholder="请选择城市" />
        <s-picker-cell title="多列联动" v-model="value2" :columns="columns" placeholder="请选择城市" />
        <s-picker-cell title="多列+自定义数据" v-model="value3" :columns="column5" placeholder="请选择城市" />
      </div>
    </div>

    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <s-picker :columns="column1" @change="onChange1" />
      </div>
    </div>

    <div class="block">
      <div class="text">自定义对象数据</div>
      <div class="items">
        <s-picker :columns="column2" @change="onChange1" value-key="label" />
      </div>
    </div>

    <div class="block">
      <div class="text">禁用选项</div>
      <div class="items">
        <s-picker :columns="column4" @change="onChange1" value-key="label" />
      </div>
    </div>

    <div class="block">
      <div class="text">带头部</div>
      <div class="items">
        <s-picker show-toolbar title="区域" :columns="column1" @cancel="onCancel" @confirm="onConfirm" @change="onChange1" />
      </div>
    </div>

    <div class="block">
      <div class="text">多列联动</div>
      <div class="items">
        <s-picker :columns="columns" @change="onChange2" />
      </div>
    </div>

    <div class="block">
      <div class="text">加载中</div>
      <div class="items">
        <s-picker :columns="columns" loading />
      </div>
    </div>
  </div>
</template>

<script>
// import { SunPicker, SunPickerCell } from '../'

export default {
  name: 'sun-picker-demo',

  // components: { SunPicker, SunPickerCell },

  data() {
    return {
      column0: [
        { text: '长沙', value: 0 },
        { text: '杭州', value: 1 },
        { text: '宁波', value: 2 },
        { text: '温州', value: 3 }
      ],
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2: [
        { label: '杭州', value: 1 },
        { label: '宁波', value: 2 },
        { label: '温州', value: 3 }
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      },
      column4: [
        { label: '杭州', value: '1' },
        { label: '宁波', value: 2, disabled: true },
        { label: '温州', value: 3 }
      ],
      column5: [
        {
          values: [
            { text: '杭州1', value: 1 },
            { text: '宁波1', value: 2 },
            { text: '温州1', value: 3 }
          ],
          className: 'column1'
        },
        {
          values: [
            { text: '杭州2', value: 1 },
            { text: '宁波2', value: 2 },
            { text: '温州2', value: 3 }
          ],
          className: 'column2',
          defaultIndex: 2
        }
      ],
      column6: [0, 1, 2, 3, 4],
      value1: 0,
      value2: '',
      value3: '',
      value4: '0'
    }
  },

  computed: {
    columns() {
      const column = this.column3
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },

  created() { },

  methods: {
    onChange1(picker, value, index) {
      console.log('toastContent', value, index)
    },
    onChange2(picker, values, index) {
      console.log(values)
    },
    onConfirm(value, index) {
      console.log('toastContent', value, index)
    },
    onCancel() {
      console.log('cancel')
    }
  }
}
</script>

<style lang="scss" >
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

      p {
        margin-left: 20px;
      }
    }
  }
}
</style>
