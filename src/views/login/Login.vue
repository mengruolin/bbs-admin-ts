<template>
  <div class="_login">
    <el-form class="_form">
      <el-form-item class="_title">
        <h1 data-content="Login">Login</h1>
      </el-form-item>

      <el-form-item>
        <material-input title="账号：" v-model="username" type="text"></material-input>
      </el-form-item>

      <el-form-item>
        <material-input title="密码：" v-model="password" type="password"></material-input>
      </el-form-item>

      <el-form-item class="_valid-box">
        <material-input title="验证码：" v-model="validNumber" type="text" style="width: 150px;" :max-length="6"></material-input>
        <el-button class="_valid-btn" type="primary">{{validBtnTitle}}</el-button>
      </el-form-item>

      <el-form-item class="_login-btn">
        <el-button @click.native="handleLogin" class="c-w300">login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';

interface FormData {
  username: string;
  password: string;
  validNumber: string;
}

@Component
export default class Login extends Vue {
  private username: string = ''
  private password: string = ''
  private validNumber: string = ''
  private validBtnTitle: string = '发送验证码'

  @Action('login') private login!: (params: object) => void

  get loginForm(): FormData {
    return {
      username: this.username,
      password: this.password,
      validNumber: '',
    }
  }

  private async handleLogin() {
    if (!this.username || !this.password) {
      return this.$message.warning('请输入用户名和密码')
    }
    const res: any = await this.login(this.loginForm)
    if (res.code !== '0') {
      return this.$message.error(res.msg)
    }

    this.$message.success('登陆成功')
    window.localStorage.setItem('token', `Bearer ${res.access_token}`)
    this.$router.push('/')
  }
}
</script>

<style lang="less">
.randomColor(){
  @randomColor: `Math.floor(Math.random()*16777215).toString(16)`;
  @colorHex: e(@randomColor);
  @color: ~"#@{colorHex}";
}

._login {
  width: 100%;
  height: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: rgb(139, 136, 136);
  //background: linear-gradient(to right, #1c92d2, #f2fcfe);
  // animation: bgAnimation 3s infinite;
  // .randomColor();
  ._form {
    width: 450px;
    height: 550px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0);
    //border: #e2e2e2 solid 1px;
    border-radius: 12px;
    //box-shadow: 5px 5px 5px rgb(67, 118, 141); /// ===========>
    .el-form-item {
      width: 300px;
      margin: 0 auto;
      margin-top: 10px;
    }
    ._title {
      width: 100%;
      h1 {
        font-size: 34px;
        letter-spacing: 5px;
        text-align: center;
        color: hsla(0,0%,100%,.3);
        font: 900 500% Baskerville, 'Palatino Linotype', Palatino, serif;
        &::before {
          content: attr(data-content);
          position: absolute;
          overflow: hidden;
          max-width: 4em;
          color: white;
          animation: titleAnimation 10s linear;
        }
      }
    }
    ._valid-box {
      // text-align: left;
      & /deep/ .el-form-item__content {
        display: flex;
      }
      ._valid-btn {
        // flex: 1;
        position: absolute;
        width: 110px;
        height: 40px;
        right: 0;
        bottom: 10px;
      }
    }
    ._login-btn {
      margin-top: 30px;
      text-align: center;
    }
  }
}

@keyframes titleAnimation {
  from { max-width: 0; }
}

@keyframes bgAnimation {
  from {
    background: rgb(122, 8, 107);
  }

  to {
    background: darkblue;
  }
}
</style>