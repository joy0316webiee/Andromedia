<template>
  <device-container>
    <v-table :header="header" :data="devices" :dimens="dimens" :actions="actions" checkbox/>
  </device-container>
</template>

<script>
export default {
  name: "DeviceList",
  data() {
    return {
      header: [
        "序列号",
        "设备",
        "分组",
        "设备号",
        "设备别名",
        "IP",
        "版本",
        "锁屏",
        "充电",
        "运行",
        "连接",
        "开始时间",
        "操作"
      ],
      devices: [],
      dimens: [
        "134px",
        "164px",
        "99px",
        "142px",
        "141px",
        "121px",
        "134px",
        "139px",
        "117px",
        "113px",
        "97px",
        "137px",
        "auto"
      ],
      actions: [
        {
          label: "复制账号",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        },
        {
          label: "分组",
          action: undefined
        },
        {
          label: "编辑",
          action: undefined
        },
        {
          label: "多选",
          action: undefined
        },
        {
          label: "运行",
          action: undefined
        }
      ]
    };
  },
  methods: {
    fetchDevices() {
      const baseURI = "http://localhost:3000/devicelist";
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