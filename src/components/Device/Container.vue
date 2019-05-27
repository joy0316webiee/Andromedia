<template>
  <div class="device-container">
    <div class="device-header">
      <div class="device-header-controls">
        <div class="config-select">
          <select value="0">
            <option value="0">全部配置</option>
            <option value="1">配置设备</option>
            <option value="2">删除</option>
            <option value="3">分组</option>
            <option value="4">打标签</option>
          </select>
        </div>
        <input class="search" type="text" placeholder="请输入你想输入的关键词">
        <v-button info class="btn-create">新加配置</v-button>
        <v-button class="btn-import">导入配置</v-button>
        <v-dropdown class="dropdown-batch" text="批量操作" :nodes="batchDropdown"/>
        <v-dropdown class="dropdown-group" text="分组" :nodes="groupDropdown"/>
      </div>
      <div class="device-header-tabs">
        <v-tabs primary :items="tabs"/>
      </div>
      <div class="device-header-labels">
        <div class="label-group">
          <v-label text="深圳"/>
          <v-label text="123组"/>
          <v-label text="深圳"/>
          <v-label text="123组"/>
        </div>
        <div class="label-group">
          <v-label text="深圳"/>
          <v-label text="123组"/>
        </div>
      </div>
      <div class="device-header-toggle">
        <img src="@/assets/images/ic_menu.png" alt="toggle">
      </div>
    </div>
    <div class="device-page">
      <slot></slot>
    </div>
    <device-modal-create v-show="openedModal === 1" @close="closeModal"/>
    <device-modal-config v-show="openedModal === 2" @close="closeModal"/>
    <device-modal-select v-show="openedModal === 3" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedModal: -1,
      tabs: [
        "全部",
        "已连接：100",
        "未连接：100",
        "连接中：00",
        "空闲：00",
        "已连接：100",
        "未连接：100",
        "连接中：00",
        "空闲：00"
      ],
      batchDropdown: [
        {
          label: "停止运行",
          action: this.onCreateDevice
        },
        {
          label: "启用",
          action: this.onConfigDevice
        },
        {
          label: "删除",
          action: this.onSelectDevice
        },
        {
          label: "授权",
          action: "#"
        },
        {
          label: "运行脚本",
          nodes: [
            {
              label: "脚本1",
              nodes: [
                {
                  label: "本脚1",
                  action: this.onConfigDevice
                },
                {
                  label: "本脚2",
                  action: "#"
                }
              ]
            },
            {
              label: "脚本2",
              action: "#"
            },
            {
              label: "脚本3",
              action: "#"
            },
            {
              label: "脚本4",
              action: "#"
            },
            {
              label: "脚本5",
              action: "#"
            }
          ]
        }
      ],
      groupDropdown: [
        {
          label: "配置设备",
          action: "#"
        },
        {
          label: "删除",
          action: "#"
        },
        {
          label: "分组",
          action: "#"
        },
        {
          label: "打标签",
          action: "#"
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    onCreateDevice() {
      this.openedModal = 1;
    },
    onConfigDevice() {
      this.openedModal = 2;
    },
    onSelectDevice() {
      this.openedModal = 3;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#aeaeae);

.device-container {
  width: 100%;

  .device-header {
    padding-top: 24px;
    padding-left: 26px;
    position: relative;

    .device-header-controls {
      display: flex;
      align-items: center;

      .config-select {
        background: white url("~@/assets/images/ic_down.png") no-repeat 95% 50%;
        width: 164px;
        height: 30px;
        border: 1px solid #c0c3ce;
        border-radius: 4px;
        padding: 3px 6px;
        overflow: hidden;

        select {
          width: 100%;
          border: none;
          box-shadow: none;
          background: transparent;
          background-image: none;
          -webkit-appearance: none;
          font-size: 12px;
          font-weight: 300;
          color: #6c6c6c;
          line-height: 20px;
        }
      }
      .search {
        background: white url("~@/assets/images/ic_search.png") no-repeat 95%
          50%;
        margin-left: 24px;
        padding-left: 12px;
        width: 222px;
        height: 30px;
        border: 1px solid #9fa3b0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 300;
        line-height: 20px;
      }
      .btn-create {
        margin-left: 14px;
      }
      .btn-import {
        margin-left: 12px;
      }
      .dropdown-batch {
        margin-left: 16px;
      }
      .dropdown-group {
        margin-left: 20px;
      }
    }
    .device-header-tabs {
      margin-top: 24px;
    }
    .device-header-labels {
      margin-top: 14px;

      .label-group {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
      }
    }
    .device-header-toggle {
      position: absolute;
      top: 74px;
      right: 78px;
      cursor: pointer;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>