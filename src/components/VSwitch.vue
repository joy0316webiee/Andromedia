<template>
  <div class="switch">
    <span
      v-for="(item, index) in items"
      :key="index"
      :class="itemClasses(index)"
      @click="() => {onChange(index, item.action);}"
    >{{item.label}}</span>
  </div>
</template>

<script>
export default {
  props: ["items", "default"],
  data() {
    return {
      activeIndex: parseInt(this.default)
    };
  },
  methods: {
    onChange(index, action) {
      this.activeIndex = index;
      typeof action === "function" && action && action();
    },
    itemClasses(index) {
      return [
        { active: index === this.activeIndex },
        { "border-left": index === 0 },
        { "border-right": index === this.items.length - 1 }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.switch {
  height: 29px;
  border-radius: 3px;
  background-color: #ffffff;
  display: inline-block;

  span {
    // color: #767c91;
    font-family: "Microsoft Ya Hei";
    font-size: 12px;
    font-weight: 400;
    padding: 7px 45px;
    display: inline-block;
    cursor: pointer;

    &.border-left {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &.border-right {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
    &.active {
      color: white;
      background-color: #0f7bf9;
    }
  }
}
</style>