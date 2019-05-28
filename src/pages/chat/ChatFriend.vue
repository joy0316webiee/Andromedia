<template>
  <div class="page">
    <div class="panel account-management">
      <span class="panel-title">账号管理</span>
      <v-button class="btn-1" primary>添加账号</v-button>
      <v-dropdown class="dd-btn-1" text="推送消息" :items="dropdownItems1"></v-dropdown>
      <v-dropdown class="dd-btn-2" text="设置自动回复" :items="dropdownItems2"></v-dropdown>
      
      <table style="margin-top: 20px;">
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
              <button>设置</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="panel my-group">
      <div class="button-bar">
        <v-button class="btn-1">我的好友</v-button>
        <span class="panel-title">我的群</span>
        <v-dropdown class="dd-btn-3" text="<span class='plus-symbol'>+</span>好友" :items="dropdownItems3"></v-dropdown>
      </div>
      <div class="search-status">
        <span>好友总数（34）</span>
        <img src="@/assets/images/ic_search.png">
      </div>
      <div class="list">
        <div class="list-item" v-for="(friend, index) in friends" :key="index">
          <img class="avatar" :src="friend.img" />
          <img class="online" src="/img/icons/ic_phone.png" v-if="friend.online">
          <div class="list-item-content">
            <div>
              <span :class="friend.vip ? 'red' : ''">{{ friend.name }}</span>
              ({{ friend.alias }})
              <span v-if="friend.vip" class="vip">&nbsp;VIP&nbsp;</span>
            </div>
            <div class="item-desc">{{ friend.desc }}</div>
          </div>
          <div class="list-item-menu">
            <span>
          </div>
        </div>
      </div>
    </div>
    <div class="panel blog-list">
      <div class="panel-title">朋友圈</div>
      <div class="blogs">
        <div class="blog" v-for="(blog, index) in blogs" :key="index">
          <img class="blog-avatar" :src="blog.writerImg">
          <div class="blog-container">
            <div class="blog-writer">{{ blog.writer }}</div>
            <div class="blog-content" v-html="blog.content"></div>
            <div class="blog-footer">
              <span class="time">{{ blog.time }}</span>
              <button class="more">..</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "ChatFriend",
  data() {
    return {
      users: [],
      friends: [],
      blogs: [],
      popupAddFriend: false,
      dropdownItems1: [
        { text: "推送图文消息", action: () => {} },
        { text: "推送小程序", action: () => {} }
      ],
      dropdownItems2: [
        { text: "群聊自动回复", action: () => {} },
        { text: "入群欢迎词", action: () => {} }
      ],
      dropdownItems3: [
        { text: "加好友", action: () => { this.popupAddFriend = true } },
        { text: "加群", action: () => {} },
        { text: "群里加好友", action: () => {} },
        { text: "附近加好友", action: () => {} }
      ]
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
    fetchBlogs: function() {
      const baseURI = "http://localhost:3000/blogs";
      this.$http.get(baseURI).then(result => {
        this.blogs = result.data;
      });
    }
  },
  mounted: function() {
    this.fetchUsers();
    this.fetchFriends();
    this.fetchBlogs();
  }
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
}
.account-management {
  width: 720px;
  padding-top: 30px;

  .btn-1 {
    margin-left: 32px;
  }
  .dd-btn-1 {
    margin-left: 18px;
  }
  .dd-btn-2 {
    margin-left: 18px;
  }
}
.panel-title {
  width: 72px;
  height: 18px;
  font-size: 18px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
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
  }
  tr > td:nth-child(2),
  tr > th:nth-child(2) {
    text-align: left;
  }
  thead {
    background-color: #f4f5f9;
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
  border: 2px solid #f1f5f8;
  padding: 6px 0px;

  .button-bar {
    .btn-1 {
      margin-left: 6px;
    }
    .dd-btn-3 {
      float: right;
      margin-right: 6px;

      button: {
        background-color: #227BF9;
      }
    }
  }
  .search-status {
    margin-top: 16px;
    padding: 0 6px;

    span {
      width: 78px;
      height: 12px;
      font-size: 12px;
      font-family: MicrosoftYaHeiLight;
      font-weight: 300;
      color: rgba(0, 0, 0, 1);
    }
    img {
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
    font-family: MicrosoftYaHeiLight;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
  }
  .vip {
    background-color: red;
    font-size: 8px;
    border-radius: 2px;
    color: white;
    font-weight: bold;
  }
}
.list {
  height: calc(100vh - 150px);
  overflow-y: auto;

  .list-item {
    padding-left: 6px;
    cursor: pointer;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .red {
      color: red;
    }
    .online {
      position: absolute;
      width: 10px;
      height: 16px;
      left: 30px;
      top: 34px;
    }
    &:hover {
      background-color: #EBEBEB;
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
    height: calc(100vh - 102px);
    overflow-y: auto;

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
          margin-top: 20px;
          img {
            width: calc(100% - 200px);
          }
        }
      }
      .more {
        background-color: #f8f8f8;
        float: right;
      }
    }
  }
}
.blog-content {
  img {
    width: calc(100% - 200px);
  }
}
</style>

<style lang="scss">
.popup-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, .6);
  z-index: 10;

  .popup {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);

    .popup-header {
      padding: 28px;

      .popup-header-title {
        margin-left: 14px;
        font-size: 16px;
        font-family: MicrosoftYaHei-Bold;
        font-weight: bold;
      }
      .popup-close-btn {
        float: right;
      }
    }
    .popup-body {
      padding: 10px 42px;

      .row {
        padding: 10px;

        label {
          font-size: 14px;
          font-family: MicrosoftYaHei-Bold;
          font-weight: bold;
        }
        input {
          height: 30px;
          font-size: 12px;
          padding: 10px;
        }
      }
    }
  }
}


.add-friend {
  width: 424px;
  background-color: white;
  #number {
    width: 232px;
    background-color: #F1F5F8;
    margin-left: 10px;
  }
  .search-icon {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
}
</style>