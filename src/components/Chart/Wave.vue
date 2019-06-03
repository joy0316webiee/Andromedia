<template>
  <div class="wave-chart">
    <div class="legend">
      <div class="first-line">
        <span class="color"></span>
        <span class="text">访客信息</span>
      </div>
      <div class="second-line">
        <span class="color"></span>
        <span class="text">转化率</span>
      </div>
      <div class="title">
        <span>一周交易数据趋势图</span>
      </div>
    </div>
    <div class="chart">
      <wave></wave>
    </div>
  </div>
</template>

<script>
import Wave from "./Wave.js";

export default {
  components: {
    Wave
  }
};
</script>

<style lang="scss" scoped>
.wave-chart {
  width: 602px;
  height: 411px;
  position: relative;

  .legend {
    width: 90px;
    height: 46px;
    position: absolute;
    left: 18px;
    top: 31px;

    > div {
      display: flex;
      align-items: center;

      .color {
        width: 15px;
        height: 15px;
        display: inline-block;
      }
      .text {
        color: #a5b5c7;
        font-size: 14px;
        font-weight: 400;
        margin-left: 16px;
        font-family: "FZLTHK -- GBK 1-0";
      }
      &.first-line {
        .color {
          background-color: #48ca70;
        }
      }
      &.second-line {
        margin-top: 15px;

        .color {
          background-color: #0f7bf9;
        }
      }
    }
  }
  .title {
    width: 15px;
    position: absolute;
    left: -25px;
    top: 145px;

    span {
      width: 15px;
      height: 169px;
      color: #a5b5c7;
      font-family: "Adobe Heiti Std";
      font-size: 15px;
      font-weight: 400;
      top: 0px;
    }
  }
}
</style>