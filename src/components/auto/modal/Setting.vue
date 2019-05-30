<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>配置设备</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="option-group">
          <div class="form-control">
            <div class="title">自动回复设置:</div>
            <div class="controls option">
              <label>
                <input type="radio" name="radio1">自动
              </label>
              <label>
                <input type="radio" name="radio1" checked>动自
              </label>
            </div>
            <div class="tip">
              <v-tool-tip label="没有在线客服时，是否自动回复消息"/>
            </div>
          </div>
          <div class="form-control">
            <div class="title">自动回复设置:</div>
            <div class="controls option">
              <label>
                <input type="radio" name="radio2">自动回复设置
              </label>
              <label>
                <input type="radio" name="radio2" checked>自动回复设置
              </label>
            </div>
          </div>
        </div>
        <div class="control-group">
          <div class="form-control control1">
            <div class="title">回复回复对象:</div>
            <div class="controls ctrl-one">
              <input placeholder="回复回复对象, 复, 回复回复对象, 复对象">
            </div>
            <div class="tip">
              <v-tool-tip label="30分钟内，只回复一次"/>
            </div>
          </div>
          <div class="form-control">
            <div class="title">30分钟内:</div>
            <div class="controls ctrl-two">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="tip">
              <v-tool-tip label="30分钟内，只回复一次"/>
            </div>
          </div>
          <div class="tab-control">
            <v-tabs secondary :items="tabs"/>
          </div>
          <div class="form-control dropdown" style="margin-top: 17px;">
            <div class="title">回复内容内:</div>
            <div class="controls ctrl-three">
              <v-dropdown text="全部用户" :nodes="itemsDropdown"/>
              <label class="label">选择时间段：20-21</label>
            </div>
          </div>
          <div class="form-control textarea">
            <div class="title">
              <label>内容 1</label>
              <div class="btn-ctrl">
                <v-button light>上传</v-button>
                <span>图片/语音/视频</span>
              </div>
            </div>
            <div class="controls ctrl-four">
              <textarea placeholder="输入文字"/>
              <div class="btn-groups">
                <v-button v-for="n in 8" :key="n">图</v-button>
                <v-button>
                  <img src="@/assets/images/ic_sound_grey.png" alt="sound">
                </v-button>
                <v-button>
                  <img src="@/assets/images/ic_play_grey.png" alt="play">
                </v-button>
              </div>
            </div>
          </div>
          <div class="form-control search">
            <div class="title">回复对象 :</div>
            <div class="controls ctrl-five">
              <input placeholder="自动回复设置">
              <v-button info>选择对象</v-button>
            </div>
          </div>
          <div class="form-control textarea">
            <div class="title">
              <label>内容 1</label>
              <div class="btn-ctrl">
                <v-button light>上传</v-button>
                <span>图片/语音/视频</span>
              </div>
            </div>
            <div class="controls ctrl-four">
              <textarea placeholder="输入文字"/>
            </div>
          </div>
          <div class="form-control number">
            <div class="title">延迟时间</div>
            <div class="controls ctrl-six">
              <input placeholder="延迟时,间延迟时间">
              <span>间</span>
            </div>
          </div>
        </div>
        <div class="add-content">
          <v-button light>+ 加内容</v-button>
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
      tabs: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      itemsDropdown: [
        {
          label: "回复内容内",
          action: undefined
        },
        {
          label: "回复内容内",
          action: undefined
        },
        {
          label: "回复内容内",
          action: undefined
        },
        {
          label: "回复内容内",
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
    width: 605px;
    height: 860px;
    background: white;
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;

    .modal-header {
      display: flex;
      justify-content: space-between;
      padding: 16px 28px 16px 31px;
      border: 1px solid #eef0f5;

      span {
        color: #2d3139;
        font-family: "Microsoft Ya Hei";
        font-size: 16px;
        font-weight: 700;
      }
      button {
        width: 20px;
        height: 20px;
        line-height: 17px;
        border: none;
        padding: 0px;
        font-size: 27px;
        color: #8c8c8c;
        cursor: pointer;
      }
    }
    .modal-body {
      padding-top: 12px;
      color: #010101;
      font-family: "Microsoft Ya Hei";
      font-size: 13px;
      font-weight: 400;

      > div {
        .form-control {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          padding-left: 30px;

          &.five {
            align-items: start;
          }
          .title {
            min-width: 90px;
            text-align: right;
          }
          .controls {
            margin-left: 20px;
            display: flex;
            align-items: center;

            &.option {
              label {
                margin-right: 10px;
              }
            }
            &.ctrl-one {
              input {
                width: 275px;
                height: 25px;
                font-family: "Microsoft Ya Hei";
                font-size: 13px;
              }
            }
            &.ctrl-two {
              select {
                width: 116px;
                height: 25px;
              }
            }
            &.ctrl-three {
              label {
                color: #767c91;
                font-family: "Microsoft Ya Hei Light";
                font-size: 12px;
                font-weight: 400;
                margin-left: 10px;
                margin-top: 16px;
              }
            }
            &.ctrl-four {
              align-items: start;

              textarea {
                min-width: 298px;
                height: 100px;
                border-radius: 3px;
                border: 1px solid #d9d9d9;
                background-color: #ffffff;
                font-family: "Microsoft Ya Hei";
                font-size: 12px;
                font-weight: 400;
                padding: 7px 11px;
                resize: none;
              }
              .btn-groups {
                margin-left: 10px;

                button {
                  width: 30px;
                  height: 30px;
                  color: #6c6c6c;
                  font-family: "Microsoft Ya Hei Light";
                  font-size: 12px;
                  font-weight: 400;
                  margin-right: 3px;
                  margin-bottom: 3px;
                  padding: 6px;

                  img {
                    width: 17px;
                    height: 13px;
                  }
                }
              }
            }
            &.ctrl-five {
              input {
                width: 330px;
                height: 30px;
                color: #767c91;
                font-family: "Microsoft Ya Hei";
                font-size: 12px;
                font-weight: 400;
                background: #eeeeee;
                border: none;
                padding-left: 10px;
                margin-right: 5px;
              }
              button {
                width: 63px;
                height: 28px;
                border-radius: 3px;
                padding: 0px;
              }
            }
            &.ctrl-six {
              input {
                width: 170px;
                height: 30px;
                border-radius: 3px;
                border: 1px solid #d9d9d9;
                background-color: #ffffff;
                font-family: "Microsoft Ya Hei";
                font-size: 12px;
                font-weight: 400;
                padding-left: 7px;
              }
              span {
                color: #6c6c6c;
                margin-left: 5px;
              }
            }
          }
          .tip {
            margin-left: 10px;
          }

          &.dropdown {
            margin-top: 17px;
          }
          &.textarea {
            align-items: start;
            margin-top: 40px;

            .title {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              .btn-ctrl {
                margin-top: 21px;
                display: flex;
                flex-direction: column;

                button {
                  width: 71px;
                  height: 29px;
                }
                span {
                  color: #6c6c6c;
                  font-family: "Microsoft Ya Hei Light";
                  font-size: 10px;
                  font-weight: 400;
                }
              }
            }
          }
          &.search,
          &.number {
            .title {
              text-align: left;
            }

            margin-top: 22px;
          }
        }
        .tab-control {
          margin-top: 35px;
          border-bottom: 1px solid #d9d9d9;
          text-align: center;
        }
        &.add-content {
          margin-top: 40px;
          margin-left: 30px;
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