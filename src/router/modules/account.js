/**
 * 用户管理
 */
const accountRouter = {
  path: 'setting',
  name: 'Setting',
  component: () => import('@/views/user/setting/Index'),
  children: [{
    path: 'profile',
    name: 'Profile',
    component: () => import('@/views/user/setting/Profile')
  }, {
    path: 'privacy',
    name: 'Privacy',
    component: () => import('@/views/user/setting/Privacy')
  }, {
    path: 'oauth2',
    name: 'Oauth2',
    component: () => import('@/views/user/setting/Oauth2')
  }, {
    path: 'security',
    name: 'Security',
    component: () => import('@/views/user/setting/Security')
  }, {
    path: 'trade',
    name: 'Trade',
    component: () => import('@/views/user/setting/Trade')
  }, {
    path: 'verify',
    name: 'Verify',
    component: () => import('@/views/user/setting/Verify')
  }]
}
export default accountRouter
