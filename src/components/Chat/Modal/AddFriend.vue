<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-header" id="modalTitle">
        <span>添加好友</span>
        <button @click="close">&times;</button>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="row">
          <v-input-text label="输入账号：" placeholder="输入账号/手机号" width="232px"></v-input-text>
          <img src="@/assets/images/ic_search.png">
        </div>
        <div class="row">
          <label for>上传账号:&nbsp;</label>
          <v-button light width="232px">上传好友列表</v-button>
          <br>
          <div class="desc">可上传单个/多个好友列表</div>
        </div>
        <div class="row">
          <v-button primary width="232px" :onClick="fnOpenModal">加好友</v-button>
        </div>
        <div class="row">
          <div class="check-all">
            <v-round-check primary :onChange="onChangeCheckAll"/>
            <span>找到6个人（ 选3 ）</span>
          </div>
        </div>
        <div class="row check">
          <div class="check-item" v-for="(friend, index) in searchedFriend">
            <v-round-check class="check-one" :initState="checkedAll"/>
            <div class="check-item-content">
              <img class="friend-avatar" :src="friend.avatar">
              <div class="friend-description">
                <span class="friend-name">{{friend.name}}</span>
                <span class="friend-phone-number">({{friend.phoneNumber}})</span>
                <br>
                <span class="friend-detail">{{friend.detail}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <chat-modal-verify-text v-show="openModal" @close="closeModal"></chat-modal-verify-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedAll: false,
      searchedFriend: [
        {
          avatar: "/img/avatar/avatar1.png",
          name: "lora",
          phoneNumber: 2901526412,
          detail: "some detail"
        },
        {
          avatar: "/img/avatar/avatar1.png",
          name: "lora",
          phoneNumber: 2901526412,
          detail: "some detail"
        },
        {
          avatar: "/img/avatar/avatar1.png",
          name: "lora",
          phoneNumber: 2901526412,
          detail: "some detail"
        },
        {
          avatar: "/img/avatar/avatar1.png",
          name: "lora",
          phoneNumber: 2901526412,
          detail: "some detail"
        },
        {
          avatar: "/img/avatar/avatar1.png",
          name: "lora",
          phoneNumber: 2901526412,
          detail: "some detail"
        },
        {
          avatar: "/img/avatar/avatar1.png",
          name: "lora",
          phoneNumber: 2901526412,
          detail: "some detail"
        }
      ],
      openModal: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onChangeCheckAll() {
      this.checkedAll = !this.checkedAll;
    },
    closeModal() {
      this.openModal = false;
    },
    fnOpenModal() {
      this.openModal = true;
      console.log(a123);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.modal-backdrop {
  position: absolute;
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
    width: 414px;
    background: white;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 14px 0px 32px;

    .modal-header {
      display: flex;
      justify-content: space-between;

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
      margin-top: 30px;

      .row {
        margin-bottom: 20px;
        label {
          font-size: 14px;
          font-weight: bold;
          color: #606672;
        }

        .input-text {
          display: inline-block;
          margin-right: 10px;
        }
        .v-button-light {
          border-color: #e9e9e9;
          border: 1px solid #e9e9e9;
          margin-left: 18px;
        }
        .desc {
          padding: 8px 0 0 81px;
          font-size: 12px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(163, 163, 163, 1);
        }
        .v-button-primary {
          margin-left: 82px;
        }

        &.check {
          display: flex;
          flex-wrap: wrap;
        }
        .check-all {
          display: flex;
          align-items: center;

          .round {
            margin-top: 5px;
          }
          span {
            margin-left: 5px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(96, 102, 114, 1);
          }
        }
        .check-item {
          display: flex;
          width: 50%;
          align-items: center;
          padding-bottom: 20px;

          .check-one {
            margin-top: 5px;
          }
          .check-item-content {
            display: flex;
            align-items: center;

            .friend-avatar {
              width: 35px;
              height: 35px;
              border-radius: 50%;
              margin: 0px 5px;
            }
            .friend-description {
              display: flex;
              flex-wrap: wrap;
              align-items: center;

              .friend-name {
                font-size: 10px;
              }
              .friend-phone-number {
                margin-left: 5px;
                font-size: 10px;
                color: red;
              }
              .friend-detail {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>