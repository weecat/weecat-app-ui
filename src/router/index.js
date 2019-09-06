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
      path: '',
      name: 'Home',
      component: () => import('@/views/home/Index')
    }, {
      path: 'column',
      name: 'Columns',
      component: () => import('@/views/column/Index')
    }, {
      path: 'column/details/:id(\\d+)',
      name: 'ColumnDetails',
      component: () => import('@/views/column/Details')
    }]
  }]
})
