import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	// 挂载到id为app的DOM上
  el: '#app',
  router,
  store,
  //模板组件
  template: '<App/>',
 	//  先声明组件
  components: { App }
})
