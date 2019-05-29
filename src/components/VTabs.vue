<template>
  <div class="tabs-wrapper">
    <div class="tabs">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="classes(index)"
        @click="tagging(index)"
      >
        <label :class="type">{{item}}</label>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    primary: Boolean,
    secondary: Boolean
  },
  data() {
    return {
      activeIndex: 1
    };
  },
  methods: {
    tagging(index) {
      this.activeIndex = index;
    },
    classes(index) {
      return [
        "item",
        { active: this.activeIndex === index },
        { secondary: this.secondary },
        {
          last: index === this.items.length - 1
        }
      ];
    }
  },
  computed: {
    type() {
      return [{ primary: this.primary }, { secondary: this.secondary }];
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-wrapper {
  display: inline-block;

  .tabs {
    display: flex;
    align-items: center;

    .item {
      display: flex;
      flex-direction: column;
      padding-right: 35px;

      &.secondary {
        padding-right: 57px;
      }
      &.active {
        label {
          color: #0f7bf9;

          & + span {
            visibility: visible;
          }
        }
      }
      &.last {
        padding-right: 0px;
      }

      label {
        color: #414a60;
        font-size: 14px;
        font-family: PingFang;
        font-weight: 400;
        cursor: pointer;

        &.primary {
          font-size: 12px;
          font-family: YeHei;
        }
        &.secondary {
          font-size: 14px;
          font-family: YeHei;
        }
      }
      span {
        width: 100%;
        height: 2px;
        background: #0f7bf9;
        visibility: hidden;
      }
    }
  }
}
</style>