<template>
  <div class="profile">
      <section class="head clearfix" @click="toLogin">
          <div class="headimg">
              <img class="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
          </div>
          <div class="login">
              <h3>登录/注册</h3>
              <p>登录后享受更多特权</p>
          </div>
      </section>
      <section class="maininfo clearfix">
          <div class="hongbao">
              <span class="num">
                  <span class="zero">0</span>个
              </span>
              <span class="text">红包</span>
            </div>
          <div class="jinbi">
              <span class="num">
                  <span class="zero">0</span>个
              </span>
              <span class="text">金币</span>
            </div>
      </section>
      <section class="site">
            <div class="item clearfix" v-for="(item, index) in list" :key="index">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">{{item}}</span>
              <i class="iconfont icon-icon jiantou"></i>
            </div>
      </section>
      <!-- <section class="site">
          <div class="item clearfix">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">我的地址</span>
              <i class="iconfont icon-icon jiantou"></i>
          </div>
      </section>
      <section class="site">
          <div class="item clearfix">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">金币商城</span>
              <i class="iconfont icon-icon jiantou"></i>
          </div>
          <div class="item clearfix">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">分享拿20元现金</span>
              <i class="iconfont icon-icon jiantou"></i>
          </div>
      </section>
      <section class="site">
          <div class="item clearfix">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">我的客服</span>
              <i class="iconfont icon-icon jiantou"></i>
          </div>
          <div class="item clearfix">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">下载饿了么app</span>
              <i class="iconfont icon-icon jiantou"></i>
          </div>
          <div class="item clearfix">
              <i class="iconfont icon-dizhi1 icon"></i>
              <span class="text">规则中心</span>
              <i class="iconfont icon-icon jiantou"></i>
          </div>
      </section> -->
      <div class="yinsi">
          <a href="#">隐私政策</a>
      </div>
  </div>
</template>

<script>
import { list } from '@/data/myList.js'
export default {
    name: "profile",
    data() {
        return {
            list: list
        }
    },
    methods:{
        toLogin(){
            this.$router.push('/login');
        }
    },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/common.scss';
    .profile{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f5f5f5;
    }
    .head{
        background-image: linear-gradient(90deg,#0af,#0085ff);
        padding:.6rem;
        .headimg{
            float:left;
            .img{
                width:1.5rem;
                height:1.5rem;
                border-radius: 50%;
            }
        }
        .login{
            float:left;
            color:#fff;
            text-align:left;
            margin-left:.4rem;
            h3{
                font-size:18px;
                font-weight: 700;
                margin:.2rem 0;
            }
        }
    }
    .maininfo{
        background-color:#fff;
        .hongbao,.jinbi{
            box-sizing: border-box;
            float:left;
            width:50%;
            padding:.4rem; 
            .num{
                display:block;
                .zero{
                    font-size:pxToRem(20);
                    font-weight: 700;
                }
            }
            .text{

            }
        }
        .hongbao{
            .num{
                color:red;
            }
        }
        .jinbi{
            .num{
                color:green;
            }
        }
    }
    .site{
        .item{
            background-color: #fff;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: pxToRem(14);
            &:nth-child(1), 
            &:nth-child(2), 
            &:nth-child(4) {
                margin-top: .2rem;
            }
            .icon{
                float: left;
                width: 1rem;
            }
            .text{
                float: left;
            }
            .jiantou{
                float: right;
                width: 1rem;
            }
        }
    }
    .yinsi{
        margin:.8rem 0;
        color: #4da6f0;
        font-size: .4rem;
        a{
            color:inherit;
        }
    }
    .liu{
        height:2rem;
        background-color:#eee;
    }
</style>

