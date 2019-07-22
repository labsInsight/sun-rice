'use strict'

const Demo = resolve => require(['../pages'], resolve)

const routes = [
  {path: '/', component: Demo, meta: {title: 'sun-rice'}}
]

export default routes
