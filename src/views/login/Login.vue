<template>
  <div class="_login">
    <el-form class="_form">
      <el-form-item class="_title">
        <h1 data-content="Login">Login</h1>
      </el-form-item>

      <el-form-item>
        <material-input title="账号：" v-model="userName" type="text"></material-input>
      </el-form-item>

      <el-form-item>
        <material-input title="密码：" v-model="passWord" type="password"></material-input>
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

interface FormData {
  userName: string;
  passWord: string;
  validNumber: string;
}

@Component
export default class Login extends Vue {
  private userName: string = '';
  private passWord: string = '';
  private validNumber: string = '';
  private validBtnTitle: string = '发送验证码';

  get loginForm(): FormData {
    return {
      userName: '',
      passWord: '',
      validNumber: '',
    };
  }

  private handleLogin(): void {
    console.log(this.userName);
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
  background: linear-gradient(to right, #1c92d2, #f2fcfe);
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
    background: rgba(0, 0, 0, .1);
    border: seagreen solid 1px;
    border-radius: 12px;
    box-shadow: 5px 5px 5px rgb(67, 118, 141); /// ===========>
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