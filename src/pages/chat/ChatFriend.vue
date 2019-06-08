<template>
  <div class="page">
    <div class="panel account-management">
      <span class="panel-title">账号管理</span>
      <v-button class="btn-1" primary>添加账号</v-button>
      <v-dropdown class="dd-btn-1" text="推送消息" :nodes="dropdownItems1"></v-dropdown>
      <v-dropdown class="dd-btn-2" text="设置自动回复" :nodes="dropdownItems2"></v-dropdown>

      <table style="margin-top: 40px;">
        <thead>
          <tr>
            <th width="16%">ID</th>
            <th width="16%">微信号</th>
            <th width="16%">t3</th>
            <th width="16%">t4</th>
            <th width="16%">t5</th>
            <th width="20%">t6</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{user.id}}</td>
            <td>
              {{user.t1}}
              <br>
              {{user.t2}}
              <img :src="user.img" alt="arrow-down">
            </td>
            <td>{{user.t3}}</td>
            <td>{{user.t4}}</td>
            <td>{{user.t5}}</td>
            <td>
              <v-dropdown light text="设置" :nodes="dropdownItems5" width="92px"></v-dropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel my-group">
      <div class="button-bar">
        <v-button class="btn-1" :onClick="() => this.showList = 1">我的好友</v-button>
        <v-button class="btn-2" :onClick="() => this.showList = 2">我的群</v-button>
        <v-dropdown
          v-show="showList === 1"
          class="dd-btn-3"
          text="<span class='plus-symbol'>+</span>&nbsp;好友"
          :nodes="dropdownItems3"
        ></v-dropdown>
        <v-dropdown v-show="showList === 2" class="dd-btn-3 small" text="+" :nodes="dropdownItems6"></v-dropdown>
      </div>
      <div class="search-status">
        <span v-show="showList === 1">好友总数（34）</span>
        <span v-show="showList === 2">好友总数（34）</span>
        <img src="@/assets/images/ic_search.png">
      </div>
      <div class="list list-friends" v-if="showList === 1">
        <div v-for="(friend, index) in friends" :key="index" :class="{'list-item': true, active: activeIndex === index}" @click="activeIndex = index">
          <img class="avatar" :src="friend.avatar">
          <img class="online" src="@/assets/images/ic_phone.png" v-if="friend.online">
          <div class="list-item-content">
            <div>
              <span :class="friend.vip ? 'red' : ''">{{ friend.name }}</span>
              <span class="detail">({{ friend.alias }})</span>
              <span v-if="friend.vip" class="vip"><img src="@/assets/images/ic_vip.png" alt="vip"></span>
            </div>
            <div class="item-desc">{{ friend.desc }}</div>
          </div>
          <button class="list-item-menu" @click="friendClick(index)">
            <img src="@/assets/images/ic_arrow_down.png">
          </button>
          <v-tree-menu
            v-if="clickedFriend == index && opendMenu"
            class="dropdown4"
            :nodes="dropdownItems4"
            :toggle="toggleMenu"
            :depth="0"
          ></v-tree-menu>
        </div>
      </div>
      <div class="list list-groups" v-if="showList === 2">
        <div class="list-item" v-for="(group, index) in groups" :key="index">
          <img class="avatar" :src="group.avatar">
          <img class="online" src="@/assets/images/ic_phone.png">
          <div class="list-item-content">
            <div class="item-desc">{{ group.name }}</div>
          </div>
          <button class="list-item-menu" @click="groupClick(index)">
            <img src="@/assets/images/ic_arrow_down.png">
          </button>
          <v-tree-menu
            v-if="clickedGroup == index && opendMenu"
            class="dropdown4"
            :nodes="dropdownItems7"
            :toggle="toggleMenu"
            :depth="0"
          ></v-tree-menu>
        </div>
      </div>
    </div>
    <div class="panel blog-list" v-if="showBlogList">
      <div class="panel-title">朋友圈</div>
      <div class="blogs">
        <div class="blog">
          <img class="blog-avatar" src="/img/user/user1.png">
          <div class="blog-container">
            <div class="blog-writer">Lina</div>
            <div class="blog-content">
              <p class="image-text">
                <img src="@/assets/images/blog_image1.png">
                <span>&nbsp;[我的群]&nbsp;我的群我的!群我的,我的群群我的群</span>
              </p>
            </div>
            <div class="blog-footer">
              <span class="time">47 minutes ago</span>
              <button class="more">
                <img src="@/assets/images/ic_dot.png" alt="dot">
                <img src="@/assets/images/ic_dot.png" alt="dot">
              </button>
            </div>
          </div>
        </div>
        <div class="blog">
          <img class="blog-avatar" src="/img/user/user2.png">
          <div class="blog-container">
            <div class="blog-writer">A Elaine</div>
            <div class="blog-content">
              <p class="text">我的群我的!群我的</p>
              <img src="@/assets/images/blog_image2.png" alt="">
            </div>
            <div class="blog-footer">
              <span class="time">47 minutes ago</span>
              <button class="more">
                <img src="@/assets/images/ic_dot.png" alt="dot">
                <img src="@/assets/images/ic_dot.png" alt="dot">
              </button>
            </div>
          </div>
        </div>
        <div class="blog">
          <img class="blog-avatar" src="/img/user/user3.png">
          <div class="blog-container">
            <div class="blog-writer">群我的 Joanna</div>
            <div class="blog-content">
              <p class="text">我的群我的!群我的我的群我的!群我的我的群我的!群我的我的群我的!群我的</p>
              <img src="@/assets/images/blog_image3.png" alt="">
            </div>
            <div class="blog-footer">
              <span class="time">47 minutes ago</span>
              <button class="more">
                <img src="@/assets/images/ic_dot.png" alt="dot">
                <img src="@/assets/images/ic_dot.png" alt="dot">
              </button>
            </div>
          </div>
        </div>
        <div class="blog">
          <img class="blog-avatar" src="/img/user/user3.png">
          <div class="blog-container">
            <div class="blog-writer">群我的</div>
            <div class="blog-content">
              <p class="text">我的群我的!群我的我的群我的!群我的我的群我的!<br><br>群我的我的群我的!群我的</p>
              <img src="@/assets/images/blog_image4.png" alt="">
            </div>
            <div class="blog-footer">
              <span class="time">47 minutes ago</span>
              <button class="more">
                <img src="@/assets/images/ic_dot.png" alt="dot">
                <img src="@/assets/images/ic_dot.png" alt="dot">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel unknown1" v-if="!showBlogList">
      <div class="panel-title">群信息</div>
      <div class="dashboard">
        <div class="row">Title1</div>
        <div class="row">
          Title2
          <span class="success">Blue1</span>
          <span class="success">Blue2</span>
          <span class="success">Blue3</span>
        </div>
        <div class="row">String1</div>
        <div class="row avatars">
          <img src="/img/avatar/avatar1.png" alt>
          <img src="/img/avatar/avatar1.png" alt>
          <img src="/img/avatar/avatar1.png" alt>
          <img src="/img/avatar/avatar1.png" alt>
        </div>
        <div class="row">Search Result (372/500)</div>
        <div class="row">
          <radial-progress-bar
            :diameter="60"
            :completed-steps="61"
            :total-steps="100"
            :strokeWidth="3"
            startColor="#BDA3F1"
            stopColor="#BDA3F1"
            innerStrokeColor="#F3F3F4"
          >
            <p>61%</p>
            <p class="radial-detail">afd-228</p>
          </radial-progress-bar>
          <radial-progress-bar
            :diameter="60"
            :completed-steps="7"
            :total-steps="100"
            :strokeWidth="3"
            startColor="#92E2B9"
            stopColor="#92E2B9"
            innerStrokeColor="#F3F3F4"
          >
            <p>7%</p>
            <p class="radial-detail">afd-28</p>
          </radial-progress-bar>
          <radial-progress-bar
            :diameter="60"
            :completed-steps="50"
            :total-steps="100"
            :strokeWidth="3"
            startColor="#9ABDF0"
            stopColor="#9ABDF0"
            innerStrokeColor="#F3F3F4"
          >
            <p>61%</p>
            <p class="radial-detail">90-188</p>
          </radial-progress-bar>
          <radial-progress-bar
            :diameter="60"
            :completed-steps="26"
            :total-steps="100"
            :strokeWidth="3"
            startColor="#FAC067"
            stopColor="#FAC067"
            innerStrokeColor="#F3F3F4"
          >
            <p>26%</p>
            <p class="radial-detail">99</p>
          </radial-progress-bar>
        </div>
        <div class="row">
          <v-button class="right-button" primary>添加好友</v-button>
        </div>
        <div class="row">
          <v-round-check primary :onChange="onChangeCheckAll"/>
          <label>群成员（112）</label>
          <v-input-text label placeholder="搜索客户" width="200px"></v-input-text>
          <v-button class="right-button2" primary>添加好友</v-button>
        </div>
        <div class="group-friends-list">
          <div class="row" v-for="(friends, index) in 20" :key="index">
            <v-round-check primary :initState="index%5 === 0 ? false : true"/>
            <img class="avatar" src="/img/avatar/avatar1.png">
            <label class="friend-name">搜索客户</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Friend Dialog -->
    <chat-modal-add-friend v-show="openModal === 1" @close="closeModal"></chat-modal-add-friend>
    <chat-modal-add-group v-show="openModal === 2" @close="closeModal"></chat-modal-add-group>
    <chat-modal-add-friends v-show="openModal === 3" @close="closeModal"></chat-modal-add-friends>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
