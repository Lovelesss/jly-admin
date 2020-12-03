/**
 * @Description: 动态生成路由
 * @author: jly
 * @date: 2020/11/26
*/

import { constantRoutes, asyncRoutes } from '@/router'

function hasPermission (route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 路由过滤
 * @param routes
 * @param roles
 */
function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(tmp, roles)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}
const state = {
  routes: [], // 所有路由
  addRoutes: [] // 生成的路由
}

const mutations = {
  setRoutes: (state, routes) => {
    state.addRoutes = routes
    state.routes = [...constantRoutes, ...routes]
  }
}

const actions = {
  generateRoutes ({ commit }, roles) {
    return new Promise(resolve => {
      let accessRoutes
      if (roles.includes('admin')) {
        accessRoutes = asyncRoutes || []
      } else {
        accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('setRoutes', accessRoutes)
      resolve(accessRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

