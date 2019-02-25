import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/assets/css/reset.css'; 
<<<<<<< HEAD
import '@/assets/css/common.css';

Vue.config.productionTip = false;

require('./mock')

=======

Vue.config.productionTip = false;

>>>>>>> 9aa6a9895a647ce05f11f4dce9d9d5357a858748
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
