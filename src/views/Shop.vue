<template>
    <div class="shop" ref="shop">
        <div ref="jieshao">
            <shopjieshao></shopjieshao>
        </div>
        <!-- <sticky class="tab"> -->
            <tab class="tab">
                <tab-item selected @on-item-click="onItemClick(1)">点餐</tab-item>
                <tab-item @on-item-click="onItemClick(2)">评价</tab-item>
                <tab-item @on-item-click="onItemClick(3)">商家</tab-item>
            </tab>
        <!-- </sticky> -->
        <div>
            <div class="banner">
                <img alt="" class="img" src="//fuss10.elemecdn.com/6/0b/75f9d0f75889f360c7f67830c1602png.png?imageMogr/format/webp/thumbnail/686x/">
            </div>
            <order></order>
        </div>
        <!-- <evaluate v-show="index==2"></evaluate>
        <business v-show="index==3"></business> -->
    </div>
</template>
<script>
import { Sticky, Tab, TabItem } from 'vux'
import BScroll from 'better-scroll'
import shopjieshao from '@/components/shop/business_introduction.vue'
import business from '@/components/shop/business.vue'
import evaluate from '@/components/shop/evaluate.vue'
import order from '@/components/shop/order.vue'
import Bus from '@/assets/js/bus.js'
export default{
    data(){
        return{
            index:1,
            jieshaoHeight:0,
        }
    },
    methods:{
        onItemClick(i){
            this.index = i;
        },
         _initScroll() {
            this.shopScroll = new BScroll(this.$refs.jieshao, {
                scrollY: true,
                click: true,
            });
            this.shopScroll.on('scroll', (pos) => {
                console.log('ddd');
                var scrollY = Math.abs(Math.round(pos.y));
                if(scrollY >= this.jieshaoHeight){
                    Bus.$emit('addposition');
                }
            });
        },
        _calculateHeight(){
            this.jieshaoHeight = this.$refs.jieshao.clientHeight;
        },
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= this.jieshaoHeight + 220){
                Bus.$emit('addposition');
            }
        }
    },
    components:{
        'sticky':Sticky,
        'shopjieshao':shopjieshao,
        'tab':Tab,
        'tabItem':TabItem,
        'order':order,
        'evaluate':evaluate,
        'business':business
    },
    created(){
        // this.$nextTick(() => {
        //     setTimeout(()=>{
        //         this._initScroll();
        //         this._calculateHeight();
        //     },0)
        // });
    },
    mounted(){
        // this.jieshaoHeight = this.$refs.jieshao.clientHeight;
        // window.addEventListener('scroll',this.handleScroll);
    }
}
</script>
<style lang="scss" scoped>
    .tab{
        width:100%;
        background-color:#fff;
        position: sticky;
        top: 0px;
        z-index: 2;
    }
    .banner{
        padding-top:.1rem;
        .img{
            width:9.4rem;
            height:2.6rem;
            padding:0 .1rem;
        }
    }
</style>