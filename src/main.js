import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {} from './assets/js/rem.js';

import '@/assets/css/reset.css'; 
import '@/assets/css/common.css';
import "mint-ui/lib/style.css"

import Vconsole from 'vconsole';
new Vconsole();

Vue.config.productionTip = false;

require('./mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
