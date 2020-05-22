<template>
  <el-row>
    <el-col :span="6">
      <span>作者ID：</span>
      <el-input class="c-wv80" v-model="authorId" placeholder="输入作者ID"></el-input>
    </el-col>
    <el-col :span="6">
      <span>文章ID：</span>
      <el-input class="c-wv80" v-model="topicId" placeholder="输入文章ID"></el-input>
    </el-col>
    <el-col :span="6">
      <span>标题：</span>
      <el-input class="c-wv80" v-model="title" placeholder="输入标题"></el-input>
    </el-col>
    <el-col :span="6" class="c-tr">
      <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      <el-button type="primary" icon="el-icon-refresh-left" @click="handleReset">重置</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator'

@Component
export default class TableBox extends Vue {
  @Prop(Array) protected listData!: []

  private authorId: string = ''
  private topicId: string = ''
  private title: string = ''

  @Emit('search')
  public handleSearch(): object {
    return {
      author_id: this.authorId,
      _id: this.topicId,
      title: this.title,
    }
  }

  public handleReset(): void {
    this.authorId = ''
    this.topicId = ''
    this.title = ''
    this.handleSearch()
  }
}
</script>

<style lang="less" scoped>
</style>