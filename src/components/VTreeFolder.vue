<template>
  <div class="treeview-wrapper">
    <div class="treeview">
      <div class="treeview-node" v-for="nodeIndex in 4" :key="nodeIndex">
        <div class="treeview-node-parent">
          <div
            class="dropdown-arrow"
            :class="{collapse: collapse(nodeIndex)}"
            @click="toggle(nodeIndex)"
          ></div>
          <div class="parent-title">
            <img src="@/assets/images/ic_folder.png" alt="folder">
            <span>设备组</span>
          </div>
        </div>
        <div class="treeview-node-children" v-if="!collapse(nodeIndex)">
          <div class="child" v-for="childIndex in 3" :key="childIndex">
            <div class="child-title">
              <img src="@/assets/images/ic_file.png" alt="file">
              <span>设备组</span>
            </div>
            <div class="checked">
              <v-round-check success :initState="checked"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { close } from "fs";
export default {
  props: {
    nodes: Array,
    checked: Boolean
  },
  data() {
    return {
      toggled: []
    };
  },
  methods: {
    toggle(index) {
      const findIndex = this.toggled.indexOf(index);
      if (findIndex >= 0) this.toggled.splice(findIndex, 1);
      else this.toggled.push(index);
    },
    collapse(index) {
      return this.toggled.includes(index);
    }
  }
};
</script>

<style lang="scss" scoped>
.treeview-wrapper {
  .treeview {
    .treeview-node {
      .treeview-node-parent {
        display: flex;
        align-items: center;

        .dropdown-arrow {
          width: 0px;
          height: 0px;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid #5f646d;
          cursor: pointer;
          transition: transform 0.3s;
          transform: rotate(0deg);

          &.collapse {
            transform: rotate(-180deg);
          }
        }
        .parent-title {
          margin-left: 14px;
          display: flex;
          align-items: center;

          span {
            font-size: 14px;
            font-family: PingFang;
            // font-weight: bold;
            color: #3f3f3f;
            line-height: 20px;
            margin-left: 8px;
          }
        }
      }
      .treeview-node-children {
        margin-top: 15px;
        margin-left: 50px;

        .child {
          display: flex;
          justify-content: space-between;

          .child-title {
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            span {
              font-size: 14px;
              color: #3f3f3f;
              line-height: 20px;
              margin-left: 8px;
            }
          }
          .checked {
          }
        }
      }
    }
  }
}
</style>