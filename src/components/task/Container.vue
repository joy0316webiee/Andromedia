<template>
  <div class="task-container">
    <div class="task-header">
      <v-switch :items="switchItems" default="1"/>
    </div>
    <div class="task-content">
      <slot></slot>
    </div>
    <task-modal-push v-show="openedModal === 1" @close="closeModal"/>
    <task-modal-time-setting v-show="openedModal === 2" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedModal: -1,
      switchItems: [
        {
          label: "数据统计",
          action: undefined
        },
        {
          label: "推送任务",
          action: this.onPushModal
        },
        {
          label: "商品",
          action: this.onTimeSetting
        },
        {
          label: "订单",
          action: undefined
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    onPushModal() {
      this.openedModal = 1;
    },
    onTimeSetting() {
      this.openedModal = 2;
    },
    onAddGoods() {
      this.openedModal = 3;
    }
  }
};
</script>

<style lang="scss" scoped>
.task-container {
  width: 100%;

  .task-header {
    background: #f1f5f8;
    height: 60px;
    padding-top: 25px;
    padding-left: 4px;
  }
}
</style>