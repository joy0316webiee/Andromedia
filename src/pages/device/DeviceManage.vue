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
          <div class="label">
            <span>深圳</span>
            <button>&times;</button>
          </div>
          <div class="label">
            <span>123组</span>
            <button>&times;</button>
          </div>
          <div class="label">
            <span>深圳</span>
            <button>&times;</button>
          </div>
          <div class="label">
            <span>123组</span>
            <button>&times;</button>
          </div>
        </div>
        <div class="label-group">
          <div class="label">
            <span>深圳</span>
            <button>&times;</button>
          </div>
          <div class="label">
            <span>123组</span>
            <button>&times;</button>
          </div>
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
            <v-round-check class="check-all"/>
            <label>序列号</label>
          </div>
          <div class="column">
            <label>配置名称</label>
          </div>
          <div class="column">
            <label>分组</label>
          </div>
          <div class="column">
            <label>unknown</label>
          </div>
          <div class="column">
            <label>unknown</label>
          </div>
          <div class="column">
            <label>设备</label>
          </div>
          <div class="column"></div>
        </div>
        <div class="manage-table-body">
          <div class="row">
            <div class="column">
              <v-round-check class="check-one"/>
              <label>1</label>
            </div>
            <div class="column">
              <label>1 配置脚本21374947</label>
            </div>
            <div class="column">
              <label>配1</label>
            </div>
            <div class="column">
              <label>脚本213</label>
            </div>
            <div class="column">
              <label>2011.08.09</label>
            </div>
            <div class="column">
              <label>设备1, 设备2, 设备1 1, 设备22, 设备143, 设备24, 设备14, 设备24</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <v-round-check class="check-one"/>
              <label>1</label>
            </div>
            <div class="column">
              <label>1 配置脚本21374947</label>
            </div>
            <div class="column">
              <label>配1</label>
            </div>
            <div class="column">
              <label>脚本213</label>
            </div>
            <div class="column">
              <label>2011.08.09</label>
            </div>
            <div class="column">
              <label>设备1, 设备2, 设备1 1, 设备22, 设备143, 设备24, 设备14, 设备24</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <v-round-check class="check-one"/>
              <label>1</label>
            </div>
            <div class="column">
              <label>1 配置脚本21374947</label>
            </div>
            <div class="column">
              <label>配1</label>
            </div>
            <div class="column">
              <label>脚本213</label>
            </div>
            <div class="column">
              <label>2011.08.09</label>
            </div>
            <div class="column">
              <label>设备1, 设备2, 设备1 1, 设备22, 设备143, 设备24, 设备14, 设备24</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <v-round-check class="check-one"/>
              <label>1</label>
            </div>
            <div class="column">
              <label>1 配置脚本21374947</label>
            </div>
            <div class="column">
              <label>配1</label>
            </div>
            <div class="column">
              <label>脚本213</label>
            </div>
            <div class="column">
              <label>2011.08.09</label>
            </div>
            <div class="column">
              <label>设备1, 设备2, 设备1 1, 设备22, 设备143, 设备24, 设备14, 设备24</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <v-round-check class="check-one"/>
              <label>1</label>
            </div>
            <div class="column">
              <label>1 配置脚本21374947</label>
            </div>
            <div class="column">
              <label>配1</label>
            </div>
            <div class="column">
              <label>脚本213</label>
            </div>
            <div class="column">
              <label>2011.08.09</label>
            </div>
            <div class="column">
              <label>设备1, 设备2, 设备1 1, 设备22, 设备143, 设备24, 设备14, 设备24</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <v-round-check class="check-one"/>
              <label>1</label>
            </div>
            <div class="column">
              <label>1 配置脚本21374947</label>
            </div>
            <div class="column">
              <label>配1</label>
            </div>
            <div class="column">
              <label>脚本213</label>
            </div>
            <div class="column">
              <label>2011.08.09</label>
            </div>
            <div class="column">
              <label>设备1, 设备2, 设备1 1, 设备22, 设备143, 设备24, 设备14, 设备24</label>
            </div>
            <div class="column">
              <v-dropdown class="dropdown-group" text="操作" :items="groupDropdown"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceManage",
  data() {
    return {
      batchDropdown: [
        {
          text: "配置设备",
          action: this.test
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
          action: "#"
        },
        {
          text: "删除",
          action: "#"
        },
        {
          text: "删除",
          action: "#"
        },
        {
          text: "重命名",
          action: "#"
        },
        {
          text: "打标签",
          action: "#"
        }
      ]
    };
  },
  methods: {
    test() {
      console.log("this is a test!");
    }
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

        .label {
          width: 100px;
          height: 24px;
          padding-left: 6px;
          padding-right: 8px;
          margin-right: 14px;
          background: #f4f9ff;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            font-size: 12px;
            font-weight: 400;
            color: #0f7bf9;
            line-height: 20px;
          }
          button {
            width: 16px;
            height: 16px;
            background: #0f7bf9;
            border: 1px solid #0f7bf9;
            border-radius: 50%;
            color: white;
            padding: 0 0 1px;
            font-size: 13px;
            line-height: 15px;

            &:hover {
              color: #0f7bf9;
              background: white;
            }
          }
        }
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