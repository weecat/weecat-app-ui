import Mock from 'mockjs'

/**
 * 获取我的问题
 */
Mock.mock('/api/v1/user/questions/list', 'post', {
    code: '100000',
    data: {
      'list|0-10': [{
        'id': '@id',
        'title|5-30': '@cname',
        'link': '',
        'question_info': {
          'answer_count|1-100': 100,
          'view_count|1-100': 100,
          'focus_count|1-100': 100,
          'add_time': '@now'
        }
      }]
    }
  }
)
