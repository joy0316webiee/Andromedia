<template>
  <div class="scripts">
    <div
      class="scripts-row"
      v-for="(script, index) in scripts"
      :key="index"
      @click="onClick(index)"
    >
      <div v-if="active(index)" class="active">
        <div class="script-title">
          <img src="@/assets/images/ic_sfolder_blue.png" alt="script">
          <span class="name">{{script.name}}</span>
        </div>
        <div class="tools">
          <button class="active">
            <img src="@/assets/images/ic_stop_blue.png" alt="stop">
          </button>
          <button>
            <img src="@/assets/images/ic_play_dark.png" alt="play">
          </button>
          <button>
            <img src="@/assets/images/ic_round_add.png" alt="round">
          </button>
          <button>
            <img src="@/assets/images/ic_edit_dark.png" alt="edit">
          </button>
        </div>
      </div>
      <div v-else class="inactive">
        <div class="script-title">
          <img src="@/assets/images/ic_sfolder_dark.png" alt="script">
          <span class="name">{{script.name}}</span>
        </div>
        <span class="status">{{getStatusText(script.status)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 3,
      scripts: [
        {
          name: "lia文件2",
          status: false
        },
        {
          name: "lia文件2",
          status: true
        },
        {
          name: "lia文件2",
          status: false
        },
        {
          name: "lia文件2",
          status: true
        },
        {
          name: "lia文件2",
          status: false
        }
      ]
    };
  },
  methods: {
    active(index) {
      return index === this.activeIndex;
    },
    getStatusText(status) {
      return status ? "运行..." : "等待运行";
    },
    onClick(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.scripts {
  background-color: #f1f5f8;

  .scripts-row {
    padding-right: 10px;

    > div {
      display: flex;
      align-items: center;
      padding: 17px 0px 17px 35px;
      cursor: pointer;

      &:hover {
        background-color: darken(#f1f5f8, 5%);
      }

      &.active {
        background-color: white;
        display: flex;
        justify-content: space-between;

        .tools {
          display: flex;
          align-items: center;

          button {
            width: 37px;
            height: 37px;
            border: none;
            border-radius: 50%;
            padding: 4px;
            cursor: pointer;

            &.active {
              background-color: #f4f9ff;
            }
          }
        }
      }
      &.inactive {
        .status {
          margin-left: 25px;
          font-family: "Microsoft Ya Hei";
          font-size: 15px;
          font-weight: 400;
        }
      }

      .script-title {
        display: flex;
        align-items: center;

        span {
          font-family: "Microsoft Ya Hei";
          font-size: 15px;
          font-weight: 400;
          margin-left: 19px;
        }
      }
    }
  }
}
</style>