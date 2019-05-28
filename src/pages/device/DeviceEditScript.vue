<template>
  <div class="device-edit-script">
    <div class="device-scripts">
      <div class="device-scripts-title">
        <div class="label">
          <span>自定义脚本 (3)</span>
        </div>
        <div class="tools">
          <button class="add" @click="onCreateScript">
            <img src="@/assets/images/ic_round_add.png" alt="add">
          </button>
          <button class="setting" @click="onConfigPreview">
            <img src="@/assets/images/ic_setting1.png" alt="setting">
          </button>
        </div>
      </div>
      <div class="device-scripts-content">
        <device-scripts/>
      </div>
    </div>
    <div class="device-command">
      <div class="device-command-window">
        <label class="title">输入命令</label>
      </div>
      <div class="device-command-tools">
        <v-button light>导入脚本</v-button>
        <v-button light>删除</v-button>
        <v-button info>运行</v-button>
        <v-button info>保存</v-button>
      </div>
    </div>
    <div class="device-preview">
      <div class="device-preview-screen">
        <img src="@/assets/images/mobile.png" alt="mobile">
      </div>
      <div class="device-preview-tools">
        <button class="zoom-in">
          <img src="@/assets/images/ic_zoomin.png" alt="zoomin">
        </button>
        <label class="zoom-value">100%</label>
        <button class="zoom-out">
          <img src="@/assets/images/ic_zoomout.png" alt="zoomout">
        </button>
        <button class="three-d">
          <img src="@/assets/images/ic_3d.png" alt="3d">
        </button>
        <button class="close">
          <img src="@/assets/images/ic_round_close.png" alt="close">
        </button>
      </div>
    </div>
    <device-modal-create-script v-show="openedModal === 1" @close="closeModal"/>
    <device-modal-config-preview v-show="openedModal === 2" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  name: "DeviceEditScript",
  data() {
    return {
      openedModal: -1
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    onCreateScript() {
      this.openedModal = 1;
    },
    onConfigPreview() {
      this.openedModal = 2;
    }
  }
};
</script>

<style lang="scss" scoped>
.device-edit-script {
  display: flex;
  min-height: 1120px;

  .device-scripts {
    width: 397px;
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
  .device-command {
    width: 944px;

    .device-command-window {
      height: 908px;
      background-color: #171717;
      padding-top: 29px;
      padding-left: 43px;

      label {
        color: #767c91;
        font-family: "Microsoft Ya Hei Light";
        font-size: 12px;
        font-weight: 400;
      }
    }
    .device-command-tools {
      margin-top: 15px;
      margin-left: 15px;

      button {
        margin-right: 15px;
      }
    }
  }
  .device-preview {
    height: 908px;
    background-color: #f1f5f8;
    flex: auto;

    .device-preview-screen {
      text-align: center;

      img {
        margin-top: 98px;
        width: 377px;
        height: 667px;
      }
    }
    .device-preview-tools {
      margin-top: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;

        &.zoom-out {
          margin-right: 50px;
        }
        &.three-d {
          margin-right: 46px;
        }
      }
      label {
        padding: 0px 45px;
        color: #bac4d1;
        font-family: "Microsoft Ya Hei";
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
}
</style>