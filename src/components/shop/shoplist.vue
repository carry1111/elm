<template>
    <section class="shoplist">
        <section class="shop" @click="shopPage">
            <div class="shop-info">
                <div class="logo">
                    <img alt="DQ(广州中华广场店)" class="logo-logo_3S1eSkn_0" src="https://fuss10.elemecdn.com/4/67/2ed98369e2cb177972b437a5e56afpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
                </div>
                <div class="index">
                    <div class="index-item index-item1">
                        <h3>DQ(广州中华广场店)</h3>
                        <span class="right">···</span>
                    </div>
                    <div class="index-item">
                        4.9 月售7单 
                        <span class="right">蜂鸟专送</span>
                    </div>
                    <div class="index-item">
                        <span>20起送|免配送费</span>
                        <span class="right">3.59km|31分钟</span>
                    </div>
                </div>
            </div>
            <div class="shop-activity">
                <div class="title">
                    <span>奶茶果汁</span>
                    <span>品质联盟</span>
                </div>
                <div>
                    特价商品29.9元起
                </div>
            </div>
        </section>
        <section class="shop" @click="shopPage">
            <div class="shop-info">
                <div class="logo">
                    <img alt="DQ(广州中华广场店)" class="logo-logo_3S1eSkn_0" src="https://fuss10.elemecdn.com/4/67/2ed98369e2cb177972b437a5e56afpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
                </div>
                <div class="index">
                    <div class="index-item index-item1">
                        <h3>DQ(广州中华广场店)</h3>
                        <span class="right">···</span>
                    </div>
                    <div class="index-item">
                        4.9 月售7单 
                        <span class="right">蜂鸟专送</span>
                    </div>
                    <div class="index-item">
                        <span>20起送|免配送费</span>
                        <span class="right">3.59km|31分钟</span>
                    </div>
                </div>
            </div>
            <div class="shop-activity">
                <div class="title">
                    <span>奶茶果汁</span>
                    <span>品质联盟</span>
                </div>
                <div>
                    特价商品29.9元起
                </div>
            </div>
        </section>
    </section>
</template>
<script>
export default{
    methods:{
        shopPage(){
            this.$router.push('/home');
        }
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .shoplist{
        margin-bottom:1rem;
    }
    .shop{
        padding:.4rem 0;
        border-bottom: .013333rem solid #eee;
    }
    .shop-info{
        display: flex;
        display: -webkit-flex;
        padding: 0 .25rem;
    }
    .logo{
        width:1.5rem;
        height:1.5rem;
        flex:none;
        img{
            box-sizing: border-box;
            width:100%;
            height:100%;
            border: .013333rem solid rgba(0,0,0,.08);
            // border-radius: .053333rem;
        }
    }
    .index{
        text-align:left;
        padding-left:.25rem;
        flex:auto;
        .index-item{
            position:relative;
            margin-bottom:pxToRem(4);
            .right{
                position: absolute;
                right:0;
                top:50%;
                transform: translateY(-50%);
            }
        }
        .index-item1{
            font-size:pxToRem(14);
        }
    }
    .shop-activity{
        padding-left:2rem;
        text-align:left;
        .title{
            margin-top: pxToRem(6);
            margin-bottom: pxToRem(6);
            span{
                margin-right:pxToRem(6);
                border:1px solid #eee;
                padding:pxToRem(1) pxToRem(1);
            }
        }
    }
</style>