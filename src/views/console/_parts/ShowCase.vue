<template>
  <paging-card :slotNames="slotNames" title="数据统计">
    <template slot="aa">
      <div class="showCase">
          <rotate-card v-for="(item, k) of statistics" :key="k">
            <template slot="front">
              <div class="card-front">
                <el-row>
                  <el-col :span="8" class="photo">{{ item.label }}</el-col>
                  <el-col :span="16" class="content">{{ item.content }}</el-col>
                </el-row>
              </div>
            </template>
            <template slot="back">
              <div class="card-back">
                查看详细数据统计
              </div>
            </template>
          </rotate-card>
      </div>
    </template>
    <template slot="bb">2</template>
  </paging-card>
  <!--  -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class ShowCase extends Vue {
  private slotNames: string[] = ['aa', 'bb'];

  @Getter private statistics!: [];
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
  grid-template-rows: 1fr 1fr 1fr;
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
        background: linear-gradient(to right, #114357, #f29492);
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
    background-color: rgba(0, 0, 0, 0.1);
  }
}

</style>