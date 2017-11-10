import Vue from 'vue'
import Router from 'vue-router'
import BScroll from 'better-scroll'
import Home from '@/pages/home/Home'
import Scenic from '@/pages/scenic/Home'
import Datago from '@/pages/datago/Home'
import Order from '@/pages/order/Home'
import Detail from '@/pages/detail/Detail'
import DetailSwiper from '@/pages/detailSwiper/DetailSwiper'
import Search from '@/pages/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/scenic',
    	name: 'Scenic',
    	component: Scenic
    },
    {
    	path: '/datago',
    	name: 'Datago',
    	component: Datago
    },
    {
    	path: '/order',
    	name: 'Order',
    	component: Order
    },
    {
    	path:'/mplist',
    	name:'Detail',
    	component:Detail
    },
    {
    	path:'/detailSwiper',
    	name:'DetailSwiper',
    	component:DetailSwiper
    },
    {
    	path:'/search',
    	name:"Search",
    	component:Search
    }
  ]
})

