<template>
  <!--  <a-breadcrumb>-->
  <!--    <a-breadcrumb-item v-for="(item, index) in $route.meta.breadcrumb" :key="index">{{ item }}</a-breadcrumb-item>-->
  <!--  </a-breadcrumb>-->
  <span v-html="crumb">
<!--    {{ crumb }}-->
  </span>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BreadCrumb',
  data () {
    return {
      crumb: ''
    }
  },
  computed: {
    ...mapGetters(['permissionRoutes'])
  },
  watch: {
    $route: {
      handler () {
        this.getBreadCrumb()
      },
      immediate: true
    }
  },
  methods: {
    // 生成面包屑
    getBreadCrumb () {
      const matched = this.$route.matched
      if (matched[0].redirect) {
        this.crumb = matched[0].meta.title
      } else {
        this.crumb = matched.reduce((total, item) => `${matched[0].meta.title}  /  <span style="color: #97a8be">${item.meta.title}</span>`)
      }
      console.log(this.crumb)
    }
  }
}
</script>

<style scoped lang="less">
  .bread-crumb {
    margin-left: 15px;
  }
</style>
