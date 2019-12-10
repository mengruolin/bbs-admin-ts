<template>
  <transition class="_charts">
    <line-charts width="100%" height="100%"></line-charts>
  </transition>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class ChartsPanel extends Vue {}
</script>

<style lang="less" scoped>
._charts, ._charts-leave-active {
  transition: opacity .3s;
}
._charts-enter, ._charts-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>