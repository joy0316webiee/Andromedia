<template>
  <button :class="classes">&times;</button>
</template>

<script>
export default {
  props: {
    success: Boolean,
    dark: Boolean
  },
  computed: {
    classes() {
      return [{ success: this.success }, { dark: this.dark }];
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 16px;
  height: 16px;
  background: #0f7bf9;
  border: 1px solid #0f7bf9;
  border-radius: 50%;
  color: white;
  padding: 0 0 1px;
  font-size: 13px;
  line-height: 15px;
  cursor: pointer;

  &:hover {
    color: #0f7bf9;
    background: white;
  }

  &.success {
    background: #64db76;
    border: 1px solid #64db76;

    &:hover {
      color: #64db76;
      background: white;
    }
  }
  &.dark {
    background: #dadada;
    border: 1px solid #dadada;

    &:hover {
      color: #dadada;
      background: white;
    }
  }
}
</style>