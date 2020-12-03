import { request } from '../utils/request'

export function loginIn (data) {
  const url = 'user/login'
  return new Promise(resolve => {
    request(url, data).then(res => {
      resolve(res)
    })
  })
}

export function getMenuList (data) {
  const url = 'user/menuList'
  return new Promise(resolve => {
    request(url, data).then(res => {
      resolve(res)
    })
  })
}
