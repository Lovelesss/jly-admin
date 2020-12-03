<template>
  <div>
    <a-button>dashboard</a-button>
    <a-button v-auth="['admin']">管理员</a-button>
    <a-button v-auth="['editor']">编辑者</a-button>
    <div v-auth="['admin']">
      <span>只有管理员能访问</span>
    </div>
    <HelloWorld>
      <template v-slot:default="obj">
        <h1 slot="title">{{ obj }}</h1>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'Dashboard',
  components: {
    HelloWorld
  },
  directives: {
    // 指令权限
    auth: {
      inserted (el, binding) {
        const roles = ['admin']
        const { value } = binding
        if (value && Array.isArray(value) && value.length > 0) {
          if (roles.includes('admin')) {
            return true
          } else {
            const hasPermission = roles.some(role => {
              return value.includes(role)
            })

            if (!hasPermission) {
              el.parentNode && el.parentNode.removeChild(el)
            }
          }
        } else {
          throw new Error('请输入权限参数')
        }
      }
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    fnChange (e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
