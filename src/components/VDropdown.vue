<template>
  <div class="dropdown" v-click-outside="hide">
    <div class="dropdown-toggle" @click="toggle()">
      <v-button>{{text}}</v-button>
    </div>
    <div class="dropdown-menu" v-show="opened">
      <div v-for="(item, index) in items" :key="index" @click="item.action">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    text: String,
    items: Array
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
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.dropdown {
  position: relative;

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
    width: 142px;
    background: white;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
    z-index: 8;

    > div {
      height: 35px;
      border-bottom: 1px solid #f2f5fa;
      padding: 6px 0px 6px 20px;
      font-size: 12px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background: #f2f5fa;
      }
    }
  }
}
</style>