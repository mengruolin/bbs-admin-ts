<template>
  <div>
    <el-row class="_header">
      <el-col :span="12" class="menu">
        <span v-if="!isCollapse" @click="handleCloseSlider"><i class="el-icon-s-fold" alt="收起" /></span>
        <span v-else @click="handleOpenSlider"><i class="el-icon-s-unfold" alt="展开" /></span>
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
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div class="nav-tag">
      <el-tag 
        type="success"
        :closable="true"
        :disable-transitions="false"
        v-for="(item, k) of navList"
        :key="k"
        @close="handleCloseTag(k)"><router-link :to="item.navUrl">{{ item.label }}</router-link></el-tag>
    </div>
  </div>
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
    console.log(index);
    this.navList.splice(index, 1);
  }
}
</script>

<style lang="less" scoped>
@header-width: 50px;
._header {
  width: 100%;
  height: @header-width;
  border-bottom: @headerBorder;
  background-color: @headerBgColor;
  color: @headerFontColor;
  padding: 0 0;
  .el-col {
    height: 100%;
  }
  .menu {
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
  .user-info {
    padding-right: 20px;
    font-size: 16px;
    text-align: right;
    line-height: @header-width;
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
.nav-tag {
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  overflow: hidden;
  .el-tag {
    margin-right: 10px;
    a {
      color: black;
    }
  }
}
</style>
