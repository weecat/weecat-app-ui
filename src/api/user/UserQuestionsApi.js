import request from '@/utils/request'

export default {
  /**
   * 获取的问题
   */
  getQuestions: function (data) {
    return request({
      url: '/api/v1/user/questions/list',
      method: 'post',
      data: data
    })
  }
}
