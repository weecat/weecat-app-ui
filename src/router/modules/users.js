/**
 * 用户管理
 */
const usersRouter = {
  path: 'users',
  name: 'Users',
  component: () => import('@/views/users/Index'),
  children: [{
    path: 'lists',
    name: 'UserLists.vue',
    component: () => import('@/views/users/UserLists')
  }, {
    path: 'info',
    name: 'UserInfo',
    component: () => import('@/views/users/UserInfo'),
    children: [{
      path: 'overview',
      name: 'Overview',
      component: () => import('@/views/users/info/Overview')
    }, {
      path: 'questions',
      name: 'Questions',
      component: () => import('@/views/users/info/Questions')
    }, {
      path: 'answers',
      name: 'Answers',
      component: () => import('@/views/users/info/Answers')
    }, {
      path: 'articles',
      name: 'Articles',
      component: () => import('@/views/users/info/Articles')
    }, {
      path: 'focus',
      name: 'Focus',
      component: () => import('@/views/users/info/Focus')
    }, {
      path: 'actions',
      name: 'Actions',
      component: () => import('@/views/users/info/Actions')
    }, {
      path: 'integral',
      name: 'Integral',
      component: () => import('@/views/users/info/Integral')
    }, {
      path: 'orders',
      name: 'Orders',
      component: () => import('@/views/users/info/Orders')
    }, {
      path: 'withdraw',
      name: 'Withdraw',
      component: () => import('@/views/users/info/Withdraw')
    }]
  }]
}
export default usersRouter
