<template>
  <div class="sidebar-wrapper">
    <menu-item :data="menuList" :level="0" />
  </div>
</template>

<script>
import MenuItem from './menu-item'
import { getMenuList } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  components: {
    MenuItem
  },
  data () {
    return {
      menuList: [
        {
          path: '/',
          title: '首页'
        },
        {
          path: '/article',
          title: '文章管理',
          children: [
            {
              path: 'list',
              title: '文章列表'
            },
            {
              path: 'add',
              title: '添加文章'
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['permissionRoutes'])
  },
  created () {
    this.menuList = this.permissionRoutes
    getMenuList().then(res => {
      // this.menuList = res.menuList
    })
  }
}
</script>

<style scoped lang="less">
  .sidebar-wrapper {
    width: 210px;
    height: 100vh;
    background: #304156;
  }
</style>
