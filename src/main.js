import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/ant-cover.less'
// import animate from 'animate.css'
import './styles/animate-cover.less'

import './utils/permission'

Vue.use(Antd)
// Vue.use(animate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
