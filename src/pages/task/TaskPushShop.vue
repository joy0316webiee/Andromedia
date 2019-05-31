<template>
  <task-container>
    <div class="task-shop">
      <div class="line-chart">
        <div class="row">
          购买大数据&nbsp;&nbsp;
          <v-button primary width="60px">购买</v-button>
          <v-button light width="60px">购买</v-button>
          <v-button light width="60px">购买</v-button>
          <v-button light width="60px">购买</v-button>
          <v-button light width="60px">购买</v-button>
          <v-button light width="60px">购买</v-button>
          <input type="text" value="2018-04-01 - 2019-05-04">
          <v-button primary width="60px">购买</v-button>
        </div>
        <chart-shop-line-chart :datasets="datasets" :labels="labels" :width="640" :height="350"></chart-shop-line-chart>
      </div>
      <div class="progress">
        <h3>购买购买</h3>
        <div class="row" v-for="index in 7" :key="index">
          <label>22-24买</label>
          <div class="progress-bar">
            <div class="back-bar"></div>
            <div class="over-bar" :style="`width: 16%`"></div>
          </div>
          <label>16%</label>
        </div>
      </div>
      <div class="progress">
        <h3>购买购买</h3>
        <div class="row" v-for="(item, index) in progress2">
          <label>{{item.name}}</label>
          <div class="progress-bar">
            <div class="back-bar"></div>
            <div class="over-bar" :style="`width: ${item.value}%`"></div>
          </div>
          <label>{{item.value}}%</label>
        </div>
      </div>
      <div class="panel-table">
        <div class="panel-table-header">
          付款列表
          <span class="right font-blue">查看更多</span>
        </div>
        <table>
          <thead>
            <tr>
              <td width="35%">商品</td>
              <td width="30%">价格</td>
              <td width="25%">数量</td>
              <td class="align-right" width="10%">总计</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td>{{item.f1}}</td>
              <td>{{item.f2}}</td>
              <td>{{item.f3}}</td>
              <td class="align-right">{{item.f4}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="panel-pie-chart white">
        <div class="pie-header">购买购买</div>
        <div class="pie-body">
          <pie-chart :data="chartData" :width="300" :height="300"></pie-chart>
          <div class="white-circle"></div>
        </div>
      </div>
      <div class="panel-pie-chart">
        <div class="pie-header">购买购买</div>
        <div class="pie-body">
          <pie-chart :data="chartData" :width="250" :height="250"></pie-chart>
          <div class="white-circle1"></div>
        </div>
      </div>
    </div>
  </task-container>
</template>

<script>
import DateRangePicker from "@gravitano/vue-date-range-picker";
import PieChart from "@/components/Chart/PieChart.js";
export default {
  components: { DateRangePicker, PieChart },
  data() {
    return {
      labels: [
        "（订单/时间）",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "今天",
        "周日"
      ],
      datasets: [
        {
          label: "浏览",
          borderColor: "#306CB4",
          backgroundColor: "transparent",
          data: [NaN, 11, 8, 15, 18, 19, 17]
        },
        {
          label: "下单",
          borderColor: "#B64466",
          backgroundColor: "transparent",
          data: [NaN, 7, 7, 5, 7, 9, 12]
        }
      ],
      // range: ["2018-04-01", "2019-05-04"]
      range: ["01/09/2018", "01/10/2018"],
      progress2: [
        { name: "1.购买", value: "15.7" },
        { name: "2.购买", value: "15.1" },
        { name: "3.购买", value: "14.3" },
        { name: "4.购买", value: "12.8" },
        { name: "5.购买", value: "9.5" },
        { name: "6.购买", value: "8.6" },
        { name: "7.购买", value: "8" },
        { name: "8.购买", value: "6" },
        { name: "9.购买", value: "5.5" },
        { name: "10.购买", value: "4.5" }
      ],
      tableData: [
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        },
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        },
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        },
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        },
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        },
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        },
        {
          f1: "产品A款",
          f2: "666",
          f3: "100",
          f4: "666"
        }
      ],
      chartData: {
        labels: ["产", "产", "产"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#2D94FF", "#50E363", "#F9B144"],
            data: [85, 10, 5]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.task-container {
  background-color: #f0f5f8;
}
.right {
  float: right;
}
.font-blue {
  color: #6096f8;
}
.task-shop {
  position: relative;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  .line-chart {
    padding: 20px;

    background-color: white;
    canvas {
      width: 100%;
    }
    .row {
      padding: 18px;
      font-size: 16px;
      input {
        height: 30px;
        border-radius: 4px;
        border: 1px solid #e9e9e9;
        width: 145px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
  .progress {
    padding: 20px;
    margin-left: 20px;
    h3 {
      font-size: 16px;
      padding-left: 10px;
    }
    .row {
      padding: 10px;
      display: flex;
      align-items: center;
      label {
        display: inline-block;
        font-size: 14px;
        &:nth-of-type(1) {
          text-align: left;
          width: 80px;
        }
        &:nth-of-type(2) {
          text-align: right;
          width: 50px;
        }
      }
      .progress-bar {
        width: 250px;
        display: inline-block;
        height: 14px;
        position: relative;

        .back-bar {
          width: 100%;
          height: 100%;
          background-color: #e6ebee;
          border-radius: 10px;
        }
        .over-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;

          border-radius: 10px;
          background-image: linear-gradient(90deg, #2b8dde, #3cb7f1);
        }
      }
    }
  }
  .panel-table {
    width: 750px;
    padding: 50px 20px;
    .panel-table-header {
      font-size: 16px;
      font-family: SourceHanSansCN-Light;
      font-weight: 300;
      color: rgba(51, 51, 51, 1);
      span {
        font-size: 14px;
      }
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 30px;
    }
    table {
      width: 100%;
      thead {
        td {
          padding: 30px 0;
        }
      }
      tbody {
        tr {
          td {
            padding: 20px 0;
            font-size: 14px;
            color: #666666;
          }
        }
      }
    }
  }
  .panel-pie-chart {
    padding: 10px;
    margin-left: 50px;
    &.white {
      margin-top: 100px;
      background-color: white;

      display: inline-block;
      height: fit-content;
      .pie-body {
        padding: 50px 30px 50px 100px;
        background-color: #f0f5f8;
      }
    }
    .pie-header {
      font-size: 16px;
      padding-bottom: 25px;
    }
    .pie-body {
      padding: 30px 10px 20px 50px;
      background-color: #f0f5f8;
      position: relative;
    }
    margin-top: 200px;
    .white-circle {
      width: 140px;
      height: 140px;
      background-color: white;
      position: absolute;
      border-radius: 50%;
      top: 146px;
      left: 180px;
    }
    .white-circle1 {
      width: 100px;
      height: 100px;
      background-color: white;
      position: absolute;
      border-radius: 50%;
      top: 121px;
      left: 125px;
    }
  }
}
.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
</style>