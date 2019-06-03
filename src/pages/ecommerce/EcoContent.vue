<template>
  <div class="page eco-content">
    <div class="side-panel">
      <div class="section channel-analysis">
        <h3>渠道分析</h3>
        <div class="total-views">
          <div class="number">
            <span>235</span>
          </div>
          <div class="details">
            <p class="title">总浏览次数</p>
            <p class="date">2019-03-10 - 至今</p>
          </div>
        </div>
        <div class="sub-views">
          <div class="wechat">
            <div class="number">
              <span>89</span>
            </div>
            <div class="details">
              <span>微信</span>
              <img src="@/assets/images/ic_label_white.png" alt="label">
            </div>
          </div>
          <div class="clock">
            <div class="number">
              <span>89</span>
            </div>
            <div class="details">
              <span>微信</span>
              <img src="@/assets/images/ic_label_white.png" alt="label">
            </div>
          </div>
          <div class="qq">
            <div class="number">
              <span>89</span>
            </div>
            <div class="details">
              <span>微信</span>
              <img src="@/assets/images/ic_label_white.png" alt="label">
            </div>
          </div>
          <div class="link">
            <div class="number">
              <span>89</span>
            </div>
            <div class="details">
              <span>微信</span>
              <img src="@/assets/images/ic_label_white.png" alt="label">
            </div>
          </div>
        </div>
      </div>
      <div class="section age-layer">
        <h3>下单年龄层</h3>
        <div class="progress-bars">
          <div class="progress">
            <label>10 - 20</label>
            <v-progress-bar :value="60"/>
          </div>
          <div class="progress">
            <label>20 - 30</label>
            <v-progress-bar :value="100"/>
          </div>
          <div class="progress">
            <label>30 - 40</label>
            <v-progress-bar :value="80"/>
          </div>
          <div class="progress">
            <label>40 - 50</label>
            <v-progress-bar :value="60"/>
          </div>
        </div>
      </div>
      <div class="section data-dispute">
        <h3>数据纠纷</h3>
        <div class="down">
          <div class="image">
            <img class="img_down" src="@/assets/images/ic_down_blue.png" alt="down">
          </div>
          <div class="number">
            <h3>退款笔数</h3>
            <span>2</span>
          </div>
          <div class="percentage">
            <h3>退款率</h3>
            <span>5%</span>
          </div>
        </div>
        <div class="up">
          <div class="image">
            <img class="img_up" src="@/assets/images/ic_up_blue.png" alt="up">
          </div>
          <div class="number">
            <h3>投诉笔数</h3>
            <span>2</span>
          </div>
          <div class="percentage">
            <h3>投诉率</h3>
            <span>5%</span>
          </div>
        </div>
        <div class="dashed">
          <div class="image">
            <img class="img_dashed" src="@/assets/images/ic_dashed_blue.png" alt="dashed">
          </div>
          <div class="number">
            <h3>取消订单</h3>
            <span>2</span>
          </div>
          <div class="percentage">
            <h3>违规下架</h3>
            <span>5%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-panel">
      <div class="section section-stats">
        <div class="ticket ticket-earned">
          <div class="title">
            <span>已赚取</span>
          </div>
          <div class="details">
            <span class="amount">3000.00</span>
            <span class="unit">（元）</span>
          </div>
        </div>
        <div class="ticket ticket-withdraw">
          <div class="title">
            <span>已赚取</span>
            <label>
              <img src="@/assets/images/ic_withdraw_blue.png" alt="withdraw">
              提现
            </label>
          </div>
          <div class="details">
            <span class="amount">3000.00</span>
            <span class="unit">（元）</span>
          </div>
          <div class="history">
            <a href="#">查看交易记录</a>
          </div>
        </div>
        <div class="ticket ticket-unallocated">
          <div class="title">
            <span>已赚取</span>
          </div>
          <div class="details">
            <span class="amount">280.00</span>
            <span class="unit">（元）</span>
          </div>
          <div class="subdetails">
            <p>（注：每月5日定期结算）</p>
          </div>
        </div>
      </div>
      <div class="section section-order">
        <div class="section-title">
          <span>订单信息</span>
        </div>
        <div class="section-body">
          <div class="order">
            <span>36</span>
            <p>订单总量</p>
          </div>
          <div class="separator"></div>
          <div class="order">
            <span>30</span>
            <p>交易成功</p>
          </div>
          <div class="separator"></div>
          <div class="order">
            <span>6</span>
            <p>交易关闭</p>
          </div>
          <div class="separator"></div>
          <div class="order">
            <span>5</span>
            <p>待付款订单</p>
          </div>
          <div class="separator"></div>
          <div class="order">
            <span>6</span>
            <p>待服务订单</p>
          </div>
          <div class="separator"></div>
          <div class="order">
            <span>0</span>
            <p>待评价订单</p>
          </div>
          <div class="separator"></div>
          <div class="order">
            <span>0</span>
            <p>退款订单</p>
          </div>
        </div>
      </div>
      <div class="section section-service">
        <div class="section-title">
          <span>服务信息</span>
        </div>
        <div class="section-body">
          <div class="service">
            <span class="name">出售中的服务:</span>
            <span class="amount">6</span>
          </div>
          <div class="service">
            <span class="name">违规下架的服务:</span>
            <span class="amount">1</span>
          </div>
          <div class="service">
            <span class="name">已下架的服务:</span>
            <span class="amount">2</span>
          </div>
          <div class="service">
            <span class="name">服务咨询数:</span>
            <span class="amount">6</span>
          </div>
          <div class="service">
            <span class="name">服务收藏数:</span>
            <span class="amount">6</span>
          </div>
        </div>
      </div>
      <div class="section section-transaction">
        <div class="section-title">
          <span>交易数据</span>
        </div>
        <div class="section-body">
          <div class="wave-chart">
            <chart-wave/>
          </div>
          <div class="summary">
            <div class="summary-order">
              <div class="title">
                <img src="@/assets/images/ic_order_blue.png" alt="order">
                <span>下单信息汇总</span>
              </div>
              <div class="details">
                <div class="details-item">
                  <h3>30人</h3>
                  <p>下单人数</p>
                </div>
                <div class="details-item">
                  <h3>2000</h3>
                  <p>下单金额 (元）</p>
                </div>
                <div class="details-item">
                  <h3>20%</h3>
                  <p>下单-支付转化率</p>
                </div>
              </div>
            </div>
            <div class="summary-payment">
              <div class="title">
                <img src="@/assets/images/ic_order_blue.png" alt="order">
                <span>下单信息汇总</span>
              </div>
              <div class="details">
                <div class="details-item">
                  <h3>30人</h3>
                  <p>支付人数</p>
                </div>
                <div class="details-item">
                  <h3>1500</h3>
                  <p>支付金额（元）</p>
                </div>
                <div class="details-item">
                  <h3>50</h3>
                  <p>客单价</p>
                </div>
              </div>
            </div>
            <div class="summary-conversion">
              <div class="title">
                <img src="@/assets/images/ic_conversion_blue.png" alt="order">
                <span>转化率汇总</span>
              </div>
              <div class="details">
                <div class="details-item">
                  <h3>200人</h3>
                  <p>访客人数</p>
                </div>
                <div class="details-item">
                  <h3>30%</h3>
                  <p>订单转化率</p>
                </div>
                <div class="details-item">
                  <h3>10%</h3>
                  <p>支付转化率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EcoContent"
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.eco-content {
  display: flex;

  .side-panel {
    width: 425px;
    padding: 33px 20px 0px 40px;

    .section {
      > h3 {
        color: #535f6b;
        font-family: "Adobe Heiti Std";
        font-size: 17px;
        font-weight: 400;
        margin: 0;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          width: 5px;
          height: 21px;
          background-color: #0f7bf9;
          display: inline-block;
          margin-right: 10px;
        }
      }
      &.channel-analysis {
        &::after {
          content: "";
          width: 347px;
          height: 1px;
          background-color: #f1f1f1;
          display: block;
          margin-top: 45px;
        }
        .total-views {
          margin-top: 23px;
          display: flex;
          align-items: center;
          width: 352px;
          height: 90px;
          border-radius: 10px;
          background-color: #f0f3f4;
          background-image: linear-gradient(to right, #169aff 0%, #00c6ff 100%);
          padding: 31px 153px 30px 23px;

          .number {
            span {
              color: #ffffff;
              font-family: "Microsoft Ya Hei";
              font-size: 37px;
              font-weight: 700;
            }
          }
          .details {
            margin-left: 15px;

            .title {
              color: #f0f3f4;
              font-family: "Adobe Heiti Std";
              font-size: 12px;
              font-weight: 400;
              margin: 0;
            }
            .date {
              color: #f0f3f4;
              font-family: "Adobe Heiti Std";
              font-size: 12px;
              font-weight: 400;
              margin: 0;
            }
          }
        }
        .sub-views {
          display: flex;
          align-items: center;
          margin-top: 10px;

          > div {
            width: 90px;
            height: 55px;
            border-radius: 3px;
            padding: 11px;
            margin-left: 2px;

            .number {
              span {
                color: white;
                font-size: 12px;
                line-height: 12px;
              }
            }
            .details {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 3px;

              span {
                font-size: 9px;
                color: white;
              }
              img {
                width: 9px;
              }
            }
            &.wechat {
              background-image: linear-gradient(
                to right,
                #11c44d 0%,
                #14d95a 60%,
                #02db50 100%
              );
            }
            &.clock {
              background-image: linear-gradient(
                to right,
                #f66952 0%,
                #fc994d 60%,
                #ffaa3c 100%
              );
            }
            &.qq {
              background-image: linear-gradient(
                to right,
                #7f7ede 0%,
                #a594dc 60%,
                #b7a0dc 100%
              );
            }
            &.link {
              background-image: linear-gradient(
                to right,
                #6795e1 0%,
                #73a6f7 60%,
                #75a9fc 100%
              );
            }
          }
        }
      }
      &.age-layer {
        margin-top: 35px;

        .progress-bars {
          .progress {
            display: flex;
            align-items: center;
            margin-top: 35px;

            label {
              color: #a5b6c8;
              font-family: "Adobe Heiti Std";
              font-size: 12px;
              font-weight: 400;
              margin-right: 18px;
            }
          }
        }
      }
      &.data-dispute {
        margin-top: 65px;

        > div {
          display: flex;
          align-items: center;
          margin-top: 62px;
          margin-bottom: 45px;

          .image {
            width: 13px;
            height: 20px;

            &.dashed {
              width: 23px;
              height: 3px;
            }
          }
        }
        .number,
        .percentage {
          margin-left: 82px;
          display: flex;
          flex-direction: column;
          align-items: center;

          h3 {
            font-family: "FZLTHK -- GBK 1-0";
            font-size: 14px;
            font-weight: 400;
            margin: 0;
          }
          span {
            color: #202133;
            font-size: 24px;
          }
        }
      }
    }
  }
}
.main-panel {
  padding: 14px 70px 48px 5px;
  flex: auto;

  .section-stats {
    display: flex;
    align-items: center;

    > div {
      width: 418px;
      height: 153px;
      border-radius: 4px;
      background-color: #ffffff;
      padding: 20px 62px 52px 31px;
      position: relative;

      .title {
        span {
          color: #535f6b;
          font-family: "Adobe Heiti Std";
          font-size: 17px;
          font-weight: 400;
          margin: 0;
          display: flex;
          align-items: center;

          &::before {
            content: "";
            width: 5px;
            height: 21px;
            background-color: #0f7bf9;
            display: inline-block;
            margin-right: 10px;
          }
        }
        label {
          position: absolute;
          color: #0f7bf9;
          font-family: "Adobe Heiti Std";
          font-size: 16px;
          font-weight: 400;
          display: flex;
          right: 68px;
          top: 23px;

          img {
            width: 22px;
            height: 21px;
            margin-right: 8px;
          }
        }
      }
      .details {
        margin-top: 27px;
        margin-left: 88px;

        .amount {
          color: #202133;
          font-family: "FZLTCHJW -- GB 1-0";
          font-size: 41px;
          font-weight: 400;
        }
        .unit {
          color: #a5b6c8;
          font-family: "FZLTHK -- GBK 1-0";
          font-size: 14px;
          margin-left: 10px;
        }
      }
      .history {
        margin-top: 15px;
        display: flex;
        justify-content: center;

        a {
          color: #80b3ea;
          font-family: "Adobe Heiti Std";
          font-size: 12px;
          font-weight: 400;
          text-decoration: none;
        }
      }
      .subdetails {
        margin-top: 14px;
        display: flex;
        justify-content: center;

        p {
          color: #a5b6c8;
          font-family: "FZLTHK -- GBK 1-0";
          font-size: 16px;
          font-weight: 400;
          margin: 0;
        }
      }
      &.ticket-earned {
        border: 1px solid #0f7bf9;
      }
    }
  }
  .section-order {
    margin-top: 10px;
    height: 153px;
    border-radius: 4px;
    background-color: #0f7bf9;
    padding: 20px 59px 33px 31px;

    .section-title {
      span {
        color: #ffffff;
        font-family: "Adobe Heiti Std";
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          width: 4px;
          height: 21px;
          background-color: #ffffff;
          display: inline-block;
          margin-right: 11px;
        }
      }
    }
    .section-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 22px;
      padding-top: 6px;

      .order {
        display: flex;
        align-items: center;
        flex-direction: column;

        span {
          color: #ffffff;
          font-family: "Adobe Heiti Std";
          font-size: 24px;
          font-weight: 400;
        }
        p {
          margin: 10px 0 0 0;
          color: #ffffff;
          font-family: "Adobe Heiti Std";
          font-size: 14px;
          font-weight: 400;
        }
      }
      .separator {
        width: 1px;
        height: 24px;
        background-color: white;
      }
    }
  }
  .section-service {
    margin-top: 30px;

    .section-title {
      span {
        color: #535f6b;
        font-family: "Adobe Heiti Std";
        font-size: 17px;
        font-weight: 400;
        margin: 0;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          width: 5px;
          height: 21px;
          background-color: #0f7bf9;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
    .section-body {
      margin-top: 32px;
      padding-right: 62px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .service {
        display: flex;
        align-items: center;

        .name {
          color: #a5b6c8;
          font-family: "FZLTHK -- GBK 1-0";
          font-size: 14px;
          font-weight: 400;
        }
        .amount {
          color: #30373f;
          font-size: 24px;
          margin-left: 7px;
        }
      }
    }
  }
  .section-transaction {
    margin-top: 60px;

    .section-title {
      span {
        color: #535f6b;
        font-family: "Adobe Heiti Std";
        font-size: 17px;
        font-weight: 400;
        margin: 0;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          width: 5px;
          height: 21px;
          background-color: #0f7bf9;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
    .section-body {
      padding-top: 14px;
      padding-left: 22px;
      display: flex;

      .summary {
        border-top: 1px solid #ebeefb;
        border-left: 1px solid #ebeefb;
        margin-left: 40px;

        > div {
          .title {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ebeefb;
            border-right: 1px solid #ebeefb;
            padding: 21px 351px 18px 34px;

            img {
              width: 20px;
              height: 20px;
            }
            span {
              color: #0f7bf9;
              font-family: "Adobe Heiti Std";
              font-size: 16px;
              font-weight: 400;
              margin-left: 13px;
            }
          }
          .details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;

            .details-item {
              border-bottom: 1px solid #ebeefb;
              border-right: 1px solid #ebeefb;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 17px 0px;

              h3 {
                font-family: "FZLTHK -- GBK 1-0";
                font-size: 24px;
                font-weight: 400;
                margin: 0;
                color: #202133;
              }
              p {
                color: #a5b6c8;
                font-family: "FZLTHK -- GBK 1-0";
                font-size: 14px;
                font-weight: 400;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>