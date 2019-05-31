<template>
  <div class="home-container">
    <div class="left">
      <div class="search-bar">
        <label>任务脚本</label>
        <input type="text" placeholder="搜索">
        <v-dropdown :text="selTxt" :nodes="dropdown1" light width="62px"></v-dropdown>
        <v-button light width="80px">自定义脚本</v-button>
        <v-button primary width="80px">添加任务</v-button>
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
        <div class="doc-item-wrapper" v-for="(doc, index) in docs">
          <div class="doc-item">
            <img :src="require(`@/assets/images/ic_${doc.icon}.png`)">
            <div class="doc-description">
              <label>{{ doc.title }}</label>
              <label>{{ doc.time }}</label>
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
    <div class="right">
      <h3>设备日志</h3>
      <div class="search-bar">
        <label>设备日志</label>
        <input type="text" placeholder="设备日志">
        <label>志</label>
        <input type="text" placeholder="设备日志">
        <label>日志</label>
        <v-dropdown :text="`-${selTxt1}-`" :nodes="dropdown2" width="80px"></v-dropdown>
        <label>志志</label>
        <input type="text" placeholder="日志">
        <input type="text" placeholder="设备日志">
        <label>设备日志</label>
        <input type="text" placeholder="设备ID">
        <label>设备日</label>
        <input type="text" placeholder="设备日">
        <label>设备日</label>
        <input type="text" placeholder="设备日">
        <label>设备日志</label>
        <input type="text" placeholder="设备日志">
        <v-button primary width="70px">
          <font-awesome-icon icon="search"/>&nbsp;设备
        </v-button>
      </div>
      <table>
        <thead>
          <tr>
            <td width="10%">
              <input type="checkbox">
            </td>
            <td width="15%">设备日志</td>
            <td width="25%">设备日志</td>
            <td width="20%">设备日</td>
            <td width="15%">设备</td>
            <td width="15%">设备日志</td>
            <td width="20%">设备日</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in tData" :key="index">
            <td>
              <img :src="require(`@/assets/images/${row.icon}`)" alt="icon">
            </td>
            <td>
              <span>{{ row.f1 }}</span>
              <br>
              <br>
              <span>{{ row.f2 }}:&nbsp;</span>
              <span>{{ row.f3 }}</span>
            </td>
            <td>{{ row. time }}</td>
            <td class="align-left">{{ row. number }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.date }}</td>
            <td>
              <v-dropdown light text="操作" :nodes="dropwdown3" width="100px"></v-dropdown>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <br>
      <v-pagination
        :vstyle="paginationStyle"
        :items="['1', '2', '3', '4', '5', '6', '7', '...', '99', '100']"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { text: "设备日志" },
        { text: "任务日志" },
        { text: "大数据推送" },
        { text: "用户" },
        { text: "商品日志" }
      ],
      activeMenu: 1,
      selTxt: "全部",
      selTxt1: "全部",
      dropdown1: [
        {
          label: "全部",
          action: () => {
            this.selTxt = "全部";
          }
        },
        {
          label: "QQ",
          action: () => {
            this.selTxt = "QQ";
          }
        },
        {
          label: "淘宝",
          action: () => {
            this.selTxt = "淘宝";
          }
        },
        {
          label: "通用",
          action: () => {
            this.selTxt = "通用";
          }
        }
      ],
      dropdown2: [
        {
          label: "全部",
          action: () => {
            this.selTxt1 = "全部";
          }
        },
        {
          label: "QQ",
          action: () => {
            this.selTxt1 = "QQ";
          }
        },
        {
          label: "淘宝",
          action: () => {
            this.selTxt1 = "淘宝";
          }
        },
        {
          label: "通用",
          action: () => {
            this.selTxt1 = "通用";
          }
        }
      ],
      dropwdown3: [
        {
          label: "编辑",
          action: () => {}
        },
        {
          label: "运行设备",
          action: () => {}
        },
        {
          label: "复制",
          action: () => {}
        },
        {
          label: "删除",
          action: () => {}
        },
        {
          label: "分组",
          action: () => {}
        }
      ],
      dropdown: [
        {
          label: "添加任务",
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
          label: "查看运行",
          action: () => {
            this.showTree = -1;
          }
        },
        {
          label: "执行历史",
          action: () => {
            this.showTree = -1;
          }
        }
      ],
      docs: [
        {
          icon: "doc1",
          title: "微信朋友圈点赞!",
          detail: "批量点赞"
        },
        {
          icon: "doc1",
          title: "微信朋友圈点赞!",
          detail: "批量点赞",
          time: "任务：34"
        },
        {
          icon: "doc2",
          title: "淘宝脚本",
          detail: "对淘宝的操作"
        },
        {
          icon: "doc2",
          title: "淘宝脚本",
          detail: "对淘宝的操作"
        },
        {
          icon: "doc3",
          title: "QQ脚本",
          detail: "对QQ的操作"
        },
        {
          icon: "doc3",
          title: "QQ脚本",
          detail: "对QQ的操作"
        },
        {
          icon: "doc4",
          title: "百度脚本",
          detail: "对百度的操作"
        },
        {
          icon: "doc4",
          title: "百度脚本",
          detail: "对百度的操作"
        },
        {
          icon: "doc5",
          title: "通用",
          detail: "【自定义】对百度的操作"
        }
      ],
      showTree: -1,
      tData: [],
      paginationStyle: {
        wrapper: {
          width: "100%"
        },
        button: {
          fontSize: "12px",
          width: "34px",
          height: "32px",
          marginRight: "4px"
        }
      }
    };
  },
  methods: {
    fetchTData() {
      const baseURI = "http://localhost:3000/logs";
      this.$http.get(baseURI).then(result => {
        this.tData = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchTData();
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  flex: auto;
  display: flex;

  .left {
    width: 700px;
    background-color: #f1f5f8;

    .menu {
      font-size: 14px;
      font-weight: 400;
      color: rgba(67, 71, 95, 1);
      margin-top: 25px;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: inline;
          position: relative;

          a {
            display: inline;
            padding: 5px 14px;
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

      label {
        font-size: 14px;
        font-weight: bold;
        color: rgba(67, 71, 95, 1);
        margin-left: 14px;
      }
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
        background: white url("~@/assets/images/ic_search_grey.png") no-repeat
          10%;
      }
      select {
        width: 62px;
        height: 28px;
        background: rgba(255, 255, 255, 1);
        border-radius: 4px;
        font-size: 13px;
        font-weight: 400;
        color: rgba(67, 71, 95, 1);
        border: none;
      }
      .v-button {
        margin-left: 24px;
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
            label:nth-of-type(2) {
              font-size: 12px;
              font-weight: 400;
              color: rgba(100, 219, 118, 1);
              position: absolute;
              top: 18px;
              right: 20px;
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
          &:hover {
            .v-button {
              display: inline-block;
            }
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
  .right {
    padding: 40px;
    padding-right: 10%;
    flex: auto;
    h3 {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      color: rgba(67, 71, 95, 1);
    }
    .search-bar {
      margin-top: 40px;
      label {
        font-size: 12px;
        font-weight: bold;
        color: rgba(67, 71, 95, 1);
        margin-right: 10px;
      }
      input {
        height: 30px;
        font-size: 12px;
        margin-right: 15px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
      }
      input:nth-of-type(1) {
        width: 135px;
      }
      input:nth-of-type(2) {
        width: 135px;
      }
      input:nth-of-type(3) {
        width: 80px;
      }
      input:nth-of-type(4) {
        width: 270px;
        margin-right: 0;
      }
      input:nth-of-type(5) {
        width: 64px;
      }
      input:nth-of-type(6) {
        width: 128px;
      }
      input:nth-of-type(7) {
        width: 128px;
      }
      input:nth-of-type(8) {
        width: 250px;
      }
      .dropdown {
        margin-right: 15px;
      }
    }
    table {
      margin-top: 20px;
      border-spacing: 0;
      width: 100%;
      thead {
        background-color: #f4f5f9;
        tr {
          td {
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 14px;
          }
        }
      }
      tbody {
        height: calc(100vh - 800px);
        overflow: auto;
        tr {
          &:hover {
            background-color: #f0f5f8;
          }
        }
      }
      tr {
        td {
          border-bottom: 1px solid #e6e6e6;
          font-size: 12px;
          img {
            margin-top: 12px;
          }
          text-align: center;
          &.align-left {
            text-align: left;
          }
          &.align-right {
            text-align: left;
          }
          span:nth-of-type(2) {
            color: #b7afab;
          }
        }
      }
    }
  }
}
</style>