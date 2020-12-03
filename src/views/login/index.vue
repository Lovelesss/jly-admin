<template>
  <div class="login-container">
    <a-form :form="form" class="login-form" @submit="loginIn">
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            { rules: [{ required: true, message: '请输入正确账号!' }] },
          ]"
          placeholder="账号"
          autocomplete
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码!' }] },
          ]"
          type="password"
          placeholder="密码"
          autocomplete
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="login-form-button" html-type="submit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { loginIn } from '@/api/user'
import { setToken } from '@/utils/auth'
import { getUrlParam, setSessionStorage } from '@/utils'

export default {
  name: 'Login',
  data () {
    return {
      redirect: undefined,
      spinning: true
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    loginIn (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.spinning = true

          loginIn(values).then(res => {
            if (res.status === 1) {
              const { nickName, avatar, email, token } = res.result
              const userInfo = { nickName, avatar, email }
              const url = window.location.href

              this.redirect = getUrlParam(url, 'redirect')
              this.$store.commit('user/setUserInfo', userInfo)
              this.$store.commit('user/setRoles', ['admin'])
              setToken(token)
              setSessionStorage('userInfo', JSON.stringify(userInfo))
              setSessionStorage('roles', JSON.stringify(['admin']))
              this.spinning = false
              this.$router.push({
                path: this.redirect || '/'
              }).catch(() => {})
            } else {
              this.$message.error('用户名或密码错误')
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login-container {
    width: 100%;
    min-height: 100%;
    background: #2d3a4b;
    overflow: hidden;
    .login-form {
      width: 520px;
      padding-top: 135px;
      margin: 0 auto;
      .login-form-button {
        height: 36px;
        width: 100%;
      }
    }
  }
</style>
