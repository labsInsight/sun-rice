<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法1</div>
      <div class="items">
        <s-career-picker v-model="value" title="职业" :keyConfig="keyConfig" :options="josn10077" @finish="finishPicker"></s-career-picker>
      </div>
    </div>
  </div>
</template>

<script>
import josn10077 from './10077.json'

export default {
  name: 'sun-career-picker-demo',

  data() {
    return {
      value: '',
      keyConfig: [
        {
          key: 'bigClass',
          name: '职业大类'
        },
        {
          key: 'centerClass',
          name: '职业中类'
        },
        {
          key: 'smallClass',
          name: '职业小类'
        },
        {
          key: 'vocationClass',
          name: '职业描述'
        }
      ],
      josn10077: josn10077
    }
  },

  methods: {
    finishPicker(value) {
      console.log('finish', value, this.value)
    }
  }
}
</script>

<style scoped lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 10px auto;

  .text {
    margin: 10px;
  }

  .items {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-bottom: 20px;

    .sun-submit-bar {
      position: relative;
    }

    .sun-edit-address {
      color: #38f;
    }

    .sun-checkbox {
      margin-left: 15px;
    }
  }
}
</style>
