import request from '@/utils/request'

export default {
  /**
   * 查询列表
   */
  workOrderList: function (data) {
    return request({
      url: '/api/v1/workOrder/list',
      method: 'post',
      data: data
    })
  }
}
