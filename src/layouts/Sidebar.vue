<template>
  <sidebar-menu
    :menu="menu"
    :collapsed="collapsed"
    :theme="selectedTheme"
    :show-one-child="true"
    @collapse="onCollapse"
    @itemClick="onItemClick"
  />
</template>

<script>
import Vue from "vue";
import VueSidebarMenu from "vue-sidebar-menu";

Vue.use(VueSidebarMenu);

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
};

export default {
  name: "Sidebar",
  data() {
    return {
      menu: [
        {
          href: "/",
          title: "Installation",
          icon: "fa fa-download"
        },
        {
          href: "/basic-usage",
          title: "Basic Usage",
          icon: "fa fa-code"
        },
        {
          href: "/props",
          title: "Props",
          icon: "fa fa-cogs"
        },
        {
          href: "/events",
          title: "Events",
          icon: "fa fa-bell"
        },
        {
          href: "/styling",
          title: "Styling",
          icon: "fa fa-palette"
        },
        {
          href: "/disabled",
          title: "Disabled page",
          icon: "fa fa-lock",
          disabled: true
        },
        {
          title: "Badge",
          icon: "fa fa-cog",
          badge: {
            text: "new",
            class: "badge-danger"
          }
        },
        {
          href: "/page",
          title: "Dropdown Page",
          icon: "fa fa-list-ul"
        }
      ],
      collapsed: false,
      themes: ["", "white-theme"],
      selectedTheme: "white-theme"
    };
  },
  methods: {
    onCollapse(collapsed) {
      console.log(collapsed);
      this.collapsed = collapsed;
    },
    onItemClick(event, item) {
      console.log("onItemClick");
      // console.log(event)
      // console.log(item)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
@import "@/assets/sass/base.scss";

.v-sidebar-menu {
}
.v-sidebar-menu.vsm-default {
}
.v-sidebar-menu.vsm-collapsed {
}
.v-sidebar-menu .vsm-header {
}
.v-sidebar-menu .vsm-list {
}
.v-sidebar-menu .vsm-dropdown > .vsm-list {
}
.v-sidebar-menu .vsm-item {
}
.v-sidebar-menu .vsm-item.first-item {
}
.v-sidebar-menu .vsm-item.mobile-item {
}
.v-sidebar-menu .vsm-item.open-item {
}
.v-sidebar-menu .vsm-item.active-item {
}
.v-sidebar-menu .vsm-item.parent-active-item {
}
.v-sidebar-menu .vsm-link {
}
.v-sidebar-menu .vsm-title {
}
.v-sidebar-menu .vsm-icon {
}
.v-sidebar-menu .vsm-arrow {
}
.v-sidebar-menu .vsm-arrow.open-arrow {
}
.v-sidebar-menu .vsm-mobile-bg {
}
.v-sidebar-menu .vsm-badge {
}
</style>