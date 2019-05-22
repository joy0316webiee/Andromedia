<template>
  <div class="layout">
    <Header/>
    <Container>
      <!-- <Sidebar/> -->
      <router-view/>
    </Container>
  </div>
</template>

<script>
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import Container from "@/layouts/Container";

export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
    Container
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.layout {
}
</style>