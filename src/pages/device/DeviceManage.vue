<template>
  <device-container>
    <v-table :header="header" :data="devices" :dimens="dimens" :actions="actions" checkbox/>
  </device-container>
</template>

<script>
export default {
  name: "DeviceManage",
  data() {
    return {
      header: ["序列号", "配置名称", "分组", "标签", "时间", "设备", "操作"],
      devices: [],
      dimens: ["153px", "159px", "117px", "117px", "161px", "1.7fr", "1fr"],
      actions: [
        {
          label: "配置设备",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        },
        {
          label: "重命名",
          action: undefined
        },
        {
          label: "打标签",
          action: undefined
        }
      ]
    };
  },
  methods: {
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
</style>