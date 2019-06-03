<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-body" id="modalDescription">
        <div class="left-panel">
          <div class="panel-title">
            <span>虚拟配置</span>
          </div>
          <div class="panel-body">
            <div class="dropdown">
              <v-dropdown light text="批量操作" width="90px"/>
            </div>
            <div class="list">
              <div class="list-head">
                <div class="title">
                  <img src="@/assets/images/ic_note_header.png" alt="note">
                  <span>默认 1</span>
                </div>
                <div class="dropdown">
                  <v-dropdown text="操作" width="75px" :nodes="nodes"/>
                </div>
              </div>
              <div class="list-content">
                <div class="list-content-item" v-for="index in 3" :key="index">
                  <div class="title">
                    <img src="@/assets/images/ic_note.png" alt="note">
                    <span>conf {{index}}</span>
                  </div>
                  <div class="dropdown">
                    <v-dropdown text="操作" width="75px" :nodes="nodes"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-panel">
          <div class="panel-head">
            <button @click="close">&times;</button>
          </div>
          <div class="panel-body">
            <div class="list">
              <div class="list-header">
                <span>默认 1</span>
                <input type="text" placeholder="数值">
              </div>
              <div class="list-content">
                <div class="list-content-item" v-for="index in 3" :key="index">
                  <span>conf {{index}}</span>
                  <input type="text" placeholder="数值">
                </div>
              </div>
            </div>
          </div>
          <div class="panel-foot">
            <v-button light class="btn-cancel" :onClick="close" aria-label="Close modal">取消</v-button>
            <v-button primary class="btn-confirm">保存</v-button>
          </div>
        </div>
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
          label: "修改",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        },
        {
          label: "复制地址",
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
    width: 892px;
    height: 454px;
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    background-color: #ffffff;
    padding: 0;

    .modal-body {
      display: flex;
      height: 100%;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;

      .left-panel {
        width: 224px;
        background-color: #f2f5fa;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        padding: 26px 23px 0px 26px;

        .panel-title {
          span {
            color: #0e1726;
            font-family: "Microsoft Ya Hei";
            font-size: 16px;
            font-weight: 700;
          }
        }
        .panel-body {
          margin-top: 27px;

          .dropdown {
            text-align: right;
          }
          .list {
            margin-top: 29px;

            .list-head,
            .list-content-item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 34px;

              .title {
                display: flex;
                align-items: center;

                img {
                  width: 15px;
                  height: 17px;
                }
                span {
                  font-family: "Microsoft Ya Hei";
                  font-size: 12px;
                  font-weight: 400;
                  margin-left: 14px;
                }
              }
            }
          }
        }
      }
      .right-panel {
        padding: 42px 61px 56px 54px;
        flex: auto;
        position: relative;

        .panel-head {
          position: absolute;
          right: 16px;
          top: 11px;

          button {
            width: 20px;
            height: 20px;
            font-size: 30px;
            line-height: 17px;
            color: #8c8c8c;
            border: none;
            padding: 0px;
            cursor: pointer;
          }
        }
        .panel-body {
          .list {
            .list-header,
            .list-content-item {
              span {
                font-family: "Microsoft Ya Hei";
                font-size: 12px;
                font-weight: 400;
                margin-right: 42px;
              }
              input {
                width: 355px;
                height: 32px;
                border-radius: 3px;
                border: 1px solid #eef0f5;
                background-color: #ffffff;
                padding-left: 12px;
                margin-bottom: 18px;
              }
            }
          }
        }
        .panel-foot {
          margin-top: 145px;
          text-align: right;

          .btn-confirm {
            width: 88px;
            height: 30px;
          }
          .btn-cancel {
            width: 88px;
            height: 30px;
            margin-left: 26px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>