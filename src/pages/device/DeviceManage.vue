<template>
  <div class="page page-device page-device-manage">
    <div class="manage-header">
      <div class="manage-header-controls">
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
        <v-dropdown class="dropdown-batch" text="批量操作" :items="batchDropdown"/>
        <v-dropdown class="dropdown-group" text="分组" :items="groupDropdown"/>
      </div>
      <div class="manage-header-labels">
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
      <div class="manage-header-toggle">
        <img src="@/assets/images/ic_menu.png" alt="toggle">
      </div>
    </div>
    <div class="manage-body">
      <div class="manage-table">
        <div class="manage-table-header">
          <div class="column">
            <v-round-check class="check-all" :onChange="onChangeCheckAll"/>
            <label>序列号</label>
          </div>
          <div class="column">
            <label>配置名称</label>
          </div>
          <div class="column">
            <label>分组</label>
          </div>
          <div class="column">
            <label>标签</label>
          </div>
          <div class="column">
            <label>时间</label>
          </div>
          <div class="column">
            <label>设备</label>
          </div>
          <div class="column"></div>
        </div>
        <div class="manage-table-body">
          <div class="row" v-for="(device, index) in devices" :key="index">
            <div class="column">
              <v-round-check class="check-one" :initState="checkedAll"/>
              <label>{{index + 1}}</label>
            </div>
            <div class="column" v-for="(value, key) in device" :key="key">
              <label>{{value}}</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-modal-device-create v-show="openedModal === 1" @close="closeModal"/>
    <v-modal-device-config v-show="openedModal === 2" @close="closeModal"/>
    <v-modal-device-select v-show="openedModal === 3" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  name: "DeviceManage",
  data() {
    return {
      checkedAll: false,
      openedModal: -1,
      batchDropdown: [
        {
          text: "配置设备",
          action: this.onCreateDevice
        },
        {
          text: "删除",
          action: this.onSelectDevice
        },
        {
          text: "分组",
          action: this.onConfigDevice
        },
        {
          text: "打标签",
          action: "#"
        }
      ],
      groupDropdown: [
        {
          text: "配置设备",
          action: "#"
        },
        {
          text: "删除",
          action: "#"
        },
        {
          text: "分组",
          action: "#"
        },
        {
          text: "打标签",
          action: "#"
        }
      ],
      actionDropdown: [
        {
          text: "配置设备",
          action: undefined
        },
        {
          text: "删除",
          action: undefined
        },
        {
          text: "删除",
          action: undefined
        },
        {
          text: "重命名",
          action: undefined
        },
        {
          text: "打标签",
          action: undefined
        }
      ],
      devices: []
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    onChangeCheckAll() {
      this.checkedAll = !this.checkedAll;
    },
    onCreateDevice() {
      this.openedModal = 1;
    },
    onConfigDevice() {
      this.openedModal = 2;
    },
    onSelectDevice() {
      this.openedModal = 3;
    },
    fetchDevices() {
      const baseURI = "http://localhost:3000/devices";
      this.$http.get(baseURI).then(result => {
        this.devices = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchDevices();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#aeaeae);
@mixin grid {
  height: 40px;
  padding-left: 46px;
  display: grid;
  align-items: center;
  grid-template-columns: 153px 159px 117px 117px 161px auto auto;
  color: #767c91;
  font-size: 12px;
  font-family: PingFang;
  font-weight: 400;
}

.page-device-manage {
  .manage-header {
    padding-top: 24px;
    padding-left: 26px;
    position: relative;

    .manage-header-controls {
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
    .manage-header-labels {
      margin-top: 14px;

      .label-group {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
      }
    }
    .manage-header-toggle {
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
  .manage-body {
    .manage-table {
      .manage-table-header,
      .row {
        @include grid;

        .column {
          label {
            margin-left: 16px;
          }
        }
      }
      .manage-table-header {
        background: #f1f5f8;
      }
    }
  }
}
</style>