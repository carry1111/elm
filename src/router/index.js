import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      // redirect: { name: 'business_tab' },
      component: () =>import("@/views/Home.vue"),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () =>import("@/views/Checkout.vue"),
    },
    {
      path: '/',
      name: 'page',
      component: () =>import("@/views/Page.vue"),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>import("@/views/Profile.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>import("@/views/Login.vue"),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>import("@/views/About.vue"),
    },
    {
      path: '/search',
      name: 'search',
      component: () =>import("@/views/Search.vue"),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () =>import("@/views/Shop.vue"),
    }
    // {
    //   path: "/business_tab",
    //   name: "business_tab",
    //   component: () =>import("@/components/home/business_tab.vue"),
      
    //   children:[
    //     {
    //       path: "/order",
    //       name: "order",
    //       component: () =>import("@/components/home/order.vue"),
    //     },
    //     {
    //       path: "/evaluate",
    //       name: "evaluate",
    //       component: () =>import("@/components/home/evaluate.vue"),
    //     },
    //     {
    //       path: "/business",
    //       name: "business",
    //       component: () =>import("@/components/home/business.vue"),
    //     },
    //   ]
    // },
    // {
    //   path: "/order1",
    //   name: "order",
    //   component: () =>import("@/components/home/order.vue"),
    // },
  ]
});
