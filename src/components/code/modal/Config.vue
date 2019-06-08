<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>配置预览</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="name">
          <v-input-text label="名称:" placeholder="输入名称" width="254px"/>
        </div>
        <div class="name">
          <v-input-text label="名称:" placeholder="输入名称" width="254px"/>
        </div>
        <div class="name">
          <v-input-text label="名称:" placeholder="输入名称" width="254px"/>
        </div>
      </div>
      <div class="modal-footer">
        <v-button primary class="btn-confirm">确定</v-button>
        <v-button light class="btn-cancel" :onClick="close" aria-label="Close modal">取消</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  .modal {
    width: 388px;
    height: 440px;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 14px 0px 32px;

    .modal-header {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 16px;
        font-weight: bold;
        color: #0e1726;
        line-height: 20px;
      }
      button {
        width: 20px;
        height: 20px;
        font-size: 17px;
        line-height: 17px;
        color: #070707;
        border: none;
        padding: 0px;
        cursor: pointer;
      }
    }
    .modal-body {
      margin-top: 30px;

      .name {
        margin-bottom: 26px;
      }
      .config {
        display: flex;
        align-items: flex-end;

        label {
          font-size: 12px;
          font-weight: 300;
          color: #61677c;
          line-height: 20px;
          margin-left: 16px;
        }
      }
    }
    .modal-footer {
      margin-top: 148px;
      text-align: center;

      .btn-confirm {
        width: 88px;
        height: 30px;
      }
      .btn-cancel {
        width: 88px;
        height: 30px;
        margin-left: 26px;
      }
    }
  }
}
</style>