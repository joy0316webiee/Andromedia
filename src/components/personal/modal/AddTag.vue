<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>增加标签</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="attribute">
          <label>属性：</label>
          <v-dropdown textLeft text="输入添加新属性" width="253px" :nodes="nodes"/>
        </div>
        <div class="label">
          <label>标签：</label>
          <input placeholder="输入添加新标签">
        </div>
        <div class="warning">
          <span>
            <i>!</i>
            这标签已经在你的学历属性里
          </span>
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
    width: 387px;
    height: 250px;
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
        font-family: MicrosoftYaHei-Bold;
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

      .attribute {
        label {
          color: #606672;
          font-family: "Microsoft Ya Hei";
          font-size: 14px;
          font-weight: 700;
          margin-right: 12px;
        }
      }
      .label {
        margin-top: 26px;

        label {
          color: #606672;
          font-family: "Microsoft Ya Hei";
          font-size: 14px;
          font-weight: 700;
          margin-right: 12px;
        }
        input {
          width: 253px;
          height: 29px;
          border-radius: 3px;
          background-color: #f1f5f8;
          color: #61677c;
          font-family: "Microsoft Ya Hei Light";
          font-size: 12px;
          font-weight: 400;
          border: none;
          padding-left: 15px;
        }
      }
      .warning {
        margin-top: 13px;
        text-align: center;

        span {
          color: #0f7bf9;
          font-family: "Microsoft Ya Hei Light";
          font-size: 12px;
          font-weight: 400;

          i {
            font-style: unset;
            font-size: 11px;
            line-height: 11px;
            width: 15px;
            height: 15px;
            color: #0f7bf9;
            border: 1px solid #0f7bf9;
            border-radius: 50%;
            display: inline-block;
            margin: 0;
            padding: 1px 5px;
            margin-right: 9px;
          }
        }
      }
    }
    .modal-footer {
      margin-top: 17px;
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