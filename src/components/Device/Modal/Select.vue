<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="left-panel">
        <div class="header">
          <div class="header-title">
            <span>选择对象</span>
            <img src="@/assets/images/ic_search_grey.png" alt="search">
          </div>
          <div class="header-body">
            <v-tabs :items="tabs"/>
          </div>
        </div>
        <div class="content">
          <div class="content-top">
            <div class="dropdown-group">
              <v-dropdown transparent text="标签" :items="labelDropdown"/>
              <v-dropdown transparent text="分组" :items="groupDropdown"/>
              <v-dropdown transparent text="应用账号" :items="accountDropdown"/>
            </div>
            <div class="check-all">
              <span>全部</span>
              <v-round-check success :onChange="onChangeCheckAll"/>
            </div>
          </div>
          <div class="content-body">
            <v-tree-folder :checked="checkedAll"/>
          </div>
        </div>
      </div>
      <div class="right-panel">
        <div class="header">
          <div class="label-group">
            <v-label text="设备：大学生(113)" style="width: 136px"/>
            <v-label text="标签：大学生(113)" style="width: 136px"/>
          </div>
          <div class="btn-close">
            <button @click="close">&times;</button>
          </div>
        </div>
        <div class="content">
          <div class="node" v-for="index in 3" :key="index">
            <div class="node-title">
              <img src="@/assets/images/ic_folder.png" alt="folder">
              <span>设备组1</span>
            </div>
            <div class="node-close">
              <v-button-close dark/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["全部", "设备", "客户"],
      checkedAll: false,
      labelDropdown: [
        {
          text: "微信",
          action: "#"
        },
        {
          text: "QQ",
          action: "#"
        },
        {
          text: "微博",
          action: "#"
        },
        {
          text: "facebook",
          action: "#"
        }
      ],
      groupDropdown: [
        {
          text: "微信",
          action: "#"
        },
        {
          text: "QQ",
          action: "#"
        },
        {
          text: "微博",
          action: "#"
        },
        {
          text: "facebook",
          action: "#"
        }
      ],
      accountDropdown: [
        {
          text: "微信",
          action: "#"
        },
        {
          text: "QQ",
          action: "#"
        },
        {
          text: "微博",
          action: "#"
        },
        {
          text: "facebook",
          action: "#"
        }
      ]
    };
  },
  methods: {
    onChangeCheckAll() {
      this.checkedAll = !this.checkedAll;
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/scrollbar.scss";

.modal-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  .modal {
    width: 1142px;
    height: 766px;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    .left-panel {
      width: 550px;
      border-right: 1px solid #eef0f5;

      .header {
        padding-left: 60px;
        padding-top: 26px;
        border: 1px solid #eef0f5;

        .header-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 139px;

          span {
            font-size: 16px;
            font-weight: bold;
            color: #0e1726;
          }
        }
        .header-body {
          margin-top: 22px;
        }
      }
      .content {
        padding: 20px 0px 30px 60px;

        .content-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: -35px;
          padding-bottom: 36px;
          padding-right: 30px;

          .dropdown-group {
            display: flex;

            > div {
              color: #414a60;
              margin-right: 12px;
            }
          }
          .check-all {
            display: flex;

            span {
              font-size: 12px;
              margin-right: 12px;
            }
          }
        }
        .content-body {
          height: 550px;
          padding-right: 26px;
          overflow: auto;
        }
      }
    }
    .right-panel {
      padding: 28px 20px 26px 36px;
      width: 592px;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .label-group {
          display: flex;
        }
        .btn-close {
          button {
            color: #8c8c8c;
            font-size: 36px;
            line-height: 23px;
            border: none;
            padding: 0;
          }
        }
      }
      .content {
        margin-top: 16px;

        .node {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          width: 250px;

          .node-title {
            display: flex;
            align-items: center;

            span {
              font-size: 14px;
              font-family: PingFang;
              color: #3f3f3f;
              line-height: 20px;
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
}
</style>