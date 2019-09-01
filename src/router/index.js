import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Layout,
      children: [{
          path: 'index',
          name: 'Home',
          component: () => import('@/views/home/Index')
        }]
    }]
})
