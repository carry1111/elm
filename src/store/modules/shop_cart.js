const state = {
    cartList: [] //加入购物车的商品列表
}
const getters = {}
const mutations = {
    ADD_CART_MU(state,argument){
        var cartList = state.cartList;
        for(var i = 0; i<cartList.length; i++){
            if(cartList[i].id === argument.id){
                cartList[i]['num'] += 1;
                return;
            }
        }
        state.cartList.push(argument);
    },
    REMOVE_CART_MU(state,argument){
        var cartList = state.cartList;
        for(var i = 0; i<cartList.length; i++){
            if(cartList[i].id === argument.id){
                if(cartList[i].num>1){
                    cartList[i]['num'] -= 1;
                }else{
                    cartList.splice(i,1);
                }
                return;
            }
        }
    },
    CLEAR_CART_MU(state){
        var len = state.cartList.length;
        state.cartList.splice(0,len);
    },
}
const actions = {
    ADD_CART({commit},argu){
        commit('ADD_CART_MU',argu);
    },  
    REMOVE_CART({commit},argu){
        commit('REMOVE_CART_MU',argu);
    },
    CLEAR_CART({commit}){
        commit('CLEAR_CART_MU');
    },
}
export default {
    state,
    getters,
    mutations,
    actions
}
