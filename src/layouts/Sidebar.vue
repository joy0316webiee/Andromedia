<template>
  <div class="sidebar">
    <div class="sidebar-list">
      <div class="sidebar-list-item" v-for="(item, index) in menuItems" :key="index">
        <a
          :class="[item.class, {active: activeIndex === index}]"
          href="#"
          @click="handleChangeMenu(index)"
        >
          <img :src="imgUrl(item.image)" :alt="item.image">
          <span :class="{collapse: collapse}">{{item.text}}</span>
        </a>
      </div>
    </div>
    <div class="toggle">
      <a href="#" @click="onCollaspe()">
        <img src="@/assets/images/ic_collapse_blue.png" alt="collapse">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      collapse: false,
      activeIndex: 0,
      menuItems: [
        {
          class: "list-home",
          image: "ic_home",
          text: "首页"
        },
        {
          class: "list-chat",
          image: "ic_chat",
          text: "聊天室"
        },
        {
          class: "list-user",
          image: "ic_user",
          text: "用户"
        },
        {
          class: "list-ecommerce",
          image: "ic_ecommerce",
          text: "电商"
        },
        {
          class: "list-content",
          image: "ic_content",
          text: "内容"
        },
        {
          class: "list-label",
          image: "ic_label",
          text: "标签"
        },
        {
          class: "list-auto",
          image: "ic_auto",
          text: "自动回复"
        },
        {
          class: "list-task",
          image: "ic_task",
          text: "标配任务"
        },
        {
          class: "list-script",
          image: "ic_script",
          text: "自定义脚本"
        },
        {
          class: "list-bigdata",
          image: "ic_bigdata",
          text: "大数据"
        }
      ]
    };
  },
  methods: {
    onCollaspe() {
      this.collapse = !this.collapse;
      console.log("###", this.collapse);
    },
    imgUrl(imgName) {
      return require("@/assets/images/" + imgName + "_blue.png");
    },
    handleChangeMenu(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #eef0f5;

  .sidebar-list {
    transition: width 1s ease-out;
    .sidebar-list-item {
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: black;
        height: 44px;
        padding: 14px 0px;
        overflow: hidden;

        &:hover {
          background: #eef0f5;
        }

        img {
          width: 16px;
          height: 16px;
          margin: 0px 24px;
        }
        span {
          width: 76px;
          height: 16px;
          font-size: 12px;
          transition: width 0.3s ease-out;
          overflow: hidden;

          &.collapse {
            width: 0px;
          }
        }

        &.active {
          background: #0f7bf9;
          color: white;

          &.list-home {
            img {
              display: block;
              background: url("~@/assets/images/ic_home_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-chat {
            img {
              display: block;
              background: url("~@/assets/images/ic_chat_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-user {
            img {
              display: block;
              background: url("~@/assets/images/ic_user_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-ecommerce {
            img {
              display: block;
              background: url("~@/assets/images/ic_ecommerce_white.png")
                no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-content {
            img {
              display: block;
              background: url("~@/assets/images/ic_content_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-label {
            img {
              display: block;
              background: url("~@/assets/images/ic_label_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-auto {
            img {
              display: block;
              background: url("~@/assets/images/ic_auto_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-task {
            img {
              display: block;
              background: url("~@/assets/images/ic_task_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-script {
            img {
              display: block;
              background: url("~@/assets/images/ic_script_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
          &.list-bigdata {
            img {
              display: block;
              background: url("~@/assets/images/ic_bigdata_white.png") no-repeat;
              background-size: contain;
              padding-left: 16px;
            }
          }
        }
      }
    }
  }
  .toggle {
    margin-bottom: 17px;

    a {
      img {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>