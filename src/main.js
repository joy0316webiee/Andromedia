import Vue from 'vue'
import axios from 'axios'
// Components
import './components'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
