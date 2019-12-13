<template>
  <div class="_marterial-input">
    <input class="input-center"
      :value="value" @input="$emit('input', $event.target.value)"
      :type="initType"
      :maxlength="maxLength"
      required />
    <span class="_bar"></span>
    <span v-if="type === 'password'" class="_icon">
      <i v-if="initType === 'password'" class="icon-font" @click="handleSwithPassword(true)">&#xe688;</i>
      <i v-else class="icon-font" @click="handleSwithPassword(false)">&#xe62f;</i>
    </span>
    <label>{{ title }}</label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MaterialInput extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private titleWidth!: string;
  @Prop() private value!: any;
  @Prop(String) private type!: string;
  @Prop(Number) private maxLength!: number;

  private initType: any = this.type;
  private handleSwithPassword(on: boolean): void {
    on ? this.initType = 'text' : this.initType = 'password';
  }
}
</script>

<style lang="less" scoped>
@inputHeight: 60px;
@labelColor: #ffffff;
@labelActiveColor: #47e4bb;
@transTime: 500ms;

._marterial-input {
  width: 300px;
  box-sizing: border-box;
  padding: 10px 0;
  height: @inputHeight;
  line-height: 1em;
  position: relative;
  .input-center {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: @labelColor solid 2px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0);
    color: @labelColor;
    font-size: 15px;
    padding: 0 40px 0 0;
    &:focus {
      outline: none;
    }
    
    &:focus ~ label,
    &:valid ~ label {
      bottom: 50px;
      left: 0px;
      font-size: 16px;
      color: @labelActiveColor;
    }

    &:focus ~ ._bar:before {
      width: 100%;
    }
  }
  label {
    position: absolute;
    bottom: 20px;
    left: 5px;
    font-size: 18px;
    color: @labelColor;
    transition: @transTime ease all;
    z-index: 0;
  }
  ._bar {
    position: relative;
    width: 0;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      position: absolute;
      left: 0%;
      transition: @transTime ease all;
      background: @labelActiveColor;
      top: -2px;
    }
  }
  ._icon {
    position: absolute;
    right: 10px;
    bottom: 20px;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
