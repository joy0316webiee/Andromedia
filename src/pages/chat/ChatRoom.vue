<template>
  <div class="page-chat">
    <div class="panel-left">
      <div class="search">
        <font-awesome-icon icon="search"/>
        <input type="text" placeholder="搜索">
        <button><font-awesome-icon icon="plus"/></button>
      </div>
      <ul class="list-user">
        <li v-for="(user, index) in users" :key="index" :class="{active: activeUser === index}" @click="activeUser = index">
          <img :src="require(`@/assets/images/avatars/${user.image}`)">
          <div class="user-description">
            <span class="user-name">{{user.name}}</span>
            <span class="user-time">{{user.time}}</span>
            <br>
            <span class="user-detail">{{user.detail}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="panel-center">
      <div class="panel-center-header">
        <span>大数据推荐    I   唤醒客户   I   分别发送</span>
        <div class="user-select">
          <div class="userinfo">
            <img src="@/assets/images/avatar.png" alt="avatar">
            <span>lola8713 <span class="grey">(3)</span></span>
          </div>
          <div class="dropdown">
            <div class="dropdown-toggle" @click="toggle()">
              <font-awesome-icon icon="chevron-down"/>
            </div>
            <div class="dropdown-menu" v-show="opened">
              <div class="dropdown-menu-body">
                <div class="item">
                  <img src="@/assets/images/avatar_01.png" alt="avatar">
                  <span>以上ahfdsif</span>
                </div>
                <div class="item">
                  <img src="@/assets/images/avatar.png" alt="avatar">
                  <span @click="popupProfile = !popupProfile">Lola8713</span>
                </div>
                <div class="item">
                  <img src="@/assets/images/avatar_02.png" alt="avatar">
                  <span>刘海</span>
                </div>
              </div>
              <div class="dropdown-menu-foot">
                <button>设置账号</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="conversation">
        <div class="log-container">
          <div class="log-header">
            <img src="@/assets/images/ic_memo.png"><span>大学生   I  设计专业   I  28岁</span>
          </div>
          <div class="logs">
            <div :class="{log: true, received: log.who === 'received', sent: log.who === 'sent'}" v-for="(log, index) in logs" :key="index">
              <img v-if="log.avatar" :src="require(`@/assets/images/avatars/${log.avatar}`)">
              <div v-if="log.text" class="text">
                {{log.text}}
              </div>
              <div v-if="log.multi" class="multi">
                <div v-if="log.multi.image" class="image">
                  <img :src="require(`@/assets/images/${log.multi.image}`)" alt="image">
                </div>
                <div v-if="log.multi.video" class="video">
                  <img class="thumbnail" :src="require(`@/assets/images/${log.multi.video}`)" alt="image">
                  <div class="mask">
                    <img class="play-icon" src="@/assets/images/ic_play.png"/>
                  </div>
                  <div class="controls">
                    <button>下载</button>
                    <button>打开</button>
                    <button>打开文件夹</button>
                    <button>转发</button>
                    <button>复制</button>
                  </div>
                </div>
              </div>
              <div v-if="log.link" class="link">
                <a :href="log.link">{{log.link}}</a>
              </div>
              <div v-if="log.files" class="file-container">
                <div v-for="(file, index1) in log.files" :key="index1" class="file">
                  <div class="file-content">
                    <img class="file-icon" :src="require(`@/assets/images/file/${file.ext}.png`)" alt="file-icon">
                    <img v-if="file.checked" class="checked" src="@/assets/images/ic_checked.png"/>
                    <div class="file-description">
                      <span class="file-name">{{file.name}}</span><span class="file-size">({{file.size}})</span>
                      <br>
                      <span class="file-detail">{{file.detail}}</span>
                    </div>
                  </div>
                  <div class="controls">
                    <button>下载</button>
                    <button>打开</button>
                    <button>打开文件夹</button>
                    <button>转发</button>
                    <button>复制</button>
                  </div>
                </div>
              </div>
              <div v-if="log.date" class="date"><span>{{log.date}}</span></div>
            </div>
          </div>
        </div>
        <div class="conv-input-box">
          <div class="tools">
            <button class="emoticon"><img src="@/assets/images/ic_emo_sun.png"></button>
            <button class="emoticon">
              <img src="@/assets/images/ic_emo_char.png" @click="popup1 = !popup1">

              <div class="popup1" v-show="popup1">
                <div class="popup-header">
                  <span class="title">常用语</span>
                  <div class="fill-space"></div>
                  <span class="plus">+ 增加新常用语</span> | <img class="setting" src="@/assets/images/ic_setting3.png" @click="settingMenu = !settingMenu">
                  <div class="dropdown-menu" v-show="settingMenu">
                    <div class="menu-item" @click="() => {settingMenu = false; deleteMode = true}">删除</div>
                    <div class="menu-item" @click="() => {settingMenu = false; deleteMode = false}">管理</div>
                  </div>
                </div>
                <div class="popup-body" @click="popup1 = false">
                  <div class="menu">我不在公司下，等回公司回你...<img src="@/assets/images/ic_close_circle_blue.png" v-show="deleteMode"></div>
                  <div class="menu">注册会员又注册了其他的名字...<img src="@/assets/images/ic_close_circle_blue.png" v-show="deleteMode"></div>
                  <div class="menu">无任何实质内容的灌水，也说...<img src="@/assets/images/ic_close_circle_blue.png" v-show="deleteMode"></div>
                  <div class="menu">注册会员又注册了其他的名字...<img src="@/assets/images/ic_close_circle_blue.png" v-show="deleteMode"></div>
                </div>
              </div>

            </button>
            <button class="emoticon"><img src="@/assets/images/ic_emo_file.png"></button>
            <button class="phone"><img src="@/assets/images/ic_emo_phone.png"></button>
            <button class="emoticon"><img src="@/assets/images/ic_emo_msg.png"></button>
            <button class="call"><img class="call" src="@/assets/images/ic_emo_call.png"></button>
            <button class="video"><img class="camera" src="@/assets/images/ic_emo_camera.png"></button>
            <button class="emoticon dot">
              <img src="@/assets/images/ic_dot.png">
              <img src="@/assets/images/ic_dot.png">
              <img src="@/assets/images/ic_dot.png">
            </button>
            <button class="emoticon user-group"><img src="@/assets/images/ic_users.png"></button>
          </div>
        </div>

      </div>
    </div>
    <div class="panel-right">
      <div class="search">
        <font-awesome-icon icon="search"/>
        <input type="text" placeholder="搜索">
        <button><font-awesome-icon icon="plus"/></button>
      </div>
      <div class="list-user">
        <ul>
          <li v-for="(candidate, index) in candidates" :key="index" :class="{active: activeCandidate === index}" @click="activeCandidate = index">
            <img :src="require(`@/assets/images/avatars/${candidate.image}`)">
            <div class="candidate-name">{{candidate.name}} - {{index}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel-right profile" v-show="popupProfile">
      <div class="panel1">
        <div>
          <button class="top-button">群</button>
        </div>
        <div class="align-center">
          <img class="profile-avatar" src="@/assets/images/avatars/avatar008.png" alt="avatar">
          <h2>Maciej Kalska</h2>
          <h3>广州 ，深圳 ，英国</h3>
          <h5>18837456789</h5>
          <h4>iwoekkkjs@gmail.com</h4>
          <v-dropdown class="center-button" text="操作" :nodes="dropdown1" light></v-dropdown>
        </div>
      </div>
      <div class="panel2">
        标签<br><br>
        <v-button light>大学生</v-button>
      </div>
      <div class="panel3">
        所在的设备    设备ID<br><br>
        <img src="@/assets/images/ic_bb.png" alt="icon">
        微信 134群
      </div>
      <div class="panel4">
        所在应用<br><br>
        <a href="#"><img src="@/assets/images/ic_twitter.png">&nbsp;&nbsp;Twitter</a>
        <a href="#"><img src="@/assets/images/ic_facebook.png">&nbsp;&nbsp;Facebook</a>
        <a href="#"><img src="@/assets/images/ic_instagram.png">&nbsp;&nbsp;Instagram</a>
        <a href="#"><img src="@/assets/images/ic_medium.png">&nbsp;&nbsp;Medium</a>
        <a href="#"><img src="@/assets/images/ic_behance.png">&nbsp;&nbsp;Behance</a>
        <a href="#"><img src="@/assets/images/ic_linkedin.png">&nbsp;&nbsp;Linkedin</a>
      </div>
      <div class="panel5">
        日志消费<br><br>
        <div class="berry">
          <img src="@/assets/images/ic_cherry.png">
          <div class="desc">
            <div class="title">
              东北大红苹果
            </div>
            <span class="date">2019.09.08</span>
            <span class="text1">大数据推送</span>
            <span class="text2">朋友圈</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="popup-image">
      <img :src="require(`@/assets/images/${popupImage}`)">
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeUser: -1,
      activeCandidate: -1,
      opened: false,
      users:[],
      candidates: [],
      logs: [],
      settingMenu: false,
      deleteMode: false,
      popup1: false,
      panelProfile: false,
      dropdown1: [
        {
          label: "编辑信息",
          action: () => {}
        },
        {
          label: "发任务",
          action: () => {}
        },
        {
          label: "添加",
          action: () => {}
        },
        {
          label: "朋友圈",
          action: () => {}
        },
        {
          label: "删除好友",
          action: () => {}
        },
        {
          label: "分组",
          action: () => {}
        },
        {
          label: "设置标签",
          action: () => {}
        }
      ],
      popupProfile: false
    }
  },
  methods: {
    fetchUsers: function() {
      const baseURI = "http://localhost:3000/roomUsers";
      this.$http.get(baseURI).then(result => {
        this.users = result.data;
      });
    },
    fetchCandidates: function() {
      const baseURI = "http://localhost:3000/roomCandidates";
      this.$http.get(baseURI).then(result => {
        this.candidates = result.data;
      });
    },
    fetchLogs: function() {
      const baseURI = "http://localhost:3000/roomLogs";
      this.$http.get(baseURI).then(result => {
        this.logs = result.data;
      });
    },
    toggle() {
      this.opened = !this.opened
    }
  },
  mounted: function() {
    this.fetchUsers();
    this.fetchCandidates();
    this.fetchLogs();
  }
};
</script>

