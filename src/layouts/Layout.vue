<template>
  <div class="layout">
    <Header/>
    <Container>
      <Sidebar :Router="Router"/>
      <transition name="fade-anim">
        <router-view/>
      </transition>
    </Container>
  </div>
</template>

<script>
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import Container from "@/layouts/Container";
import router from "@/router";

export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
    Container
  },
  methods: {
    Router(href) {
      this.$router.push(href);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

fade-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

@keyframes coming {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
</style>