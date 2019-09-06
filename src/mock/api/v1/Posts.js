import Mock from 'mockjs'

/**
 * 获取博客和问题列表
 */
Mock.mock('/api/v1/posts/explore', 'post', {
    code: '100000',
    data: {
      'list|5': [{
        'question_id': '@id',
        'question_content|3-7': '@cname',
        'user_info': {
          'uid': '@id',
          'user_name': '@name',
          'verified|1': [
            'enterprise',
            'personal'
          ],
          'avatar': [
            '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
            '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
            '/uploads/topic/20120618/133998172218_50_50.jpg'
          ]
        },
        'is_reward|1': [1, 2, 3, 4],
        'answer_users|1-5': [{
          'uid': '@id',
          'user_name': '@name',
          'verified|1': [
            'enterprise',
            'personal'
          ],
          'avatar|1': [
            '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
            '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
            '/uploads/topic/20120618/133998172218_50_50.jpg'
          ]
        }],
        'topic_pic|1': [
          '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
          '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
          '/uploads/topic/20120618/133998172218_50_50.jpg',
          '/uploads/topic/20120614/133963648400_50_50.jpg',
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg',
          '/uploads/topic/20130427/36aa363f65f0b3beadecac113c3e066c_50_50.png'
        ],
        'comments|1-1000': 1000,
        'views|1-1000': 1000,
        'add_time': '@now',
        'answer_count|1-100': 100,
        'focus_count|1-1000': 1000
      }]
    }
  }
)
