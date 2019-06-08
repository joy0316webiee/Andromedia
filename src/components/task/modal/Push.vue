<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>推送任务</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="modal-body-top">
          <div class="form-control">
            <label>商品*</label>
            <v-dropdown
              class="control product"
              light
              textLeft
              width="234px"
              text="自定义"
              :nodes="productNodes"
            />
          </div>
          <div class="form-control">
            <label>选择对象*</label>
            <div class="control">
              <input class="input1" placeholder="选择对象">
            </div>
          </div>
        </div>
        <div class="modal-body-bottom">
          <div class="form-control">
            <label>定时发送*</label>
            <div class="control input2">
              <span class="title">定时发送定时</span>
              <input label="定时发送定时" placeholder="选择对象*">
              <span class="count">时</span>
            </div>
          </div>
          <div class="form-control">
            <label>定时发送*</label>
            <div class="control node2">
              <span>定时发送定时</span>
              <v-dropdown light textLeft class="control node2-dropdown" text="定义" :nodes="nodes2"/>
              <input class="time" placeholder="定时时间">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <v-button primary class="btn-confirm">定时发送</v-button>
        <v-button light class="btn-timed">定时发送</v-button>
        <v-button light class="btn-cancel" :onClick="close" aria-label="Close modal">取消</v-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productNodes: [
        {
          label: "商品1",
          action: undefined
        },
        {
          label: "商品2",
          action: undefined
        },
        {
          label: "商品3",
          action: undefined
        },
        {
          label: "+ 增加商品",
          action: undefined
        }
      ],
      nodes2: [
        {
          label: "商品1",
          action: undefined
        },
        {
          label: "商品2",
          action: undefined
        },
        {
          label: "商品3",
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
    width: 711px;
    height: 553px;
    background-color: #ffffff;
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
      padding: 30px 90px 40px 55px;

      > div {
        &.modal-body-top {
          border-bottom: 1px solid #eef0f5;
        }
        &.modal-body-bottom {
          padding-top: 30px;
          margin-top: 75px;
          border-top: 1px solid #eef0f5;
        }

        .form-control {
          margin-bottom: 30px;
          display: flex;
          align-items: center;

          label {
            font-family: "Microsoft Ya Hei";
            font-size: 14px;
            font-weight: 500;
            width: 80px;
            display: inline-block;
            text-align: right;
          }
          .control {
            margin-left: 20px;
            color: #6c6c6c;
            font-family: "Microsoft Ya Hei Light";
            font-size: 12px;
            font-weight: 400;

            input {
              width: 122px;
              height: 27px;
              border: 1px solid #e9e9e9;
              border-radius: 6px;
              background-color: #ffffff;
              color: #6c6c6c;
              font-family: "Microsoft Ya Hei";
              font-size: 12px;
              font-weight: 400;
              padding-left: 10px;
            }
            &.product {
              width: 200px;
            }
            &.input1 {
              width: 122px;
            }
            &.input2 {
              span {
                &.title {
                  margin-right: 10px;
                }
                &.count {
                  margin-left: 10px;
                }
              }
            }
            &.node2 {
              input {
                margin-left: 15px;
                background: white url("~@/assets/images/ic_search_grey.png")
                  no-repeat 95% 50%;
              }
            }
          }
        }
      }
    }
  }
  .modal-footer {
    margin-top: 32px;
    padding-left: 55px;
    text-align: left;

    button {
      width: 88px;
      height: 30px;
      &.btn-confirm {
        margin-right: 26px;
      }
      &.btn-cancel {
        margin-left: 26px;
      }
    }
  }
}
</style>