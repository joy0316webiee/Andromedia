<template>
  <div class="table" :class="{'table-grey': grey}">
    <div class="table-header" :style="gridStyle">
      <div class="column" v-for="(col, index) in header" :key="index">
        <v-round-check
          v-if="checkbox && !index"
          class="check-all"
          :onChange="onChangeCheckAll"
          style="margin-right: 16px"
        />
        <label>{{col}}</label>
      </div>
    </div>
    <div class="table-body">
      <div class="row" :style="gridStyle" v-for="(row, index) in data" :key="index">
        <div v-if="!withID" class="column">
          <v-round-check
            v-if="checkbox"
            class="check-one"
            :initState="checkedAll"
            style="margin-right: 16px"
          />
          <label>{{index + 1}}</label>
        </div>
        <div class="column" v-for="(objectArry, key) in row" :key="key">
          <div class="object" v-for="(object, n) in objectArry" :key="n">
            <label v-if="object.type === 'text'">{{object.value}}</label>
            <img v-else :src="getImage(object.value)" alt="image" :style="imgStyle(object.type)">
          </div>
        </div>
        <div class="column">
          <v-dropdown :light="grey" class="dropdown-action" text="操作" :nodes="actions"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: Array,
    data: Array,
    dimens: Array,
    actions: Array,
    checkbox: Boolean,
    withID: Boolean,
    grey: Boolean
  },
  data() {
    return {
      checkedAll: false
    };
  },
  methods: {
    onChangeCheckAll() {
      this.checkedAll = !this.checkedAll;
    },
    getImage(imgName) {
      return require("@/assets/images/" + imgName);
    },
    imgStyle(type) {
      if (type === "image") {
        return {
          width: "25px",
          height: "25px"
        };
      }
    }
  },
  computed: {
    gridStyle() {
      let style = "grid-template-columns:";
      this.dimens.forEach(value => {
        style += ` ${value}`;
      });
      return style;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin grid {
  height: 40px;
  padding-left: 46px;
  display: grid;
  align-items: center;
  color: #767c91;
  font-size: 12px;
  font-family: PingFang;
  font-weight: 400;
}

.table {
  &.table-grey {
    .table-header {
      background: #e9eff4;
    }
    .row {
      height: 59px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 3px 13px rgba(0, 0, 0, 0.11);
        background-color: #ffffff;
      }
    }
  }

  .table-header,
  .row {
    @include grid;

    .column {
      .object {
        display: inline-block;

        label {
          // margin-left: 16px;
        }
        img {
          margin-left: 8px;
        }
      }
    }
  }
  .table-header {
    background: #f1f5f8;
  }
}
</style>