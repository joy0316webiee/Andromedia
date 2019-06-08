<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      :class="{simple: simple}"
    >
      <div class="modal-header" id="modalTitle">
        <div class="title">
          <span class="twitter">
            <i class="fab fa-twitter"></i>
            <strong>Twittwe</strong>
          </span>
          <span class="gmail" @click="close">G</span>
        </div>
        <div class="details">
          <p>找号：1234567</p>
          <p>成员：（12354人）</p>
        </div>
      </div>
      <div class="modal-body" id="modalDescription">
        <div class="users">
          <img src="@/assets/images/avatars/avatar001.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar002.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar003.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar004.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar002.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar003.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar004.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar002.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar003.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar004.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar001.png" alt="avatar">
          <img src="@/assets/images/avatars/avatar002.png" alt="avatar">
        </div>
      </div>
      <div class="modal-footer">
        <v-pagination :vstyle="paginationStyle" :items="['1', '2', '3', '...', '12']"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    simple: Boolean
  },
  data() {
    return {
      paginationStyle: {
        wrapper: {
          width: "100%"
        },
        button: {
          fontSize: "11px",
          width: "22px",
          height: "22px",
          padding: "2px",
          marginRight: "4px"
        }
      }
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  .modal {
    width: 238px;
    height: 324px;
    background-color: #ffffff;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.11);
    overflow: auto;
    display: flex;
    flex-direction: column;

    &.simple {
      height: 230px;
      .modal-header {
        display: none;
      }
    }

    .modal-header {
      padding: 14px 20px;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .twitter {
          display: flex;
          align-items: center;

          i {
            color: #a1a1a1;
            font-size: 23px;
          }
          strong {
            font-size: 16px;
            font-weight: bold;
            color: #414a60;
            margin-left: 7px;
          }
        }
        .gmail {
          width: 23px;
          height: 23px;
          padding: 4px 8px;
          font-size: 11px;
          font-weight: bold;
          color: white;
          background: #5783ff;
          display: inline-block;
          border-radius: 50%;
        }
      }
      .details {
        margin-top: 10px;

        p {
          margin: 0px;
          font-size: 12px;
          font-weight: 400;
          color: #414a60;
        }
      }
    }
    .modal-body {
      .users {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 7px;

        img {
          justify-self: center;
          width: 35px;
          height: 35px;
        }
      }
    }
    .modal-footer {
      margin: 0 auto;
      border-top: 1px solid #eef0f6;
      width: 90%;
      padding: 19px 10px;

      text-align: center;
    }
  }
}
</style>