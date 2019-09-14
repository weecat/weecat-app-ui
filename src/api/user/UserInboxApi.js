import request from '@/utils/request'

export default {
  /**
   * 获取我的私信
   */
  getInbox: function (data) {
    return request({
      url: '/api/v1/user/inbox/list',
      method: 'post',
      data: data
    })
  }
}
