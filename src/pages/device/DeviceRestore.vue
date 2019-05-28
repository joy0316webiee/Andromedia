<template>
  <device-container bgGrey lightButton>
    <div class="restore">
      <div class="group-button">
        <div class="btn btn-plus">
          <img src="@/assets/images/ic_plus_grey.png" alt="plus">
        </div>
        <div class="separator"></div>
        <div class="btn btn-refresh">
          <img src="@/assets/images/ic_refresh_grey.png" alt="refresh">
        </div>
        <div class="separator"></div>
        <div class="btn btn-remove">
          <img src="@/assets/images/ic_remove_grey.png" alt="remove">
        </div>
      </div>
      <div class="restore-gallery">
        <div class="restore-gallery-item" v-for="index in 3" :key="index">
          <img class="img-mobile" src="@/assets/images/mobile.png" alt="mobile">
          <button class="btn-play">
            <img src="@/assets/images/ic_play_blue.png" alt="play">
            <span>12:44:44</span>
          </button>
        </div>
      </div>
    </div>
  </device-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.restore {
  position: relative;
  padding: 88px 0px 50px 138px;

  .group-button {
    position: absolute;
    left: 26px;
    top: 28px;
    width: 35px;
    height: 123px;
    border-radius: 3px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 7px 8px;

    .btn {
      cursor: pointer;
    }
    .separator {
      width: 27px;
      height: 1px;
      background-color: #eef0f5;
    }
  }
  .restore-gallery {
    display: flex;

    .restore-gallery-item {
      position: relative;
      margin-right: 57px;

      .img-mobile {
        width: 427px;
        height: 760px;
      }
      .btn-play {
        width: 114px;
        height: 48px;
        border-radius: 24px;
        border: none;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding: 14px 19px;
        position: absolute;
        left: 50%;
        bottom: 9px;
        transform: translate(-50%, 0);
        cursor: pointer;

        img {
          width: 19px;
          height: 21px;
        }
        span {
          color: #0f7bf9;
          font-size: 12px;
          font-weight: 400;
          margin-left: 9px;
        }
      }
    }
  }
}
</style>