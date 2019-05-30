<template>
  <div class="device-run-script">
    <div class="device-scripts">
      <div class="device-scripts-title">
        <div class="label">
          <span>自定义脚本 (3)</span>
        </div>
        <div class="tools">
          <button class="add">
            <img src="@/assets/images/ic_round_add.png" alt="add">
          </button>
          <button class="setting">
            <img src="@/assets/images/ic_setting1.png" alt="setting">
          </button>
        </div>
      </div>
      <div class="device-scripts-content">
        <device-scripts/>
      </div>
    </div>
    <div class="device-content">
      <div class="device-controls">
        <label>运行设备：200台</label>
        <v-button light>删除设备</v-button>
        <v-button light>全部暂停</v-button>
        <v-button primary>加入设备</v-button>
      </div>
      <div class="device-gallery">
        <div class="device-gallery-item" v-for="index in 36" :key="index">
          <img src="@/assets/images/mobile.png" alt="mobile">
          <span>设备ID</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.device-run-script {
  display: flex;

  .device-scripts {
    min-width: 397px;
    background-color: #f1f5f8;

    .device-scripts-title {
      height: 47px;
      background-color: #e9eff4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 27px 0 33px;

      .label {
        span {
          color: #43475f;
          font-family: "Microsoft Ya Hei";
          font-size: 16px;
          font-weight: 700;
        }
      }
      .tools {
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }
    }
  }

  .device-controls {
    padding: 22px 0px 22px 37px;
    border-bottom: 1px solid #eeeeee;

    label {
      color: #767c91;
      font-family: "Microsoft Ya Hei";
      font-size: 12px;
      font-weight: 400;
      margin-right: 35px;
    }
    button {
      margin-right: 15px;
    }
  }
  .device-gallery {
    display: flex;
    flex-wrap: wrap;

    .device-gallery-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 20px;
      margin-bottom: 23px;

      img {
        width: 129px;
        height: 228px;
      }
      span {
        margin-top: 6px;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
}
</style>