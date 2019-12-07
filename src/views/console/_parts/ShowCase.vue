<template>
  <paging-card :slotNames="slotNames">
    <!-- <div v-for="(item, k) of slotNames" :key="k">
      <template slot="item">1</template>
    </div> -->
    <template slot="aa">
      <div class="showCase">
        <el-card shadow="hover">1</el-card>
        <el-card shadow="hover">2</el-card>
        <el-card shadow="hover">3</el-card>
        <el-card shadow="hover">4</el-card>
        <el-card shadow="hover">5</el-card>
        <el-card shadow="hover">6</el-card>
        <el-card shadow="hover">7</el-card>
        <el-card shadow="hover">8</el-card>
        <el-card shadow="hover">9</el-card>
        <el-card shadow="hover">10</el-card>
        <el-card shadow="hover">11</el-card>
        <el-card shadow="hover">12</el-card>
      </div>
    </template>
    <template slot="bb">2</template>
  </paging-card>
  <!--  -->
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
  box-sizing: border-box;
  padding: 10px 5px 5px 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}
</style>