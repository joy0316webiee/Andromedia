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
            <button>X</button>
          </div>
          <div class="label">
            <span>123组</span>
            <button>X</button>
          </div>
          <div class="label">
            <span>深圳</span>
            <button>X</button>
          </div>
          <div class="label">
            <span>123组</span>
            <button>X</button>
          </div>
        </div>
        <div class="label-group">
          <div class="label">
            <span>深圳</span>
            <button>X</button>
          </div>
          <div class="label">
            <span>123组</span>
            <button>X</button>
          </div>
        </div>
      </div>
      <div class="manage-header-toggle">
        <img src="#" alt="toggle">
      </div>
    </div>
    <div class="manage-body">
      <div class="manage-table">
        <div class="manage-table-header">
          <div class="column">
            <input class="check-all" type="checkbox">
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
            <label>设备</label>
          </div>
          <div class="column"></div>
        </div>
        <div class="manage-table-body">
          <div class="row">
            <div class="column">
              <input class="check-one" type="checkbox">
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
              <input class="check-one" type="checkbox">
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
              <input class="check-one" type="checkbox">
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
              <input class="check-one" type="checkbox">
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
              <input class="check-one" type="checkbox">
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
              <input class="check-one" type="checkbox">
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/placeholder.scss";

@include placeholder(#aeaeae);

.page-device-manage {
  .manage-header {
    padding-top: 24px;
    padding-left: 26px;

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
      .label-group {
        .label {
          span {
          }
          button {
          }
        }
      }
    }
    .manage-header-toggle {
      img {
      }
    }
  }
  .manage-body {
    .manage-table {
      .manage-table-header {
        .column {
          .check-all {
          }
          label {
          }
        }
      }
      .manage-table-body {
        .row {
          .column {
            .check-one {
            }
            label {
            }
          }
        }
      }
    }
  }
}
</style>