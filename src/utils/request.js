import axios from 'axios'
import Storage from '@/storage'
// create an axios instance
const http = axios.create({
  baseURL: '', // api 的 base_url
  timeout: 300 * 1000 // 300s
})
// 添加请求拦截
http.interceptors.request.use(config => {
  let AUTH_TOKEN = Storage.getItem('AUTH_TOKEN')
  // config.headers['Authorization'] = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTU4MTQiLCJleHAiOjE1Njk3NzI4MDAsImlhdCI6MTU2NzA5NDQwMH0.VJdXUmPGieZpJA_eF2rpQIQR6Mj1hHGP6J7uks8ULe8"
  if (AUTH_TOKEN) {
    config.headers['Authorization'] = AUTH_TOKEN
  }
  return config
})

http.interceptors.response.use(response => {
  let code = response.data.code
  if (code === '1000004' || code === '1000006' || code === '1004007' || code === '1004009') {
    Storage.removeItem('AUTH_TOKEN')
    let callbackUrl = encodeURIComponent(window.location.href)
    window.location.href = '/login.html?from=' + callbackUrl
  } else {
    return response.data
  }
}, (err) => {
  if (err && err.response) {
    let code = err.response.data.code
    switch (err.response.status) {
      case 500:
        err.code = code
        err.message = err.response.data.message || '系统异常'
        break
      default:
    }
  }
  return Promise.reject(err)
})
export default http
