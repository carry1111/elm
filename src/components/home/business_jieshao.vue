<template>
    <header class="jieshao">
        <div class="info">
            <div class="info-photo">
                <div class="photo">
                    <!-- <img src="https://elm.cangdu.org/img/169223a3ea727542.jpg"> -->
                </div>
            </div>
            <div class="info-text">
                <h1>肯德基</h1>
                <p>商家配送/2分钟送达/配送费5元</p>
                <p>公告：欢迎光临，用餐高峰请提前下单，谢谢</p>
            </div>
        </div>
        <div class="huodong">
            <span class="left">满30减5，满60减8（APP专享）</span>
            <span class="right">一个活动</span>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .jieshao{
        position: relative;
        box-sizing: border-box;
        height: 3rem;
        padding: .2rem;
        background-color: #fff;
        &::after{
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 100%;
            border-top: 1px solid #ccc;
            transform: scaleY(0.5);
            -webkit-transform: scaleY(0.5);
        }
    }
    .info{
        text-align: left;
        position: relative;
        &::after,&::before{
            display: table;
            content:'';
        }
        &::after{
            clear:both;
        }
    }
    .info-photo{
        float:left;
    }
    .info-text{
        float:left;
        margin-left: .3rem;
        h1,p{
            margin-bottom: .2rem;
        }
    }
    .photo{
        width: 1.8rem;
        height: 1.8rem;
        background-color: #ccc;
        img{
            width: 1.8rem;
            height: 1.8rem;
        }
    }
    .huodong::after,.huodong::before{
        display: table;
        content:'';
    }
    .huodong::after{
        clear:both;
    }
    .left{
        float:left;
    }
    .right{
        float:right;
    }
</style>