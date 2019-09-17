import request from '@/utils/request'

export default {
  /**
   * 获取最新文章
   */
  getLatest: function (data) {
    return request({
      url: '/api/v1/articles/latest',
      method: 'post',
      data: data
    })
  },
  /**
   * 获取详情页面
   * @param data
   */
  getDetails: function (id) {
    return request({
      url: '/api/v1/article/details/' + id,
      method: 'get'
    })
  }
}
