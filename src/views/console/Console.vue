<template>
  <div class="_console">
    <el-card shadow="hover" class="card-1">1</el-card>
    <el-card shadow="hover" class="card-2">2</el-card>
    <el-card shadow="hover" class="card-3">3</el-card>
    <el-card shadow="hover" class="card-4">4</el-card>
    <el-card shadow="hover" class="card-5">5</el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Console extends Vue {}
</script>

<style lang="less" scoped>
._console {
  // border: firebrick solid 1px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  .card-1 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      background-color: aqua;
  }
  .card-2 {
    background-color:black;
  }
  .card-3 {
    // grid-column-start: 2;
    // grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    background-color: #fff;
  }
  .card-4 {
    background-color: blue;
  }
  .card-5 {
    background-color: brown;
  }
}
</style>
