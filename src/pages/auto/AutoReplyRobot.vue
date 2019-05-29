<template>
  <auto-container>
    <div class="reply-robot">
      <div class="reply-robot-header">
        <img class="add" src="@/assets/images/ic_round_add_grey.png" alt="add">
        <div class="image-group">
          <img src="@/assets/images/avatars/avatar001.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar002.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar003.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar001.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar004.png" alt="avatar">
        </div>
        <span>+42</span>
        <button>
          <img src="@/assets/images/ic_right.png" alt="arr-right">
        </button>
      </div>
      <v-table-ex withID grey :header="header" :data="robots" :dimens="dimens" :actions="actions"></v-table-ex>
    </div>
  </auto-container>
</template>

<script>
export default {
  name: "AutoReplyRobot",
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
.reply-robot {
  background-color: #f1f5f8;

  .reply-robot-header {
    height: 88px;
    padding: 41px;
    display: flex;
    align-items: center;

    .add {
      width: 25px;
      height: 25px;
    }
    .image-group {
      margin-left: 32px;

      img {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
    }
    span {
      font-size: 15px;
      font-weight: bold;
      color: #adefc2;
      padding: 14px 17px;
      border: 2px solid #adefc2;
      border-radius: 24px;
      display: inline-block;
      cursor: pointer;
    }
    button {
      background: transparent;
      border: none;
      margin-left: 15px;
    }
  }
}
</style>