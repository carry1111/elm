<template>
    <span class="count" 
    v-show="num > 0" 
    v-text="num">
    </span>
</template>
<script>
export default {
    name: 'count',
    props:{
        num:{
            type: Number,
            default: 0,
        }
    }
}
</script>
<style lang="less" scoped>
    @import "./../../assets/less/common.less";
    .count{
        display: inline-block;
        min-width: .4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        color: #fff;
        .fs(12);
        border-radius: .2rem;
        background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    }   
</style>