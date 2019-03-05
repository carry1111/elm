<template>
    <header class="checkout-header">
        <div class="back" @click="back">
            <img src="./../assets/images/zuo.png">
        </div>
        <h1>确认订单</h1>
    </header>
</template>
<script>
export default {
    name:'checkout',
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/common.scss';
    .checkout-header{
        height: pxToRem(44);
        font-size: pxToRem(18);
        color: #fff;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        .back{
            position: absolute;
            left: 0;
            top: 0;
            width: 10%;
            height: pxToRem(44);
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: pxToRem(22);
                height: pxToRem(22);
            }
        }
        h1{
            height: pxToRem(44);
            line-height: pxToRem(44);
            font-size: 1em;
        }
    }
</style>