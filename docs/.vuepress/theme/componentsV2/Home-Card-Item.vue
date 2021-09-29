<template>
  <div>
    <div class="product-card">
      <div class="card-header"><img :src="cardImg" alt="" /></div>
      <div class="card-content">
        <p class="des">
          {{ subLeading }}
        </p>
        <ul>
          <li v-for="(value, index) in desList" :key="index + 'des'">
            <a-icon type="check" />
            <p>{{ value }}</p>
          </li>
        </ul>
      </div>

      <div class="card-footer">
        <a v-for="(value, index) in actions" :href="value.link" class="btn">
          {{ value.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardImg: "",
    subLeading: "",
    desList: [],
    actions: [],
  },
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
.product-card {
  height: 100%;
  background: #ffffff;
  border: 1px solid #ededed;
  border-radius: 6px;
  overflow: hidden;
  transform: translateZ(0px);
  will-change: transform;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.1rem 0.3rem,
    rgba(0, 0, 0, 0.05) 0px 0.1rem 0.2rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 1.5rem;
  transition: all 0.25s ease-out 0s;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 0;
  min-height: 500px;
  max-width: 450px;
  align-self: center;
  .card-header {
    flex: 0;
    border-bottom: solid 1px #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 110px;
    img {
      height: 36px;
    }
  }
  .card-content {
    flex: 1;
    padding: 30px 0 25px;
    height: 100%;
    .des {
      margin-bottom: 20px;
      opacity: 0.8;
      font-size: 14px;
      color: #282846;
      font-weight: 600;
      font-family: "silka";
    }
    ul li {
      opacity: 0.8;
      font-size: 15px;
      color: #282846;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 10px;
      .anticon {
        position: relative;
        top: 5px;
        margin-right: 5px;
        font-size: 12px;
      }
    }
  }
  .card-footer {
    flex: 0;
    display: flex;
    flex-direction: row;
    .btn {
      flex: 1;
      margin-right: 10px;
      &:last-of-type {
        margin-right: 0;

        border: solid 1px #282846;
        background-color: transparent;
        color: #282846;
        box-shadow: none;
      }

      background-color: #282846;
      box-shadow: 0 4px 5px 0 rgb(203 203 203 / 81%);
      border-radius: 6px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      color: #fff;
      text-transform: uppercase;
      display: inline-block;
      text-decoration: none;
      padding: 0 8px;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 13px;
      transition: background-color 0.4s ease, color 0.4s ease,
        transform 0.4s ease;
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.8);
      font-family: silka;
      &:hover {
        background-color: #38386d;
        color: #fff;
      }
      &.btn-border {
        border: solid 1px #282846;
        background-color: transparent;
        color: #282846;
        box-shadow: none;
      }
    }
  }
}
</style>
