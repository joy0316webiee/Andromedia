<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>添加客户</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="application">
          <label>选择应用</label>
          <v-dropdown textLeft text="选择应用" width="228px" :nodes="nodes"/>
        </div>
        <div class="account">
          <label>输入账号</label>
          <input placeholder="输入添加新标签">
        </div>
        <div class="user">
          <div class="title">
            <span class="count">输账1入账</span>
            <span class="warning">
              <i>!</i>
              这账号已经是你的好友
            </span>
          </div>
          <div class="details">
            <div class="avatar">
              <img src="@/assets/images/avatars/avatar003.png" alt="avatar">
            </div>
            <div class="info">
              <span>
                lola
                <strong>(29203738393)</strong>
              </span>
              <label>
                <img src="@/assets/images/ic_user_red.png" alt="user">
                已经是你
              </label>
              <v-button info>+ 已经</v-button>
            </div>
          </div>
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
          label: "选择应用1",
          action: undefined
        },
        {
          label: "选择应用2",
          action: undefined
        },
        {
          label: "选择应用3",
          action: undefined
        },
        {
          label: "选择应用4",
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
    height: 379px;
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

      .application {
        label {
          color: #606672;
          font-family: "Microsoft Ya Hei";
          font-size: 14px;
          font-weight: 700;
          margin-right: 15px;
        }
      }
      .account {
        margin-top: 26px;

        label {
          color: #606672;
          font-family: "Microsoft Ya Hei";
          font-size: 14px;
          font-weight: 700;
          margin-right: 13px;
        }
        input {
          width: 231px;
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
      .user {
        margin-top: 16px;

        .title {
          .count {
            color: #a1a1a1;
            font-family: "Microsoft Ya Hei Light";
            font-size: 11px;
            font-weight: 400;
            margin-right: 50px;
          }
          .warning {
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
        .details {
          margin-top: 10px;
          display: flex;
          align-items: center;

          .avatar {
            img {
              width: 42px;
              height: 42px;
            }
          }
          .info {
            margin-left: 10px;
            display: flex;
            flex-direction: column;

            span {
              color: #909090;
              font-size: 11px;

              strong {
                color: #fe8383;
              }
            }
            label {
              color: #a1a1a1;
              font-family: "Microsoft Ya Hei Light";
              font-size: 10px;
              font-weight: 400;

              img {
                width: 14px;
                height: 14px;
              }
            }
            button {
              width: 35px;
              height: 15px;
              font-size: 6px;
            }
          }
        }
      }
    }
    .modal-footer {
      margin-top: 32px;
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