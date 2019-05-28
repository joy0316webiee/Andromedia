<template>
  <device-container bgGrey lightButton>
    <div class="suspension">
      <div class="suspension-gallery">
        <div class="suspension-gallery-item" v-for="index in 18" :key="index">
          <img src="@/assets/images/mobile.png" alt="mobile">
          <span>设备ID</span>
        </div>
      </div>
      <div class="suspension-detail">
        <div class="suspension-detail-image">
          <img src="@/assets/images/mobile.png" alt="mobile">
        </div>
      </div>
      <div class="suspension-controls">
        <v-dropdown right text="下载文件"/>
        <v-dropdown right text="上传文件"/>
        <v-dropdown right text="定位管理"/>
        <v-dropdown right text="IP 管理"/>
        <v-dropdown right text="虚拟配置"/>
        <v-dropdown right text="设备日记"/>
        <v-dropdown right text="登录账号" :nodes="registNodes"/>
        <v-dropdown right text="查看账号"/>
        <v-dropdown right text="退出账号"/>
        <v-dropdown right text="复制账号"/>
      </div>
    </div>
  </device-container>
</template> 

<script>
export default {
  name: "DeviceSuspension",
  data() {
    return {
      registNodes: [
        {
          label: "微信",
          action: undefined
        },
        {
          label: "微博",
          action: undefined
        },
        {
          label: "百度",
          action: undefined
        },
        {
          label: "QQ",
          action: undefined
        },
        {
          label: "登录小红书账号",
          action: undefined
        },
        {
          label: "抖音",
          action: undefined
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.suspension {
  padding-top: 15px;
  display: flex;

  .suspension-gallery {
    display: flex;
    flex-wrap: wrap;
    width: 960px;

    .suspension-gallery-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 30px;
      margin-bottom: 17px;

      img {
        width: 129px;
        height: 228px;
      }
      span {
        margin-top: 6px;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
  .suspension-detail {
    margin-left: 30px;

    .suspension-detail-image {
      img {
        width: 430px;
        height: 760px;
      }
    }
  }
  .suspension-controls {
    margin-left: 10px;
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-row-gap: 10px;
    height: 479px;
  }
}
</style>