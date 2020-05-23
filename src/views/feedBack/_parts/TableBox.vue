<template>
  <el-table :data="listData"
  lazy border
  :header-row-style="{backgroundColor: '#e2e2e2'}"
  height="100%" >
  <el-table-column
      label="序号"
      align="center"
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="author_id.nickName"
      label="作者"
      align="center"
      width="100" />
    <el-table-column
      label="反馈时间"
      align="center"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.create_at | DateFormat }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="更新时间"
      align="center"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.update_at | DateFormat }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="content"
      align="center"
      min-width="100"
      label="内容" />
    <el-table-column
      label="已解决"
      align="center"
      width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.is_resolve ? '是' : '否' }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      fixed="right"
      width="200">
      <template slot-scope="scope">
        <!-- <el-Button
          type="text"
          size="small"
          title="编辑"
          v-if="scope.row.top === true"
          @click="handleEdit(scope.row._id)"
          slot="reference">
          取消置顶
        </el-Button>
        <el-Button
          type="text"
          size="small"
          title="编辑"
          v-if="scope.row.top === false"
          @click="handleEdit(scope.row._id)"
          slot="reference">
          置顶
        </el-Button> -->
        <el-Button
          class="c-ml10"
          type="danger"
          icon="el-icon-delete"
          size="small"
          @click="handleDeleteTopic(scope.row._id)"
          title="删除" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class TableBox extends Vue {
  @Prop(Array) protected listData!: []

  @Action('deleteFeedback') private deleteFeedback!: (params: object) => Promise<any>

  @Emit('reset')
  public emitReset() {
    console.log('page reset')
  }

  public async handleDeleteTopic(topicId: string) {
    const res: any = await this.deleteFeedback({ topicId })
    if (res.code !== '0') {
      return this.$message(res.msg)
    }
    this.$message.success('删除成功')
    this.emitReset()
  }

  // public async handleEdit(topicId: string) {
  //   //this.showHandleMenu = true
  // }
}
</script>

<style lang="less" scoped>
.table-box {
  height: 100%;
  width: 100%;
}
</style>