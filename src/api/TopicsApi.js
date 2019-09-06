import request from '@/utils/request'

export default {
  /**
   * 获取首页右侧边栏热门主题
   */
  getHotTopics: function (data) {
    return request({
      url: '/api/v1/topics/hot',
      method: 'post',
      data: data
    })
  }
}
