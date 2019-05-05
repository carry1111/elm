<template>
    <div id="evaluate">
        <div class="score">
            <div class="score-item score-num">4.6</div>
            <div class="score-item score-start">
                <span class="txt">商家评分</span>
                <span class="num">4.6</span>
            </div>
            <div class="score-item score-taste">
                <span class="txt">味道</span>
                <span class="num">4.2</span>
            </div>
            <div class="score-item score-packing">
                <span class="txt">包装</span>
                <span class="num">4.6</span>
            </div>
            <div class="score-item score-delivery">
                <span class="txt">配送</span>
                <span class="num">4.6</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'evaluate',
}
</script>

<style lang="scss" scoped>
    @function pxToRem($px){
        @return ($px / 37.5) * 1rem;
    }
    #evaluate{
        background-color: #f5f5f5;
        height: 100%;
    }
    .score{
        padding: pxToRem(10) 0;
        height: pxToRem(70);
        margin-bottom: pxToRem(10);
        background-color: #fff;
    }
    .score-item{
        float: left;
        width: 20%;
        padding: pxToRem(10) 0;
    }
    .score-num{
        font-size: pxToRem(40);
        color: #ff6000;
    }
    .score-start,
    .score-taste,
    .score-packing,
    .score-delivery{
        span{
            display: block;
            padding: pxToRem(2) 0;
        }
        .txt{

        }
        .num{
            font-size: pxToRem(18);
        }
    }
    .score-start{
        
    }
    .score-taste{

    }
    .score-packing{

    }
    .score-delivery{

    }
</style>