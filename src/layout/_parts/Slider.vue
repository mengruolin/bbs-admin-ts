<template>
  <el-menu
    class="_menu"
    :router="true"
    :unique-opened="true"
    :collapse="isCollapse"
    :collapse-transition="false">
    <template  v-for="(item, key) in menus">
      <el-submenu v-if="item.suns" :key="key">
        <template slot="title">
          <i :class="menusIcon[item.reskey]"></i>
          <span>{{ item.resourcesName }}</span>
        </template>
        <el-menu-item v-for="(lists, i) of item.suns" :key="i" :index="menusUrl[lists.resky] || '/'">
          <i :class="menusIcon[item.reskey]"></i>
          <span slot="title">{{ item.resourcesName }}</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item v-else :index="menusUrl[item.reskey] || '/'" :key="key">
        <i :class="menusIcon[item.reskey]"></i>
        <span slot="title">{{ item.resourcesName }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import { menusUrl, menusIcon} from './menus-link';
import { IMenus } from '../types';
// import style from './c.less';

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
}
</script>

<style lang="less" scoped>
._menu {
  border: none;
}
</style>
