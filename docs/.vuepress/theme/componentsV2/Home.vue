<template>
  <div>
    <div class="home-banner">
      <div class="content">
        <div class="wrapper">
          <h1 class="leading">{{ $frontmatter.banner.leading }}</h1>
          <p class="des">{{ $frontmatter.banner.description }}</p>
        </div>
      </div>
      <div class="bg-left"></div>
      <div class="bg-right"></div>
    </div>

    <section class="sec2">
      <p class="sub-leading">{{ $frontmatter.section2.subLeading }}</p>
      <a-row>
        <a-col
          v-for="(imgSrc, index) of $frontmatter.section2.projectsIcons"
          :lg="4"
          :md="8"
          :xs="12"
        >
          <div class="icon-wrap"><img :src="imgSrc" alt="" /></div>
        </a-col>
      </a-row>
      <p class="heading">{{ $frontmatter.section2.heading }}</p>

      <a-row class="challeng-content">
        <a-col
          :sm="24"
          :md="8"
          v-for="(value, index) in $frontmatter.section2.challenges"
          :key="index + 'challenge'"
        >
          <div class="box-wrap">
            <div class="box">
              <p class="box-leading">{{ value.leading }}</p>
              <p class="box-des">{{ value.des }}</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </section>

    <section class="sec3 container">
      <p class="leading">{{ $frontmatter.section3.leading }}</p>
      <p class="sub-leading">{{ $frontmatter.section3.subLeading }}</p>

      <a-row class="card-wrap" type="flex" justify="center">
        <a-col
          :lg="12"
          v-for="(item, index) in $frontmatter.section3.productCards"
        >
          <Home-Card-Item
            :cardImg="item.cardImg"
            :subLeading="item.subLeading"
            :desList="item.desList"
            :actions="item.actions"
          ></Home-Card-Item>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script>
import HomeCardItem from "@theme/componentsV2/Home-Card-Item.vue";
export default {
  components: { HomeCardItem },
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
.container {
  padding: 0 14px;
}
.home-banner {
  min-height: 400px;
  background-color: #2a2a48;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: auto;
  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 25px 30px;
    z-index: 1;
    .wrapper {
      max-width: 700px;
      max-height: 100%;
      margin: 0 auto;
      .leading {
        font-size: 45px;
        color: #fff;
        font-family: "silka blod";
        @media (max-width: @MQMobile) {
          font-size: 30px;
        }
      }
      .des {
        max-width: 650px;
        font-size: 18px;
        color: #ffffffcc;
        @media (max-width: @MQMobile) {
          font-size: 16px;
        }
      }
    }
  }
  .bg-left {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    background-size: contain;
    width: 50%;
    background-position: top left;
    background-image: url("../assets/bg_home_left.svg");
  }
  .bg-right {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    right: 0;
    top: 0;
    background-size: contain;
    width: 50%;
    background-position: top right;
    background-image: url("../assets/bg_home_right.svg");
  }
  @media (max-width: @MQMobile) {
    .bg-left,
    .bg-right {
      display: none;
    }
  }
}

.sec2 {
  padding: 60px 0;
  padding-bottom: 120px;
  max-width: 1024px;
  margin: 0 auto;
  .sub-leading {
    margin-bottom: 60px;
    color: #3d3d58;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: uppercase;
    font-family: silka;
  }
  .ant-col {
    text-align: center;
    @media screen and(max-width:768px) {
      padding: 20px 0px;
    }
  }
  .icon-wrap {
    max-width: 180px;
    width: auto;
    height: 70px;
    line-height: 70px;
    display: inline-block;
    img {
      width: 100%;
    }
  }
  .heading {
    margin-bottom: 60px;
    margin-top: 140px;
    text-align: center;
    color: #3c3c57;
    font-size: 27px;
    font-family: "silka blod";
    padding: 0 25px;
    @media screen and (max-width: @MQMobile) {
      font-size: 24px;
      margin-bottom: 30px;
      margin-top: 70px;
    }
  }
  .challeng-content {
    .box-wrap {
      padding: 0 25px;
      border-right: solid 1px #d8d8d8;
      border-bottom: none;
      text-align: left;
      @media screen and (max-width: 768px) {
        max-width: 88%;
        margin: 0 auto;
        border-right: none;
        border-bottom: solid 1px #d8d8d8;
        padding: 25px 0;
      }
    }
    .ant-col:last-of-type .box-wrap {
      border-right: none;
    }
    .box {
      max-width: 225px;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        max-width: 100%;
      }
      .box-leading {
        font-family: "silka";
        font-size: 18px;
        color: #4e5ee4;
        opacity: 0.9;
      }
      .box-des {
        opacity: 0.8;
        font-size: 15px;
        color: #282846;
      }
    }
  }
}

.sec3 {
  background-color: #f8f8fa;
  padding-top: 60px;
  .leading {
    text-align: center;
    color: #3c3c57;
    font-size: 27px;
    font-family: "silka blod";
    padding: 0 25px;
    @media screen and (max-width: @MQMobile) {
      font-size: 24px;
    }
  }
  .sub-leading {
    max-width: 600px;
    margin: auto;
    margin-bottom: 60px;
    text-align: center;
    font-size: 15px;
    color: #51516a;
    font-weight: 400;
  }

  .card-wrap {
    .ant-col {
      display: flex;
      &:nth-of-type(1) {
        justify-content: flex-end;
        @media screen and(max-width:@MQMobile) {
          margin-bottom: 15px;
        }
      }
    }
    /deep/ .product-card {
      margin-right: 15px;
      @media screen and(max-width:@MQMobile) {
        margin-right: 0;
      }
    }
  }
}
</style>
