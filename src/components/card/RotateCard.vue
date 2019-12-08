<template>
  <el-card shadow="hover" class="flip-container">
    <div class="flipper">
      <div class="front">
        <slot name="front"></slot>
      </div>
      <div class="back">
        <slot name="back"></slot>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class RotateCard extends Vue {
  public name: string = 'routateCard';
}
</script>

<style lang="less" scoped>
  .flip-container:hover .flipper, .flip-container.hover .flipper {
    transform: rotateY(180deg);
  }

.flip-container {
  perspective: 1000;
  width: 100%;
  height: 100%;
  & /deep/ .el-card__body {
    padding: 0 0;
    width: 100%;
    height: 100%;
  }
  &:hover .flipper, &.hover .flipper {
    transform: rotateY(180deg);
    color: aqua;
  }

  .flip-container, .front, .back {
    width: 100%;
    height: 100%;
  }

  .flipper {
    transition: 1.5s;
    transform-style: preserve-3d;
    position: relative;
    width: 100%;
    height: 100%;
    .front, .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
    .front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    .back {
      transform: rotateY(180deg);
    }
  }
}

// .vertical.flip-container {
// 	position: relative;
// }

// .vertical .back {
//   transform: rotateX(180deg);
// }

// .vertical.flip-container .flipper {
//   transform-origin: 100% 213.5px; /* half of height */
// }

// .vertical.flip-container:hover .flipper {
//   transform: rotateX(-180deg);
// }
</style>
