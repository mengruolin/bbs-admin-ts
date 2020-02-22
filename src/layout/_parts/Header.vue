<template>
  <div>
    <el-row class="_header">
      <el-col :span="12" class="headLeft">
        <div class="menu-icon">
          <span v-if="!isCollapse" @click="handleCloseSlider"><i class="el-icon-s-fold" alt="收起" /></span>
          <span v-else @click="handleOpenSlider"><i class="el-icon-s-unfold" alt="展开" /></span>
        </div>
        <div class="breadcrumb">
          <Breadcrumb />
        </div>
      </el-col>
      <el-col :span="12" class="user-info">
        <el-dropdown trigger="click" class="avatar-swiper">
          <el-image class="avatar" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item>日志</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator';
import Breadcrumb from './Breadcrumb.vue';

@Component({
  components: {
    Breadcrumb,
  },
})
export default class Heard extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: true,
  }) private isCollapse!: false;

  private navList: object[] = [
      {
        label: '首页',
        navUrl: '/',
      },
      {
        label: 'Home页',
        navUrl: '/home',
      },
    ];

  @Emit('open')
  private handleOpenSlider() {
    return 'open';
  }

  @Emit('close')
  private handleCloseSlider() {
    return 'close';
  }

  private handleCloseTag(index: number): void {
    this.navList.splice(index, 1);
  }
}
</script>

<style lang="less" scoped>
@headerHeight: 50px;
._header {
  width: 100%;
  height: @headerHeight;
  border-bottom: @headerBorder;
  background-color: @headerBgColor;
  box-shadow: @headerBoxShadow;
  color: @headerFontColor;
  padding: 0 0;
  .el-col {
    height: 100%;
  }
  .headLeft {
    display: flex;
    .menu-icon {
      width: 60px;
      overflow: hidden;
      span {
        height: 100%;
        display: block;
      }
      i {
        font-size: 28px;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    .breadcrumb {
      position: relative;
      flex: 1;
    }
  }
  .user-info {
    padding-right: 20px;
    font-size: 16px;
    text-align: right;
    line-height: @headerHeight;
    .avatar-swiper {
      width: 40px;
      height: 40px;
      margin-top: 5px;
      overflow: hidden;
      border-radius: 50%;
      cursor: pointer;
      //border: @headerFontColor solid 0.5px;
      .avatar {
        height: 100%;
        width: 100%;
        text-align: center;
        background: @headerFontColor;
        i {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
