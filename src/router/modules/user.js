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
  }]
}
export default userRouter
