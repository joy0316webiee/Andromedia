<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>执行失败(3台)</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="panel">
          <div class="image">
            <span>截图</span>
          </div>
          <div class="details">
            <h3>A设备</h3>
            <p>时间2019.09.09</p>
          </div>
        </div>
        <div class="panel">
          <div class="image">
            <span>截图</span>
          </div>
          <div class="details">
            <h3>A设备</h3>
            <p>时间2019.09.09</p>
          </div>
        </div>
        <div class="panel">
          <div class="image">
            <span>截图</span>
          </div>
          <div class="details">
            <h3>A设备</h3>
            <p>时间2019.09.09</p>
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
    width: 562px;
    height: 368px;
    padding: 20px 80px 0px 32px;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;

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
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .panel {
        display: flex;
        align-items: center;
        margin-bottom: 28px;

        .image {
          width: 78px;
          height: 48px;
          background: #e9e9e9;
          position: relative;

          span {
            font-size: 12px;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: #767c91;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .details {
          margin-left: 12px;

          h3 {
            font-family: PingFang-SC-Regular;
            font-size: 16px;
            margin: 0;
          }
          p {
            margin: 0;
            font-family: PingFang-SC-Bold;
            font-size: 12px;
            color: #767c91;
          }
        }
      }
    }
  }
}
</style>