import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      // redirect: { name: 'business_tab' },
      component: Home,
    },
    {
      path: "/business_tab",
      name: "business_tab",
      component: () =>import("@/components/home/business_tab.vue"),
      
      children:[
        {
          path: "/order",
          name: "order",
          component: () =>import("@/components/home/order.vue"),
        },
        {
          path: "/evaluate",
          name: "evaluate",
          component: () =>import("@/components/home/evaluate.vue"),
        },
        {
          path: "/business",
          name: "business",
          component: () =>import("@/components/home/business.vue"),
        },
      ]
    },
    // {
    //   path: "/order1",
    //   name: "order",
    //   component: () =>import("@/components/home/order.vue"),
    // },
  ]
});
