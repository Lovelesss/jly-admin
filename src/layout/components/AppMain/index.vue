<template>
  <div class="app-main">
    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="less">
  .app-main {
    height: calc(100vh - 50px - 30px);
  }
</style>
