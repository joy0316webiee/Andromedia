<template>
  <div
    class="tree-menu"
    :class="menuClasses"
    :style="width && {width: width}"
    @mouseover="showChildren"
    @mouseout="hideChildren"
  >
    <div class="menu-item">
      <div class="label" v-if="depth > 0" :class="iconClasses" @click="onClickMenu">{{ label }}</div>
      <div v-if="opened || depth === 0" :class="{ submenu: depth > 0}">
        <v-tree-menu
          v-for="(node, index) in nodes"
          :key="index"
          :nodes="node.nodes"
          :label="node.label"
          :action="node.action"
          :depth="depth + 1"
          :toggle="toggle"
          :width="width"
        ></v-tree-menu>
        <!-- :primary="primary" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nodes: Array,
    label: String,
    depth: Number,
    action: Function,
    toggle: Function,
    width: String
  },
  data() {
    return {
      opened: false,
      hovered: false,
      visibleMenu: true
    };
  },
  computed: {
    iconClasses() {
      return {
        "has-children": this.nodes
      };
    },
    menuClasses() {
      return {
        primary: this.primary,
        "box-shadow": this.depth === 0
      };
    }
  },
  methods: {
    showChildren() {
      this.hovered = true;
      this.opened = true;
    },
    hideChildren() {
      this.hovered = false;
      setTimeout(() => {
        if (!this.hovered) {
          this.opened = false;
        }
      }, 100);
    },
    onClickMenu() {
      typeof this.action === "function" && this.action && this.action();
      typeof this.toggle === "function" &&
        this.toggle &&
        !this.nodes &&
        this.toggle();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.tree-menu {
  width: 142px;
  background: white;
  border-radius: 2px;
  z-index: 8;

  &.primary {
    width: 100px;

    .label {
      color: black !important;
    }
  }

  &.box-shadow {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
  }

  .menu-item {
    position: relative;
    text-align: left;

    .label {
      height: 35px;
      padding: 11px 0px 11px 20px;
      // color: #414a60;
      color: black;
      font-family: MicrosoftYaHeiLight;
      font-size: 12px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background-color: #f2f5fa;
      }
    }
    .submenu {
      position: absolute;
      left: calc(100% + 1px);
      top: 0px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
    }
    .has-children {
      background: white url("~@/assets/images/ic_right.png") no-repeat 95% 50%;
    }
  }
}
</style>
