<template>
    <div id="business_introduction" v-show="isShowjieshao">
        <div class="shop_head">
            <span class="shop_photo"></span>
            <span class="guanzhu"></span>
        </div>
        <div class="shop_name">
            <h2>{{result.business_name}}</h2>
            <p><span>评价{{result.score}}</span><span>月售{{result.monthly_sales_volume}}</span><span>商家配送约{{result.delivery_time}}分钟</span></p>
        </div>
        <div class="container">
            <div class="content">
                <h5>优惠</h5>
                <ul>
                    <li>特价 特价商品9.9元起</li>
                    <li>折扣 折扣商品5折起</li>
                    <li>首单 新用户下单立减17元(不与其他活动同享)</li>
                </ul>
            </div>
            <div class="content">
                <h5>服务</h5>
                <p>开发票 该商家支持开发票，请在下单时填写好发票抬头</p>
            </div>
            <div class="content">
                <h5>公告</h5>
                <p>本餐厅不使用饿了么配送，由肯德基宅急送官方品牌配送，会员用户无法享受免配送费服务</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/home'
import Bus from '@/assets/js/bus.js'
export default {
    name:'business_introduction',
    data(){
        return {
            result:{},
            isShowjieshao:true,
        }
    },
    methods:{
        test(){
            api.getBusinessInfo().then(res=>{
                // console.log(res);
                this.result = res.data;
            }).catch(err=>{
                console.log(err);
            })
        },
        showOrder(){
            Bus.$emit('showOrder');
        }
    },
    mounted(){
        this.test();
        Bus.$on('addposition',()=>{
            this.isShowjieshao = false;
        })
        Bus.$on('removePosition',()=>{
            this.isShowjieshao = true;
        })
    }
}
</script>

<style lang="scss" scoped>
    #business_introduction{
        position: relative;
        background-color: #fff;
    }
    .shop_head{
        position: relative;
        .shop_photo{
            display: inline-block;
            width:60px;
            height:60px;
            margin-top:-30px;
            background:#ddd;
        }
        .guanzhu{
            display: inline-block;
            width:40px;
            height:40px;
            border-radius: 20px;
            position:absolute;
            right:20px;
            top:-20px;
            background:#ddd;
        }
    }
    .shop_name{
        text-align: center;
    }
    .container{
        padding-left: .2rem;
        .content{
            text-align: left;
            margin-bottom: .1rem;
        }
    }
</style>


