<template>
  <div class="label-grouping">
    <div class="panel-left">
      <div class="search">
        <input type="text" placeholder="搜索">
        <div class="menu">
          <ul>
            <li v-for="(item, index) in menus" :key="index">
              <a
                href="#"
                :class="{active: activeMenu === index}"
                @click="item.action(index)"
              >{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="panel-label" v-show="activeMenu === 0">
        <div class="panel-label-header">
          属性
          <button @click="showTree3 = true">
            <img src="@/assets/images/ic_setting2.png" alt="setting icon">
          </button>
          <v-tree-menu v-if="showTree3" width="100px" :nodes="dropdown4" :depth="0"></v-tree-menu>
        </div>
        <div class="panel-label-body">
          <div
            class="row"
            v-for="(attribute, index) in attributes"
            :key="index"
            :class="{row: true, active: activeRow2 === index}"
            @click="activeRow2 = index"
          >
            <div class="circle"></div>
            <span>{{ attribute.name }}</span>
            <div class="btn-group">
              <button>
                <img src="@/assets/images/ic_pencil.png">
              </button>
              <button>
                <img src="@/assets/images/ic_trash.png">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-label" v-show="activeMenu === 1">
        <div class="panel-label-header">
          标签
          <button @click="showTree = true">
            <img src="@/assets/images/ic_setting2.png" alt="setting icon">
          </button>
          <v-tree-menu v-if="showTree" width="100px" :nodes="dropdown1" :depth="0"></v-tree-menu>
        </div>
        <div class="panel-label-body">
          <div
            class="row"
            :class="{row: true, active: activeRow === index}"
            v-for="(label, index) in labels"
            :key="index"
            @click="activeRow = index"
          >
            <div class="circle"></div>
            <span>{{ label.name }}</span>
            <div class="btn-group">
              <button>
                <img src="@/assets/images/ic_pencil.png">
              </button>
              <button>
                <img src="@/assets/images/ic_trash.png">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-right" v-show="activeMenu === 0">
      <div class="panel-right-header">
        标签
        <button @click="showTree4 = true">
          <img src="@/assets/images/ic_setting2.png" alt="setting icon">
        </button>
        <v-tree-menu v-if="showTree4" width="100px" :nodes="dropdown5" :depth="0"></v-tree-menu>
      </div>
      <div
        class="row"
        v-for="(labelItem, index) in labelList"
        :key="index"
        :class="{row: true, active: activeRow3 === index}"
        @click="activeRow3 = index"
      >
        <v-round-check></v-round-check>
        <span>{{ labelItem.name }}</span>
        <span>{{ labelItem.field1 }}</span>
        <span>{{ labelItem.field2 }}</span>
        <span>{{ labelItem.field3 }}</span>
        <div class="btn-group">
          <button>
            <img src="@/assets/images/ic_pencil.png">
          </button>
          <button>
            <img src="@/assets/images/ic_trash.png">
          </button>
        </div>
      </div>
    </div>
    <div class="panel-right" v-show="activeMenu === 1">
      <div class="panel-right-header">
        关键字
        <button @click="showTree1 = true">
          <img src="@/assets/images/ic_setting2.png" alt="setting icon">
        </button>
        <v-tree-menu v-if="showTree1" width="100px" :nodes="dropdown2" :depth="0"></v-tree-menu>
      </div>
      <div
        class="row"
        v-for="(keyword, index) in keywords"
        :key="index"
        :class="{row: true, active: activeRow1 === index}"
        @click="activeRow1 = index"
      >
        <v-round-check></v-round-check>
        <span>{{ keyword.name }}</span>
        <span>{{ keyword.field1 }}</span>
        <span>{{ keyword.field2 }}</span>
        <span>{{ keyword.field3 }}</span>
        <button @click="showTree2 = index">
          <img src="@/assets/images/ic_dot.png" alt="dot">
          <img src="@/assets/images/ic_dot.png" alt="dot">
          <img src="@/assets/images/ic_dot.png" alt="dot">
        </button>
        <v-tree-menu v-if="showTree2 === index" width="100px" :nodes="dropdown3" :depth="0"></v-tree-menu>
      </div>
    </div>
    <label-modal-add-keywords v-show="openModal === 0" @close="closeModal"></label-modal-add-keywords>
    <label-modal-add-tag v-show="openModal === 1" @close="closeModal"></label-modal-add-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTree: false,
      showTree1: false,
      showTree2: -1,
      showTree3: false,
      showTree4: false,
      openModal: -1,
      keywords: [],
      labelList: [],
      activeRow: -1,
      activeRow1: -1,
      activeRow2: -1,
      activeRow3: -1,
      dropdown1: [
        {
          label: "加新标签",
          action: () => {
            this.showTree = false;
          }
        },
        {
          label: "导入",
          action: () => {
            this.showTree = false;
          }
        },
        {
          label: "删除",
          action: () => {
            this.showTree = false;
          }
        }
      ],
      dropdown2: [
        {
          label: "加新关键字",
          action: () => {
            this.showTree1 = false;
            this.openModal = 0;
          }
        },
        {
          label: "导入",
          action: () => {
            this.showTree1 = false;
          }
        },
        {
          label: "删除",
          action: () => {
            this.showTree1 = false;
          }
        }
      ],
      dropdown3: [
        {
          label: "添加对象",
          action: () => {
            this.showTree2 = -1;
          }
        },
        {
          label: "添加范围",
          action: () => {
            this.showTree2 = -1;
          }
        },
        {
          label: "删除",
          action: () => {
            this.showTree2 = -1;
          }
        },
        {
          label: "执行历史",
          action: () => {
            this.showTree2 = -1;
          }
        }
      ],
      dropdown4: [
        {
          label: "加新属性",
          action: () => {
            this.showTree3 = false;
          }
        },
        {
          label: "导入",
          action: () => {
            this.showTree3 = false;
          }
        },
        {
          label: "删除",
          action: () => {
            this.showTree3 = false;
          }
        }
      ],
      dropdown5: [
        {
          label: "加新标签",
          action: () => {
            this.showTree4 = false;
            this.openModal = 1;
          }
        },
        {
          label: "导入",
          action: () => {
            this.showTree4 = false;
          }
        },
        {
          label: "删除",
          action: () => {
            this.showTree4 = false;
          }
        }
      ],
      labels: [
        { name: "未婚" },
        { name: "本科学历" },
        { name: "20-30" },
        { name: "设计" },
        { name: "金融" }
      ],
      attributes: [
        { name: "婚姻状态" },
        { name: "学历" },
        { name: "年龄" },
        { name: "职业" },
        { name: "行业" }
      ],
      activeMenu: 0,
      menus: [
        {
          name: "标签",
          action: index => {
            this.activeMenu = index;
          }
        },
        {
          name: "自动标签",
          action: index => {
            this.activeMenu = index;
          }
        }
      ]
    };
  },
  methods: {
    fetchKeywords() {
      const baseURI = "http://localhost:3000/keywords";
      this.$http.get(baseURI).then(result => {
        this.keywords = result.data;
      });
    },
    fetchLabelList() {
      const baseURI = "http://localhost:3000/labelList";
      this.$http.get(baseURI).then(result => {
        this.labelList = result.data;
      });
    },
    closeModal() {
      this.openModal = -1;
    }
  },
  mounted: function() {
    this.fetchKeywords();
    this.fetchLabelList();
  }
};
</script>

