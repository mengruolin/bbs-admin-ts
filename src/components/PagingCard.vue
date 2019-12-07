<template>
  <el-card class="pagingCard">
    <el-carousel :direction="direction" :autoplay="false" height="100" arrow="never">
      <el-carousel-item v-for="(item, k) of slotNames" :key="k">
        <slot :name="item"></slot>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
// import element from 'element-ui'

@Component
export default class PagingCard extends Vue {
  public name: string = 'pagingCard';

  @Prop({
    type: String,
    default: 'horizontal',
    required: false,
    }) private direction!: string;

  @Prop({
    type: Array,
    default: [],
    required: true,
    }) private slotNames!: string[];
}
</script>

<style lang="less" scoped>
.pagingCard {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // padding: 30px 5px 5px 5px;
  & /deep/ .el-card__body {
    padding: 0 0;
    padding-top: 50px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>