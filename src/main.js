<<<<<<< HEAD

import Vue from 'vue'

import App from './App'

import router from './router'
import store from './vuex/detail.js'
=======
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false
>>>>>>> 283ece6f5a7ce23a374e2cd7cfc3b56ed36f1fce

new Vue({
  el: '#app',
  router,
  store,
<<<<<<< HEAD
=======
  //模板组件
>>>>>>> 283ece6f5a7ce23a374e2cd7cfc3b56ed36f1fce
  template: '<App/>',
  components: { App }
})
