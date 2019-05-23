<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex: auto;
}
</style>