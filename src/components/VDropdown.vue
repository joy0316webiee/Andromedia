<template>
  <div class="dropdown" v-click-outside="hide">
    <div class="dropdown-toggle" @click="toggle()">
      <v-button :class="classes" v-html="text" :style="buttonStyle"></v-button>
    </div>
    <div class="dropdown-menu" :class="{right: right}" v-show="opened">
      <v-tree-menu :nodes="nodes" :depth="0" :toggle="toggle"/>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    text: String,
    width: String,
    nodes: Array,
    primary: Boolean,
    right: Boolean,
    light: Boolean,
    transparent: Boolean,
    textLeft: Boolean
  },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  },
  computed: {
    classes() {
      return [
        { "v-button-transparent": this.transparent },
        { "v-button-primary": this.primary },
        { "v-button-light": this.light },
        { right: this.right },
        { active: this.opened }
      ];
    },
    buttonStyle() {
      return [
        this.width && { width: this.width },
        this.textLeft && { "text-align": "left" }
      ];
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-toggle {
    width: fit-content;

    button {
      background-image: url("~@/assets/images/ic_down.png");
      background-repeat: no-repeat;
      background-position: 95% 50%;

      &.right {
        background-color: white;
        background-image: none;
        width: 113px;
        height: 38px;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 400;
        color: black;

        &.active {
          background-color: #0f7bf9;
          color: white;
        }
      }
      &.v-button-primary {
        background-image: none;
      }
    }
  }
  .dropdown-menu {
    position: absolute;
    top: 33px;
    z-index: 8;

    &.right {
      top: 0px;
      left: calc(100% + 2px);

      .label {
        color: black !important;
      }
    }
  }
}
</style>