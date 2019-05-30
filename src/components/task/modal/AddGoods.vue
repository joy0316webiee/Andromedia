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
          <div class="image-group">
            <div class="large-img">
              <span>+ 商品图</span>
            </div>
            <div class="small-group">
              <div class="small-img">
                <span>图</span>
              </div>
              <div class="small-img">
                <span>图</span>
              </div>
              <div class="small-img">
                <span>图</span>
              </div>
            </div>
          </div>
          <div class="control-group">
            <v-input-text class="text" label="商品名字" placeholder="输入名字"/>
            <v-input-text class="text" label="商品价格" placeholder="输入价格"/>
            <v-input-text class="text" label="打折后" placeholder="输入价格"/>
            <div class="product-connect">
              <div class="title">
                <label>商品连接</label>
                <img src="@/assets/images/QRcode.png" alt="QRcode">
              </div>
              <div class="path">
                <span>https://netcn.console.aliyun.com/core/host/list3?spm=</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body-bottom">
          <div class="title">商品详情</div>
          <div class="html-editor">
            <vue-editor v-model="content"></vue-editor>
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
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
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
      ],
      content: ""
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
    width: 664px;
    height: 690px;
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

      .modal-body-top {
        display: flex;

        .image-group {
          > div {
            &.large-img {
              width: 228px;
              height: 133px;
              border-radius: 3px;
              background-color: #f1f5f8;
              position: relative;
              margin-bottom: 7px;
            }
            &.small-group {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .small-img {
                width: 69px;
                height: 45px;
                border-radius: 3px;
                background-color: #f1f5f8;
                position: relative;
              }
            }
            span {
              color: #61677c;
              font-family: "Microsoft Ya Hei Light";
              font-size: 12px;
              font-weight: 400;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .control-group {
          margin-left: 47px;

          .text {
            margin-bottom: 26px;
          }
          .product-connect {
            .title {
              display: flex;
              align-items: center;

              label {
                color: #606672;
                font-size: 14px;
                font-weight: 700;
              }
              img {
                margin-left: 10px;
              }
            }
            .path {
              span {
                color: #61677c;
                font-size: 12px;
                font-weight: 400;
              }
            }
          }
        }
      }
      .modal-body-bottom {
        margin-top: 2px;
        .title {
          color: #606672;
          font-size: 14px;
          font-weight: 700;
        }
        .html-editor {
          width: 577px;
          border-radius: 3px;
          margin-top: 11px;
        }
      }
    }
    .modal-footer {
      margin-top: 32px;
      text-align: center;

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
}
</style>