import Vue from 'vue'
import VueRouter from 'vue-router'
// demo
import commonModule from './common_router'
// 基础组件
import baseModule from './base_router'
// 高级组件
import advanceModule from './advance_router'
// 业务组件
import busModule from './bus_router'

Vue.use(VueRouter)

let routes = []
routes = routes.concat(
  commonModule,
  baseModule,
  advanceModule,
  busModule
)

// 初始化路由对象
const router = new VueRouter({
  routes: routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
