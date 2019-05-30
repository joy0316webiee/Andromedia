<template>
  <task-container>
    <div class="task-order">
      <div class="task-order-header">
        <div class="control-group">
          <v-dropdown class="duty-dropdown" text="排序(销量)" :nodes="sortNodes"/>
          <v-dropdown class="feed" text="+添加推送" :nodes="statusNodes"/>
          <v-dropdown class="batch" text="批量操作" :nodes="batchNodes"/>
        </div>
        <span>总任务：5个</span>
      </div>
      <div class="task-order-body">
        <v-table-ex
          withID
          :header="header"
          :data="orders"
          :dimens="dimens"
          :actions="actions"
          checkbox
        />
      </div>
    </div>
  </task-container>
</template>

<script>
export default {
  name: "TaskPush",
  data() {
    return {
      sortNodes: [
        {
          label: "时间升序",
          action: undefined
        },
        {
          label: "时间降序",
          action: undefined
        },
        {
          label: "销量升序",
          action: undefined
        },
        {
          label: "销量降序",
          action: undefined
        },
        {
          label: "单笔最高",
          action: undefined
        },
        {
          label: "销量最高",
          action: undefined
        }
      ],
      statusNodes: [
        {
          label: "未发货",
          action: undefined
        },
        {
          label: "已发货",
          action: undefined
        }
      ],
      batchNodes: [
        {
          label: "删除",
          action: undefined
        },
        {
          label: "发货",
          action: undefined
        }
      ],
      header: [
        "排名",
        "商品名称",
        "利润",
        "地址",
        "付款",
        "订单号",
        "商品名字",
        "时间",
        "购买次数",
        "购买量",
        "状态",
        "操作项"
      ],
      orders: [],
      dimens: [
        "30px",
        "100px",
        "155px",
        "150px",
        "315px",
        "90px",
        "170px",
        "180px",
        "113px",
        "96px",
        "60px",
        "110px",
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
    fetchOrders() {
      const baseURI = "http://localhost:3000/orders";
      this.$http.get(baseURI).then(result => {
        this.orders = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchOrders();
  }
};
</script>

<style lang="scss" scoped>
.task-order {
  position: relative;

  .task-order-header {
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
}
</style>