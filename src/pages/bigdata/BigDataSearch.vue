<template>
  <div class="bigdata-search">
    <div class="bigdata-search-header">
      <v-dropdown light class="users" width="163px" text="全部用户" :nodes="usersNodes"/>
      <v-dropdown light class="search" width="222px" text="请输入你想输入的关键词" :nodes="searchNodes"/>
      <v-dropdown light class="tag" text="打标签" :nodes="tagNodes"/>
      <v-button light>发任务</v-button>
    </div>
    <div class="bigdata-search-body">
      <v-table-ex
        withID
        grey
        :header="header"
        :data="search"
        :dimens="dimens"
        :actions="actions"
        checkbox
      />
    </div>
    <div class="search-result">
      <div class="search-result-title">搜索结果（5）</div>
      <div class="search-result-content">
        <div class="search-result-item" v-for="index in 5" :key="index">
          <h3>苹果手机Apple ID怎么注册</h3>
          <p>将苹果手机连接电脑后,选择iphone,再点击“铃声”,在同步铃声前划勾,再点击右下边“应用”,即可同步“铃声”。 第九步,在苹果手机里设置铃声 。 打开苹果手机里的设置...</p>
          <span>手机数码 > 其他电子产品 - 1个回答 - 提问</span>
          <div class="date">
            <strong>微信朋友圈</strong>
            <span>时间: 2013.02.21</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigDataSearch",
  data() {
    return {
      usersNodes: [
        {
          label: "全部用户1",
          action: undefined
        },
        {
          label: "全部用户2",
          action: undefined
        },
        {
          label: "全部用户3",
          action: undefined
        },
        {
          label: "全部用户4",
          action: undefined
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
          label: "学历",
          nodes: [
            {
              label: "学历1",
              action: undefined
            },
            {
              label: "学历2",
              action: undefined
            },
            {
              label: "学历3",
              action: undefined
            },
            {
              label: "学历4",
              action: undefined
            }
          ]
        },
        {
          label: "学历",
          nodes: [
            {
              label: "学历1",
              action: undefined
            },
            {
              label: "学历2",
              action: undefined
            },
            {
              label: "学历3",
              action: undefined
            },
            {
              label: "学历4",
              action: undefined
            }
          ]
        },
        {
          label: "地区",
          nodes: [
            {
              label: "地区1",
              action: undefined
            },
            {
              label: "地区2",
              action: undefined
            },
            {
              label: "地区3",
              action: undefined
            },
            {
              label: "地区4",
              action: undefined
            }
          ]
        },
        {
          label: "年龄",
          nodes: [
            {
              label: "年龄1",
              action: undefined
            },
            {
              label: "年龄2",
              action: undefined
            },
            {
              label: "年龄3",
              action: undefined
            },
            {
              label: "年龄4",
              action: undefined
            }
          ]
        },
        {
          label: "+ 增加标签",
          action: undefined
        }
      ],
      header: [
        "用户",
        "ID",
        "微信号/群号",
        "设备号",
        "手机号",
        "标签",
        "关联数据",
        "操作项"
      ],
      search: [],
      dimens: [
        "30px",
        "180px",
        "150px",
        "140px",
        "108px",
        "150px",
        "210px",
        "280px",
        "auto"
      ],
      actions: [
        {
          label: "编辑商品",
          action: undefined
        },
        {
          label: "推送",
          action: undefined
        },
        {
          label: "复制链接",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        }
      ]
    };
  },
  methods: {
    fetchSearch() {
      const baseURI = "http://localhost:3000/search";
      this.$http.get(baseURI).then(result => {
        this.search = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchSearch();
  }
};
</script>

<style lang="scss" scoped>
.bigdata-search {
  position: relative;
  width: 100%;
  background-color: #f1f5f8;

  .bigdata-search-header {
    height: 95px;
    padding-top: 24px;
    padding-left: 29px;

    .search {
      margin-left: 17px;
    }
    .tag {
      margin-left: 20px;
    }
    button {
      margin-left: 13px;
    }
  }
  .search-result {
    position: absolute;
    right: 0;
    top: 0;
    width: 560px;
    height: 100%;
    padding: 29px 76px 0px 34px;
    background-color: white;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.24);
    color: #414a60;
    font-size: 12px;
    font-weight: 400;

    .search-result-content {
      margin-top: 42px;

      .search-result-item {
        margin-bottom: 35px;

        h3 {
          margin: 0px;
          color: #414a60;
          font-size: 12px;
          font-weight: 400;
        }
        p {
          margin: 5px 0px;
        }
        .date {
          margin-top: 7px;

          strong {
            color: #338ffa;
          }
          span {
            color: #cdd3d9;
            font-weight: 600;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>