import Mock from 'mockjs'

/**
 * 获取我的回复
 */
Mock.mock('/api/v1/user/answers/list', 'post', {
    code: '100000',
    data: {
      'list|0-5': [{
        'id': '@id',
        'title|3-7': '@cname',
        'link': '',
        'answer_info': {
          'agree_count|1-100': 100,
          'answer_content|1-130': '@cname',
          'add_time': '@now'
        }
      }]
    }
  }
)
