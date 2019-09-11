/**
 * 用户管理
 */
const usersRouter = {
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
}
export default usersRouter
