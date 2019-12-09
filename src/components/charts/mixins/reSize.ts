import echarts, { ECharts } from 'echarts';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'minixCharts',
})
export default class extends Vue {
  protected chart: ECharts | null = null;

  protected mounted() {
    this.initResizeEvent();
  }

  protected activated() {
    this.initResizeEvent();
  }

  protected beforeDestory() {
    this.removeResizeEvent();
  }

  protected deactivated() {
    this.removeResizeEvent();
  }

  private initResizeEvent(): void {
    window.addEventListener('resize', this.chartResize);
  }

  private chartResize(): void {
    if (this.chart) {
      this.chart.resize();
    }
  }

  private removeResizeEvent() {
    if (this.chartResize) {
      window.removeEventListener('resize', this.chartResize);
    }
  }
}
