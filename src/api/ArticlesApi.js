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
  }
}
