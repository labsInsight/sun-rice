<template>
  <div class="group">
    <div class="block">
      <div class="text">cell用法</div>
      <div class="items">
        <sun-datetime-picker-cell title="选择时间" v-model="currentDate1" border type="datetime" format="yyyy-MM-dd hh:mm" placeholder="请选择时间" @confirm="onConfirm"/>
      </div>
    </div>

    <div class="block">
      <div class="text">选择完整时间</div>
      <div class="items">
        <sun-datetime-picker v-model="currentDate1" type="datetime" :min-date="minDate" :max-date="maxDate" />
      </div>
    </div>

    <div class="block">
      <div class="text">选择日期（年月日）</div>
      <div class="items">
        <sun-datetime-picker v-model="currentDate2" type="date" :min-date="minDate" />
      </div>
    </div>
    <div class="block">
      <div class="text">选择日期（年月）</div>
      <div class="items">
        <sun-datetime-picker v-model="currentDate3" type="year-month" :min-date="minDate" />
      </div>
    </div>
    <div class="block">
      <div class="text">选择时间</div>
      <div class="items">
        <sun-datetime-picker v-model="currentDate4" type="time" :min-hour="minHour" :max-hour="maxHour" />
      </div>
    </div>
  </div>
</template>

<script>
// import { SunDatetimePicker, SunDatetimePickerCell } from '../'

export default {
  name: 'sun-datetime-picker-demo',

  // components: { SunDatetimePicker, SunDatetimePickerCell },

  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2019, 10, 1),
      currentDate1: '2018-09-09',
      currentDate2: null,
      currentDate3: new Date(2018, 0, 1),
      currentDate4: '12:00'
    }
  },

  methods: {
    onConfirm(value) {
      console.log('time is ', value)
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
