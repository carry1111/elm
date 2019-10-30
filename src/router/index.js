import Vue from "vue";
import Router from "vue-router";
import store from '../store'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      // redirect: { name: 'page' },
      component: () =>import("@/pages/page/page.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () =>import("@/pages/home/home.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () =>import("@/pages/order/order.vue"),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () =>import("@/pages/checkout/checkout.vue"),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>import("@/pages/profile/profile.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>import("@/pages/login/login.vue"),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>import("@/pages/about/about.vue"),
    },
    {
      path: '/search',
      name: 'search',
      component: () =>import("@/pages/search/search.vue"),
    },
    {
      path: '/discover',
      name: 'discover',
      component: () =>import("@/pages/discover/discover.vue"),
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.name=='page' || to.name=='discover' || to.name=='profile' ||to.name=='order'){
    store.dispatch('CHANGE_FOOT_SHOW',true);
  }else{
    store.dispatch('CHANGE_FOOT_SHOW',false);
  }
  next();
})

export default router;
