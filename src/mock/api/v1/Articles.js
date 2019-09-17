import Mock from 'mockjs'

/**
 * 获取文章列表
 */
Mock.mock('/api/v1/articles/latest', 'post', {
    code: '100000',
    data: {
      'list|20': [{
        'id': '@id',
        'title|3-7': '@cname',
        'user': {
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
        'article_img|1': [
          '/uploads/avatar/000/05/07/29_avatar_mid.jpg',
          '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
          '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
          '/uploads/topic/20120618/133998172218_50_50.jpg',
          '/uploads/avatar/000/01/65/47_avatar_mid.jpg'
        ],
        'votes|1-1000': 1000,
        'views|1-1000': 1000,
        'add_time': '@now'
      }]
    }
  }
)

/**
 * 根据id查询
 */
Mock.mock(RegExp('/api/v1/article/details/(\\d+)'), 'get', {
    code: '100000',
    data: {
      'id': '@id',
      'title': '@cword(10,50)',
      'user': {
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
      'article_img|1': [
        '/uploads/avatar/000/05/07/29_avatar_mid.jpg',
        '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
        '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
        '/uploads/topic/20120618/133998172218_50_50.jpg',
        '/uploads/avatar/000/01/65/47_avatar_mid.jpg'
      ],
      'message': '@cword(100,1000)',
      'votes|1-1000': 1000,
      'views|1-1000': 1000,
      'add_time': '@now'
    }
  }
)
