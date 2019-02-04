<template>
    <footer class="footer">
        <i class="iconfont icon-gouwuche gouwu"></i>
        <div class="money">
            <p v-show="price != 0" class="price">{{price}}</p>
            <p v-show="price == 0">未选购商品</p>
            <p>另需配送费1元</p>
        </div>
        <span class="jiesuan">$15起送</span>
    </footer>    
</template>
<script>
export default {
    props:{
        price:{
            type:Number,
            default:0,
        }
    }
}
</script>
<style lang="less" scoped>
    @import "./../../assets/less/common.less";
    .footer{
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        width: 100%;
        .h(45);
        background-color: #000;
        opacity: .4;
        color:#fff;
        text-align:left;
        .gouwu{
            position:absolute;
            left:.3rem;
            top:-0.3rem;
            z-index:3;
            color:#f00;
            opacity:.8rem;
            .fs(40);
        }
        .money{
            position:absolute;
            left:2rem;
            top:0;
            height:1.2rem;
            padding:.2rem 0;
            box-sizing: border-box;
            .price{
                .fs(16);
            }
        }
        .jiesuan{
            position: absolute;
            right:0;
            top:0;
            width:20%;
            line-height: 1.2rem;
        }
    }
</style>


