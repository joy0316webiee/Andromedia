<template>
  <div class="personal-container">
    <div class="personal-header">
      <div class="add">
        <span>+</span>
      </div>
      <div class="stats">
        <div class="stats-item">
          <div class="stats-item-image">
            <img src="@/assets/images/ic_doc1.png" alt="doc">
          </div>
          <div class="stats-item-details">
            <h3>微信</h3>
            <p>1230 组 1230 人</p>
          </div>
        </div>
        <div class="stats-item">
          <div class="stats-item-image">
            <img src="@/assets/images/ic_doc2.png" alt="doc">
          </div>
          <div class="stats-item-details">
            <h3>微信</h3>
            <p>1230 组 1230 人</p>
          </div>
        </div>
        <div class="stats-item">
          <div class="stats-item-image">
            <img src="@/assets/images/ic_doc3.png" alt="doc">
          </div>
          <div class="stats-item-details">
            <h3>微信</h3>
            <p>1230 组 1230 人</p>
          </div>
        </div>
        <div class="stats-item">
          <div class="stats-item-image">
            <img src="@/assets/images/ic_doc4.png" alt="doc">
          </div>
          <div class="stats-item-details">
            <h3>微信</h3>
            <p>1230 组 1230 人</p>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.personal-container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .personal-header {
    height: 100px;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-left: 33px;
    background-color: #f1f5f8;

    .add {
      width: 77px;
      height: 70px;
      border: 1px dashed #bac4d1;
      background-color: #f1f5f8;
      position: relative;

      span {
        color: #0f7bf9;
        width: 25px;
        height: 25px;
        display: inline-block;
        border: 1px solid #0f7bf9;
        border-radius: 50%;
        padding: 0px 1px;
        font-size: 30px;
        line-height: 21px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .stats {
      display: flex;
      align-items: center;
      margin-left: 12px;

      .stats-item {
        display: flex;
        align-items: center;
        width: 198px;
        height: 70px;
        background-color: #ffffff;
        padding-left: 12px;
        margin-right: 13px;

        .stats-item-image {
          img {
            width: 46px;
            height: 46px;
          }
        }
        .stats-item-details {
          margin-left: 17px;

          h3 {
            olor: #43475f;
            font-family: "Ping Fang - SC";
            font-size: 16px;
            font-weight: 700;
            margin: 0px;
          }
          p {
            margin: 0px;
            color: #bac4d1;
            font-family: "Ping Fang - SC";
            font-size: 12px;
            font-weight: 700;
          }
        }
      }
    }
  }
  .personal-content {
    flex: auto;
  }
}
</style>