<template>
  <div class="home">
    <!-- <div style="height:100px;background:#aaa;"></div> -->
    <businessJieshao></businessJieshao>
    <business-tab></business-tab>
  </div>
</template>

<script>
import businessJieshao from '@/components/home/business_jieshao'
import businessTab from '@/components/home/business_tab'
import bus from '@/assets/js/bus.js'
export default {
  name: "home",
  // data(){
  //   return{
  //     isShowTab:false,
  //   }
  // },
  components: {
    businessJieshao,
    businessTab
  },
  // mounted(){
  //   bus.$on('showOrder',()=>{
  //     this.isShowTab = true;
  //   })
  // }
};
</script>

<style lang="less" scoped>

</style>

