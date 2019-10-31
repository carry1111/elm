<template>
  <div class="home">
    <businessJieshao></businessJieshao>
    <business-tab></business-tab>
  </div>
</template>

<script>
import businessJieshao from './components/business_jieshao'
import businessTab from './components/business_tab'
import bus from '@/assets/js/bus.js'
export default {
  name: "home",
  components: {
    businessJieshao,
    businessTab
  }
};
</script>

<style lang="less" scoped>

</style>

