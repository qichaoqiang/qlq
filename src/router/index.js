import Vue from 'vue'
import Router from 'vue-router'
import BScroll from 'better-scroll'
import Home from '@/pages/home/Home'
import List from '@/pages/listSearch/List'
import Scenic from '@/pages/Scenic/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/list',
    	name: 'List',
    	component: List
    },
    {
    	path: '/scenic',
    	name: 'Scenic',
    	component: Scenic
    }
  ]
})

