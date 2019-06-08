<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>增加关键字</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="row">
          <label>关键字：</label>
          <input type="text" placeholder="输入添加新属性" width="254px">
        </div>
        <div class="row">
          <label>对象：</label>
          <v-dropdown width="254px"></v-dropdown>
        </div>
        <div class="row">
          <label>范围：</label>
          <v-dropdown text="输入添加新标签 拷贝" width="254px"></v-dropdown>
        </div>
        <div class="row">
          <div>
            <img src="@/assets/images/ic_warning_blue.png" alt="icon waning">这标签已经在你的学历属性里
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <v-button primary class="btn-confirm">保存</v-button>
        <v-button light class="btn-cancel" :onClick="close" aria-label="Close modal">取消</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
  position: absolute;
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

      .row {
        margin-bottom: 20px;
        label {
          min-width: 64px;
          display: inline-block;
          text-align: right;
        }
        input {
          width: 254px;
          height: 30px;
          background-color: #f0f5f8;
          border: none;
          padding-left: 10px;
          padding-right: 10px;
          font-size: 12px;
        }
        div {
          color: #4991fa;
          font-size: 12px;
          text-align: center;
          img {
            margin-right: 20px;
          }
        }
      }
    }
    .modal-footer {
      margin-top: 32px;
      text-align: center;
      padding-bottom: 50px;

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