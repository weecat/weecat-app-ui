import Mock from 'mockjs'

/**
 * 获取我的回复
 */
Mock.mock('/api/v1/user/inbox/list', 'post', {
    code: '100000',
    data: {
      'list|0-10': [{
        'id': '@id',
        'unread|1': [
          true, false
        ],
        'user_info': {
          'uid': '@id',
          'user_name': '@name',
          'verified|1': [
            'enterprise',
            'personal'
          ],
          'avatar|1': [
            '/uploads/avatar/000/05/07/29_avatar_mid.jpg',
            '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
            '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
            '/uploads/topic/20120618/133998172218_50_50.jpg',
            '/uploads/avatar/000/01/65/47_avatar_mid.jpg'
          ]
        },
        'count|1-100': 100,
        'last_message|1-40': '@cname',
        'update_time': '@now'
      }]
    }
  }
)
