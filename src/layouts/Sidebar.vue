<template>
  <div :class="{sidebar: true, collapse: collapse}">
    <div class="sidebar-list">
      <div class="sidebar-list-item" v-for="(item, index) in menu" :key="index">
        <a
          :class="[item.class, {active: activeIndex === index, hover: hoverIndex === index, collapse: collapse1}]"
          href="#"
          @click="handleChangeMenu(index, item.href)"
          @mouseover="hoverMenu(index)"
          @mouseout="hoverMenu(-1)"
        >
          <img :src="imgUrl(item.image)" :alt="item.image">
          <span :class="{collapse: collapse}">{{item.label}}</span>
          <font-awesome-icon class="right" v-if="item.child && !collapse" icon="chevron-right"/>
        </a>
        <div
          :class="{submenu: true, display: ((activeIndex === index || (hoverIndex === index && collapse)) && item.child && !collapse1)}"
        >
          <div class="sidebar-list-item" v-for="(item1, index1) in item.child" :key="index1">
            <a
              :class="{active: activeIndex1 === index1, hover: hoverIndex1 === index1}"
              href="#"
              @click="handleChangeMenu1(index, index1, item1.href)"
              @mouseover="hoverMenu1(index, index1)"
              @mouseout="hoverMenu1(index, -1)"
            >
              {{item1.label}}
              <font-awesome-icon class="right" v-if="item1.child" icon="chevron-right"/>
            </a>
            <div
              class="submenu deep2"
              v-show="(activeIndex1 === index1 || (hoverIndex1 === index1 && collapse)) && item1.child"
            >
              <div class="sidebar-list-item" v-for="(item2, index2) in item1.child" :key="index2">
                <a
                  :class="{active: activeIndex2 === index2, hover: hoverIndex2 === index2, deep2: true}"
                  href="#"
                  @click="handleChangeMenu2(index, index1, index2)"
                  @mouseover="hoverMenu2(index, index1, index2)"
                  @mouseout="hoverMenu2(index, index1, -1)"
                >{{item1.label}}</a>
              </div>
            </div>
          </div>
        </div>
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
  props: ["Router"],
  data() {
    return {
      collapse: false,
      activeIndex: 0,
      activeIndex1: -1,
      activeIndex2: -1,
      hoverIndex: -1,
      hoverIndex1: -1,
      hoverIndex2: -1,
      collapse1: true,
      collapse2: true,
      collapse3: true,
      menu: [
        {
          class: "list-home",
          image: "ic_home",
          label: "首页",
          href: "/home/"
        },
        {
          class: "list-chat",
          image: "ic_chat",
          label: "聊天室",
          child: [
            {
              label: "好友",
              href: "/chat/friend"
            },
            {
              label: "聊天室",
              href: "/chat/room"
            }
          ]
        },
        {
          class: "list-user",
          image: "ic_user",
          label: "用户",
          child: [
            {
              label: "基本信息",
              href: "/personal/account"
            },
            {
              label: "个人信息",
              href: "/personal/customer"
            },
            {
              label: "用户",
              href: "/personal/user"
            }
          ]
        },
        {
          class: "list-ecommerce",
          image: "ic_ecommerce",
          label: "电商"
        },
        {
          class: "list-content",
          image: "ic_content",
          label: "设备",
          child: [
            {
              label: "拷贝",
              href: "/device/list"
            },
            {
              label: "设备",
              href: "/device/gallery"
            },
            {
              label: "悬浮",
              href: "/device/suspension"
            },
            {
              label: "详细",
              href: "/device/details"
            },
            {
              label: "配置",
              href: "/device/manage"
            },
            {
              label: "恢復",
              href: "/device/restore"
            }
          ]
        },
        {
          class: "list-label",
          image: "ic_label",
          label: "标签",
          child: [
            {
              label: "日志",
              href: "/trace/home"
            },
            {
              label: "文件管理",
              href: "/trace/manage"
            }
          ]
        },
        {
          class: "list-auto",
          image: "ic_auto",
          label: "自动回复",
          child: [
            {
              label: "弹窗",
              href: "/auto/replyblast"
            },
            {
              label: "机器人",
              href: "/auto/replyrobot"
            }
          ]
        },
        {
          class: "list-task",
          image: "ic_task",
          label: "标配任务",
          child: [
            {
              label: "商品",
              href: "/task/goods"
            },
            {
              label: "订单",
              href: "/task/order"
            }
          ]
        },
        {
          class: "list-script",
          image: "ic_script",
          label: "自定义脚本",
          child: [
            {
              label: "编辑脚本",
              href: "/code/edit"
            },
            {
              label: "运行脚本",
              href: "/code/run"
            }
          ]
        },
        {
          class: "list-bigdata",
          image: "ic_bigdata",
          label: "大数据",
          child: [
            {
              label: "大数据",
              href: "/bigdata/home"
            },
            {
              label: "搜索",
              href: "/bigdata/search"
            }
          ]
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
      return require("@/assets/images/" + imgName + "_white.png");
    },
    handleChangeMenu(index, href) {
      if (this.activeIndex !== index) {
        this.activeIndex1 = -1;
        this.activeIndex2 = -1;
      }
      this.activeIndex = index;
      this.collapse1 = !this.collapse1;
      if (this.collapse) this.collapse1 = false;
      // Routing
      href && this.Router(href);
    },
    handleChangeMenu1(index, index1, href) {
      if (this.activeIndex1 !== index1) {
        this.activeIndex2 = -1;
      }
      this.activeIndex = index;
      this.activeIndex1 = index1;
      if (this.collapse) this.collapse1 = true;
      console.log(this.collapse1);
      this.collapse2 = !this.collapse2;
      // Routing
      href && this.Router(href);
    },
    handleChangeMenu2(index, index1, index2) {
      this.activeIndex = index;
      this.activeIndex1 = index1;
      this.activeIndex2 = index2;
      this.collapse3 = !this.collapse3;
    },
    hoverMenu(index) {
      this.hoverIndex = index;
      this.hoverIndex1 = -1;
      this.hoverIndex2 = -1;
    },
    hoverMenu1(index, index1) {
      this.hoverIndex = index;
      this.hoverIndex1 = index1;
      this.hoverIndex2 = -1;
    },
    hoverMenu2(index, index1, index2) {
      this.hoverIndex = index;
      this.hoverIndex1 = index1;
      this.hoverIndex2 = index2;
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
  background-color: #217af9;
  min-width: 143px;
  width: 143px;
  transition: width 0.3s ease-out;

  .sidebar-list {
    // transition: width 1s ease-out;
    width: 100%;

    .sidebar-list-item {
      position: relative;

      // &.active {
      //   // background: white;
      //   // color: #217af9;
      //   background-color: darken(#217af9, 10%);
      // }
      // &:hover {
      //   background-color: darken(#217af9, 5%);
      // }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        height: 44px;
        padding: 14px 0px;
        overflow: hidden;

        img {
          width: 16px;
          height: 16px;
          margin: 0px 12px 0 20px;
        }
        span {
          width: 78px;
          height: 16px;
          font-size: 12px;
          transition: width 0.3s ease-out;
          overflow: hidden;

          &.collapse {
            width: 0px;
          }
        }

        &:hover {
          background-color: darken(#217af9, 5%);
        }
        &.active,
        &.active:hover,
        &.active.hover {
          // background: white;
          // color: #217af9;
          background-color: darken(#217af9, 15%);
          &::before {
            content: " ";
            width: 3px;
            height: 45px;
            background-color: white;
            position: absolute;
            left: 0;
          }
        }
        &.active {
          .fa-chevron-right {
            transition: transform ease 0.3s;
            transform: rotate(90deg);
          }
          &.collapse {
            .fa-chevron-right {
              transition: transform ease 0.3s;
              transform: rotate(0deg);
            }
          }
        }
      }
      .submenu {
        z-index: 10;
        background-color: darken(#217af9, 10%);
        transition: all ease 0.3s;
        max-height: 0;
        overflow: hidden;

        &.display {
          max-height: calc(100px);
        }

        .sidebar-list-item {
          a {
            font-size: 12px;
            padding-left: 60px;

            &:hover,
            &.hover {
              background-color: darken(#217af9, 5%);
            }
            &.active:hover {
              background-color: unset;
            }
            &.active {
              font-weight: bold;
              &::before {
                width: 0;
              }
              background-color: unset;
            }

            &.deep2 {
              padding-left: 90px;
            }
          }
        }
      }
      .right {
        position: absolute;
        right: 10px;
        font-size: 12px;
        width: unset;
      }
    }
  }
  &.collapse {
    width: 60px;
    min-width: 60px !important;

    a {
      .fa-chevron-right {
        transform: unset !important;
      }
    }
    .submenu {
      width: 0;
      position: absolute;
      top: 0px;
      left: 60px;
      max-height: unset !important;

      a {
        padding-left: 20px !important;
      }
      &.deep2 {
        left: 156px;
      }
      &.display {
        width: 155px;
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