<template>
  <footer class="footer">
    <div class="footer-box">
      <div class="company">
        <div class="logo">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/18b414b543c2102f0b842ec3990956a2fd5fc858/285d7/images/logos/openzeppelin/oz_main_white.svg"
            alt="OpenZeppelin logo"
          />
        </div>
      </div>
      <div class="link-box">
        <div
          v-for="(item, index) of $themeLocaleConfig.footer"
          :key="index + 'ft'"
        >
          <p>{{ item.title }}</p>
          <ul>
            <li v-for="(subItem, i) in item.content">
              <a :href="subItem.link">{{ subItem.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="rights">
        <span>{{ $themeLocaleConfig.copyright.copy }}</span>
        <a
          class="terms"
          :href="item.link"
          v-for="(item, index) in $themeLocaleConfig.copyright.items"
          >{{ item.text }}</a
        >
      </div>
    </div>
  </footer>
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
  methods: {},
};
</script>
<style lang="less" scoped>
@import "../styles/palette.less";

.footer {
  background: #282746;
  color: white;
  padding: 74px 0 20px;
  margin-bottom: 0;
  .footer-box {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 18px;

    position: relative;
    display: flex;
    justify-content: space-between;

    display: flex;
    flex-direction: row;

    @media screen and(max-width:960px) {
      flex-direction: column;
    }
  }

  .company {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .logo {
      display: flex;
      margin-bottom: 45px;
    }
  }

  .link-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    margin-bottom: 35px;

    flex-direction: row;
    div {
      margin-right: 45px;
      width: 100px;
      @media screen and(max-width:576px) {
        &:first-of-type {
          margin-bottom: 45px;
        }
      }
      &:last-of-type {
        margin-right: 0;
      }
      p {
        line-height: normal;
        display: block;
        font-size: 15px;
        font-weight: bold;
        color: #ffffff;
        text-transform: none;
        margin-bottom: 10px;
        text-align: left;
        font-family: "silka";
      }
      ul {
        padding: 0;
        margin-bottom: 0;
        line-height: normal;
        li {
          list-style: none;
          a {
            display: block;
            font-size: 15px;
            opacity: 0.6;
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
            padding-bottom: 10px;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .rights {
    position: absolute;
    bottom: 0;
    left: 16px;
    font-size: 12px;
    span {
      flex-direction: row;
      bottom: 0;
      color: #9a9cac;
    }
    a {
      opacity: 0.6;
      display: inline;
      color: #c7c8d1;
      margin-left: 7px;
      border-left: 1px solid #8d8d9d;
      padding-left: 7px;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
