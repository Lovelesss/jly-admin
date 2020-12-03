import router from '../router'
import store from '@/store/index'
import { getToken } from '@/utils/auth'
import { getSessionStorage } from '@/utils/index'

router.beforeEach(async (to, from, next) => {
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 如果有路由菜单
      const hasAddRoutes = store.getters.addRoutes.length > 0
      if (hasAddRoutes) {
        next()
      } else {
        try {
          const roles = JSON.parse(getSessionStorage('roles'))
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
