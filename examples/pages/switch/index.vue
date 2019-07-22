<template>
  <div class="group">

    <div class="block">
      <div class="text">switch 基础用法</div>
      <div class="items">
        <div class="items-padding">
          <s-switch v-model="value1" @change="handleChange" />
        </div>
        <div class="items-padding">
          <s-switch v-model="value2" @change="handleChange" loading />
        </div>
        <div class="items-padding">
          <s-switch v-model="value3" @change="handleChange" disabled />
        </div>
        <div class="items-padding">
          <s-switch v-model="value4" @change="handleChange" :text="['男', '女']" />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="text">switch 可调节大小</div>
      <div class="items">
        <div class="items-padding">
          <s-switch v-model="value5" @change="handleChange" :size="30"/>
        </div>
        <div class="items-padding">
          <s-switch v-model="value6" @change="handleChange" :size="26" />
        </div>
        <div class="items-padding">
          <s-switch v-model="value7" @change="handleChange" :size="20" />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="text">自定义颜色</div>
      <div class="items">
        <div class="items-padding">
          <s-switch v-model="value8" @change="handleChange" :text="['男', '女']" class="changeColor"/>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="text">switch-cell 基础用法</div>
      <div class="items">
        <s-switch-cell :title="'基础用法：'+value9" v-model="value9" @change="handleChange" />
        <s-switch-cell :title="'加载中：'+value10" v-model="value10" loading />
        <s-switch-cell :title="'禁用：'+value11" v-model="value11" disabled />
        <s-switch-cell :title="'内嵌文字'" v-model="value12" :text="['男', '女']" />
        <s-switch-cell :title="'外部文字'" v-model="value13" :des="['男人', '女人']" />
      </div>
    </div>

    <div class="block">
      <div class="text">switch-cell border</div>
      <div class="items">
        <s-switch-cell :title="'无border：'+value14" v-model="value14" @change="handleChange" />
      </div>
      <div class="items">
        <s-switch-cell :title="'有border：'+value15" border v-model="value15" @change="handleChange" />
      </div>
    </div>

  </div>
</template>

<script>
// import { SunSwitch, SunSwitchCell } from '../'

export default {
  name: 'sun-switch-demo',

  // components: { SunSwitch, SunSwitchCell },

  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value5: true,
      value6: true,
      value7: true,
      value8: true,
      value9: true,
      value10: true,
      value11: true,
      value12: true,
      value13: true,
      value14: true,
      value15: true
    }
  },

  methods: {
    handleChange(event) {
      console.log(event)
    }
  }
}
</script>

<style scoped lang="scss" >

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
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      margin-bottom: 20px;
      font-size: 14px;

      .items-padding{
        padding: 10px;
      }

      .changeColor{
        background-color: #06bf04;
        color: #2c88ff;
      }
    }
  }
}
</style>
