import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '@/store'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
