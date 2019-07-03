import Vue from 'vue'

const isServer = Vue.prototype.$isServer

function isDef (value) {
  return value !== undefined && value !== null
}

function isObj (x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function get (object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

export {
  get,
  isObj,
  isDef,
  isServer
}
