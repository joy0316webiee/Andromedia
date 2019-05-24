<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    default: Boolean,
    primary: Boolean,
    info: Boolean,
    light: Boolean
  },
  computed: {
    classes: function classes() {
      return [
        "v-button",
        { "v-button-primary": this.primary },
        { "v-button-info": this.info },
        { "v-button-light": this.light }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.v-button {
  width: 104px;
  height: 30px;
  font-size: 12px;
  border-radius: 4px;
  font-family: MicrosoftYaHeiLight;
  font-weight: 300;
  background-color: #f1f5f8;
  border-color: #f1f5f8;
  cursor: pointer;
}
.v-button-primary {
  background-color: #0f7bf9;
  border-color: #0f7bf9;
  color: #ffffff;
}
.v-button-info {
  background-color: #0395f9;
  border-color: #0395f9;
  color: #ffffff;
}
.v-button-light {
  background-color: white;
  color: #6c6c6c;
}
</style>