<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>微信点赞脚本执行历史（3次）</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="table">
          <div class="table-header">
            <div class="column">序号</div>
            <div class="column">开始时间</div>
            <div class="column">结束时间</div>
            <div class="column">正常</div>
            <div class="column">失败</div>
            <div class="column">设备</div>
          </div>
          <div class="table-body">
            <div class="row" v-for="index in 3" :key="index">
              <div class="column">{{index}}</div>
              <div class="column">2019.09.09</div>
              <div class="column">2019.09.09</div>
              <div class="column">200</div>
              <div class="column">0</div>
              <div class="column">
                共200台设备
                <a>查看</a>
              </div>
            </div>
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
    width: 886px;
    height: 798px;
    padding: 0;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;

    .modal-header {
      padding: 36px;
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
      .table {
        .table-header,
        .row {
          height: 40px;
          display: grid;
          align-items: center;
          grid-template-columns: 112px 87px 103px 122px 109px auto;

          .column {
            font-size: 12px;
            font-family: MicrosoftYaHei;
            font-weight: bold;
            justify-self: center;
            color: #767c91;

            a {
              margin-left: 7px;
              text-decoration: none;
              color: #0f7bf9;
              cursor: pointer;
            }
          }
        }

        .table-header {
          background-color: #e9eff4;
        }
      }
    }
  }
}
</style>