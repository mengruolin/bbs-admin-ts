<template>
  <div class="_login">
    <el-form class="_form">
      <el-form-item class="_title">
        <h1 data-content="Login">Login</h1>
      </el-form-item>

      <el-form-item class="_title">
        <el-input v-model="userName" class="userName input-w300"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface FormData {
  userName: string;
}

@Component
export default class Login extends Vue {
  private userName: string = '';

  get loginForm(): FormData {
    return {
      userName: '',
    };
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
  // background: linear-gradient(to right, #1c92d2, #f2fcfe);
  // animation: bgAnimation 3s infinite;
  // .randomColor();
  ._form {
    width: 500px;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: darkcyan;
    border: seagreen solid 1px;
    border-radius: 12px;
    box-shadow: 5px 5px 5px seagreen;
    ._title {
      width: 100%;
      text-align: center;
      h1 {
        font-size: 34px;
        letter-spacing: 5px;
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
      .userName {
        font-size: 18px;
        border-bottom: #ffffff solid 2px;
        &::before {
          content: '账号';
          position: absolute;
          top: 0px;
          left: 20px;
          font-size: 20px;
        }
        & /deep/ .el-input__inner:focus & {
          width: 100px;
        }
      }
      .userName /deep/ .el-input__inner {
        background: rgba(255, 255, 255, 0);
        border: none;
        color: aliceblue;
        border-bottom: #0000 solid 2px;
        
      }
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