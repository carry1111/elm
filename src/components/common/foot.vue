<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="首页" @click.native="toPage">
            <img slot="icon" src="./../../assets/images/eleme.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="发现" @click.native="toFind">
            <img slot="icon" src="./../../assets/images/find.png">
            发现
        </mt-tab-item>
        <mt-tab-item id="订单">
            <img slot="icon" src="./../../assets/images/order.png">
            订单
        </mt-tab-item>
        <mt-tab-item id="我的" @click.native="toMy">
            <img slot="icon" src="./../../assets/images/my.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';
export default{
    data(){
        return{
            "selected":0
        }
    },
    methods:{
        toMy(){
            this.$router.push('/profile');
        },
        toPage(){
            this.$router.push('/');
        },
        toFind(){
            this.$router.push('/home');
        }
    },
    components:{
        "mtTabbar":Tabbar,
        "mtTabItem":TabItem,
    }
}
</script>
<style lang="scss" scoped>

</style>