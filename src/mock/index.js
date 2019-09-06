/**
 * mock数据
 */
import Mock from 'mockjs'

/**
 * 登录几口
 */
Mock.mock('/api/v1/login', 'post', {
    'id': '@guid',
    'name': '@cname'
  }
)
