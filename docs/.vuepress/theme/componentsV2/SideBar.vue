<template>
  <div>
    <div class="sidebar-wrap">
      <div class="head">
        <div class="logo">
          <img src="../assets/oz_main_color.svg" alt="" />
        </div>
        <div class="h-icon-cont open" @click="$emit('closeDrawer')">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>

      <div class="products-wrap">
        <p class="item-title">Products</p>
        <a href="#">
          <img src="/oz_contracts.svg" alt="" />
        </a>
        <a href="#">
          <img src="/oz_defender.svg" alt="" />
        </a>
      </div>

      <div class="prod-item">
        <img src="../assets/oz_security_dark.svg" alt="" />
      </div>

      <div class="lists-wrap">
        <p class="title">Learn</p>
        <a
          :href="item.link"
          v-for="(item, index) in $themeConfig.sidebar.sideBarOfLearn"
        >
          {{ item.text }}
        </a>
      </div>

      <div class="lists-wrap">
        <p class="title">Company</p>
        <a
          :href="item.link"
          v-for="(item, index) in $themeConfig.sidebar.sideBarOfCompany"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    closeDrawer() {},
  },
};
</script>
<style lang="less" scoped>
.sidebar-wrap {
  padding: 0 16px;
}
.head {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
  .logo img {
    width: 172px;
  }
}

.products-wrap {
  padding: 20px 0;
  border-bottom: solid 1px #d8d8d8;
  .item-title {
    color: grey;
    font-size: 14px;
    margin-bottom: 15px;
    font-family: "silka";
  }
  a {
    display: block;
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
  img {
    width: 100px;
  }
}

.prod-item {
  padding: 30px 0;
  border-bottom: solid 1px #d8d8d8;
  img {
    max-height: 22px;
  }
}

.lists-wrap {
  font-size: 14px;
  padding: 20px 0;
  border-bottom: solid 1px #d8d8d8;
  &:last-of-type {
    border-bottom: none;
  }
  .title {
    color: grey;
    margin-bottom: 15px;
  }
  a {
    display: block;
    color: #282846;
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
