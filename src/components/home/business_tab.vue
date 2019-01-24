<template>
    <div id="business_tab">
        <ul class="nav clearfix">
            <li class="li" @click="index=1">点餐</li>
            <li class="li" @click="index=2">评价</li>
            <li class="li" @click="index=3">商家 </li>
        </ul>
        <business v-show="index==3"></business>
        <evaluate v-show="index==2"></evaluate>
        <order v-show="index==1"></order>
    </div>
</template>

<script>
import business from '@/components/home/business'
import evaluate from '@/components/home/evaluate'
import order from '@/components/home/order'
export default {
    name:'business_tab',
    data(){
        return{
            index:1,
        }
    },
    components:{
        business, 
        evaluate,
        order,
    }
}
</script>

<style lang='less' scoped>
    #business_tab{
        position:relative;
        top:-200px;
        left:0;
        right:0;
        z-index:1;
        background:#fff;
        min-height:100%;
        .nav{
            width:80%;
            margin:0 auto;
            .li{
                width:33.3%;
                float:left;
            }
        }
    }
    
</style>

