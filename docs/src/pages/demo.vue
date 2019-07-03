<template>
  <div class="group">
    <sun-cell title="基础组件" clickable :arrowDirection="baseDirection" @click="onBaseClick" />
    <div v-if="baseDirection=='down'" class="items">
      <sun-cell title="Cell" value="单元格" clickable @click="() => this.$router.push({ name: 'Cell' })" />
      <sun-cell title="Button" value="按钮" clickable @click="() => this.$router.push({ name: 'Button' })" />
      <sun-cell title="Spinner" value="旋转动画" clickable @click="() => this.$router.push({ name: 'Spinner' })" />
    </div>

    <sun-cell title="导航组件" clickable :arrowDirection="advanceDirection" @click="onAdvanceClick" />
    <div v-if="advanceDirection=='down'" class="items">
      <sun-cell title="Tab" value="标签页" clickable @click="() => this.$router.push({ name: 'Tab' })" />
      <sun-cell title="Tabbar" value="底部标签栏" clickable @click="() => this.$router.push({ name: 'Tabbar' })" />
    </div>

    <sun-cell title="数据录入" clickable :arrowDirection="advanceDirection" @click="onAdvanceClick" />
    <div v-if="advanceDirection=='down'" class="items">
      <sun-cell title="Field" value="输入框" clickable @click="() => this.$router.push({ name: 'Field' })" />
      <sun-cell title="Checkbox" value="复选框" clickable @click="() => this.$router.push({ name: 'Checkbox' })" />
      <sun-cell title="Radio" value="单选框" clickable @click="() => this.$router.push({ name: 'Radio' })" />
      <sun-cell title="Switch" value="开关" clickable @click="() => this.$router.push({ name: 'Switch' })" />
      <sun-cell title="Picker" value="选择器" clickable @click="() => this.$router.push({ name: 'Picker' })" />
      <sun-cell title="DatetimePicker" value="时间选择器" clickable @click="() => this.$router.push({ name: 'DatetimePicker' })" />
      <sun-cell title="Uploader" value="文件上传" clickable @click="() => this.$router.push({ name: 'Uploader' })" />
      <sun-cell title="Stepper" value="步进器" clickable @click="() => this.$router.push({ name: 'Stepper' })" />
    </div>

    <sun-cell title="数据展示" clickable :arrowDirection="advanceDirection" @click="onAdvanceClick" />
    <div v-if="advanceDirection=='down'" class="items">
      <sun-cell title="Swipe" value="轮播" clickable @click="() => this.$router.push({ name: 'Swipe' })" />
      <sun-cell title="Steps" value="步骤条" clickable @click="() => this.$router.push({ name: 'Steps' })" />
      <sun-cell title="NoticeBar" value="通告栏" clickable @click="() => this.$router.push({ name: 'NoticeBar' })" />
      <sun-cell title="Badge" value="标签" clickable @click="() => this.$router.push({ name: 'Badge' })" />
      <sun-cell title="Collapse" value="折叠面板" clickable @click="() => this.$router.push({ name: 'Collapse' })" />
    </div>

    <sun-cell title="操作反馈" clickable :arrowDirection="advanceDirection" @click="onAdvanceClick" />
    <div v-if="advanceDirection=='down'" class="items">
      <sun-cell title="NumberKeyboard" value="自定义键盘" clickable @click="() => this.$router.push({ name: 'NumberKeyboard' })" />
      <sun-cell title="Toast" value="提示" clickable @click="() => this.$router.push({ name: 'Toast' })" />
      <sun-cell title="Popup" value="弹出层" clickable @click="() => this.$router.push({ name: 'Popup' })" />
      <sun-cell title="Indicator" value="加载" clickable @click="() => this.$router.push({ name: 'Indicator' })" />
      <sun-cell title="Dialog" value="弹出框" clickable @click="() => this.$router.push({ name: 'Dialog' })" />
      <sun-cell title="Actionsheet" value="上拉菜单" clickable @click="() => this.$router.push({ name: 'Actionsheet' })" />
      <sun-cell title="PullRefresh" value="下拉加载最新" clickable @click="() => this.$router.push({ name: 'PullRefresh' })" />
      <sun-cell title="List" value="上刷加载更多" clickable @click="() => this.$router.push({ name: 'List' })" />
      <sun-cell title="ImagePreview" value="图片预览" clickable @click="() => this.$router.push({ name: 'ImagePreview' })" />
    </div>

    <sun-cell title="高阶组件" clickable :arrowDirection="advanceDirection" @click="onAdvanceClick" />
    <div v-if="advanceDirection=='down'" class="items">
      <sun-cell title="Lazyload" value="懒加载" clickable @click="() => this.$router.push({ name: 'Lazyload' })" />
    </div>
    <sun-cell title="业务组件" clickable :arrowDirection="busDirection" @click="onBusClick" />
    <div v-if="busDirection=='down'" class="items">
      <sun-cell title="AddressPicker" value="地址选择器" clickable @click="() => this.$router.push({ name: 'AddressPicker' })" />
      <sun-cell title="SubmitBar" value="提交订单" clickable @click="() => this.$router.push({ name: 'SubmitBar' })" />
      <sun-cell title="IDcardPicker" value="身份证有效期" clickable @click="() => this.$router.push({ name: 'IdcardPicker' })" />
      <sun-cell title="CareerPicker" value="职业选择器" clickable @click="() => this.$router.push({ name: 'SunCareerPicker' })" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      baseDirection: 'down',
      advanceDirection: 'down',
      busDirection: 'down'
    }
  },
  methods: {
    onBaseClick() {
      this.baseDirection = this.baseDirection === 'up' ? 'down' : 'up'
    },
    onAdvanceClick() {
      this.advanceDirection = this.advanceDirection === 'up' ? 'down' : 'up'
    },
    onBusClick() {
      this.busDirection = this.busDirection === 'up' ? 'down' : 'up'
    }
  }
}
</script>

<style scoped lang="scss" >
.group {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  -webkit-overflow-scrolling: touch;

  .text {
    margin-bottom: 10px;
  }

  .items {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-bottom: 20px;

    .sun-cell {
      color: #2c88ff;
    }
  }
}
</style>
