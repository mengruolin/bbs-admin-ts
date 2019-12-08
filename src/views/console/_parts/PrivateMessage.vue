<template>
  <paging-card :slotNames="slotNames" title="站内消息">
  </paging-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PrivateMessage extends Vue {}
</script>

<style lang="less" scoped>

</style>
