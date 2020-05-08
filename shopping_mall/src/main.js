import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router'
import { Icon } from 'element-ui'

import toast from '@/components/common/toast'

Vue.use(Icon)
Vue.use(toast)

Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
