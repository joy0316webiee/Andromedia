<template>
  <div class="auto-container">
    <div class="auto-header">
      <v-switch :items="switchItems" default="2"/>
      <input placeholder="搜索">
      <v-button primary>+</v-button>
    </div>
    <div class="auto-content">
      <slot></slot>
    </div>
    <auto-modal-reply v-show="openedModal === 1" @close="closeModal"/>
    <auto-modal-setting v-show="openedModal === 2" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedModal: -1,
      switchItems: [
        {
          label: "自动回复",
          action: this.onAutoReply
        },
        {
          label: "回答问题知识库",
          action: this.onAutoSetting
        },
        {
          label: "机器人",
          action: undefined
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    onAutoReply() {
      this.openedModal = 1;
    },
    onAutoSetting() {
      this.openedModal = 2;
    }
  }
};
</script>

<style lang="scss" scoped>
.auto-container {
  width: 100%;
  background-color: #f1f5f8;

  .auto-header {
    height: 75px;
    padding-left: 23px;
    padding-top: 35px;
    background-color: #f1f5f8;

    input {
      background: white url("~@/assets/images/ic_search_grey.png") no-repeat 5%
        50%;
      width: 184px;
      height: 29px;
      padding: 7px 0px 6px 43px;
      border-radius: 3px;
      border: 1px solid #eef0f6;
      font-family: "Microsoft Ya Hei Light";
      font-size: 12px;
      font-weight: 400;
      margin-left: 16px;
    }
    button {
      width: 42px;
      height: 28px;
      margin-left: 13px;
      font-size: 20px;
    }
  }
}
</style>