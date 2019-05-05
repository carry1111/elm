<template>
  <div class="about">
      <!-- <topback></topback>
      <div class="markdown">
          <h3>公司</h3>
          <p>上海拉扎斯信息科技有限公司</p>
          <h3>地址</h3>
          <p>上海市普陀区金沙江路1518弄近铁城市广场401室</p>
          <h3>电话</h3>
          <p>(021) 8024-1717</p>
      </div>  -->
  </div>
</template>

<script>
import topback from '@/components/basic/topback.vue'
export default {
    name: "about",
    components:{
        topback,
    }
};
</script>

<style lang="scss" scoped>
    .markdown{
        text-align:left;
        padding:.3rem;
        h3{
            margin-top:.35rem;
            margin-bottom:.1rem;
            font-weight: 700;
            font-size:.4rem;
        }
        p{
            margin:.2rem 0;
            font-size:13px;
        }
    }
</style>

