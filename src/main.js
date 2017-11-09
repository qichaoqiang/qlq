
import Vue from 'vue'

import App from './App'

import router from './router'
import store from './vuex/detail.js'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
