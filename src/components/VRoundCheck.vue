<template>
  <div class="round">
    <input type="checkbox" :checked="checked">
    <label @click="toggle"></label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    toggle() {
      this.checked = !this.checked;
    }
  }
};
</script>

<style lang="scss" scoped>
.round {
  display: inline-block;
  position: relative;

  label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;

    &:after {
      content: "";
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      width: 8px;
      height: 4px;
      position: absolute;
      top: 4px;
      left: 3px;
      opacity: 0;
      transform: rotate(-45deg);
    }
  }
  input[type="checkbox"] {
    visibility: hidden;

    &:checked + label {
      background-color: #0f7bf9;
      border-color: #0f7bf9;

      &:after {
        opacity: 1;
      }
    }
  }
}
</style>