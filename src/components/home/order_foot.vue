<template>
    <footer class="footer">
        <span :class="{gouwuche: true,bg1: num == 0,bg2: num > 0}">
            <count class="count" :num="num"></count>
        </span>
        <div class="money">
            <p v-show="price != 0" class="price">{{price}}</p>
            <p v-show="price == 0">未选购商品</p>
            <p>另需配送费1元</p>
        </div>
        <span :class="{qisong: true,jiesuan: price >= 100}" v-text="this.text1"></span>
    </footer>    
</template>
<script>
import count from '@/components/basic/count.vue'
export default {
    data(){
        return{
            selfPrice: 0,
        }
    },
    computed:{
        text1(){
            if(this.price == 0){
                return "￥100起送";
            }else if(this.price > 100){
                return "去结算";
            }else{
                return "还差￥" + (100-this.price) + "起送";
            }
        }
    },
    props:{
        price:{
            type: Number,
            default: 0,
        },
        num:{
            type: Number,
            default: 0,
        }
    },
    components:{
        count,
    }
}
</script>
<style lang="less" scoped>
    @import "./../../assets/less/common.less";
    .bg2{
        background-color: #3190e8;
    }
    .bg1{
        background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
    }
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 1.3rem;
        background-color: rgba(61,61,63,.9);
        color: #fff;
        text-align: left;
        .gouwuche{
            position: absolute;
            left: .3rem;
            top: -0.3rem;
            z-index: 3;
            width: 1.1rem;
            height: 1.1rem;
            border: .12rem solid rgba(61,61,63,.9);
            border-radius: 100%;
            // background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
                // background-color: #3190e8;
            // background-color :#38ca73;
            // color: #f00;
            // opacity: .8rem;
            // .fs(40);
            &::before{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: url(./../../assets/images/gouwuche.png) 50% no-repeat;
                background-size: .6rem;
                content: "";
            }
            .count{
                position: absolute;
                top: -.1rem;
                right: -.1rem;
            }
        }
        .money{
            position: absolute;
            left: 2rem;
            top: 0;
            height: 1.2rem;
            padding: .2rem 0;
            box-sizing: border-box;
            .price{
                .fs(16);
            }
        }
        .qisong,.jiesuan{
            position: absolute;
            right: 0;
            top: 0;
            width: 26%;
            line-height: 1.4rem;
            text-align: center;
        }
        .jiesuan{
            .fs(16);
            background-color: #38ca73;
            color: #fff;
            font-weight: 600;
        }
    }
</style>


