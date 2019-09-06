/**
 * mock数据
 */
import Mock from 'mockjs'

/**
 * 登录几口
 */
Mock.mock('/api/v1/users/hot', 'post', {
    code: '100000',
    data: {
      'list|5': [{
        'userId': '@id',
        'username': '@name',
        'avatar|1': [
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/22_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/04/49/40_avatar_mid.jpg',
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg'
        ],
        'questions|1-100': 100,
        'stars|1-1000': 1000
      }]
    }
  }
)
