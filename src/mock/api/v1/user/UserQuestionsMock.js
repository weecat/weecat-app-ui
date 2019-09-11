import Mock from 'mockjs'

/**
 * 获取我的问题
 */
Mock.mock('/api/v1/user/questions/list', 'post', {
    code: '100000',
    data: {
      'list|0-10': [{
        'id': '@id',
        'title|3-7': '@cname',
        'link': '',
        'question_info': {
          'answer_count|1-100': 100,
          'view_count|1-100': 100,
          'focus_count|1-100': 100,
          'answer_content|1-130': '@cname',
          'add_time': '@now'
        }
      }]
    }
  }
)
