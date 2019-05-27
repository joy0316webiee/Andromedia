<template>
  <div class="dropdown" v-click-outside="hide">
    <div class="dropdown-toggle" @click="toggle()">
      <v-button v-html="text"></v-button>
    </div>
    <div class="dropdown-menu" v-show="opened">
      <v-tree-menu :nodes="nodes" :depth="0" :toggle="toggle"/>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { close } from "fs";

export default {
  props: {
    text: String,
    nodes: Array,
    transparent: Boolean
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
      return [{ "v-button-transparent": this.transparent }];
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
    }
  }
  .dropdown-menu {
    position: absolute;
    top: 33px;
    z-index: 8;
  }
}
</style>