<template>
    <div id="order">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in goodsList" :key=index @click="selectMenu(index,$event)">{{item.name}}</li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li v-for="(item,index) in goodsList" :key=index ref="goodsList">
                    <h3>{{item.name}}</h3>
                    <ul>
                        <li v-for="(food,index) in item.foods" :key=index>
                            <h2>{{food.name}}</h2>
                            <p>月售{{food.sellCount}}</p>
                            <p>${{food.price}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import api from '@/api/goods'
import BScroll from 'better-scroll'
export default {
    name:'order',
    data(){
        return{
            goodsList:[
                {
                    name:'优惠',
                    foods:[
                        {name:'皮蛋瘦肉粥',sellCount:8,price:23},
                        {name:'奥堡单人',sellCount:5,price:46},
                    ],
                },
                {
                    name:'炸鸡啤酒',
                    foods:[
                        {name:'百威啤酒',sellCount:8,price:23},
                        {name:'86元炸鸡啤酒',sellCount:5,price:46},
                        {name:'116元炸鸡啤酒',sellCount:5,price:46},
                    ],
                },
                {
                    name:'夜宵套餐',
                    foods:[
                        {name:'冬菇滑稽粥',sellCount:8,price:23},
                        {name:'葡式蛋挞',sellCount:5,price:46},
                        {name:'八块香辣鸡翅',sellCount:8,price:23},
                        {name:'超级翅桶多人餐',sellCount:5,price:46},
                        {name:'十翅分享桶',sellCount:5,price:46},
                    ],
                },
                {
                    name:'夜宵单品',
                    foods:[
                        {name:'九珍果汁饮料',sellCount:8,price:23},
                        {name:'醇豆浆',sellCount:5,price:46},
                        {name:'安心大油条',sellCount:8,price:23},
                        {name:'芙蓉荟蔬汤',sellCount:5,price:46},
                        {name:'新奥尔良烤翅',sellCount:8,price:23},
                        {name:'香辣鸡腿堡',sellCount:5,price:46},
                        {name:'新奥尔良烤鸡腿堡',sellCount:5,price:46},
                        {name:'1.25升装百事可乐',sellCount:8,price:23},
                        {name:'二块香辣鸡翅炸鸡',sellCount:5,price:46},
                    ],
                },
            ]
        }
    },
    methods:{
        getGoodsList(){
            api.getGoodslist().then(res=>{

            }).catch(err=>{
                console.error(err);
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
        },
        selectMenu(index,event){
            let goodsList = this.$refs.goodsList;
            let el = goodsList[index];
            this.foodsScroll.scrollToElement(el,300);
        }
    },
    mounted(){
        // this.getGoodsList();
        this.$nextTick(() => {
            this._initScroll();
        })
    }
}
</script>

<style lang="less" scoped>
    #order{
        // display: flex;
        display: -webkit-flex;
        // flex-direction: row;
        // flex-direction: -webkit-row;
        text-align: left;
        display: flex;
        position: absolute;
        top: 174px; 
        bottom: 46px;
        width: 100%;
        overflow: hidden;
        .foods-wrapper{
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }
        .menu-wrapper{
            flex: 0 0 80px;
            width: 80px;
            background: #f3f5f7;
        }
    }
</style>