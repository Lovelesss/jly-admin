/**
 * @Description:
 * @author: jly
 * @date: 2020/11/24
*/

/**
 * 获取url参数值
 * @param url
 * @param key
 * @returns {string}
 */
export function getUrlParam (url, key) {
  if (typeof url === 'string' && url.trim()) {
    const index = url.indexOf('?')
    const str = url.substr(index + 1)

    const searchParams = new URLSearchParams(str)
    return searchParams.get(key)
  } else {
    return '请输入正确的url字符串'
  }
}

export function setSessionStorage (key, value) {
  window.sessionStorage.setItem(key, value)
}

export function getSessionStorage (key) {
  return window.sessionStorage.getItem(key)
}

// 调试用
export function printJson (info, data) {
  if (info) {
    console.log(info, JSON.parse(JSON.stringify(data)))
  } else {
    console.log(JSON.parse(JSON.stringify(data)))
  }
}
