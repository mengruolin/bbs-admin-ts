<template>
  <div id="lineCharts"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
//import roughViz from 'roughViz';

@Component
export default class LineCharts extends Vue{
  public name: string  = 'lineCharts';
  // @Prop({
  //   type: Array,
  //   default: () => [],
  //   required: true,
  //   }) private chartsData!: object[];

  // private initCharts(): void {
  //   new roughViz.Line({
  //     element: 'lineCharts',
  //     data: this.chartsData,
  //   })
  // }

  // private mounted(): void {
  //   this.initCharts()
  // }
}
</script>