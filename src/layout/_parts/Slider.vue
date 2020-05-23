<template>
  <el-menu
    class="_menu"
    :router="true"
    :unique-opened="true"
    :collapse="isCollapse"
    :default-active="activeIndex"
    :collapse-transition="false"
    :background-color="clolrConf.asiderBgColor"
    :text-color="clolrConf.asiderTextColor"
    :active-text-color="clolrConf.asiderActiveTextColor">
    <template  v-for="(item, key) in menus">
      <el-submenu v-if="item.suns" :key="key" :index="menusUrl[item.reskey]">
        <template slot="title">
          <i class="icon-font" v-html="menusIcon[item.reskey]"></i>
          <span class="c-ml10">{{ item.resourcesName }}</span>
        </template>
        <el-menu-item v-for="(lists, i) of item.suns" :key="i" :index="menusUrl[lists.reskey] || '/'">
          <span slot="title">{{ lists.resourcesName }}<i class="el-icon-star-off c-ml10"></i></span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item v-else :index="menusUrl[item.reskey] || '/'" :key="key">
        <i class="icon-font" v-html="menusIcon[item.reskey]"></i>
        <span slot="title" class="c-ml10">{{ item.resourcesName }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from 'vue-property-decorator';
import { menusUrl, menusIcon} from './menus-link';
import { IMenus } from '../types';
// use typings-for-css-modules-loader and webpack ;
// import config from '@/assets/less/config.less';
const config = require('../../assets/less/config.less');

@Component
export default class Aside extends Vue {
  public name: string = 'Aside';
  private menusIcon: StrObject = menusIcon;
  private menusUrl: StrObject = menusUrl;

  @Prop({
    type: Boolean,
    required: false,
    default: true,
  }) private isCollapse!: false;

  @Prop({
    type: Array,
    required: false,
    default: [],
  }) private menus!: [];

  get clolrConf() {
    return config;
  }

  get activeIndex(): string {
    return this.$route.path;
  }

  // 重载当前路由生命周期
  // private clickNavList(path: string): void {
  //   this.$router.push({
  //     path,
  //     query: {
  //       t: Date(),
  //     },
  //   });
  // }
}
</script>

<style lang="less" scoped>
._menu {
  border: none;
  min-height: 100vh;
}
</style>
