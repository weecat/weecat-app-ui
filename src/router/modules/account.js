/**
 * 用户管理
 */
const accountRouter = {
  path: 'setting',
  name: 'Setting',
  component: () => import('@/views/setting/Index'),
  children: []
}
export default accountRouter
