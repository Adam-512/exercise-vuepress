<template>
  <div class="navbar">
    <!-- pc Nav -->
    <a-row type="flex" align="middle" justify="center">
      <a-col :span="20">
        <a-row class="bar-content" type="flex" justify="space-between">
          <img :src="$themeConfig.logo" alt="" @click="isOpenDrawer" />
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
      placement="right"
      :closable="false"
      @close="isOpenDrawer"
      :visible="sidebar_visible"
      wrapClassName="sidebarWrap"
      v-if="shouldShowSidebar"
    >
      <Sidebar :items="sidebarItems" class="mobile-sidebar"></Sidebar>
    </a-drawer>
  </div>
</template>

<script>
import Sidebar from "@theme/components/Sidebar.vue";
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
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return frontmatter.sidebar !== false && this.sidebarItems.length;
    },
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
  }
  .drawer-icon {
    display: none;
  }
  .bar-content {
    flex-wrap: nowrap;
    img {
      width: 172px;
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

.h-icon-cont {
  width: 60px;
  height: 45px;
  position: relative;
  left: 18px;
  cursor: pointer;
  transform: scale(0.4);
  transition: all 0.5s ease-in-out 0s;
  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    opacity: 1;
    left: 0px;
    transform: rotate(0deg);
    background: rgb(81, 81, 106);
    border-radius: 9px;
    transition: all 0.25s ease-in-out 0s;
    overflow: hidden;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 18px;
    }
    &:nth-child(3) {
      top: 36px;
    }
  }
}
</style>
