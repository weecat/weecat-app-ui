import Mock from 'mockjs'

/**
 * 热门用户
 */
Mock.mock('/api/v1/topics/hot', 'post', {
    code: '100000',
    data: {
      'list|5': [{
        'topic_id': '@id',
        'topic_title|3-7': '@cname',
        'topic_pic|1': [
          '/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png',
          '/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png',
          '/uploads/topic/20120618/133998172218_50_50.jpg',
          '/uploads/topic/20120614/133963648400_50_50.jpg',
          '/uploads/avatar/000/00/68/31_avatar_mid.jpg',
          '/uploads/topic/20130427/36aa363f65f0b3beadecac113c3e066c_50_50.png'
        ],
        'discuss_count|1-100': 100,
        'focus_count|1-1000': 1000
      }]
    }
  }
)
