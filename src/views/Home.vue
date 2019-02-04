<template>
  <div class="home">
    <!-- <div style="height:100px;background:#aaa;"></div> -->
    <!-- <businessIntroduction></businessIntroduction> -->
    <!-- <businessTab v-show="isShowTab"></businessTab> -->
    <business-tab></business-tab>
  </div>
</template>

<script>
import businessIntroduction from '@/components/home/business_introduction'
import businessTab from '@/components/home/business_tab'
import bus from '@/assets/js/bus.js'
export default {
  name: "home",
  data(){
    return{
      isShowTab:false,
    }
  },
  components: {
    businessIntroduction,
    businessTab
  },
  mounted(){
    bus.$on('showOrder',()=>{
      this.isShowTab = true;
    })
  }
};
</script>

<style lang="less" scoped>

</style>

