<template>
  <div id="evaluate">
    <div class="score">
      <div class="score-item score-num">4.6</div>
      <div class="score-item score-star">
        <span class="txt">商家评分</span>
        <span class="rater">
          <rater value="4.8" :font-size="10" disabled :margin="0"></rater>
        </span>
      </div>
      <div class="score-item score-taste">
        <span class="txt">味道</span>
        <span class="num">4.2</span>
      </div>
      <div class="score-item score-packing">
        <span class="txt">包装</span>
        <span class="num">4.6</span>
      </div>
      <div class="score-item score-delivery">
        <span class="txt">配送</span>
        <span class="num">4.6</span>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <span :class="item.className" v-for="(item, index) in btnList" :key="index" >{{item.txt}}</span>
      </div>
      <div>
        <div class="item" v-for="(item, index) in commentList" :key="index">
          <div class="left">
            <img class="head" :src="item.headPortrait">
          </div>
          <div class="right">
            <div>
              <span class="user-name">{{item.userName}}</span>
              <span class="date">2019-10-18</span>
            </div>
            <div class="text">{{item.text}}</div>
            <div>
              <img class="img" :src="item.imgUrl">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rater } from "vux";
export default {
  name: "evaluate",
  data() {
    return {
      btnList: [
        {
          'txt': "全部",
          'className': 'success',
        },
        {
          'txt': "最新",
          'className': 'success',
        },
        {
          'txt': "好评",
          'className': 'success',
        },
        {
          'txt': "差评",
          'className': 'fail',
        },
        {
          'txt': "有图",
          'className': 'success',
        }
      ],
      commentList: [
        {
          'userName': '匿名用户',
          'headPortrait': 'https://cube.elemecdn.com/d/98/050810d9a25a7b268b4115b2d8690jpeg.jpeg?x-oss-process=image/format,webp/resize,w_86,h_86,m_fixed',
          'text': '味道好，包装可爱，非常喜欢💕',
          'imgUrl': 'https://cube.elemecdn.com/3/ec/d1ad4653989bff666918acb91e7b8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300'
        },
        {
          'userName': '匿名用户',
          'headPortrait': 'https://cube.elemecdn.com/1/4d/0d987a27c4ce814938935d12767fejpeg.jpeg?x-oss-process=image/format,webp/resize,w_86,h_86,m_fixed',
          'text': '可以告诉你们一个神仙吃法：酱烤鸡腿堡加半包孜然粉会很好吃的，而且不辣，喜欢吃辣的可以加一整包。七虾堡加两包番茄酱味道会更好！可以试试哦！',
          'imgUrl': 'https://cube.elemecdn.com/b/70/23f3af7211c318bfa95a9927a6873jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300'
        },
        {
          'userName': '3*******8',
          'headPortrait': 'https://cube.elemecdn.com/0/f3/004cf26216e95880441259307b12ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_86,h_86,m_fixed',
          'text': '送过来热腾腾的  超级好吃',
          'imgUrl': 'https://cube.elemecdn.com/b/f2/75e9684ad26b1ad01d229fcbe5a09jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300'
        },
        {
          'userName': '匿名用户',
          'headPortrait': 'https://cube.elemecdn.com/e/72/13223d198ff5f5d9b461b19e9cc66jpeg.jpeg?x-oss-process=image/format,webp/resize,w_86,h_86,m_fixed',
          'text': '到了门口都不敲门，还把东西拿回商家，从新送过来又不说要多收6块配送费，要是知道要多收钱就不要了，史上最笨骑手',
          'imgUrl': 'https://cube.elemecdn.com/3/ec/d1ad4653989bff666918acb91e7b8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_300'
        },
      ]
    }
  },
  components: {
    rater: Rater
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common.scss";
#evaluate {
  background-color: #f5f5f5;
  height: 100%;
}
.score {
  padding: pxToRem(10) 0;
  height: pxToRem(70);
  margin-bottom: pxToRem(10);
  background-color: #fff;
  .score-item {
    float: left;
    width: 20%;
    height: pxToRem(40);
    padding: pxToRem(10) 0;
  }
  .score-num {
    font-size: pxToRem(36);
    color: #ff6000;
  }
  .rater {
    margin-top: pxToRem(2);
  }
  .score-star,
  .score-taste,
  .score-packing,
  .score-delivery {
    span {
      display: block;
    }
    .num {
      font-size: pxToRem(18);
    }
  }
  .score-star {
    padding: pxToRem(14) 0;
  }
}
.container {
  background-color: #fff;
  padding: pxToRem(10);
  .header {
    text-align: left;
    padding: pxToRem(6) 0;
  }
  span {
    display: inline-block;
    padding: pxToRem(8);
    margin-right: pxToRem(8);
  }
  .success {
    background-color: #ebf5ff;
  }
  .fail {
    background-color: #f5f5f5;
  }
  .item {
    display: flex;
    border-top: 1px solid #ccc;
    padding-top: pxToRem(8);
    margin-bottom: pxToRem(8);
  }
  .left {
    width: pxToRem(40);
    margin-right: pxToRem(8);
  }
  .right {
    flex: 1;
    text-align: left;
  }
  .head{
    width: pxToRem(40);
    height: pxToRem(40);
    border-radius: 50%;
  }
  .img{
    width: pxToRem(120);
    height: pxToRem(120);
  }
  .user-name{
    display: inline-block;
    width: 70%;
    margin: 0;
    padding: 0;
  }
  .date {
    display: inline-block;
    width: 28%;
    text-align: right;
    margin: 0;
    padding: 0;
  }
  .text {
    font-size: pxToRem(14);
    margin: pxToRem(6) 0;
  }
}
</style>