<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <sun-steps :active="active">
          <sun-step>提交订单</sun-step>
          <sun-step>已支付</sun-step>
          <sun-step>审核中</sun-step>
          <sun-step>已承保</sun-step>
        </sun-steps>
      </div>
    </div>
    <sun-button @click="nextStep">下一步</sun-button>

    <div class="block">
      <div class="text">带头部信息</div>
      <div class="items">
        <sun-steps :icon="icon" :active="active" title="标题" description="描述信息">
          <sun-step indexText="1">提交订单</sun-step>
          <sun-step indexText="2">已支付</sun-step>
          <sun-step indexText="3">审核中</sun-step>
          <sun-step indexText="4">已承保</sun-step>
        </sun-steps>
      </div>
    </div>

    <div class="block">
      <div class="text">垂直信息</div>
      <div class="items">
        <sun-steps :active="active" direction="vertical">
          <sun-step indexText="1">
            <h3>提交订单</h3>
            <p>2016-07-10 12:40</p>
          </sun-step>
          <sun-step indexText="2">
            <h3>已支付</h3>
            <p>2016-07-11 10:00</p>
          </sun-step>
          <sun-step indexText="3">
            <h3>审核中</h3>
            <p>银行财务已经审核通过</p>
            <p>2016-07-12 09:30</p>
          </sun-step>
          <sun-step indexText="4">
            <h3>已承保</h3>
            <p>2016-07-13 09:30</p>
          </sun-step>
        </sun-steps>
      </div>
    </div>
  </div>
</template>

<script>
// import { SunStep, SunSteps } from '../'
// import SunButton from '../../button'
import logoIcon from '../../../assets/checked.png'

export default {
  name: 'sun-steps-demo',

  // components: { SunStep, SunSteps, SunButton },

  data() {
    return {
      icon: logoIcon,
      active: 1
    }
  },

  methods: {
    nextStep() {
      this.active = ++this.active % 4
    }
  }
}
</script>

<style lang="scss" >

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
      margin-bottom: 20px;
      font-size: 12px;
    }
  }
}

p,
h3 {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
p {
  font-size: 12px;
}
h3 {
  font-size: 14px;
}
</style>
