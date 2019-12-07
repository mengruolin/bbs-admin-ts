<template>
  <div class="_console">
    <div shadow="hover" class="item card-1">
      <show-case></show-case>
    </div>
    <div shadow="hover" class="item card-2">2</div>
    <div shadow="hover" class="item card-3">3</div>
    <div shadow="hover" class="item card-4">4</div>
    <div shadow="hover" class="item card-5">5</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShowCase from './_parts/ShowCase.vue';

@Component({
  components: {
    ShowCase,
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
  grid-template-columns: repeat(3, @gridWidth);
  grid-template-rows: repeat(3, @gridWidth);
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
    background-color:black;
  }
  .card-3 {
    // grid-column-start: 2;
    // grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    background-color: #fff;
  }
  .card-4 {
    background-color: blue;
  }
  .card-5 {
    background-color: brown;
  }
}
</style>
