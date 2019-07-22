<template>
  <div class="demo-swipe">
    <div class="block">
      <div class="text">基础swipe</div>
      <s-swipe class="sun-swipe" :autoplay="3000" @change="onChange">
        <s-swipe-item>1</s-swipe-item>
        <s-swipe-item>2</s-swipe-item>
        <s-swipe-item>3</s-swipe-item>
        <s-swipe-item>4</s-swipe-item>
      </s-swipe>
    </div>

    <div class="block">
      <div class="text">图片swipe</div>
      <s-swipe class="sun-swipe">
        <s-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </s-swipe-item>
      </s-swipe>
    </div>

    <div class="block">
      <div class="text">垂直swipe</div>
      <s-swipe class="sun-swipe vertical" vertical>
        <s-swipe-item>1</s-swipe-item>
        <s-swipe-item>2</s-swipe-item>
        <s-swipe-item>3</s-swipe-item>
        <s-swipe-item>4</s-swipe-item>
      </s-swipe>
    </div>
  </div>
</template>

<script>
// import { SunSwipeItem, SunSwipe } from '../'

export default {
  name: 'sun-swipe-demo',

  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
      ]
    }
  },

  // components: { SunSwipeItem, SunSwipe },

  methods: {
    onChange(index) {
      console.log('index:', index)
    }
  }
}
</script>

<style lang="scss" >

.demo-swipe {
  padding-bottom: 30px;

  .block {
    padding-bottom: 20px;
    .text {
      margin: 10px;
    }
  }

  .sun-swipe {
    cursor: pointer;
    color: #39a9ed;
    font-size: 20px;
    text-align: center;
    line-height: 150px;
    background-color: #fff;
    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: #fff;
      pointer-events: none;
    }
    &.vertical {
      height: 150px;
    }
  }
}
</style>
