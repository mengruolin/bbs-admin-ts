<template>
  <Loading-page>
    <div class="_layout">
      <search-box 
        @search="handleSearch"
        class="search-box" />

      <table-box @reset="initPage" :list-data ='feedbackList' />
      
      <el-card class="pangination-css">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="index"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="sizes, total, prev, pager, next"
          :total="feedbackListCount" />
      </el-card>
    </div>
  </Loading-page>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import SearchBox from './_parts/SearchBox.vue'
import TableBox from './_parts/TableBox.vue'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    SearchBox,
    TableBox,
  },
})
export default class Qasons extends Vue {

  public index: number = 1
  public dataCount: number = 0
  private pageSize: number = 20
  private pageSizes: number[] = [this.pageSize, 50, 100]
  private searchData: object = {}

  @Action('getFeedbackList') private getFeedbackList!: (params: object) => Promise<any>
  @Getter private feedbackList!: []
  @Getter private feedbackListCount!: number

  get searchParams(): object {
    return {
      index: this.index,
      pages: this.pageSize,
      ...this.searchData,
    }
  }

  public handleSizeChange(val: number) {
    this.pageSize = val
    this.getFeedbackList(this.searchParams)
  }

  public handleCurrentChange(val: number) {
    this.index = val
    this.getFeedbackList(this.searchParams)
  }

  public handleSearch(obj: object) {
    this.getFeedbackList({...this.searchParams, ...obj})
  }

  public initPage() {
    this.getFeedbackList(this.searchParams)
  }

  private async mounted() {
    this.initPage()
  }
}
</script>

<style lang="less" scoped>
._layout {
  position: relative;
  height: 100%;
  padding-top: 70px;
  padding-bottom: 90px;
  box-sizing: border-box;
  .search-box {
    width: 100%;
    height: 140px;
    position: absolute;
    top: 0;
    z-index: 3;
  }
  .pangination-css {
    position: absolute;
    height: 80px;
    width: 100%;
    align-content: center;
    box-sizing: border-box;
    bottom: 0;
    //padding: 20px 0;
  }
}
</style>
