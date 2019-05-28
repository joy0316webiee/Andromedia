<template>
  <device-container>
    <div class="gallery">
      <div class="gallery-count">
        <span>全部：200</span>
      </div>
      <div class="gallery-images">
        <div class="gallery-images-item" v-for="index in 36" :key="index">
          <img src="@/assets/images/mobile.png" alt="mobile">
          <span>设备ID</span>
        </div>
      </div>
    </div>
  </device-container>
</template>

<script>
export default {
  name: "DeviceGallery",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  background-color: #f1f5f8;
  padding: 13px 0px 20px;
  height: 100%;

  .gallery-count {
    padding-left: 20px;

    span {
      color: #acacad;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .gallery-images {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    .gallery-images-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 23px;
      margin-bottom: 23px;

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
}
</style>