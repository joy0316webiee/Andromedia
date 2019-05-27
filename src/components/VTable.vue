<template>
  <div class="table">
    <div class="table-header" :style="gridStyle">
      <div class="column" v-for="(col, index) in header" :key="index">
        <v-round-check v-if="checkbox && !index" class="check-all" :onChange="onChangeCheckAll"/>
        <label>{{col}}</label>
      </div>
    </div>
    <div class="table-body">
      <div class="row" :style="gridStyle" v-for="(row, index) in data" :key="index">
        <div class="column">
          <v-round-check v-if="checkbox" class="check-one" :initState="checkedAll"/>
          <label>{{index + 1}}</label>
        </div>
        <div class="column" v-for="(value, key) in row" :key="key">
          <label>{{value}}</label>
        </div>
        <div class="column">
          <v-dropdown class="dropdown-action" text="操作" :nodes="actions"/>
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
    checkbox: Boolean
  },
  data() {
    return {
      checkedAll: false
    };
  },
  methods: {
    onChangeCheckAll() {
      this.checkedAll = !this.checkedAll;
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
  .table-header,
  .row {
    @include grid;

    .column {
      label {
        margin-left: 16px;
      }
    }
  }
  .table-header {
    background: #f1f5f8;
  }
}
</style>