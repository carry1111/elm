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
        <mt-swipe-item>
            <ul>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>美食</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>晚餐</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>商超福利</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>水果</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>医药健康</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>浪漫鲜花</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>跑腿代购</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>汉堡披萨</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>厨房生鲜</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>炸鸡炸串</span>
                    </a>
                </li>
            </ul>
        </mt-swipe-item>
        <mt-swipe-item>
             <ul>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>地方菜系</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>麻辣烫</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>速食简餐</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>地方小吃</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>大牌惠吃</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>米粉面馆</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>包子粥店</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="container" src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
                        <span>速食简餐</span>
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
            <img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/">
        </div>
        <div class="member">
            <span class="left">
                <i class="iconfont icon-huangguan"></i>
                <span class="super">超级会员</span>
                <span> 每月领20元红包</span>
            </span>
            <span class="right">立即开通</span>
        </div>
        <div class="banner">
            <mt-swipe :auto="2000">
                <mt-swipe-item>
                    <a href="#">
                        <img class="index-1eegU_1" src="https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img class="index-1eegU_1" src="https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="#">
                        <img class="index-1eegU_1" src="https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
    <div class="shoplist-title">
        推荐商家
    </div>
    <div class="home-filter">
        <ul class="clearfix">
            <li>综合排序</li>
            <li>距离最近</li>
            <li>品质联盟</li>
            <li>筛选</li>
        </ul>
    </div>
    <shoplist></shoplist>
    <div class="backTop" v-show="isShowBackTop">
        <a href="#">
            <i class="iconfont icon-dingbu"></i>
        </a>
    </div>
    <!-- <foot></foot> -->
    <!-- <foot-one></foot-one> -->
    <!-- <ul class="foot clearfix">
        <li class="li">首页</li>
        <router-link to="/home" class="li">发现</router-link>
        <li class="li">订单</li>
        <router-link to="/profile" class="li">我的</router-link>
    </ul> -->
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import foot from '@/components/common/foot.vue'
import footOne from '@/components/common/foot_one.vue'
import shoplist from '@/components/shop/shoplist.vue'
export default {
    name: "page",
    data(){
        return{
            isShowBackTop: false,
        }
    },
    methods:{
        getLocation:function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
            } else {
                console.log("该浏览器不支持定位功能！");
            }
        },
        showPosition:function(position) {
            console.log("纬度：" + position.coords.latitude + "\n经度："
                + position.coords.longitude);
        },
        showError:function (error) {
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
        search(){
            this.$router.push('/search');
        },
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop >= 150){
                this.isShowBackTop = true;
            }else{
                this.isShowBackTop = false;
            }
        },
    },
    components:{
        'mtSwipe':Swipe,
        'mtSwipeItem':SwipeItem,
        'foot':foot,
        'shoplist':shoplist,
        'footOne':footOne,
    },
    mounted(){
        this.getLocation();
        window.addEventListener('scroll',this.handleScroll);
    }
};
</script>
<style lang="scss">
.mint-swipe-indicator.is-active.is-active {
    background: #00a6ff!important;
}
.mint-swipe-indicator {
    width: .24rem!important;
    height: .04rem!important;
    display: inline-block!important;
    background: #000!important;
    opacity: .2!important;
}
</style>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .header{
        padding-top: .42rem;
        padding-left: .3rem;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        color:#fff;
        text-align: left;
        font-size:pxToRem(14);
        height:.7rem;
        .index{
            width:60%;
            height:.4rem;
            font-weight:700;
            i{
                font-size:pxToRem(14);
            }
            .text{
                max-width: 80%;
                margin: 0 .1rem;
                font-size: .453333rem;
                @include textflow
            }
        }
    }
    .search{
        background-image: linear-gradient(90deg,#0af,#0085ff);
        height:.86rem;
        padding:.3rem;
        position: sticky;
        top:0;
        z-index:999;
        .content{
            display:block;
            width:100%;
            line-height:.86rem;
            background-color:#fff;
            color:#999;
            font-size:pxToRem(12);
            border-radius: .026667rem;
            .text{
                margin-left:.1rem;
                font-size:pxToRem(14);
            }
        }
    }
    .foodentry{
        overflow: hidden;
        width:100%;
        height: 4.72rem;
        background-color: #fff;
        text-align: center;
        position: relative;
        ul{
            li{
                float:left;
                width:20%;
                margin-top:.2rem;
                a{
                    display:block;
                    width:100%;
                    height:100%;
                    text-align:center;
                    color:#000;
                    .container{
                        display:inline-block;
                        width:1.2rem;
                        height:1.2rem;
                    }
                    span{
                        display:block;
                    }
                }
            }
        }
    }
    .container{
        padding:0 .3rem;
        .lego{
            position: relative;
            text-align: left;
            padding-left:.4rem;
            padding-top:.3rem;
            margin-bottom:.1rem;
            height:2.7rem;
            background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
            h3{
                font-size:pxToRem(16);
                font-weight:700;
            }
            h3,div,p{
                margin-bottom:.15rem;
            }
            div{
                color: #777;
                font-size:pxToRem(13);
            }
            p{
                color: #af8260;
                font-weight: 700;
            }
            img{
                position:absolute;
                top:.2rem;
                right:.2rem;
                width:3.8rem;
                height:2.5rem;
            }
        }
        .member{
            padding:.2rem .3rem;
            display:flex;
            display:-webkit-flex;
            background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
            margin-bottom:.1rem;
            .left{
                flex:auto;
                text-align:left;
                i{
                    // color:yellow;
                    margin-right:.1rem;
                }
                .super{
                    font-weight:700;
                    font-size:pxToRem(16);
                }
            }
            .right{
                width:1.8rem;
                padding:.1rem 0;
            }
        }
        .banner{
            overflow: hidden;
            width:100%;
            height: 2.6rem;
            background-color: #fff;
            text-align: center;
            position: relative;
            // margin-top:.2rem;
            img{
                width:100%;
                height:auto;
            }
        }
    }
    .shoplist-title{
        font-size:14px;
        font-weight: 500;
        position: relative;
        height:.96rem;
        line-height:.96rem;
        &::before,&::after{
            display:inline-block;
            content:'';
            width:.6rem;
            height:.02rem;
            background-color:#999;
            position:absolute;
            top:50%;
        }
        &::before{
            left:34%;
        }
        &::after{
            right:34%;
        }
    }
    .home-filter{
        ul{
            li{
                float:left;
                width:25%;
                height:1rem;
                line-height:1rem;
                font-size:.35rem;
            }
        }
    }
    .test{
        width:100%;
        height:5rem;
    }
    .backTop{
        position: fixed;
        right: .5rem;
        bottom:2.0rem;
        z-index:9999;
        a{
            display:block;
            width:1.2rem;
            height:1.2rem;
            line-height:1.2rem;
            border:1px solid #ccc;
            background-color:#fff;
            border-radius:50%;
            color:#000;
            i{
                font-size:pxToRem(18);
            }
        }
    }
    // .foot{
    //     position:fixed;
    //     bottom:0;
    //     left:0;
    //     width:100%;
    //     height:pxToRem(40);
    //     line-height:pxToRem(40);
    //     background-color:#fff;
    //     border-top: .013333rem solid #ccc;
    //     .li{
    //         float:left;
    //         width:25%;
    //         text-align:center
    //     }
    // }
</style>

