export default {
  /**
   * 存入值至localStorage
   * @param key
   */
  setItem: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  },
  /**
   * 根据key拿值
   * @param key
   */
  getItem: function (key) {
    localStorage.getItem(key)
  },
  /**
   * 根据key删除值
   * @param key
   */
  removeItem: function (key) {
    localStorage.removeItem(key)
  },
  /**
   * 清除所有的缓存
   * @param data
   */
  removeAll: function (data) {
    localStorage.clear()
  }
}
