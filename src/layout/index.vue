<template>
  <div class="app-wrapper">
    <SideBar />
    <div class="right-content">
      <NavBar />
      <TagNav />
      <AppMain />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar/index'
import NavBar from './components/NavBar/index'
import TagNav from './components/TagNav/index'
import AppMain from './components/AppMain/index'

export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    TagNav,
    AppMain
  }
}
</script>

<style scoped lang="less">
  .app-wrapper {
    display: flex;
    .right-content {
      flex: 1;
    }
  }
</style>
