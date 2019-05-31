<template>
  <div class="pagination" :style="vstyle.wrapper">
    <div class="arr-left">
      <img src="@/assets/images/ic_left.png" alt="arr-left">
    </div>
    <div class="page-buttons">
      <button
        :style="vstyle.button"
        v-for="(item, index) in items"
        :key="index"
        :class="{active: index === 0}"
      >{{item}}</button>
    </div>
    <div class="arr-right">
      <img src="@/assets/images/ic_right.png" alt="arr-right">
    </div>
  </div>
</template>

<script>
export default {
  props: ["vstyle", "items"]
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;

    &.arr-left {
      margin-right: 20px;
    }
    &.arr-right {
      margin-left: 20px;
    }
    &.page-buttons {
      align-items: center;

      button {
        font-size: 11px;
        color: #81878d;
        width: 22px;
        height: 22px;
        margin-right: 4px;
        border: none;
        cursor: pointer;

        &.active {
          background: #55a8fe !important;
          border-radius: 3px;
          color: white;
        }
      }
    }
  }
}
</style>