<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>虚拟定位</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="sidebar">
          <div class="sidebar-top">
            <v-button light width="91px">加新地址</v-button>
            <v-dropdown light width="91px" text="批量操作"/>
          </div>
          <div class="sidebar-body">
            <div class="sidebar-body-item" v-for="index in 4" :key="index">
              <div class="title">
                <img src="@/assets/images/ic_map_marker.png" alt="marker">
                <span>地址{{index}}</span>
              </div>
              <div class="action">
                <v-dropdown text="操作" :nodes="nodes"/>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content-head">
            <div class="title">
              <span>地址地址</span>/
              <label>地址地</label>
            </div>
            <div class="buttons">
              <v-button info>地址</v-button>
              <v-button light>地址</v-button>
            </div>
          </div>
          <div class="content-body">
            <div class="form-control">
              <label>
                <span>*</span>地址地址
              </label>
              <input class="input1" type="text" placeholder="地址地址地址地址地址地址">
              <v-button info>地址</v-button>
            </div>
            <div class="form-control">
              <label>地址地址</label>
              <input class="input2" type="text" placeholder="址地">
              <input class="input2" type="text" placeholder="址地">
            </div>
            <div class="form-control">
              <label>地址地址</label>
              <select class="select1">
                <option>GSM</option>
                <option>GSM</option>
                <option>GSM</option>
              </select>
              <span>MMC</span>
              <input class="input3" type="text">
              <span>MNC</span>
              <input class="input3" type="text">
              <span>LAC</span>
              <input class="input3" type="text">
              <span>CID</span>
              <input class="input3" type="text">
              <label class="label-end">LBS地址地址</label>
            </div>
            <div class="form-control">
              <label>地址地址</label>
              <select class="select2">
                <option>-地址地-</option>
                <option>-地址地-</option>
                <option>-地址地-</option>
              </select>
              <select class="select2">
                <option>-地址地-</option>
                <option>-地址地-</option>
                <option>-地址地-</option>
              </select>
              <select class="select2">
                <option>-地址地-</option>
                <option>-地址地-</option>
                <option>-地址地-</option>
              </select>
            </div>
          </div>
          <div class="content-foot">
            <GmapMap
              :center="{lat:10, lng:10}"
              :zoom="7"
              map-type-id="terrain"
              style="width: 840px; height: 450px"
            ></GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCux7dFTfcaqV-OxV8RvG-rEHD7Oq2DNp0",
    libraries: "places"
  }
});

export default {
  data() {
    return {
      nodes: [
        {
          label: "修改",
          action: undefined
        },
        {
          label: "删除",
          action: undefined
        },
        {
          label: "定位",
          action: undefined
        },
        {
          label: "复制地址",
          action: undefined
        }
      ]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  .modal {
    width: 1141px;
    height: 766px;
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    background-color: #ffffff;
    overflow: auto;
    display: flex;
    flex-direction: column;

    .modal-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 14px 11px 32px;
      border-bottom: 1px solid #f4f4f6;

      span {
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
        color: #0e1726;
        line-height: 20px;
      }
      button {
        width: 20px;
        height: 20px;
        font-size: 17px;
        line-height: 17px;
        color: #070707;
        border: none;
        padding: 0px;
        cursor: pointer;
      }
    }
    .modal-body {
      display: flex;
      height: 100%;

      .sidebar {
        width: 224px;
        height: 100%;
        padding: 15px 10px 0 26px;
        background-color: #f2f5fa;

        .sidebar-top {
          display: flex;
          button {
            margin-right: 5px;
          }
        }
        .sidebar-body {
          margin-top: 34px;

          .sidebar-body-item {
            margin-bottom: 35px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title {
              display: flex;
              align-items: center;

              img {
                width: 16px;
                height: 17px;
              }
              span {
                color: #000000;
                font-family: "Microsoft Ya Hei";
                font-size: 12px;
                font-weight: 400;
                margin-left: 11px;
              }
            }
          }
        }
      }
      .content {
        padding: 40px 30px;

        .content-head {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            color: #c9c6c3;

            span {
              color: #499cee;
            }
            label {
              color: #282e3d;
            }
          }
          .buttons {
            button {
              margin-left: 10px;
            }
          }
        }
        .content-body {
          margin-top: 10px;

          .form-control {
            margin-bottom: 10px;
            display: flex;
            align-items: center;

            label {
              font-size: 12px;
              color: #32346f;
              width: 67px;
              text-align: right;
              margin-right: 8px;
              display: inline-block;

              &.label-end {
                color: #4b96df;
                width: auto;
                font-size: 14px;
                margin-left: 5px;
              }
              span {
                color: red;
              }
            }
            span {
              font-size: 12px;
              margin-left: 4px;
              margin-right: 4px;
            }
            input,
            select {
              height: 30px;
              padding-left: 15px;
              font-size: 12px;
              border: 1px solid #f1f1f3;
              border-radius: 3px;

              &.input1 {
                width: 674px;
                margin-right: 5px;
              }
              &.input2 {
                margin-right: 10px;
              }
              &.input3 {
                width: 95px;
              }
              &.select1 {
                width: 105px;
                margin-right: 5px;
              }
              &.select2 {
                width: 175px;
              }
            }
          }
        }
        .content-foot {
        }
      }
    }
  }
}
</style>