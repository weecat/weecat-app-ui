/**
 * 用户私有信息管理
 */
const userRouter = {
  path: 'user',
  name: 'User',
  component: () => import('@/views/user/Index'),
  children: [{
    path: 'inbox',
    name: 'Inbox',
    component: () => import('@/views/user/inbox/Inbox')
  }, {
    path: 'publish',
    name: 'Publish',
    component: () => import('@/views/user/publish/Index'),
    children: [{
      path: 'question',
      name: 'Question',
      component: () => import('@/views/user/publish/Question')
    }, {
      path: 'article',
      name: 'Article',
      component: () => import('@/views/user/publish/Article')
    }, {
      path: 'suggest',
      name: 'Suggest',
      component: () => import('@/views/user/publish/Suggest')
    }]
  }]
}
export default userRouter
