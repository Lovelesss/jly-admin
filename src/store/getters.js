const getters = {
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  addRoutes: state => state.permission.addRoutes,
  permissionRoutes: state => state.permission.routes
}

export default getters
