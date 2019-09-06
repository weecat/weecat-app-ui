import Mock from 'mockjs'

/**
 * 热门用户
 */
Mock.mock('/api/v1/users/hot', 'post', {
    code: '100000',
    data: {
      'list|5': [{
        'userId': '@id',
        'user_name': '@name',
        'verified|1': [
          'enterprise',
          ''
        ],
        'avatar|1': [
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/22_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/04/49/40_avatar_mid.jpg',
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg'
        ],
        'answer_count|1-100': 100,
        'agree_count|1-1000': 1000
      }]
    }
  }
)
