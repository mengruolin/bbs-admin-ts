<template>
  <div class="_showCase">
    <rotate-card v-for="(item, k) of statistics" :key="k">
      <template slot="front">
        <div class="card-front">
          <el-row>
            <el-col :span="8" class="photo">
              <svg-icon :icon-class="item.svgName"></svg-icon>
            </el-col>
            <el-col :span="16" class="content">{{ item.title }}：{{ item.value }}</el-col>
          </el-row>
        </div>
      </template>
      <template slot="back">
        <div class="card-back">
          <div class="show-charts" @click="handleShowCharts"><svg-icon icon-class="showCharts"></svg-icon></div>
        </div>
      </template>
    </rotate-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class ShowCase extends Vue {
  private slotNames: string[] = ['aa', 'bb'];
  private showCharts: boolean = false;

  @Getter private statistics!: [];

  private handleCloseCharts() {
    this.showCharts = false;
  }

  private handleShowCharts() {
    this.showCharts = true;
  }
}
</script>

<style lang="less" scoped>
._showCase {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 5px 5px 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  .card-front {
    height: 100%;
    width: 100%;
    .el-row {
      width: 100%;
      height: 100%;
      padding: 0 0;
      .photo {
        height: 100%;
      }
      .content {
        padding: 10px 10px;
        height: 100%;
        text-align: center;
        font-size: 24px;
        display: flex;
        align-items: center;
        color: cornflowerblue;
      }
    }
  }
  .card-back {
    height: 100%;
    width: 100%;
    text-align: center;
    color: #f29492;
    background-color: rgba(192, 188, 188, 0.1);
    //position: relative;
    .show-charts {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>
