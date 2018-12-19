<template>
  <div class="home">
    <div style="height:100px;background:#aaa;"></div>
    <merchantIntroduction></merchantIntroduction>
  </div>
</template>

<script>
import merchantIntroduction from '@/components/Home/merchant_introduction'
export default {
  name: "home",
  components: {
    merchantIntroduction
  }
};
</script>
