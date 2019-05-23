<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      color: String
    },
    computed: {
      classes: function classes() {
        var baseObj = {}
        console.log(this.props)
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-button {
  height: 15px;
  font-size: 6px;
  border-radius: 2px;
}
</style>