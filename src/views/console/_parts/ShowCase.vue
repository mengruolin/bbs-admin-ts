<template>
  <paging-card :slotNames="slotNames">
    <!-- <div v-for="(item, k) of slotNames" :key="k">
      <template slot="item">1</template>
    </div> -->
    <template slot="aa">1</template>
    <template slot="bb">2</template>
  </paging-card>
  <!-- <div class="showCase">
    <el-card>1</el-card>
    <el-card>2</el-card>
    <el-card>3</el-card>
    <el-card>4</el-card>
    <el-card>5</el-card>
    <el-card>6</el-card>
    <el-card>7</el-card>
    <el-card>8</el-card>
    <el-card>9</el-card>
    <el-card>10</el-card>
    <el-card>11</el-card>
    <el-card>12</el-card>
  </div> -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ShowCase extends Vue {
  private slotNames: string[] = ['aa', 'bb'];
}
</script>

<style lang="less" scoped>
@gridWidth: calec( 33.3% - 20px );

.showCase {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: repeat(4, 25%);
}
</style>