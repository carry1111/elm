<template>
  <div class="page">
    <header class="header">
      <div class="index">
        <i class="iconfont icon-Shape"></i>
        <span class="text">天河城</span>
        <i class="iconfont icon-f11-copy"></i>
      </div>
    </header>
    <div class="search" @click="search">
      <a class="content">
        <i class="iconfont icon-sousuo"></i>
        <span class="text">搜索饿了么商家、商家名称</span>
      </a>
    </div>
    <mt-swipe :auto="0" class="foodentry">
      <mt-swipe-item v-for="(item, index) in navList" :key="index">
        <ul>
          <li v-for="(subItem, index) in item" :key="index">
            <a href="#">
              <img class="container" :src="subItem.imgUrl" />
              <span>{{subItem.name}}</span>
            </a>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
    <div class="container">
      <div class="lego">
        <h3>品质套餐</h3>
        <div>搭配齐全吃得好</div>
        <p>立即抢购 ></p>
        <img
          src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
        />
      </div>
      <div class="member">
        <span class="left">
          <i class="iconfont icon-huangguan"></i>
          <span class="super">超级会员</span>
          <span>每月领20元红包</span>
        </span>
        <span class="right">立即开通</span>
      </div>
      <div class="banner">
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for="(item, index) in swipeList" :key="index">
            <a href="#">
              <img class="index-1eegU_1" :src="item"/>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="shoplist-title">推荐商家</div>
    <div class="home-filter">
      <ul class="clearfix">
        <li>
          <span class="paixu">综合排序</span>
        </li>
        <li>距离最近</li>
        <li>品质联盟</li>
        <li>筛选</li>
      </ul>
    </div>
    <shoplist :isToBottom="isBottom"></shoplist>
    <div class="backTop" v-show="isShowBackTop">
      <a href="#">
        <i class="iconfont icon-dingbu"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
import { navList } from "@/data/nav.js";
import shoplist from "@/pages/page/components/shoplist.vue";
export default {
  name: "page",
  data() {
    return {
      isShowBackTop: false,
      isBottom: false,
      navList: navList,
      swipeList: [
        'https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
        'https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/',
      ]
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showError
        );
      } else {
        console.log("该浏览器不支持定位功能！");
      }
    },
    showPosition(position) {
      console.log(
        "纬度：" +
          position.coords.latitude +
          "\n经度：" +
          position.coords.longitude
      );
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("用户拒绝对获取地理位置的请求。");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("位置信息是不可用的。");
          break;
        case error.TIMEOUT:
          console.log("请求用户地理位置超时。");
          break;
        case error.UNKNOWN_ERROR:
          console.log("未知错误。");
          break;
      }
    },
    search() {
      this.$router.push("/search");
    },
    showBackTop(scrollTop) {
      if (scrollTop >= 150) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
    isToBottom(scrollTop, windowHeight, scrollHeight) {
      const HeightFromBottom = 4;
      if (scrollTop + windowHeight >= scrollHeight - HeightFromBottom) {
        this.isBottom = true;
      } else {
        this.isBottom = false;
      }
    },
    handleScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      this.showBackTop(scrollTop);
      this.isToBottom(scrollTop, windowHeight, scrollHeight);
    }
  },
  components: {
    mtSwipe: Swipe,
    mtSwipeItem: SwipeItem,
    shoplist: shoplist,
  },
  mounted() {
    this.getLocation();
    window.addEventListener("scroll", this.handleScroll);
    console.log('内容');
  }
};
</script>
<style lang="scss">
.mint-swipe-indicator.is-active.is-active {
  background: #00a6ff !important;
}
.mint-swipe-indicator {
  width: 0.24rem !important;
  height: 0.04rem !important;
  display: inline-block !important;
  background: #000 !important;
  opacity: 0.2 !important;
}
</style>
<style lang="scss" scoped>
@import "src/assets/scss/common.scss";
.header {
  padding-top: 0.42rem;
  padding-left: 0.3rem;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  text-align: left;
  font-size: pxToRem(14);
  height: 0.7rem;
  .index {
    width: 60%;
    height: 0.4rem;
    font-weight: 700;
    i {
      font-size: pxToRem(14);
    }
    .text {
      max-width: 80%;
      margin: 0 0.1rem;
      font-size: 0.453333rem;
      @include textflow;
    }
  }
}
.search {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  height: 0.86rem;
  padding: 0.3rem;
  position: sticky;
  top: 0;
  z-index: 999;
  .content {
    display: block;
    width: 100%;
    line-height: 0.86rem;
    background-color: #fff;
    color: #999;
    font-size: pxToRem(12);
    border-radius: 0.026667rem;
    .text {
      margin-left: 0.1rem;
      font-size: pxToRem(14);
    }
  }
}
.foodentry {
  overflow: hidden;
  width: 100%;
  height: 4.72rem;
  background-color: #fff;
  text-align: center;
  position: relative;
  ul {
    li {
      float: left;
      width: 20%;
      margin-top: 0.2rem;
      a {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #000;
        .container {
          display: inline-block;
          width: 1.2rem;
          height: 1.2rem;
        }
        span {
          display: block;
        }
      }
    }
  }
}
.container {
  padding: 0 0.3rem;
  .lego {
    position: relative;
    text-align: left;
    padding-left: 0.4rem;
    padding-top: 0.3rem;
    margin-bottom: 0.1rem;
    height: 2.7rem;
    background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
    h3 {
      font-size: pxToRem(16);
      font-weight: 700;
    }
    h3,
    div,
    p {
      margin-bottom: 0.15rem;
    }
    div {
      color: #777;
      font-size: pxToRem(13);
    }
    p {
      color: #af8260;
      font-weight: 700;
    }
    img {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      width: 3.8rem;
      height: 2.5rem;
    }
  }
  .member {
    padding: 0.2rem 0.3rem;
    display: flex;
    display: -webkit-flex;
    background-image: linear-gradient(90deg, #ffefc4, #f3dda0);
    margin-bottom: 0.1rem;
    .left {
      flex: auto;
      text-align: left;
      i {
        // color:yellow;
        margin-right: 0.1rem;
      }
      .super {
        font-weight: 700;
        font-size: pxToRem(16);
      }
    }
    .right {
      width: 1.8rem;
      padding: 0.1rem 0;
    }
  }
  .banner {
    overflow: hidden;
    width: 100%;
    height: 2.6rem;
    background-color: #fff;
    text-align: center;
    position: relative;
    // margin-top:.2rem;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.shoplist-title {
  font-size: 14px;
  font-weight: 500;
  position: relative;
  height: 0.96rem;
  line-height: 0.96rem;
  &::before,
  &::after {
    display: inline-block;
    content: "";
    width: 0.6rem;
    height: 0.02rem;
    background-color: #999;
    position: absolute;
    top: 50%;
  }
  &::before {
    left: 34%;
  }
  &::after {
    right: 34%;
  }
}
.home-filter {
  position: sticky;
  top: 1.45rem;
  z-index: 100;
  background-color: #fff;
  ul {
    li {
      float: left;
      width: 25%;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .35rem;
      color: #666;
    }
  }
  .paixu {
    position: relative;
    &::after {
      position: absolute;
      left: 110%;
      top: 50%;
      content: '';
      width: 0;
      height: 0;
      border-top: 3px solid #000;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }
}
.test {
  width: 100%;
  height: 5rem;
}
.backTop {
  position: fixed;
  right: 0.5rem;
  bottom: 2rem;
  z-index: 9999;
  a {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 50%;
    color: #000;
    i {
      font-size: pxToRem(18);
    }
  }
}
</style>

