'use strict'

const Lazyload = resolve => require(['../pages/lazyload'], resolve)

const routes = [
  {path: '/advance/lazyload', component: Lazyload, name: 'Lazyload', meta: {title: 'lazyload'}}
]

export default routes