<style lang="scss" scoped>
.page-chat {
  flex: auto;
  display: flex;
  .panel-left {
    width: 16%;
    background-color: #F1F5F8;
    height: 100%;
    border: 1px solid #F1F5F8;

    .search {
      padding: 14px;
      position: relative;
      display: flex;
      .fa-search {
        position: absolute;
        left: 25px;
        top: 20px;
      }
      input {
        padding: 10px;
        padding-left: 40px;
        height: 30px;
        width: 80%;
        background-color: white;
        border: none;
        font-size: 14px;
      }
      button {
        background-color: #007DF3;
        width: 20%;
        height: 30px;
        margin-left: 10px;
        border: none;
        svg {
          color: white;
        }
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 18px;
        display: flex;
        cursor: pointer;
        &:hover,
        &.active {
          background-color: white;
        }

        img {
          width: 48px;
          height: 48px;
        }
        .user-description {
          flex: auto;
          padding-left: 10px;

          .user-name,
          .user-time {
            font-size: 14px;
            color: #434343;
          }
          .user-time {
            float: right;
          }
          .user-detail {
            font-size: 12px;
            color: #A5A5A5;
          }
        }
      }
    }
  }
  .panel-center {
    width: 68%;
    height: 100%;
    .panel-center-header {
      height: 58px;
      border-bottom: 1px solid #EEF0F5;
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;

      span {
        font-size: 14px;
      }
      .user-select {
        flex: auto;
        display: flex;
        justify-content: flex-end;

        .userinfo {
          display: flex;
          align-items: center;
          margin-right: 10px;

          img {
            width: 30px;
            height: 30px;
          }
          span {
            color: #71716c;
            margin-left: 6px;
            font-size: 16px;
            span {
              color: lightgrey;
            }
          }
        }
        .dropdown {
          position: relative;
          display: flex;
          align-items: center;

          .dropdown-toggle {
            cursor: pointer;

            svg {
              margin-right: 3px;
            }
          }
          .dropdown-menu {
            width: 149px;
            height: 170px;
            position: absolute;
            right: 0;
            top: 30px;
            z-index: 9;
            box-shadow: 0 3px 7px rgba(0, 0, 0, 0.24);
            border-radius: 3px;
            background-color: #ffffff;

            .dropdown-menu-body {
              .item {
                display: flex;
                align-items: center;
                height: 35px;
                border-bottom: 1px solid #f2f5fa;
                padding: 6px 0px 6px 23px;
                cursor: pointer;

                &:hover {
                  background-color: #f2f5fa;
                }

                img {
                  width: 22px;
                  height: 22px;
                }
                span {
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 40px;
                  margin-left: 14px;
                }
              }
            }
            .dropdown-menu-foot {
              margin-top: 24px;
              text-align: center;

              button {
                width: 93px;
                height: 28px;
                border-radius: 3px;
                background-color: #0f7bf9;
                color: #ffffff;
                font-size: 12px;
                font-weight: 400;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .conversation {
      height: calc(100% - 58px);

      .log-container {
        padding: 10px;
        height: 65%;
        overflow: hidden;

        .log-header {
          padding: 10px;
          display: flex;
          align-items: center;

          img {
            width: 14px;
            height: 18px;
            margin-right: 10px;
          }
          span {
            font-size: 12px;
            color: #868686;
          }
        }
        .logs {
          height: 50vh;
          overflow-y: auto;

          .log {
            display: flex;
            padding: 10px;

            &.sent {
              justify-content: flex-end;
              .text, .link {
                background-color: #97F37D;
                &::before {
                  left: unset;
                  right: -4px;
                  transform: rotate(225deg);
                  background-color: #97F37D;
                }
              }
            }
            .date {
              margin: 0 auto;
              span {
                background-color: lightgrey;
                padding: 5px 10px;
                border-radius: 4px;
              }
            }
            .controls {
              display: flex;
              justify-content: flex-end;
              padding: 7px;

              button {
                background-color: transparent;
                border: none !important;
                font-size: 14px;
                padding: 5px;
                color: #529eff;
                cursor: pointer;
              }
            }
            & > img {
              width: 34px;
              height: 34px;
              margin-right: 10px;
            }
            & > div {
              display: flex;
              align-items: center;
              font-size: 14px;
              font-family: "Microsoft Ya Hei";
              font-weight: 400;
              padding: 7px 10px;
              border-radius: 4px;
            }
            .text, .link {
              border: 1px solid #F0F0F0;
              position: relative;

              &::before {
                content: "";
                width: 6px;
                height: 6px;
                border: 1px solid #F0F0F0;
                transform: rotate(45deg);
                position: absolute;
                left: -4px;
                background: white;
                border-top: none;
                border-right: none;
              }
            }
            
            .multi {
              .image, .video {
                cursor: pointer;
                margin-left: 10px;
                margin-right: 20px;
              }
              .image {
                border-radius: 5px;
              }
              .video {
                border-radius: 10px;
                border: 3px solid #F2F5FA;
                position: relative;

                .thumbnail {
                  border-radius: 7px;
                  border-bottom-right-radius: 0;
                  border-bottom-left-radius: 0;
                  width: 280px;
                  height: 126px;
                }
                .mask {
                  border-radius: 7px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 280px;
                  height: 126px;
                  background-color: rgba(0, 0, 0, 0.5);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
            }
            .file-container {
              .file {
                display: inline-block;
                margin-right: 20px;
                border-radius: 10px;
                border: 3px solid #F2F5FA;

                .file-content {
                  display: flex;
                  position: relative;
                  padding: 15px;

                  .file-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 5px;
                    margin-right: 10px;
                  }
                  .checked {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    position: absolute;
                    top: 45px;
                    left: 45px;
                  }
                  .file-description {
                    padding-top: 5px;
                    span {
                      font-size: 14px;
                    }
                    .file-size {
                      margin-left: 30px;
                      color: #888888;
                    }
                    .file-detail {
                      margin-top: 10px;
                    }
                  }
                }
                .controls {
                  border-top: 1px solid #EEF0F5;
                }
              }
            }
          }
        }
      }
      .conv-input-box {
        padding: 20px;
        height: 30%;
        border-top: 1px solid #EEF0F5;

        .tools {
          button {
            border: none;
            background-color: transparent;
            cursor: pointer;
          }
          .emoticon {
            margin-right: 20px;
            position: relative;

            img {
              width: 22px;
              height: 22px;
            }
          }
          .phone {
            margin-right: 10px;
            img {
              width: 17px;
              height: 22px;
            }
          }
          .call {
            margin-right: 10px;
            img {
              width: 17px;
              height: 17px;
            }
          }
          .video {
            margin-right: 20px;
            img {
              width: 20px;
              height: 14px;
            }
          }
          .dot {
            img {
              width: 3px;
              height: 3px;
              margin-right: 3px;
            }
          }
          .user-group {
            float: right;
            margin-right: 0;
          }
        }
      }
    }

  }
  .panel-right {
    width: 16%;
    height: 100%;
    background-color: #F1F5F8;
    border: 1px solid #F1F5F8;

    .search {
      padding: 14px;
      position: relative;
      display: flex;
      .fa-search {
        position: absolute;
        left: 25px;
        top: 20px;
      }
      input {
        padding: 10px;
        padding-left: 40px;
        height: 30px;
        width: 80%;
        background-color: white;
        border: none;
        font-size: 14px;
      }
      button {
        background-color: #919191;
        width: 20%;
        height: 30px;
        margin-left: 10px;
        border: none;
        svg {
          color: white;
        }
      }
    }
    .list-user {
      max-height: calc(100vh - 158px);
      overflow-y: auto;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          padding: 10px;
          cursor: pointer;

          &:hover,
          &.active {
            background-color: white;
          }
          img {
            width: 18px;
            height: 18px;
          }
          .candidate-name {
            padding-left: 10px;
            color: #6C6C6C;
            font-size: 12px;
          }
        }
      }
    }
  }
  * {
    margin: 0;
    padding: 0;
  }
  .profile {
    position: absolute !important;
    background-color: white !important;
    right: 0;
    color: #767C91;
    height: calc(100vh - 60px);
    .panel1 {
      padding: 20px 16px 10px 15px;
      border-bottom: 1px solid #EEF0F5;
      .top-button {
        background-color: #CCCCCC;
        padding: 5px 20px;
        color: white;
        font-size: 14px;
      }
      .profile-avatar {
        width: 80px;
        height: 80px;
        margin-top: 10px;
      }
      h2 {
        margin-top: 5px;
      }
      h3 {
        margin-top: 5px;
        color: lightgrey;
        font-size: 14px;
      }
      h5 {
        margin-top: 10px;
      }
      h4 {
        margin-top: 4px;
      }
      .center-button {
        border-radius: 4px;
        height: 30px;
        width: 130px;
        font-size: 14px;
        margin-top: 20px;
      }
    }
    .panel2 {
      padding: 20px 16px 10px 15px;
      border-bottom: 1px solid #EEF0F5;
    }
    .panel3 {
      padding: 20px 16px 10px 15px;
      border-bottom: 1px solid #EEF0F5;
      img {
        margin-right: 20px;
      }
    }
    .panel4 {
      padding: 20px 16px 10px 15px;
      border-bottom: 1px solid #EEF0F5;

      a {
        text-decoration: none;
        color: #414A60;
        display: flex;
        align-items: center;
        padding: 5px 0;
        font-size: 12px;
      }
    }
    .panel5 {
      padding: 20px 16px 10px 15px;
      
      .berry {
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
        .desc{
          flex: auto;
          .title {
            font-size: 14px;
          }
          .date, .text1, .text2 {
            color: #767C91;
            font-size: 12px;
          }
          .text1 {
            margin-left: 50px;
          }
          .text2 {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
.popup1 {
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.24);
  position: absolute;
  top: -210px;
  left: -140px;
  width: 322px;
  z-index: 1;
  background-color: white;
  text-align: left;

  .popup-header {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    position: relative;

    .title {
      font-size: 14px;
      color: #9FADCC;
    }
    .fill-space {
      flex: auto;
    }
    .plus {
      font-size: 14px;
      margin-right: 10px;
    }
    .setting {
      margin-left: 10px;
    }
    .dropdown-menu {
      box-shadow: 0 0px 5px rgba(0, 0, 0, 0.24);
      position: absolute;
      background-color: white;
      top: 40px;
      right: 0;
      .menu-item {
        padding: 10px;
        font-size: 12px;
        &:hover {
          background-color: #F3F9FF;
        }
      }
    }
  }
  .popup-body {
    .menu {
      border-top: 1px solid #eef0f5;
      padding: 10px 20px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 16px !important;
        height: 16px !important;
      }
      &:hover {
        background-color: #F3F9FF;
      }
    }
  }
  &::after {
    content: "";
    width:15px;
    height: 15px;
    border-radius: 3px;
    transform: rotate(45deg);
    background-color: white;
    position: absolute;
    bottom: -7px;
    left: 150px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.24);
  }
  
}
.popup-image {
    
  }

.align-center {
  text-align: center;
}
</style>