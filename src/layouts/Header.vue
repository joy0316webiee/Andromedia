<template>
  <div class="header">
    <div class="header-logo">
      <span>群控LOGO</span>
    </div>
    <div class="header-menubar">
      <div class="header-menubar-profile">
        <div class="userinfo">
          <img src="@/assets/images/avatar.png" alt="avatar">
          <span>lola8713</span>
        </div>
        <div class="dropdown">
          <div class="dropdown-toggle">
            <img src="@/assets/images/dropdown.png" alt="arrow-down">
          </div>
          <div class="dropdown-menu"></div>
        </div>
      </div>
      <div class="header-menubar-controls">
        <div class="member-center">
          <button>会员中心</button>
        </div>
        <div class="tools">
          <button class="btn btn-inbox"></button>
          <button class="btn btn-setting"></button>
          <span class="divider"></span>
          <button class="btn btn-hide"></button>
          <button class="btn btn-expand"></button>
          <button class="btn btn-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eef0f5;

  .header-logo {
    background: #0f7bf9;
    padding: 16px 28px 18px 36px;
    cursor: pointer;

    span {
      font-size: 16px;
      font-weight: bold;
      display: block;
      color: white;
    }
  }
  .header-menubar {
    display: flex;
    align-items: center;
    margin-right: 62px;

    .header-menubar-profile {
      display: flex;
      align-items: center;
      margin-right: 20px;

      .userinfo {
        display: flex;
        align-items: center;
        margin-right: 10px;

        img {
          width: 30px;
          height: 30px;
        }
        span {
          color: #71716c;
          margin-left: 6px;
          font-size: 16px;
        }
      }
      .dropdown {
        .dropdown-toggle {
          display: flex;
          cursor: pointer;

          img {
          }
        }
        .dropdown-menu {
        }
      }
    }
    .header-menubar-controls {
      display: flex;
      align-items: center;

      .member-center {
        display: flex;
        margin-right: 20px;

        button {
          width: 66px;
          height: 24px;
          padding: 0;
          border: 0px;
          border-radius: 12px;
          background: #0f7bf9;
          color: white;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;

          &:hover {
            border: 1px solid #0f7bf9;
            background: white;
            color: #0f7bf9;
          }
        }
      }
      .tools {
        display: flex;
        align-items: center;

        .btn {
          border: none;
          width: 13px;
          height: 13px;
          padding: 0px;
          margin: 0px 10px;
          cursor: pointer;

          &.btn-inbox {
            background: url("~@/assets/images/ic_inbox.png") no-repeat center;
            background-size: contain;
          }
          &.btn-setting {
            background: url("~@/assets/images/ic_setting.png") no-repeat center;
            background-size: contain;
          }
          &.btn-hide {
            background: url("~@/assets/images/ic_hide.png") no-repeat center;
            background-size: contain;
          }
          &.btn-expand {
            background: url("~@/assets/images/ic_expand.png") no-repeat center;
            background-size: contain;
          }
          &.btn-close {
            background: url("~@/assets/images/ic_close.png") no-repeat center;
            background-size: contain;
          }
        }
        .divider {
          width: 1px;
          height: 20px;
          border-left: 1px solid #eef0f5;
        }
      }
    }
  }
}
</style>