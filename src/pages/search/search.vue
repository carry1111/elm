<template>
    <header class="head">
        <div class="back" @click="back">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="searchbox">
            <input type="text" placeholder="输入商家、商品名称">
        </div>
        <div class="searchbtn">
            搜索
        </div>
    </header>
</template>
<script>
export default{
    methods:{
        back(){
            this.$router.back();
        }
    },
}
</script>
<style lang="scss" scoped>
    .head{
        display:flex;
        height:1.4rem;
        justify-content: center;
        align-items:center;
    }
    .back{
        width:1.2rem;
        text-align: center;
        i{
            font-size:16px;
        }
    }
    .searchbox{
        flex:auto;
        background-color: #f8f8f8;
        input{
            box-sizing: border-box;
            width:100%;
            outline:none;
            border:none;
            background-color: #f8f8f8;
            padding:.2rem;
        }
    }
    .searchbtn{
        width:1.2rem;
        font-weight: 700;
        font-size:14px;
    }
</style>