import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Weekend from '@/pages/home/Weekend'
import Lazyload from '@/pages/home/Lazyload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
    	path: '/',
    	 name:'Weekend',
      component:Weekend
    },
    { 
    	path: '/',
    	name:'Lazyload',
      component:Lazyload
    }
  ]
})
