import Mock from 'mockjs'

/**
 * 热门专栏
 */
Mock.mock('/api/v1/columns/hot', 'post', {
    code: '100000',
    data: {
      'list|5': [{
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
