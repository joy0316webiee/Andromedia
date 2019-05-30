<template>
  <div class="home-container">
    <form>
      <div class="row row-label">
        <label>大数据搜索</label>
      </div>
      <div class="row row-input">
        <input type="text" placeholder="输入关键字搜索">
        <button>
          <img src="@/assets/images/ic_search.png" alt>
        </button>
      </div>
      <div class="row row-span">
        <span>1 输入关键字标签即可找到关系人、说说/视频。</span>
      </div>
    </form>
    <div class="slider-view">
      <div class="sliders">
        <div class="slider">
          <img src="@/assets/images/bigdata1.png">
        </div>
      </div>
      <div class="pagination">
        <button :class="slider === 1 ? 'active' : ''" @click="() => { slider = 1 }">
          <div class="pagination-dot"></div>
        </button>
        <button :class="slider === 2 ? 'active' : ''" @click="() => { slider = 2 }">
          <div class="pagination-dot"></div>
        </button>
        <button :class="slider === 3 ? 'active' : ''" @click="() => { slider = 3 }">
          <div class="pagination-dot"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 142px;
}
.home-container {
  background-color: #f1f5f8;
  flex: auto;
  display: flex;

  form {
    margin-top: 276px;
    margin-left: 392px;
    display: inline-block;

    .row {
      &.row-label {
        margin-bottom: 18px;
      }
      &.row-span {
        margin-top: 32px;
      }
      label {
        font-size: 18px;
        font-weight: bold;
        color: rgba(15, 123, 249, 1);
      }
      input {
        width: 304px;
        height: 30px;
        background: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-weight: 300;
        padding-left: 12px;
        padding-right: 24px;
      }
      button {
        background-color: transparent;
        border: none;
        position: relative;
        right: 30px;
        top: 3px;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(186, 196, 209, 1);
        padding-left: 12px;
      }
    }
  }
  .slider-view {
    display: inline-block;
    margin-top: 240px;
    margin-left: 50px;

    .pagination {
      display: flex;
      justify-content: center;
      button {
        padding: 10px 5px;
        border: none;
        cursor: pointer;
        background-color: transparent;

        .pagination-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #dae3e8;
        }
        &.active {
          .pagination-dot {
            background-color: #227bf9;
          }
        }
      }
    }
  }
}
</style>
