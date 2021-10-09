<template>
  <div>
    <div class="home-banner">
      <div class="content">
        <div class="wrapper">
          <h1 class="leading animate__animated animate__fadeInUp ">
            {{ $frontmatter.banner.leading }}
          </h1>
          <p class="des animate__animated animate__fadeInUp animate__delay-1s">
            {{ $frontmatter.banner.description }}
          </p>
        </div>
      </div>
      <div class="bg-left">
        <img src="../assets/bg-left.png" alt="" />
      </div>
      <div class="bg-right">
        <img src="../assets/bg-right.png" alt="" />
      </div>
    </div>

    <section class="sec2">
      <p class="sub-leading">{{ $frontmatter.section2.subLeading }}</p>
      <a-row>
        <a-col
          v-for="(imgSrc, index) of projectsIcons"
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
      <div class="bg-bottom"></div>
    </section>

    <section class="sec4">
      <div class="container">
        <div class="quote-wrap">
          <p class="quote-description">“{{ $frontmatter.section4.quote }}”</p>
          <div class="quote-footer">
            <img
              class="img"
              src="https://d33wubrfki0l68.cloudfront.net/673c656eebcd47d40d1ee0975b31abfe3f4fb88d/138e5/images/photos/brendan.jpg"
              alt="Brendan Eich"
            />
            <span class="quote-author">
              <strong>{{ $frontmatter.section4.quoteAuthor }} </strong> |
              <span>{{ $frontmatter.section4.quoteAuthorDes }}</span>
              <span> </span
            ></span>
          </div>
        </div>
      </div>
    </section>

    <section class="sec5">
      <div class="main-box">
        <div class="box-wrapper">
          <div class="box-main">
            <p class="box-heading">
              {{ $frontmatter.section5.secureHeading }}
            </p>
            <p class="box-description">
              {{ $frontmatter.section5.secureDes }}
            </p>
            <a :href="$frontmatter.section5.secureActicon.link" class="btn">
              {{ $frontmatter.section5.secureActicon.text }}
            </a>
          </div>
          <div class="box-side">
            <img src="../assets/secure.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="sec-header">
        <p class="heading">{{ $frontmatter.section5.building }}</p>
        <p class="sub">{{ $frontmatter.section5.buildingSub }}</p>
      </div>

      <div class="building-step-wrap">
        <a-row type="flex" justify="space-between">
          <a-col
            :span="24"
            :lg="8"
            v-for="(item, index) in $frontmatter.section5.buildingGuide"
            :key="index + 'guide'"
          >
            <a :href="item.link">
              <div class="box">
                <div class="icon" :class="['icon' + index]"></div>
                <div class="box-heading">
                  {{ item.title }}
                </div>
                <p class="box-des">
                  {{ item.des }}
                </p>
              </div>
            </a>
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>

