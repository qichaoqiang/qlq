import Vue from 'vue'
import Router from 'vue-router'
import BScroll from 'better-scroll'
import Home from '@/pages/home/Home'
import List from '@/pages/listSearch/List'
import Detail from '@/pages/mplist/Detail'
import DetailSwiper from '@/pages/detailSwiper/DetailSwiper'
import Search from '@/pages/search/Search'
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
    	path:'/mplist',
    	name:'Detail',
    	component:Detail
    },{
    	path:'/detailSwiper',
    	name:'DetailSwiper',
    	component:DetailSwiper
    },
    {
    	path:'/search',
    	name:"Search",
    	component:Search
    },
    {
    	path: '/scenic',
    	name: 'Scenic',
    	component: Scenic
    }
    
  ]
})

