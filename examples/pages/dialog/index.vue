<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <div class="items">
        <s-button class="item" @click="onClickAlert" size="large">消息提示</s-button>
        <s-button class="item" @click="onClickConfirm" size="large">消息确认</s-button>
        <s-button class="item" @click="show = true" size="large">自定义组件</s-button>
        <s-dialog v-model="show" show-cancel-button :before-close="beforeClose">
          <s-field v-model="username" label="用户名" placeholder="请输入用户名" />
          <s-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
        </s-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import SunDialog from '@/components/base/dialog'

export default {
  name: 'sun-dialog-demo',

  data() {
    return {
      show: false,
      username: '',
      password: ''
    }
  },

  methods: {
    onClickAlert() {
      SunDialog.alert({
        title: '消息头',
        message: '消息内容'
      }).then(() => {
        console.log('confirm')
      })
    },
    onClickConfirm() {
      SunDialog.confirm({
        title: '消息头',
        message: '消息内容'
      }).then(() => {
        console.log('confirm')
      }).catch(() => {
        console.log('cancel')
      })
    },
    beforeClose(action, done) {
      if (action === 'confirm') {
        console.log('confirm')
        setTimeout(done, 1000)
      } else {
        console.log('cancel')
        done()
      }
    }
  }
}
</script>

<style scoped lang="scss" >
.group {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
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
    }
  }
}
</style>
