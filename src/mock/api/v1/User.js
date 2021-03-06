import Mock from 'mockjs'

/**
 * 获取我关注的用户
 */
Mock.mock('/api/v1/user/followings', 'post', {
    code: '100000',
    data: {
      'list|50': [{
        'userId': '@id',
        'user_name': '@name',
        'verified|1': [
          'enterprise',
          'personal'
        ],
        'avatar|1': [
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/22_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/04/49/40_avatar_mid.jpg',
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg',
          '/uploads/avatar/000/02/67/25_avatar_mid.jpg'
        ],
        'answer_count|1-100': 100,
        'agree_count|1-1000': 1000
      }]
    }
  }
)
Mock.mock('/api/v1/user/followers', 'post', {
    code: '100000',
    data: {
      'list|15': [{
        'userId': '@id',
        'user_name': '@name',
        'verified|1': [
          'enterprise',
          'personal'
        ],
        'avatar|1': [
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/22_avatar_mid.jpg',
          '/uploads/avatar/000/00/51/39_avatar_mid.jpg',
          '/uploads/avatar/000/04/49/40_avatar_mid.jpg',
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg',
          '/uploads/avatar/000/02/67/25_avatar_mid.jpg',
          '/uploads/avatar/000/01/62/95_avatar_mid.jpg'
        ],
        'answer_count|1-100': 100,
        'agree_count|1-1000': 1000
      }]
    }
  }
)
