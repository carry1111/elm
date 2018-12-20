<template>
    <div>
        <ul class="nav clearfix">
            <li class="li">
                <router-link to="order" tag="span">点餐</router-link>
            </li>
            <li class="li">
                <router-link to="evaluate" tag="span">评价</router-link>
            </li>
            <li class="li">
                <router-link to="business" tag="span">商家</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='less' scoped>
    .nav{
        width:80%;
        margin:0 auto;
        .li{
            width:33.3%;
            float:left;
        }
    }
</style>

