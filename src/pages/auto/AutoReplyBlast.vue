<template>
  <auto-container>
    <v-table-ex withID grey :header="header" :data="blasts" :dimens="dimens" :actions="actions"></v-table-ex>
  </auto-container>
</template>

<script>
export default {
  name: "AutoReplyBlas",
  data() {
    return {
      header: [
        "ID",
        "名称",
        "问题",
        "回复内容",
        "回复对象",
        "状态",
        "时间",
        "回复次数",
        "操作项"
      ],
      blasts: [],
      dimens: [
        "150px",
        "140px",
        "148px",
        "150px",
        "410px",
        "125px",
        "197px",
        "187px",
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
    fetchBlasts() {
      const baseURI = "http://localhost:3000/blasts";
      this.$http.get(baseURI).then(result => {
        this.blasts = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchBlasts();
  }
};
</script>

<style lang="scss" scoped>
</style>