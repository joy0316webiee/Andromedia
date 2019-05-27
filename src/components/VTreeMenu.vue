<template>
  <div class="tree-menu" @mouseover="showChildren" @mouseout="hideChildren">
    <div class="menu-item">
      <div class="label" v-if="depth > 0" :class="iconClasses" @click="onClick">{{ label }}</div>
      <div v-if="opened || depth === 0" :class="{ submenu: depth > 0}">
        <v-tree-menu
          v-for="(node, index) in nodes"
          :key="index"
          :nodes="node.nodes"
          :label="node.label"
          :action="node.action"
          :depth="depth + 1"
          :toggle="toggle"
        ></v-tree-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nodes", "label", "depth", "action", "toggle"],
  data() {
    return {
      opened: false,
      hovered: false
    };
  },
  computed: {
    iconClasses() {
      return {
        "has-children": this.nodes
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
    onClick() {
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
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  z-index: 8;

  .menu-item {
    position: relative;
    .label {
      height: 35px;
      padding: 6px 0px 6px 20px;
      color: #414a60;
      font-family: YaHei;
      font-size: 12px;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        background-color: #f2f5fa;
      }
    }
    .submenu {
      position: absolute;
      left: calc(100% + 5px);
      top: 0px;
    }
    .has-children {
      background: white url("~@/assets/images/ic_right.png") no-repeat 95% 50%;
    }
  }
}
</style>
