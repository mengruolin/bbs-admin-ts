<template>
  <div :id="id" :class="className" :style="{width: width, height: height}">111</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';
import echarts, {EChartOption, ECharts} from 'echarts';
import minixCharts from './mixins/reSize';

interface ChartStyle {
  background: string;
}

interface ChartData {
  xAxis: any[];
  value: any[];
}

@Component({
  name: 'barCharts',
})
export default class BarCharts extends Mixins(minixCharts) {
  @Prop({ default: () => 'chart' + Math.random() }) private id!: string;
  @Prop(String) private className!: string;
  @Prop({ default: '200px' }) private width!: string;
  @Prop({ default: '200px' }) private height!: string;
  @Prop(Object) private chartStyle!: ChartStyle;
  @Prop(String) private chartTitle!: string;
  @Prop(String) private chartName!: string;
  @Prop({
    type: Object,
    default: (): ChartData => {
      return {
        xAxis: [],
        value: [],
      };
    },
    required: true,
  }) private chartData!: ChartData;

  public mounted() {
    this.initCharts();
  }

  private defChartData(): ChartData {
    return {
      xAxis: [],
      value: [],
    };
  }

  // 初始化 eCharts
  private initCharts(): void {
    this.chart = echarts.init(document.getElementById(this.id) as HTMLDivElement);
    this.chart.setOption({
      backgroundColor: '#fef6fb',
      title: {
        top: 20,
        text: this.chartTitle,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [{
        type: 'category',
        data: this.chartData.xAxis,
        axisTick: {
          alignWithLabel: true,
        },
        nameTextStyle: {
          color: '#ccccc',
        },
      }],
      yAxis: [{
          type : 'value',
      }],
      series: [{
        name: this.chartName || this.chartTitle || '',
        type: 'bar',
        coordinateSystem: 'cartesian2d',
        itemStyle: {
          color: '#46b3e6',
        },
        data: this.chartData.value,
      }],
    } as EChartOption<EChartOption.SeriesBar>);

    this.chart.resize();
  }
}
</script>