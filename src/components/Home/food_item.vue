<template>
    <div class="parent">
        <img class="left" src="//fuss10.elemecdn.com/8/78/193b76455b54bbd4e9dfdb0b88a2cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/">
        <div class="center">
            <p class="food-name"><strong>{{food.name}}</strong></p>
            <p><span class="sell-count">月售{{food.sellCount}}</span></p>
            <span class="food-price">${{food.price}}</span>
        </div>
        <add-cart class="right" :food="food" :num="num" :index1="index1" :index2="index2" @add="add_cart" @reduce="reduce_cart"></add-cart>
    </div>
</template>
<script>
import addCart from '@/components/home/add_cart.vue'
import Bus from '@/assets/js/bus.js'
export default{
    data(){
        return{
            num:0,
        }
    },
    props:[
        'food',
        'index1',
        'index2',
    ],
    methods:{
        add_cart(food,index1,index2){
            this.num += 1;
            this.$emit('add',food,index1,index2);
        },
        reduce_cart(food,index1,index2){
            this.num -= 1;
            this.$emit('reduce',food,index1,index2);
        }
    },
    components:{
        addCart,
    },
    mounted(){
        Bus.$on('clear_cart_bus',()=>{
            this.num = 0;
        }),
        Bus.$on('add_cart',(food)=>{
            if(this.food.id == food.id){
                this.num += 1;
            }
        })
        Bus.$on('reduce_cart',(food)=>{
            if(this.food.id == food.id){
                this.num -= 1;
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .parent{
        position: relative;
        display: flex;
        height: pxToRem(120);
        padding: .3rem 0;
    }
    .left{
        width: pxToRem(120);
        height: pxToRem(120);
    }
    .center{
        position: relative;
        width: pxToRem(120);
        height: pxToRem(120);
        .food-name{
            @include textflow
        }
        .sell-count{
            color:#999;
            @include textflow;
            font-size: pxToRem(12);
        }
        .food-price{
            position:absolute;
            bottom:0;
        }
    }
    .right{
        right: .4rem;
        bottom: .2rem;
        position: absolute;
        .reduce{
            display: inline-block;
            width: pxToRem(22);
            height: pxToRem(22);
            background-image: url('./../../assets/images/reduce.png');
            background-size:pxToRem(22);
        }
        .add{
            display: inline-block;
            width: pxToRem(22);
            height: pxToRem(22);
            background-image: url('./../../assets/images/add.png');
            background-size:pxToRem(22);
        }
        .num{
            display: inline-block;
            vertical-align: top;
            padding: .08rem .13rem 0;
        }
    }
</style>