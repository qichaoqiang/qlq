import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Weekend from '@/pages/home/Weekend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      name:'Weekend',
      component:Weekend
    }
  ]
})
