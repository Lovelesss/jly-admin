<template>
  <div class="menus">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="menu-item-wrapper"
    >
      <template v-if="!item.hidden">
        <!--      顶级菜单,没有子菜单-->
        <template v-if="item.topLevel">
          <div class="menu-item" @click="menuItemClick(item)">
            <a-icon v-if="level === 0" type="calendar" style="color: #bfcbd9" />
            <span class="menu-title">{{ item.meta.title }}</span>
          </div>
        </template>

        <!--      没有子菜单或有多个-->
        <template v-else>
          <div class="menu-item" @click="menuItemClick(item)">
            <a-icon v-if="level === 0" type="calendar" style="color: #bfcbd9" />
            <span class="menu-title" :style="{'padding-left': level > 0 ? level * 15 + 'px' : ''}">{{ item.meta.title }}</span>
            <a-icon v-if="item.children && item.children.length > 0" :type="item.selected ? 'up' : 'down'" style="color: #bfcbd9" />
          </div>
          <collapse-transition>
            <menu-item
              v-if="item.children && item.showChildren"
              class="animated"
              :data="item.children"
              :level="level + 1"
            />
          </collapse-transition>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
// import path from 'path'
import collapseTransition from './animation'

export default {
  name: 'MenuItem',
  components: {
    collapseTransition
  },
  props: {
    // 菜单列表
    data: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: 0
    },
    // // 路由
    // basePath: {
    //   type: String
    // }
  },
  data () {
    return {
      childLevel: this.level,
      selectedColor: '#409eff'
    }
  },
  created () {
    console.log('侧边栏', this.data)
    for (const v of this.data) {
      console.log(v)
    }
  },
  methods: {
    menuItemClick (item) {
      // 如果是顶级菜单
      if (item.topLevel) {
        this.$router.push({
          path: item.path,
          query: {
            _t: Date.now() // 解决点击菜单刷新
          }
        })
      } else {
        if (!item.children) {
          // const resultPath = this.resolvePath(item.path)
          // console.log(resultPath)
          this.$router.push({
            name: item.name,
            query: {
              _t: Date.now() // 解决点击菜单刷新
            }
          })
        } else {
          item.selected = !item.selected
          this.$set(item, 'showChildren', !item.showChildren)
        }
      }
    }
    // // 合并路由
    // resolvePath (currentPath) {
    //   if (this.basePath) {
    //     return path.resolve(this.basePath, currentPath)
    //   } else {
    //     return currentPath
    //   }
    // }
  }
}
</script>

<style scoped lang="less">
  .menus {
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: rgb(96, 106, 120);
      width: 5px;
    }
  }
  .menu-item {
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 20px;
    .menu-icon-wrapper {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
    .menu-title {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 56px;
      line-height: 56px;
      color: #bfcbd9;
      margin-left: 16px;
    }
    &:hover {
      cursor: pointer;
      background: rgb(38, 52, 69);
    }
  }
</style>
