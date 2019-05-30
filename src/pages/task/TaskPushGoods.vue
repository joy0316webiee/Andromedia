<template>
  <task-container>
    <div class="task-goods">
      <div class="task-goods-header">
        <div class="control-group">
          <v-dropdown class="duty-dropdown" text="我的任务" :nodes="dutyNodes"/>
          <v-dropdown primary class="feed" text="+添加推送" :nodes="feedNodes"/>
          <v-button class="forwarding">大数据推送</v-button>
        </div>
        <span>总任务：4个</span>
      </div>
      <div class="task-goods-body">
        <v-table-ex :header="header" :data="goods" :dimens="dimens" :actions="actions" checkbox/>
      </div>
      <div class="recommend">
        <span>为您推荐</span>
      </div>
      <task-modal-add-goods v-show="openedModal === 1" @close="closeModal"/>
    </div>
  </task-container>
</template>

<script>
export default {
  name: "TaskPush",
  data() {
    return {
      openedModal: 1,
      dutyNodes: [
        {
          label: "任务组1",
          action: undefined
        },
        {
          label: "任务组2",
          action: undefined
        },
        {
          label: "任务组3",
          action: undefined
        },
        {
          label: "任务组5",
          action: undefined
        },
        {
          label: "任务组6",
          action: undefined
        },
        {
          label: "+  新加分组",
          action: undefined
        }
      ],
      feedNodes: [
        {
          label: "单个添加",
          action: undefined
        },
        {
          label: "批量导入",
          action: this.onAddGoods
        }
      ],
      header: [
        "排名",
        "商品名称",
        "利润",
        "付款",
        "浏览",
        "类型",
        "推送对象",
        "状态",
        "时间",
        "推送次数",
        "操作项"
      ],
      goods: [],
      dimens: [
        "172px",
        "130px",
        "157px",
        "120px",
        "85px",
        "105px",
        "410px",
        "130px",
        "110px",
        "120px",
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
    closeModal() {
      this.openedModal = -1;
    },
    onAddGoods() {
      this.openedModal = 1;
    },
    fetchGoods() {
      const baseURI = "http://localhost:3000/goods";
      this.$http.get(baseURI).then(result => {
        this.goods = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchGoods();
  }
};
</script>

<style lang="scss" scoped>
.task-goods {
  position: relative;

  .task-goods-header {
    height: 85px;
    padding-left: 4px;
    padding-top: 22px;

    .control-group {
      .duty-dropdown {
        margin-right: 15px;
      }
      .feed {
        margin-right: 15px;
      }
    }
    span {
      color: #000000;
      font-family: "Microsoft Ya Hei Light";
      font-size: 12px;
      font-weight: 400;
      margin-top: 10px;
      margin-left: 11px;
    }
  }
  .recommend {
    position: absolute;
    right: 0;
    top: 526px;
    width: 60px;
    height: 161px;
    background-color: #0f7bf9;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 40px 34px 48px 19px;

    span {
      color: #ffffff;
      font-family: "Microsoft Ya Hei";
      font-weight: bold;
      font-size: 16px;
      width: 16px;
      display: block;
    }
  }
}
</style>