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
                                    <i class="reduce" @click="remove_cart(food.price,index1,index2)" v-show="selectNumArray[index1][index2]"></i>
                                    <span class="num" v-text="selectNumArray[index1][index2]" v-show="selectNumArray[index1][index2]"></span>
                                    <i class="add" @click="add_cart(food.price,index1,index2)"></i>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <order-footer :price="totalPrice" :num="totalNum"></order-footer>
    </div>
</template>

<script>
import api from '@/api/goods'
import BScroll from 'better-scroll'
import orderFooter from '@/components/home/order_foot.vue'
import count from '@/components/basic/count.vue'
export default {
    name:'order',
    data(){
        return{
            goodsList:[
                {
                    name:'优惠',
                    foods:[
                        {name:'皮蛋瘦肉粥',sellCount:8,price:23},
                        {name:'奥堡单人',sellCount:5,price:43},
                        {name:'皮蛋瘦肉粥',sellCount:8,price:73},
                        {name:'奥堡单人',sellCount:5,price:88},
                        {name:'皮蛋瘦肉粥',sellCount:8,price:11},
                        {name:'皮蛋瘦肉粥',sellCount:8,price:23},
                    ],
                },
                {
                    name:'炸鸡啤酒',
                    foods:[
                        {name:'百威啤酒',sellCount:8,price:23},
                        {name:'86元炸鸡啤酒',sellCount:5,price:16},
                        {name:'116元炸鸡啤酒',sellCount:5,price:99},
                    ],
                },
                {
                    name:'夜宵套餐',
                    foods:[
                        {name:'冬菇滑稽粥',sellCount:8,price:12},
                        {name:'葡式蛋挞',sellCount:5,price:11},
                        {name:'八块香辣鸡翅',sellCount:8,price:23},
                        {name:'超级翅桶多人餐',sellCount:5,price:76},
                        {name:'十翅分享桶',sellCount:5,price:16},
                    ],
                },
                {
                    name:'夜宵单品',
                    foods:[
                        {name:'九珍果汁饮料',sellCount:8,price:26},
                        {name:'醇豆浆',sellCount:5,price:41},
                        {name:'安心大油条',sellCount:8,price:23},
                        {name:'芙蓉荟蔬汤',sellCount:5,price:46},
                        {name:'新奥尔良烤翅',sellCount:8,price:23},
                        {name:'香辣鸡腿堡',sellCount:5,price:46},
                        {name:'新奥尔良烤鸡腿堡',sellCount:5,price:46},
                        {name:'1.25升装百事可乐',sellCount:8,price:23},
                        {name:'二块香辣鸡翅炸鸡',sellCount:5,price:46},
                    ],
                },
            ],
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
        add_cart(price,index1,index2){
            this.totalPrice += price;
            this.selectNumArray[index1][index2] += 1;
            this.itemSelectNumArray[index1] += 1;
            this.totalNum +=1; 
        },
        remove_cart(price,index1,index2){
            this.totalPrice -= price;
            this.selectNumArray[index1][index2] -= 1;
            this.itemSelectNumArray[index1] -= 1;
            this.totalNum -= 1;
        }
    },
    created(){
        this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
        })
        this.initSelectNum(); 
    },
    components:{
        orderFooter,
        count,
    }
}
</script>

<style lang="less" scoped>
    @import "./../../assets/less/common.less";
    ._textflow{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content{
        display: flex;
        display: -webkit-flex;
        text-align: left;
        position: absolute;
        top: 1rem;
        bottom: 1.3rem;
        .fs(16);
        width: 100%;
        overflow: hidden;
        flex: 1;
        .menu-wrapper{
            flex: 0 0 2.4rem;
            background: #f3f5f7;
            .li{
                .h(40);
                .lh(40);
                .pl(2);
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
                .ml(8);
                .fs(12);
                padding:.2rem 0;
                .item-name{
                    .mr(4);
                }
                .item-desc{
                    color: #999;
                    ._textflow
                }
            }
            .parent{
                position: relative;
                display: flex;
                .h(120);
                padding:.2rem 0;
                .left{
                    .w(120);
                }
                .center{
                    position: relative;
                    .w(120);
                    .food-name{
                        ._textflow
                    }
                    .sell-count{
                        color:#999;
                        ._textflow;
                        .fs(12);
                    }
                    .food-price{
                        position:absolute;
                        bottom:0;
                    }
                }
                .right{
                    right: .2rem;
                    bottom: .2rem;
                    position: absolute;
                    .reduce{
                        display: inline-block;
                        .w(22);
                        .h(22);
                        background-image: url('./../../assets/images/reduce.png');
                        background-size:22px;
                    }
                    .add{
                        display: inline-block;
                        .w(22);
                        .h(22);
                        background-image: url('./../../assets/images/add.png');
                        background-size:22px;
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
                .fs(24);
            }
            .add{
                color:blue;
                .fs(28);
            }
        }
    }
    
</style>