<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>1111
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SvgIcon extends Vue {
  @Prop(String) private iconClass!: string;
  @Prop(String) private className!: string;

  get iconName(): string {
    return `#icon-${this.iconClass}`;
  }

  get svgClass(): string {
    if (this.className) {
      return 'svg-icon' + this.className;
    } else {
      return 'svg-icon';
    }
  }
}
</script>

<style scoped lang="less">
.svg-icon {
  padding: 10px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // &:hover {
  //   padding: 0 0;
  // }
}
</style>
