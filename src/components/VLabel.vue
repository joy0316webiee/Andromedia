<template>
  <div class="label">
    <span>{{text}}</span>
    <v-button-close/>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
.label {
  width: 100px;
  height: 24px;
  padding-left: 6px;
  padding-right: 8px;
  margin-right: 14px;
  background: #f4f9ff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 400;
    color: #0f7bf9;
    line-height: 20px;
  }
}
</style>