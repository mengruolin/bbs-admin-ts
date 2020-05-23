<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">😊😊😊</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { RouteRecord } from 'vue-router';

@Component
export default class Breadcrumb extends Vue {
  @Watch('$route')
  private onRrouterChange() {
    console.log(this.$route.matched);
  }
}
</script>

<style lang="less" scoped>
  .breadcrumb {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
</style>