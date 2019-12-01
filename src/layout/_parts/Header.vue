<template>
  <el-row class="_header">
    <el-col :span="4">
      <span v-if="!isCollapse" @click="handleCloseSlider"><i class="el-icon-s-fold"/></span>
      <span v-else @click="handleOpenSlider"><i class="el-icon-s-unfold"/></span>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator';

@Component
export default class Heard extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: true,
  }) private isCollapse!: false;

  @Emit('open')
  private handleOpenSlider() {
    return 'open';
  }

  @Emit('close')
  private handleCloseSlider() {
    return 'close';
  }
}
</script>

<style lang="less" scoped>
._header {
  height: 60px;
  border-bottom: slateblue solid 1px; 
  .el-col {
    height: 100%;
    line-height: 60px;
    i {
      font-size: 28px;
    }
  }
}
</style>
