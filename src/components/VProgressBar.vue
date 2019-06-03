<template>
  <div class="progress-bar">
    <div class="back-bar"></div>
    <div class="over-bar" :style="`width: ${value}%`"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 250px;
  display: inline-block;
  height: 14px;
  position: relative;

  .back-bar {
    width: 100%;
    height: 100%;
    background-color: #e6ebee;
    border-radius: 10px;
  }
  .over-bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;

    border-radius: 10px;
    background-image: linear-gradient(90deg, #2b8dde, #3cb7f1);
  }
}
</style>