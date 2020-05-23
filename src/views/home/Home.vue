<template>
  <div class="home">
    <!-- <el-input v-model.number="num"></el-input>
    <el-button @click="handleAdd">计算</el-button>
    {{ handleAdd() }} -->

    {{arr}}

    <el-button @click.native="handleAdd">push</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  name: 'home',
})
export default class Home extends Vue {
  private num: number = null as unknown as number;

  private arr: any[] = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  private handleAdd(): void {
    this.$set(this.arr, 0, [4, 5, 6]);
  }

  get add(): number {
    return this.num;
  }
  @Watch('num')
    private watchNum() {
      console.log(typeof this.num);
    }
}
</script>

<style lang="less" scoped>
.chart-box {
  width: 200px;
  height: 200px;
}
</style>
