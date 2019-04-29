<template>
  <div class="topback">
      <div class="back" @click="back">
          <img class="img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=">
      </div>
      <h1>关于我们</h1>
  </div>
</template>

<script>
export default {
    name: "topback",
    methods:{
        back(){
            this.$router.back();
        }
    },
    mounted(){
    }
};
</script>

<style lang="scss" scoped>
    .topback{
        position: relative;
        height: 1.2rem;
        line-height:1.2rem;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        color:#fff;
        font-size:9px;
    }
    .back{
        position:absolute;
        top:0;
        left:0;
        width:1rem;
        height:1.2rem;
        text-align: center;
        .img{
            position:absolute;
            top:50%;
            margin-top:-.2rem;
            width:.3rem;
            height:.4rem;
        }
    }
    .topback h1{
        
    }
</style>

