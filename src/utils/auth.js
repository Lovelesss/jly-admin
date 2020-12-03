const tokenKey = 'jToken'

export const setToken = token => {
  window.sessionStorage.setItem(tokenKey, token)
}

export const getToken = () => {
  return window.sessionStorage.getItem(tokenKey)
}

export const removeToken = () => {
  return window.sessionStorage.removeItem(tokenKey)
}
