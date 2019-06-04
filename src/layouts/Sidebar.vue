<template>
  <div :class="{sidebar: true, collapse: collapseSidebar}">
    <ul>
      <li
        v-for="(item, index) in menu"
        :key="index"
        :class="{active: activeMenu === index, collapse: collapseMenuItem}"
      >
        <a @click="handleActiveMenu(index, item.href)" @mouseover="hoverMenu">
          <img class="icon" v-show="item.icon" :src="getIcon(item.icon)" alt="icon">
          <label for>
            <span>{{ item.label }}</span>
            <font-awesome-icon v-show="item.child" icon="chevron-right"/>
          </label>
        </a>

        <ul v-show="item.child">
          <li v-for="(item1, index1) in item.child" :key="index1">
            <a
              :class="{active: activeMenu1 === index1 && activeMenu === index}"
              @click="handleActiveMenu1(index, index1, item1.href)"
              @mouseover="hoverMenu"
            >
              <img v-show="item1.icon" :src="getIcon(item1.icon, 2)" alt="icon">
              <span>{{ item1.label }}</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="collapse-button-wrapper">
        <button @click="toggleSidebar">
          <img src="@/assets/images/ic_collapse_blue.png" alt="collapse">
        </button>
      </li>
    </ul>
    <!-- <div class="btn-collapse">
      <font-awesome-icon icon="chevron-right"/>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: ["Router"],
  data() {
    return {
      menu: [
        {
          class: "list-home",
          icon: "ic_home",
          label: "首页",
          href: "/home/"
        },
        {
          icon: "ic_chat",
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
          icon: "ic_user",
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
          icon: "ic_ecommerce",
          label: "电商",
          href: "/ecommerce/"
        },
        {
          icon: "ic_content",
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
          icon: "ic_label",
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
          icon: "ic_auto",
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
          icon: "ic_task",
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
          icon: "ic_script",
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
          icon: "ic_bigdata",
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
      ],
      activeMenu: -1,
      activeMenu1: -1,
      activeMenu2: -1,
      collapseSidebar: false,
      collapseMenuItem: false
    };
  },
  methods: {
    getIcon(icon) {
      if (!icon) return;
      return require(`@/assets/images/${icon}_white.png`);
    },
    toggle(value) {
      value = !value;
    },
    handleActiveMenu(index, href) {
      if (this.activeMenu === index) {
        this.collapseMenuItem = !this.collapseMenuItem;
      } else {
        this.activeMenu = index;
        this.collapseMenuItem = false;
        this.activeMenu1 = -1;
      }
      href && this.Router(href);
    },
    handleActiveMenu1(index, index1, href) {
      this.activeMenu = index;
      this.activeMenu1 = index1;
      if (this.collapseSidebar) this.collapseMenuItem = true;
      else this.collapseMenuItem = false;
      href && this.Router(href);
    },
    handleActiveMenu2(index, href) {
      this.activeMenu2 = index;
      href && this.Router(href);
    },
    hoverMenu() {
      if (!this.collapseSidebar) return;
      this.collapseMenuItem = true;
    },
    toggleSidebar() {
      this.collapseSidebar = !this.collapseSidebar;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

$main_bg_color: #227bf9;
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
}
button {
  cursor: pointer;
}
.sidebar {
  min-width: 141.59px;
  background-color: $main_bg_color;
  transition: min-width ease 0.2s;
  &.collapse {
    max-width: 52px;
    min-width: 52px;

    & > ul {
      & > li {
        position: relative;
        & > a {
          width: 52px;
          overflow: hidden;
          text-overflow: ellipsis;
          & > img {
            margin-right: 20px;
            min-width: 22px;
          }
          label {
            min-width: 80px;
            position: relative;
            height: 20px;
          }
          // & > span {
          //   display: none;
          // }
          // & > svg {
          //   display: none;
          // }
        }
        & > ul {
          position: absolute;
          top: 0;
          left: 52px;
          width: 141.59px;
          z-index: 1;
          max-height: unset !important;
          width: 0px;
          li {
            a {
              height: 40px;
              padding: 20px;
            }
          }
        }
        &.collapse {
          ul {
            width: 0px !important;
            transition: width ease 0.3s;
          }
        }
        &.active {
          ul {
            width: 141.59px;
            transition: width ease 0.3s;
          }
        }
        &:hover {
          ul {
            width: 141.59px !important;
            transition: width ease 0.3s;
          }
        }
      }
    }
    .collapse-button-wrapper {
      width: 52px !important;
    }
  }

  & > ul {
    font-size: 12px;
    position: relative;
    padding-bottom: 36px;
    cursor: pointer;
    height: 100%;
    li {
      a {
        padding: 10px 10px 10px 15px;
        display: flex;
        align-items: center;
        position: relative;

        .icon {
          margin-right: 10px;
          width: 22px;
          height: 20px;
        }
        svg {
          position: absolute;
          right: 10px;
          transition: transform ease 0.3s;
        }
        &:hover {
          background-color: darken($main_bg_color, 5%);
        }
      }
      &.active {
        & > a {
          background-color: darken($main_bg_color, 20%);
        }
        svg {
          transform: rotate(90deg);
        }
        &.collapse {
          svg {
            transform: unset;
          }
          ul {
            max-height: 0px;
          }
        }
        ul {
          max-height: 800px;
          transition: max-height ease 0.5s;
        }
      }
      ul {
        background-color: darken($main_bg_color, 15%) !important;
        max-height: 0;
        overflow: hidden;

        li {
          a {
            padding-left: 60px;
            &.active {
              font-weight: bold;
              background-color: darken($main_bg_color, 30%) !important;
            }
          }
        }
      }
    }
    .collapse-button-wrapper {
      position: fixed !important;
      bottom: 10px;
      left: 0;
      width: 141px !important;
      bottom: 5px;
      width: 100%;
      text-align: center;
      transition: width ease 0.3s;
      button {
        width: 25px;
        height: 25px;
        padding: 0;
        background-color: transparent;
        border: none;
      }
    }
  }
  .btn-collapse {
    width: 10px;
  }
}
</style>