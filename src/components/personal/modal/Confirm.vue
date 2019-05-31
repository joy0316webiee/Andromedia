<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-body" id="modalDescription">
        <span>确定要删除吗</span>
      </div>
      <div class="modal-footer">
        <v-button light class="btn-cancel" :onClick="close" aria-label="Close modal">取消</v-button>
        <v-button primary class="btn-confirm">确定</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: [
        {
          label: "学历",
          action: undefined
        },
        {
          label: "职业",
          action: undefined
        },
        {
          label: "地区",
          action: undefined
        },
        {
          label: "年龄",
          action: undefined
        }
      ]
    };
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
    width: 236px;
    height: 94px;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;

    .modal-body {
      height: 60px;
      text-align: center;
      margin-top: 25px;

      span {
        color: #fe6869;
        font-family: "Ping Fang - SC";
        font-size: 16px;
        font-weight: 700;
      }
    }
    .modal-footer {
      text-align: center;
      margin-top: 0px;
      border-top: 1px solid #e9eff4;
      display: flex;

      .btn-confirm {
        border-radius: 0;
        width: 130px;
        height: 30px;
        border: none;
      }
      .btn-cancel {
        border-radius: 0;
        width: 107px;
        height: 30px;
      }
    }
  }
}
</style>