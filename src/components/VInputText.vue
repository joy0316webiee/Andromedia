<template>
  <div class="input-text">
    <label>{{label}}</label>
    <input :placeholder="placeholder" :style="'width: ' + width ">
  </div>
</template>

<script>
export default {
  props: ["label", "placeholder", "width"]
};
</script>

<style lang="scss" scoped>
.input-text {
  label {
    font-size: 14px;
    font-weight: bold;
    color: #606672;
    margin-right: 12px;
  }
  input {
    width: 254px;
    height: 30px;
    background: #f1f5f8;
    border-radius: 4px;
    border: none;
    padding-left: 10px;
    font-size: 12px;
  }
}
</style>