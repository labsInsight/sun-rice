import Vue from 'vue'
import IndicatorComponent from './src'

const Indicator = Vue.extend(IndicatorComponent)

let instance

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    instance.text = typeof options === 'string' ? options : options.text || ''
    instance.type = options.type || 'snake'
    instance.size = options.size || 32
    instance.color = options.color || '#fff'
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.visible = true
    })
  },
  close() {
    if (instance) {
      instance.visible = false
    }
  }
}
