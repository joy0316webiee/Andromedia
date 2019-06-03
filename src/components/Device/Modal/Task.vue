<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>新建任务编辑</span>
        <div class="button-group">
          <v-button primary>定时发送</v-button>
          <v-button light>定时发送</v-button>
          <v-button light>取消</v-button>
          <button class="close" @click="close">&times;</button>
        </div>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="control-group">
          <div class="form-control">
            <label>定时发送</label>
            <input class="wide" type="text" placeholder="定时发送定时发送">
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <textarea class="wide grey" placeholder/>
            <v-button primary style="margin-left: 5px;">发送</v-button>
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <select>
              <option>发送1</option>
              <option>发送2</option>
              <option>发送3</option>
              <option>发送4</option>
              <option>发送5</option>
            </select>
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <input class="grey" type="text">
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <input type="text">
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <input type="text">
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <select class="wide">
              <option>发送1</option>
              <option>发送2</option>
              <option>发送3</option>
              <option>发送4</option>
            </select>
          </div>
        </div>
        <div class="control-group">
          <div class="form-control">
            <label>定时发送</label>
            <select class="wide">
              <option>发送1</option>
              <option>发送2</option>
              <option>发送3</option>
              <option>发送4</option>
            </select>
          </div>
        </div>
        <div class="control-group">
          <div class="form-control">
            <label>定时发送*</label>
            <select>
              <option>是</option>
              <option>不</option>
            </select>
          </div>
          <div class="form-control">
            <label>定时时发送*</label>
            <select>
              <option>是</option>
              <option>不</option>
            </select>
          </div>
          <div class="form-control">
            <label>定时发送*</label>
            <select>
              <option>是</option>
              <option>不</option>
            </select>
          </div>
        </div>
        <label>定时发送 ></label>
        <div class="control-group">
          <div class="form-control">
            <label>VIP定时发送</label>
            <select class="wide">
              <option>定时发送</option>
              <option>定时发送</option>
            </select>
          </div>
        </div>
        <div class="control-group">
          <div class="form-control">
            <label>定时发送</label>
            <input type="text">
          </div>
          <div class="form-control">
            <label>时发送</label>
            <textarea class="wide wide-area"/>
          </div>
        </div>
        <div class="control-group">
          <div class="form-control">
            <label>定时发时发送</label>
            <select class="wide">
              <option>定时发送</option>
              <option>定时发送</option>
            </select>
          </div>
        </div>
        <div class="control-group">
          <div class="form-control">
            <label>定时发送</label>
            <select>
              <option>不(0)</option>
              <option>不(1)</option>
              <option>不(2)</option>
            </select>
          </div>
          <div class="form-control">
            <label>定时发送</label>
            <input type="text" placeholder="定时发送定时发">
          </div>
        </div>
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
    width: 902px;
    height: 880px;
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
      .button-group {
        button {
          margin-left: 10px;

          .close {
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
      }
    }
    .modal-body {
      margin-top: 20px;

      .control-group {
        margin-bottom: 10px;

        .form-control {
          margin-bottom: 5px;
          display: flex;
          align-items: center;

          label {
            font-size: 12px;
            color: #32346f;
            width: 67px;
            text-align: right;
            margin-right: 8px;
            display: inline-block;
          }
          input,
          textarea,
          select {
            width: 165px;
            height: 30px;
            padding-left: 15px;
            font-size: 12px;
            border: 1px solid #f1f1f3;
            border-radius: 3px;

            &.grey {
              background: #eeeeee;
            }
            &.wide {
              flex: auto;
            }
            &.wide-area {
              height: 75px;
            }
          }
        }
      }
      label {
        font-size: 12px;
        color: #a29f9c;
        margin-bottom: 10px;
        display: block;
      }
    }
  }
}
</style>