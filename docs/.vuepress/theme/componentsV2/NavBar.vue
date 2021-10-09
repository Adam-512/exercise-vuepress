<template>
  <div class="navbar">
    <!-- pc Nav -->
    <a-row type="flex" align="middle" justify="center">
      <a-col span="24">
        <a-row class="bar-content" type="flex" justify="space-between">
          <img src="../assets/logo-black.png" alt="" />
          <NavLinks class="links-wrap" />
          <a-row class="drawer-icon" type="flex" align="middle">
            <div class="h-icon-cont" @click="isOpenDrawer">
              <span></span><span></span><span></span><span></span>
            </div>
          </a-row>
        </a-row>
      </a-col>
    </a-row>
    <!-- mobile sidebar     -->
    <a-drawer
      width="100%"
      placement="right"
      :closable="false"
      @close="isOpenDrawer"
      :visible="sidebar_visible"
      wrapClassName="sidebarWrap"
    >
      <Sidebar @closeDrawer="isOpenDrawer" />
    </a-drawer>
  </div>
</template>

<script>
import Sidebar from "@theme/componentsV2/SideBar.vue";

// import Sidebar from "@theme/components/Sidebar.vue";
import NavLinks from "@theme/componentsV2/NavLinks.vue";
import { resolveSidebarItems } from "../util";

export default {
  components: {
    Sidebar,
    NavLinks,
  },
  data() {
    return {
      sidebar_visible: false,
      sidebar_open: false,
    };
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    isOpenDrawer() {
      this.sidebar_visible = !this.sidebar_visible;
      this.sidebar_open = !this.sidebar_open;
      document.getElementById("app").classList.toggle("toggle-sidebar");
    },
  },
};
</script>
<style lang="less" scoped>
@import "../styles/palette.less";

.navbar {
  .ant-row-flex {
    height: 70px;
    max-width: 1024px;
    margin: 0 auto;
  }
  .drawer-icon {
    display: none;
  }
  .bar-content {
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    img {
      height: 27px;
    }
  }
}

@media (max-width: @MQMobile) {
  .navbar {
    .links-wrap {
      display: none;
    }
    .drawer-icon {
      display: flex;
    }
  }

  .sidebarWrap {
    .drawer-handle {
      display: flex;
    }
    .mobile-sidebar {
      display: block;
      top: 3rem;
      border: none;
      font-size: 14px;
    }
  }
}
</style>
