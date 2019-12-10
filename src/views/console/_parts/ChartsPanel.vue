<template>
  <transition class="_charts-panel">
    <line-charts width="100%" height="100%"></line-charts>
  </transition>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class ChartsPanel extends Vue {}
</script>