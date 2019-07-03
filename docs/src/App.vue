<template>
  <div id="app">
    <router-view/>
    <div class="footer" v-if="!isHome">
      <router-link to="/">返回主页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    isHome() {
      return this.$route.path === '/' || this.$route.path === '/base/tabbar'
    }
  }
}
</script>

<style lang="css">
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  max-width: 750px;
  margin: 0 auto;
  background: #f8f8f8;
  padding-bottom: 50px;
}
.footer{
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px -1px 5px 0px #e5e5e5
}
.footer a{
  text-decoration: none;
  color: #2c88ff;
}
</style>
