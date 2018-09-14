import Vue from 'vue'
import App from './App.vue'
import truImage from './truImage/index'
Vue.use(truImage)
new Vue({
  el: '#app',
  render: h => h(App)
})
