<template>
    <div class="right">
        <i class="reduce" @click="remove_cart(food.id,food.price,food.name,index1,index2)" v-show="selectNumArray[index1][index2]"></i>
        <span class="num" v-text="selectNumArray[index1][index2]" v-show="selectNumArray[index1][index2]"></span>
        <i class="add" @click="add_cart(food.id,food.price,food.name,index1,index2)"></i>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    @import 'src/assets/scss/common.scss';
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
</style>