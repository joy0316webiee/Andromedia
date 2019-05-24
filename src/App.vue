<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/base.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  min-width: $min-width;
  font-family: YaHei;
}

* {
  box-sizing: border-box;
  border: none;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
}

// div {
//   border: 1px solid #bbb;
// }
</style>
