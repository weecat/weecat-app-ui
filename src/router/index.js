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
    }, {
      path: 'explore',
      name: 'Explore',
      component: () => import('@/views/home/Index')
    }, {
      path: 'topic',
      name: 'Topics',
      component: () => import('@/views/topic/Index')
    }, {
      path: 'users',
      name: 'Users',
      component: () => import('@/views/users/Index'),
      children: [{
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/users/Overview')
      }, {
        path: 'questions',
        name: 'Questions',
        component: () => import('@/views/users/Questions')
      }, {
        path: 'answers',
        name: 'Answers',
        component: () => import('@/views/users/Answers')
      }, {
        path: 'articles',
        name: 'Articles',
        component: () => import('@/views/users/Articles')
      }, {
        path: 'focus',
        name: 'Focus',
        component: () => import('@/views/users/Focus')
      }, {
        path: 'actions',
        name: 'Actions',
        component: () => import('@/views/users/Actions')
      }, {
        path: 'integral',
        name: 'Integral',
        component: () => import('@/views/users/Integral')
      }, {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/users/Orders')
      }, {
        path: 'withdraw',
        name: 'Withdraw',
        component: () => import('@/views/users/Withdraw')
      }]
    }, {
      path: 'setting',
      name: 'Setting',
      component: () => import('@/views/setting/Index'),
      children: []
    }]
  }]
})
