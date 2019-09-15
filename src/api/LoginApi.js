import request from '@/utils/request'

export default {
  /**
   * 用户登录
   */
  login: function (data) {
    return request({
      url: '/api/v1/login',
      method: 'post',
      data: data
    })
  }
}
