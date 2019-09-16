import request from '@/utils/request'

export default {
  /**
   * 获取热门用户
   */
  getHotUsers: function (data) {
    return request({
      url: '/api/v1/users/hot',
      method: 'post',
      data: data
    })
  },
  /**
   * 推荐用户
   * /#/users
   * @param data
   */
  getUsersLists: function (data) {
    return request({
      url: '/api/v1/users/lists',
      method: 'post',
      data: data
    })
  }
}
