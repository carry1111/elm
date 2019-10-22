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
      path: '/discover',
      name: 'discover',
      component: () =>import("@/views/Discover.vue"),
    }
  ]
});
