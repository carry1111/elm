<template>
  <div class="shop_item" @click="shopPage">
    <div class="shop-info">
      <div class="logo">
        <img
          alt="DQ(广州中华广场店)"
          src="https://fuss10.elemecdn.com/4/67/2ed98369e2cb177972b437a5e56afpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
        />
        <!-- <img alt="DQ(广州中华广场店)" :src="item.img"> -->
      </div>
      <div class="index">
        <div class="index-item index-item1">
          <h3>{{item.title}}</h3>
          <span class="right">···</span>
        </div>
        <div class="index-item index-item2">
          <rater :value="item.score" :font-size="14" disabled :margin="0"></rater>
          {{item.score}} 月售7单
          <span class="right">
            <span class="fengniao">蜂鸟专送</span>
          </span>
        </div>
        <div class="index-item index-item3">
          <span>¥20起送</span>
          <span class="gege">|</span>
          <span>免配送费</span>
          <span class="right">
            <span class="juli">3.59km</span>
            <span>31分钟</span>
          </span>
        </div>
      </div>
    </div>
    <div class="shop-activity">
      <div class="title">
        <span>奶茶果汁</span>
        <span>品质联盟</span>
      </div>
      <div class="activity">
        <div class="item">
          <span class="tejia">特</span>
          <span>特价商品29.9元起</span>
        </div>
        <div class="item">
          <span class="jian">减</span>
          <span>满25减6，满45减12，满65减15，满100减18</span>
        </div>
        <div v-show="isShow">
          <div class="item">
            <span class="super">折</span>
            <span>超级会员折扣商品4折起</span>
          </div>
          <div class="item">
            <span class="shou">首</span>
            <span>新用户下单立减17元</span>
          </div>
          <div class="item">
            <span class="bao">保</span>
            <span>该商户食品安全已由国泰产险承担，食品安全有保障</span>
          </div>
        </div>
        <div class="btn" @click.stop="toggle()">5个活动</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Rater } from "vux";
export default {
  name: "shop_item",
  data() {
    return {
      isShow: false
    };
  },
  props: ["item"],
  methods: {
    shopPage() {
      this.$router.push("/home");
    },
    toggle() {
      this.isShow = !this.isShow;
    }
  },
  components: {
    rater: Rater
  }
};
</script>
<style lang="scss" scoped>
@import "src/assets/scss/common.scss";
.shoplist {
}
.shop {
  padding: 0.45rem 0;
  border-bottom: 0.013333rem solid #eee;
}
.shop-info {
  display: flex;
  display: -webkit-flex;
  padding: 0 0.25rem;
}
.logo {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 0.013333rem solid rgba(0, 0, 0, 0.08);
    // border-radius: .053333rem;
  }
}
.index {
  text-align: left;
  padding-left: 0.25rem;
  flex: auto;
  .index-item {
    position: relative;
    margin-bottom: pxToRem(4);
    .right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .fengniao {
      padding: 0 0.04rem;
      background-image: $bgImage;
      color: #fff;
    }
  }
  .index-item1 {
    font-size: pxToRem(14);
  }
  // .index-item2{
  //     height:.6rem;
  // }
  .index-item3 {
    .gege {
      display: inline-block;
      color: #ddd;
      margin: 0 0.06rem;
    }
    .juli:after {
      content: "|";
      color: #ddd;
      margin: 0 0.06rem;
    }
  }
}
.shop-activity {
  padding-left: 2rem;
  padding-right: 0.3rem;
  text-align: left;
  .title {
    margin-top: pxToRem(6);
    margin-bottom: pxToRem(6);
    span {
      margin-right: pxToRem(6);
      border: 1px solid #eee;
      padding: pxToRem(1) pxToRem(1);
    }
  }
  .activity {
    position: relative;
    .item {
      margin-bottom: 0.1rem;
    }
    .tejia {
      background-color: rgb(241, 136, 79);
      color: #fff;
      padding: 0.04rem;
    }
    .jian {
      background-color: rgb(240, 115, 115);
      color: #fff;
      padding: 0.04rem;
    }
    .super {
      background-color: rgb(240, 115, 115);
      color: #fff;
      padding: 0.04rem;
    }
    .shou {
      background-color: rgb(112, 188, 70);
      color: #fff;
      padding: 0.04rem;
    }
    .bao {
      background-color: rgb(153, 153, 153);
      color: #fff;
      padding: 0.04rem;
    }
    .btn {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>