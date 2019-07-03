'use strict'

const Lazyload = resolve => require(['@/packages/advance/lazyload/demo'], resolve)

const routes = [
  {path: '/advance/lazyload', component: Lazyload, name: 'Lazyload', meta: {title: 'lazyload'}}
]

export default routes
