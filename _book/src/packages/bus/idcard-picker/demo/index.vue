<template>
  <div class="group">
    <div class="block">
      <div class="text">基本用法</div>
      <div class="items">
        <sun-idcard-picker title="身份证有效期" v-model="value" @confirm="onConfirm" @select="selected"/>
      </div>
    </div>
  </div>
</template>

<script>
// import SunIdcardPicker from '../'

export default {
  name: 'sun-idcard-picker-demo',

  // components: { SunIdcardPicker },

  data() {
    return {
      value: {}
      // value: {
      //   startDate: new Date(),
      //   endDate: '2020-10-10'
      // }
    }
  },

  methods: {
    onConfirm(value) {
      console.log('value', value)
    },
    selected(value) {
      console.log('value', value, this.value)
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

      p {
        margin-left: 20px;
      }
    }
  }
}
</style>
