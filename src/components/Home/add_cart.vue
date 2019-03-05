<template>
    <div class="add-cart">
        <i class="reduce" @click="reduce_cart(food)"></i>
        <span class="num">{{food.num}}</span>
        <i class="add" @click="add_cart(food)"></i>
        <!-- <i class="reduce" @click="remove_cart(food.id,food.price,food.name,index1,index2)" v-show="selectNumArray[index1][index2]"></i>
        <span class="num" v-text="selectNumArray[index1][index2]" v-show="selectNumArray[index1][index2]"></span>
        <i class="add" @click="add_cart(food.id,food.price,food.name,index1,index2)"></i> -->
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Bus from '@/assets/js/bus.js'
export default {
    name: 'add-cart',
    props:{
        food:{
            type: Object,
            default(){
                return {}
            },
        }
    },
    methods:{
        ...mapActions([
            'ADD_CART','REMOVE_CART',
        ]),
        reduce_cart(food){
            this.REMOVE_CART({'id':food.id,'name':food.name,'price':food.price,'num':1});
            Bus.$emit('reduce_cart');
        },
        add_cart(food){
            this.ADD_CART({'id':food.id,'name':food.name,'price':food.price,'num':1});
            Bus.$emit('add_cart');
        }
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .add-cart{
        // right: .4rem;
        // bottom: .2rem;
        // position: absolute;
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
            // padding: .08rem .13rem 0;
        }
    }
</style>