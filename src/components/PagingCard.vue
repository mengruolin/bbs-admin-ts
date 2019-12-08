<template>
  <el-card class="pagingCard">
    <div class="_header">
      <div class="_title">
        {{ title }}
      </div>
      <div class="_btn" v-if="slotNames.length >= 1">
        <span @click="handleChangePage('prev')" class="c-clickIcon"><i class="el-icon-arrow-up"></i></span>
        <span @click="handleChangePage('next')" class="c-ml10 c-clickIcon"><i class="el-icon-arrow-down"></i></span>
      </div>
    </div>
    <el-carousel
      class="_pages" 
      ref="carousel"
      :direction="direction"
      :autoplay="false"
      indicator-position="none"
      height="100%"
      arrow="never"
      @change="isChangePage">
      <el-carousel-item v-for="(item, k) of slotNames" :key="k">
        <slot :name="item"></slot>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Carousel } from 'element-ui';

@Component
export default class PagingCard extends Vue {
  public name: string = 'pagingCard';
  private pageIndex: number = 0;

  @Prop({
    type: String,
    default: 'horizontal',
    required: false,
    }) private direction!: string;

  @Prop({
    type: String,
    default: () => '',
    required: false,
  }) private title!: string;

  @Prop({
    type: Array,
    default: [],
    required: true,
    }) private slotNames!: string[];

    private handleChangePage(to: string): void {

      if (to === 'next') {
        if (this.pageIndex === this.slotNames.length - 1) {
          return;
        }
        (this.$refs.carousel as Carousel).next();
      } else {
        if (this.pageIndex === 0) {
          return;
        }
        (this.$refs.carousel as Carousel).prev();
      }
    }

    private isChangePage(index: number) {
      this.pageIndex = index;
    }
}
</script>

<style lang="less" scoped>
.pagingCard {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: #cccccc solid 1px;
  // padding: 30px 5px 5px 5px;
  & /deep/ .el-card__body {
    padding: 0 0;
    padding-top: 50px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  ._header {
    position: absolute;
    top: 0px;
    //background: red;
    width: 100%;
    height: 50px;
    border-bottom: #cccccc solid 1px;
    display: flex;
    ._title {
      flex: 1;
      overflow: hidden;
      padding-left: 20px;
      font-size: 18px;
      line-height: 50px;
      color: #cccccc;
    }
    ._btn {
      max-width: 100px;
      line-height: 50px;
      // position: absolute;
      // right: 0px;
      padding-right: 20px;
      font-size: 20px;
      color:#cccccc;
    }
  }
  ._pages {
    height: 100%;
  }
}
</style>