<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-body" id="modalDescription">
        <div class="modal-body-top">
          <div class="left-panel">
            <span>大学生</span>
            <v-label class="label" text="深圳"/>
            <span>20-30</span>
            <span>女</span>
          </div>
          <div class="right-panel">
            <span>大学生</span>
            <span>设计</span>
            <span>20-30</span>
            <span>女</span>
          </div>
        </div>
        <div class="modal-body-bottom">
          <span>+ &nbsp;&nbsp;增加标签</span>
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
    width: 236px;
    height: 242px;
    color: #767c91;
    font-family: "Microsoft Ya Hei";
    font-size: 12px;
    font-weight: 700;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;

    .modal-body {
      .modal-body-top {
        padding: 20px 14px 0px 32px;

        display: flex;
        align-items: center;

        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 135px;
        }
      }
      .modal-body-bottom {
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}
</style>