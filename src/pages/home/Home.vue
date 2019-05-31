<template>
  <div class="page home">
    <div class="home-header">
      <label>早上好！高远方</label>
    </div>
    <div class="home-body">
      <div class="home-panel-top">
        <div class="title">
          <span class>为你推荐</span>
        </div>
        <div class="numeric bold">
          <span>110</span>
          <p>推荐唤醒用户(人)</p>
        </div>
        <div class="numeric bold">
          <span>15</span>
          <p>推荐推送商品</p>
        </div>
        <div class="numeric bold">
          <span>5</span>
          <p>推荐发文</p>
        </div>
        <div class="daily">
          <div class="daily-title">推荐发文</div>
          <div class="daily-body">
            <div class="daily-body-item">
              <div class="title">
                <span class="bull-point"></span>
                <label>2019.04.22</label>
              </div>
              <div class="content">
                <div class="content-item">
                  <span>推荐发文</span>
                  <label>荐发文</label>
                </div>
                <div class="content-item">
                  <span>推荐发文</span>
                  <label>荐发文</label>
                </div>
              </div>
            </div>
            <div class="daily-body-item">
              <div class="title">
                <span class="bull-point"></span>
                <label>2019.04.23</label>
              </div>
              <div class="content">
                <div class="content-item">
                  <span>推荐发文</span>
                  <label>荐发文荐发</label>
                </div>
              </div>
            </div>
            <div class="daily-body-item">
              <div class="title">
                <span class="bull-point"></span>
                <label>2019.04.25</label>
              </div>
              <div class="content">
                <div class="content-item">
                  <span>推荐发文</span>
                  <label>荐发文荐发文</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="datepicker">
          <v-calendar v-model="currentDate"/>
        </div>
      </div>
      <div class="home-panel-middle">
        <div class="numeric bold">
          <span>110</span>
          <p>今日在线设备</p>
        </div>
        <div class="numeric bold">
          <span>15</span>
          <p>今日空闲设备</p>
        </div>
        <div class="numeric bold">
          <span>5</span>
          <p>今天任务</p>
        </div>
        <div class="numeric bold">
          <span>310</span>
          <p>今日点赞数</p>
        </div>
        <div class="numeric bold">
          <span>75</span>
          <p>今日发朋友圈</p>
        </div>
        <div class="numeric bold">
          <span>5</span>
          <p>今日评论数</p>
        </div>
        <div class="numeric bold">
          <span>5</span>
          <p>今日评论数</p>
        </div>
      </div>
      <div class="home-panel-bottom">
        <div class="card">
          <div class="numeric">
            <span>34855万</span>
            <p>客户总数</p>
          </div>
          <div class="details">
            <span>启用：10 | 暂停：100 | 异常：45</span>
          </div>
        </div>
        <div class="card">
          <div class="numeric">
            <span>855万</span>
            <p>客户总数</p>
          </div>
          <div class="details">
            <span>账号：200 | 群：10 | 被封号：3</span>
          </div>
        </div>
        <div class="card">
          <div class="numeric">
            <span>55</span>
            <p>任务</p>
          </div>
          <div class="details">
            <span>执行中：2 | 完成：10 | 异常：45</span>
          </div>
        </div>
        <div class="card">
          <div class="numeric">
            <span>348</span>
            <p>商品总数</p>
          </div>
          <div class="details">
            <span>订单：10 | 发布：2</span>
          </div>
        </div>
        <div class="card">
          <div class="numeric">
            <span>34855万</span>
            <p>客户总数</p>
          </div>
          <div class="details">
            <span>账号：200 | 群：10 | 被封号：3</span>
          </div>
        </div>
        <div class="card">
          <div class="numeric">
            <span>34855万</span>
            <p>任务</p>
          </div>
          <div class="details">
            <span>执行中：2 | 完成：10 | 异常：45</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.home {
  background-color: #f1f5f8;
  padding: 21px;

  .home-header {
    label {
      color: #6c6c6c;
      font-family: "Microsoft Ya Hei Light";
      font-size: 12px;
      font-weight: 400;
    }
  }
  .home-body {
    margin-top: 19px;

    > div {
      display: flex;

      &.home-panel-top {
        position: relative;
        height: 320px;
        background-color: #ffffff;
        align-items: center;
        justify-content: space-between;
        padding-left: 57px;
        padding-right: 45px;

        > .title {
          position: absolute;
          left: 17px;
          top: 13px;

          span {
            display: flex;
            align-items: center;
            color: #000000;
            font-family: "Microsoft Ya Hei";
            font-size: 14px;
            font-weight: 400;

            &::before {
              content: "";
              width: 2px;
              height: 15px;
              margin-right: 9px;
              border-radius: 1px;
              background-color: #0f7bf9;
              display: inline-block;
            }
          }
        }
        .daily {
          width: 263px;
          height: 260px;
          padding: 10px;

          .daily-title {
            color: #111111;
            font-size: 16px;
            font-weight: bold;
          }
          .daily-body {
            margin-top: 10px;

            .daily-body-item {
              .title {
                display: flex;
                align-items: center;

                span {
                  background-color: #ccd5db;
                  width: 10px;
                  height: 10px;
                  display: inline-block;
                  border-radius: 50%;
                  margin-right: 19px;
                }
                label {
                  color: #666666;
                  font-size: 11px;
                }
              }
              .content {
                margin-top: 10px;

                .content-item {
                  margin-bottom: 5px;
                  margin-left: 30px;

                  span {
                    background-color: #f679a2;
                    color: white;
                    width: 50px;
                    height: 20px;
                    font-size: 9px;
                    display: inline-block;
                    border-radius: 5px;
                    padding: 4px 7px;
                    font-weight: bold;
                  }
                  label {
                    font-size: 9px;
                    font-weight: bold;
                    margin-left: 12px;
                  }
                }
              }
            }
          }
        }
        .datepicker {
          width: 488px;
          display: flex;
          justify-content: flex-end;
        }
      }
      &.home-panel-middle {
        margin-top: 6px;
        height: 221px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        padding-left: 66px;
        padding-right: 160px;
        align-items: center;
      }
      &.home-panel-bottom {
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .card {
          width: 567px;
          height: 222px;
          background-color: #ffffff;
          padding: 56px 150px;
          margin-bottom: 7px;

          .details {
            margin-top: 28px;
            text-align: center;

            span {
              color: #000000;
              font-family: "Microsoft Ya Hei";
              font-size: 14px;
              font-weight: 400;
              text-transform: uppercase;
            }
          }
        }
      }

      .numeric {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        &.bold {
          &::after {
            content: "";
            width: 1px;
            height: 53px;
            background-color: #eef0f5;
            position: absolute;
            right: -82px;
          }

          span {
            color: #0f7af9;
            font-weight: 700;
          }
          p {
            color: #000000;
          }
        }

        span {
          color: #0f7af9;
          font-family: "Microsoft Ya Hei";
          font-size: 48px;
          font-weight: 400;
        }
        p {
          color: #868686;
          font-family: "Microsoft Ya Hei";
          font-size: 14px;
          font-weight: 400;
          margin: 0;
        }
      }
    }
  }
}
</style>