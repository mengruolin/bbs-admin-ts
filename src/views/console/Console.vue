<template>
  <div class="_console">
    <div class="item card-1">
      <show-case></show-case>
    </div>
    <div class="item card-2">2</div>
    <div class="item card-3">
      <private-message></private-message>
    </div>
    <div class="item card-4">4</div>
    <div class="item card-5">5</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShowCase from './_parts/ShowCase.vue';
import PrivateMessage from './_parts/PrivateMessage.vue';
@Component({
  components: {
    ShowCase,
    PrivateMessage,
  },
})
export default class Console extends Vue {
  public name: string = 'Console';

  // private mounted(): void {}
}
</script>

<style lang="less" scoped>
@gridWidth: calec( 33.3% - 20px );

._console {
  // border: firebrick solid 1px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  .item {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .card-1 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      // background-color: aqua;
  }
  .card-2 {
    background-color:rgb(236, 146, 146);
  }
  .card-3 {
    // grid-column-start: 2;
    // grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    background-color: #fff;
  }
  .card-4 {
    background-color: rgb(133, 168, 129);
  }
  .card-5 {
    background-color: rgb(64, 132, 163);
  }
}
</style>
