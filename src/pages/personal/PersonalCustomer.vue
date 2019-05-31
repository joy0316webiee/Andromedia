<template>
  <personal-container>
    <div class="user">
      <div class="user-header">
        <v-dropdown class="user-dropdown" textLeft text="全部用户" width="163px" :nodes="userNodes"/>
        <v-dropdown class="search-dropdown" text="请输入你想输入的关键词" width="222px" :nodes="searchNodes"/>
        <v-dropdown class="tag-dropdown" text="打标签" width="104px" :nodes="tagNodes"/>
        <v-dropdown class="batch-dropdown" text="批量操作" width="104px" :nodes="batchNodes"/>
        <v-dropdown class="group-dropdown" primary text="添加客户/群" width="104px" :nodes="groupNodes"/>
      </div>
      <div class="user-content">
        <v-table-ex
          withID
          grey
          :header="header"
          :data="customers"
          :dimens="dimens"
          :actions="actions"
          checkbox
        />
        <div class="pagination">
          <v-pagination
            :vstyle="paginationStyle"
            :items="['1', '2', '3', '4', '5', '6', '7', '...', '99', '100']"
          />
        </div>
      </div>
      <personal-modal-add-customer v-show="openedModal === 1" @close="closeModal"/>
      <personal-modal-add-tag v-show="openedModal === 2" @close="closeModal"/>
      <personal-modal-grouping v-show="openedModal === 3" @close="closeModal"/>
      <personal-modal-settings v-show="openedModal === 4" @close="closeModal"/>
      <personal-modal-twitter simple v-show="openedModal === 5" @close="closeModal"/>
      <personal-modal-confirm v-show="openedModal === 6" @close="closeModal"/>
    </div>
  </personal-container>
</template>

<script>
export default {
  data() {
    return {
      openedModal: -1,
      paginationStyle: {
        wrapper: {
          width: "100%"
        },
        button: {
          fontSize: "12px",
          width: "33px",
          height: "33px",
          padding: "2px",
          marginRight: "9px",
          background: "transparent"
        }
      },
      userNodes: [
        {
          label: "设备",
          action: undefined
        },
        {
          label: "应用账号",
          action: undefined
        },
        {
          label: "分组",
          action: undefined
        },
        {
          label: "未分组客户",
          action: undefined
        },
        {
          label: "标签",
          action: undefined
        },
        {
          label: "状态",
          action: undefined,
          nodes: [
            {
              label: "被拉黑",
              action: undefined
            },
            {
              label: "被删除",
              action: undefined
            },
            {
              label: "正常",
              action: undefined
            }
          ]
        }
      ],
      searchNodes: [
        {
          label: "我不在公司下，等回公司回你...",
          action: undefined
        },
        {
          label: "我不在公司下，等回公司回你...",
          action: undefined
        },
        {
          label: "注册会员又注册了其他的名字...",
          action: undefined
        },
        {
          label: "无任何实质内容的灌水，也说...",
          action: undefined
        },
        {
          label: "注册会员又注册了其他的名字...",
          action: undefined
        }
      ],
      tagNodes: [
        {
          label: "群学历",
          action: undefined
        },
        {
          label: "职业",
          action: undefined
        },
        {
          label: "地区",
          action: undefined
        },
        {
          label: "年龄",
          action: undefined
        },
        {
          label: "+ 增加标签",
          action: undefined
        }
      ],
      batchNodes: [
        {
          label: "发消息",
          action: undefined
        },
        {
          label: "发任务",
          action: undefined,
          nodes: [
            {
              label: "发电商广告",
              action: undefined
            },
            {
              label: "发文案",
              action: undefined
            },
            {
              label: "发材料",
              action: undefined
            }
          ]
        },
        {
          label: "分组",
          action: undefined
        },
        {
          label: "账号管理",
          action: undefined,
          nodes: [
            {
              label: "退群",
              action: undefined
            },
            {
              label: "加群",
              action: undefined
            },
            {
              label: "复制账号",
              action: undefined
            }
          ]
        },
        {
          label: "删除",
          action: undefined
        }
      ],
      groupNodes: [
        {
          label: "加新好友",
          action: undefined
        },
        {
          label: "批量导入",
          action: undefined
        },
        {
          label: "批量加群",
          action: undefined
        }
      ],
      header: [
        "名称",
        "ID",
        "微信号",
        "所在设备手机号",
        "标签",
        "客户朋友",
        "客户群",
        "状态",
        "操作"
      ],
      customers: [],
      dimens: [
        "30px",
        "180px",
        "150px",
        "135px",
        "110px",
        "170px",
        "330px",
        "153px",
        "175px",
        "auto"
      ],
      actions: [
        {
          label: "发消息",
          action: () => {
            this.openedModal = 1;
          }
        },
        {
          label: "发任务",
          action: () => {
            this.openedModal = 2;
          }
        },
        {
          label: "添加",
          action: () => {
            this.openedModal = 3;
          }
        },
        {
          label: "朋友圈",
          action: () => {
            this.openedModal = 4;
          }
        },
        {
          label: "删除",
          action: () => {
            this.openedModal = 5;
          }
        },
        {
          label: "分组",
          action: undefined
        },
        {
          label: "操作",
          action: undefined
        }
      ]
    };
  },
  methods: {
    closeModal() {
      this.openedModal = -1;
    },
    fetchCustomers() {
      const baseURI = "http://localhost:3000/customers";
      this.$http.get(baseURI).then(result => {
        this.customers = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchCustomers();
  }
};
</script>

<style lang="scss" scoped>
.user {
  height: 100%;
  display: flex;
  flex-direction: column;

  .user-header {
    height: 100px;
    padding-top: 44px;
    padding-left: 27px;

    .user-dropdown {
      margin-right: 17px;
    }
    .search-dropdown {
      margin-right: 20px;
    }
    .tag-dropdown {
      margin-right: 13px;
    }
    .batch-dropdown {
      margin-right: 13px;
    }
  }
  .user-content {
    flex: auto;
    background: #f1f5f8;

    .pagination {
      margin-top: 30px;
    }
  }
}
</style>