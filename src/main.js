// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入第三方模块Vue
import Vue from 'vue'
// 引入App.vue
import App from './App'
// 引入路由
import router from './router'
// 配置是否显示代码提示功能
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	// 挂载到id为app的DOM上
  el: '#app',
  router,
  //模板组件
  template: '<App/>',
 	//  先声明组件
  components: { App }
})
