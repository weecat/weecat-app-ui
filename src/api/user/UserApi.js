import request from '@/utils/request'

export default {
  /**
   * 获取我关注的用户
   */
  getMyFollowings: function (data) {
    return request({
      url: '/api/v1/user/followings',
      method: 'post',
      data: data
    })
  },
  /**
   * 获取关注我的用户
   */
  getMyFollowers: function (data) {
    return request({
      url: '/api/v1/user/followers',
      method: 'post',
      data: data
    })
  }
}
