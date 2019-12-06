<template>
  <el-container class="_lay">
    <el-scrollbar wrap-class="scrollbar-wrapper" :style="isCollapse ? 'min-width: 64px' : 'min-width: 200px'">
    <el-aside class="aside" :style="isCollapse ? 'width: 64px' : 'width: 200px'">
      <Slider
        class="slider"
        :isCollapse="isCollapse"
        :menus="Menus"></Slider>
    </el-aside>
    </el-scrollbar>
    <el-container>
      <el-header>
        <a-header
          :isCollapse="isCollapse"
          @close="handleCloseSlider"
          @open="handleOpenSlider" />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { IMenus } from './types';
import Slider from './_parts/Slider.vue';
import AHeader from './_parts/Header.vue';
import menus from './_parts/menus';

@Component({
  components: {
    Slider,
    AHeader,
  },
})
export default class DefaultLayout extends Vue {
  private isCollapse: boolean = false;

  get Menus() {
    /* 后面再改 */
    return menus.suns;
  }

  private handleCloseSlider() {
    this.isCollapse = true;
  }

  private handleOpenSlider() {
    this.isCollapse = false;
  }
}
</script>

<style lang="less" scoped>
._lay {
  width: 100%;
  height: 100%;
  .el-scrollbar {
    overflow-x: hidden;
    & /deep/ .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .el-main {
    height: 100%;
    width: 100%;
    padding: 10px;
    overflow: hidden;
  }
}
</style>
