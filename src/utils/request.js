import axios from 'axios'
// import store from '@/store'
import { getToken } from './auth'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers['j-token'] = getToken()
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

async function request (url, data) {
  const res = await service.post(url, data)
  if (res.status === 200) {
    return res.data
  }
}

export {
  request
}
