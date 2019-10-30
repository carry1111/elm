<template>
  <div class="discover">
    <section class="unmerge clearfix">
      <div class="left">
        <div class="top">
          <p class="title">金币商城</p>
          <p class="tips">0元好物在这里</p>
        </div>
        <div class="bottom">
          <img
            class="img"
            src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
          />
        </div>
      </div>
      <div class="right">
        <div class="top clearfix">
          <div class="text">
            <p class="title">推荐有奖</p>
            <p class="tips">20元现金拿不停</p>
          </div>
          <div class="image">
            <img
              class="icon"
              src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
            />
          </div>
        </div>
        <div class="bottom">
          <div class="text">
            <p class="title">周边优惠</p>
            <p class="tips">领取口碑好券</p>
          </div>
          <div class="image">
            <img
              class="icon"
              src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="activity">
      <div class="activity-header">
        <span class="line left"></span>
        为你推荐
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">你的口味，我都懂得</p>
      <div class="activity-recommend">
        <section class="recommend-item" v-for="(item, index) in recommend" :key="index">
          <img class="recommend-image" :src="item.imgUrl" />
          <h4 class="recommend-name">{{item.name}}</h4>
          <div class="recommend-num">月售{{item.sellNum}}份 好评率100%</div>
          <div class="recommend-price">
            <i>¥</i>
            <span>{{item.price}}</span>
          </div>
        </section>
      </div>
      <div class="more">
        <span>查看更多</span>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="line left"></span>
        限时好礼
        <span class="line right"></span>
      </div>
      <p class="activity-sub-title">金币换豪礼</p>
      <div class="activity-body">
        <a class="food" href="javascript:;" v-for="(item, index) in food" :key="index">
          <img class="image" :src="item.imgUrl" alt />
          <div class="name">{{item.name}}</div>
          <div class="price">{{item.price}}</div>
        </a>
      </div>
      <div class="more">
        <span>查看更多</span>
      </div>
    </div>
    <div class="di"></div>
  </div>
</template>
<script>
import { recommend, food } from "@/data/recommend.js";
export default {
  data() {
    return {
      recommend: recommend,
      food: food
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
.discover {
  background-color: #f5f5f5;
}
.unmerge {
  height: 4.4rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
  .left {
    box-sizing: border-box;
    float: left;
    width: 50%;
    height: 4rem;
    border-right: 1px solid #ededed;
    .top {
      box-sizing: border-box;
      height: 2rem;
      text-align: left;
      padding-top: 0.4rem;
      padding-left: 0.4rem;
      .title {
        color: rgb(255, 153, 0);
        margin-bottom: 0.2rem;
        font-size: pxToRem(16);
      }
      .tips {
        color: #999;
      }
    }
    .bottom {
      box-sizing: border-box;
      height: 2rem;
      text-align: right;
      padding-right: 0.2rem;
      .img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
  .right {
    float: left;
    width: 50%;
    height: 4.4rem;
    .top {
      box-sizing: border-box;
      height: 2.2rem;
      padding-top: 0.3rem;
      padding-left: 0.2rem;
      padding-right: 0.4rem;
      border-bottom: 1px solid #eee;
      text-align: left;
      .text {
        float: left;
        .title {
          color: rgb(27, 169, 225);
          font-size: pxToRem(16);
          margin-bottom: 0.2rem;
        }
        .tips {
          color: #999;
        }
      }
      .image {
        float: right;
        .icon {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
    .bottom {
      box-sizing: border-box;
      height: 2.2rem;
      padding-top: 0.3rem;
      padding-left: 0.2rem;
      padding-right: 0.4rem;
      text-align: left;
      .text {
        float: left;
        .title {
          color: rgb(237, 102, 96);
          margin-bottom: 0.2rem;
          font-size: pxToRem(16);
        }
        .tips {
          color: #999;
        }
      }
      .image {
        float: right;
        .icon {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
  }
}
.activity {
  text-align: center;
  font-size: 0.48rem;
  font-weight: 700;
  color: #333;
  background-color: #fff;
  margin-bottom: pxToRem(10);
  .activity-header {
    padding-top: 0.4rem;
    font-size: 0.48rem;
    font-weight: 700;
    .line {
      display: inline-block;
      margin: pxToRem(10) pxToRem(5) pxToRem(8);
      border-top: 1px solid #333;
      width: pxToRem(14);
      height: 0;
      position: relative;
      &::after {
        position: absolute;
        top: pxToRem(-3);
        content: "";
        background: #333;
        height: pxToRem(5);
        width: pxToRem(5);
        border-radius: 50%;
      }
    }
    .left {
      &::after {
        right: -0.066667rem;
      }
    }
    .right {
      &::after {
        left: -0.066667rem;
      }
    }
  }
  .activity-sub-title {
    font-size: pxToRem(10);
    color: #999;
    padding-bottom: pxToRem(5);
    font-weight: 400;
  }
  .activity-recommend {
    .recommend-item {
      box-sizing: border-box;
      display: inline-block;
      text-align: left;
      width: 50%;
      padding: 0 5px 0 10px;
      .recommend-image {
        width: 100%;
      }
      .recommend-name {
        @include textflow;
        font-size: pxToRem(16);
      }
      .recommend-num {
        font-size: pxToRem(10);
        color: #666;
        margin-top: pxToRem(4);
      }
      .recommend-price {
        margin-top: pxToRem(4);
        font-size: pxToRem(15);
        color: #ff6000;
        text-align: left;
        i {
          font-size: pxToRem(8);
        }
      }
    }
  }
  .activity-body {
    .food {
      box-sizing: border-box;
      padding: 0 10px;
      display: inline-block;
      width: 33.3%;
      text-align: left;
      color: #333;
      .image {
        width: 100%;
        height: pxToRem(100);
      }
      .name {
        margin-top: pxToRem(4);
        font-size: pxToRem(13);
        font-weight: 500;
        @include textflow;
      }
      .price {
        margin-top: pxToRem(4);
        font-size: pxToRem(12);
        font-weight: 500;
        color: #ff5339;
      }
    }
  }
  .more {
    padding: 24px;
    font-size: pxToRem(13);
    color: #999;
    span {
      position: relative;
    }
    span::after {
      position: absolute;
      left: 100%;
      top: 50%;
      display: block;
      content: "";
      width: 7px;
      height: 7px;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      transform: rotate(45deg) translateY(-50%);
    }
  }
}
.di{
    background-color: #f5f5f5;
    height: pxToRem(1);
}
</style>