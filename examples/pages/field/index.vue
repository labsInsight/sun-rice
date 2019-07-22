<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <div class="items">
        <s-field v-model="value1" maxlength="5" inputAlign="left" placeholder="请输入最长5位数" />
        <s-field v-model="value2" label="用户手机号码" inputAlign="left" placeholder="请输入用户名" />
      </div>
    </div>

    <div class="block">
      <div class="text">自定义类型</div>
      <s-cell-group class="items">
        <s-field v-model="value3" required clearable label="身份证" extraKey="X" placeholder="请输入身份证号" />
        <s-field v-model="value4" label="数字" extraKey="." placeholder="请输入数字" required />
        <s-field v-model="value5" type="password" label="密码" placeholder="请输入密码" required />
        <s-field v-model="value6" required clearable label="左侧图标" :leftIcon="peoplefill" placeholder="请输入内容" />
        <s-field v-model="value7" type="tel" label="右侧图标" placeholder="请输入内容" required>
          <template slot="right-icon">
            <img style="width: 16px; height: 16px; margin-left: 10px;" :src="peoplefill" />
          </template>
        </s-field>
        <s-field v-model="value8" type="tel" label="右侧按钮" placeholder="请输入内容" required>
          <template slot="button">
            <s-button slot="button" size="small" type="primary" @click="sendSMS">按钮</s-button>
          </template>
        </s-field>
      </s-cell-group>
    </div>

    <div class="block">
      <div class="text">删除与提示按钮</div>
      <div class="items">
        <s-field v-model="value9" required clearable label="用户名" placeholder="请输入用户名" @click-icon="clickIcon" />
      </div>
    </div>

    <div class="block">
      <div class="text">高度自适用</div>
      <div class="items">
        <s-field v-model="value10" label="留言" type="textarea" placeholder="高度自适应，可输入多行" rows="1" autosize />
      </div>
    </div>

    <div class="block">
      <div class="text">错误提示</div>
      <div class="items">
        <s-field v-model="value11" label="用户名" placeholder="请输入用户名" error />
        <s-field v-model="value12" label="手机号" placeholder="请输入手机号" :error-message="errMsg" @input="inputCallback" />
      </div>
    </div>

    <div class="block">
      <div class="text">禁用按钮</div>
      <div class="items">
        <s-field v-model="value14" label="不给输" disabled />
      </div>
    </div>

    <div class="block">
      <div class="text">组合按钮</div>
      <div class="items">
        <s-field v-model="value13" label="验证码" inputAlign="left" placeholder="请输入验证码">
          <s-button slot="button" size="small" type="text" @click="sendSMS">获取验证码</s-button>
        </s-field>
      </div>
    </div>
  </div>
</template>

<script>
// import { SunCell, SunCellGroup } from '../../cell'
// import SunField from '../src'
// import SunButton from '../../button'
import icon from '@/assets/del.png'

export default {
  name: 'sun-field-demo',

  // components: { SunCell, SunCellGroup, SunField, SunButton },

  data() {
    return {
      peoplefill: 'https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/peoplefill.png',
      icon,
      value1: '',
      value2: '123124241',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value12: '',
      value13: '',
      value14: '已禁用',
      errMsg: '',
      dynamicCode: ''
    }
  },

  methods: {
    clickIcon() {
      console.log('right click')
    },
    sendSMS() {
      console.log('sendSMS')
    },
    inputCallback() {
      this.errMsg = '手机号码格式错误'
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
      // margin-bottom: 20px;
    }
  }
}
</style>
