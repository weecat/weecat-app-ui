/**
 * mock数据
 */
import Mock from 'mockjs'

/**
 * 登录接口
 */
Mock.mock('/api/v1/login', 'post', {
    code: '0',
    msg: '操作成功',
    data: {
      'token': '@guid',
      'id': '@guid',
      'name': '@cname'
    }
  }
)
