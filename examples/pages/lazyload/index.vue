<template>
  <div class="group">
    <div class="text">图片懒加载</div>
    <div class="items">
      <img v-for="img in imageList" :key="img" v-lazy="img" >
    </div>
    <div class="text">背景图懒加载</div>
    <div class="items">
      <div v-for="img in backgroundImageList" :key="img" v-lazy:background-image="img" />
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Lazyload from '../index'

// Vue.use(Lazyload, {})

export default {
  name: 'lazyload-demo',

  data () {
    return {
      imageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ],
      backgroundImageList: [
        'https://img.yzcdn.cn/public_files/2017/09/05/bac1903e863834ace25773f3554b6890.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/138c32d4384b5e4a78dc4e1ba58e6a80.jpg'
      ]
    }
  }
}
</script>

<style scoped lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;

  .text {
    margin-bottom: 10px;
  }

  .items {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-bottom: 20px;
    font-size: 12px;

    img,
    div[lazy] {
      padding: 15px;
      width: 100%;
      height: 250px;
      margin: 10px 0 0;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      background-size: 315px 250px;
      background-position: 15px;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }
  }
}

</style>
