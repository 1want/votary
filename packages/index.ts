import Slider from './slider'

const components = [Slider]

const install = function (Vue) {
  components.forEach(component => {
    Vue.components(component.name, component)
  })
}

export default {
  install,
  Slider
}
