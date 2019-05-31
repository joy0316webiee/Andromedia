<template>
  <div class="home-container">
    <div class="search-bar">
      <input type="text" placeholder="搜索">
      <v-button primary width="104px">上传</v-button>
      <v-button light width="104px">下载</v-button>
    </div>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menus" :key="index">
          <a
            href="#"
            :class="{active: activeMenu === index}"
            @click="activeMenu = index"
          >{{ item.text }}</a>
        </li>
      </ul>
    </div>
    <div class="docs">
      <div class="doc-item-wrapper" v-for="(doc, index) in docs" :key="index">
        <div class="doc-item">
          <img :src="require(`@/assets/images/ic_${doc.icon}.png`)">
          <div class="doc-description">
            <label>{{ doc.title }}</label>
            <br>
            <span>{{ doc.detail }}</span>
            <span>{{ doc.mark }}</span>
          </div>
          <v-button width="5px;" transparent :onClick="() => showTree = index">
            <img src="@/assets/images/ic_3dot.png" alt="3dot">
          </v-button>
          <v-tree-menu v-if="showTree === index" width="100px" :nodes="dropdown" :depth="0"></v-tree-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { text: "全部文件" },
        { text: "音配" },
        { text: "视频" },
        { text: "图片" },
        { text: "二维码" },
        { text: "小程序" },
        { text: "文字" },
        { text: "链接" },
        { text: "录像" }
      ],
      dropdown: [
        {
          label: "修改",
          action: () => {
            this.showTree = -1;
          }
        },
        {
          label: "重命名",
          action: () => {
            this.showTree = -1;
          }
        },
        {
          label: "删除",
          action: () => {
            this.showTree = -1;
          }
        },
        {
          label: "推送",
          action: () => {
            this.showTree = -1;
          }
        },
        {
          label: "查看日志",
          action: () => {
            this.showTree = -1;
          }
        }
      ],
      activeMenu: 1,
      docs: [
        {
          icon: "doc6",
          title: "微信朋友圈点赞!",
          detail: "批量点赞"
        },
        {
          icon: "doc7",
          title: "微信朋友圈点赞!",
          detail: "批量点赞"
        },
        {
          icon: "doc8",
          title: "语音",
          detail: "对淘宝的操作"
        },
        {
          icon: "doc9",
          title: "淘宝脚本",
          detail: "对淘宝的操作"
        },
        {
          icon: "doc10",
          title: "QQ脚本",
          detail: "对QQ的操作"
        },
        {
          icon: "doc11",
          title: "QQ脚本",
          detail: "对QQ的操作"
        },
        {
          icon: "doc12",
          title: "图片",
          detail: "对QQ的操作"
        },
        {
          icon: "doc13",
          title: "视频",
          detail: "对QQ的操作"
        }
      ],
      showTree: -1
    };
  },
  methods: {
    clickDropdown(index) {
      console.log(index);
      this.showTree = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  background-color: #f1f5f8;
  flex: auto;

  .menu {
    font-size: 16px;
    font-weight: 400;
    color: rgba(67, 71, 95, 1);
    margin-top: 20px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: inline;
        position: relative;

        a {
          display: inline;
          padding: 5px 30px;
          text-decoration: none;
          color: #43475f;

          &::after {
            content: "";
            width: 50%;
            height: 3px;
            position: absolute;
            bottom: -8px;
            left: 25%;
            background-color: transparent;
          }
          &:hover {
            color: #217af9;
            &::after {
              background-color: #217af9;
            }
          }
          &.active {
            color: #217af9;
            &::after {
              content: "";
              width: 50%;
              height: 3px;
              position: absolute;
              bottom: -8px;
              left: 25%;
              background-color: #217af9;
            }
          }
        }
      }
    }
  }
  .search-bar {
    margin-top: 30px;

    input {
      width: 184px;
      height: 30px;
      border-radius: 4px;
      margin-left: 20px;
      margin-right: 14px;
      padding: 10px;
      padding-left: 44px;
      font-size: 12px;
      font-weight: 300;
      border: none;
      background: white url("~@/assets/images/ic_search_grey.png") no-repeat 10%;
    }
    .v-button {
      margin-left: 14px;
    }
  }
  .docs {
    margin-top: 28px;
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    .doc-item-wrapper {
      width: 50%;
      padding: 4px 13px;
      .doc-item {
        background-color: white;
        display: flex;
        align-items: center;
        padding: 5px;
        position: relative;

        img {
          margin-top: 5px;
        }
        .doc-description {
          flex: auto;

          margin-left: 14px;
          label {
            font-size: 14px;
            font-weight: bold;
            color: rgba(67, 71, 95, 1);
          }
          span {
            font-size: 12px;
            font-weight: 400;
            color: rgba(186, 196, 209, 1);
          }
          span:nth-of-type(2) {
            font-size: 12px;
            font-weight: 400;
            color: black;
            float: right;
            margin-top: 3px;
            margin-right: 16px;
          }
        }
        .v-button {
          position: relative;
          margin-right: 20px;
          display: none;
        }
        & > .tree-menu {
          position: absolute;
          right: 20px;
          top: 55px;
        }
      }
    }
  }
}
</style>