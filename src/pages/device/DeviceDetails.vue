<template>
  <div class="detail">
    <div class="detail-title">
      <span>> 设备 > 设备组1 > 7489333 号</span>
    </div>
    <div class="detail-content">
      <div class="detail-controls">
        <v-dropdown right text="文件"/>
        <v-dropdown right text="默认原厂配置"/>
        <v-dropdown right text="虚拟配置"/>
        <v-dropdown right text="设备日记"/>
        <v-dropdown right text="IP 管理"/>
        <v-dropdown right text="开始录像"/>
        <v-dropdown right text="下载录像"/>
        <v-dropdown right text="账号管理"/>
        <v-dropdown right text="编辑脚本"/>
      </div>
      <div class="detail-image">
        <img src="@/assets/images/mobile.png" alt="mobile">
        <button class="btn-play">
          <img src="@/assets/images/ic_play_blue.png" alt="play">
          <span>12:44:44</span>
        </button>
        <button class="btn-stop">
          <img src="@/assets/images/ic_stop_blue.png" alt="stop">
          <span>12:44:44</span>
        </button>
      </div>
      <div class="detail-terminal">
        <v-terminal/>
        <span>输入</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceDetails"
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 28px 28px 100px;
  width: 100%;
  background-color: #f1f5f8;

  .detail-title {
    span {
      font-family: "Microsoft Ya Hei Light";
      font-size: 12px;
      font-weight: 400;
    }
  }
  .detail-content {
    margin-top: 73px;
    margin-left: 95px;
    display: flex;

    .detail-controls {
      display: grid;
      grid-template-rows: repeat(9, 1fr);
      grid-row-gap: 10px;
      height: 430px;
    }
    .detail-image {
      margin-left: 21px;
      position: relative;
      img {
        width: 430px;
        height: 760px;
      }
      button {
        width: 114px;
        height: 48px;
        border-radius: 24px;
        border: none;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding: 14px 19px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: pointer;

        &.btn-play {
          bottom: 9px;
        }
        &.btn-stop {
          bottom: -63px;
        }

        img {
          width: 19px;
          height: 21px;
        }
        span {
          color: #0f7bf9;
          font-size: 12px;
          font-weight: 400;
          margin-left: 9px;
        }
      }
    }
    .detail-terminal {
      span {
        padding-top: 18px;
        padding-left: 27px;
        font-family: "Microsoft Ya Hei";
        font-size: 12px;
        font-weight: 400;
        display: block;
      }
    }
  }
}
</style>