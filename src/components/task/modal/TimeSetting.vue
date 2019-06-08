<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>时间设置</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="form-control option">
          <label class="title">时间设置时间设置确:</label>
          <div class="control">
            <span class="bracket">(</span>
            <label>
              <input type="radio" name="radio1" checked>定确
            </label>
            <label>
              <input type="radio" name="radio1">确定
            </label>
            <span class="bracket">)</span>
          </div>
        </div>
        <div class="form-control select">
          <div class="control year">
            <select>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019" selected="selected">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
            <span>年</span>
          </div>
          <div class="control day">
            <select>
              <option
                v-for="month in 12"
                :key="month"
                :value="month"
                :selected="month === 5"
              >{{month}}</option>
            </select>
            <span>月</span>
          </div>
          <div class="control day">
            <select>
              <option v-for="day in 31" :key="day" :value="day" :selected="day === 4">{{day}}</option>
            </select>
            <span>日</span>
          </div>
          <div class="control hour">
            <select>
              <option v-for="hour in 12" :key="hour" :value="hour" :selected="hour === 17">{{hour}}</option>
            </select>
            <span>時</span>
          </div>
          <div class="control minute">
            <select>
              <option
                v-for="minute in 60"
                :key="minute"
                :value="minute"
                :selected="minute === 6"
              >{{minute - 1}}</option>
            </select>
            <span>分</span>
          </div>
        </div>
        <div class="desc">
          <p>
            本任务将在
            <strong>今天下午 5：05</strong> 运行
          </p>
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
    width: 463px;
    height: 260px;
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
      color: #000000;
      font-family: "Microsoft Ya Hei";
      font-weight: 400;
      font-size: 12px;
      margin-top: 30px;

      .form-control {
        &.option {
          display: flex;

          .control {
            margin-left: 10px;

            .bracket {
              padding: 0px 5px;
            }
            label {
              input {
                margin-right: 5px;
              }
            }
          }
        }
        &.select {
          display: flex;
          margin-top: 6px;

          .control {
            select {
              width: 70px;
              height: 25px;
            }
          }
        }
      }
      .desc {
        p {
          strong {
            color: #0f7bf9;
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