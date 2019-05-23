<template>
  <div class="page">
    <div class="panel account-management">
      <span class="panel-title">账号管理</span>
      <v-button class="btn-1" primary>添加账号</v-button>
      <v-button class="btn-2 dropdown">
        推送消息
        <div class="dropdown-menu">
          <div>
            <v-button>推送图文消息</v-button>
          </div>
          <div>
            <v-button>推送小程序</v-button>
          </div>
        </div>
      </v-button>
      <v-button class="btn-3 dropdown">
        设置自动回复
        <div class="dropdown-menu">
          <div>
            <v-button>群聊自动回复</v-button>
          </div>
          <div>
            <v-button>入群欢迎词</v-button>
          </div>
        </div>
      </v-button>
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
        <v-button>我的好友</v-button>
        <span class="panel-title">我的群</span>
        <v-button primary class="btn-1 dropdown">
          <span class="plus-symbol">+</span>好友
          <div class="dropdown-menu">
            <div>
              <v-button>加好友</v-button>
            </div>
            <div>
              <v-button>加群</v-button>
            </div>
            <div>
              <v-button>群里加好友</v-button>
            </div>
            <div>
              <v-button>附近加好友</v-button>
            </div>
          </div>
        </v-button>
      </div>
      <div class="search-status">
        <span>好友总数（34）</span>
        <img src="@/assets/images/ic_search.png">
      </div>
      <div class="list">
        <div class="list-item" v-for="(friend, index) in friends" :key="index">
          <!-- <img class="avatar" :src="friend.img" /> -->
          <img class="avatar" src="@/assets/images/avatar.png">
          <img class="online" src="@/assets/images/ic_phone.png" v-if="friend.online">
          <div>
            <div>
              <span :class="friend.vip ? 'red' : ''">{{ friend.name }}</span>
              ({{ friend.alias }})
              <span v-if="friend.vip" class="vip">&nbsp;VIP&nbsp;</span>
            </div>

            <div class="item-desc">{{ friend.desc }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel blog-list">
      <div class="panel-title">朋友圈</div>
      <div class="blog" v-for="(blog, index) in blogs" :key="index">
        <img class="avatar" :src="blog.writerImg">
        <div class="blog-container">
          <div class="writer">{{ blog.writer }}</div>
          <div class="blog-content" v-html="blog.content"></div>
          <div class="blog-footer">
            <span class="time">{{ blog.time }}</span>
            <button class="more">..</button>
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
      blogs: []
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
  .btn-1 {
    margin-left: 32px;
  }
  .btn-2 {
    margin-left: 18px;
    margin-top: 30px;
  }
  .btn-3 {
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
  padding: 6px 12px;
  .button-bar {
    .btn-1 {
      float: right;
    }
  }
  .search-status {
    margin-top: 16px;
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
.list-item {
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  .avatar {
    width: 50px;
    height: 50px;
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
    left: 38px;
    top: 34px;
  }
}
.blog-list {
  padding: 0 10px;
  flex: auto;
  .panel-title {
    padding: 14px 40px;
    width: unset;
    margin: 0;
    font-size: 12px;
  }
  .blog {
    padding: 10px 5px;
    display: flex;
    border-bottom: 2px solid #f7f7f7;
    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 5px;
    }
    .writer {
      font-size: 30px;
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
        margin-top: 10px;
      }
    }
    .more {
      background-color: #f8f8f8;
      float: right;
    }
  }
}
.dropdown {
  position: relative;
  opacity: 1 !important;
  z-index: 1;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  right: 5px;
  border-top: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
.dropdown-menu {
  display: none;
  background-color: white;
  position: absolute;
  width: 100%;
  left: 0;
  top: 40px;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.11);
  button {
    background-color: white;
    border-radius: 0;
  }
  button:hover {
    background-color: #f1f5f8;
    opacity: 1;
  }
}
</style>