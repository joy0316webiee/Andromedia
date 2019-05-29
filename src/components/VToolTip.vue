<template>
  <div class="tool-tip">
    <div class="img-help">
      <img src="@/assets/images/ic_help_grey.png" alt="help">
    </div>
    <div class="label">
      <span>{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label"]
};
</script>

<style lang="scss" scoped>
.tool-tip {
  position: relative;

  .img-help {
    display: flex;
    cursor: help;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover + .label {
      opacity: 1;
    }
  }
  .label {
    position: absolute;
    left: calc(100% + 10px);
    top: -50%;
    width: max-content;
    height: 29px;
    background-color: #50617d;
    opacity: 0.97;
    color: #ffffff;
    font-family: "Microsoft Ya Hei Light";
    font-size: 12px;
    font-weight: 400;
    padding: 7px 9px 6px 15px;
    margin-left: 5px;
    opacity: 0;
    transition: opacity 0.6s;

    &:after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 100%; /* To the left of the tooltip */
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent #50617d transparent transparent;
    }
  }
}
</style>