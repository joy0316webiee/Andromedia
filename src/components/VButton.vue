<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      primary: Boolean
    },
    computed: {
      classes: function classes() {
        var baseObj = { 'v-button': true }
        baseObj['v-button-default'] = !this.primary
        baseObj['v-button-primary'] = this.primary
        return baseObj
      }
    }
  }
</script>

<style lang="scss" scoped>
.v-button {
  width: 104px;
  height: 30px;
  font-size: 12px;
  border-radius: 4px;
  font-family: MicrosoftYaHeiLight;
  font-weight: 300;
  background-color: #F1F5F8;
  border: none;
}
.v-button-primary {
  background-color: #0F7BF9;
  color: #FFFFFF;
}
</style>