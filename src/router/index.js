import Vue from 'vue'
import Router from 'vue-router'
import Storage from '@/storage'

import usersRouter from './modules/users'
import userRouter from './modules/user'
import accountRouter from './modules/account'
/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const router = new Router({
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
      path: 'article/details/:id(\\d+)',
      name: 'ArticleDetails',
      component: () => import('@/views/article/Details')
    }, {
      path: 'logout',
      name: 'Logout',
      component: () => import('@/views/Logout')
    },
      usersRouter,
      accountRouter,
      userRouter
    ]
  }]
})
// 判断路由拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    let AUTH_TOKEN = Storage.getItem('AUTH_TOKEN')
    if (AUTH_TOKEN) {
      next()
    } else {
      // 没登录则跳转到登录界面
      window.location.href = '/login.html?from=' + to.fullPath
    }
  } else {
    next()
  }
})
export default router
