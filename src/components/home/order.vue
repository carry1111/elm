<template>
    <div id="order">
        <div class="content">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li v-for="(item,index) in goodsList" 
                    :key=index 
                    :class="{li:true,active:index==currentMenuIndex}"
                    @click="selectMenu(index,$event)">
                        <span>{{item.name}}</span>
                        <count :num="itemSelectNumArray[index]" class="itemSelect"></count>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodsWrapper">
                <ul>
                    <li v-for="(item,index1) in goodsList" 
                        :key=index1 
                        class="li"
                        ref="foodsList">
                        <div class="item-title">
                            <strong class="item-name">{{item.name}}</strong>
                            <span class="item-desc" v-show="index1==0">大家喜欢吃,才是真好吃</span>
                        </div>
                        <ul>
                            <li v-for="(food,index2) in item.foods"
                                :key=index2 
                                class="parent">
                                <img class="left" src="//fuss10.elemecdn.com/8/78/193b76455b54bbd4e9dfdb0b88a2cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/">
                                <div class="center">
                                    <p class="food-name"><strong>{{food.name}}</strong></p>
                                    <p><span class="sell-count">月售{{food.sellCount}}</span></p>
                                    <span class="food-price">${{food.price}}</span>
                                </div>
                                <div class="right">
                                    <i class="reduce" @click="remove_cart(food.id,food.price,food.name,index1,index2)" v-show="selectNumArray[index1][index2]"></i>
                                    <span class="num" v-text="selectNumArray[index1][index2]" v-show="selectNumArray[index1][index2]"></span>
                                    <i class="add" @click="add_cart(food.id,food.price,food.name,index1,index2)"></i>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <shop-cart :price="totalPrice" :num="totalNum"></shop-cart>
    </div>
</template>

<script>
import api from '@/api/goods'
import BScroll from 'better-scroll'
import shopCart from '@/components/home/shop_cart.vue'
import count from '@/components/basic/count.vue'
import response from '@/assets/data/goods.json'
import {mapState,mapActions} from 'vuex'
import Bus from '@/assets/js/bus.js'
const ERR_OK = 0;
export default {
    name:'order',
    data(){
        return{
            goodsList: [],
            listHeight: [],
            scrollY: 0,
            totalPrice: 0,
            isShowReduce: false,
            selectNumArray: [],
            itemSelectNumArray: [],
            totalNum: 0,
        }
    },
    computed:{
        ...mapState({
            'cartList': state => state.shop_cart.cartList,
        }),
        currentMenuIndex() {
            let len = this.listHeight.length; 
            for (let i = 0; i < len; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i;
                }
            }
            return 0;
        },
    },
    methods:{
        ...mapActions([
            'ADD_CART','REMOVE_CART',
        ]),
        getGoodsList(){
            api.getGoodslist().then(res=>{

            }).catch(err=>{
                console.error(err);
            })
        },
        initSelectNum(){
            this.goodsList.forEach((value)=>{
                var len = value.foods.length;
                var subArr = [];
                this.itemSelectNumArray.push(0);
                for(var i=0; i<len; i++){
                    subArr.push(0);
                }
                this.selectNumArray.push(subArr);
            })
        },
         _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true,
            });
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                click: true,
                probeType: 3
            });
            this.foodsScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        _calculateHeight() {
            let foodsList = this.$refs.foodsList;
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < foodsList.length; i++) {
                let item = foodsList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        selectMenu(index1,event){
            var foodsList = this.$refs.foodsList;
            var el = foodsList[index1];
            this.foodsScroll.scrollToElement(el,300);
        },
        add_cart(id,price,name,index1,index2){
            this.totalPrice += price;
            this.selectNumArray[index1][index2] += 1;
            this.itemSelectNumArray[index1] += 1;
            this.totalNum +=1; 
            this.ADD_CART({'id':id,'name':name,'price':price,'num':1});
        },
        remove_cart(id,price,name,index1,index2){
            this.totalPrice -= price;
            this.selectNumArray[index1][index2] -= 1;
            this.itemSelectNumArray[index1] -= 1;
            this.totalNum -= 1;
            this.REMOVE_CART({'id':id,'name':name,'price':price,'num':1});
        }
    },
    created(){
        if (response.error === ERR_OK) {
            this.goodsList = response.goodsList;
            this.$nextTick(() => {
                setTimeout(()=>{
                    this._initScroll();
                    this._calculateHeight(); 
                },0)
            });
        }
        this.initSelectNum(); 
    },
    mounted(){
        Bus.$on('clear_cart_bus',()=>{
            this.selectNumArray = [];
            this.itemSelectNumArray = [];
            this.totalNum = 0;
            this.initSelectNum();
        }),
        Bus.$on('add_cart',()=>{
            this.totalNum += 1;
        })
        Bus.$on('reduce_cart',()=>{
            this.totalNum -= 1;
        })
    },
    components:{
        shopCart,
        count,
    }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .content{
        display: flex;
        display: -webkit-flex;
        text-align: left;
        position: absolute;
        top: 4rem;
        bottom: 1.3rem;
        font-size: pxToRem(16);
        width: 100%;
        overflow: hidden;
        flex: 1;
    }
    .menu-wrapper{
        flex: 0 0 2.4rem;
        background: #f3f5f7;
        .li{
            height: pxToRem(40);
            line-height: pxToRem(40);
            padding-left: pxToRem(2);
            position: relative;
            .itemSelect{
                position: absolute;
                top: .1rem;
                right: .1rem;
            }   
        }
        .active{
            background: #fff;
        }
    }
    .foods-wrapper{
        flex: 1;
        .item-title{
            font-size: pxToRem(12);
            height: pxToRem(16);
            padding:.2rem .05rem;
            background-color: #f5f5f5;
            .item-name{
                margin-right: pxToRem(4);
            }
            .item-desc{
                color: #999;
                @include textflow
            }
        }
        .parent{
            position: relative;
            display: flex;
            height: pxToRem(120);
            padding: .3rem 0;
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
        }
        .reduce,.add,.num{
            display: inline-block;
            vertical-align: middle;
        }
        .reduce{
            font-size: pxToRem(24);
        }
        .add{
            color: blue;
            font-size: pxToRem(28);
        }
    }

</style>