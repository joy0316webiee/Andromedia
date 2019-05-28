<template>
  <div style="width: 100%">
    <v-table-ex withID grey :header="header" :data="robots" :dimens="dimens" :actions="actions"></v-table-ex>
  </div>
</template>

<script>
export default {
  name: "DeviceManage",
  data() {
    return {
      header: [
        "ID",
        "名称",
        "问题",
        "回复",
        "参与机器人",
        "发送对象",
        "状态",
        "时间",
        "回复次数",
        "操作项"
      ],
      robots: [],
      dimens: [
        "148px",
        "142px",
        "150px",
        "122px",
        "240px",
        "200px",
        "130px",
        "110px",
        "130px",
        "auto"
      ],
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
    fetchRobots() {
      const baseURI = "http://localhost:3000/robots";
      this.$http.get(baseURI).then(result => {
        this.robots = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchRobots();
  }
};
</script>

<style lang="scss" scoped>
</style>