<style lang="scss" scoped>
.label-grouping {
  flex: auto;
  display: flex;

  button {
    cursor: pointer;
  }
  .panel-left {
    width: 380px;
    height: 100%;
    background-color: #f1f5f8;
    .search {
      padding: 14px 20px;
      background-color: white;
      input {
        width: 100%;
        height: 30px;
        margin-top: 0;
        border-radius: 4px;
        padding-right: 10px;
        padding-left: 44px;
        font-size: 12px;
        font-weight: 300;
        border: none;
        border: 1px solid #eef0f6;
        background: white url("~@/assets/images/ic_search_grey.png") no-repeat
          5%;
      }
      .tabs-wrapper {
        width: 100%;
        padding: 22px 60px 0 110px;
      }
      .menu {
        font-size: 16px;
        font-weight: 400;
        color: rgba(67, 71, 95, 1);
        margin-top: 20px;

        ul {
          text-align: center;
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
    }
    .panel-label {
      .panel-label-header {
        background: #e9eff4;
        padding: 18px 42px;
        font-size: 16px;
        font-weight: bold;
        color: rgba(67, 71, 95, 1);
        position: relative;
        button {
          background: transparent;
          border: none;
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
        }
        .tree-menu {
          position: absolute;
          top: 42px;
          right: 25px;
        }
      }
      .panel-label-body {
        .row {
          padding: 14px;
          cursor: pointer;
          &:hover,
          &.active {
            background-color: white;
            .btn-group {
              display: flex;
            }
          }
          .circle {
            background-color: transparent;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid #a3a7b3;
            display: inline-block;
            margin-right: 18px;
          }
          span {
            font-size: 12px;
          }
          .btn-group {
            display: none;
            width: 100px;

            float: right;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: space-between;
            button {
              background: transparent;
              border: none;
            }
          }
        }
      }
    }
  }
  .panel-right {
    flex: auto;

    .panel-right-header {
      background: #dfe8f3;
      padding: 18px 42px;
      font-size: 16px;
      font-weight: bold;
      color: rgba(67, 71, 95, 1);
      position: relative;
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        position: relative;
        top: 4px;
      }
      .tree-menu {
        position: absolute;
        top: 45px;
        left: 100px;
      }
    }
    .row {
      padding: 14px;
      cursor: pointer;
      position: relative;
      &:hover,
      &.active {
        background-color: #f1f5f8;
        .btn-group {
          display: flex;
        }
      }
      .round {
        position: relative;
        top: 4px;
        margin-right: 10px;
      }
      span {
        font-size: 12px;
        margin-right: 50px;
      }
      button {
        background: transparent;
        border: none;
        position: absolute;
        left: 600px;
        cursor: pointer;
        img {
          margin-right: 2px;
        }
      }
      .tree-menu {
        position: absolute;
        left: 600px;
        top: 30px;
      }
      .btn-group {
        display: none;
        position: absolute;
        left: 600px;
        button {
          position: static;
          margin-right: 30px;
        }
      }
      &:hover,
      &.active {
        .btn-group {
          display: inline;
        }
      }
    }
  }
}
</style>