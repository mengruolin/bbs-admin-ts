<template>
  <div class="home">
    <el-input v-model.number="num"></el-input>
    <el-button @click="handleAdd">计算</el-button>
    {{ handleAdd() }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'home',
})
export default class Home extends Vue {
  private num: number = null as unknown as number;
  get add(): number {
    return this.num;
  }
  @Watch('num')
    private watchNum() {
      console.log(typeof this.num);
    }

  private handleAdd(): number {
    return this.num + 20;
  }
}
</script>

<style lang="less" scoped>
.chart-box {
  width: 200px;
  height: 200px;
}
</style>
