<template>
  <div class="demo-tabbar">
    <s-tabbar v-model="active" @change="change">
      <s-tabbar-item>
        <span>标记1</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.active : icon.normal" />
        </template>
      </s-tabbar-item>
      <s-tabbar-item dot>
        <span>标记2</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.active : icon.normal" />
        </template>
      </s-tabbar-item>
      <s-tabbar-item info='22'>
        <span>标记3</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.active : icon.normal" />
        </template>
      </s-tabbar-item>
    </s-tabbar>
  </div>
</template>

<script>
// import { SunTabbarItem, SunTabbar } from '../'

export default {
  name: 'sun-tabbar-demo',

  // components: { SunTabbarItem, SunTabbar },

  data () {
    return {
      active: 0,
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    }
  },

  methods: {
    change (index) {
      console.log('change:', index)
    }
  }
}
</script>
