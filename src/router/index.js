import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index'

Vue.use(VueRouter)

// 不变的路由
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    topLevel: true,
    meta: {
      title: 'dashboard'
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard'
      }
    ]
  },
  {
    path: '/404',
    component: Layout,
    name: '404',
    redirect: '/404/index',
    hidden: true,
    children: [
      {
        path: 'index',
        name: '404',
        component: () => import('@/views/404/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  }
]

// 根据权限生成
export const asyncRoutes = [
  {
    path: '/icons',
    component: Layout,
    redirect: '/icons/index',
    name: 'Icons',
    topLevel: true,
    meta: {
      title: '图标(无需权限)'
    },
    children: [
      {
        path: 'index',
        name: 'Icons',
        component: () => import('@/views/icons/index.vue')
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    name: 'Test',
    meta: {
      roles: ['admin'],
      title: '权限测试页面(管理员)'
    },
    children: [
      {
        path: 'one',
        name: 'One',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '二级菜单111'
        }
      },
      {
        path: 'two',
        name: 'Two',
        component: () => import('@/views/test/index.vue'),
        meta: {
          title: '二级菜单222'
        },
        children: [
          {
            path: 'three',
            name: 'Three',
            component: () => import('@/views/test/index.vue'),
            meta: {
              title: '三级菜单111'
            }
          },
          {
            path: 'four',
            name: 'Four',
            component: () => import('@/views/test/index.vue'),
            meta: {
              title: '三级菜单222'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    meta: {
      title: '文章管理'
    },
    children: [
      {
        path: 'add',
        name: 'ArticleAdd',
        component: () => import('@/views/article/article-add/index.vue'),
        meta: {
          title: '添加文章',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'list',
        name: 'ArticleList',
        component: () => import('@/views/article/article-list/index.vue'),
        meta: {
          title: '文章列表',
          roles: ['admin']
        }
      }
    ]
  }
]

// const routes = [
//   {
//     path: '/',
//     name: 'Layout',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//       {
//         path: 'dashboard',
//         component: () => import('@/views/dashboard/index'),
//         name: 'Dashboard',
//         meta: {
//           title: 'dashboard'
//         }
//       }
//     ]
//   },
//   {
//     path: '/404',
//     component: Layout,
//     redirect: '/404/index',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     children: [
//       {
//         path: 'index',
//         name: '404',
//         component: () => import(/* webpackChunkName: "about" */ '../views/404/index.vue')
//       }
//     ]
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
//   },
//   {
//     path: '/icons',
//     component: Layout,
//     redirect: '/icons/index',
//     children: [
//       {
//         path: 'index',
//         name: 'Icons',
//         component: () => import(/* webpackChunkName: "icons" */ '../views/icons/index.vue'),
//         meta: {
//           title: '图标(无需权限)'
//         }
//       }
//     ]
//   },
//   {
//     path: '/test',
//     component: Layout,
//     redirect: '/test/index',
//     children: [
//       {
//         path: 'index',
//         name: 'Test',
//         component: () => import(/* webpackChunkName: "test" */ '../views/test/index.vue'),
//         meta: {
//           title: '权限测试页面(管理员)',
//           roles: ['admin', 'editor']
//         }
//       }
//     ]
//   },
//   {
//     path: '/article',
//     component: Layout,
//     children: [
//       {
//         path: 'add',
//         name: 'ArticleAdd',
//         component: () => import(/* webpackChunkName: "article-add" */ '../views/article/article-add/index.vue'),
//         meta: {
//           title: '添加文章',
//           roles: ['admin', 'editor']
//         }
//       },
//       {
//         path: 'list',
//         name: 'ArticleList',
//         component: () => import(/* webpackChunkName: "article-list" */ '../views/article/article-list/index.vue'),
//         meta: {
//           title: '文章列表',
//           roles: ['admin']
//         }
//       }
//     ]
//   }
// ]

// const router = new VueRouter({
//   routes: constantRoutes
// })
//
// // 重置路由:https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter () {
//   const newRouter = new VueRouter()
//   router.matcher = newRouter.matcher
// }

const createRouter = () => new VueRouter({
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
