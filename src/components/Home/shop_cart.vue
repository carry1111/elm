<template>
    <footer class="footer">
        <div class="show-cart">
            <div class="cart-left" @click="show_cart">
                <span :class="{gouwuche: true,bg1: num == 0,bg2: num > 0}">
                    <count class="count" :num="num"></count>
                </span>
                <div class="money">
                    <p v-show="price != 0" class="price">{{price}}</p>
                    <p v-show="price == 0">未选购商品</p>
                    <p>另需配送费1元</p>
                </div>
            </div>
            <span :class="classObj" v-text="this.text1" @click="checkout"></span>
        </div>
        <div class="shop-cart" v-show="is_show_cart" @click="hide_cart"></div>
        <div class="cart" v-show="is_show_cart">
            <div class="title">
                <span class="l">已选商品</span>
                <span class="r" @click="clear_cart">清空</span>
            </div>
            <ul class="cart-list">
                <li class="item clearfix" v-for="(item,index) in this.cartList" :key="index">
                    <span class="food-name">{{item['name']}}</span>
                    <add-cart class="food-num" :num="item.num" :food="item" @add="add_cart" @reduce="reduce_cart"></add-cart>
                    <!-- <span class="food-num">{{item['num']}}</span> -->
                    <span class="food-price">{{item['price']}}</span>
                </li>
            </ul>
        </div>
    </footer>    
</template>
<script>
import count from '@/components/basic/count.vue'
import addCart from '@/components/home/add_cart.vue'
import {mapState,mapActions} from 'vuex'
import Bus from '@/assets/js/bus.js'
export default {
    data(){
        return{
            selfPrice: 0,
            is_show_cart: false,
            classObj: {
                qisong: true,
                jiesuan: this.price >= 100
            }
        }
    },
    watch:{
        num(newV,oldV){
            if(newV === 0){
                this.is_show_cart = false;
            }
        }
    },
    computed:{
        ...mapState({
            'cartList': state => state.shop_cart.cartList,
        }),
        text1(){
            if(this.price == 0){
                return "￥100起送";
            }else if(this.price >= 100){
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
    methods:{
        ...mapActions([
            'CLEAR_CART','ADD_CART','REMOVE_CART',
        ]),
        show_cart(){
            if( this.num > 0){
                this.is_show_cart = !this.is_show_cart;
            }
        },
        hide_cart(){
            this.is_show_cart = false;
        },
        clear_cart(){
            Bus.$emit('clear_cart_bus');
            this.CLEAR_CART();
        },
        checkout(){
            if(this.price >= 100){
                this.$router.push('checkout');
            }
        },
        add_cart(food){
            this.ADD_CART({'id':food.id,'name':food.name,'price':food.price,'num':1});
            Bus.$emit('add_cart',food);
        },
        reduce_cart(food){
            this.REMOVE_CART({'id':food.id,'name':food.name,'price':food.price,'num':1});
            Bus.$emit('reduce_cart',food);
        }
    },
    components:{
        count,
        addCart,
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    @mixin absolute1{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: pxToRem(50);
        z-index:200;
        background-color: rgb(61,61,63);
        color: #fff;
        text-align: left;
    }
    .show-cart{
        height: pxToRem(44);
    }
    .cart-left{
        width: 74%;
        height: pxToRem(44);
        margin-right: 26%；
    }
    .gouwuche{
        position: absolute;
        left: .3rem;
        top: -0.3rem;
        z-index: 3;
        width: 1.1rem;
        height: 1.1rem;
        border: .12rem solid rgba(61,61,63,.9);
        border-radius: 100%;
        .count{
            position: absolute;
            top: -.1rem;
            right: -.1rem;
        }
    }
    .bg2{
        background-color: #3190e8;
        &::before{
            @include absolute1;
            background: url(./../../assets/images/gouwuche2.png) 50% no-repeat;
            background-size: .6rem;
            content: "";
        }
    }
    .bg1{
        background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
        &::before{
            @include absolute1;
            background: url(./../../assets/images/gouwuche1.png) 50% no-repeat;
            background-size: .6rem;
            content: "";
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
            font-size: pxToRem(16);
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
        font-size: pxToRem(16);
        background-color: #38ca73;
        color: #fff;
        font-weight: 600;
    }
    .shop-cart{
        position: fixed;
        left:0;
        top:0;
        right: 0;
        bottom: pxToRem(50);
        width: 100%;
        background-color: #000;
        opacity: .4;
        color: #000;
        // z-index: 99999;
    }
    .cart{
        position: absolute;
        bottom: pxToRem(50);
        left: 0;
        width: 100%;
        background-color: #fff;
        opacity: 1;
        color: #000;
        .title{
            position: relative;
            height: pxToRem(40);
            line-height: pxToRem(40);
            font-size: pxToRem(16);
            background-color: #eceff1;
            color: #666;
            .l{
                position: absolute;
                left: pxToRem(10);
                top: 0;
            }
            .r{
                position: absolute;
                right: pxToRem(10);
                top: 0;
            }
        }
        .cart-list{
            li{
                height: pxToRem(40);
                line-height: pxToRem(40);
                font-size: pxToRem(16);
                .food-name{
                    float: left;
                    box-sizing: border-box;
                    width: 60%;
                    padding-left: pxToRem(10);
                }
                .food-price{
                    float: right;
                    width: 20%;
                    color: rgb(255, 83, 57);
                    font-weight: 700;
                }
                .food-num{
                    float: right;
                    width: 20%;
                }
            }
        }
    }
</style>


