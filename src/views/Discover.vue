<template>
    <div class="discover">
        <section class="unmerge clearfix">
            <div class="left">
                <div class="top">
                    <p class="title">金币商城</p>
                    <p class="tips">0元好物在这里</p>
                </div>
                <div class="bottom">
                    <img class="img" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/">
                </div>
            </div>
            <div class="right">
                <div class="top clearfix">
                    <div class="text">
                        <p class="title">推荐有奖</p>
                        <p class="tips">20元现金拿不停</p>
                    </div>
                    <div class="image">
                        <img class="icon" src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/">
                    </div>
                </div>
                <div class="bottom">
                    <div class="text">
                        <p class="title">周边优惠</p>
                        <p class="tips">领取口碑好券</p>
                    </div>
                    <div class="image">
                        <img class="icon" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/">
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
            <p class="activity-sub-title">
                你的口味，我都懂得
            </p>
            <div class="activity-recommend">
                <section class="recommend-item">
                    <img class="recommend-image" src="https://fuss10.elemecdn.com/a/6a/5b42eff31b2e03aa7c99725df4777jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/">

                </section>
                <section class="recommend-item">
                    <img class="recommend-image" src="https://fuss10.elemecdn.com/a/6a/5b42eff31b2e03aa7c99725df4777jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/">
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default{
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/common.scss';
    .discover{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f5f5f5;
    }
    .unmerge{
        height:4.4rem;
        margin-bottom:.2rem;
        background-color:#fff;
        .left{
            box-sizing: border-box;
            float:left;
            width:50%;
            height:4rem;
            border-right:1px solid #eee;
            .top{
                box-sizing:border-box;
                height:2rem;
                text-align:left;
                padding-top:.4rem;
                padding-left:.4rem;
                .title{
                    color: rgb(255, 153, 0);
                    margin-bottom:.2rem;
                    font-size: pxToRem(16);
                }
                .tips{
                    color: #999;
                }
            }
            .bottom{
                box-sizing:border-box;
                height:2rem;
                text-align:right;
                padding-right:.2rem;
                .img{
                    width:1.8rem;
                    height:1.8rem;
                }
            }
        }
        .right{
            float:left;
            width:50%;
            height:4.4rem;
            .top{
                box-sizing: border-box;
                height:2.2rem;
                padding-top: .3rem;
                padding-left:.2rem;
                padding-right:.4rem;
                border-bottom:1px solid #eee;
                text-align:left;
                .text{
                    float:left;
                    .title{
                        color: rgb(27, 169, 225);
                        font-size: pxToRem(16);
                        margin-bottom: .2rem;
                    }
                    .tips{
                        color:#999;
                    }
                }
                .image{
                    float:right;
                    .icon{
                        width:1.4rem;
                        height:1.4rem;
                    }
                }
            }
            .bottom{
                box-sizing: border-box;
                height:2.2rem;
                padding-top: .3rem;
                padding-left:.2rem;
                padding-right:.4rem;
                text-align:left;
                .text{
                    float:left;
                    .title{
                        color: rgb(237, 102, 96);
                        margin-bottom:.2rem;
                        font-size: pxToRem(16);
                    }
                    .tips{
                        color: #999;
                    }
                }
                .image{
                    float:right;
                    .icon{
                        width:1.4rem;
                        height:1.4rem;
                    }
                }
            }
        }
    }
    .activity{
        text-align: center;
        font-size: .48rem;
        font-weight: 700;
        color: #333;
        background-color: #fff;
        .activity-header{
            padding-top:.4rem;
            font-size:.48rem;
            font-weight: 700;
            .line{
                display: inline-block;
                margin: pxToRem(10) pxToRem(5) pxToRem(8);
                border-top: 1px solid #333;
                width: pxToRem(14);
                height: 0;
                position: relative;
                &::after{
                    position: absolute;
                    top: pxToRem(-3);
                    content: "";
                    background: #333;
                    height: pxToRem(5);
                    width: pxToRem(5);
                    border-radius: 50%;
                }
            }
            .left{
                &::after{
                    right: -.066667rem;
                }
            }
            .right{
                &::after{
                    left: -.066667rem;
                }
            }
        }
        .activity-sub-title{
            font-size:pxToRem(10);
            color:#999;
            padding-bottom:pxToRem(5);
            font-weight: 400;
        }
        .activity-recommend{
            .recommend-item{
                display:inline-block;
                width:pxToRem(180);
                .recommend-image{
                    width:pxToRem(180);
                }
            }
        }
    }
</style>