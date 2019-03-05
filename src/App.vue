<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/common.scss';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 0.3rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
