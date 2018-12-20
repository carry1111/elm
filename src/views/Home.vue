<template>
  <div class="home">
    <div style="height:100px;background:#aaa;"></div>
    <businessIntroduction></businessIntroduction>
  </div>
</template>

<script>
import businessIntroduction from '@/components/home/business_introduction'
import businessTab from '@/components/home/business_tab'
export default {
  name: "home",
  components: {
    businessIntroduction,
    businessTab
  }
};
</script>
