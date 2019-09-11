import request from '@/utils/request'

export default {
  /**
   * 获取的回复
   */
  getAnswers: function (data) {
    return request({
      url: '/api/v1/user/answers/list',
      method: 'post',
      data: data
    })
  }
}
