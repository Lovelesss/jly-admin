/**
 * @Description: user store
 * @author: jly
 * @date: 2020/11/27
 */

const state = {
  userInfo: {},
  roles: []
}

const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setRoles: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

