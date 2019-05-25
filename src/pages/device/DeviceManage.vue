<template>
  <device-container>
    <div class="page page-device-manage">
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
                <v-dropdown class="dropdown-action" text="操作" :items="actionDropdown"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </device-container>
</template>

<script>
export default {
  name: "DeviceManage",
  data() {
    return {
      checkedAll: false,
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
    onChangeCheckAll() {
      this.checkedAll = !this.checkedAll;
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