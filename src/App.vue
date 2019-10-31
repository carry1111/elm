<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
    <foot-one v-show="isShowFoot"></foot-one>
  </div>
</template>

<script>
import footOne from '@/components/common/foot_one.vue'
import { mapState } from 'vuex'
export default {
  components: {
    footOne,
  },
  computed: {
    ...mapState({
      isShowFoot: state => state.common.isShowFoot
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 0.3rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
