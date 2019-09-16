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
          'personal'
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
/**
 * 推荐用户
 */
Mock.mock('/api/v1/users/lists', 'post', {
    code: '100000',
    data: {
      'list|10': [{
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
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg'
        ],
        'hasFollow|1': [true, false],
        'reputation|1-100': 100,
        'integral|1-100': 100,
        'agree_count|1-1000': 1000,
        'thanks_count|1-100': 100,
        'follows|1-100': 100,
        'answer_count|1-100': 100
      }]
    }
  }
)
