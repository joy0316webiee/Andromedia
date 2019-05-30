<template>
  <div class="page account">
    <div class="account-table">
      <div class="account-header">
        <span>账号管理</span>
        <v-dropdown class="account-dropdown" primary text="添加账号" :nodes="accountNodes"/>
      </div>
      <div class="account-content">
        <div class="data-table">
          <v-table-ex withID :header="header" :data="accounts" :dimens="dimens" :actions="actions"/>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="details-header">添加账号</div>
      <div class="details-body">
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
          <span class="detail">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
          <span class="detail">添加账号</span>
        </div>
        <div class="details-body-row row-high">
          <span class="title">添加LOGO</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">APP添加账号</span>
          <span class="detail">添加账号</span>
        </div>
        <div class="details-body-row row-high">
          <span class="title">APP添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
          <span class="detail">添加账号</span>
        </div>
        <div class="details-body-row row-high">
          <span class="title">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
          <span class="detail">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
          <span class="detail">添加账号</span>
        </div>
        <div class="details-body-row row-normal">
          <span class="title">添加账号</span>
        </div>
      </div>
    </div>
    <personal-modal-twitter v-show="openedModal === 1" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openedModal: -1,
      accountNodes: [
        {
          label: "单个添加",
          action: undefined
        },
        {
          label: "批量导入",
          action: this.onTwitter
        }
      ],
      header: [
        "ID",
        "微信号",
        "设备号",
        "手机号",
        "标签",
        "关联数据",
        "联数据",
        "关联数",
        "操作项"
      ],
      accounts: [],
      dimens: [
        "48px",
        "155px",
        "117px",
        "117px",
        "98px",
        "80px",
        "104px",
        "275px",
        "auto"
      ],
      actions: [
        {
          label: "编辑信息",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        },
        {
          label: "加用户",
          action: undefined
        },
        {
          label: "加群",
          action: undefined
        },
        {
          label: "配置",
          action: undefined
        },
        {
          label: "设备",
          action: undefined
        },
        {
          label: "停用",
          action: undefined
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    onTwitter() {
      this.openedModal = 1;
    },
    fetchAccounts() {
      const baseURI = "http://localhost:3000/accounts";
      this.$http.get(baseURI).then(result => {
        this.accounts = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchAccounts();
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.account {
  display: flex;

  .account-table {
    flex: 2;

    .account-header {
      height: 100px;
      padding-left: 50px;
      padding-top: 34px;

      span {
        font-size: 18px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
      }
      .account-dropdown {
        margin-left: 32px;
      }
    }
  }
  .details {
    flex: 1;
    border-left: 1px solid #edeef2;

    .details-header {
      height: 30px;
      background-color: #f4f5f9;
      border-bottom: 1px solid #edeef2;
      padding-top: 8px;
      padding-left: 10px;
      color: #404b58;
      font-size: 12px;
      font-family: PingFang;
      font-weight: 400;
    }
    .details-body {
      .details-body-row {
        border-top: 1px solid #edeef2;
        padding-left: 10px;
        &.row-normal {
          height: 47px;
          padding-top: 12px;
        }
        &.row-high {
          height: 80px;
          padding-top: 28px;
        }

        span {
          font-size: 12px;
          font-family: PingFang;
          font-weight: 400;

          &.title {
            display: inline-block;
            width: 150px;
            color: #9d9c9d;
          }
          &.detail {
            color: #404b58;
            // margin-left: 100px;
          }
        }
      }
    }
  }
}
</style>