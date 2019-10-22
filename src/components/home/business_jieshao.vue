<template>
  <header class="jieshao">
    <div class="bg">
      <a href="javascript:;" class="back" @click="back"></a>
    </div>
    <div class="info">
      <div class="info-photo">
        <div class="photo">
          <img
            src="https://cube.elemecdn.com/2/2b/073b9f0129fc250a2a9c828edf50bjpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
          />
        </div>
      </div>
      <div class="info-text">
        <h1>德洲汉堡</h1>
        <p>商家配送/2分钟送达/配送费5元</p>
        <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
      </div>
    </div>
    <div class="huodong">
      <span class="left">满30减5，满60减8（APP专享）</span>
      <span class="right">3个优惠</span>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
.jieshao {
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    border-top: 1px solid #ccc;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
  }
}
.bg {
  position: relative;
  width: 100%;
  height: pxToRem(100);
  background: url("https://cube.elemecdn.com/2/ee/c7036387c22be25276d094dc3af40png.png") center no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,.6);
  text-align: left;
  .back {
    display: inline-block;
    width: pxToRem(14);
    height: pxToRem(14);
    border-left: pxToRem(2) solid #fff;
    border-bottom: pxToRem(2) solid #fff;
    margin-left: pxToRem(18);
    margin-top: pxToRem(15);
    transform: rotate(45deg);
  }
}
.bg:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
}
.info {
  text-align: left;
  position: relative;
  padding: .2rem;
  &::after,
  &::before {
    display: table;
    content: "";
  }
  &::after {
    clear: both;
  }
}
.info-photo {
  float: left;
}
.info-text {
  float: left;
  margin-left: .3rem;
  h1,
  p {
    margin-bottom: .2rem;
  }
}
.photo {
  width: 1.8rem;
  height: 1.8rem;
  background-color: #ccc;
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
}
.huodong{
  padding: 0 .2rem .2rem;
}
.huodong::after,
.huodong::before {
  display: table;
  content: "";
}
.huodong::after {
  clear: both;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>