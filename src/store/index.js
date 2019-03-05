import Vue from 'vue'
import Vuex from 'vuex'
import shop_cart from './modules/shop_cart.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        shop_cart
    }
})

export default store;