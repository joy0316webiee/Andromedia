<template>
  <button
    :class="classes"
    @click="() => {onClick && onClick()}"
    :style="width ? `width: ${width}` : ''"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: Function,
    default: Boolean,
    primary: Boolean,
    info: Boolean,
    light: Boolean,
    transparent: Boolean,
    width: String
  },
  computed: {
    classes() {
      return [
        "v-button",
        { "v-button-primary": this.primary },
        { "v-button-info": this.info },
        { "v-button-light": this.light },
        { "v-button-transparent": this.transparent }
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
  background-color: #f1f5f8;
  border-color: #f1f5f8;
  color:rgba(14,23,38,1);
  cursor: pointer;
}
.v-button-primary {
  background-color: #0f7bf9;
  border-color: #0f7bf9;
  color: #ffffff;
  font-family: "PingFang Light";
  font-weight:300;
}
.v-button-info {
  background-color: #0395f9;
  border-color: #0395f9;
  color: #ffffff;
}
.v-button-light {
  background-color: white;
  border: 1px solid #e9e9e9;
  font-family: "PingFang Light";
  color: #6c6c6c;
}
.v-button-transparent {
  background-color: transparent;
  border: none;
  // color: #414a60;
  font-size: 14px;
  font-family: PingFang;
}
</style>