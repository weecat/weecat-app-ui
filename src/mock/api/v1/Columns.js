import Mock from 'mockjs'

Mock.mock('/api/v1/columns/latest', 'post', {
    code: '100000',
    data: {
      'list|6': [{
        'column_id': '@id',
        'column_name|3-7': '@cname',
        'column_pic|1': [
          '/uploads/column/dbf9e6ab838faceb16258f347c4391cc.png?866',
          '/uploads/column/15907b9f669e22db7895bcc89a026080.jpg?9976',
          '/uploads/column/dbf9e6ab838faceb16258f347c4391cc.png?866',
          '/uploads/column/5b2ef2734bc6a0cc46926ec137b423e0.jpg?6335',
          '/uploads/column/00adc5e30f72c8958a9df2674eea71f9.jpg?5778',
          '/uploads/column/338c244689f56b878dd16b0c764a96f1.jpg?137'
        ],
        'column_description|5-8': '@cname',
        'votes_count|1-1000': 1000,
        'views_count|1-1000': 1000,
        'article_count|1-100': 100
      }]
    }
  }
)

/**
 * 热门专栏
 */
Mock.mock('/api/v1/columns/hot', 'post', {
    code: '100000',
    data: {
      'list|6': [{
        'column_id': '@id',
        'column_name|3-7': '@cname',
        'column_pic|1': [
          '/uploads/column/dbf9e6ab838faceb16258f347c4391cc.png?866',
          '/uploads/column/15907b9f669e22db7895bcc89a026080.jpg?9976',
          '/uploads/column/dbf9e6ab838faceb16258f347c4391cc.png?866',
          '/uploads/column/5b2ef2734bc6a0cc46926ec137b423e0.jpg?6335',
          '/uploads/column/00adc5e30f72c8958a9df2674eea71f9.jpg?5778',
          '/uploads/column/338c244689f56b878dd16b0c764a96f1.jpg?137'
        ],
        'column_description|5-8': '@cname',
        'votes_count|1-1000': 1000,
        'views_count|1-1000': 1000,
        'article_count|1-100': 100
      }]
    }
  }
)

/**
 * 获取专栏文章列表
 */
Mock.mock('/api/v1/column/articles', 'post', {
    code: '100000',
    data: {
      'list|10': [{
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
          '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92.png',
          '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae.png',
          '/uploads/article/20180731/b616930e956ea98dd84140160bee39eb.jpg?9805',
          '/uploads/article/20180723/9470d4bea5bc9e66560e5e0d3a11d936.jpg?1636',
          '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae.png',
          '/uploads/questions/20140507/76c67fdfce39a648a0fdba8f26075dbe.png'
        ],
        'votes|1-1000': 1000,
        'views|1-1000': 1000,
        'add_time': '@now'
      }]
    }
  }
)
