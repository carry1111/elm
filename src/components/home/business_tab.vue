<template>
    <div id="business_tab">
        <ul class="nav clearfix">
            <li class="li" @click="index=1">
                <p :class="{item: true,jiacu: index == 1}">
                    点餐<span :class="{tab: index == 1}"></span>
                </p>
            </li>
            <li class="li" @click="index=2">
                <p :class="{item: true,jiacu: index == 2}">
                    评价<span :class="{tab:index==2}"></span>
                </p>
            </li>
            <li class="li" @click="index=3">
                <p :class="{item: true,jiacu: index == 3}">
                    商家<span :class="{tab:index==3}"></span>
                </p>
            </li>
        </ul>
        <order v-show="index==1"></order>
        <evaluate v-show="index==2"></evaluate>
        <business v-show="index==3"></business>
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
    @import "./../../assets/less/common.less";
    #business_tab{
        z-index:1;
        background:#fff;
        min-height:100%;
        position: relative;
        .nav{
            width:100%;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            position: sticky;
            position: -webkit-sticky;
            left:0;
            top:0;
            right:0;
            z-index:2;
            background-color:#fff;
            .h(37.5);
            .lh(37.5);
            .fs(16);
            // margin:0 auto;
            padding:0 .4rem;
            .li{
                width:33.3%;
                float:left;
                .item{
                    display: inline-block;
                    position: relative;
                    color: #333;
                    .tab{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        .h(2.5);
                        background-color: rgb(35, 149, 255); 
                    }
                }
                .jiacu{
                    font-weight: 700;
                }
            }
        }
    }
    
</style>

