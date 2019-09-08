import request from '@/utils/request'

export default {
  /**
   * 获取最新专栏
   */
  getLatest: function (data) {
    return request({
      url: '/api/v1/columns/latest',
      method: 'post',
      data: data
    })
  },
  /**
   * 获取热门专栏
   * @param data
   */
  getHotColumns: function (data) {
    return request({
      url: '/api/v1/columns/hot',
      method: 'post',
      data: data
    })
  },
  /**
   * 获取专栏下的文章
   * @param data
   */
  getArticles: function (data) {
    return request({
      url: '/api/v1/column/articles',
      method: 'post',
      data: data
    })
  }
}