<script>
import HomeCardItem from "@theme/componentsV2/Home-Card-Item.vue";
export default {
  name: "Home",
  components: { HomeCardItem },
  data() {
    return {
      projectsIcons: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.projectsIcons = [
      require("../assets/brave.svg"),
      require("../assets/augur.svg"),
      require("../assets/ethfund.svg"),
      require("../assets/coinbase.svg"),
      require("../assets/compound.png"),
      require("../assets/bitgo.svg"),
    ];
  },
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
  background: url("../assets/bg.png") no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  height: auto;
  @media (max-width: 576px) {
    min-height: 300px;
  }
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
        @media (max-width: 576px) {
          font-size: 24px;
        }
      }
      .des {
        max-width: 650px;
        font-size: 18px;
        color: #ffffffcc;
        @media (max-width: @MQMobile) {
          font-size: 16px;
        }
        @media (max-width: 576px) {
          font-size: 14px;
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
    width: 50%;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
  .bg-right {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    right: 0;
    top: 0;
    width: 50%;
    display: flex;
    flex-direction: column-reverse;
    img {
      width: 100%;
    }
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
  @media screen and(max-width:@MQMobile) {
    padding-left: 18px;
    padding-right: 18px;
  }
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
    @media screen and(max-width:@MQMobile) {
      img {
        width: 80%;
      }
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
    @media (max-width: 576px) {
      padding: 0;
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
  position: relative;
  z-index: 1;
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

  .bg-bottom {
    background-color: @mainColorDark;
    position: absolute;
    z-index: -1;
    height: 130px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.sec4 {
  background-color: @mainColorDark;
  color: #fff;
  padding-bottom: 120px;
  .container {
    width: 100%;
    max-width: 1040px;
    margin: auto;
    padding: 0 18px;
  }
  .quote-wrap {
    max-width: 600px;
    margin: auto;
    padding: 120px 0;
    @media (max-width: 576px) {
      padding: 60px 0;
    }
    .quote-description {
      margin-bottom: 30px;
      font-size: 21px;
      max-width: 530px;
      margin: 0 auto;
      text-align: center;
    }
    .quote-footer {
      display: flex;
      height: 48px;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      .quote-author {
        width: 80%;
        text-align: center;
        margin-left: 20px;
        opacity: 0.8;
        font-size: 15px;
        color: #ffffff;
        font-family: "silka";
      }
      img {
        width: 48px;
        border-radius: 4px;
      }
    }
  }
}

.sec5 {
  background: #f8f8fa;
  padding-bottom: 60px;
  @media screen and(max-width:@MQMobile) {
    padding-left: 18px;
    padding-right: 18px;
  }
  .main-box {
    position: relative;
    top: -120px;
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 270px;
    background: #fff;
    @media (max-width: 576px) {
      top: -80px;
    }

    padding: 35px 30px;
    background: #fff;
    border: 1px solid #ededed;
    box-shadow: 0 8px 14px 0 rgba(60, 60, 60, 9%);

    .box-wrapper {
      max-width: 775px;
      display: flex;
      justify-items: center;
      align-items: center;
      flex-direction: row;
      text-align: left;
      @media screen and(max-width:@MQMobile) {
        flex-direction: column-reverse;
        .box-side {
          margin-bottom: 50px;
        }
        .box-main {
          text-align: center;
        }
      }
      .box-heading {
        font-size: 26px;
        margin-bottom: 10px;
        color: #282846;
        line-height: 30px;
        opacity: 0.9;
        font-family: "silka blod";
        font-weight: 700;
      }
      .box-description {
        max-width: 700px;
        font-size: 15px;
        opacity: 0.8;
        color: #282846;
        margin-bottom: 25px;
        margin-bottom: 30px;
        font-weight: normal;
      }
      .btn {
        border: solid 1px @mainColorDark;
        background-color: transparent;
        color: @mainColorDark;
        box-shadow: none;
        width: 165px;
        border-radius: 6px;
        text-align: center;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        text-transform: uppercase;
        display: inline-block;
        text-decoration: none;
        padding-right: 8px;
        padding-left: 8px;
        letter-spacing: 1px;
        transition: background-color 0.4s ease, color 0.4s ease,
          transform 0.4s ease;
        &:hover {
          border: solid 1px @mainColorDark;
          background-color: @mainColorDark;
          color: #fff;
        }
      }
    }
  }

  .sec-header {
    position: relative;
    top: -30px;
    margin-bottom: 55px;
    .heading {
      margin: 0 auto;
      text-align: center;
      font-weight: 600;
      margin-bottom: 20px;
      line-height: 1.4;
      color: #3c3c57;
      font-family: "silka";
      font-size: 26px;
    }
    .sub {
      max-width: 500px;
      color: #51516a;
      text-align: center;
      margin: 0 auto;
      line-height: 1.8;
      font-weight: 400;
      font-size: 15px;
    }
  }

  .building-step-wrap {
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    top: -30px;
    a {
      display: inline-block;
      width: 100%;
    }
    .box {
      height: 210px;
      position: relative;
      max-width: 320px;
      min-width: 200px;
      margin: 0 auto;
      margin-bottom: 20px;
      transform: translateZ(0);
      transition: transform 0.25s ease-out 0s;
      padding: 35px 30px;
      background: #fff;
      border: 1px solid #ededed;
      box-shadow: 0 8px 14px 0 rgba(60, 60, 60, 9%);
      @media screen and(max-width:@MQMobile) {
        max-width: 70%;
      }
      @media screen and(max-width:576px) {
        max-width: 100%;
      }
      &:hover {
        transform: translateZ(0) scale(1.051);
        .box-heading {
          color: #4e5ee4;
        }
        .icon.icon0 {
          background: url("../assets/doc-icon-blue.svg") no-repeat;
        }
        .icon.icon1 {
          background: url("../assets/text-icon-blue.svg") no-repeat;
        }
        .icon.icon2 {
          background: url("../assets/play-icon-blue.svg") no-repeat;
        }
      }
      .icon {
        position: absolute;
        right: 33px;
        top: 33px;
        opacity: 0.8;
        transition: all 0.25s linear;
        width: 24px;
        height: 24px;
        &.icon0 {
          background: url("../assets/doc-icon.svg") no-repeat;
        }
        &.icon1 {
          background: url("../assets/text-icon.svg") no-repeat;
        }
        &.icon2 {
          background: url("../assets/play-icon.svg") no-repeat;
        }
      }
      .box-heading {
        opacity: 0.9;
        font-family: "silka";
        font-size: 18px;
        color: #282846;
        line-height: 30px;
        white-space: nowrap;
        margin-bottom: 14px;
        font-weight: 700;
      }
      .box-des {
        font-size: 15px;
        opacity: 0.8;
        color: #282846;
        margin-bottom: 30px;
        line-height: 1.6;
        font-weight: 400;
      }
    }
  }
}
</style>
