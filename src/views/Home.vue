<template>
  <div class="home">
<<<<<<< HEAD
    <!-- <div style="height:100px;background:#aaa;"></div> -->
    <businessJieshao></businessJieshao>
    <business-tab></business-tab>
=======
    <merchantIntroduction></merchantIntroduction>
>>>>>>> 9aa6a9895a647ce05f11f4dce9d9d5357a858748
  </div>
</template>

<script>
<<<<<<< HEAD
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

=======
import merchantIntroduction from '@/components/Home/merchant_introduction'
export default {
  name: "home",
  components: {
    merchantIntroduction
  }
};
</script>
>>>>>>> 9aa6a9895a647ce05f11f4dce9d9d5357a858748
