<template>
  <div :class="{sidebar: true, collapse: collapse}">
    <div class="sidebar-list">
      <div class="sidebar-list-item" v-for="(item, index) in menu" :key="index">
        <a
          :class="[item.class, {active: activeIndex === index}]"
          href="#"
          @click="handleChangeMenu(index)"
        >
          <img :src="imgUrl(item.image)" :alt="item.image">
          <span :class="{collapse: collapse}">{{item.label}}</span>
          <span class="right" v-if="item.child">></span>
        </a>
        <div class="submenu" v-if="activeIndex === index && item.child">
          <div class="sidebar-list-item" v-for="(item1, index1) in item.child" :key="index1">
            <a
              :class="{active: activeIndex1 === index1}"
              href="#"
              @click="handleChangeMenu1(index1)"
            >
              {{item1.label}}
              <span class="right" v-if="item1.child">></span>
            </a>
            <div class="submenu deep2" v-if="activeIndex1 === index1 && item1.child">
              <div class="sidebar-list-item" v-for="(item2, index2) in item1.child" :key="index2">
                <a
                  :class="{active: activeIndex2 === index2, deep2: true}"
                  href="#"
                  @click="handleChangeMenu2(index2)"
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
  data() {
    return {
      collapse: false,
      activeIndex: 0,
      activeIndex1: -1,
      activeIndex2: -1,
      menu: [
        {
          class: "list-home",
          image: "ic_home",
          label: "首页"
        },
        {
          class: "list-chat",
          image: "ic_chat",
          label: "聊天室"
        },
        {
          class: "list-user",
          image: "ic_user",
          label: "用户"
        },
        {
          class: "list-ecommerce",
          image: "ic_ecommerce",
          label: "电商"
        },
        {
          class: "list-content",
          image: "ic_content",
          label: "内容"
        },
        {
          class: "list-label",
          image: "ic_label",
          label: "标签"
        },
        {
          class: "list-auto",
          image: "ic_auto",
          label: "自动回复",
          child: [
            {
              label: "弹窗",
              child: [{ label: "child1" }, { label: "child2" }]
            },
            {
              label: "首页"
            }
          ]
        },
        {
          class: "list-task",
          image: "ic_task",
          label: "标配任务"
        },
        {
          class: "list-script",
          image: "ic_script",
          label: "自定义脚本"
        },
        {
          class: "list-bigdata",
          image: "ic_bigdata",
          label: "大数据"
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
    handleChangeMenu(index) {
      this.activeIndex = index;
      this.activeIndex1 = -1;
      this.activeIndex2 = -1;
    },
    handleChangeMenu1(index1) {
      this.activeIndex1 = index1;
      this.activeIndex2 = -1;
    },
    handleChangeMenu2(index2) {
      this.activeIndex2 = index2;
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

  .sidebar-list {
    transition: width 1s ease-out;
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
        &.active,
        &:hover {
          // background: white;
          // color: #217af9;
          background-color: darken(#217af9, 10%);
        }
      }
      .submenu {
        background-color: #217af9;
        z-index: 10;

        .sidebar-list-item {
          a {
            font-size: 12px;
            padding-left: 60px;
            border-bottom: 1px solid darken(#80b4ff, 20%);

            &.deep2 {
              padding-left: 90px;
            }
          }
        }
      }
      .right {
        position: absolute;
        right: 10px;
        width: unset;
      }
    }
  }
  &.collapse {
    width: 60px;
    .submenu {
      width: 155px;
      position: absolute;
      top: 0px;
      left: 57px;
      a {
        padding-left: 20px !important;
      }
      &.deep2 {
        left: 156px;
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