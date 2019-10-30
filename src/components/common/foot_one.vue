<template>
    <div>
        <ul class="foot clearfix">
            <router-link to="/" :class="{li:true,bianse:this.index == 0 }" @click.native="bian0">
                <i class="iconfont icon-SSS"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/discover" :class="{li:true,bianse:this.index == 1 }" @click.native="bian1">
                <i class="iconfont icon-faxian1"></i>
                <span>发现</span>
            </router-link>
            <router-link to="/order" :class="{li:true,bianse:this.index == 2 }" @click.native="bian2">
                <i class="iconfont icon-dingdan"></i>
                <span>订单</span>
            </router-link>
            <router-link to="/profile" :class="{li:true,bianse:this.index == 3 }" @click.native="bian3">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </router-link>
        </ul>
        <div class="gejue"></div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            index:0,
        }
    },
    methods:{
        bian0(){
            this.index = 0;
        },
        bian1(){
            this.index = 1;
        },
        bian2(){
            this.index = 2;
        },
        bian3(){
            this.index = 3;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
    .foot{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        height:1.3rem;
        background-color:#fff;
        z-index: 200;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
        .li{
            float:left;
            width:25%;
            text-align:center;
            padding-top:.24rem;
            color: #8e8e93;
        }
        i{
            font-size:pxToRem(18);
            // display:block;
        }
        span{
            display:block;
        }
        .bianse{
            color: $elemeBlue;
        }
    }
    .gejue{
        height:1.3rem;
    }
</style>