<template>
  <div class="group">
    <div class="block">
      <div class="text">添加图片</div>
      <div class="items">
        <sun-uploader :after-read="onRead" @oversize="logContent" multiple :max-size="36000">
          <img v-if="dataImg" :src="dataImg" />
          <img v-else src="../../../assets/checked.png" />
        </sun-uploader>
      </div>
    </div>
  </div>
</template>

<script>
// import SunUploader from '../src'

export default {
  name: 'sun-uploader-demo',

  // components: { SunUploader },

  data() {
    return {
      dataImg: ''
    }
  },

  methods: {
    onRead(file) {
      this.dataImg = file.content
      console.log(file)
    },
    logContent(file) {
      console.log('oversize:', file.content)
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
      margin-bottom: 20px;
      font-size: 12px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
