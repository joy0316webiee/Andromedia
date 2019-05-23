import Vue from 'vue'
import axios from 'axios'
// Components
import './components'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
