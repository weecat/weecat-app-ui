import request from '@/utils/request'

export default {
  /**
   * 获取首页发现的数据
   */
  getExplore: function (data) {
    return request({
      url: '/api/v1/posts/explore',
      method: 'post',
      data: data
    })
  }
}
