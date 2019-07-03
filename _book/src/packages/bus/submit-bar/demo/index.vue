<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <sun-submit-bar :price="3050" label="合计" button-text="提交订单" @submit="onClickButton" />
      </div>
    </div>

    <div class="block">
      <div class="text">禁用</div>
      <div class="items">
        <sun-submit-bar disabled :price="3050" label="合计" button-text="提交订单" tip="您的收货地址不支持同城送, 我们已为您推荐快递" @submit="onClickButton" />
      </div>
    </div>

    <div class="block">
      <div class="text">加载</div>
      <div class="items">
        <sun-submit-bar loading :price="3050" label="合计" button-text="提交订单" @submit="onClickButton" />
      </div>
    </div>

    <div class="block">
      <div class="text">组合</div>
      <div class="items">
        <sun-submit-bar :price="3050" label="合计" button-text="提交订单" @submit="onClickButton">
          <sun-checkbox v-model="checked">全选</sun-checkbox>
          <span slot="tip">
            您的收货地址不支持同城送,<span class="sun-edit-address" @click="onClickLink">修改地址</span>
          </span>
        </sun-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
// import SunSubmitBar from '../'
// import { SunCheckbox, SunCheckboxGroup } from '../../../base/checkbox'

export default {
  name: 'sun-submit-bar-demo',

  // components: { SunSubmitBar, SunCheckbox, SunCheckboxGroup },

  data() {
    return {
      checked: true
    }
  },

  methods: {
    onClickButton() {
      console.log('clickButton')
    },
    onClickLink() {
      console.log('clickLink')
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