export default {
  components: {
    RadialProgressBar
  },
  name: "ChatFriend",
  data() {
    return {
      users: [],
      friends: [],
      groups: [],
      blogs: [],
      activeIndex: -1,
      dropdownItems1: [
        { label: "推送图文消息", action: () => {} },
        { label: "推送小程序", action: () => {} }
      ],
      dropdownItems2: [
        { label: "群聊自动回复", action: () => {} },
        { label: "入群欢迎词", action: () => {} }
      ],
      dropdownItems3: [
        {
          label: "加好友",
          action: () => {
            this.openModal = 1;
          }
        },
        { label: "加群", action: () => {} },
        { label: "群里加好友", action: () => {} },
        { label: "附近加好友", action: () => {} }
      ],
      dropdownItems4: [
        { label: "推送消息", action: () => {} },
        {
          label: "看朋友圈",
          action: () => {
            this.showBlogList = true;
          }
        },
        { label: "删除好友", action: () => {} }
      ],
      dropdownItems5: [
        { label: "编辑账号", action: () => {} },
        { label: "删除账号", action: () => {} },
        { label: "看好友", action: () => {} },
        { label: "看群", action: () => {} },
        { label: "配置设备", action: () => {} },
        { label: "停用", action: () => {} }
      ],
      dropdownItems6: [
        { label: "加好友", action: () => {} },
        {
          label: "加群",
          action: () => {
            this.openModal = 2;
          }
        },
        {
          label: "从群里加好友",
          action: () => {
            this.openModal = 3;
          }
        }
      ],
      dropdownItems7: [
        { label: "推送消息", action: () => {} },
        {
          label: "看朋友圈",
          action: () => {
            this.showBlogList = false;
          }
        },
        { label: "删除好友", action: () => {} }
      ],
      clickedFriend: -1,
      clickedGroup: -1,
      opendMenu: false,
      openModal: 0,
      showBlogList: true,
      showList: 1,
      completedSteps: 61,
      totalSteps: 100
    };
  },
  methods: {
    fetchUsers: function() {
      const baseURI = "http://localhost:3000/users";
      this.$http.get(baseURI).then(result => {
        this.users = result.data;
      });
    },
    fetchFriends: function() {
      const baseURI = "http://localhost:3000/friends";
      this.$http.get(baseURI).then(result => {
        this.friends = result.data;
      });
    },
    fetchGroups: function() {
      const baseURI = "http://localhost:3000/groups";
      this.$http.get(baseURI).then(result => {
        this.groups = result.data;
      });
    },
    fetchBlogs: function() {
      const baseURI = "http://localhost:3000/blogs";
      this.$http.get(baseURI).then(result => {
        this.blogs = result.data;
      });
    },
    friendClick(index) {
      this.clickedFriend = index;
      this.opendMenu = true;
    },
    groupClick(index) {
      this.clickedGroup = index;
      this.opendMenu = true;
    },
    toggleMenu() {
      this.opendMenu = !this.opendMenu;
    },
    closeModal() {
      this.openModal = 0;
    }
  },
  mounted: function() {
    this.fetchUsers();
    this.fetchFriends();
    this.fetchGroups();
    this.fetchBlogs();
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 10px;
    position: absolute;
    background-image: linear-gradient(#F3F6FD, #ffffff);
    z-index: -1;
  }
}
.account-management {
  width: 720px;
  padding-top: 30px;

  .btn-1 {
    margin-left: 32px;
  }
  .dd-btn-1 {
    margin-left: 18px;
    button {
      font-family: "PingFang Bold" !important;
    }
  }
  .dd-btn-2 {
    margin-left: 18px;
    button {
      font-family: "PingFang Bold" !important;
    }
  }
}
.panel-title {
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: "PingFang Bold";
  color: rgba(56, 59, 59, 1);
  margin-left: 48px;
  margin-top: 34px;
}
table {
  border-spacing: 0;
  font-size: 12px;
  width: 100%;

  th,
  td {
    text-align: center;
    padding: 10px;
    font-family: "PingFang Bold";
  }
  tr > td:nth-child(2),
  tr > th:nth-child(2) {
    text-align: left;
  }
  td{
    padding-top: 20px;
  }
  thead {
    background-color: #f4f5f9;
    tr {
      height: 34px;
      th {
        padding-top: 12px;
        padding-bottom: 10px;
        line-height: 1;
      }
    }
  }
  button {
    font-size: 12px;
    width: 92px;
    height: 32px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(238, 240, 245, 1);
    border-radius: 4px;
  }
  tr:hover {
    background-color: #f1f5f8;
  }
  tr.selected {
    background-color: #f1f5f8;
  }
  td > img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 6px;
    left: 12px;
    position: relative;
  }
}
button {
  cursor: pointer;
}
button:hover {
  opacity: 0.6;
}
.my-group {
  width: 410px;
  background-color: white;
  border: 2px solid #f1f5f8;
  

  .button-bar {
    padding: 5px 10px;
    .btn-1 {
      color: #63A2F4;
    }
    .btn-2 {
      margin-left: 18px;
    }
    .dd-btn-3 {
      float: right;
      margin-right: 6px;

      button: {
        background-color: #227bf9;
      }
      &.small {
        button {
          width: 30px;
        }
      }
    }
  }
  .search-status {
    margin-top: 16px;
    margin-bottom: 10px;
    padding: 0 6px;

    span {
      width: 78px;
      height: 12px;
      font-size: 12px;
      font-weight: 300;
      color: rgba(0, 0, 0, 1);
    }
    img {
      margin-left: 10px;
      width: 16px;
      height: 16px;
    }
  }
  .plus-symbol {
    font-size: 28px;
    line-height: 9px;
    top: 2px;
    position: relative;
  }
  .panel-title {
    width: 36px;
    height: 12px;
    font-size: 12px;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
  }
  .vip {
    position: relative;
    margin-left: 3px;
    img {
      width: 20px;
      height: 10px;
      position: absolute;
      top: 4px;
    }
  }
}
.list {
  .list-item {
    padding-left: 6px;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .red {
      color: #FF5C60;
    }
    .online {
      position: absolute;
      width: 10px;
      height: 16px;
      left: 35px;
      top: 34px;
    }
    .detail {
      color: #7F7F7F;
    }
    .item-desc{
      color: #7F7F7F;
    }
    &:hover {
      background-color: #f8f8f8;
    }
    &.active {
      background-color: #ebebeb;
      .list-item-menu {
        display: flex;
      }
    }
    .list-item-menu {
      display: none;
      position: absolute;
      right: 10px;
      background-color: inherit;
      // border-radius: 50%;
      width: 20px;
      height: 20px;
      justify-content: center;
      align-items: center;
      // background-color: white;

      img {
        height: 3px;
        cursor: pointer;
      }
    }
    .dropdown4 {
      position: absolute;
      top: 50px;
      right: 10px;
    }
  }
}
.blog-list {
  padding: 0 10px;
  padding-right: 20px;
  width: 400px;

  .panel-title {
    padding: 14px 40px;
    width: unset;
    margin: 0;
    font-size: 12px;
  }
  .blogs {
    
    .blog {
      padding: 10px 5px;
      display: flex;
      border-bottom: 2px solid #f7f7f7;

      .blog-avatar {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 5px;
      }
      .blog-writer {
        font-size: 20px;
        color: #537098;
      }
      .time {
        font-size: 12px;
        color: #929292;
      }
      .blog-container {
        flex: auto;
        font-size: 16px;

        .blog-content {
          margin-top: 15px;
          font-family: "PingFang Bold";
          font-size: 14px;
          p {
            margin: 0;
            font-family: "PingFang Bold";
            font-size: 14px;
          }
          
          .image-text {
            background-color: #F7F7F7;
            padding: 3px;
            span {
              padding: 5px;
              font-family: "PingFang Bold";
              font-size: 14px;
            }
          }
          .text {
            margin-bottom: 10px;
          }
        }
        .blog-footer {
          margin-top: 16px;
        }
      }
      .more {
        background-color: #f8f8f8;
        float: right;
        padding-bottom: 5px;
        img {
          &:first-child{
            margin-right: 5px;
          }
        }
      }
    }
  }
}


.unknown1 {
  padding: 20px;
  padding-bottom: 0;

  .panel-title {
    margin: 0;
  }
  .dashboard {
    margin-top: 20px;

    .row {
      margin-bottom: 10px;

      .right-button {
        margin-left: 350px;
      }
      .input-text {
        display: inline-block;
      }
      label {
        margin-left: 15px;
      }
      .right-button2 {
        margin-top: -2px;
        margin-left: 24px;
      }
      .avatar {
        width: 30px;
        height: 30px;
        position: relative;
        top: 10px;
        margin-left: 10px;
      }
      .friend-name {
        color: #6c6c6c;
      }
    }
    .group-friends-list {
      
    }
    .success {
      padding: 3px;
      background-color: #3cb7f5;
      color: white;
      margin-right: 10px;
    }
    .avatars {
      img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
      }
    }
    .radial-progress-container {
      display: inline-block;
      .radial-detail {
        position: absolute;
        bottom: -30px;
      }
    }
  }
}
* {
  font-size: 12px;
}
</style>

<style lang="scss">
.dd-btn-3 {
  &.small {
    button {
      width: 50px;
    }
  }
}
</style>