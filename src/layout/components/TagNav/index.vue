<template>
  <div class="tag-nav-wrapper">
    <router-link
      v-for="item in 6"
      :key="item"
      class="tag-item"
      :class="item === currentTag ? 'active' : ''"
      to="/"
      @click.native="tagClick(item)"
    >
      标签 {{ item }}
      <a-icon type="close" class="close-icon" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TagNav',
  data () {
    return {
      isActive: false,
      currentTag: 1
    }
  },
  methods: {
    tagClick (item) {
      this.currentTag = item
    }
  }
}
</script>

<style scoped lang="less">
  .tag-nav-wrapper {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 4px 20px 4px 8px;
    .tag-item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 26px;
      padding: 0 8px;
      margin-left: 8px;
      line-height: 26px;
      font-size: 12px;
      color: #495060;
      border: 1px solid #d8dce5;
      &.active {
        background: #42b983;
        color: #fff;
      }
      .close-icon {
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        margin-left: 4px;
        font-size: 8px;
        border-radius: 50%;
        &:hover {
          background-color: #b4bccc;
          color: #fff;;
        }
      }
    }
  }
</style>
