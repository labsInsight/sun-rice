<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <s-button class="item" @click="show1 = true" size="large">普通actionsheet</s-button>
        <s-actionsheet v-model="show1" :actions="actions" />
        <s-button class="item" @click="show2 = true" size="large">带取消actionsheet</s-button>
        <s-actionsheet v-model="show2" :actions="actions" cancel-text="取消" @cancel="handleCancel" />
        <s-button class="item" @click="show3 = true" size="large">带标题actionsheep</s-button>
        <s-actionsheet v-model="show3" title="标题" isCancel>
          <p>我是有标题的</p>
          <p>我是有标题的</p>
          <p>我是有标题的</p>
          <p>我是有标题的</p>
          <p>我是有标题的</p>
          <p>我是有标题的</p>
        </s-actionsheet>
      </div>
    </div>
  </div>
</template>

<script>
// import SunActionsheet from '../'
// import SunButton from '../../button'
// import SunField from '../../field'

export default {
  name: 'sun-actionsheet-demo',

  // components: { SunActionsheet, SunButton, SunField },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    }
  },

  computed: {
    actions() {
      return [
        { name: '选项1', callback: this.onClick },
        { name: '选项2', callback: this.onClick, subname: '描述信息' },
        { name: '选项3', callback: this.onClick, loading: true },
        { name: '选项4', disabled: true }
      ]
    }
  },

  methods: {
    onClick(item) {
      console.log(item.name)
    },
    handleCancel() {
      console.log('cancel')
    }
  }
}
</script>

<style scoped lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  .block {
    padding-bottom: 20px;

    .text {
      margin: 10px;
    }

    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      .item {
        margin-bottom: 5px;
      }
      p {
        margin-left: 20px;
      }
    }
  }
}
</style>
