<template>
  <div class="nav-bar">
    <div class="fold-icon">
      <a-icon type="menu-fold" style="font-size: 20px;" @click="toggleSideBar" />
    </div>
    <BreadCrumb class="bread-crumb" />
    <div class="right-menu">
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-avatar :src="userInfo.avatar || avatar" style="margin-right: 10px;" />
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:">个人中心</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:" @click="logout">退出登录</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '../BreadCrumb/index'
import avatar from '@/assets/jly.jpg'
import { mapGetters } from 'vuex'
import { resetRouter } from '@/router'

export default {
  name: 'NavBar',
  components: {
    BreadCrumb
  },
  data () {
    return {
      avatar
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created () {
  },
  methods: {
    toggleSideBar () {
    },
    // 退出登录
    logout () {
      this.$store.commit('user/setUserInfo', {})
      this.$store.commit('user/setRoles', [])
      this.$store.commit('permission/setRoutes', [])
      window.sessionStorage.clear()
      resetRouter()
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  display: flex;
  align-items: center;
  height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  .fold-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
  }
  .bread-crumb {
    flex: 1;
  }
  .right-menu {
    margin-right: 20px;
  }
}
</style>
